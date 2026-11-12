// Tests für die Wichtigkeit je Stichpunkt (src/daten/wichtigkeit.js), mit Hand-Beispielen aus den Zuordnungen.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ladeDaten } from '../tools/inhalt.mjs';
import { baueIndex } from '../src/daten/index.js';
import {
  STUFEN,
  stufeFuer,
  grenzenFuer,
  terminName,
  terminVergleich,
  plausiblerBereich,
  wichtigkeitRaum,
  wichtigkeitText,
  reihenfolgeWert,
  blockWert,
  LAMBDA,
  PAUSE,
  KLASSEN,
  KLASSE_NR,
  hatKlassen,
} from '../src/daten/wichtigkeit.js';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const index = baueIndex(ladeDaten(wurzel));
const RAEUME = ['AP1', 'PB1', 'PB2', 'WISO'];
const spIn = (raum) => index.raeume.get(raum).bloeckeListe.flatMap((b) => b.sp.map((id) => index.sp.get(id)));
// AP1 rechnet mit Klassen nach Prüfungspunkten, die übrigen Räume mit Stufen nach der Zahl der Prüfungen
const MIT_KLASSEN = ['AP1'];
const OHNE_KLASSEN = RAEUME.filter((r) => !MIT_KLASSEN.includes(r));

test('Vier Stufen: Top-Thema oberstes Viertel, Wichtig obere Hälfte, je Raum', () => {
  assert.deepEqual(STUFEN.map((s) => s.name), ['Top-Thema', 'Wichtig', 'Geprüft', 'Noch nie geprüft']);
  // Hand-Beispiel: 10 Stichpunkte mit 0, 1, 1, 2, 2, 3, 4, 5, 6, 7 Prüfungen
  const g = grenzenFuer([0, 1, 1, 2, 2, 3, 4, 5, 6, 7]);
  assert.deepEqual(g, { top: 6, wichtig: 3 }); // ≥ 6: 2 von 10 (≤ 25 %), ≥ 3: 5 von 10 (≤ 50 %)
  assert.deepEqual([7, 6, 5, 3, 2, 1, 0].map((x) => stufeFuer(x, g)), [1, 1, 2, 2, 3, 3, 4]);
  // Grenzen der echten Räume: in jedem Raum höchstens ein Viertel Top, höchstens die Hälfte Top oder Wichtig
  for (const r of OHNE_KLASSEN) {
    const xs = spIn(r).map((s) => s.wichtig.x);
    assert.ok(xs.filter((x) => x >= index.raeume.get(r).wichtig.grenzen.top).length <= xs.length * 0.25, r);
    assert.ok(xs.filter((x) => x >= index.raeume.get(r).wichtig.grenzen.wichtig).length <= xs.length * 0.5, r);
  }
  // seit 09.11.2026 mit PB2-6-1-7 (Datenmodell, 7 Prüfungen): Grenze für „Wichtig“ 5 statt 4
  assert.deepEqual(index.raeume.get('PB2').wichtig.grenzen, { top: 8, wichtig: 5 });
});

test('Prüfungstermine: Namen und Reihenfolge', () => {
  assert.equal(terminName('2026H'), 'Herbst 2026');
  assert.equal(terminName('2025F'), 'Frühjahr 2025');
  assert.equal(terminName('2025S'), 'Sommer 2025');
  assert.equal(terminName('2021W'), 'Winter 2021');
  assert.deepEqual(['2026F', '2025H', '2025F', '2021H'].sort(terminVergleich), ['2021H', '2025F', '2025H', '2026F']);
  assert.deepEqual(['2025W', '2025S', '2024W'].sort(terminVergleich), ['2024W', '2025S', '2025W']);
});

test('Plausibler Bereich: Hand-Beispiel 4 von 11 Prüfungen → 2 bis 6', () => {
  // Beta(4,5; 7,5): 10-%-Quantil ≈ 0,20, 90-%-Quantil ≈ 0,56 → × 11 = 2,2 und 6,2
  assert.deepEqual(plausiblerBereich(4, 11), { von: 2, bis: 6 });
  const nie = plausiblerBereich(0, 11);
  assert.equal(nie.von, 0);
  assert.ok(nie.bis >= 1 && nie.bis <= 2, JSON.stringify(nie));
  assert.deepEqual(plausiblerBereich(0, 0), { von: 0, bis: 0 });
});

test('Rechnung an einem kleinen Raum von Hand: jede Prüfung zählt gleich', () => {
  const { raum, je } = wichtigkeitRaum([
    { id: 'a', pruef: [['2025F', 1], ['2024H', 0.6], ['2024H', 0.6]] }, // doppelte Prüfung zählt einmal
    { id: 'b', pruef: [['2023F', 0.6]] },
    { id: 'c', pruef: [] },
  ]);
  assert.equal(raum.n, 3);
  assert.equal(raum.aktuell, 1);
  assert.equal(je.get('a').x, 2);
  assert.equal(je.get('a').quote, 2 / 3); // alter Katalog zählt voll
  assert.equal(je.get('a').zuletzt, '2025F');
  assert.equal(je.get('c').stufe, 4);
  assert.ok(je.get('a').stufe < je.get('b').stufe);
});

test('Hand-Beispiel AP1: Netzplan in A mit Fakten; übrige Räume: gleiche Zahl, gleiche Stufe', () => {
  const p = spIn('AP1').find((x) => x.titel.startsWith('Netzplan'));
  assert.equal(p.wichtig.system, 'klassen');
  assert.equal(p.klasse, 'A');
  assert.equal(p.wichtig.stufe, 1);
  assert.equal(wichtigkeitText(p.wichtig), 'A · Rechnen & Zeichnen · In 3 von 11 Prüfungen dran, zuletzt Frühjahr 2026 · zusammen 32 Punkte · auch in 1 von 10 PB1-Prüfungen');
  // keine Vorhersage im Text, auch nicht in den übrigen Räumen
  for (const r of RAEUME) for (const s of spIn(r)) assert.doesNotMatch(wichtigkeitText(s.wichtig), /wahrscheinlich|%/, s.id);
  for (const r of OHNE_KLASSEN) {
    const g = index.raeume.get(r).wichtig.grenzen;
    for (const s of spIn(r)) assert.equal(s.wichtig.stufe, stufeFuer(s.wichtig.x, g), s.id);
  }
});

test('Raum: Prüfungen wie in den Zuordnungen', () => {
  // PB1/PB2: Sommer 2026 hat keine Abschrift und ist nur über die Podcast-Themenliste belegt (P74)
  const erwartet = { AP1: [11, 4, []], PB1: [10, 2, ['2026S']], PB2: [10, 2, ['2026S']], WISO: [9, 3, []] };
  for (const r of RAEUME) {
    const w = index.raeume.get(r).wichtig;
    assert.deepEqual([w.n, w.aktuell, w.nurStichwort], erwartet[r], r);
  }
});

test('Jeder Stichpunkt hat eine Stufe; ohne Beleg genau Stufe 5', () => {
  for (const r of MIT_KLASSEN) for (const s of spIn(r)) assert.equal(s.wichtig.stufe, KLASSE_NR[s.klasse], s.id);
  for (const r of OHNE_KLASSEN)
    for (const s of spIn(r)) {
      assert.ok(s.wichtig, s.id);
      assert.equal(s.wichtig.stufe === 4, s.wichtig.x === 0, s.id);
      assert.ok(s.wichtig.von <= s.wichtig.bis && s.wichtig.bis <= s.wichtig.n, s.id);
    }
});

test('Block und Themenbereich fassen ihre Stichpunkte zusammen, ohne Durchschnitt', () => {
  for (const r of RAEUME) {
    const raum = index.raeume.get(r);
    for (const b of raum.bloeckeListe) {
      const sps = b.sp.map((id) => index.sp.get(id));
      assert.equal(b.wichtig.anzahl.reduce((a, x) => a + x, 0), sps.length, b.id);
      assert.equal(b.wichtig.beste, Math.min(...sps.map((s) => s.wichtig.stufe)), b.id);
      assert.equal(b.wichtig.x, new Set(sps.flatMap((s) => s.wichtig.termine)).size, b.id);
    }
    // Anteile der Themenbereiche an den Prüfungsaufgaben ergeben zusammen 100 %
    const summe = raum.ordner.reduce((a, o) => a + index.ordner.get(o.id).wichtig.anteil, 0);
    assert.ok(Math.abs(summe - 1) < 1e-9, `${r}: ${summe}`);
  }
});

test('Fundament: „Grundlage für“ ist die Umkehrung von „Baut auf“', () => {
  let paare = 0;
  for (const s of new Set(index.sp.values()))
    for (const id of s.neu?.bautAuf ?? []) {
      const ziel = index.sp.get(id);
      if (!ziel) continue;
      assert.ok(ziel.grundlageFuer.includes(s.id), `${id} ← ${s.id}`);
      paare++;
    }
  assert.ok(paare > 100);
});

test('Reihenfolge-Wert: eigener Anteil plus LAMBDA × offene Abhängige', () => {
  const s = [...new Set(index.sp.values())].find((x) => x.wichtig?.system === 'pruefungen' && x.grundlageFuer.length >= 3 && x.grundlageFuer.every((id) => index.sp.get(id).wichtig.system === 'pruefungen'));
  const anteil = (w) => w.quote * (w.inLetzter ? PAUSE : 1);
  const abh = s.grundlageFuer.reduce((a, id) => a + anteil(index.sp.get(id).wichtig), 0);
  assert.equal(reihenfolgeWert(s, index), anteil(s.wichtig) + LAMBDA * abh);
  // Sind die Abhängigen abgehakt, zählt nur noch der eigene Anteil
  assert.equal(reihenfolgeWert(s, index, (id) => id === s.id), anteil(s.wichtig));
  // Pause: dieselbe Zahl, aber in der letzten Prüfung dran → in der Reihenfolge weiter hinten, Stufe gleich
  const [mit, ohne] = [true, false].map((inLetzter) => reihenfolgeWert({ wichtig: { quote: 0.4, inLetzter }, grundlageFuer: [] }, index));
  assert.ok(mit < ohne);
  // Block: der beste offene Stichpunkt zählt; ein ganz abgehakter Block liegt hinten
  const b = index.bloecke.get(s.block);
  assert.ok(blockWert(b, index).bester >= reihenfolgeWert(s, index));
  assert.equal(blockWert(b, index, () => false).bester, -1);
});

test('Beispiel AP1: Zahlensysteme und Präfixe in 6 von 11 Prüfungen, Klasse A', () => {
  const z = spIn('AP1').find((x) => x.titel.startsWith('Zahlensysteme und Präfixe'));
  assert.equal(z.wichtig.x, 6);
  assert.equal(z.klasse, 'A');
});

test('Lernreihenfolge: Hand-Beispiel', () => {
  assert.deepEqual(KLASSEN.map((k) => k.kurz), ['A', 'B', 'C']);
  const liste = [
    { id: 'n', klasse: 'A', art: 'Rechnen', punkte: 10, rang: 2, pruef: [['2025F', 1]] },
    { id: 'p', klasse: 'A', art: 'Schreiben', punkte: 0, rang: 1, pruef: [] },
    { id: 'w', klasse: 'B', art: 'Wissen', punkte: 3, rang: 3, pruef: [['2024H', 0.6]] },
    { id: 'c', klasse: 'C', art: 'Wissen', punkte: 0, rang: 4, pruef: [] },
  ];
  assert.ok(hatKlassen(liste));
  assert.ok(!hatKlassen([{ id: 'x', klasse: 'A', punkte: 1, pruef: [] }])); // ohne rang
  const { raum, je } = wichtigkeitRaum(liste);
  assert.equal(raum.system, 'klassen');
  assert.deepEqual(['n', 'p', 'w', 'c'].map((id) => je.get(id).stufe), [1, 1, 2, 3]);
  assert.equal(je.get('n').name, 'A · Rechnen & Zeichnen');
  assert.equal(je.get('p').name, 'A · Grundlage');
  assert.equal(wichtigkeitText(je.get('c')), 'C · Wissen, noch nie geprüft · In keiner der 2 ausgewerteten Prüfungen dran – kann trotzdem kommen');
  // Reihenfolge folgt dem Rang
  const ws = ['p', 'n', 'w', 'c'].map((id) => reihenfolgeWert({ wichtig: je.get(id) }, index));
  assert.deepEqual([...ws].sort((a, b) => b - a), ws);
});

test('Lernreihenfolge AP1: A = Rechnen/Zeichnen + Grundlagen, B geprüft, C nie geprüft, Rang lückenlos', () => {
  const sps = spIn('AP1');
  for (const s of sps) {
    if (['Rechnen', 'Zeichnen'].includes(s.art)) assert.equal(s.klasse, 'A', s.id);
    if (s.klasse === 'B') assert.ok(s.punkte > 0, s.id);
    if (s.klasse === 'C') assert.equal(s.punkte, 0, s.id);
  }
  assert.deepEqual(sps.map((s) => s.rang).sort((a, b) => a - b), sps.map((_, i) => i + 1));
  // A vor B vor C, und in A jede Voraussetzung vor ihrem Thema
  const max = (k) => Math.max(...sps.filter((s) => s.klasse === k).map((s) => s.rang));
  const min = (k) => Math.min(...sps.filter((s) => s.klasse === k).map((s) => s.rang));
  assert.ok(max('A') < min('B') && max('B') < min('C'));
  const rang = (titel) => sps.find((s) => s.titel.startsWith(titel)).rang;
  assert.ok(rang('Pseudocode') < rang('Schreibtischtest'));
  assert.ok(rang('Kostenarten') < rang('Kosten über die Nutzungsdauer'));
  assert.ok(rang('IPv4-Konfiguration') < rang('IPv4-Subnetting'));
  assert.ok(rang('Zahlensysteme') < rang('Datenmengen'));
  // Englisch als Fertigkeit in A, mit Hinweis
  const engl = sps.find((s) => s.titel.startsWith('Englische Fachtexte'));
  assert.equal(engl.klasse, 'A');
  assert.equal(engl.wichtig.name, 'A · Grundlage');
  assert.ok(engl.wichtig.hinweis);
  // „Heute im Fokus“ und Blöcke folgen dem Rang
  const bloecke = index.raeume.get('AP1').bloeckeListe;
  const erster = [...bloecke].sort((a, b) => blockWert(b, index).bester - blockWert(a, index).bester)[0];
  assert.ok(erster.sp.some((id) => index.sp.get(id).rang === 1));
  for (const b of bloecke) assert.equal(b.wichtig.system, 'klassen', b.id);
  // Tabelle der Obergrenzen liegt im Raum
  assert.ok(index.raeume.get('AP1').lernreihenfolge.tabelle.length >= 4);
});

test('Merksatz je Prüfungsteil', () => {
  for (const r of RAEUME) assert.ok(index.raeume.get(r).merksatz?.length > 20, r);
});
