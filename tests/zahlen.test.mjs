// Zahlen-Trainer: Themen, Unterricht (Verstehen), Aufgabenerzeuger, Werkzeuge und Stand je Thema. Die Aufgaben laufen durch die gemeinsame
// Erzeuger-Prüfung (jede Musterlösung muss der Prüfer in mehreren Schreibweisen annehmen).

import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { zufall } from '../src/bereiche/trainer/rahmen/zufall.js';
import { pruefeFeld, runde } from '../src/bereiche/trainer/rahmen/pruefen.js';
import { pruefeErzeuger } from './hilfen/erzeuger.mjs';
import { ladeDaten } from '../tools/inhalt.mjs';
import { TRAINER } from '../src/bereiche/trainer/verzeichnis.js';
import { THEMEN, themaVon, VERWEISE } from '../src/bereiche/trainer/zahlen/themen.js';
import fs from 'node:fs';
import { UNTERRICHT, BEGRIFFE, teilZurArt } from '../src/bereiche/trainer/zahlen/unterricht/index.js';
import { pruefeUnterricht, artenVon } from '../src/bereiche/trainer/lernsystem/struktur.js';
import { ARTEN, artName, erzeugeAufgabe, baueRunde } from '../src/bereiche/trainer/zahlen/aufgaben/index.js';
import { themenStand, FENSTER } from '../src/bereiche/trainer/zahlen/stand.js';
import { leseRechte, symbolisch, leseBasis, gruppiert, passendeEinheit, minSek, restSchritte, divisionsweg, stellen, stellenwertweg, bitGruppen, zaehlwerk, passtSchritte, jeBasis, dreiergruppen, umrechnen, praefixAbstand, zeichenBytes, paritaetOk, asciiZeichen, crc32, eanPruefziffer, rechteAusSchaltern, schalterAusOktal, geltendeKlasse, netzteilWahl, stufenKette, jahresEnergie, anschlussLast, einheitenTreppe, farbeInTiefe, abtasten, hochrechnen, verringert, mehrbedarf, volle } from '../src/bereiche/trainer/zahlen/rechnen.js';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const modi = TRAINER.find((t) => t.id === 'zahlen').modi;
const sp = (thema) => modi.find((m) => m.id === thema).sp[0];

// ---------- Themen ----------

test('Themen: ein Modus je Thema im Verzeichnis, Pflichtfelder, Aufgabenarten', () => {
  assert.deepEqual(
    THEMEN.map((t) => t.id),
    modi.map((m) => m.id),
    'Themen und Modi in derselben Reihenfolge',
  );
  for (const t of THEMEN) {
    assert.ok(t.name && t.icon && t.kurz && t.spickzettel, `${t.id}: Pflichtfeld fehlt`);
    // Visualisieren: Werkzeug oder eigenes Labor · Verstehen: Unterricht oder Erklärung in Blöcken
    assert.ok(t.werkzeug || t.labor, `${t.id}: nichts zum Visualisieren`);
    if (!UNTERRICHT[t.id]) assert.ok(t.erklaerung?.length >= 3 && t.erklaerung.every((b) => b.titel && b.text), `${t.id}: Erklärung unvollständig`);
    assert.ok(t.koennen.length, `${t.id}: keine Kompetenzen`);
    assert.ok(ARTEN[t.id]?.length >= 2, `${t.id}: zu wenige Aufgabenarten`);
    assert.equal(new Set(ARTEN[t.id].map((a) => a.id)).size, ARTEN[t.id].length, `${t.id}: doppelte Aufgabenart`);
    assert.equal(themaVon(t.id), t);
  }
  assert.equal(themaVon('gibt-es-nicht'), null);
  for (const v of Object.values(VERWEISE)) assert.ok(themaVon(v.thema), `Verweis auf unbekanntes Thema ${v.thema}`);
});

test('Themen: Kompetenzen der Stichpunkte sind abgedeckt', () => {
  const daten = ladeDaten(wurzel);
  const koennenVon = (id) => (daten.sp[id]?.koennen ?? []).map(([k]) => k);
  const spIds = [...new Set(modi.flatMap((m) => m.sp))].filter((id) => koennenVon(id).length);
  const abgedeckt = new Set(THEMEN.flatMap((t) => t.koennen));
  // Reines Wissen bleibt dem Lernplan überlassen: ASCII/Binärdatei, analog/digital, Befehlszeile außer chmod.
  // Offen: Übertragung übt nur Dauer und Einheiten, nicht Videostream, Upload-Richtung, Leitung beurteilen, Durchsatz.
  const nichtImTrainer = new Set(['AP1-4-2-1-K6', 'AP1-4-2-2-K10', 'AP1-5-2-3-K1', 'AP1-5-2-3-K2', 'AP1-5-2-3-K4', 'AP1-5-2-3-K6', 'AP1-5-2-3-K7', 'AP1-5-2-3-K8', 'AP1-4-2-4-K3', 'AP1-4-2-4-K4', 'AP1-4-2-4-K5', 'AP1-4-2-4-K7']);
  for (const id of spIds) {
    for (const k of koennenVon(id)) {
      if (nichtImTrainer.has(k)) continue;
      assert.ok(abgedeckt.has(k), `${k} gehört zu keinem Thema`);
    }
  }
});

// ---------- Unterricht ----------

// Ein Test je Thema: Struktur nach den Regeln des Lernsystems (lernsystem/struktur.js, LEITFADEN.md)
const glossar = new Set(JSON.parse(fs.readFileSync(path.join(wurzel, 'inhalt/glossar.json'), 'utf8')).map((b) => b.b));
for (const thema of THEMEN.map((t) => t.id)) {
  test(`Unterricht ${thema}: Kapitel, Lernziele, Begriffe und Aufgabenarten nach den Regeln`, () => {
    const kapitel = UNTERRICHT[thema];
    if (!kapitel) return; // noch kein Unterricht: Verstehen zeigt die Kurz-Erklärung
    const quelltext = fs.readFileSync(path.join(wurzel, `src/bereiche/trainer/zahlen/unterricht/${thema}.jsx`), 'utf8');
    assert.deepEqual(pruefeUnterricht({ kapitel, begriffe: BEGRIFFE[thema], arten: ARTEN[thema], glossar, quelltext }), []);
  });
}

test('Unterricht: Verweis aus dem Lösungsweg', () => {
  assert.equal(teilZurArt('zahlensysteme', 'h2d').kapitel.id, 'hex');
  assert.equal(teilZurArt('zahlensysteme', 'd2b').teil.id, 'schreiben');
  assert.equal(teilZurArt('gibt-es-nicht', 'x'), null);
  assert.deepEqual(artenVon(UNTERRICHT.zahlensysteme.find((k) => k.id === 'hex')), ['b2h', 'h2b', 'h2d', 'd2h']);
});

test('Bilder: Parität, ASCII-Zeichen, CRC-32 und EAN-Prüfziffer', () => {
  const bits = (t) => [...t].map(Number);
  assert.equal(paritaetOk(bits('01101001'), true), true);
  assert.equal(paritaetOk(bits('01001001'), true), false, 'ein gekipptes Bit fällt auf');
  assert.equal(paritaetOk(bits('00001001'), true), true, 'zwei gekippte Bits bleiben unbemerkt');
  assert.equal(paritaetOk(bits('00000001'), false), true);
  assert.equal(asciiZeichen(bits('0110100')), '4');
  assert.equal(asciiZeichen(bits('0110101')), '5');
  assert.equal(asciiZeichen(bits('0000100')), null, 'Steuerzeichen');
  // Prüfwert aus der Norm: CRC-32 von „123456789“ ist CBF43926
  assert.equal(crc32([...'123456789'].map((c) => c.charCodeAt(0))), 0xcbf43926);
  assert.equal(crc32([]), 0);
  assert.equal(eanPruefziffer(bits('400638133393')), 1);
  assert.equal(eanPruefziffer(bits('000000000000')), 0);
});

test('Bilder: Zählwerk und Passt es noch?', () => {
  assert.deepEqual(zaehlwerk(7, 2, 4), ['0', '1', '1', '1']);
  assert.deepEqual(zaehlwerk(8, 2, 4), ['1', '0', '0', '0']);
  assert.deepEqual(zaehlwerk(16, 2, 4), ['0', '0', '0', '0'], 'Überlauf beginnt bei 0');
  assert.deepEqual(zaehlwerk(200, 10, 3), ['2', '0', '0']);

  const s = passtSchritte(200, 8);
  assert.equal(s.map((x) => (x.passt ? 1 : 0)).join(''), '11001000');
  assert.deepEqual(s[1], { stellenwert: 64, rest: 72, passt: true, danach: 8 });
  assert.equal(s[7].danach, 0);
  for (let n = 0; n < 256; n++) assert.equal(parseInt(passtSchritte(n, 8).map((x) => (x.passt ? 1 : 0)).join(''), 2), n);
});

test('Bilder: Bit, Byte und Präfixe', () => {
  assert.deepEqual(dreiergruppen(3.4e9), ['3', '400', '000', '000']);
  assert.deepEqual(dreiergruppen(3500000), ['3', '500', '000']);
  assert.deepEqual(dreiergruppen(12500000), ['12', '500', '000']);
  assert.deepEqual(dreiergruppen(999), ['999']);
  assert.equal(runde(umrechnen(1000, 'GB', 'GiB'), 2), 931.32);
  assert.equal(runde(umrechnen(500, 'GB', 'GiB'), 2), 465.66);
  assert.equal(runde(umrechnen(4, 'GiB', 'GB'), 2), 4.29);
  assert.equal(runde(umrechnen(256, 'MiB', 'MB'), 2), 268.44);
  assert.equal(umrechnen(4096, 'Bit', 'Byte'), 512);
  assert.equal(umrechnen(3, 'MiB', 'KiB'), 3072);
  assert.equal(runde(praefixAbstand(1), 1), 2.4);
  assert.equal(runde(praefixAbstand(3), 1), 7.4);
  assert.equal(runde(praefixAbstand(4), 1), 10);
  assert.deepEqual(zeichenBytes('Hi').map((b) => b.bits), ['01001000', '01101001']);
  assert.equal(zeichenBytes('ä')[0].bits, null);
});

test('Bilder Strom: Netzteil, Stufen, Jahr, Anschluss', () => {
  assert.deepEqual(netzteilWahl([125, 200, 40, 10, 5, 20], 30, [300, 400, 500, 550, 650]), { summe: 400, bedarf: 520, passend: 550 });
  assert.equal(netzteilWahl([350], 20, [300, 400, 420]).passend, 420, 'genau passend reicht');
  assert.equal(netzteilWahl([700], 30, [300, 750]).passend, null);

  const k = stufenKette(1000, [0.9, 0.9]);
  assert.ok(Math.abs(k.eta - 0.81) < 1e-12);
  assert.ok(Math.abs(k.pab - 810) < 1e-9);
  assert.ok(Math.abs(k.stufen[0].verlust - 100) < 1e-9 && Math.abs(k.stufen[1].verlust - 90) < 1e-9);
  assert.ok(Math.abs(stufenKette(500, [0.8]).pab - 400) < 1e-9, 'eine Stufe = ein Netzteil');

  const j = jahresEnergie([{ leistung: 250, stunden: 8 }, { leistung: 60, stunden: 16 }], 250, 0.3);
  assert.equal(j.whTag, 2960);
  assert.equal(j.stunden, 6000);
  assert.equal(j.kwh, 740);
  assert.equal(runde(j.kosten, 2), 222);
  assert.equal(jahresEnergie([{ leistung: 150, stunden: 24 }], 365, 0.3).kwh, 1314);

  assert.deepEqual(anschlussLast([1100, 1100, 500, 1000], 230, 16), { summe: 3700, strom: 3700 / 230, zulaessig: 3680, reicht: false });
  assert.equal(anschlussLast([4.5], 5, 0.9).reicht, true, 'genau an der Grenze reicht');
  assert.equal(anschlussLast([4.5], 5, 0.5).reicht, false);
});

test('Bilder Speicherbedarf: Einheitentreppe, Farbtiefe, Abtasten, Hochrechnen, Prozent, volle Einheiten', () => {
  const t = einheitenTreppe(1382400, 'MiB');
  assert.deepEqual(t.map((s) => s.einheit), ['Bit', 'Byte', 'KiB', 'MiB']);
  assert.deepEqual(t.slice(0, 3).map((s) => s.wert), [1382400, 172800, 168.75]);
  assert.equal(t[1].schritt, '÷ 8');
  assert.equal(t[3].schritt, '÷ 1.024');
  assert.equal(runde(einheitenTreppe(1920 * 1080 * 24, 'MiB')[3].wert, 2), 5.93);
  assert.equal(einheitenTreppe(8).length, 6, 'bis TiB');

  assert.deepEqual(farbeInTiefe([200, 30, 90], 24), [200, 30, 90]);
  assert.deepEqual(farbeInTiefe([200, 30, 90], 1), [0, 0, 0], 'dunkel → schwarz');
  assert.deepEqual(farbeInTiefe([250, 240, 230], 1), [255, 255, 255], 'hell → weiß');
  const grau = farbeInTiefe([120, 120, 120], 4);
  assert.ok(grau[0] === grau[1] && grau[1] === grau[2] && grau[0] % 17 === 0, '16 Graustufen');
  assert.deepEqual(farbeInTiefe([255, 0, 128], 8).map((x) => x > 127), [true, false, true]);
  assert.equal(new Set(Array.from({ length: 256 }, (_, i) => farbeInTiefe([i, 0, 0], 8)[0])).size, 8, '3 Bit Rot = 8 Stufen');

  const proben = abtasten((x) => Math.sin(2 * Math.PI * x), 8, 3);
  assert.equal(proben.length, 8);
  assert.deepEqual(proben.map((p) => p.t), [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875]);
  assert.equal(proben[2].stufe, 7, 'Höchstwert → oberste Stufe');
  assert.equal(proben[6].stufe, 0, 'Tiefstwert → unterste Stufe');
  assert.ok(proben.every((p) => Math.abs(p.gespeichert - p.wert) <= 1 / 8 + 1e-9), 'Fehler höchstens eine halbe Stufe');

  const h = hochrechnen(20, [
    { name: 'Stunde', faktor: 60 },
    { name: 'Tag', faktor: 8 },
    { name: 'Jahr', faktor: 250 },
  ]);
  assert.deepEqual(h.map((x) => x.menge), [1200, 9600, 2400000]);

  assert.equal(runde(verringert(5.9326, 30), 2), 4.15);
  assert.equal(mehrbedarf(16, 24), 50);
  assert.equal(mehrbedarf(8, 24), 200);
  assert.equal(volle(13.0967), 14);
  assert.equal(volle(4), 4);
  assert.equal(volle(4 + 1e-12), 4);
});

// ---------- Aufgaben ----------

test('Aufgaben: jede Art jedes Themas, viele Startwerte, Musterlösung wird angenommen', () => {
  for (const t of THEMEN) {
    for (const a of ARTEN[t.id]) {
      pruefeErzeuger(`${t.id}/${a.id}`, (r) => erzeugeAufgabe(t.id, r, { sp: sp(t.id), arten: [a.id] }));
      for (let s = 1; s <= 20; s++) assert.equal(erzeugeAufgabe(t.id, zufall(s), { sp: sp(t.id), arten: [a.id] }).art, a.id, 'gewählte Art wird gezogen');
    }
    const alle = new Set();
    for (let s = 1; s <= 300; s++) alle.add(erzeugeAufgabe(t.id, zufall(s), { sp: sp(t.id) }).art);
    assert.equal(alle.size, ARTEN[t.id].length, `${t.id}: ohne Auswahl kommen alle Arten vor`);
    assert.equal(erzeugeAufgabe(t.id, zufall(1), { sp: sp(t.id), arten: ['unbekannt'] }).thema, t.id, 'unbekannte Arten werden ignoriert');
  }
  assert.throws(() => erzeugeAufgabe('nix', zufall(1)));
  assert.equal(artName('zahlensysteme', 'd2b'), 'Dezimal → Binär');
});

test('Aufgaben: Zahlensysteme – Aufgabentext und Antwort passen zusammen', () => {
  for (let s = 1; s < 400; s++) {
    const a = erzeugeAufgabe('zahlensysteme', zufall(s), { sp: 'AP1-4-2-1' });
    const d = a.text.match(/Dezimalzahl \*\*([\d.]+)\*\*/);
    if (d) assert.equal(a.felder[0].erwartet, Number(d[1].replace(/\./g, '')));
    const h = a.text.match(/Hexadezimalzahl \*\*([0-9A-F]+)\*\*/);
    if (h) assert.equal(a.felder[0].erwartet, parseInt(h[1], 16));
    const b = a.text.match(/Binärzahl \*\*([01 ]+)\*\*/);
    if (b) assert.equal(a.felder[0].erwartet, parseInt(b[1].replace(/ /g, ''), 2));
    const o = a.text.match(/Oktalzahl \*\*([0-7]+)\*\*/);
    if (o) assert.equal(a.felder[0].erwartet, parseInt(o[1], 8));
  }
});

test('Aufgaben: Stichproben gegen Hand-Rechnung', () => {
  // 1.000 GB → 931,32 GiB
  assert.equal(runde((1000 * 1000 ** 3) / 1024 ** 3, 2), 931.32);
  // Parität: Einsen mit Paritätsbit haben die vereinbarte Parität
  for (let s = 1; s < 300; s++) {
    const a = erzeugeAufgabe('paritaet', zufall(s), { sp: 'PB1-9-1-2', arten: ['bilden'] });
    const daten = a.text.match(/\*\*([01]{7})\*\*/)[1];
    const gerade = a.text.includes('**gerader');
    const einsen = [...daten].filter((c) => c === '1').length + Number(a.felder[0].erwartet);
    assert.equal(einsen % 2, gerade ? 0 : 1);
  }
  // Netzteil: das gewählte Netzteil ist das kleinste über dem Bedarf
  for (let s = 1; s < 100; s++) {
    const a = erzeugeAufgabe('strom', zufall(s), { sp: 'AP1-4-2-3', arten: ['netzteil'] });
    const bedarf = a.felder[1].erwartet;
    const nt = Number(a.felder[2].erwartet);
    assert.ok(nt >= bedarf && nt - bedarf < 100, `${nt} W für ${bedarf} W`);
  }
  // Steckdose und Speicherkarte: Entscheidung eindeutig
  for (let s = 1; s < 100; s++) {
    const st = erzeugeAufgabe('strom', zufall(s), { sp: 'AP1-4-2-3', arten: ['steckdose'] });
    assert.equal(st.felder[2].erwartet, st.felder[1].erwartet > 3680 ? 'ja' : 'nein');
    const sk = erzeugeAufgabe('speicher', zufall(s), { sp: 'AP1-4-2-2', arten: ['reicht'] });
    const karte = Number(sk.text.match(/\*\*(\d+) GB\*\*/)[1]);
    assert.equal(sk.felder[1].erwartet, sk.felder[0].erwartet * 1024 ** 3 <= karte * 1e9 ? 'ja' : 'nein');
  }
  // chmod: symbolische Schreibweise auch mit führendem Strich, Oktalzahl auch mit führender Null
  const z = erzeugeAufgabe('rechte', zufall(7), { sp: 'AP1-5-2-3', arten: ['zuSym'] });
  assert.ok(pruefeFeld(`-${z.felder[0].erwartet}`, z.felder[0]).ok);
  const o = erzeugeAufgabe('rechte', zufall(7), { sp: 'AP1-5-2-3', arten: ['zuOktal'] });
  assert.ok(pruefeFeld(`0${o.felder[0].erwartet}`, o.felder[0]).ok);
  assert.ok(!pruefeFeld('777', { ...o.felder[0], erwartet: '640', erlaubt: ['640'] }).ok);
});

test('Gemischte Runde: jedes Thema kommt mindestens einmal vor, Länge stimmt', () => {
  const themen = THEMEN.map((t) => ({ id: t.id, sp: sp(t.id) }));
  for (let s = 1; s < 50; s++) {
    const folge = baueRunde(themen, 10, zufall(s));
    assert.equal(folge.length, 10);
    assert.equal(new Set(folge.map((f) => f.thema)).size, themen.length);
    assert.ok(folge.every((f) => f.sp));
  }
  assert.equal(baueRunde(themen.slice(0, 2), 3, zufall(1)).length, 3);
});

// ---------- Werkzeuge ----------

test('Werkzeuge: Startwerte rechnen, Unsinn wird gemeldet', () => {
  for (const t of THEMEN.filter((x) => x.werkzeug)) {
    const start = Object.fromEntries(t.werkzeug.felder.map((f) => [f.id, f.start]));
    const erg = t.werkzeug.rechne(start);
    assert.ok(!erg.fehler && erg.zeilen.length && erg.schritte.length, `${t.id}: Werkzeug rechnet mit den Startwerten nicht`);
    for (const f of t.werkzeug.felder) if (f.wahl) assert.ok(f.wahl.some((w) => w.wert === f.start), `${t.id}: Startwert ${f.start} nicht in der Auswahl`);
    const kaputt = t.werkzeug.rechne({ ...start, [t.werkzeug.felder[0].id]: 'abc' });
    assert.ok(kaputt.fehler, `${t.id}: keine Fehlermeldung bei Unsinn`);
  }
  const w = (id, werte) => themaVon(id).werkzeug.rechne(werte);
  assert.equal(w('praefixe', { wert: '1000', einheit: 'GB' }).zeilen[3].wert, '931,32 GiB');
  assert.equal(w('speicher', { breite: '1920', hoehe: '1080', tiefe: '24', anzahl: '1' }).zeilen[3].wert, '5,93');
  assert.equal(w('uebertragung', { menge: '1', einheit: 'GiB', rate: '100' }).zeilen[2].wert, '85,90 s');
  assert.equal(w('strom', { leistung: '150', stunden: '24', tage: '365', preis: '0,30' }).zeilen[3].wert, '394,20 €');
  assert.equal(w('rechte', { rechte: 'rwxr-xr--' }).zeilen[3].wert, 'chmod 754');
  assert.equal(w('paritaet', { bits: '0110100', art: 'gerade' }).zeilen[1].wert, '1');
  assert.equal(w('paritaet', { bits: '0110100', art: 'ungerade' }).zeilen[1].wert, '0');
});

test('Rechenhilfen Dateirechte: Schalter und geltende Klasse', () => {
  const s754 = [true, true, true, true, false, true, true, false, false];
  assert.deepEqual(rechteAusSchaltern(s754), { ziffern: [7, 5, 4], oktal: '754', sym: 'rwxr-xr--' });
  assert.deepEqual(rechteAusSchaltern(Array(9).fill(false)), { ziffern: [0, 0, 0], oktal: '000', sym: '---------' });
  assert.deepEqual(schalterAusOktal('754'), s754);
  for (const o of ['000', '640', '755', '777', '123']) assert.equal(rechteAusSchaltern(schalterAusOktal(o)).oktal, o);
  const datei = { besitzer: 'anna', gruppe: 'personal' };
  assert.equal(geltendeKlasse({ name: 'anna', gruppen: ['personal'] }, datei), 0, 'Besitzer geht vor Gruppe');
  assert.equal(geltendeKlasse({ name: 'ben', gruppen: ['personal'] }, datei), 1);
  assert.equal(geltendeKlasse({ name: 'carla', gruppen: ['vertrieb'] }, datei), 2);
});

test('Rechenhilfen', () => {
  assert.deepEqual(leseRechte('754'), { oktal: '754', sym: 'rwxr-xr--' });
  assert.deepEqual(leseRechte('-rw-r-----'), { oktal: '640', sym: 'rw-r-----' });
  assert.equal(leseRechte('rwx'), null);
  assert.equal(symbolisch('000'), '---------');
  assert.equal(leseBasis('0b1010', 2), 10);
  assert.equal(leseBasis('3Fh', 16), 63);
  assert.equal(leseBasis('102', 2), null);
  assert.equal(gruppiert('1011'), '1011');
  assert.equal(gruppiert('11011'), '0001 1011');
  assert.deepEqual(passendeEinheit(1024 ** 2, ['Byte', 'KiB', 'MiB'], 1024), { stufe: 2, einheit: 'MiB', wert: 1 });
  assert.equal(minSek(85.9), '1 min 26 s');
  assert.equal(minSek(42), '42 s');
  // Restwertverfahren: der erste Rest ist die rechte Ziffer
  assert.deepEqual(restSchritte(200, 16), [
    { x: 200, q: 12, r: 8 },
    { x: 12, q: 0, r: 12 },
  ]);
  assert.equal(
    restSchritte(200, 2)
      .map((s) => s.r)
      .reverse()
      .join(''),
    '11001000',
  );
  assert.deepEqual(restSchritte(0, 2), [{ x: 0, q: 0, r: 0 }]);
  assert.deepEqual(divisionsweg(200, 16), ['200 ÷ 16 = 12 Rest 8', '12 ÷ 16 = 0 Rest C (12)']);
  // Stellenwerte
  assert.deepEqual(
    stellen('c8', 16).map((s) => [s.ziffer, s.potenz, s.stellenwert, s.produkt]),
    [
      ['C', 1, 16, 192],
      ['8', 0, 1, 8],
    ],
  );
  assert.equal(stellenwertweg('11001000', 2), '1·128 + 1·64 + 1·8');
  assert.equal(stellenwertweg('000', 8), '0');
  // Bitgruppen: Vierer = Hex-Ziffern, Dreier = Oktalziffern, links aufgefüllt
  assert.deepEqual(
    bitGruppen(200, 4).map((g) => [g.bits, g.ziffer]),
    [
      ['1100', 'C'],
      ['1000', '8'],
    ],
  );
  assert.deepEqual(
    bitGruppen(200, 3).map((g) => g.ziffer),
    ['3', '1', '0'],
  );
  assert.equal(bitGruppen(200, 3)[0].bits, '011');
  assert.equal(bitGruppen(0xffff, 4).length, 4);
  assert.equal(bitGruppen(5, 4, 4).length, 1, 'mindestens 4 Bit');
  // Dieselbe Ziffernfolge in mehreren Basen
  assert.deepEqual(
    jeBasis('100').map((x) => [x.basis, x.wert]),
    [
      [2, 4],
      [8, 64],
      [10, 100],
      [16, 256],
    ],
  );
  assert.deepEqual(
    jeBasis('19').map((x) => x.wert),
    [null, null, 19, 25],
  );
  assert.equal(jeBasis('1f')[3].weg, '1·16 + 15·1');
  assert.deepEqual(
    jeBasis('G').map((x) => x.wert),
    [null, null, null, null],
  );
  assert.deepEqual(
    jeBasis('').map((x) => x.wert),
    [null, null, null, null],
  );
});

test('Rechenhilfen Übertragung', async () => {
  const { BPS_JE, inBit, minutenUndSekunden } = await import('../src/bereiche/trainer/zahlen/rechnen.js');
  assert.equal(inBit(5, 'MiB'), 41943040);
  assert.equal(inBit(1, 'GiB'), 8589934592);
  assert.equal(inBit(25, 'MB'), 200000000);
  assert.equal(inBit(24, 'Bit'), 24);
  assert.equal(100 * BPS_JE['Mbit/s'], 100000000);
  assert.equal(BPS_JE['Gbit/s'] / BPS_JE['Mbit/s'], 1000);
  assert.deepEqual(minutenUndSekunden(85.9), { ganz: 86, min: 1, sek: 26 });
  assert.deepEqual(minutenUndSekunden(130), { ganz: 130, min: 2, sek: 10 });
  assert.deepEqual(minutenUndSekunden(59.6), { ganz: 60, min: 1, sek: 0 });
});

// ---------- Stand ----------

test('Stand je Thema aus dem Lernstand', () => {
  const ev = (m, ok) => ({ e: 'aufgabe', tr: 'zahlen', m, ok });
  const leer = themenStand([]);
  assert.equal(leer.size, 0);
  const ereignisse = [
    ...Array.from({ length: 12 }, (_, i) => ev('zahlensysteme', i % 3 !== 0)), // zuletzt 10: 7 richtig
    ...Array.from({ length: 5 }, () => ev('strom', true)),
    ev('rechte', true),
    ev('datenmenge', true), // früherer Modus zählt für „speicher“
    { e: 'aufgabe', tr: 'subnetz', m: 'maske', ok: true },
    { e: 'karte', id: 'x' },
  ];
  const stand = themenStand(ereignisse);
  assert.equal(stand.get('zahlensysteme').n, 12);
  assert.equal(stand.get('zahlensysteme').letzte.length, FENSTER);
  assert.equal(stand.get('zahlensysteme').zuletztOk, 7);
  assert.equal(stand.get('zahlensysteme').sicher, false);
  assert.equal(stand.get('strom').sicher, true, '5 von 5 richtig reicht');
  assert.equal(stand.get('rechte').sicher, false, 'zu wenige Aufgaben');
  assert.equal(stand.get('speicher').ok, 1);
  assert.ok(!stand.has('maske'));
});
