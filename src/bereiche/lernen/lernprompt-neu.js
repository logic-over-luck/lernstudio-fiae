// Welcher Lernprompt kopiert wird.
// Neu lernen (alle Räume): der feste Prompt aus inhalt/lernprompts/<RAUM>/ – je Stichpunkt eine Datei aus Kopf,
// Regelblock, Stoff und Lehrnotiz. Er ist für genau einen Stichpunkt pro Sitzung gebaut; der Block-Knopf
// nimmt deshalb den nächsten offenen Stichpunkt des Blocks.
// Wiederholen (Stichpunkt oder Block schon abgehakt): Kopf, Stoff und Lehrnotiz derselben Datei, aber mit den Regeln
// für die Wiederholung statt für das Lernen. Stichpunkte ohne feste Datei: der erzeugte Prompt aus lernprompt.js.

import { lernpromptStichpunkt, lernpromptBlock, blockAuswahl } from './lernprompt.js';

export const festerPrompt = (sp, index) => index.daten?.lernprompts?.[sp.id] ?? null;

// Feste Datei in ihre Teile zerlegen; null, wenn sie nicht die erwartete Form hat
const TEILE = /^([\s\S]*?)\n+## So läuft unsere Sitzung\n[\s\S]*?\n(## Stoff: [\s\S]*?)\n+(## Lehrnotiz: [\s\S]*)$/;
function zerlege(fest) {
  const m = fest?.match(TEILE);
  return m ? { kopf: m[1].trim(), stoff: m[2].trim(), notiz: m[3].trim() } : null;
}

// Regeln für die Wiederholung; in WiSo sind die Aufgaben gebunden wie in der Prüfung
export function wiederholRegeln(raum, mehrere) {
  const was = mehrere ? 'Diese Stichpunkte' : 'Diesen Stichpunkt';
  const aufgaben =
    raum === 'WISO'
      ? '- Die Aufgaben denkst du dir selbst aus und stellst sie gebunden wie in der Prüfung: Auswahl 1 aus 5, Zuordnung, Reihenfolge oder Zahl eintragen, mit plausiblen falschen Antworten. Gewertet wird jede ganz oder gar nicht.'
      : '- Die Aufgaben denkst du dir selbst aus. Sie lassen anwenden (eine neue Lage, einen Fehler finden, einen Vorschlag beurteilen), nicht nachsagen. Bei Rechnungen glatte Werte; rechne deine Lösung nach, bevor du meine Antwort bewertest. Zeichnen: Ich zeichne auf Papier und lade ein Foto hoch.';
  return [
    '## So läuft die Wiederholung',
    '',
    `Du bist mein Prüfer für die IHK-Prüfung. ${was} habe ich schon gelernt und abgehakt; prüfe, ob ${mehrere ? 'sie noch sitzen' : 'er noch sitzt'}. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und ${mehrere ? 'je Stichpunkt eine **Lehrnotiz**' : 'eine **Lehrnotiz**'} mit typischen Fehlern und dem, was schon geprüft wurde.`,
    '',
    `- Keine Erklärung vorweg. Stell mir Aufgaben zu den Aussagen${mehrere ? ', gemischt quer durch alle Stichpunkte' : ''}, immer nur eine pro Nachricht. Fang mit dem an, was schon in einer Prüfung vorkam (Lehrnotiz „Schon geprüft“), und nimm die typischen Fehler aus der Lehrnotiz hinein.`,
    aufgaben,
    '- Nach meiner Antwort: sag kurz, was richtig war, wo der Fehler liegt und wie die richtige Antwort lautet. Zeig Lösungen nie, bevor ich geantwortet habe. Stimmt der Inhalt und fehlt nur das Fachwort, zählt die Antwort als richtig: Nenn mir das Wort und geh weiter.',
    '- Der Stoff ist verbindlich. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht bei einer Aussage „in der Prüfung vorgegeben“, muss ich das nur anwenden.',
    `- Nach etwa ${mehrere ? 10 : 5} Aufgaben wertest du aus, was sitzt und was wackelt${mehrere ? ' – je Stichpunkt' : ''}. Was wackelt, erklärst du kurz noch einmal und stellst dazu eine weitere Aufgabe.`,
    `- Zum Schluss schreibst du ${mehrere ? 'je Stichpunkt' : ''} entweder „✅ Sitzt noch: <Titel des Stichpunkts>“ oder „🔁 Noch einmal lernen: <Titel des Stichpunkts>“ – dann öffne ich ihn in meinem Lernplan wieder.`.replace('  ', ' '),
    '- Schreibe ich „Pause“, fass in zwei Zeilen zusammen, wo wir stehen; später mache ich im selben Chat weiter.',
    '',
    'Antworte auf Deutsch.',
  ].join('\n');
}

const mitNotiz = (text, notiz) => (notiz ? `${text.trimEnd()}\n\n## Meine eigene Notiz dazu\n\n${notiz}\n` : text);

export function promptStichpunkt(sp, index, stand) {
  const fest = festerPrompt(sp, index);
  if (!fest) return lernpromptStichpunkt(sp, index, stand);
  const notiz = stand.notizen.get(sp.id);
  if (!stand.spErledigt.has(sp.id)) return mitNotiz(fest, notiz);
  const t = zerlege(fest);
  if (!t) return lernpromptStichpunkt(sp, index, stand);
  return mitNotiz([t.kopf, '', wiederholRegeln(sp.raum, false), '', t.stoff, '', t.notiz, ''].join('\n'), notiz);
}

// Alle Stichpunkte des Blocks abgehakt: ein Prompt mit Stoff und Lehrnotiz aller Stichpunkte; null, wenn eine Datei fehlt
function wiederholBlock(block, ids, index, stand) {
  const sps = ids.map((id) => index.sp.get(id));
  const teile = sps.map((sp) => zerlege(festerPrompt(sp, index)));
  if (!teile.length || teile.some((t) => !t)) return null;
  const ordner = index.ordner.get(block.ordner);
  const kopf = [teile[0].kopf.split('\n')[0], `Themenblock: ${ordner.titel} › ${block.titel}`].join('\n');
  const abschnitte = sps.map((sp, i) => {
    const notiz = stand.notizen.get(sp.id);
    return [`# Stichpunkt ${i + 1} von ${sps.length}: ${sp.titel}`, '', teile[i].stoff, '', teile[i].notiz, notiz ? `\n## Meine eigene Notiz dazu\n\n${notiz}` : null].filter((z) => z !== null).join('\n');
  });
  return [kopf, '', wiederholRegeln(block.raum, sps.length > 1), '', abschnitte.join('\n\n'), ''].join('\n');
}

// { text, was } – `was` ist der Name für die Meldung nach dem Kopieren
export function promptBlock(block, index, stand) {
  const { modus, ids } = blockAuswahl(block, stand);
  if (modus === 'lernen') {
    const sp = index.sp.get(ids[0]);
    if (festerPrompt(sp, index))
      return { text: promptStichpunkt(sp, index, stand), was: `Lernprompt für „${sp.titel}“${ids.length > 1 ? ` (nächster von ${ids.length} offenen)` : ''}` };
  }
  const was = modus === 'wiederholen' ? 'Wiederholungs-Prompt' : ids.length === 1 ? 'Lernprompt für den offenen Stichpunkt' : `Lernprompt für ${ids.length} offene Stichpunkte`;
  const text = (modus === 'wiederholen' && wiederholBlock(block, ids, index, stand)) || lernpromptBlock(block, index, stand);
  return { text, was };
}

export const hatFesteBlockPrompts = (block, index) => block.sp.some((id) => index.daten?.lernprompts?.[id]);
