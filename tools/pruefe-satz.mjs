#!/usr/bin/env node
// Prüft Prüfungssätze (src/bereiche/pruefung/saetze/…) auf Vollständigkeit und Punkte.
// Aufruf: node tools/pruefe-satz.mjs [datei.js …]   (ohne Datei: alle Sätze)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { pruefeSatz, TEILE } from '../src/bereiche/pruefung/generator.js';
import { ladeDaten } from './inhalt.mjs';
const WURZEL_INHALT = new URL('..', import.meta.url).pathname;

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const inhalt = ladeDaten(WURZEL_INHALT);
const spIds = new Set(Object.keys(inhalt.sp));

let dateien = process.argv.slice(2);
if (!dateien.length) {
  const basis = path.join(wurzel, 'src/bereiche/pruefung/saetze');
  dateien = fs
    .readdirSync(basis, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .flatMap((d) => fs.readdirSync(path.join(basis, d.name)).filter((f) => f.endsWith('.js')).map((f) => path.join(basis, d.name, f)));
}

let fehlerGesamt = 0;
for (const datei of dateien) {
  const satz = (await import(pathToFileURL(path.resolve(datei)).href)).default;
  // PB1 und PB2 bauen auf AP1 auf: ihre Sätze dürfen auch AP1-Stichpunkte buchen
  const raeume = { AP1: ['AP1'], PB1: ['PB1', 'PB2', 'AP1'], PB2: ['PB1', 'PB2', 'AP1'], WISO: ['WISO'] }[satz?.teil] ?? [];
  const fehler = satz ? pruefeSatz(satz, (id) => spIds.has(id) && raeume.includes(inhalt.sp[id].raum)) : ['kein export default'];
  const teil = TEILE[satz?.teil];
  let info = '';
  if (satz?.aufgaben) info = satz.aufgaben.map((a) => `${a.art} ${a.punkte}`).join(' · ');
  if (satz?.fragen) {
    const arten = {};
    for (const q of satz.fragen) arten[q.art] = (arten[q.art] ?? 0) + 1;
    info = Object.entries(arten).map(([k, v]) => `${k} ${v}`).join(' · ');
  }
  console.log(`${fehler.length ? '✗' : '✓'} ${path.relative(wurzel, path.resolve(datei))} (${teil?.kurz ?? '?'}): ${info}`);
  for (const f of fehler) console.log('   ', f);
  fehlerGesamt += fehler.length;
}
process.exitCode = fehlerGesamt ? 1 : 0;
