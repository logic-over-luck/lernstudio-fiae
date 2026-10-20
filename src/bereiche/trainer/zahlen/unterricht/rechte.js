// Unterricht Dateirechte (chmod): Kapitel und Fachbegriffe (Format: lernsystem/struktur.js, Regeln: lernsystem/LEITFADEN.md).
// Der Text mit Bildern und Zwischenfragen steht in rechte.jsx.

// Fachbegriffe: das Wort, wie es in Text und Prüfung steht, und der Eintrag im Glossar (dort steht die Bedeutung)
export const BEGRIFFE = {
  leserecht: { wort: 'Leserecht', glossar: 'Leserecht' },
  schreibrecht: { wort: 'Schreibrecht', glossar: 'Schreibrecht' },
  ausfuehrungsrecht: { wort: 'Ausführungsrecht', glossar: 'Ausführungsrecht' },
  besitzer: { wort: 'Besitzer', glossar: 'Besitzer (Dateirechte)' },
  gruppe: { wort: 'Gruppe', glossar: 'Gruppe (Dateirechte)' },
  andere: { wort: 'andere', glossar: 'andere (Dateirechte)' },
  zugriffsrecht: { wort: 'Zugriffsrecht', glossar: 'Zugriffsrecht' },
  symbolisch: { wort: 'symbolische Schreibweise', glossar: 'Symbolische Schreibweise (Dateirechte)' },
  wertigkeit: { wort: 'Wertigkeit', glossar: 'Wertigkeit (Dateirechte)' },
  chmod: { wort: 'chmod', glossar: 'chmod' },
  oktalschreibweise: { wort: 'Oktalschreibweise', glossar: 'Oktalschreibweise (Dateirechte)' },
  verzeichnis: { wort: 'Verzeichnis', glossar: 'Verzeichnis (Dateisystem)' },
  // aus anderen Themen und Lernbereichen, nur mit <B> verwendet
  geringsteRechte: { wort: 'Grundsatz der geringsten Rechte', glossar: 'Grundsatz der geringsten Rechte' },
  skript: { wort: 'Shell-Skript', glossar: 'Shell-Skript' },
  bit: { wort: 'Bit', glossar: 'Bit' },
  oktalsystem: { wort: 'Oktalsystem', glossar: 'Oktalsystem' },
  kommandozeile: { wort: 'Kommandozeile', glossar: 'Kommandozeile' },
  option: { wort: 'Option', glossar: 'Option' },
  argument: { wort: 'Argument', glossar: 'Argument' },
};

export const KAPITEL = [
  {
    id: 'wer-darf-was',
    name: 'Wer darf was?',
    worum: 'Die Rechte r, w, x für Besitzer, Gruppe und andere',
    kurz: 'Unter Linux hat jede Datei drei Rechte – **r** lesen, **w** schreiben, **x** ausführen – und zwar getrennt für drei Klassen: den **Besitzer**, die **Gruppe** und alle **anderen**. `ls -l` zeigt sie als neun Zeichen, z. B. `rwxr-xr--`; ein `-` heißt „Recht fehlt“.',
    braucht: [],
    lernziele: [
      'die Rechte Lesen, Schreiben und Ausführen nennen und sagen, was jedes bei einer Datei erlaubt.',
      'erklären, für welche drei Klassen Rechte vergeben werden und welche Klasse für einen Benutzer gilt.',
      'eine Rechteangabe wie -rwxr-xr-- aus ls -l lesen.',
    ],
    begriffe: ['leserecht', 'schreibrecht', 'ausfuehrungsrecht', 'besitzer', 'gruppe', 'andere', 'zugriffsrecht', 'symbolisch'],
    pruefung: [
      '**Leserecht** (r): den Inhalt ansehen; **Schreibrecht** (w): den Inhalt ändern; **Ausführungsrecht** (x): die Datei als Programm starten.',
      'Rechte werden für drei Klassen vergeben: den **Besitzer** der Datei (u), ihre **Gruppe** (g) und alle **anderen** (o). Für jeden Benutzer gilt genau eine Klasse.',
      '`ls -l` zeigt die **Zugriffsrechte** in **symbolischer Schreibweise**: nach dem Dateityp je drei Zeichen für Besitzer, Gruppe und andere, z. B. `-rwxr-xr--`; ein `-` bedeutet, dass das Recht fehlt.',
    ],
    teile: [
      { id: 'drei-rechte', titel: 'Lesen, schreiben, ausführen' },
      { id: 'drei-klassen', titel: 'Besitzer, Gruppe, andere' },
      { id: 'ls-l', titel: 'Die Rechte ablesen: ls -l' },
    ],
  },
  {
    id: 'bits',
    name: 'Rechte als Bits',
    worum: 'Jedes Recht ein Bit, Wertigkeiten 4, 2, 1',
    kurz: 'Jedes Recht ist erlaubt oder nicht – ein **Bit**. Die drei Bits einer Klasse haben die **Wertigkeiten r = 4, w = 2, x = 1**; ihre Summe ist eine Ziffer von 0 bis 7 (`rw-` = 4 + 2 = 6, `r-x` = 4 + 1 = 5).',
    braucht: ['wer-darf-was'],
    lernziele: [
      'erklären, warum jedes Recht ein Bit ist und eine Klasse acht mögliche Kombinationen hat.',
      'die Wertigkeiten r = 4, w = 2 und x = 1 nennen und begründen.',
      'die Rechte einer Klasse als Ziffer von 0 bis 7 schreiben und eine Ziffer in Rechte zurückübersetzen.',
    ],
    begriffe: ['wertigkeit'],
    pruefung: [
      'Jedes Recht ist gesetzt oder nicht, also ein **Bit**. Eine Klasse hat drei Rechte, also drei Bit und 2³ = 8 Kombinationen.',
      'Die **Wertigkeiten** sind r = 4, w = 2, x = 1 – die Stellenwerte einer dreistelligen Binärzahl.',
      'Die Ziffer einer Klasse ist die Summe der Wertigkeiten ihrer gesetzten Rechte: `rw-` = 4 + 2 = 6, `r-x` = 4 + 1 = 5, 7 = alle Rechte, 0 = keine.',
    ],
    teile: [
      { id: 'ein-bit', titel: 'Ja oder nein – ein Bit' },
      { id: 'vier-zwei-eins', titel: 'r = 4, w = 2, x = 1' },
    ],
  },
  {
    id: 'oktal',
    name: 'Oktalschreibweise',
    worum: 'chmod 754: drei Ziffern für drei Klassen',
    kurz: '**chmod** ändert die Zugriffsrechte. In der **Oktalschreibweise** steht jede Ziffer für eine Klasse: erste Besitzer, zweite Gruppe, dritte andere. `chmod 754` = `rwx` `r-x` `r--`.',
    braucht: ['wer-darf-was', 'bits'],
    lernziele: [
      'erklären, was der Befehl chmod bewirkt.',
      'eine Angabe wie chmod 754 in die Rechte für Besitzer, Gruppe und andere übersetzen.',
      'eine Rechteangabe wie rwxr-x--- als Oktalzahl schreiben.',
    ],
    begriffe: ['chmod', 'oktalschreibweise'],
    pruefung: [
      '**chmod** (change mode) ändert unter Linux die **Zugriffsrechte** einer Datei oder eines Verzeichnisses für Besitzer, Gruppe und andere.',
      'In der **Oktalschreibweise** steht jede Ziffer für eine Klasse – Besitzer, Gruppe, andere. `chmod 754`: Besitzer 7 = `rwx` (alles), Gruppe 5 = `r-x` (lesen, ausführen), andere 4 = `r--` (nur lesen).',
      'Je drei Zeichen ergeben eine Ziffer (r = 4, w = 2, x = 1): `rwx` `r-x` `---` = 7, 5, 0 → **750**.',
    ],
    teile: [
      { id: 'chmod', titel: 'Rechte ändern mit chmod' },
      { id: 'drei-ziffern', titel: 'chmod 754 lesen', arten: ['zuSym', 'deuten'] },
      { id: 'zur-zahl', titel: 'Von rwx zur Zahl', arten: ['zuOktal'] },
    ],
  },
  {
    id: 'festlegen',
    name: 'Rechte festlegen',
    worum: 'Vom Aufgabentext zur passenden Zahl',
    kurz: 'Aus einer Beschreibung wird die Zahl in drei Schritten: je Klasse die erlaubten Rechte notieren, die Wertigkeiten addieren, die Ziffern in der Reihenfolge Besitzer, Gruppe, andere schreiben. Jede Klasse bekommt nur, was sie braucht.',
    braucht: ['oktal'],
    lernziele: [
      'aus einer Beschreibung in Worten die passende Zahl für chmod bestimmen.',
      'typische Rechte wie 755, 644 und 600 für Dateien und Verzeichnisse deuten und begründen, wann man sie wählt.',
    ],
    begriffe: ['verzeichnis'],
    pruefung: [
      'Je Klasse die erlaubten Rechte addieren (r = 4, w = 2, x = 1) und die Ziffern in der Reihenfolge Besitzer, Gruppe, andere schreiben: Besitzer alles, Gruppe lesen, andere nichts → `chmod 740`.',
      'Jede Klasse bekommt nur die Rechte, die sie braucht (**Grundsatz der geringsten Rechte**): Skripte und **Verzeichnisse** oft 755 – bei einem Verzeichnis heißt x „hineinwechseln“ –, normale Dateien 644, vertrauliche Dateien 600.',
    ],
    teile: [
      { id: 'nach-anforderung', titel: 'Vom Text zur Zahl', arten: ['wunsch'] },
      { id: 'typisch', titel: 'Typische Rechte und die richtige Wahl' },
    ],
  },
];
