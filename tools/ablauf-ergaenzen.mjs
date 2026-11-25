#!/usr/bin/env node
// Ergänzt in den Lehrnotizen der Lernprompts fehlende Abläufe: Wo der Stoff nur aufzählt, was es gibt, schreibt ein
// Modell (Schreiber) in 3–6 Schritten, was passiert; ein zweites Modell (Prüfer) prüft jede Ergänzung, meldet
// übersehene Stellen und Fehler im Stoff. Eingearbeitet wird nur, was der Prüfer freigibt – als Abschnitt
// „**Abläufe zum Verstehen …:**“ in der Lehrnotiz, hinter „**Kerngedanken:**“. Stoff, Regelblock und
// inhalt/<RAUM>.json bleiben unberührt.
//
// Läuft über die Message-Batches-API (halber Preis, Ergebnis meist in unter einer Stunde, spätestens nach 24 h).
// Braucht den Schlüssel in der Umgebungsvariable ANTHROPIC_API_KEY.
//
//   node tools/ablauf-ergaenzen.mjs start [FILTER] [neu]   Schreiber-Batch anlegen. FILTER: ALLE (Vorgabe), ein Raum
//                                                         (AP1), ein Ordner (AP1-4), ein Block (AP1-4-1) oder ein
//                                                         Stichpunkt (AP1-4-1-8). Schon eingearbeitete Stichpunkte
//                                                         werden übersprungen; mit „neu“ kommen sie wieder dran.
//   node tools/ablauf-ergaenzen.mjs direkt [FILTER] [neu]  dasselbe ohne Batch: sofort, in Minuten fertig, voller Preis –
//                                                         für Tests mit wenigen Stichpunkten. Schreibt gleich den Bericht.
//   node tools/ablauf-ergaenzen.mjs weiter [warten]        Stand abfragen. Ist der Schreiber fertig, startet der
//                                                         Prüfer; ist der Prüfer fertig, entsteht der Bericht.
//                                                         Mit „warten“ fragt das Skript jede Minute selbst nach.
//   node tools/ablauf-ergaenzen.mjs einarbeiten            schreibt die freigegebenen Ergänzungen in die Prompts
//   node tools/ablauf-ergaenzen.mjs status                 zeigt, wo der Lauf steht
//
// Zwischenstände liegen in .ablauf/ (nicht im Repo). Der Bericht landet in
// inhalt/lernprompts/_Ablauf-Bericht_<Datum>_<Filter>.md (Dateien mit „_“ lädt der Build nicht).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ladeLernprompts, RAEUME } from './inhalt.mjs';
import { teileRegelblock } from './regelblock.mjs';

export const SCHREIBER = 'claude-fable-5-2';
export const PRUEFER = 'claude-opus-5-5';
// Listenpreise in US-Dollar je Million Token [Eingabe, Ausgabe], Stand 25.11.2026; im Batch die Hälfte
const PREISE = { [SCHREIBER]: [8, 40], [PRUEFER]: [4, 20] };
const BATCH_FAKTOR = 0.5;

export const ABSCHNITT = '**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**';
const NOTIZ = '\n## Lehrnotiz: ';
const KERN = '**Kerngedanken:**';
// vor der ersten dieser Zeilen (hinter den Kerngedanken) wird der Abschnitt eingefügt
const DANACH = ['**Typische Missverständnisse:**', '**Fachwörter:**', '**So fragt die IHK:**', '**Fallen:**', '**Material:**'];

// ---------------------------------------------------------------------------------------------------------------
// Lehrnotiz lesen und schreiben
// ---------------------------------------------------------------------------------------------------------------

// Nummern der Aussagen im Stoff eines Prompts: ['K1', 'K4', …]
export const aussagenIm = (text) => [...text.matchAll(/^### (K\d+) – /gm)].map((m) => m[1]);

// Abschnitt „Abläufe zum Verstehen“ samt der Leerzeile danach entfernen; ohne Abschnitt bleibt der Text gleich
export function entferneAblaeufe(text) {
  const zeilen = text.split('\n');
  const a = zeilen.indexOf(ABSCHNITT);
  if (a < 0) return text;
  let e = a + 1;
  while (e < zeilen.length && zeilen[e].startsWith('- ')) e++;
  if (zeilen[e] === '') e++;
  return [...zeilen.slice(0, a), ...zeilen.slice(e)].join('\n');
}

const einzeilig = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
const ohneNummer = (s) => einzeilig(s).replace(/^(?:\(?\d+[.)]|Schritt \d+:)\s*/i, '');
const mitPunkt = (s) => (/[.!?…]$/.test(s) ? s : `${s}.`);

// Eine Ergänzung als Zeile der Lehrnotiz: „- K5 – Titel: (1) … (2) … Vereinfacht: …“
export function ablaufZeile(e) {
  const schritte = e.schritte.map((s, i) => `(${i + 1}) ${mitPunkt(ohneNummer(s))}`).join(' ');
  const v = einzeilig(e.vereinfacht).replace(/^vereinfacht:\s*/i, '');
  return `- ${e.aussage} – ${einzeilig(e.titel).replace(/[:.]$/, '')}: ${schritte}${v ? ` Vereinfacht: ${mitPunkt(v)}` : ''}`;
}

// Ergänzungen in die Lehrnotiz setzen (ein vorhandener Abschnitt wird ersetzt). Ohne Ergänzungen: nur entfernen.
// null, wenn der Prompt keine Lehrnotiz hat.
export function setzeAblaeufeEin(text, ergaenzungen) {
  const sauber = entferneAblaeufe(text);
  if (!ergaenzungen.length) return sauber;
  const n = sauber.indexOf(NOTIZ);
  if (n < 0) return null;
  const zeilen = sauber.split('\n');
  const ab = sauber.slice(0, n + 1).split('\n').length - 1; // Zeile der Überschrift „## Lehrnotiz: …“
  const kern = zeilen.findIndex((z, i) => i > ab && z === KERN);
  let ziel = zeilen.findIndex((z, i) => i > Math.max(ab, kern) && DANACH.some((d) => z.startsWith(d)));
  const sortiert = [...ergaenzungen].sort((a, b) => Number(a.aussage.slice(1)) - Number(b.aussage.slice(1)));
  const block = [ABSCHNITT, ...sortiert.map(ablaufZeile)];
  if (ziel < 0) {
    // kein bekannter Abschnitt mehr dahinter: ans Ende, mit einer Leerzeile davor
    const ende = sauber.replace(/\n+$/, '');
    return `${ende}\n\n${block.join('\n')}\n`;
  }
  return [...zeilen.slice(0, ziel), ...block, '', ...zeilen.slice(ziel)].join('\n');
}

// ---------------------------------------------------------------------------------------------------------------
// Anweisungen für Schreiber und Prüfer
// ---------------------------------------------------------------------------------------------------------------

const MATERIAL = `Das Material: Ein Lernprompt besteht aus dem Stoff (Können-Aussagen K1, K2, … mit je einer Erklärung; das ist das Minimum, das in der Prüfung verlangt wird) und einer Lehrnotiz (Hinweise für die KI-Lehrkraft, die den Stoff später einem Umschüler im Chat beibringt).`;

const MASSSTAB = `Eine Ergänzung ist angebracht, wenn alles zutrifft:
- Hinter der Aussage läuft etwas ab oder funktioniert etwas: Technik, Protokoll, Verfahren, Rechenweg oder ein rechtlicher oder organisatorischer Vorgang mit fester Reihenfolge.
- Stoff und Lehrnotiz nennen die Schritte nicht. Sie zählen Teile, Eigenschaften oder Ergebnisse auf oder wiederholen nur die Aussage.
- Wer den Ablauf kennt, kann die Aussage begründen oder anwenden, statt sie nur aufzusagen.

Keine Ergänzung, wenn:
- die Liste selbst der Inhalt ist (Merkmale, Kriterien, Begriffe, Fristen, Vor- und Nachteile, Zuordnungen),
- der Ablauf schon im Stoff oder in der Lehrnotiz steht, auch knapp,
- bei der Aussage „in der Prüfung vorgegeben“ steht, oder sie nur ein Nennen verlangt (Stufe 1) und der Ablauf zum Verstehen nichts beiträgt,
- der Ablauf nicht sicher feststeht.`;

export const SCHREIBER_SYSTEM = `Du überarbeitest Lernmaterial für die IHK-Abschlussprüfung Fachinformatiker Anwendungsentwicklung.

${MATERIAL}

Das Problem: Viele Erklärungen zählen nur auf, was es gibt. Die Lehrkraft bleibt dann auf dieser Tiefe und erklärt mit einem Alltagsvergleich statt mit dem, was wirklich passiert. Ein Beispiel aus einem anderen Gebiet, damit klar ist, was gemeint ist: Ein Text über den Viertaktmotor nennt Zylinder, Kolben, Ventile und Zündkerze mit ihren Aufgaben. Es fehlt der Ablauf: ansaugen, verdichten, zünden und arbeiten, ausstoßen, und was Kolben und Ventile in jedem Takt tun. Der Lernende kann solche Lücken nicht selbst erkennen.

Deine Aufgabe: Geh jede Aussage durch und entscheide, ob dahinter ein Ablauf oder Mechanismus steckt, den weder die Erklärung noch die Lehrnotiz Schritt für Schritt beschreibt. Nur dann schreibst du eine Ergänzung für die Lehrnotiz, höchstens eine je Aussage.

${MASSSTAB}
Die meisten Aussagen brauchen keine Ergänzung. Im Zweifel schreibst du keine.

So schreibst du eine Ergänzung:
- 3 bis 6 Schritte in der Reihenfolge, in der sie ablaufen. Jeder Schritt ist ein kurzer, vollständiger Satz (Richtwert: höchstens 25 Wörter) mit den richtigen Fachbegriffen und sagt, wer oder was etwas tut.
- Nur gesichertes Lehrbuchwissen. Nichts, was dem Stoff widerspricht; wo der Stoff etwas festlegt (Zahlen, Begriffe, Fristen), gilt der Stoff.
- Die Tiefe ist die eines guten Berufsschullehrers: so viel, dass der Mechanismus klar wird, ohne Herstellerdetails und Sonderfälle.
- Kein Alltagsvergleich, keine Aufgabe, keine Anrede, keine Formatierung.
- Lässt du etwas weg, sodass die Darstellung fachlich nicht ganz vollständig ist, steht in „vereinfacht“ genau ein Satz mit dem Wichtigsten, das in Wirklichkeit dazukommt – keine Aufzählung von Sonderfällen. Sonst null.
- „titel“ benennt den Ablauf in wenigen Wörtern.
- „warum“ sagt in einem Satz, was im Stoff fehlt. Das liest nur der Prüfer.

Antworte nur mit einem JSON-Objekt, ohne Text davor oder danach:
{"ergaenzungen": [{"aussage": "K2", "titel": "…", "schritte": ["…", "…", "…"], "vereinfacht": null, "warum": "…"}]}
Gibt es nichts zu ergänzen: {"ergaenzungen": []}`;

export const PRUEFER_SYSTEM = `Du prüfst Ergänzungen für Lernmaterial zur IHK-Abschlussprüfung Fachinformatiker Anwendungsentwicklung. Ein Umschüler lernt damit und kann Fehler nicht selbst erkennen. Deshalb bist du streng: Was nicht sicher stimmt, lehnst du ab.

${MATERIAL}

Ein anderes Modell hat vorgeschlagen, in der Lehrnotiz Abläufe zu ergänzen, wo der Stoff nur aufzählt, was es gibt, aber nicht, was Schritt für Schritt passiert. Du bekommst den Lernprompt und die Vorschläge. Die Liste der Vorschläge kann leer sein.

${MASSSTAB}

Du hast drei Aufgaben.

1. Jeden Vorschlag prüfen:
- Stimmt jeder Schritt fachlich, und stimmt die Reihenfolge?
- Widerspricht nichts dem Stoff?
- Sind die Fachbegriffe richtig verwendet?
- Ist eine Vereinfachung als solche gekennzeichnet?
- Ist die Ergänzung nach dem Maßstab oben angebracht?
Urteil „ok“: stimmt und ist angebracht. Urteil „korrigiert“: im Kern richtig und angebracht, aber mit einem Fehler oder einer Ungenauigkeit, die du behebst; dann gibst du die vollständige korrigierte Fassung in „titel“, „schritte“ und „vereinfacht“ zurück und nennst in „grund“ in ein bis zwei Sätzen, was du geändert hast. Ändere dabei so wenig wie nötig: Behebe den Fehler im Schritt selbst, statt Vorbehalte anzuhängen. „vereinfacht“ bleibt höchstens ein Satz; was auf Berufsschulniveau stimmt, braucht keinen Hinweis auf Sonderfälle, Bauarten oder Ausnahmen. Urteil „ablehnen“: falsch, unsicher, nicht angebracht oder am Prüfungsniveau vorbei; der Grund steht in „grund“.

2. Übersehenes melden: Aussagen, bei denen nach dem Maßstab oben ein Ablauf fehlt, zu denen es aber keinen Vorschlag gibt. Schreib dort keinen Ablauf, nur einen Satz, was fehlt.

3. Fehler im Stoff melden: Stellen im Stoff oder in der Lehrnotiz, die fachlich falsch oder veraltet sind. Nur klare Fehler, keine Stilfragen und keine fehlende Tiefe.

Antworte nur mit einem JSON-Objekt, ohne Text davor oder danach. Zu jedem Vorschlag genau ein Urteil:
{"urteile": [{"aussage": "K5", "urteil": "ok", "grund": ""}, {"aussage": "K7", "urteil": "korrigiert", "grund": "…", "titel": "…", "schritte": ["…"], "vereinfacht": null}, {"aussage": "K8", "urteil": "ablehnen", "grund": "…"}], "uebersehen": [{"aussage": "K3", "hinweis": "…"}], "stoffmeldungen": [{"aussage": "K4", "meldung": "…"}]}
Leere Listen bleiben als [] stehen.`;

// Was die Modelle vom Prompt sehen: Themenzeile, Stoff und Lehrnotiz – ohne Regelblock und ohne einen schon
// eingearbeiteten Abschnitt „Abläufe zum Verstehen“. null, wenn der Prompt nicht die erwartete Form hat.
export function materialAus(text) {
  const t = teileRegelblock(text);
  if (!t || !t.rest.includes(NOTIZ)) return null;
  const thema = t.kopf.split('\n').find((z) => z.startsWith('Thema: ')) ?? '';
  return `${thema}\n\n<lernprompt>\n${entferneAblaeufe(t.rest).trim()}\n</lernprompt>`;
}

const anfrage = (id, model, system, inhalt, max_tokens, effort) => ({
  custom_id: id,
  params: { model, max_tokens, system, messages: [{ role: 'user', content: inhalt }], ...(effort ? { output_config: { effort } } : {}) },
});
export const schreiberAnfrage = (id, text) => anfrage(id, SCHREIBER, SCHREIBER_SYSTEM, materialAus(text), 32000);
export const prueferAnfrage = (id, text, vorschlaege) =>
  anfrage(id, PRUEFER, PRUEFER_SYSTEM, `${materialAus(text)}\n\n<vorschlaege>\n${JSON.stringify(vorschlaege, null, 1)}\n</vorschlaege>`, 32000, 'high');

// ---------------------------------------------------------------------------------------------------------------
// Antworten auswerten
// ---------------------------------------------------------------------------------------------------------------

// JSON-Objekt aus einer Modellantwort holen (auch aus einem Codeblock oder mit Text drumherum); null, wenn keins da ist
export function leseJson(antwort) {
  const s = String(antwort ?? '');
  const a = s.indexOf('{');
  const e = s.lastIndexOf('}');
  if (a < 0 || e <= a) return null;
  try {
    const o = JSON.parse(s.slice(a, e + 1));
    return o && typeof o === 'object' && !Array.isArray(o) ? o : null;
  } catch {
    return null;
  }
}

// Eine Zeile der Ergebnisdatei: { id, text, nutzung } oder { id, fehler }
export function leseErgebnis(zeile) {
  const id = zeile.custom_id;
  const r = zeile.result ?? {};
  if (r.type !== 'succeeded') return { id, fehler: `Anfrage ${r.type ?? 'ohne Ergebnis'}${r.error ? `: ${JSON.stringify(r.error).slice(0, 300)}` : ''}` };
  const m = r.message ?? {};
  const u = m.usage ?? {};
  const nutzung = { ein: (u.input_tokens ?? 0) + (u.cache_creation_input_tokens ?? 0) + (u.cache_read_input_tokens ?? 0), aus: u.output_tokens ?? 0 };
  if (m.stop_reason === 'max_tokens') return { id, fehler: 'Antwort abgeschnitten (max_tokens)', nutzung };
  if (m.stop_reason === 'refusal') return { id, fehler: 'Modell hat abgelehnt', nutzung };
  const text = (m.content ?? []).filter((b) => b.type === 'text').map((b) => b.text).join('');
  return { id, text, nutzung };
}

const gueltig = (e, aussagen) =>
  e && aussagen.includes(e.aussage) && einzeilig(e.titel) && Array.isArray(e.schritte) && e.schritte.length >= 2 && e.schritte.length <= 8 && e.schritte.every((s) => einzeilig(s));

// Vorschläge des Schreibers: { vorschlaege: [{aussage, titel, schritte, vereinfacht, warum}], fehler: [..] }
export function leseVorschlaege(antwort, aussagen) {
  const o = leseJson(antwort);
  if (!o || !Array.isArray(o.ergaenzungen)) return { vorschlaege: [], fehler: ['Schreiber: Antwort ist kein JSON mit „ergaenzungen“'] };
  const vorschlaege = [];
  const fehler = [];
  for (const e of o.ergaenzungen) {
    if (!gueltig(e, aussagen)) fehler.push(`Schreiber: Vorschlag zu „${einzeilig(e?.aussage)}“ hat nicht die erwartete Form`);
    else if (vorschlaege.some((v) => v.aussage === e.aussage)) fehler.push(`Schreiber: zweiter Vorschlag zu ${e.aussage} verworfen`);
    else vorschlaege.push({ aussage: e.aussage, titel: einzeilig(e.titel), schritte: e.schritte.map(ohneNummer), vereinfacht: einzeilig(e.vereinfacht) || null, warum: einzeilig(e.warum) });
  }
  return { vorschlaege, fehler };
}

// Vorschläge und Urteil des Prüfers zusammenführen. Ohne Urteil wird nichts übernommen.
// { uebernommen: [{…, korrigiert, grund}], abgelehnt: [{…, grund}], uebersehen, stoffmeldungen, fehler }
export function fuehreZusammen(vorschlaege, antwort, aussagen) {
  const erg = { uebernommen: [], abgelehnt: [], uebersehen: [], stoffmeldungen: [], fehler: [] };
  const o = leseJson(antwort);
  if (!o || !Array.isArray(o.urteile)) {
    erg.fehler.push('Prüfer: Antwort ist kein JSON mit „urteile“');
    erg.abgelehnt = vorschlaege.map((v) => ({ ...v, grund: 'kein Urteil des Prüfers' }));
    return erg;
  }
  for (const v of vorschlaege) {
    const u = o.urteile.find((x) => x?.aussage === v.aussage);
    const grund = einzeilig(u?.grund);
    if (!u) erg.abgelehnt.push({ ...v, grund: 'kein Urteil des Prüfers' });
    else if (u.urteil === 'ok') erg.uebernommen.push({ ...v, korrigiert: false, grund: '' });
    else if (u.urteil === 'korrigiert') {
      const k = { aussage: v.aussage, titel: u.titel ?? v.titel, schritte: u.schritte, vereinfacht: u.vereinfacht };
      if (gueltig(k, aussagen)) erg.uebernommen.push({ ...v, titel: einzeilig(k.titel), schritte: k.schritte.map(ohneNummer), vereinfacht: einzeilig(k.vereinfacht) || null, korrigiert: true, grund });
      else erg.abgelehnt.push({ ...v, grund: `Korrektur des Prüfers ohne brauchbare Schritte${grund ? ` (${grund})` : ''}` });
    } else erg.abgelehnt.push({ ...v, grund: grund || 'abgelehnt ohne Begründung' });
  }
  const liste = (roh, feld) =>
    (Array.isArray(roh) ? roh : []).filter((x) => x && einzeilig(x[feld])).map((x) => ({ aussage: einzeilig(x.aussage) || '–', [feld]: einzeilig(x[feld]) }));
  erg.uebersehen = liste(o.uebersehen, 'hinweis');
  erg.stoffmeldungen = liste(o.stoffmeldungen, 'meldung');
  return erg;
}

export function kosten(nutzung, modell, faktor = BATCH_FAKTOR) {
  const [ein, aus] = PREISE[modell];
  return ((nutzung.ein * ein + nutzung.aus * aus) / 1e6) * faktor;
}
const dollar = (x) => `${x.toFixed(2).replace('.', ',')} $`;
const tsd = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

// Bericht als Markdown. ergebnis: { [id]: { titel, datei, uebernommen, abgelehnt, uebersehen, stoffmeldungen, fehler } }
export function schreibeBericht(lauf, ergebnis) {
  const ids = Object.keys(ergebnis);
  const summe = (feld) => ids.reduce((s, id) => s + ergebnis[id][feld].length, 0);
  const korrigiert = ids.reduce((s, id) => s + ergebnis[id].uebernommen.filter((e) => e.korrigiert).length, 0);
  const faktor = lauf.direkt ? 1 : BATCH_FAKTOR;
  const ks = kosten(lauf.nutzung.schreiber, SCHREIBER, faktor);
  const kp = kosten(lauf.nutzung.pruefer, PRUEFER, faktor);
  const z = [
    `# Ablauf-Bericht ${lauf.datum} – ${lauf.filter}`,
    '',
    `Erzeugt von \`tools/ablauf-ergaenzen.mjs\` (Schreiber ${SCHREIBER}, Prüfer ${PRUEFER}). Noch nichts ist in den Prompts geändert; das macht \`npm run ablauf einarbeiten\`.`,
    '',
    `- Prompts gelesen: ${ids.length}, davon ${ids.filter((id) => ergebnis[id].uebernommen.length).length} mit Ergänzung`,
    `- Ergänzungen freigegeben: ${summe('uebernommen')} (davon ${korrigiert} vom Prüfer korrigiert), abgelehnt: ${summe('abgelehnt')}`,
    `- Vom Prüfer als fehlend gemeldet: ${summe('uebersehen')}, Stoff-Meldungen: ${summe('stoffmeldungen')}, Fehler: ${summe('fehler')}`,
    `- Kosten laut Abrechnungsdaten der Antworten (${lauf.direkt ? 'direkt, voller Preis' : 'Batch-Preise'}): Schreiber ${tsd(lauf.nutzung.schreiber.ein)} Token ein / ${tsd(lauf.nutzung.schreiber.aus)} aus = ${dollar(ks)}; Prüfer ${tsd(lauf.nutzung.pruefer.ein)} ein / ${tsd(lauf.nutzung.pruefer.aus)} aus = ${dollar(kp)}; zusammen ${dollar(ks + kp)}`,
    '',
  ];
  const leer = [];
  for (const id of ids) {
    const e = ergebnis[id];
    if (![e.uebernommen, e.abgelehnt, e.uebersehen, e.stoffmeldungen, e.fehler].some((l) => l.length)) {
      leer.push(id);
      continue;
    }
    z.push(`## ${id} ${e.titel}`, '');
    const teil = (titel, zeilen) => zeilen.length && z.push(`**${titel}**`, ...zeilen, '');
    teil('Wird eingearbeitet:', e.uebernommen.map((x) => `${ablaufZeile(x)}${x.korrigiert ? `\n  - Vom Prüfer korrigiert: ${x.grund || 'ohne Angabe'}` : ''}`));
    teil('Abgelehnt (wird nicht eingearbeitet):', e.abgelehnt.map((x) => `${ablaufZeile(x)}\n  - Grund: ${x.grund}`));
    teil('Vom Prüfer als fehlend gemeldet (kein Text geschrieben):', e.uebersehen.map((x) => `- ${x.aussage}: ${x.hinweis}`));
    teil('Stoff-Meldungen (nichts geändert):', e.stoffmeldungen.map((x) => `- ${x.aussage}: ${x.meldung}`));
    teil('Fehler:', e.fehler.map((x) => `- ${x}`));
  }
  if (leer.length) z.push('## Ohne Befund', '', leer.join(', '), '');
  return z.join('\n');
}

// ---------------------------------------------------------------------------------------------------------------
// Batch-API
// ---------------------------------------------------------------------------------------------------------------

const MESSAGES = 'https://api.anthropic.com/v1/messages';
const API = `${MESSAGES}/batches`;
// Zwei dokumentierte Arten, sich anzumelden; die erste, die der Server annimmt, wird für den Lauf gemerkt
const KOPF = [
  (key) => ({ 'x-api-key': key, 'anthropic-version': '2023-06-01' }),
  (key) => ({ authorization: `Bearer ${key}`, 'anthropic-version': '2026-10-21' }),
];

async function api(u, url, { body, alsText } = {}) {
  const versuche = u.lauf.kopf != null ? [u.lauf.kopf] : [0, 1];
  let letzter = '';
  for (const k of versuche) {
    const antwort = await u.fetch(url, {
      method: body ? 'POST' : 'GET',
      headers: { ...KOPF[k](u.key), ...(body ? { 'content-type': 'application/json' } : {}) },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (antwort.ok) {
      u.lauf.kopf = k;
      return alsText ? antwort.text() : antwort.json();
    }
    letzter += `${letzter ? ' | ' : ''}HTTP ${antwort.status}: ${(await antwort.text()).slice(0, 600)}`;
    if (![400, 401, 403].includes(antwort.status)) break; // nur bei Anmelde- oder Versionsfehlern die andere Art versuchen
  }
  throw new Error(letzter);
}

const legeBatchAn = async (u, anfragen) => (await api(u, API, { body: { requests: anfragen } })).id;
const holeBatch = (u, id) => api(u, `${API}/${id}`);
async function holeErgebnisse(u, batch) {
  // den Schlüssel nur an die API selbst schicken, auch wenn in der Antwort eine andere Adresse stünde
  const url = String(batch.results_url ?? '').startsWith(`${API}/`) ? batch.results_url : `${API}/${batch.id}/results`;
  const text = await api(u, url, { alsText: true });
  return text.split('\n').filter((z) => z.trim()).map((z) => leseErgebnis(JSON.parse(z)));
}

// ---------------------------------------------------------------------------------------------------------------
// Ablauf eines Laufs
// ---------------------------------------------------------------------------------------------------------------

const ordner = (wurzel) => path.join(wurzel, '.ablauf');
const datei = (wurzel, name) => path.join(ordner(wurzel), name);
const liesJson = (p, sonst) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : sonst);
const schreibJson = (p, o) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, `${JSON.stringify(o, null, 1)}\n`);
};
const heute = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// Welche Stichpunkte der Filter trifft: ALLE, Raum, Ordner, Block oder Stichpunkt
export const trifft = (filter, id) => filter === 'ALLE' || id === filter || id.startsWith(`${filter}-`);

const stand = (b) => {
  const c = b.request_counts ?? {};
  return `${c.succeeded ?? 0} fertig, ${c.processing ?? 0} in Arbeit, ${(c.errored ?? 0) + (c.expired ?? 0) + (c.canceled ?? 0)} ohne Ergebnis`;
};

// Auswahl für einen neuen Lauf: { ids, treffer } oder { code } (schon gemeldet)
function waehleAus(u, filter, neu) {
  if (u.lauf.phase && u.lauf.phase !== 'fertig') {
    u.log(`Es gibt schon einen offenen Lauf (${u.lauf.filter}, Phase „${u.lauf.phase}“). Erst „weiter“ und „einarbeiten“ – oder .ablauf/lauf.json löschen, um ihn zu verwerfen.`);
    return { code: 1 };
  }
  const { prompts } = ladeLernprompts(u.wurzel);
  const erledigt = new Set(liesJson(datei(u.wurzel, 'erledigt.json'), []));
  const treffer = Object.keys(prompts).filter((id) => trifft(filter, id));
  if (!treffer.length) {
    u.log(`Kein Lernprompt passt auf „${filter}“. Beispiele: ALLE, ${RAEUME.join(', ')}, AP1-4, AP1-4-1, AP1-4-1-8.`);
    return { code: 2 };
  }
  // erledigt ist, was im Merkzettel steht oder den Abschnitt schon im Prompt hat (der Merkzettel liegt nur lokal in .ablauf/)
  const hatAbschnitt = (id) => prompts[id].text.split('\n').includes(ABSCHNITT);
  const ids = treffer.filter((id) => neu || !(erledigt.has(id) || hatAbschnitt(id)));
  const kaputt = ids.filter((id) => !materialAus(prompts[id].text));
  if (kaputt.length) {
    u.log(`Diese Prompts haben nicht die Form Kopf, Regelblock, Stoff, Lehrnotiz: ${kaputt.join(', ')}`);
    return { code: 1 };
  }
  if (!ids.length) {
    u.log(`Alle ${treffer.length} Prompts zu „${filter}“ sind schon eingearbeitet. Mit „neu“ kommen sie wieder dran.`);
    return { code: 0 };
  }
  u.lauf = { filter, datum: heute(), ids, kopf: null, nutzung: { schreiber: { ein: 0, aus: 0 }, pruefer: { ein: 0, aus: 0 } } };
  return { ids, prompts, uebersprungen: treffer.length - ids.length };
}

async function start(u, filter, neu) {
  const w = waehleAus(u, filter, neu);
  if (!w.ids) return w.code;
  u.lauf.schreiberBatch = await legeBatchAn(u, w.ids.map((id) => schreiberAnfrage(id, w.prompts[id].text)));
  u.lauf.phase = 'schreiber';
  schreibJson(datei(u.wurzel, 'lauf.json'), u.lauf);
  u.log(`Schreiber gestartet: ${w.ids.length} Prompts (${filter})${w.uebersprungen ? `, ${w.uebersprungen} schon eingearbeitete übersprungen` : ''}. Batch ${u.lauf.schreiberBatch}.`);
  u.log('Weiter mit: npm run ablauf weiter warten');
  return 0;
}

// Antworten des Schreibers auswerten: { [id]: { vorschlaege, fehler } }, gesichert in .ablauf/vorschlaege.json
function nimmVorschlaege(u, prompts, zeilen) {
  const vorschlaege = {};
  for (const z of zeilen) {
    if (z.nutzung) for (const f of ['ein', 'aus']) u.lauf.nutzung.schreiber[f] += z.nutzung[f];
    if (!u.lauf.ids.includes(z.id) || !prompts[z.id]) continue;
    vorschlaege[z.id] = z.fehler ? { vorschlaege: [], fehler: [`Schreiber: ${z.fehler}`] } : leseVorschlaege(z.text, aussagenIm(prompts[z.id].text));
  }
  for (const id of u.lauf.ids) vorschlaege[id] ??= { vorschlaege: [], fehler: ['Schreiber: kein Ergebnis'] };
  schreibJson(datei(u.wurzel, 'vorschlaege.json'), vorschlaege);
  const zahl = Object.values(vorschlaege).reduce((s, v) => s + v.vorschlaege.length, 0);
  u.log(`Schreiber fertig: ${zahl} Vorschläge in ${Object.values(vorschlaege).filter((v) => v.vorschlaege.length).length} von ${u.lauf.ids.length} Prompts.`);
  return vorschlaege;
}

const prueferAnfragen = (u, prompts, vorschlaege) =>
  u.lauf.ids.filter((id) => prompts[id]).map((id) => prueferAnfrage(id, prompts[id].text, vorschlaege[id].vorschlaege.map(({ warum, ...v }) => v)));

// Antworten des Prüfers auswerten, Ergebnis sichern, Bericht schreiben
function schliesseAb(u, prompts, vorschlaege, zeilenListe) {
  const zeilen = new Map(zeilenListe.map((z) => [z.id, z]));
  const ergebnis = {};
  for (const id of u.lauf.ids) {
    const p = prompts[id];
    const v = vorschlaege[id] ?? { vorschlaege: [], fehler: ['Schreiber: kein Ergebnis'] };
    const z = zeilen.get(id);
    if (z?.nutzung) for (const f of ['ein', 'aus']) u.lauf.nutzung.pruefer[f] += z.nutzung[f];
    const e = !p
      ? { uebernommen: [], abgelehnt: [], uebersehen: [], stoffmeldungen: [], fehler: ['Prompt-Datei fehlt inzwischen'] }
      : !z || z.fehler
        ? { uebernommen: [], abgelehnt: v.vorschlaege.map((x) => ({ ...x, grund: 'kein Urteil des Prüfers' })), uebersehen: [], stoffmeldungen: [], fehler: [`Prüfer: ${z?.fehler ?? 'kein Ergebnis'}`] }
        : fuehreZusammen(v.vorschlaege, z.text, aussagenIm(p.text));
    const titel = p ? path.basename(p.datei, '.md').slice(id.length + 1) : '';
    ergebnis[id] = { titel, datei: p?.datei ?? null, ...e, fehler: [...v.fehler, ...e.fehler] };
  }
  schreibJson(datei(u.wurzel, 'ergebnis.json'), ergebnis);
  u.lauf.bericht = `inhalt/lernprompts/_Ablauf-Bericht_${u.lauf.datum}_${u.lauf.filter}.md`;
  fs.writeFileSync(path.join(u.wurzel, u.lauf.bericht), schreibeBericht(u.lauf, ergebnis));
  u.lauf.phase = 'bericht';
  schreibJson(datei(u.wurzel, 'lauf.json'), u.lauf);
  const n = Object.values(ergebnis).reduce((s, e) => s + e.uebernommen.length, 0);
  const faktor = u.lauf.direkt ? 1 : BATCH_FAKTOR;
  u.log(`Prüfer fertig: ${n} Ergänzungen freigegeben. Kosten zusammen ${dollar(kosten(u.lauf.nutzung.schreiber, SCHREIBER, faktor) + kosten(u.lauf.nutzung.pruefer, PRUEFER, faktor))}.`);
  u.log(`Bericht: ${u.lauf.bericht}`);
  u.log('Ansehen, dann: npm run ablauf einarbeiten');
}

// Ein Schritt weiter; gibt true zurück, wenn es ohne Warten noch etwas zu tun gibt
async function schritt(u) {
  const { prompts } = ladeLernprompts(u.wurzel);
  if (u.lauf.phase === 'schreiber') {
    const b = await holeBatch(u, u.lauf.schreiberBatch);
    if (b.processing_status !== 'ended') {
      u.log(`Schreiber läuft noch: ${stand(b)}.`);
      return false;
    }
    const vorschlaege = nimmVorschlaege(u, prompts, await holeErgebnisse(u, b));
    u.lauf.prueferBatch = await legeBatchAn(u, prueferAnfragen(u, prompts, vorschlaege));
    u.lauf.phase = 'pruefer';
    schreibJson(datei(u.wurzel, 'lauf.json'), u.lauf);
    u.log(`Prüfer gestartet, Batch ${u.lauf.prueferBatch}.`);
    return true;
  }
  if (u.lauf.phase === 'pruefer') {
    const b = await holeBatch(u, u.lauf.prueferBatch);
    if (b.processing_status !== 'ended') {
      u.log(`Prüfer läuft noch: ${stand(b)}.`);
      return false;
    }
    schliesseAb(u, prompts, liesJson(datei(u.wurzel, 'vorschlaege.json'), {}), await holeErgebnisse(u, b));
    return false;
  }
  u.log(u.lauf.phase === 'bericht' ? `Der Bericht liegt vor (${u.lauf.bericht}). Nächster Schritt: npm run ablauf einarbeiten` : 'Kein Lauf offen. Start mit: npm run ablauf start AP1-4');
  return false;
}

async function weiter(u, warten) {
  if (!['schreiber', 'pruefer'].includes(u.lauf.phase)) return (await schritt(u), 0);
  for (;;) {
    if (await schritt(u)) continue;
    if (!warten || !['schreiber', 'pruefer'].includes(u.lauf.phase)) return 0;
    await u.pause(60000);
  }
}

// Ohne Batch: jede Anfrage sofort an die Messages-API, bis zu 16 gleichzeitig. Voller Preis, dafür in Minuten fertig –
// gedacht für Tests mit wenigen Stichpunkten. Ergebnis und Bericht wie beim Batch-Lauf. Bremst die API (429) oder ist
// sie überlastet (5xx), wartet die Anfrage und versucht es bis zu sechsmal.
const GLEICHZEITIG = 16;
async function frage(u, a) {
  for (let versuch = 1; ; versuch++) {
    try {
      const message = await api(u, MESSAGES, { body: { ...a.params, max_tokens: 16000 } });
      return leseErgebnis({ custom_id: a.custom_id, result: { type: 'succeeded', message } });
    } catch (e) {
      const voruebergehend = /^HTTP (429|5\d\d)\b/.test(e.message) || !/^HTTP /.test(e.message);
      if (!voruebergehend || versuch >= 6) return { id: a.custom_id, fehler: `Anfrage fehlgeschlagen: ${e.message.slice(0, 300)}` };
      u.log(`${a.custom_id}: ${e.message.slice(0, 80)} – neuer Versuch in ${versuch * 20} s`);
      await u.pause(versuch * 20000);
    }
  }
}
async function frageAlle(u, wer, anfragen) {
  const zeilen = [];
  let naechste = 0;
  const arbeiter = async () => {
    while (naechste < anfragen.length) {
      const a = anfragen[naechste++];
      const z = await frage(u, a);
      zeilen.push(z);
      u.log(`${wer} ${zeilen.length}/${anfragen.length}: ${a.custom_id}${z.fehler ? ` – ${z.fehler}` : ''}`);
    }
  };
  await Promise.all(Array.from({ length: Math.min(GLEICHZEITIG, anfragen.length) }, arbeiter));
  return zeilen;
}

async function direkt(u, filter, neu) {
  const w = waehleAus(u, filter, neu);
  if (!w.ids) return w.code;
  u.lauf.direkt = true;
  u.log(`Direkter Lauf: ${w.ids.length} Prompts (${filter}), voller Preis statt Batch.${w.ids.length > 20 ? ' Für so viele ist „start“ (Batch) halb so teuer.' : ''}`);
  const vorschlaege = nimmVorschlaege(u, w.prompts, await frageAlle(u, 'Schreiber', w.ids.map((id) => schreiberAnfrage(id, w.prompts[id].text))));
  schliesseAb(u, w.prompts, vorschlaege, await frageAlle(u, 'Prüfer', prueferAnfragen(u, w.prompts, vorschlaege)));
  return 0;
}

function einarbeiten(u) {
  if (u.lauf.phase !== 'bericht') {
    u.log(u.lauf.phase === 'fertig' ? 'Dieser Lauf ist schon eingearbeitet.' : 'Es gibt noch keinen Bericht. Erst: npm run ablauf weiter');
    return 1;
  }
  const ergebnis = liesJson(datei(u.wurzel, 'ergebnis.json'), {});
  const { prompts } = ladeLernprompts(u.wurzel);
  const erledigt = new Set(liesJson(datei(u.wurzel, 'erledigt.json'), []));
  let geaendert = 0;
  let zeilen = 0;
  const offen = [];
  for (const [id, e] of Object.entries(ergebnis)) {
    const p = prompts[id];
    const neu = p && setzeAblaeufeEin(p.text, e.uebernommen);
    if (!p || neu == null || e.fehler.length) {
      offen.push(id); // Fehler: nicht als erledigt merken, damit der Stichpunkt beim nächsten Start wieder drankommt
      if (!p || neu == null) continue;
    } else erledigt.add(id);
    if (neu !== p.text) {
      fs.writeFileSync(path.join(u.wurzel, p.datei), neu);
      geaendert++;
    }
    zeilen += e.uebernommen.length;
  }
  schreibJson(datei(u.wurzel, 'erledigt.json'), [...erledigt].sort());
  u.lauf.phase = 'fertig';
  schreibJson(datei(u.wurzel, 'lauf.json'), u.lauf);
  u.log(`${zeilen} Ergänzungen in ${geaendert} Prompts eingearbeitet.`);
  if (offen.length) u.log(`Mit Fehler, beim nächsten Start wieder dabei: ${offen.join(', ')}`);
  u.log('Danach: npm run pruefen, npm test, npm run saetze, npm run build – und Lernstudio.html mit committen.');
  return 0;
}

// umgebung: { wurzel, fetch, key, log, pause } – in Tests austauschbar
export async function haupt(argumente, umgebung = {}) {
  const wurzel = umgebung.wurzel ?? path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const u = {
    wurzel,
    fetch: umgebung.fetch ?? globalThis.fetch,
    key: 'key' in umgebung ? umgebung.key : process.env.ANTHROPIC_API_KEY, // Tests geben den Schlüssel vor, auch „keinen“
    log: umgebung.log ?? console.log,
    pause: umgebung.pause ?? ((ms) => new Promise((r) => setTimeout(r, ms))),
    lauf: liesJson(datei(wurzel, 'lauf.json'), {}),
  };
  const [befehl, ...rest] = argumente;
  const wort = (w) => rest.some((r) => r.toLowerCase() === w);
  const hilfe = () => (u.log('Aufruf: node tools/ablauf-ergaenzen.mjs start|direkt [ALLE|AP1|AP1-4|AP1-4-1|AP1-4-1-8] [neu] | weiter [warten] | einarbeiten | status'), 2);
  if (!['start', 'direkt', 'weiter', 'einarbeiten', 'status'].includes(befehl)) return hilfe();
  if (befehl === 'status') {
    u.log(u.lauf.phase ? `Lauf ${u.lauf.filter} vom ${u.lauf.datum}: Phase „${u.lauf.phase}“, ${u.lauf.ids.length} Prompts.` : 'Kein Lauf angelegt.');
    return 0;
  }
  if (befehl === 'einarbeiten') return rest.length ? hilfe() : einarbeiten(u);
  if (!u.key && (befehl !== 'weiter' || ['schreiber', 'pruefer'].includes(u.lauf.phase))) {
    u.log('ANTHROPIC_API_KEY ist nicht gesetzt. In PowerShell: $env:ANTHROPIC_API_KEY = "…"');
    return 1;
  }
  try {
    if (befehl === 'weiter') return rest.every((r) => r.toLowerCase() === 'warten') ? await weiter(u, wort('warten')) : hilfe();
    const filter = rest.filter((r) => r.toLowerCase() !== 'neu');
    if (filter.length > 1) return hilfe();
    return await (befehl === 'direkt' ? direkt : start)(u, (filter[0] ?? 'ALLE').toUpperCase(), wort('neu'));
  } catch (e) {
    u.log(`Fehler bei der API: ${e.message}`);
    return 1;
  }
}

// Nur beim direkten Aufruf laufen, nicht beim Import (Tests)
const echt = (p) => fs.realpathSync.native(p);
if (process.argv[1] && fs.existsSync(process.argv[1]) && echt(process.argv[1]) === echt(fileURLToPath(import.meta.url))) process.exit(await haupt(process.argv.slice(2)));
