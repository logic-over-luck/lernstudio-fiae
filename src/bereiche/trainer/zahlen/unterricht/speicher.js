// Unterricht Speicherbedarf: Kapitel und Fachbegriffe (Format: lernsystem/struktur.js, Regeln: lernsystem/LEITFADEN.md).
// Der Text mit Bildern und Zwischenfragen steht in speicher.jsx. Solange KAPITEL leer ist, zeigt Verstehen die Kurz-Erklärung.

// Fachbegriffe: das Wort, wie es in Text und Prüfung steht, und der Eintrag im Glossar (dort steht die Bedeutung)
export const BEGRIFFE = {
  // aus anderen Themen, hier nur mit <B> verwendet
  bit: { wort: 'Bit', glossar: 'Bit' },
  byte: { wort: 'Byte', glossar: 'Byte' },
  kib: { wort: 'KiB', glossar: 'KiB' },
  gib: { wort: 'GiB', glossar: 'GiB' },
  binaerpraefix: { wort: 'Binärpräfix', glossar: 'Binärpräfix' },
  dezimalpraefix: { wort: 'Dezimalpräfix', glossar: 'Dezimalpräfix' },
  // eingeführt in diesem Thema
  bittiefe: { wort: 'Bittiefe', glossar: 'Bittiefe' },
  speicherbedarf: { wort: 'Speicherbedarf', glossar: 'Speicherbedarf' },
  pixel: { wort: 'Pixel', glossar: 'Pixel' },
  aufloesung: { wort: 'Auflösung', glossar: 'Auflösung (Bild)' },
  megapixel: { wort: 'Megapixel', glossar: 'Megapixel' },
  farbtiefe: { wort: 'Farbtiefe', glossar: 'Farbtiefe' },
  dpi: { wort: 'dpi', glossar: 'dpi' },
  sampling: { wort: 'Sampling', glossar: 'Sampling' },
  abtastrate: { wort: 'Abtastrate', glossar: 'Abtastrate' },
  abtasttiefe: { wort: 'Abtasttiefe', glossar: 'Abtasttiefe' },
  kanal: { wort: 'Kanal', glossar: 'Kanal (Audio)' },
  hochrechnung: { wort: 'Hochrechnung', glossar: 'Hochrechnung' },
  aufrunden: { wort: 'Aufrunden', glossar: 'Aufrunden' },
  komprimierung: { wort: 'Komprimierung', glossar: 'Komprimierung' },
  mehrbedarf: { wort: 'Mehrbedarf', glossar: 'Mehrbedarf' },
  speicherkapazitaet: { wort: 'Speicherkapazität', glossar: 'Speicherkapazität' },
};

export const KAPITEL = [
  {
    id: 'formel',
    name: 'Die Formel',
    worum: 'Anzahl der Werte · Bit je Wert',
    kurz: 'Speicherbedarf ist immer **Anzahl der Werte · Bit je Wert**. Die Bit je Wert heißen **Bittiefe**; mit n Bit gibt es 2ⁿ verschiedene Werte. Bit ÷ 8 ergibt Byte, jede weitere Stufe ÷ 1.024 ergibt KiB, MiB, GiB – gerundet wird erst am Ende.',
    braucht: [],
    lernziele: [
      'erklären, was die Bittiefe ist und wie viele Werte sich mit n Bit darstellen lassen.',
      'den Speicherbedarf aus der Anzahl der Werte und der Bittiefe berechnen.',
      'das Ergebnis von Bit über Byte in KiB, MiB oder GiB umrechnen und erst am Ende runden.',
    ],
    begriffe: ['bittiefe', 'speicherbedarf'],
    pruefung: [
      'Die **Bittiefe** ist die Anzahl der Bit je Wert; mit n Bit lassen sich 2ⁿ verschiedene Werte darstellen (16 Bit: 65.536).',
      'Der **Speicherbedarf** in Bit ist Anzahl der Werte · Bittiefe: 86.400 Messwerte · 16 Bit = 1.382.400 Bit.',
      'Bit ÷ 8 ergibt Byte, jede weitere Stufe ÷ 1.024 ergibt KiB, MiB, GiB (**Binärpräfixe**); gerundet wird nur das Endergebnis.',
    ],
    teile: [
      { id: 'ein-wert', titel: 'Wie viel Platz braucht ein Wert?' },
      { id: 'viele-werte', titel: 'Viele Werte: die Formel' },
      { id: 'umrechnen', titel: 'Von Bit zu KiB und MiB', arten: ['messwerte'] },
    ],
  },
  {
    id: 'bilder',
    name: 'Bilder',
    worum: 'Pixel, Auflösung und Farbtiefe',
    kurz: 'Ein Bild besteht aus **Pixeln**; die **Auflösung** sagt, wie viele (Breite × Höhe). Die **Farbtiefe** ist die Bit je Pixel: 24 Bit = 3 Byte = 2²⁴ Farben. Speicherbedarf in Bit = Breite · Höhe · Farbtiefe.',
    braucht: ['formel'],
    lernziele: [
      'erklären, was Pixel, Auflösung und Megapixel bedeuten, und die Anzahl der Pixel eines Bildes berechnen.',
      'aus der Farbtiefe die Zahl der möglichen Farben berechnen, z. B. 2²⁴ bei 3 · 8 Bit.',
      'den Speicherbedarf eines unkomprimierten Bildes berechnen – auch für ein Foto, das mit einer dpi-Zahl gescannt wird.',
    ],
    begriffe: ['pixel', 'aufloesung', 'megapixel', 'farbtiefe', 'dpi'],
    pruefung: [
      'Ein Bild besteht aus **Pixeln**. Die **Auflösung** gibt Breite × Höhe in Pixel an, die Anzahl der Pixel ist Breite · Höhe. 1 **Megapixel** sind 1.000.000 Pixel (Dezimalpräfix).',
      'Die **Farbtiefe** ist die Anzahl der Bit je Pixel; mit n Bit sind 2ⁿ Farben möglich. 24 Bit (je 8 Bit für Rot, Grün, Blau) ergeben 2²⁴ = 16.777.216 Farben.',
      'Speicherbedarf eines unkomprimierten Bildes in Bit = Breite · Höhe · Farbtiefe (1.920 · 1.080 · 24 Bit ÷ 8 ÷ 1.024² = 5,93 MiB). Beim Scannen gilt: Pixel = Länge in Zoll · **dpi**.',
    ],
    teile: [
      { id: 'pixel', titel: 'Ein Bild aus Punkten' },
      { id: 'farbtiefe', titel: 'Wie viele Farben?', arten: ['farben'] },
      { id: 'bildgroesse', titel: 'Speicherbedarf eines Bildes', arten: ['bild'] },
      { id: 'scannen', titel: 'Gescannt: Zoll und dpi' },
    ],
  },
  {
    id: 'audio',
    name: 'Audio',
    worum: 'Abtastrate, Abtasttiefe und Kanäle',
    kurz: 'Beim **Sampling** wird Schall in festen Abständen gemessen: die **Abtastrate** sagt, wie oft (CD: 44.100-mal je Sekunde), die **Abtasttiefe**, mit wie vielen Bit (CD: 16 Bit). Speicherbedarf in Bit = Abtastrate · Abtasttiefe · Kanäle · Sekunden.',
    braucht: ['formel'],
    lernziele: [
      'erklären, wie beim Sampling aus Schall Zahlen werden und was Abtastrate und Abtasttiefe festlegen.',
      'den Speicherbedarf einer unkomprimierten Audioaufnahme aus Abtastrate, Abtasttiefe, Kanälen und Dauer berechnen.',
    ],
    begriffe: ['sampling', 'abtastrate', 'abtasttiefe', 'kanal'],
    pruefung: [
      'Beim **Sampling** wird das Signal in festen Abständen gemessen. Die **Abtastrate** ist die Zahl der Messungen je Sekunde (CD: 44,1 kHz), die **Abtasttiefe** die Bit je Messwert (CD: 16 Bit = 65.536 Stufen).',
      'Speicherbedarf in Bit = Abtastrate · Abtasttiefe · Anzahl der **Kanäle** · Dauer in Sekunden; 1 Minute in CD-Qualität (Stereo) = 44.100 · 16 · 2 · 60 Bit = 10,09 MiB.',
    ],
    teile: [
      { id: 'abtasten', titel: 'Schall in Zahlen' },
      { id: 'audiogroesse', titel: 'Speicherbedarf einer Aufnahme', arten: ['audio'] },
    ],
  },
  {
    id: 'hochrechnen',
    name: 'Hochrechnen',
    worum: 'Von einem Bild auf ein ganzes Jahr',
    kurz: 'Für eine Sammlung rechnest du hoch: **Bedarf je Stück · Stück je Zeiteinheit · Anzahl der Zeiteinheiten**. Gerundet wird erst das Endergebnis; „volle TiB“ heißt **aufrunden** (13,10 TiB → 14 TiB).',
    braucht: ['bilder'],
    lernziele: [
      'Mengen über die Zeit hochrechnen, z. B. Aufnahmen je Tag aus Geschwindigkeit und Arbeitszeit.',
      'den Gesamtbedarf einer Sammlung in TiB angeben und wie verlangt auf volle TiB aufrunden.',
    ],
    begriffe: ['hochrechnung', 'aufrunden'],
    pruefung: [
      'Bei der **Hochrechnung** multiplizierst du die Menge je Zeiteinheit Schritt für Schritt hoch: 20 Bilder je Minute · 60 · 8 Stunden · 250 Tage = 2.400.000 Bilder im Jahr.',
      'Gerundet wird erst das Endergebnis. Sind volle TiB verlangt, wird **aufgerundet** (13,10 TiB → 14 TiB), sonst fehlt Speicher.',
    ],
    teile: [
      { id: 'je-tag', titel: 'Wie viele Bilder im Jahr?' },
      { id: 'volle-tib', titel: 'Ein Jahr in TiB, aufgerundet', arten: ['sammlung'] },
    ],
  },
  {
    id: 'prozent',
    name: 'Prozente',
    worum: 'Komprimierung und Mehrbedarf',
    kurz: '**Komprimierung** um p % heißt: es bleiben (100 − p) %, also Wert · (1 − p ÷ 100). **Mehrbedarf** in % = (neu − alt) ÷ alt · 100 – immer bezogen auf den alten Wert.',
    braucht: ['bilder'],
    lernziele: ['erklären, was Komprimierung ist, und einen um p % verringerten Speicherbedarf berechnen.', 'einen Mehrbedarf in Prozent berechnen.'],
    begriffe: ['komprimierung', 'mehrbedarf'],
    pruefung: [
      '**Komprimierung** verringert den Speicherbedarf. Um p % verringert heißt, es bleiben (100 − p) %: 5,93 MiB um 30 % verringert = 5,93 MiB · 0,7 = 4,15 MiB.',
      'Der **Mehrbedarf** in Prozent ist (neu − alt) ÷ alt · 100, bezogen auf den alten Wert: von 16 auf 24 Bit = 8 ÷ 16 · 100 = 50 %.',
    ],
    teile: [
      { id: 'komprimierung', titel: 'Kleiner speichern', arten: ['komprimiert'] },
      { id: 'mehrbedarf', titel: 'Um wie viel Prozent mehr?', arten: ['mehrbedarf'] },
    ],
  },
  {
    id: 'reicht',
    name: 'Reicht der Speicher?',
    worum: 'Bedarf und Kapazität vergleichen – GB gegen GiB',
    kurz: 'Hersteller geben die **Speicherkapazität** dezimal an (64 GB = 64 · 1.000³ Byte = 59,60 GiB), den Bedarf rechnest du in GiB. Erst beides in dieselbe Einheit bringen, dann vergleichen.',
    braucht: ['formel', 'bilder'],
    lernziele: ['eine Herstellerangabe in GB oder TB in GiB oder TiB umrechnen.', 'beurteilen, ob ein Speicher für eine berechnete Datenmenge ausreicht.'],
    begriffe: ['speicherkapazitaet'],
    pruefung: [
      'Die **Speicherkapazität** geben Hersteller mit Dezimalpräfix an: 64 GB = 64 · 1.000³ Byte; ÷ 1.024³ = 59,60 GiB.',
      'Bedarf und **Speicherkapazität** erst in dieselbe Einheit umrechnen, dann vergleichen: 15,06 GiB Bedarf passen nicht auf eine Karte mit 16 GB (14,90 GiB).',
    ],
    teile: [
      { id: 'kapazitaet', titel: 'Die Karte mit 64 GB' },
      { id: 'vergleichen', titel: 'Passt es drauf?', arten: ['reicht'] },
    ],
  },
];
