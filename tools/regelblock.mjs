#!/usr/bin/env node
// Regelblock der Lernprompts: der Abschnitt „## So läuft unsere Sitzung“ bis vor „## Stoff“. Er ist in allen Prompts
// eines Prüfungsteils gleich; die Vorlage je Raum liegt in inhalt/lernprompts/<RAUM>/_regelblock.md.
//
//   node tools/regelblock.mjs pruefen [RAUM]    meldet Prompts, deren Regelblock von _regelblock.md abweicht
//   node tools/regelblock.mjs einsetzen [RAUM]  schreibt _regelblock.md in alle Prompts des Raums; Kopf, Stoff,
//                                               Lehrnotiz und angehängtes Material bleiben zeichengleich
//   node tools/regelblock.mjs auslesen [RAUM]   legt eine fehlende _regelblock.md aus den Prompts an (nur wenn alle
//                                               Prompts des Raums denselben Regelblock haben)
// Ohne Raum oder mit ALLE: alle vier Räume. `npm run pruefen` ruft pruefeRegelblock ebenfalls auf.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ladeLernprompts, RAEUME } from './inhalt.mjs';

export const REGELBLOCK_DATEI = '_regelblock.md';
const ANFANG = '## So läuft unsere Sitzung';
const STOFF = '## Stoff';

export const regelblockPfad = (raum) => `inhalt/lernprompts/${raum}/${REGELBLOCK_DATEI}`;

// Prompt in drei Teile zerlegen: kopf + block + rest ergibt wieder genau den Text.
// block = Zeile „## So läuft unsere Sitzung“ bis vor die Zeile „## Stoff…“; null, wenn eine der beiden Zeilen fehlt.
export function teileRegelblock(text) {
  const a = `\n${text}`.indexOf(`\n${ANFANG}\n`); // durch das vorangestellte \n ist das der Zeilenanfang im Text
  if (a < 0) return null;
  const s = text.indexOf(`\n${STOFF}`, a);
  if (s < 0) return null;
  return { kopf: text.slice(0, a), block: text.slice(a, s + 1), rest: text.slice(s + 1) };
}

// Vorlage in die Form bringen, in der sie im Prompt steht: Zeilenenden \n, am Ende genau eine Leerzeile vor „## Stoff“
const alsBlock = (vorlage) => `${vorlage.replace(/\r\n/g, '\n').replace(/\s+$/, '')}\n\n`;

// Was an einer Vorlage nicht stimmt (leere Liste = in Ordnung)
function maengel(block) {
  const zeilen = block.split('\n');
  const liste = [];
  if (zeilen[0] !== ANFANG) liste.push(`erste Zeile muss „${ANFANG}“ sein`);
  const weitere = zeilen.slice(1).filter((z) => z.startsWith('## '));
  if (weitere.length) liste.push(`weitere Überschrift „${weitere[0]}“ – im Regelblock darf nur die erste Zeile mit „## “ beginnen`);
  if (zeilen.length < 4) liste.push('kein Text unter der Überschrift');
  return liste;
}

// Vorlage eines Raums: { block } wie er im Prompt stehen muss, oder { fehler }
export function ladeRegelblock(wurzel, raum) {
  const datei = path.join(wurzel, regelblockPfad(raum));
  if (!fs.existsSync(datei)) return { fehler: `${regelblockPfad(raum)} fehlt` };
  const block = alsBlock(fs.readFileSync(datei, 'utf8'));
  const m = maengel(block);
  return m.length ? { fehler: `${regelblockPfad(raum)}: ${m.join('; ')}` } : { block };
}

// Prompts eines Raums, nach Datei sortiert: [{ id, datei, text }]
function promptsVon(wurzel, raum) {
  const { prompts } = ladeLernprompts(wurzel);
  return Object.entries(prompts)
    .filter(([id]) => id.startsWith(`${raum}-`))
    .map(([id, p]) => ({ id, ...p }))
    .sort((a, b) => a.datei.localeCompare(b.datei, 'de'));
}

// Je Raum: { raum, zahl, fehler: [Text], abweichler: [Datei] }. Räume ohne Prompts und ohne Vorlage: zahl 0, nichts zu melden.
export function pruefeRegelblock(wurzel, raeume = RAEUME) {
  return raeume.map((raum) => {
    const liste = promptsVon(wurzel, raum);
    const erg = { raum, zahl: liste.length, fehler: [], abweichler: [] };
    const vorlage = ladeRegelblock(wurzel, raum);
    if (vorlage.fehler) {
      if (liste.length || fs.existsSync(path.join(wurzel, regelblockPfad(raum)))) erg.fehler.push(vorlage.fehler);
      return erg;
    }
    for (const p of liste) {
      const t = teileRegelblock(p.text);
      if (!t) erg.fehler.push(`${p.datei}: Abschnitt „${ANFANG}“ bis „${STOFF}“ nicht gefunden`);
      else if (t.block !== vorlage.block) erg.abweichler.push(p.datei);
    }
    return erg;
  });
}

// Schreibt die Vorlage in alle Prompts des Raums. Erst alles prüfen, dann schreiben – bei einem Fehler wird nichts geändert.
// Ergebnis: { raum, zahl, geaendert: [Datei], fehler: [Text] }
export function setzeRegelblockEin(wurzel, raum) {
  const liste = promptsVon(wurzel, raum);
  const erg = { raum, zahl: liste.length, geaendert: [], fehler: [] };
  const vorlage = ladeRegelblock(wurzel, raum);
  if (vorlage.fehler) erg.fehler.push(vorlage.fehler);
  const teile = liste.map((p) => teileRegelblock(p.text));
  liste.forEach((p, i) => {
    if (!teile[i]) erg.fehler.push(`${p.datei}: Abschnitt „${ANFANG}“ bis „${STOFF}“ nicht gefunden`);
  });
  if (erg.fehler.length) return erg;
  liste.forEach((p, i) => {
    if (teile[i].block === vorlage.block) return;
    fs.writeFileSync(path.join(wurzel, p.datei), teile[i].kopf + vorlage.block + teile[i].rest);
    erg.geaendert.push(p.datei);
  });
  return erg;
}

// Legt die Vorlage aus den Prompts an. Bricht ab, wenn es sie schon gibt oder die Prompts verschiedene Regelblöcke haben.
// Ergebnis: { raum, zahl, angelegt: bool, fehler: [Text] }
export function leseRegelblockAus(wurzel, raum) {
  const liste = promptsVon(wurzel, raum);
  const erg = { raum, zahl: liste.length, angelegt: false, fehler: [] };
  const ziel = path.join(wurzel, regelblockPfad(raum));
  if (fs.existsSync(ziel)) erg.fehler.push(`${regelblockPfad(raum)} gibt es schon – nicht überschrieben`);
  if (!liste.length) erg.fehler.push(`${raum}: keine Prompts`);
  if (erg.fehler.length) return erg;
  const varianten = new Map(); // Regelblock → Dateien
  for (const p of liste) {
    const t = teileRegelblock(p.text);
    if (!t) erg.fehler.push(`${p.datei}: Abschnitt „${ANFANG}“ bis „${STOFF}“ nicht gefunden`);
    else varianten.set(t.block, [...(varianten.get(t.block) ?? []), p.datei]);
  }
  if (erg.fehler.length) return erg;
  if (varianten.size > 1) {
    // häufigste Fassung gilt als die gemeinte, alle anderen sind Abweichler
    const sortiert = [...varianten.values()].sort((a, b) => b.length - a.length);
    erg.fehler.push(`${raum}: ${varianten.size} verschiedene Regelblöcke; ${sortiert[0].length} von ${liste.length} Prompts sind gleich, es weichen ab:`);
    for (const d of sortiert.slice(1).flat()) erg.fehler.push(`  ${d}`);
    return erg;
  }
  const [block] = varianten.keys();
  const m = maengel(alsBlock(block));
  if (m.length) {
    erg.fehler.push(`${raum}: Regelblock der Prompts taugt nicht als Vorlage: ${m.join('; ')}`);
    return erg;
  }
  fs.writeFileSync(ziel, block.replace(/\n+$/, '\n'));
  erg.angelegt = true;
  return erg;
}

// --- Aufruf von der Kommandozeile ---
function haupt(argumente) {
  const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const [befehl, raumRoh, ...mehr] = argumente;
  const raum = (raumRoh ?? 'ALLE').toUpperCase();
  const raeume = raum === 'ALLE' ? RAEUME : [raum];
  if (!['pruefen', 'einsetzen', 'auslesen'].includes(befehl) || mehr.length || !raeume.every((r) => RAEUME.includes(r))) {
    console.log(`Aufruf: node tools/regelblock.mjs pruefen|einsetzen|auslesen [${RAEUME.join('|')}|ALLE]`);
    return 2;
  }
  let fehler = 0;
  const melde = (zeilen) => {
    fehler += zeilen.length;
    for (const z of zeilen) console.log(`  ${z}`);
  };
  if (befehl === 'pruefen')
    for (const e of pruefeRegelblock(wurzel, raeume)) {
      const gut = e.zahl - e.abweichler.length;
      console.log(`${e.raum}: ${e.fehler.length ? 'Fehler' : `${gut} von ${e.zahl} Prompts mit dem Regelblock aus ${regelblockPfad(e.raum)}`}`);
      melde(e.fehler);
      melde(e.abweichler.map((d) => `weicht ab: ${d}`));
    }
  let geaendert = 0;
  if (befehl === 'einsetzen')
    for (const r of raeume) {
      const e = setzeRegelblockEin(wurzel, r);
      console.log(`${r}: ${e.fehler.length ? 'Fehler – nichts geändert' : `${e.geaendert.length} von ${e.zahl} Prompts geändert`}`);
      melde(e.fehler);
      geaendert += e.geaendert.length;
    }
  if (befehl === 'auslesen')
    for (const r of raeume) {
      const e = leseRegelblockAus(wurzel, r);
      console.log(`${r}: ${e.angelegt ? `${regelblockPfad(r)} angelegt (${e.zahl} Prompts mit demselben Regelblock)` : 'nicht angelegt'}`);
      melde(e.fehler);
    }
  if (geaendert) console.log('Danach: npm run pruefen, npm test, npm run build – und Lernstudio.html mit committen.');
  return fehler ? 1 : 0;
}

// Nur beim direkten Aufruf laufen, nicht beim Import (inhalt-pruefen.mjs, Tests)
const echt = (p) => fs.realpathSync.native(p);
if (process.argv[1] && fs.existsSync(process.argv[1]) && echt(process.argv[1]) === echt(fileURLToPath(import.meta.url))) process.exit(haupt(process.argv.slice(2)));
