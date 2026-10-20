// Unterricht Übertragungsdauer: Kapitel und Fachbegriffe (Format: lernsystem/struktur.js, Regeln: lernsystem/LEITFADEN.md).
// Der Text mit Bildern und Zwischenfragen steht in uebertragung.jsx.

// Fachbegriffe: das Wort, wie es in Text und Prüfung steht, und der Eintrag im Glossar (dort steht die Bedeutung)
export const BEGRIFFE = {
  datenmenge: { wort: 'Datenmenge', glossar: 'Datenmenge' },
  uebertragungsrate: { wort: 'Übertragungsrate', glossar: 'Übertragungsrate' },
  bps: { wort: 'Bit pro Sekunde', glossar: 'Bit pro Sekunde' },
  uebertragungsdauer: { wort: 'Übertragungsdauer', glossar: 'Übertragungsdauer' },
  bandbreite: { wort: 'Bandbreite', glossar: 'Bandbreite' },
  // aus anderen Themen, hier nur verwendet (<B>)
  bit: { wort: 'Bit', glossar: 'Bit' },
  byte: { wort: 'Byte', glossar: 'Byte' },
  dezimalpraefix: { wort: 'Dezimalpräfix', glossar: 'Dezimalpräfix' },
  binaerpraefix: { wort: 'Binärpräfix', glossar: 'Binärpräfix' },
  ganzzahldivision: { wort: 'Division ganzer Zahlen', glossar: 'Division ganzer Zahlen' },
};

export const KAPITEL = [
  {
    id: 'rate',
    name: 'Menge und Rate',
    worum: 'Was „pro Sekunde“ heißt – und warum Bit und Byte nicht dasselbe sind',
    kurz: 'Die **Datenmenge** sagt, wie viel übertragen wird, die **Übertragungsrate**, wie viel davon je Sekunde durch die Leitung geht. Raten stehen in **Bit pro Sekunde** mit Dezimalpräfix (100 Mbit/s = 100.000.000 bit/s), Dateien meist in Byte mit Binärpräfix (5 MiB = 5 · 1.024² · 8 Bit).',
    braucht: [],
    lernziele: [
      'erklären, was Datenmenge und Übertragungsrate sind und was „pro Sekunde“ bedeutet.',
      'eine Übertragungsrate wie 100 Mbit/s in Bit pro Sekunde umrechnen.',
      'eine Datenmenge in Byte mit Binärpräfix wie 5 MiB in Bit umrechnen.',
    ],
    begriffe: ['datenmenge', 'uebertragungsrate', 'bps'],
    pruefung: [
      'Die **Datenmenge** gibt an, wie viele Daten übertragen werden; die **Übertragungsrate** gibt an, wie viele Bit je Sekunde übertragen werden.',
      'Übertragungsraten stehen in **Bit pro Sekunde** mit Dezimalpräfix: 100 Mbit/s = 100 · 1.000.000 bit/s = 100.000.000 bit/s.',
      'Datenmengen stehen meist in Byte mit Binärpräfix; in Bit umgerechnet: 5 MiB = 5 · 1.024² Byte · 8 = 41.943.040 Bit.',
    ],
    teile: [
      { id: 'pro-sekunde', titel: 'Wie viel geht pro Sekunde durch?' },
      { id: 'mbit', titel: 'Von bit/s zu Mbit/s' },
      { id: 'byte-oder-bit', titel: 'Dateien in Byte, Leitungen in Bit' },
    ],
  },
  {
    id: 'dauer',
    name: 'Dauer berechnen',
    worum: 'Datenmenge ÷ Rate – erst alles in Bit, am Ende Minuten und Sekunden',
    kurz: '**Übertragungsdauer = Datenmenge ÷ Übertragungsrate.** Vorher beides in Bit bringen (Byte · 8, MiB mit 1.024², Mbit/s mit 1.000.000), erst das Ergebnis runden. Sekunden ÷ 60 ergibt Minuten, der Rest sind Sekunden (130 s = 2 min 10 s).',
    braucht: ['rate'],
    lernziele: [
      'die Übertragungsdauer aus Datenmenge und Übertragungsrate berechnen.',
      'Datenmenge und Rate vor dem Teilen in Bit und bit/s umrechnen und erst am Ende runden.',
      'eine Dauer in Sekunden in Minuten und Sekunden angeben.',
    ],
    begriffe: ['uebertragungsdauer'],
    pruefung: [
      'Die **Übertragungsdauer** ist Datenmenge ÷ Übertragungsrate; mit der Datenmenge in Bit und der Rate in bit/s kommt die Dauer in Sekunden heraus.',
      'Vor dem Teilen wird alles in Bit umgerechnet: Byte · 8, die Datenmenge mit Binärpräfix (1.024), die Rate mit Dezimalpräfix (1.000) – gerundet wird erst das Ergebnis.',
      'Für Minuten und Sekunden teilt man die Sekunden durch 60: Das ganzzahlige Ergebnis sind die Minuten, der Rest die Sekunden (130 s = 2 min 10 s).',
    ],
    teile: [
      { id: 'teilen', titel: 'Wie lange dauert es?' },
      { id: 'alles-in-bit', titel: 'Erst alles in Bit', arten: ['dauer'] },
      { id: 'minuten', titel: 'In Minuten und Sekunden', arten: ['minuten'] },
    ],
  },
  {
    id: 'umstellen',
    name: 'Rate und Menge',
    worum: 'Die Formel umstellen: nötige Rate und übertragene Datenmenge',
    kurz: 'Aus **Datenmenge = Übertragungsrate · Dauer** folgen die beiden anderen Formen: **Rate = Datenmenge ÷ Dauer** (welche Bandbreite ist nötig?) und **Dauer = Datenmenge ÷ Rate**. Die Einheiten bleiben gleich: rechnen in Bit und bit/s.',
    braucht: ['rate', 'dauer'],
    lernziele: [
      'die nötige Übertragungsrate für eine Datenmenge und eine Zeitvorgabe berechnen.',
      'berechnen, welche Datenmenge in einer bestimmten Zeit übertragen wird.',
      'zu jeder Frage die passende Form der Formel wählen.',
    ],
    begriffe: ['bandbreite'],
    pruefung: [
      'Die nötige Rate ist Datenmenge ÷ Dauer; der Anschluss braucht mindestens diese **Bandbreite** (500 MiB in 60 s: 4.194.304.000 Bit ÷ 60 s ≈ 69,91 Mbit/s).',
      'Die übertragene Datenmenge ist Übertragungsrate · Dauer; das Ergebnis in Bit ÷ 8 ergibt Byte, ÷ 1.024² ergibt MiB (16 Mbit/s · 60 s ≈ 114,44 MiB).',
      'Alle drei Formen kommen aus Datenmenge = Übertragungsrate · Dauer: Dauer = Datenmenge ÷ Rate, Rate = Datenmenge ÷ Dauer.',
    ],
    teile: [
      { id: 'rate-gesucht', titel: 'Welche Rate ist nötig?', arten: ['rate'] },
      { id: 'menge-gesucht', titel: 'Wie viel kommt an?', arten: ['menge'] },
      { id: 'dreieck', titel: 'Eine Formel, drei Fragen' },
    ],
  },
];
