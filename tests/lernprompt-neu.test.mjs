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
      assert.equal(promptStichpunkt(sp, index, stand()), roh, sp.id);
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

test('Abgehakter AP1-Stichpunkt: Wiederholungs-Prompt wie bisher', () => {
  const sp = index.sp.get('AP1-1-1-1');
  const s = stand([sp.id]);
  assert.equal(promptStichpunkt(sp, index, s), lernpromptStichpunkt(sp, index, s));
  assert.ok(promptStichpunkt(sp, index, s).includes('So möchte ich wiederholen'));
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

test('Abgehakter Stichpunkt in PB1, PB2, WiSo mit festem Prompt: Wiederholungs-Prompt wie bisher', () => {
  for (const r of mitFest.filter((x) => x !== 'AP1')) {
    const sp = alle.find((s) => s.raum === r);
    const s = stand([sp.id]);
    assert.equal(promptStichpunkt(sp, index, s), lernpromptStichpunkt(sp, index, s), r);
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
  assert.equal(fertig.text, lernpromptBlock(block, index, stand(block.sp)));
});
