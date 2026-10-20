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
} from '../src/daten/wichtigkeit.js';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const index = baueIndex(ladeDaten(wurzel));
const RAEUME = ['AP1', 'PB1', 'PB2', 'WISO'];
const spIn = (raum) => index.raeume.get(raum).bloeckeListe.flatMap((b) => b.sp.map((id) => index.sp.get(id)));

test('Vier Stufen: Top-Thema oberstes Viertel, Wichtig obere Hälfte, je Raum', () => {
  assert.deepEqual(STUFEN.map((s) => s.name), ['Top-Thema', 'Wichtig', 'Geprüft', 'Noch nie geprüft']);
  // Hand-Beispiel: 10 Stichpunkte mit 0, 1, 1, 2, 2, 3, 4, 5, 6, 7 Prüfungen
  const g = grenzenFuer([0, 1, 1, 2, 2, 3, 4, 5, 6, 7]);
  assert.deepEqual(g, { top: 6, wichtig: 3 }); // ≥ 6: 2 von 10 (≤ 25 %), ≥ 3: 5 von 10 (≤ 50 %)
  assert.deepEqual([7, 6, 5, 3, 2, 1, 0].map((x) => stufeFuer(x, g)), [1, 1, 2, 2, 3, 3, 4]);
  // Grenzen der echten Räume: in jedem Raum höchstens ein Viertel Top, höchstens die Hälfte Top oder Wichtig
  for (const r of RAEUME) {
    const xs = spIn(r).map((s) => s.wichtig.x);
    assert.ok(xs.filter((x) => x >= index.raeume.get(r).wichtig.grenzen.top).length <= xs.length * 0.25, r);
    assert.ok(xs.filter((x) => x >= index.raeume.get(r).wichtig.grenzen.wichtig).length <= xs.length * 0.5, r);
  }
  assert.deepEqual(index.raeume.get('AP1').wichtig.grenzen, { top: 4, wichtig: 3 });
  assert.deepEqual(index.raeume.get('PB2').wichtig.grenzen, { top: 8, wichtig: 4 });
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

test('Hand-Beispiel AP1: gleiche Zahl, gleiche Stufe', () => {
  const p = spIn('AP1').find((x) => x.titel.startsWith('Peripheriegeräte und Anschlüsse'));
  assert.deepEqual(p.wichtig.termine, ['2022F', '2024F', '2025F', '2026F']);
  assert.equal(p.wichtig.stufe, 1); // 4 von 11 = oberstes Viertel in AP1
  assert.equal(wichtigkeitText(p.wichtig), 'Top-Thema · In 4 von 11 Prüfungen dran, zuletzt Frühjahr 2026 · wahrscheinlich 2 bis 6 von 11');
  for (const r of RAEUME) {
    const g = index.raeume.get(r).wichtig.grenzen;
    for (const s of spIn(r)) assert.equal(s.wichtig.stufe, stufeFuer(s.wichtig.x, g), s.id);
  }
});

test('Raum: Prüfungen wie in den Zuordnungen', () => {
  // PB1/PB2: Sommer 2026 hat keine Abschrift und ist nur über die Podcast-Themenliste belegt (P74)
  const erwartet = { AP1: [11, 4, []], PB1: [10, 2, ['2026S']], PB2: [10, 2, ['2026S']], WISO: [8, 2, []] };
  for (const r of RAEUME) {
    const w = index.raeume.get(r).wichtig;
    assert.deepEqual([w.n, w.aktuell, w.nurStichwort], erwartet[r], r);
  }
});

test('Jeder Stichpunkt hat eine Stufe; ohne Beleg genau Stufe 5', () => {
  for (const r of RAEUME)
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
  const s = [...new Set(index.sp.values())].find((x) => x.grundlageFuer.length >= 3);
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

test('Beispiel AP1: Zahlensysteme und Präfixe in 6 von 11 Prüfungen, Top-Thema', () => {
  const z = spIn('AP1').find((x) => x.titel.startsWith('Zahlensysteme und Präfixe'));
  assert.equal(z.wichtig.x, 6);
  assert.equal(z.wichtig.stufe, 1);
});

test('Themenliste und anderer Prüfungsteil: Stichworte zählen halb, anderer Prüfungsteil nur als Hinweis', () => {
  // Relationales Modell wohnt in PB1, wurde aber in PB2-Prüfungen abgefragt: Hinweis, keine Stufe
  const rm = spIn('PB1').find((x) => x.id === 'PB1-6-1-2');
  const q = rm.wichtig.quer.find((x) => x.raum === 'PB2');
  assert.ok(q && q.x >= 6 && q.n === 10, JSON.stringify(rm.wichtig.quer));
  assert.ok(!rm.wichtig.termine.some((t) => q.termine.includes(t) && !rm.pruef.some(([p]) => p === t)));
  // 2026S zählt in PB2 mit Gewicht 0,5 (aktueller Katalog × Stichwort)
  const sel = spIn('PB2').find((x) => x.id === 'PB2-5-1-1');
  assert.deepEqual(sel.pruef.find(([p]) => p === '2026S'), ['2026S', 0.5]);
  assert.ok(sel.wichtig.nurStichwort >= 1);
  assert.match(wichtigkeitText(sel.wichtig), /davon nur laut Themenliste/);
});
