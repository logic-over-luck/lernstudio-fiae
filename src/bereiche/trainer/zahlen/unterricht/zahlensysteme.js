// Unterricht Zahlensysteme: Kapitel und Fachbegriffe (Format: lernsystem/struktur.js, Regeln: lernsystem/LEITFADEN.md).
// Der Text mit Bildern und Zwischenfragen steht in zahlensysteme.jsx.

// Fachbegriffe: das Wort, wie es in Text und Prüfung steht, und der Eintrag im Glossar (dort steht die Bedeutung)
export const BEGRIFFE = {
  bit: { wort: 'Bit', glossar: 'Bit' },
  uebertrag: { wort: 'Übertrag', glossar: 'Übertrag' },
  ziffer: { wort: 'Ziffer', glossar: 'Ziffer' },
  stelle: { wort: 'Stelle', glossar: 'Stelle (Zahl)' },
  stellenwert: { wort: 'Stellenwert', glossar: 'Stellenwert' },
  basis: { wort: 'Basis', glossar: 'Basis (Zahlensystem)' },
  potenz: { wort: 'Potenz', glossar: 'Potenz' },
  stellenwertsystem: { wort: 'Stellenwertsystem', glossar: 'Stellenwertsystem' },
  dezimalsystem: { wort: 'Dezimalsystem', glossar: 'Dezimalsystem' },
  binaersystem: { wort: 'Binärsystem', glossar: 'Binärsystem' },
  byte: { wort: 'Byte', glossar: 'Byte' },
  restwertverfahren: { wort: 'Restwertverfahren', glossar: 'Restwertverfahren' },
  zweierpotenz: { wort: 'Zweierpotenz', glossar: 'Zweierpotenz' },
  wertebereich: { wort: 'Wertebereich', glossar: 'Wertebereich' },
  hexadezimalsystem: { wort: 'Hexadezimalsystem', glossar: 'Hexadezimalsystem' },
  nibble: { wort: 'Nibble', glossar: 'Nibble' },
  oktalsystem: { wort: 'Oktalsystem', glossar: 'Oktalsystem' },
  praefix: { wort: 'Präfix', glossar: 'Präfix (Zahlensystem)' },
};

export const KAPITEL = [
  {
    id: 'grundlagen',
    name: 'Grundlagen',
    worum: 'Bit, Stellenwert und Basis',
    kurz: 'Ein Computer kennt nur zwei Zustände: an (1) und aus (0) – ein **Bit**. In jedem Zahlensystem hat jede Stelle einen **Stellenwert**; die **Basis** sagt, wie viele Ziffern es gibt und um welchen Faktor der Stellenwert nach links wächst (dezimal: Ziffern 0–9, Stellenwerte 1, 10, 100 …).',
    braucht: [],
    lernziele: [
      'erklären, was ein Bit ist und warum ein Computer nur mit 0 und 1 arbeitet.',
      'an einer Zahl zeigen, welche Ziffer an welcher Stelle steht und welchen Stellenwert die Stelle hat.',
      'erklären, was die Basis eines Stellenwertsystems festlegt.',
    ],
    begriffe: ['bit', 'uebertrag', 'ziffer', 'stelle', 'stellenwert', 'basis', 'potenz', 'stellenwertsystem', 'dezimalsystem'],
    pruefung: [
      'Ein **Bit** ist die kleinste Informationseinheit; es hat den Wert 0 oder 1.',
      'In einem **Stellenwertsystem** hängt der Wert einer **Ziffer** von ihrer **Stelle** ab. Jede Stelle hat einen **Stellenwert**; der Wert der Zahl ist die Summe aus Ziffer · Stellenwert (352 = 3 · 100 + 5 · 10 + 2 · 1).',
      'Die **Basis** gibt an, wie viele Ziffern es gibt (0 bis Basis − 1), und die Stellenwerte sind **Potenzen** der Basis (…, b², b¹, b⁰ = 1). Das **Dezimalsystem** hat die Basis 10.',
    ],
    teile: [
      { id: 'zwei-zustaende', titel: 'Ein Computer kennt nur an und aus' },
      { id: 'zaehlen', titel: 'Ziffer, Stelle, Stellenwert' },
      { id: 'basis', titel: 'Die Basis' },
    ],
  },
  {
    id: 'binaer',
    name: 'Binär',
    worum: 'Zählen, lesen und schreiben mit 0 und 1',
    kurz: 'Das **Binärsystem** (Dualsystem) hat die Basis 2: nur die Ziffern 0 und 1, jede Stelle ist doppelt so viel wert wie die rechts daneben. Ein **Byte** sind 8 Bit mit den Stellenwerten **128 · 64 · 32 · 16 · 8 · 4 · 2 · 1**. Lesen: die Stellenwerte über den Einsen addieren (`1011` = 8 + 2 + 1 = 11). Schreiben: mit dem **Restwertverfahren** immer durch 2 teilen, die Reste von unten nach oben lesen.',
    braucht: ['grundlagen'],
    lernziele: [
      'erklären, wie das Binärsystem zählt und warum jede Stelle doppelt so viel wert ist wie die rechts daneben.',
      'eine Binärzahl in eine Dezimalzahl umrechnen.',
      'eine Dezimalzahl mit dem Restwertverfahren in eine Binärzahl umrechnen und das Ergebnis mit einer Probe prüfen.',
    ],
    begriffe: ['binaersystem', 'byte', 'restwertverfahren'],
    pruefung: [
      'Das **Binärsystem** (Dualsystem) ist ein Stellenwertsystem zur Basis 2 mit den Ziffern 0 und 1. Die Stellenwerte sind Potenzen von 2: von rechts 1, 2, 4, 8, 16 …',
      'Binär → dezimal: jede Ziffer mit ihrem Stellenwert multiplizieren und addieren, binär also die Stellenwerte über den Einsen (0110 0100 = 64 + 32 + 4 = 100). Ein **Byte** sind 8 Bit mit den Stellenwerten 128 bis 1.',
      'Dezimal → binär mit dem **Restwertverfahren**: die Zahl fortlaufend durch 2 teilen, bis 0 herauskommt, und die Reste von unten nach oben lesen. Probe: über die Stellenwerte zurückrechnen.',
    ],
    teile: [
      { id: 'binaer-zaehlen', titel: 'Zählen mit nur 0 und 1' },
      { id: 'lesen', titel: 'Binärzahlen lesen', arten: ['b2d'] },
      { id: 'schreiben', titel: 'Eine Zahl binär schreiben', arten: ['d2b'] },
    ],
  },
  {
    id: 'potenzen',
    name: 'Zweierpotenzen',
    worum: 'Wie viele Werte passen in n Bit?',
    kurz: 'Jedes Bit mehr verdoppelt die Möglichkeiten: **n Bit ergeben 2ⁿ Werte** (4 Bit: 16, 8 Bit: 256). Die **Zweierpotenzen** bis 2¹⁰: 1, 2, 4 … 512, 1.024. Der **Wertebereich** von n Bit reicht von 0 bis 2ⁿ − 1, weil die 0 mitzählt (8 Bit: 0 bis 255).',
    braucht: ['binaer'],
    lernziele: [
      'erklären, warum jedes zusätzliche Bit die Anzahl der Werte verdoppelt.',
      'die Zweierpotenzen von 2⁰ bis 2¹⁰ nennen und größere daraus ableiten.',
      'den Wertebereich von n Bit angeben und ausrechnen, wie viele Bit für eine bestimmte Anzahl von Werten nötig sind.',
    ],
    begriffe: ['zweierpotenz', 'wertebereich'],
    pruefung: [
      'Mit n Bit lassen sich **2ⁿ** verschiedene Werte darstellen, weil jedes zusätzliche Bit (0 oder 1) die Anzahl der Möglichkeiten verdoppelt.',
      'Die **Zweierpotenzen** von 2⁰ bis 2¹⁰ sind 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 und 1.024; jede ist das Doppelte der vorigen (2¹² = 2¹⁰ · 4 = 4.096).',
      'Der **Wertebereich** von n Bit (ohne Vorzeichen) reicht von 0 bis 2ⁿ − 1, bei 8 Bit also von 0 bis 255. Für x verschiedene Werte braucht man die kleinste Anzahl n Bit mit 2ⁿ ≥ x (300 Werte: 2⁹ = 512, also 9 Bit).',
    ],
    teile: [
      { id: 'kombinationen', titel: 'Jedes Bit verdoppelt' },
      { id: 'zweierpotenzen', titel: 'Die Zweierpotenzen bis 2¹⁰' },
      { id: 'grenzen', titel: 'Größte Zahl und nötige Bits', arten: ['potenz'] },
    ],
  },
  {
    id: 'hex',
    name: 'Hexadezimal',
    worum: 'Binär in kurz: 4 Bit = 1 Zeichen',
    kurz: 'Das **Hexadezimalsystem** (Basis 16) hat die Ziffern 0–9 und A = 10 bis F = 15. Eine Hex-Ziffer steht für 4 Bit, ein **Nibble**: Ein Byte sind zwei Hex-Ziffern (`1100 1000` = C8). Stellenwerte 1, 16, 256 … (C8 = 12 · 16 + 8 = 200).',
    braucht: ['binaer', 'potenzen'],
    lernziele: [
      'erklären, warum die IT Hexadezimalzahlen verwendet und welche Ziffern es darin gibt.',
      'Binärzahlen über Vierergruppen in Hexzahlen umrechnen und zurück.',
      'Hexzahlen in Dezimalzahlen umrechnen und zurück.',
    ],
    begriffe: ['hexadezimalsystem', 'nibble'],
    pruefung: [
      'Das **Hexadezimalsystem** ist ein Stellenwertsystem zur Basis 16 mit den Ziffern 0–9 und A–F (A = 10 … F = 15). Eine Hex-Ziffer steht für genau 4 Bit; so werden lange Binärzahlen kurz und lesbar, z. B. bei Farbcodes (#FF8800), MAC- und IPv6-Adressen.',
      'Binär → hex: die Binärzahl von rechts in Vierergruppen (**Nibbles**) teilen und jede Gruppe als eine Hex-Ziffer schreiben (1100 1000 = C8). Hex → binär: jede Hex-Ziffer wird zu 4 Bit.',
      'Hex → dezimal: Ziffer · Stellenwert mit den Stellenwerten 1, 16, 256 … addieren (C8 = 12 · 16 + 8 = 200). Dezimal → hex: fortlaufend durch 16 teilen und die Reste von unten nach oben lesen, oder erst binär und dann in Vierergruppen.',
    ],
    teile: [
      { id: 'hex-idee', titel: 'Warum es Hex gibt' },
      { id: 'hex-binaer', titel: 'Hex und Binär', arten: ['b2h', 'h2b'] },
      { id: 'hex-dezimal', titel: 'Hex und Dezimal', arten: ['h2d', 'd2h'] },
    ],
  },
  {
    id: 'oktal',
    name: 'Oktal',
    worum: 'Dasselbe mit Dreiergruppen',
    kurz: 'Das **Oktalsystem** (Basis 8) fasst **3 Bit zu einer Ziffer** zusammen: Ziffern 0 bis 7, Stellenwerte 1, 8, 64, 512. Begegnet dir bei Dateirechten unter Linux (`chmod 755` = 111 101 101).',
    braucht: ['binaer', 'hex'],
    lernziele: [
      'erklären, wie das Oktalsystem drei Bit zu einer Ziffer zusammenfasst und wo es vorkommt.',
      'Oktalzahlen in Dezimalzahlen umrechnen und zurück.',
    ],
    begriffe: ['oktalsystem'],
    pruefung: [
      'Das **Oktalsystem** ist ein Stellenwertsystem zur Basis 8 mit den Ziffern 0 bis 7. Eine Oktalziffer steht für genau 3 Bit (111 101 101 = 755); verwendet wird es z. B. für Dateirechte unter Linux (chmod 755).',
      'Oktal → dezimal: Ziffer · Stellenwert mit den Stellenwerten 1, 8, 64, 512 addieren (144 oktal = 64 + 32 + 4 = 100). Dezimal → oktal: fortlaufend durch 8 teilen und die Reste von unten nach oben lesen (200 = 310 oktal).',
    ],
    teile: [
      { id: 'oktal', titel: 'Dreiergruppen statt Vierergruppen' },
      { id: 'oktal-dezimal', titel: 'Oktal und Dezimal', arten: ['oktal'] },
    ],
  },
  {
    id: 'alles',
    name: 'Alles zusammen',
    worum: 'Eine Regel für alle Systeme, Schreibweisen, Prüfungsaufgabe',
    kurz: 'Alle Zahlensysteme folgen einer Regel: Die Basis legt die Ziffern (0 bis Basis − 1) und die Stellenwerte (Potenzen der Basis) fest, der Wert ist die Summe aus Ziffer · Stellenwert. Wo die Basis nicht klar ist, schreibt man sie tiefgestellt dazu (1010₂) oder setzt im Quellcode ein **Präfix** davor (0b1010, 0xFF).',
    braucht: ['grundlagen', 'binaer', 'hex', 'oktal'],
    lernziele: [
      'an jedem Stellenwertsystem zeigen, dass Ziffern und Stellenwerte allein aus der Basis folgen.',
      'erkennen und angeben, in welchem Zahlensystem eine Zahl geschrieben ist.',
      'eine Prüfungsaufgabe lösen, die mehrere Zahlensysteme verbindet, und das Ergebnis mit einer Probe sichern.',
    ],
    begriffe: ['praefix'],
    pruefung: [
      'Alle Stellenwertsysteme folgen einer Regel: Die Basis b legt die Ziffern (0 bis b − 1) und die Stellenwerte (b⁰, b¹, b² …) fest; der Wert einer Zahl ist die Summe aus Ziffer · Stellenwert. „10“ ist in jedem System die Basis selbst.',
      'Ist die Basis nicht eindeutig, wird sie angegeben: tiefgestellt (1010₂, FF₁₆) oder im Quellcode mit einem **Präfix** – 0b für binär, 0x für hexadezimal (0xFF = 255).',
      'Dezimal → hex gelingt am sichersten über binär: erst binär (172 = 1010 1100), dann Vierergruppen (1010 = A, 1100 = C → AC). Die Probe rechnet zurück: 10 · 16 + 12 = 172.',
    ],
    teile: [
      { id: 'aha', titel: 'Es ist immer dasselbe Prinzip' },
      { id: 'schreibweisen', titel: 'Woran du das System erkennst' },
      { id: 'pruefungsaufgabe', titel: 'Eine Prüfungsaufgabe von vorn bis hinten' },
    ],
  },
];
