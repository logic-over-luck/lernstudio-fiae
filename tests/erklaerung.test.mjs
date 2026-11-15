// Tests für erklaerungImPrompt und aussageUeberschrift (tools/inhalt.mjs): Damit vergleicht `npm run pruefen`
// Überschrift und Erklärung jeder Aussage im Lernprompt mit stichpunkte[id].neu.koennen[] in inhalt/<RAUM>.json.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ladeDaten, ladeLernprompts, erklaerungImPrompt, aussageUeberschrift } from '../tools/inhalt.mjs';

const prompt = [
  '## Stoff: Beispiel',
  '',
  '### K1 – Erste Aussage (Stufe 1 Wiedergeben)',
  'Du kannst etwas nennen.',
  '',
  'Erklärung:',
  'Erste Zeile.',
  '- Punkt mit **Fettdruck**',
  '',
  'Zweiter Absatz.',
  '',
  '### K2 – Zweite Aussage (Stufe 2 Verstehen)',
  'Du kannst etwas erklären.',
  '',
  'Erklärung:',
  'Letzte Erklärung im Stoff.',
  '',
  '## Lehrnotiz: Beispiel',
  '',
  'Erklärung:',
  'gehört nicht mehr zum Stoff',
  '',
  '### K10 – Ohne Erklärung (Stufe 1 Wiedergeben)',
  'Du kannst noch etwas.',
  '',
].join('\n');

test('Erklärung reicht bis zur nächsten Überschrift „### “ oder „## “, Leerzeilen am Ende zählen nicht', () => {
  assert.equal(erklaerungImPrompt(prompt, 'K1'), 'Erste Zeile.\n- Punkt mit **Fettdruck**\n\nZweiter Absatz.');
  assert.equal(erklaerungImPrompt(prompt, 'K2'), 'Letzte Erklärung im Stoff.');
});

test('Fehlt der Abschnitt oder die Zeile „Erklärung:“, kommt null zurück', () => {
  assert.equal(erklaerungImPrompt(prompt, 'K3'), null);
  assert.equal(erklaerungImPrompt(prompt, 'K10'), null);
  // „K1“ darf nicht den Abschnitt „K10“ treffen und umgekehrt
  assert.equal(erklaerungImPrompt(prompt.replace('### K1 – ', '### K11 – '), 'K1'), null);
});

test('Ein geändertes Zeichen in der Erklärung fällt auf', () => {
  assert.notEqual(erklaerungImPrompt(prompt.replace('Erste Zeile.', 'Erste Zeile'), 'K1'), erklaerungImPrompt(prompt, 'K1'));
});

test('In allen Lernprompts steht die Erklärung jeder Aussage genau so wie in inhalt/<RAUM>.json', () => {
  const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const { sp } = ladeDaten(wurzel);
  const { prompts } = ladeLernprompts(wurzel);
  let zahl = 0;
  for (const [id, p] of Object.entries(prompts))
    for (const k of sp[id].neu.koennen) {
      assert.equal(erklaerungImPrompt(p.text, k.id.slice(id.length + 1)), k.erklaerung, k.id);
      zahl++;
    }
  assert.ok(zahl > 1000);
});

test('Überschrift einer Aussage: Kurztitel, Stufe und „in der Prüfung vorgegeben“', () => {
  assert.equal(aussageUeberschrift('K1', { kurz: 'Erste Aussage', stufe: 1, vorgegeben: null }), '### K1 – Erste Aussage (Stufe 1 Wiedergeben)');
  assert.equal(aussageUeberschrift('K2', { kurz: 'Zweite Aussage', stufe: 2 }), '### K2 – Zweite Aussage (Stufe 2 Verstehen)');
  assert.equal(
    aussageUeberschrift('K6', { kurz: 'Zeitpunkte auf einem Beleg', stufe: 3, vorgegeben: 'Rechnung' }),
    '### K6 – Zeitpunkte auf einem Beleg (Stufe 3 Anwenden · in der Prüfung vorgegeben: Rechnung)',
  );
  assert.equal(aussageUeberschrift('K9', { kurz: 'X', stufe: 4 }), '### K9 – X (Stufe 4 Beurteilen)');
});

test('In allen Lernprompts stehen Ziel und die Überschrift jeder Aussage genau so wie in inhalt/<RAUM>.json', () => {
  const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const { sp } = ladeDaten(wurzel);
  const { prompts } = ladeLernprompts(wurzel);
  for (const [id, p] of Object.entries(prompts)) {
    const zeilen = p.text.split('\n');
    assert.ok(zeilen.includes(`Ziel: ${sp[id].neu.ziel}`), id);
    for (const k of sp[id].neu.koennen) assert.ok(zeilen.includes(aussageUeberschrift(k.id.slice(id.length + 1), k)), k.id);
  }
});
