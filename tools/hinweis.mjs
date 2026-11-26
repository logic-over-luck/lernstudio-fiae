#!/usr/bin/env node
// Hinweis aus dem Lernplan in den Lernprompts: Was die App am Stichpunkt als Hinweis zeigt (neu.hinweis in
// inhalt/<RAUM>.json), steht Wort für Wort als erste Zeile der Lehrnotiz – „**Hinweis aus dem Lernplan:** …“ direkt
// unter „## Lehrnotiz: …“. Dort steht, was zu einem anderen Stichpunkt gehört und wo das Lehrbuch abweicht; ohne
// diese Zeile weiß die Lehrkraft das nicht. Quelle ist die JSON: Hinweis dort ändern, dann einsetzen.
//
//   node tools/hinweis.mjs pruefen [RAUM]    meldet Prompts, deren Hinweis-Zeile nicht zu neu.hinweis passt
//   node tools/hinweis.mjs einsetzen [RAUM]  schreibt neu.hinweis in die Prompts des Raums (ohne Hinweis: Zeile entfernt);
//                                            alles andere bleibt zeichengleich
// Ohne Raum oder mit ALLE: alle vier Räume. `npm run pruefen` ruft pruefeHinweis ebenfalls auf.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ladeLernprompts, RAEUME } from './inhalt.mjs';

export const HINWEIS_KOPF = '**Hinweis aus dem Lernplan:**';
const NOTIZ = '\n## Lehrnotiz: ';

// So steht der Hinweis im Prompt: eine Zeile, danach eine Leerzeile. Ohne Hinweis: nichts.
export const hinweisAbschnitt = (hinweis) => (hinweis ? `${HINWEIS_KOPF} ${hinweis}\n\n` : '');

// Prompt in drei Teile zerlegen: davor + abschnitt + danach ergibt wieder genau den Text.
// davor endet hinter „## Lehrnotiz: …“ und der Leerzeile danach; abschnitt ist die Hinweis-Zeile samt Leerzeile oder ''.
// null, wenn die Überschrift der Lehrnotiz oder die Leerzeile danach fehlt.
export function teileHinweis(text) {
  const n = text.indexOf(NOTIZ);
  if (n < 0) return null;
  const zeilenende = text.indexOf('\n', n + 1);
  if (zeilenende < 0 || text[zeilenende + 1] !== '\n') return null;
  const start = zeilenende + 2;
  let ende = start;
  if (text.startsWith(`${HINWEIS_KOPF} `, start)) {
    const e = text.indexOf('\n', start);
    ende = e < 0 ? text.length : e + 1;
    if (text[ende] === '\n') ende += 1;
  }
  return { davor: text.slice(0, start), abschnitt: text.slice(start, ende), danach: text.slice(ende) };
}

// neu.hinweis je Stichpunkt eines Raums: Map ID → Text ('' = kein Hinweis)
function hinweiseVon(wurzel, raum) {
  const daten = JSON.parse(fs.readFileSync(path.join(wurzel, 'inhalt', `${raum}.json`), 'utf8'));
  return new Map(Object.entries(daten.stichpunkte).map(([id, s]) => [id, s.neu?.hinweis ?? '']));
}

// Prompts eines Raums mit dem Abschnitt, der dort stehen muss: [{ id, datei, text, soll, teile, fehler }]
function lage(wurzel, raum) {
  const hinweise = hinweiseVon(wurzel, raum);
  const { prompts } = ladeLernprompts(wurzel);
  return Object.entries(prompts)
    .filter(([id]) => id.startsWith(`${raum}-`))
    .map(([id, p]) => {
      const hinweis = hinweise.get(id) ?? '';
      const teile = teileHinweis(p.text);
      let fehler = null;
      if (!teile) fehler = `${p.datei}: Überschrift „## Lehrnotiz: …“ mit Leerzeile danach nicht gefunden`;
      else if (/[\r\n]/.test(hinweis)) fehler = `${id}: neu.hinweis hat einen Zeilenumbruch – der Hinweis muss in einer Zeile stehen`;
      return { id, datei: p.datei, text: p.text, hat: Boolean(hinweis), soll: hinweisAbschnitt(hinweis), teile, fehler };
    })
    .sort((a, b) => a.datei.localeCompare(b.datei, 'de'));
}

// Je Raum: { raum, zahl, mit, fehler: [Text], abweichler: [Datei] }; mit = Stichpunkte, die einen Hinweis haben
export function pruefeHinweis(wurzel, raeume = RAEUME) {
  return raeume.map((raum) => {
    const liste = lage(wurzel, raum);
    return {
      raum,
      zahl: liste.length,
      mit: liste.filter((p) => p.hat).length,
      fehler: liste.filter((p) => p.fehler).map((p) => p.fehler),
      abweichler: liste.filter((p) => !p.fehler && p.teile.abschnitt !== p.soll).map((p) => p.datei),
    };
  });
}

// Schreibt die Hinweis-Zeile in alle Prompts des Raums. Erst alles prüfen, dann schreiben – bei einem Fehler wird nichts geändert.
// Ergebnis: { raum, zahl, mit, geaendert: [Datei], fehler: [Text] }
export function setzeHinweisEin(wurzel, raum) {
  const liste = lage(wurzel, raum);
  const erg = { raum, zahl: liste.length, mit: liste.filter((p) => p.hat).length, geaendert: [], fehler: liste.filter((p) => p.fehler).map((p) => p.fehler) };
  if (erg.fehler.length) return erg;
  for (const p of liste) {
    if (p.teile.abschnitt === p.soll) continue;
    fs.writeFileSync(path.join(wurzel, p.datei), p.teile.davor + p.soll + p.teile.danach);
    erg.geaendert.push(p.datei);
  }
  return erg;
}

// --- Aufruf von der Kommandozeile ---
function haupt(argumente) {
  const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const [befehl, raumRoh, ...mehr] = argumente;
  const raum = (raumRoh ?? 'ALLE').toUpperCase();
  const raeume = raum === 'ALLE' ? RAEUME : [raum];
  if (!['pruefen', 'einsetzen'].includes(befehl) || mehr.length || !raeume.every((r) => RAEUME.includes(r))) {
    console.log(`Aufruf: node tools/hinweis.mjs pruefen|einsetzen [${RAEUME.join('|')}|ALLE]`);
    return 2;
  }
  let fehler = 0;
  const melde = (zeilen) => {
    fehler += zeilen.length;
    for (const z of zeilen) console.log(`  ${z}`);
  };
  if (befehl === 'pruefen')
    for (const e of pruefeHinweis(wurzel, raeume)) {
      console.log(`${e.raum}: ${e.fehler.length ? 'Fehler' : `${e.zahl - e.abweichler.length} von ${e.zahl} Prompts passen zu neu.hinweis (${e.mit} Stichpunkte haben einen Hinweis)`}`);
      melde(e.fehler);
      melde(e.abweichler.map((d) => `weicht ab: ${d}`));
    }
  let geaendert = 0;
  if (befehl === 'einsetzen')
    for (const r of raeume) {
      const e = setzeHinweisEin(wurzel, r);
      console.log(`${r}: ${e.fehler.length ? 'Fehler – nichts geändert' : `${e.geaendert.length} von ${e.zahl} Prompts geändert (${e.mit} Stichpunkte haben einen Hinweis)`}`);
      melde(e.fehler);
      geaendert += e.geaendert.length;
    }
  if (geaendert) console.log('Danach: npm run pruefen, npm test, npm run build – und Lernstudio.html mit committen.');
  return fehler ? 1 : 0;
}

// Nur beim direkten Aufruf laufen, nicht beim Import (inhalt-pruefen.mjs, Tests)
const echt = (p) => fs.realpathSync.native(p);
if (process.argv[1] && fs.existsSync(process.argv[1]) && echt(process.argv[1]) === echt(fileURLToPath(import.meta.url))) process.exit(haupt(process.argv.slice(2)));
