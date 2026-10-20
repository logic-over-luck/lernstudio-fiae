// Liest die Lerninhalte aus inhalt/ und baut daraus das Datenpaket der App.
// inhalt/<RAUM>.json: { raum, stichpunkte, karten } je Prüfungsteil; inhalt/glossar.json: alle Begriffe.

import fs from 'node:fs';
import path from 'node:path';

export const RAEUME = ['AP1', 'PB1', 'PB2', 'WISO'];

const lies = (wurzel, datei) => JSON.parse(fs.readFileSync(path.join(wurzel, 'inhalt', datei), 'utf8'));

export function ladeDaten(wurzel) {
  const teile = RAEUME.map((r) => lies(wurzel, `${r}.json`));
  return {
    raeume: teile.map((t) => t.raum),
    sp: Object.assign({}, ...teile.map((t) => t.stichpunkte)),
    karten: teile.flatMap((t) => t.karten),
    glossar: lies(wurzel, 'glossar.json'),
  };
}
