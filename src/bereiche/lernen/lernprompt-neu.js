// Welcher Lernprompt kopiert wird.
// Neu lernen (alle Räume): der feste Prompt aus inhalt/lernprompts/<RAUM>/ – je Stichpunkt eine Datei aus Kopf,
// Regelblock, Stoff und Lehrnotiz. Er ist für genau einen Stichpunkt pro Sitzung gebaut; der Block-Knopf
// nimmt deshalb den nächsten offenen Stichpunkt des Blocks.
// Wiederholen (Stichpunkt oder Block schon abgehakt) und Stichpunkte ohne feste Datei: der erzeugte Prompt aus
// lernprompt.js.

import { lernpromptStichpunkt, lernpromptBlock, blockAuswahl } from './lernprompt.js';

export const festerPrompt = (sp, index) => index.daten?.lernprompts?.[sp.id] ?? null;

export function promptStichpunkt(sp, index, stand) {
  const fest = festerPrompt(sp, index);
  if (!fest || stand.spErledigt.has(sp.id)) return lernpromptStichpunkt(sp, index, stand);
  const notiz = stand.notizen.get(sp.id);
  return notiz ? `${fest.trimEnd()}\n\n## Meine eigene Notiz dazu\n\n${notiz}\n` : fest;
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
  return { text: lernpromptBlock(block, index, stand), was };
}

export const hatFesteBlockPrompts = (block, index) => block.sp.some((id) => index.daten?.lernprompts?.[id]);
