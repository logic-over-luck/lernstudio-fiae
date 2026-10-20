// Unterricht des Zahlen-Trainers: Kapitel und Fachbegriffe je Thema (rein, getestet). Die Texte stehen in den
// JSX-Dateien gleichen Namens (gesammelt in inhalt.js), die Ansicht ist lernsystem/Unterricht.jsx.
// Ein Thema mit leerer Kapitelliste zeigt in Verstehen noch die Kurz-Erklärung aus themen.js.

import { teilZurArt as suche } from '../../lernsystem/struktur.js';
import * as zahlensysteme from './zahlensysteme.js';
import * as praefixe from './praefixe.js';
import * as speicher from './speicher.js';
import * as uebertragung from './uebertragung.js';
import * as strom from './strom.js';
import * as rechte from './rechte.js';
import * as paritaet from './paritaet.js';

const THEMEN = { zahlensysteme, praefixe, speicher, uebertragung, strom, rechte, paritaet };

// thema → Kapitel (nur Themen mit Unterricht)
export const UNTERRICHT = Object.fromEntries(Object.entries(THEMEN).filter(([, t]) => t.KAPITEL.length).map(([id, t]) => [id, t.KAPITEL]));

// thema → { <begriff-id>: { wort, glossar } }
export const BEGRIFFE = Object.fromEntries(Object.entries(THEMEN).map(([id, t]) => [id, t.BEGRIFFE]));

// Kapitel und Teil, die eine Aufgabenart eines Themas erklären (Verweis im Lösungsweg); ohne Treffer null
export const teilZurArt = (thema, art) => suche(UNTERRICHT[thema], art);
