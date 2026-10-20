// Unterricht Paritätsbit: Kapitel und Fachbegriffe (Format: lernsystem/struktur.js, Regeln: lernsystem/LEITFADEN.md).
// Der Text mit Bildern und Zwischenfragen steht in paritaet.jsx. Solange KAPITEL leer ist, zeigt Verstehen die Kurz-Erklärung.

// Fachbegriffe: das Wort, wie es in Text und Prüfung steht, und der Eintrag im Glossar (dort steht die Bedeutung)
export const BEGRIFFE = {
  // aus anderen Themen, hier nur mit <B> verwendet
  bit: { wort: 'Bit', glossar: 'Bit' },
  frame: { wort: 'Ethernet-Frame', glossar: 'Ethernet-Frame' },
  // eingeführt in diesem Thema
  bitfehler: { wort: 'Bitfehler', glossar: 'Bitfehler' },
  redundanz: { wort: 'Redundanz', glossar: 'Redundanz' },
  paritaet: { wort: 'Parität', glossar: 'Parität' },
  paritaetsbit: { wort: 'Paritätsbit', glossar: 'Paritätsbit' },
  gerade: { wort: 'gerade Parität', glossar: 'Gerade Parität' },
  ungerade: { wort: 'ungerade Parität', glossar: 'Ungerade Parität' },
  paritaetspruefung: { wort: 'Paritätsprüfung', glossar: 'Paritätsprüfung' },
  fehlererkennung: { wort: 'Fehlererkennung', glossar: 'Fehlererkennung' },
  fehlerkorrektur: { wort: 'Fehlerkorrektur', glossar: 'Fehlerkorrektur' },
  pruefsumme: { wort: 'Prüfsumme', glossar: 'Prüfsumme' },
  pruefziffer: { wort: 'Prüfziffer', glossar: 'Prüfziffer' },
  crc: { wort: 'CRC', glossar: 'CRC' },
};

export const KAPITEL = [
  {
    id: 'idee',
    name: 'Die Idee',
    worum: 'Warum Daten unterwegs kaputtgehen – und wie man es merkt',
    kurz: 'Unterwegs kann ein Bit kippen (**Bitfehler**), und der Empfänger sieht es den Daten nicht an. Darum schickt der Sender **Redundanz** mit: zusätzliche Prüfinformation. Die einfachste ist die **Parität** – ob die Anzahl der Einsen gerade oder ungerade ist. Jedes gekippte Bit ändert sie.',
    braucht: [],
    lernziele: [
      'erklären, was ein Bitfehler ist und warum der Empfänger ihn an den Daten allein nicht bemerkt.',
      'erklären, was Redundanz als Prüfverfahren bedeutet.',
      'an einer Bitfolge zeigen, ob ihre Parität gerade oder ungerade ist, und warum ein gekipptes Bit die Parität ändert.',
    ],
    begriffe: ['bitfehler', 'redundanz', 'paritaet'],
    pruefung: [
      'Ein **Bitfehler** entsteht, wenn beim Übertragen oder Speichern ein Bit verfälscht wird (0 → 1 oder 1 → 0). Die verfälschte Bitfolge ist wieder eine gültige Bitfolge, darum fällt der Fehler ohne Prüfinformation nicht auf.',
      '**Redundanz** als Prüfverfahren heißt: Zusätzlich zu den Daten wird Prüfinformation mitgesendet oder mitgespeichert, die für den Inhalt nicht nötig ist; der Empfänger berechnet sie neu und vergleicht.',
      'Die **Parität** gibt an, ob die Anzahl der Einsen gerade oder ungerade ist. Ein gekipptes Bit ändert die Anzahl der Einsen um genau 1 und damit die Parität.',
    ],
    teile: [
      { id: 'kippen', titel: 'Ein Bit kippt' },
      { id: 'mitschicken', titel: 'Etwas mehr mitschicken, als nötig ist' },
    ],
  },
  {
    id: 'bilden',
    name: 'Paritätsbit bilden',
    worum: 'Ein Bit, das die Einsen ergänzt',
    kurz: 'Der Sender hängt ein **Paritätsbit** an, das die Anzahl der Einsen ergänzt: bei **gerader Parität** auf eine gerade Anzahl, bei **ungerader Parität** auf eine ungerade. `0110100` (3 Einsen), gerade Parität → Paritätsbit 1.',
    braucht: ['idee'],
    lernziele: [
      'erklären, was ein Paritätsbit ist und warum Sender und Empfänger vorher eine Parität vereinbaren.',
      'das Paritätsbit einer Bitfolge für gerade und ungerade Parität bestimmen.',
    ],
    begriffe: ['paritaetsbit', 'gerade', 'ungerade'],
    pruefung: [
      'Ein **Paritätsbit** ist ein zusätzliches Bit, das der Sender an die Daten anhängt. Es ergänzt die Anzahl der Einsen so, dass sie zur vereinbarten Parität passt.',
      'Bei **gerader Parität** ist das Paritätsbit 1, wenn die Datenbits eine ungerade Anzahl Einsen haben, sonst 0; bei **ungerader Parität** genau umgekehrt (1011001 hat 4 Einsen: gerade → 0, ungerade → 1).',
    ],
    teile: [
      { id: 'ergaenzen', titel: 'Ein Bit, das ergänzt' },
      { id: 'gerade-ungerade', titel: 'Gerade oder ungerade Parität', arten: ['bilden'] },
    ],
  },
  {
    id: 'erkennen',
    name: 'Fehler erkennen',
    worum: 'Was die Prüfung beim Empfänger kann – und was nicht',
    kurz: 'Der Empfänger zählt die Einsen mit Paritätsbit (**Paritätsprüfung**). Passt die Parität nicht, ist ein Fehler erkannt – aber er weiß nicht, welches Bit, und kann nichts berichtigen (**Fehlererkennung**, keine **Fehlerkorrektur**). Kippen zwei Bits, stimmt die Parität wieder: unbemerkt.',
    braucht: ['idee', 'bilden'],
    lernziele: [
      'beim Empfänger prüfen, ob eine empfangene Bitfolge zur vereinbarten Parität passt.',
      'erklären, warum ein Paritätsbit einen Bitfehler erkennt, ihn aber weder findet noch berichtigt.',
      'erklären, warum zwei gleichzeitig gekippte Bits unbemerkt bleiben.',
    ],
    begriffe: ['paritaetspruefung', 'fehlererkennung', 'fehlerkorrektur'],
    pruefung: [
      'Bei der **Paritätsprüfung** zählt der Empfänger die Einsen einschließlich Paritätsbit. Passt die Anzahl nicht zur vereinbarten Parität, wurde die Bitfolge verfälscht.',
      'Ein Paritätsbit ermöglicht nur **Fehlererkennung**: Es zeigt, dass ein Bit falsch ist, aber nicht welches. Eine **Fehlerkorrektur** ist damit nicht möglich; die Daten müssen neu angefordert werden.',
      'Kippen zwei Bits, ändert sich die Anzahl der Einsen um eine gerade Zahl; die Parität stimmt wieder, der Fehler bleibt unbemerkt. Erkannt wird nur eine ungerade Anzahl gekippter Bits.',
    ],
    teile: [
      { id: 'nachzaehlen', titel: 'Der Empfänger zählt nach', arten: ['pruefen'] },
      { id: 'welches-bit', titel: 'Erkannt, aber nicht gefunden' },
      { id: 'zwei-bits', titel: 'Wenn zwei Bits kippen' },
    ],
  },
  {
    id: 'pruefsummen',
    name: 'Prüfsummen',
    worum: 'Redundanz im Großen: Prüfsumme, Prüfziffer, CRC',
    kurz: 'Alle Prüfverfahren arbeiten wie das Paritätsbit: Der Sender berechnet aus den Daten einen Prüfwert und hängt ihn an, der Empfänger berechnet ihn neu und vergleicht. Beispiele: **Prüfsumme**, **Prüfziffer** (EAN, IBAN) und die **CRC** (Frame Check Sequence) am Ende jedes Ethernet-Frames.',
    braucht: ['idee', 'erkennen'],
    lernziele: [
      'erklären, wie eine Prüfsumme oder Prüfziffer Fehler erkennbar macht: Der Empfänger berechnet sie neu und vergleicht.',
      'die CRC im Ethernet-Frame als Beispiel für Redundanz erklären und sagen, was der Empfänger bei einem Fehler tut.',
    ],
    begriffe: ['pruefsumme', 'pruefziffer', 'crc'],
    pruefung: [
      'Eine **Prüfsumme** oder **Prüfziffer** ist **Redundanz**: Der Sender berechnet sie aus den Daten und sendet oder speichert sie mit. Der Empfänger berechnet sie aus den empfangenen Daten neu und vergleicht; weichen beide ab, sind die Daten fehlerhaft.',
      'Am Ende jedes **Ethernet-Frames** steht die Frame Check Sequence, eine 32-Bit-**CRC** über Adressen, Typ und Nutzdaten. Der Empfänger berechnet die CRC neu; stimmt sie nicht, verwirft er den Frame. Die CRC erkennt auch mehrere gekippte Bits, berichtigt aber nichts.',
    ],
    teile: [
      { id: 'pruefsumme', titel: 'Nachrechnen statt nachzählen' },
      { id: 'pruefziffer', titel: 'Die Prüfziffer' },
      { id: 'crc', titel: 'Die CRC im Ethernet-Frame' },
    ],
  },
];
