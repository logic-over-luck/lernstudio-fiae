// Alle Lernregeln an einer Stelle: Wiederholungs-Abstände, Kartenplanung, Punkte, Ränge.
// Die Hilfe-Seite liest dieselben Werte, damit Erklärung und Verhalten nie auseinanderlaufen.

import { tagPlus } from './zeit.js';

// Lernkarten: Abstand in Tagen je Stufe. Stufe 0 = neu oder vergessen.
// (Die früheren Wiederholungs-Phasen eines Blocks gibt es nicht mehr. Alte Ereignisse `wdh` bleiben lesbar,
// ihre Punkte bleiben gebucht; geplant wird nur noch über die Karten.)
export const KARTEN_ABSTAND = [0, 1, 3, 7, 16, 35, 75];
export const KARTEN_MAX_STUFE = KARTEN_ABSTAND.length - 1;
// Ab dieser Stufe gilt eine Karte als „sicher" (sie hat mindestens eine Woche Abstand gehalten).
export const KARTE_SICHER_AB = 3;

// Prüfungsrunde: Ist ein Prüfungstermin eingetragen, kommt jede Karte in den letzten PRUEFUNG_FENSTER Tagen
// vor der Prüfung einmal dran – spätestens PRUEFUNG_PUFFER Tage vorher, gleichmäßig über das Fenster verteilt.
export const PRUEFUNG_FENSTER = 42;
export const PRUEFUNG_PUFFER = 3;

// Nach einer Pause: Sind mehr Karten fällig als das, kommen die jüngsten (niedrigste Stufe) zuerst.
export const RUECKSTAU_AB = 150;

// So oft „nicht gewusst“, dann gilt eine Karte als Problemkarte.
export const PROBLEM_AB = 4;

export const NOTE = { NICHT: 0, UNSICHER: 1, GEWUSST: 2 };

export function naechsteStufe(stufe, note) {
  // Von Stufe 0 (neu oder zuletzt nicht gewusst) springt „Gewusst" auf Stufe 2 (3 Tage),
  // damit es sich von „Unsicher" (Stufe 1, morgen) unterscheidet.
  if (note === NOTE.GEWUSST) return Math.min(stufe === 0 ? 2 : stufe + 1, KARTEN_MAX_STUFE);
  if (note === NOTE.UNSICHER) return Math.max(1, stufe - 1);
  return 0;
}

// Fester, gleichmäßig verteilter Wert je Karte (für die Verteilung im Prüfungsfenster)
function streuwert(id, n) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h % n;
}

// Wendet die Prüfungsrunde auf einen geplanten Termin an. Tage als 'JJJJ-MM-TT'.
// roh: Termin nach der Leiter · zuletzt: Tag der letzten Antwort · pruefung: Prüfungstag oder null.
// Fiele die Karte erst nach „Prüfung − Puffer“ und war sie im Fenster noch nicht dran, kommt sie
// stattdessen an einem festen Tag im Fenster (aber frühestens am Tag nach der letzten Antwort).
export function mitPruefungsrunde(roh, zuletzt, pruefung, id) {
  if (!pruefung || zuletzt >= pruefung) return roh;
  const spaetestens = tagPlus(pruefung, -PRUEFUNG_PUFFER);
  if (roh <= spaetestens) return roh;
  if (zuletzt >= tagPlus(pruefung, -PRUEFUNG_FENSTER)) return roh; // im Fenster schon dran gewesen
  const tag = tagPlus(spaetestens, -streuwert(id, PRUEFUNG_FENSTER - PRUEFUNG_PUFFER));
  const morgen = tagPlus(zuletzt, 1);
  return tag > morgen ? tag : morgen;
}

// Erfahrungspunkte je Lernhandlung
export const XP = {
  stichpunkt: 10,
  blockGeschafft: 20,
  wiederholung: 15, // nur noch für alte Ereignisse der früheren Wiederholungs-Phasen
  // Jede Kartenantwort zählt gleich – die Bewertung soll ehrlich sein, nicht lohnend.
  karte: [1, 1, 1],
  aufgabeRichtig: 5,
  aufgabeVersucht: 1,
  fokusJeMinuten: 2, // 1 Punkt je 2 Minuten
  pruefung: 40, // abgeschlossene Probeprüfung
};

export const RAENGE = [
  { name: 'Hello World', ab: 0, text: 'Der erste Schritt ist gemacht.' },
  { name: 'Bit-Schubser', ab: 150, text: 'Die ersten Bits sitzen an ihrem Platz.' },
  { name: 'Byte-Bändiger', ab: 400, text: 'Acht Bits, ein Gedanke.' },
  { name: 'Bug-Jäger', ab: 800, text: 'Fehler haben bei dir keine Chance mehr.' },
  { name: 'Script-Schreiber', ab: 1400, text: 'Wiederkehrendes erledigst du automatisch.' },
  { name: 'Junior Developer', ab: 2200, text: 'Du lieferst – Stück für Stück.' },
  { name: 'Code-Reviewer', ab: 3200, text: 'Du siehst, was anderen entgeht.' },
  { name: 'Full Stack', ab: 4500, text: 'Von der Datenbank bis zur Oberfläche.' },
  { name: 'Sysadmin', ab: 6000, text: 'Netz, Server, Sicherheit – alles im Griff.' },
  { name: 'Senior Developer', ab: 8000, text: 'Erfahrung, die man merkt.' },
  { name: 'Software-Architekt', ab: 10500, text: 'Du denkst in Systemen.' },
  { name: 'Root User', ab: 13500, text: 'Voller Zugriff. Auf alles.' },
  { name: 'Kernel-Hacker', ab: 17000, text: 'Tiefer geht es nicht.' },
];

export function rangFuer(xp) {
  let index = 0;
  for (let i = 0; i < RAENGE.length; i++) if (xp >= RAENGE[i].ab) index = i;
  const rang = RAENGE[index];
  const naechster = RAENGE[index + 1] ?? null;
  const anteil = naechster ? (xp - rang.ab) / (naechster.ab - rang.ab) : 1;
  return { index, ...rang, naechster, anteil };
}
