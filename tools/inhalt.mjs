// Liest die Lerninhalte aus inhalt/ und baut daraus das Datenpaket der App.
// inhalt/<RAUM>.json: { raum, stichpunkte, karten } je Prüfungsteil; inhalt/glossar.json: alle Begriffe.
// inhalt/lernprompts/<RAUM>/**/<ID> <Titel>.md: fester Lernprompt je Stichpunkt (AP1, PB1, PB2, WiSo). Andere
// Dateien dort (LIES_MICH.md und alles mit „_“ am Anfang) werden nicht geladen.

import fs from 'node:fs';
import path from 'node:path';

export const RAEUME = ['AP1', 'PB1', 'PB2', 'WISO'];

const lies = (wurzel, datei) => JSON.parse(fs.readFileSync(path.join(wurzel, 'inhalt', datei), 'utf8'));

// Dateiname beginnt mit der Stichpunkt-ID und einem Leerzeichen, z. B. „AP1-1-1-1 Projektmerkmale und SMART-Ziele.md“
export const PROMPT_DATEI = /^((?:AP1|PB1|PB2|WISO)-\d+-\d+-\d+) .*\.md$/;

// Alle festen Lernprompts: { ID: { text, datei } }; doppelte IDs landen in `doppelt`
export function ladeLernprompts(wurzel) {
  const basis = path.join(wurzel, 'inhalt', 'lernprompts');
  const prompts = {};
  const doppelt = [];
  if (!fs.existsSync(basis)) return { prompts, doppelt };
  const dateien = [];
  const lauf = (ordner) => {
    for (const e of fs.readdirSync(ordner, { withFileTypes: true })) {
      const p = path.join(ordner, e.name);
      if (e.isDirectory()) lauf(p);
      else if (e.isFile()) dateien.push(p);
    }
  };
  lauf(basis);
  for (const pfad of dateien.sort()) {
    const m = path.basename(pfad).match(PROMPT_DATEI);
    if (!m) continue;
    const eintrag = { text: fs.readFileSync(pfad, 'utf8'), datei: path.relative(wurzel, pfad).split(path.sep).join('/') };
    if (prompts[m[1]]) doppelt.push([m[1], prompts[m[1]].datei, eintrag.datei]);
    else prompts[m[1]] = eintrag;
  }
  return { prompts, doppelt };
}

// Text unter „Erklärung:“ im Abschnitt „### K3 – …“ eines Lernprompts, bis zur nächsten Überschrift („### “ oder „## “).
// Leerzeilen am Ende zählen nicht mit. Fehlt der Abschnitt oder die Zeile „Erklärung:“: null.
export function erklaerungImPrompt(text, nr) {
  const zeilen = text.split('\n');
  const start = zeilen.findIndex((z) => z.startsWith(`### ${nr} – `));
  if (start < 0) return null;
  let ende = zeilen.findIndex((z, i) => i > start && /^###? /.test(z));
  if (ende < 0) ende = zeilen.length;
  const ab = zeilen.indexOf('Erklärung:', start + 1);
  if (ab < 0 || ab >= ende) return null;
  return zeilen
    .slice(ab + 1, ende)
    .join('\n')
    .replace(/\n+$/, '');
}

export function ladeDaten(wurzel) {
  const teile = RAEUME.map((r) => lies(wurzel, `${r}.json`));
  const { prompts } = ladeLernprompts(wurzel);
  return {
    raeume: teile.map((t) => t.raum),
    sp: Object.assign({}, ...teile.map((t) => t.stichpunkte)),
    karten: teile.flatMap((t) => t.karten),
    glossar: lies(wurzel, 'glossar.json'),
    lernprompts: Object.fromEntries(Object.entries(prompts).map(([id, p]) => [id, p.text])),
  };
}
