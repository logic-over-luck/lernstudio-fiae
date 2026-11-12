#!/usr/bin/env node
// Prüft die Lerninhalte in inhalt/ auf Stimmigkeit. Aufruf: npm run pruefen
// Nach jeder Änderung an inhalt/*.json laufen lassen – 0 Fehler, sonst nicht committen.

import { ladeDaten, ladeLernprompts, RAEUME } from './inhalt.mjs';
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

// Lernreihenfolge A / B / C (src/daten/wichtigkeit.js): ganz oder gar nicht je Prüfungsteil
for (const r of RAEUME) {
  const liste = [...sp.values()].filter((s) => s.raum === r);
  const mit = liste.filter((s) => 'klasse' in s || 'punkte' in s || 'rang' in s);
  if (!mit.length) continue;
  if (mit.length !== liste.length) f(`${r}: nur ${mit.length} von ${liste.length} Stichpunkten haben klasse/punkte/rang`);
  for (const s of mit) {
    if (!['A', 'B', 'C'].includes(s.klasse)) f(`${s.id}: klasse „${s.klasse}“ ungültig (A, B oder C)`);
    if (typeof s.punkte !== 'number' || s.punkte < 0) f(`${s.id}: punkte fehlt oder negativ`);
    if (!Number.isInteger(s.rang)) f(`${s.id}: rang fehlt`);
    // A = Rechnen/Zeichnen und ihre Grundlagen; B = schon geprüft; C = nie geprüft
    if (s.klasse !== 'A' && ['Rechnen', 'Zeichnen'].includes(s.art)) f(`${s.id}: ${s.art}, aber nicht in A`);
    if (s.klasse === 'B' && !(s.punkte > 0)) f(`${s.id}: B ohne Prüfungspunkte`);
    if (s.klasse === 'C' && s.punkte > 0) f(`${s.id}: C, hat aber Prüfungspunkte`);
  }
  // Rang: 1 … n, lückenlos; A vor B vor C; Voraussetzungen eines A-Stichpunkts stehen davor und ebenfalls in A
  const raenge = mit.map((s) => s.rang).sort((a, b) => a - b);
  if (raenge.some((x, i) => x !== i + 1)) f(`${r}: rang ist nicht lückenlos 1 bis ${mit.length}`);
  const ord = { A: 0, B: 1, C: 2 };
  for (const s of mit)
    for (const t of mit) if (ord[s.klasse] < ord[t.klasse] && s.rang > t.rang) f(`${r}: ${s.id} (${s.klasse}) steht hinter ${t.id} (${t.klasse})`);
  for (const s of mit.filter((x) => x.klasse === 'A'))
    for (const v of s.neu?.bautAuf ?? []) {
      const vs = sp.get(v);
      if (vs && vs.raum === r && (vs.klasse !== 'A' || vs.rang > s.rang)) f(`${s.id}: Voraussetzung ${v} muss in A und davor stehen`);
    }
}

// Verweise zwischen Stichpunkten
for (const [id, s] of sp) {
  for (const g of s.gegen ?? []) if (!sp.has(g)) f(`${id}: Gegenstück ${g} gibt es nicht`);
  for (const g of s.neu?.bautAuf ?? []) if (!sp.has(g)) f(`${id}: baut auf ${g} auf, den gibt es nicht`);
  for (const k of s.neu?.koennen ?? []) for (const g of k.neu?.gegenueber ?? []) if (!sp.has(g)) f(`${k.id}: Grundlage ${g} gibt es nicht`);
  // Buchstellen (neu.buch): Buch 1–3, Abschnitt wie „3.4.5“, Druckseiten von ≤ bis, höchstens 3 Stellen
  const buch = s.neu?.buch ?? [];
  if (buch.length > 3) f(`${id}: mehr als 3 Buchstellen`);
  for (const b of buch)
    if (![1, 2, 3].includes(b.buch) || !/^\d+(\.\d+)*$/.test(b.abschnitt ?? '') || !b.titel || !(b.von > 0) || !(b.bis >= b.von) || b.bis - b.von > 12)
      f(`${id}: Buchstelle ungültig ${JSON.stringify(b)}`);
  for (const k of s.neu?.koennen ?? [])
    for (const h of k.herkunft ?? []) if (h.startsWith('buch:') && !/^buch:(GS|FS2|FS)-[\d.]+(-S\d+(-\d+)?)?$/.test(h)) f(`${k.id}: Buchverweis ungültig ${h}`);
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

// Feste Lernprompts (inhalt/lernprompts/): ganz oder gar nicht je Prüfungsteil, und passend zum Stoff in inhalt/*.json.
// Fängt ab, dass eine Aussage in der JSON geändert wird, der Prompt aber noch den alten Wortlaut lehrt.
const { prompts, doppelt } = ladeLernprompts(wurzel);
for (const [id, a, b] of doppelt) f(`Lernprompt ${id} doppelt: ${a} und ${b}`);
for (const [id, p] of Object.entries(prompts)) {
  const s = sp.get(id);
  if (!s) {
    f(`${p.datei}: Stichpunkt ${id} gibt es nicht`);
    continue;
  }
  const kopf = p.text.split('\n').find((z) => z.startsWith('Thema: ')) ?? '';
  if (!kopf.endsWith(`› ${s.titel}`)) f(`${p.datei}: Zeile „Thema:“ endet nicht mit dem Titel „${s.titel}“`);
  if (!p.text.includes('✅ Kannst du abhaken')) f(`${p.datei}: Abhak-Satz „✅ Kannst du abhaken“ fehlt`);
  for (const [k, text] of s.koennen) {
    const nr = k.slice(id.length + 1);
    if (!p.text.includes(`\n### ${nr} – `)) f(`${p.datei}: Abschnitt „### ${nr} – …“ fehlt`);
    else if (!p.text.includes(`\n${text}\n`)) f(`${p.datei}: Wortlaut von ${k} weicht von inhalt/${s.raum}.json ab`);
  }
}
for (const r of RAEUME) {
  const liste = [...sp.values()].filter((s) => s.raum === r);
  const mit = liste.filter((s) => prompts[s.id]);
  if (mit.length && mit.length < liste.length) f(`${r}: ${liste.length - mit.length} Stichpunkte ohne Lernprompt, z. B. ${liste.find((s) => !prompts[s.id]).id}`);
}

const zahl = (n, wort) => `${n} ${wort}`;
console.log(
  [zahl(d.raeume.length, 'Prüfungsteile'), zahl(sp.size, 'Stichpunkte'), zahl(koennen.size, 'Können-Aussagen'), zahl(d.karten.length, 'Karten'), zahl(d.glossar.length, 'Glossarbegriffe'), zahl(Object.keys(prompts).length, 'feste Lernprompts')].join(' · '),
);
if (fehler.length) {
  console.log(`\n${fehler.length} Fehler:`);
  for (const t of fehler.slice(0, 50)) console.log('  ' + t);
  if (fehler.length > 50) console.log(`  … und ${fehler.length - 50} weitere`);
  process.exit(1);
}
console.log('Keine Fehler.');
