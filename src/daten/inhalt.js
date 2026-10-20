// Inhalt der App: Struktur der Lernräume, Stichpunkte, Lernkarten, Glossar.
// Kommt beim Bauen aus inhalt/*.json (siehe tools/inhalt.mjs).

import daten from 'virtual:daten';
import { baueIndex } from './index.js';
import { setzeAufloesung } from '../bereiche/trainer/verzeichnis.js';

export const inhalt = baueIndex(daten);
setzeAufloesung({ raum: (id) => inhalt.raumVon(id) });
