// Tests für die Auswahl des Lernprompts (src/bereiche/lernen/lernprompt-neu.js):
// Neu lernen = fester Prompt aus inhalt/lernprompts/<RAUM>/ (sobald der Raum welche hat), Wiederholen = erzeugter Prompt.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ladeDaten, ladeLernprompts } from '../tools/inhalt.mjs';
import { baueIndex } from '../src/daten/index.js';
import { promptStichpunkt, promptBlock, festerPrompt, hatFesteBlockPrompts } from '../src/bereiche/lernen/lernprompt-neu.js';
import { lernpromptStichpunkt, lernpromptBlock } from '../src/bereiche/lernen/lernprompt.js';
import { terminText } from '../src/daten/wichtigkeit.js';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const index = baueIndex(ladeDaten(wurzel));
const { prompts } = ladeLernprompts(wurzel);
const stand = (erledigt = [], notizen = {}) => ({ spErledigt: new Map(erledigt.map((id) => [id, 1])), notizen: new Map(Object.entries(notizen)) });
const alle = [...index.sp.values()];
const ap1 = alle.filter((s) => s.raum === 'AP1');
// Räume mit festen Prompts: immer AP1; PB1, PB2 und WiSo, sobald ihr Ordner in inhalt/lernprompts/ vollständig ist
const mitFest = ['AP1', 'PB1', 'PB2', 'WISO'].filter((r) => alle.some((s) => s.raum === r && prompts[s.id]));
const ohneFest = ['PB1', 'PB2', 'WISO'].filter((r) => !mitFest.includes(r));

test('Jeder Stichpunkt eines Raums mit festen Prompts hat genau seinen Prompt, Wort für Wort wie die Datei', () => {
  assert.equal(ap1.length, 124);
  assert.ok(mitFest.includes('AP1'));
  for (const r of mitFest) {
    for (const sp of alle.filter((s) => s.raum === r)) {
      const datei = prompts[sp.id];
      assert.ok(datei, sp.id);
      const roh = fs.readFileSync(path.join(wurzel, datei.datei), 'utf8');
      // angezeigt und kopiert wird der Text mit ausgeschriebenen Prüfungsterminen (2024F wird zu Frühjahr 2024)
      assert.equal(promptStichpunkt(sp, index, stand()), terminText(roh), sp.id);
      assert.ok(roh.includes(`› ${sp.titel}\n`), sp.id);
      assert.ok(roh.includes('## So läuft unsere Sitzung'), sp.id);
    }
  }
});

test('Kopf des festen Prompts nennt den richtigen Prüfungsteil', () => {
  const kopf = { AP1: 'Teil 1 (AP1)', PB1: 'Prüfungsbereich 1', PB2: 'Prüfungsbereich 2', WISO: 'Wirtschafts- und Sozialkunde' };
  for (const r of mitFest) for (const sp of alle.filter((s) => s.raum === r)) assert.ok(festerPrompt(sp, index).split('\n')[0].includes(kopf[r]), sp.id);
});

test('Eigene Notiz wird angehängt, der feste Prompt bleibt davor unverändert', () => {
  const sp = index.sp.get('AP1-1-1-1');
  const text = promptStichpunkt(sp, index, stand([], { [sp.id]: 'Meine Eselsbrücke' }));
  assert.ok(text.startsWith(festerPrompt(sp, index).trimEnd()));
  assert.ok(text.endsWith('## Meine eigene Notiz dazu\n\nMeine Eselsbrücke\n'));
});

test('Abgehakter Stichpunkt mit festem Prompt: Wiederholung mit Stoff und Lehrnotiz der Datei', () => {
  for (const r of mitFest) {
    for (const sp of alle.filter((s) => s.raum === r)) {
      const fest = festerPrompt(sp, index);
      const text = promptStichpunkt(sp, index, stand([sp.id]));
      assert.ok(text.startsWith(fest.split('\n')[0]), sp.id);
      assert.ok(text.includes('## So läuft die Wiederholung') && !text.includes('## So läuft unsere Sitzung'), sp.id);
      assert.ok(text.includes(fest.slice(fest.indexOf('## Stoff: '), fest.indexOf('## Lehrnotiz: ')).trim()), sp.id);
      assert.ok(text.trimEnd().endsWith(fest.slice(fest.indexOf('## Lehrnotiz: ')).trim()), sp.id);
      assert.equal(text.includes('gebunden wie in der Prüfung'), r === 'WISO', sp.id);
    }
  }
  const sp = index.sp.get('AP1-1-1-1');
  assert.ok(promptStichpunkt(sp, index, stand([sp.id], { [sp.id]: 'Meine Eselsbrücke' })).endsWith('## Meine eigene Notiz dazu\n\nMeine Eselsbrücke\n'));
});

test('Prüfungstermine werden ausgeschrieben', () => {
  assert.equal(terminText('wie in 2024F und (2023H-A2-e), 2025S-WISO-A10, 2021W-PB1-A1-ab'), 'wie in Frühjahr 2024 und (Herbst 2023, Aufgabe 2 e), Sommer 2025, Aufgabe 10, Winter 2021, Aufgabe 1 ab');
  assert.equal(terminText('WPA2024F IPv4 2024 2024FX'), 'WPA2024F IPv4 2024 2024FX');
  for (const sp of alle) assert.doesNotMatch(festerPrompt(sp, index) ?? '', /(?<![\w-])20\d\d[FSHW](?![\w])/, sp.id);
});

test('Räume ohne feste Prompts bleiben beim erzeugten Prompt', () => {
  for (const r of ohneFest) {
    const sp = alle.find((s) => s.raum === r);
    assert.equal(festerPrompt(sp, index), null, r);
    assert.equal(promptStichpunkt(sp, index, stand()), lernpromptStichpunkt(sp, index, stand()), r);
    const block = index.bloecke.get(sp.block);
    assert.equal(hatFesteBlockPrompts(block, index), false, r);
    assert.equal(promptBlock(block, index, stand()).text, lernpromptBlock(block, index, stand()), r);
  }
});

test('Block in AP1: fester Prompt des nächsten offenen Stichpunkts, alles abgehakt = Wiederholung', () => {
  const block = index.bloecke.get('AP1-6-2');
  assert.ok(hatFesteBlockPrompts(block, index));
  const [erster, zweiter] = block.sp;
  const neu = promptBlock(block, index, stand());
  assert.equal(neu.text, festerPrompt(index.sp.get(erster), index));
  assert.match(neu.was, new RegExp(`nächster von ${block.sp.length} offenen`));
  const weiter = promptBlock(block, index, stand([erster]));
  assert.equal(weiter.text, festerPrompt(index.sp.get(zweiter), index));
  const fertig = promptBlock(block, index, stand(block.sp));
  assert.equal(fertig.was, 'Wiederholungs-Prompt');
  assert.ok(fertig.text.includes('## So läuft die Wiederholung') && fertig.text.includes('gemischt quer durch alle Stichpunkte'));
  assert.equal(fertig.text.split('## So läuft die Wiederholung').length, 2);
  for (const id of block.sp) {
    const fest = festerPrompt(index.sp.get(id), index);
    assert.ok(fertig.text.includes(fest.slice(fest.indexOf('## Lehrnotiz: ')).trim()), id);
  }
});
