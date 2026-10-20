// Antworten in Zwischenfragen prüfen (<Eingabe pruefe={…}>) und Eingaben lesen. Rein, ohne Browser-Abhängigkeit.
// Ein Prüfer bekommt den eingegebenen Text und liefert true (richtig), einen Text (falsch, mit gezieltem Hinweis auf den
// Denkfehler) oder false (falsch, dann zeigt die Frage ihren allgemeinen Tipp).

import { lesarten } from '../rahmen/pruefen.js';

// Binärzahl ohne Leerzeichen und führende Nullen („0010 1101“ → „101101“), null wenn ungültig
export function binaerText(text) {
  const roh = String(text).replace(/[\s_]/g, '').replace(/^0b/i, '');
  if (!/^[01]+$/.test(roh)) return null;
  return roh.replace(/^0+(?=.)/, '');
}

// Hexzahl in Großbuchstaben ohne 0x, h und führende Nullen; null wenn ungültig
export function hexText(text) {
  const roh = String(text).replace(/\s/g, '').replace(/^0x/i, '').replace(/h$/i, '').toUpperCase();
  if (!/^[0-9A-F]+$/.test(roh)) return null;
  return roh.replace(/^0+(?=.)/, '');
}

// Ganze Dezimalzahl („1.024“, „255“); null wenn keine
export function ganzeZahl(text) {
  const roh = String(text).replace(/[\s.]/g, '');
  return /^\d+$/.test(roh) ? Number(roh) : null;
}

const nah = (a, b, toleranz) => Math.abs(a - b) <= toleranz;

// Zahl (auch mit Komma, Tausenderpunkt und Einheit dahinter: „5,93 MiB“). fehler: { <falscher Wert>: Hinweis }.
// toleranz: erlaubte Abweichung, z. B. 0.01 bei „auf zwei Stellen gerundet“.
export const istZahl =
  (soll, fehler = {}, toleranz = 1e-9) =>
  (text) => {
    const werte = lesarten(text);
    if (!werte.length) return 'Bitte eine Zahl eingeben.';
    if (werte.some((w) => nah(w, soll, toleranz))) return true;
    for (const [wert, hinweis] of Object.entries(fehler)) if (werte.some((w) => nah(w, Number(wert), toleranz))) return hinweis;
    return false;
  };

// Binärzahl; erkennt spiegelverkehrte Bits
export const istBinaer = (soll) => (text) => {
  const b = binaerText(text);
  if (b === null) return 'Eine Binärzahl besteht nur aus 0 und 1.';
  if (b === binaerText(soll)) return true;
  const gespiegelt = binaerText([...String(text).replace(/\s/g, '')].reverse().join(''));
  if (gespiegelt === binaerText(soll)) return 'Die Bits stehen spiegelverkehrt – das Bit mit dem Stellenwert 1 gehört ganz nach rechts.';
  return false;
};

// Hexzahl. fehler: { <falsche Eingabe>: Hinweis }
export const istHex =
  (soll, fehler = {}) =>
  (text) => {
    const h = hexText(text);
    if (h === null) return 'Hex-Ziffern sind 0 bis 9 und A bis F.';
    return h === hexText(soll) ? true : (fehler[h] ?? false);
  };

// Kurzer Text, z. B. „rwxr-x---“ oder „gerade“: ohne Leerzeichen, Groß/klein egal. erlaubt: richtige Schreibweisen
export const istText =
  (erlaubt, fehler = {}) =>
  (text) => {
    const norm = (t) => String(t).replace(/\s/g, '').toLowerCase();
    const t = norm(text);
    if (!t) return 'Bitte etwas eingeben.';
    if ([].concat(erlaubt).some((e) => norm(e) === t)) return true;
    for (const [falsch, hinweis] of Object.entries(fehler)) if (norm(falsch) === t) return hinweis;
    return false;
  };
