// Struktur eines Unterrichts: Abfragen für die Ansicht und eine Prüfung für die Tests aller Trainer. Rein.
//
// Unterricht eines Themas = Liste von Kapiteln:
//   { id, name, worum, kurz, braucht: [frühere Kapitel-IDs], lernziele: [Text], begriffe: [Begriff-IDs], pruefung: [Text],
//     teile: [{ id, titel, arten?: [Aufgabenart-IDs] }] }
//   worum: ein Satz unter dem Titel · kurz: das Kapitel in ein, zwei Sätzen (Wiederholung in „Baut auf“, **fett** erlaubt)
//   lernziele: „Am Ende kannst du …“ – je Lernziel ein Satz in pruefung („So sagst du es in der Prüfung“)
//   begriffe: in der Reihenfolge, in der das Kapitel sie mit <SoHeisstDas> einführt
//   arten: Aufgabenarten, die dieser Teil erklärt – der Lösungsweg beim Üben verweist dorthin
// Begriffe eines Themas: { <id>: { wort, glossar } } – wort wie in Text und Prüfung, glossar = Eintrag im Glossar.

// Aufgabenarten, die ein Kapitel erklärt (für „Aufgaben dazu üben“)
export const artenVon = (kapitel) => kapitel.teile.flatMap((t) => t.arten ?? []);

// Kapitel und Teil, die eine Aufgabenart erklären; ohne Treffer null
export function teilZurArt(kapitelListe, art) {
  for (const kapitel of kapitelListe ?? []) {
    const teil = kapitel.teile.find((t) => t.arten?.includes(art));
    if (teil) return { kapitel, teil };
  }
  return null;
}

// Prüft einen Unterricht gegen die Regeln des Leitfadens. Liefert eine Liste von Fehlern (leer = in Ordnung).
//   kapitel, begriffe: wie oben · arten: alle Aufgabenarten des Themas ([{ id }]) · glossar: Set der Glossar-Begriffe
//   quelltext: Inhalt der JSX-Datei des Themas (dort müssen alle Teile und <SoHeisstDas begriff="…"> stehen)
export function pruefeUnterricht({ kapitel, begriffe, arten, glossar, quelltext }) {
  const f = [];
  const kIds = kapitel.map((k) => k.id);
  const teile = kapitel.flatMap((k) => k.teile);
  if (new Set(kIds).size !== kIds.length) f.push('doppelte Kapitel-ID');
  if (new Set(teile.map((t) => t.id)).size !== teile.length) f.push('doppelte Teil-ID');
  for (const [i, k] of kapitel.entries()) {
    const wo = `Kapitel ${k.id}`;
    for (const feld of ['name', 'worum', 'kurz']) if (!k[feld]) f.push(`${wo}: ${feld} fehlt`);
    if (!k.teile?.length) f.push(`${wo}: keine Teile`);
    if (!(k.lernziele?.length >= 1 && k.lernziele.length <= 4)) f.push(`${wo}: 1 bis 4 Lernziele`);
    if (k.pruefung?.length !== k.lernziele?.length) f.push(`${wo}: je Lernziel genau ein Prüfungssatz`);
    if (!k.begriffe?.length) f.push(`${wo}: keine Begriffe`);
    for (const b of k.braucht ?? []) if (!kIds.slice(0, i).includes(b)) f.push(`${wo}: braucht ${b} ist kein früheres Kapitel`);
    for (const t of k.teile ?? []) {
      if (!t.titel) f.push(`Teil ${t.id}: Titel fehlt`);
      for (const a of t.arten ?? []) if (!arten.some((x) => x.id === a)) f.push(`Teil ${t.id}: Aufgabenart ${a} gibt es nicht`);
      if (quelltext && !new RegExp(`(^|\\n)\\s*'?${t.id}'?: \\(\\) => \\[`).test(quelltext)) f.push(`Teil ${t.id}: kein Inhalt in der JSX-Datei`);
    }
  }
  for (const a of arten) {
    const n = teile.filter((t) => t.arten?.includes(a.id)).length;
    if (n !== 1) f.push(`Aufgabenart ${a.id}: wird von ${n} statt genau einem Teil erklärt`);
  }
  // Begriffe: im Glossar, genau einmal eingeführt, im Kopf des einführenden Kapitels
  const imKopf = kapitel.flatMap((k) => k.begriffe ?? []);
  if (new Set(imKopf).size !== imKopf.length) f.push('ein Begriff steht in mehreren Kapiteln');
  for (const id of imKopf) {
    if (!begriffe[id]) f.push(`Begriff ${id}: fehlt in BEGRIFFE`);
    else if (glossar && !glossar.has(begriffe[id].glossar)) f.push(`Begriff ${id}: „${begriffe[id].glossar}“ fehlt im Glossar`);
  }
  if (quelltext) {
    const eingefuehrt = [...quelltext.matchAll(/<SoHeisstDas begriff="([^"]+)"/g)].map((m) => m[1]);
    if (new Set(eingefuehrt).size !== eingefuehrt.length) f.push('ein Begriff wird mehrfach mit <SoHeisstDas> eingeführt');
    for (const id of imKopf) if (!eingefuehrt.includes(id)) f.push(`Begriff ${id}: steht im Kapitelkopf, wird aber nie mit <SoHeisstDas> eingeführt`);
    for (const id of eingefuehrt) if (!imKopf.includes(id)) f.push(`<SoHeisstDas begriff="${id}">: steht in keinem Kapitelkopf`);
    for (const m of quelltext.matchAll(/<B id="([^"]+)"/g)) if (!begriffe[m[1]]) f.push(`<B id="${m[1]}">: unbekannter Begriff`);
  }
  return f;
}
