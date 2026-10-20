#!/usr/bin/env node
// Prüft die Lerninhalte in inhalt/ auf Stimmigkeit. Aufruf: npm run pruefen
// Nach jeder Änderung an inhalt/*.json laufen lassen – 0 Fehler, sonst nicht committen.

import { ladeDaten, RAEUME } from './inhalt.mjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const d = ladeDaten(wurzel);
const fehler = [];
const f = (text) => fehler.push(text);

const sp = new Map(Object.entries(d.sp));
const koennen = new Map(); // Können-ID → Stichpunkt-ID
const bloecke = new Map();
const ordner = new Set();

// Gliederung: jeder Stichpunkt steht in genau einem Block, Raum/Ordner/Block passen zusammen
const imBlock = new Map();
for (const r of d.raeume) {
  if (!RAEUME.includes(r.id)) f(`Raum ${r.id} unbekannt`);
  for (const o of r.ordner) {
    ordner.add(o.id);
    for (const b of o.bloecke) {
      bloecke.set(b.id, b);
      for (const id of b.sp) {
        if (imBlock.has(id)) f(`${id} steht in ${imBlock.get(id)} und ${b.id}`);
        imBlock.set(id, b.id);
        const s = sp.get(id);
        if (!s) f(`Block ${b.id}: Stichpunkt ${id} fehlt`);
        else if (s.raum !== r.id || s.ordner !== o.id || s.block !== b.id) f(`${id}: raum/ordner/block passen nicht zu ${r.id}/${o.id}/${b.id}`);
      }
    }
  }
}
for (const id of sp.keys()) if (!imBlock.has(id)) f(`${id} steht in keinem Block`);

// Stichpunkte und Können-Aussagen
for (const [id, s] of sp) {
  if (!s.titel) f(`${id}: Titel fehlt`);
  if (!s.neu?.ziel) f(`${id}: Ziel fehlt`);
  const ids = s.koennen.map(([k]) => k);
  if (!ids.length) f(`${id}: keine Können-Aussage`);
  for (const [k, text] of s.koennen) {
    if (!new RegExp(`^${id}-K\\d+$`).test(k)) f(`${k}: ID passt nicht zu ${id}`);
    if (koennen.has(k)) f(`${k} doppelt`);
    if (!text) f(`${k}: Text fehlt`);
    koennen.set(k, id);
  }
  const neuIds = (s.neu?.koennen ?? []).map((k) => k.id);
  if (JSON.stringify(neuIds) !== JSON.stringify(ids)) f(`${id}: koennen und neu.koennen haben verschiedene IDs`);
}

// Karten: gehören zu einer Aussage ihres Stichpunkts, ID = <Können-ID>-<Nummer>
const kartenIds = new Set();
for (const k of d.karten) {
  if (kartenIds.has(k.id)) f(`Karte ${k.id} doppelt`);
  kartenIds.add(k.id);
  if (koennen.get(k.k) !== k.sp) f(`Karte ${k.id}: Aussage ${k.k} gehört nicht zu ${k.sp}`);
  if (!new RegExp(`^${k.k}-\\d+$`).test(k.id)) f(`Karte ${k.id}: ID passt nicht zu ${k.k}`);
  if (!k.v || !k.h) f(`Karte ${k.id}: Vorder- oder Rückseite leer`);
}

// Verweise zwischen Stichpunkten
for (const [id, s] of sp) {
  for (const g of s.gegen ?? []) if (!sp.has(g)) f(`${id}: Gegenstück ${g} gibt es nicht`);
  for (const g of s.neu?.bautAuf ?? []) if (!sp.has(g)) f(`${id}: baut auf ${g} auf, den gibt es nicht`);
  for (const k of s.neu?.koennen ?? []) for (const g of k.neu?.gegenueber ?? []) if (!sp.has(g)) f(`${k.id}: Grundlage ${g} gibt es nicht`);
}
for (const b of d.glossar) {
  if (!b.b || !b.e) f(`Glossar: Eintrag ohne Begriff oder Erklärung`);
  for (const id of b.sp ?? []) if (!sp.has(id)) f(`Glossar „${b.b}“: Stichpunkt ${id} gibt es nicht`);
}

// Jede ID im Text muss es geben (fängt Verweise ins Leere ab)
const ID = /(?<![\w-])((?:AP1|AP2|PB1|PB2|WISO)-\d+(?:-\d+){1,3}(?:-K\d+)?)(?![\w-])/g;
const bekannt = (x) => sp.has(x) || koennen.has(x) || bloecke.has(x) || ordner.has(x);
for (const [id, s] of sp)
  for (const x of JSON.stringify(s.neu).matchAll(ID)) if (!bekannt(x[1])) f(`${id}: Text verweist auf ${x[1]}, das gibt es nicht`);

const zahl = (n, wort) => `${n} ${wort}`;
console.log(
  [zahl(d.raeume.length, 'Prüfungsteile'), zahl(sp.size, 'Stichpunkte'), zahl(koennen.size, 'Können-Aussagen'), zahl(d.karten.length, 'Karten'), zahl(d.glossar.length, 'Glossarbegriffe')].join(' · '),
);
if (fehler.length) {
  console.log(`\n${fehler.length} Fehler:`);
  for (const t of fehler.slice(0, 50)) console.log('  ' + t);
  if (fehler.length > 50) console.log(`  … und ${fehler.length - 50} weitere`);
  process.exit(1);
}
console.log('Keine Fehler.');
