// Tests für tools/hinweis.mjs: Der Hinweis aus dem Lernplan (neu.hinweis in inhalt/<RAUM>.json) steht Wort für Wort
// als erste Zeile der Lehrnotiz im Lernprompt. Gearbeitet wird auf einer Kopie von inhalt/ in einem Temp-Ordner.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ladeLernprompts, RAEUME } from '../tools/inhalt.mjs';
import { teileHinweis, hinweisAbschnitt, pruefeHinweis, setzeHinweisEin, HINWEIS_KOPF } from '../tools/hinweis.mjs';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Kopie der Inhalte (JSON und Lernprompts); fn bekommt die Wurzel der Kopie
function mitKopie(fn) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'hinweis-'));
  try {
    fs.mkdirSync(path.join(tmp, 'inhalt'));
    for (const r of RAEUME) fs.copyFileSync(path.join(wurzel, 'inhalt', `${r}.json`), path.join(tmp, 'inhalt', `${r}.json`));
    fs.cpSync(path.join(wurzel, 'inhalt', 'lernprompts'), path.join(tmp, 'inhalt', 'lernprompts'), { recursive: true });
    return fn(tmp);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}
const lies = (w, datei) => fs.readFileSync(path.join(w, datei), 'utf8');
const dateiVon = (w, id) => ladeLernprompts(w).prompts[id].datei;
// neu.hinweis eines Stichpunkts in der Kopie ändern (undefined = Feld leeren)
function setzeHinweis(w, id, hinweis) {
  const datei = path.join(w, 'inhalt', `${id.split('-')[0]}.json`);
  const daten = JSON.parse(fs.readFileSync(datei, 'utf8'));
  daten.stichpunkte[id].neu.hinweis = hinweis ?? null;
  fs.writeFileSync(datei, JSON.stringify(daten));
}

test('Im Repo steht in jedem Prompt der Hinweis aus seiner JSON – oder keiner, wenn es keinen gibt', () => {
  const erg = pruefeHinweis(wurzel);
  assert.deepEqual(
    erg.map((e) => [e.raum, e.zahl, e.fehler, e.abweichler]),
    [
      ['AP1', 124, [], []],
      ['PB1', 76, [], []],
      ['PB2', 23, [], []],
      ['WISO', 70, [], []],
    ],
  );
  assert.ok(erg.every((e) => e.mit > 0 && e.mit <= e.zahl));
  // Stichprobe: Der Hinweis, der in der Sitzung vom 26.11.2026 fehlte, steht jetzt über der Aufteilung
  const text = lies(wurzel, dateiVon(wurzel, 'AP1-4-1-2'));
  assert.match(text, /\n## Lehrnotiz: [^\n]+\n\n\*\*Hinweis aus dem Lernplan:\*\* [^\n]*Speichercontroller in der CPU[^\n]*\n\n\*\*Aufteilung:\*\*\n/);
});

test('Zerlegen: davor + abschnitt + danach ergibt wieder den Prompt, mit und ohne Hinweis', () => {
  const ohne = 'Kopf\n\n## Stoff: B\n\nZiel: …\n\n## Lehrnotiz: B\n\n**Aufteilung:**\n- K1\n';
  const t = teileHinweis(ohne);
  assert.deepEqual(t, { davor: 'Kopf\n\n## Stoff: B\n\nZiel: …\n\n## Lehrnotiz: B\n\n', abschnitt: '', danach: '**Aufteilung:**\n- K1\n' });
  const mit = t.davor + hinweisAbschnitt('Steht in AP1-1-1-1.') + t.danach;
  const u = teileHinweis(mit);
  assert.equal(u.abschnitt, `${HINWEIS_KOPF} Steht in AP1-1-1-1.\n\n`);
  assert.equal(u.davor, t.davor);
  assert.equal(u.danach, t.danach);
  assert.equal(u.davor + u.abschnitt + u.danach, mit);
  assert.equal(hinweisAbschnitt(''), '');
  assert.equal(hinweisAbschnitt(null), '');
  assert.equal(teileHinweis('Kopf\n\n## Stoff: B\n'), null);
  assert.equal(teileHinweis('Kopf\n\n## Lehrnotiz: B\n**Aufteilung:**\n'), null);
});

test('Einsetzen schreibt einen geänderten Hinweis, sonst bleibt jede Datei zeichengleich', () => {
  mitKopie((w) => {
    const id = 'AP1-4-1-2';
    const datei = dateiVon(w, id);
    const vorher = lies(w, datei);
    const alle = Object.values(ladeLernprompts(w).prompts).map((p) => [p.datei, p.text]);
    setzeHinweis(w, id, 'Neuer Hinweis: steht in AP1-1-5-3.');
    assert.deepEqual(pruefeHinweis(w, ['AP1'])[0].abweichler, [datei]);
    const erg = setzeHinweisEin(w, 'AP1');
    assert.deepEqual([erg.fehler, erg.geaendert], [[], [datei]]);
    const nachher = lies(w, datei);
    const a = teileHinweis(vorher);
    const b = teileHinweis(nachher);
    assert.equal(b.abschnitt, `${HINWEIS_KOPF} Neuer Hinweis: steht in AP1-1-5-3.\n\n`);
    assert.equal(b.davor, a.davor);
    assert.equal(b.danach, a.danach);
    for (const [d, text] of alle) if (d !== datei) assert.equal(lies(w, d), text, d);
    assert.deepEqual(pruefeHinweis(w, ['AP1'])[0].abweichler, []);
    assert.deepEqual(setzeHinweisEin(w, 'AP1').geaendert, []);
  });
});

test('Fällt der Hinweis in der JSON weg, verschwindet die Zeile; kommt einer dazu, wird sie angelegt', () => {
  mitKopie((w) => {
    const mit = 'AP1-4-1-2';
    setzeHinweis(w, mit, undefined);
    assert.deepEqual(setzeHinweisEin(w, 'AP1').geaendert, [dateiVon(w, mit)]);
    const text = lies(w, dateiVon(w, mit));
    assert.ok(!text.includes(HINWEIS_KOPF));
    assert.match(text, /\n## Lehrnotiz: [^\n]+\n\n\*\*Aufteilung:\*\*\n/);
    // ein Stichpunkt ohne Hinweis bekommt einen
    const daten = JSON.parse(lies(w, 'inhalt/AP1.json'));
    const ohne = Object.keys(daten.stichpunkte).find((id) => !daten.stichpunkte[id].neu.hinweis && id !== mit);
    assert.ok(ohne);
    assert.ok(!lies(w, dateiVon(w, ohne)).includes(HINWEIS_KOPF));
    setzeHinweis(w, ohne, 'Gehört zu einem anderen Stichpunkt.');
    assert.deepEqual(setzeHinweisEin(w, 'AP1').geaendert, [dateiVon(w, ohne)]);
    assert.ok(lies(w, dateiVon(w, ohne)).includes(`\n\n${HINWEIS_KOPF} Gehört zu einem anderen Stichpunkt.\n\n**Aufteilung:**\n`));
  });
});

test('Fehler: Hinweis mit Zeilenumbruch oder Prompt ohne Lehrnotiz – dann wird nichts geschrieben', () => {
  mitKopie((w) => {
    const id = 'AP1-4-1-2';
    const datei = dateiVon(w, id);
    const vorher = lies(w, datei);
    setzeHinweis(w, id, 'Zeile 1\nZeile 2');
    const erg = setzeHinweisEin(w, 'AP1');
    assert.equal(erg.fehler.length, 1);
    assert.match(erg.fehler[0], /Zeilenumbruch/);
    assert.deepEqual(erg.geaendert, []);
    assert.equal(lies(w, datei), vorher);
    assert.equal(pruefeHinweis(w, ['AP1'])[0].fehler.length, 1);
  });
  mitKopie((w) => {
    const datei = dateiVon(w, 'PB2-1-1-1');
    fs.writeFileSync(path.join(w, datei), lies(w, datei).replace('\n## Lehrnotiz: ', '\n## Notiz: '));
    const erg = setzeHinweisEin(w, 'PB2');
    assert.equal(erg.fehler.length, 1);
    assert.match(erg.fehler[0], /Lehrnotiz/);
    assert.deepEqual(erg.geaendert, []);
  });
});
