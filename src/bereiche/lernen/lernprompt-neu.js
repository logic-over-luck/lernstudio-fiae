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

// Regeln für die Wiederholung; in WiSo sind die Aufgaben gebunden wie in der Prüfung.
// Bei mehreren Stichpunkten wächst die Zahl der Aufgaben mit (mindestens zwei je Stichpunkt, zusammen mindestens 10),
// damit das Urteil je Stichpunkt eine Grundlage hat.
// Seit 26.11.2026 wie im Regelblock: Stoff und Lehrnotiz liest nur die Lehrkraft, geprüft wird der Satz „Du kannst …“
// (keine Nebenbemerkung, kein Nachbarstoff), bewertet wird mit Punkten. In WiSo bleibt es bei „ganz oder gar nicht“.
export function wiederholRegeln(raum, mehrere, anzahl = mehrere ? 2 : 1) {
  const auswertung = mehrere
    ? `- Stell zu jedem Stichpunkt mindestens zwei Aufgaben, zusammen etwa ${Math.max(10, 2 * anzahl)}. Danach wertest du aus, was sitzt und was wackelt – je Stichpunkt. Was wackelt, erklärst du kurz noch einmal – wo etwas abläuft, Schritt für Schritt, was passiert, nicht nur mit einem Vergleich – und stellst dazu eine weitere Aufgabe.`
    : '- Nach etwa 5 Aufgaben wertest du aus, was sitzt und was wackelt. Was wackelt, erklärst du kurz noch einmal – wo etwas abläuft, Schritt für Schritt, was passiert, nicht nur mit einem Vergleich – und stellst dazu eine weitere Aufgabe.';
  const urteil = mehrere
    ? '- Zum Schluss schreibst du je Stichpunkt entweder „✅ Sitzt noch: <Titel des Stichpunkts>“ oder „🔁 Noch einmal lernen: <Titel des Stichpunkts>“ – dann öffne ich ihn in meinem Lernplan wieder. Ein Urteil gibst du nur zu Stichpunkten ab, zu denen ich mindestens zwei Aufgaben beantwortet habe; fehlt eine, stell sie vorher.'
    : '- Zum Schluss schreibst du entweder „✅ Sitzt noch: <Titel des Stichpunkts>“ oder „🔁 Noch einmal lernen: <Titel des Stichpunkts>“ – dann öffne ich ihn in meinem Lernplan wieder.';
  const was = mehrere ? 'Diese Stichpunkte' : 'Diesen Stichpunkt';
  const aufgaben =
    raum === 'WISO'
      ? '- Stell die Aufgaben gebunden wie in der Prüfung: Auswahl 1 aus 5, Zuordnung, Reihenfolge oder Zahl eintragen, mit plausiblen falschen Antworten. Jede zählt ganz oder gar nicht.'
      : '- Die Aufgaben sollen mich vor allem anwenden lassen, nicht nur die Erklärung nachsagen. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest. Zeichnungen mache ich auf Papier und lade ein Foto hoch.';
  const bewertung =
    raum === 'WISO'
      ? '- Lass mich erst antworten, bevor du die Lösung zeigst. Danach sag mir kurz, was gepasst hat und wo es hakt. Bewerte nur, was in der Aufgabe verlangt war. Stimmt der Inhalt und fehlt nur das Fachwort, zählt es als richtig: Nenn mir das Wort und weiter.'
      : '- Lass mich erst antworten, bevor du die Lösung zeigst. Sag bei jeder Aufgabe, wie viele Punkte sie hat (ein Punkt je verlangtem Teil). Bewerte nur, was verlangt war, mit „x von y Punkten“ und dem, was fehlte: ✅ nur bei voller Punktzahl, ⚠️ bei Teilpunkten, ❌ bei null. Stimmt der Inhalt und fehlt nur das Fachwort, gibt es den Punkt: Nenn mir das Wort und weiter.';
  return [
    '## So läuft die Wiederholung',
    '',
    `Hey! ${was} habe ich schon gelernt und abgehakt – jetzt schauen wir, ob ${mehrere ? 'sie noch sitzen' : 'er noch sitzt'}. Du bist dabei mein Prüfer für die IHK-Prüfung. Unten stehen der **Stoff** (was ich können muss, mit Erklärungen) und ${mehrere ? 'je Stichpunkt eine **Lehrnotiz**' : 'eine **Lehrnotiz**'} mit typischen Fehlern und dem, was schon geprüft wurde. Beides liest nur du.`,
    '',
    'Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:',
    '',
    `- Keine Erklärung vorweg, wir legen direkt mit Aufgaben zu den Aussagen los${mehrere ? ', gemischt quer durch alle Stichpunkte' : ''}. Immer nur eine Aufgabe pro Nachricht. Fang mit dem an, was schon in einer Prüfung dran war (Lehrnotiz „Schon geprüft“), und bau die typischen Fehler aus der Lehrnotiz ein.`,
    '- Jede Aufgabe prüft, was ein Satz „Du kannst …“ verlangt. Was eine Erklärung im Stoff nur nebenbei erwähnt oder die Lehrnotiz einem Nachbarstichpunkt zuordnet, fragst du nicht ab. Fehlende Nummern (etwa K4) sind Absicht.',
    aufgaben,
    bewertung,
    '- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.',
    '- Der Stoff ist die Grundlage. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.',
    auswertung,
    urteil,
    '- „Pause“ heißt: Fass kurz zusammen, wo wir stehen; später mache ich im selben Chat weiter.',
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
  return [kopf, '', wiederholRegeln(block.raum, sps.length > 1, sps.length), '', abschnitte.join('\n\n'), ''].join('\n');
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
