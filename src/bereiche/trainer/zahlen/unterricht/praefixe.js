// Unterricht Bit, Byte und Präfixe: Kapitel und Fachbegriffe (Format: lernsystem/struktur.js, Regeln: lernsystem/LEITFADEN.md).
// Der Text mit Bildern und Zwischenfragen steht in praefixe.jsx. Solange KAPITEL leer ist, zeigt Verstehen die Kurz-Erklärung.

// Fachbegriffe: das Wort, wie es in Text und Prüfung steht, und der Eintrag im Glossar (dort steht die Bedeutung)
export const BEGRIFFE = {
  // aus Zahlensysteme, hier nur mit <B> verwendet
  bit: { wort: 'Bit', glossar: 'Bit' },
  zweierpotenz: { wort: 'Zweierpotenz', glossar: 'Zweierpotenz' },
  // dieses Thema
  byte: { wort: 'Byte', glossar: 'Byte' },
  praefix: { wort: 'Präfix', glossar: 'Präfix (Einheit)' },
  kb: { wort: 'kB', glossar: 'kB' },
  dezimalpraefix: { wort: 'Dezimalpräfix', glossar: 'Dezimalpräfix' },
  binaerpraefix: { wort: 'Binärpräfix', glossar: 'Binärpräfix' },
  kib: { wort: 'KiB', glossar: 'KiB' },
  mib: { wort: 'MiB', glossar: 'MiB' },
  gib: { wort: 'GiB', glossar: 'GiB' },
  speicherkapazitaet: { wort: 'Speicherkapazität', glossar: 'Speicherkapazität' },
  hertz: { wort: 'Hertz', glossar: 'Hertz' },
  taktfrequenz: { wort: 'Taktfrequenz', glossar: 'Taktfrequenz' },
  uebertragungsrate: { wort: 'Übertragungsrate', glossar: 'Übertragungsrate' },
};

export const KAPITEL = [
  {
    id: 'bitbyte',
    name: 'Bit und Byte',
    worum: 'Acht Bit ergeben ein Byte',
    kurz: 'Ein **Bit** ist 0 oder 1. **8 Bit sind 1 Byte**, ein Byte kann 2⁸ = 256 Werte darstellen. Bit → Byte: ÷ 8, Byte → Bit: · 8. Großes B heißt Byte, kleines b Bit.',
    braucht: [],
    lernziele: [
      'erklären, was ein Byte ist und wie viele Werte es darstellen kann.',
      'Bit in Byte und Byte in Bit umrechnen.',
      'an der Schreibweise erkennen, ob Bit oder Byte gemeint ist.',
    ],
    begriffe: ['byte'],
    pruefung: [
      'Ein **Byte** besteht aus 8 Bit und kann 2⁸ = 256 verschiedene Werte darstellen (0 bis 255).',
      'Bit → Byte: ÷ 8, Byte → Bit: · 8. Beispiel: 4.096 Bit ÷ 8 = 512 **Byte**.',
      'Das Einheitenzeichen für **Byte** ist das große B (MB), für Bit das kleine b oder „bit“ (Mbit/s).',
    ],
    teile: [
      { id: 'acht-bit', titel: 'Acht Bit für ein Zeichen' },
      { id: 'bit-byte', titel: 'Bit und Byte umrechnen', arten: ['bitbyte'] },
      { id: 'gross-klein', titel: 'Kleines b, großes B' },
    ],
  },
  {
    id: 'dezimal',
    name: 'Dezimalpräfixe',
    worum: 'Kilo, Mega, Giga, Tera: Stufen von 1.000',
    kurz: 'Ein **Präfix** steht vor einer Einheit für einen Faktor. **Dezimalpräfixe** wachsen in Schritten von 1.000: k = 10³, M = 10⁶, G = 10⁹, T = 10¹². 1 kB = 1.000 Byte.',
    braucht: ['bitbyte'],
    lernziele: [
      'erklären, was ein Präfix vor einer Einheit bedeutet.',
      'die Dezimalpräfixe k, M, G und T mit ihrem Wert nennen.',
      'Angaben zwischen Byte, kB, MB, GB und TB umrechnen.',
    ],
    begriffe: ['praefix', 'kb', 'dezimalpraefix'],
    pruefung: [
      'Ein **Präfix** steht vor einer Einheit für einen Faktor: k (Kilo) bedeutet · 1.000, also 3,5 km = 3.500 m.',
      '**Dezimalpräfixe** sind Potenzen von 1.000: k = 10³, M = 10⁶, G = 10⁹, T = 10¹². Also ist 1 **kB** = 1.000 Byte und 1 GB = 1.000.000.000 Byte.',
      'Je Stufe nach unten · 1.000, nach oben ÷ 1.000: 2,5 GB = 2.500 MB = 2.500.000 kB.',
    ],
    teile: [
      { id: 'kilo', titel: 'Kilo heißt tausend' },
      { id: 'treppe-dezimal', titel: 'Die Treppe: kB, MB, GB, TB' },
    ],
  },
  {
    id: 'binaer',
    name: 'Binärpräfixe',
    worum: 'KiB, MiB, GiB, TiB: Stufen von 1.024',
    kurz: '**Binärpräfixe** tragen ein i und wachsen in Schritten von 1.024 = 2¹⁰: 1 **KiB** = 1.024 Byte, 1 **MiB** = 1.024² Byte, 1 **GiB** = 1.024³ Byte. Datenmengen gibt man binär an, physikalische Größen und Herstellerangaben dezimal.',
    braucht: ['bitbyte', 'dezimal'],
    lernziele: [
      'erklären, warum es Präfixe mit 1.024 gibt und woran du sie erkennst.',
      'sagen, wie viele Byte 1 KiB, 1 MiB und 1 GiB sind, und Byte schrittweise in KiB, MiB, GiB und TiB umrechnen.',
      'sagen, wofür Dezimal- und wofür Binärpräfixe verwendet werden.',
    ],
    begriffe: ['binaerpraefix', 'kib', 'mib', 'gib'],
    pruefung: [
      '**Binärpräfixe** sind Potenzen von 1.024 = 2¹⁰ und tragen ein i: 1 **KiB** = 1.024 Byte, dagegen 1 kB = 1.000 Byte.',
      '1 **MiB** = 1.024² Byte = 1.048.576 Byte, 1 **GiB** = 1.024³ Byte = 1.073.741.824 Byte. Von Byte zu KiB, MiB, GiB und TiB teilt man je Stufe durch 1.024.',
      'Datenmengen gibt man nach Prüfungskatalog mit **Binärpräfixen** an (KiB, MiB, GiB, TiB), physikalische Größen, Übertragungsraten und Herstellerangaben mit Dezimalpräfixen (kB, GB, GHz, Mbit/s).',
    ],
    teile: [
      { id: 'warum-1024', titel: 'Warum 1.024?' },
      { id: 'treppe-binaer', titel: 'Die Treppe: KiB, MiB, GiB, TiB' },
      { id: 'wofuer', titel: 'Wann 1.000, wann 1.024?' },
    ],
  },
  {
    id: 'umrechnen',
    name: 'GB und GiB',
    worum: 'Warum 1.000 GB nur 931 GiB sind',
    kurz: 'Zwischen Dezimal- und Binärpräfixen rechnest du **immer über Byte**: 1.000 GB = 10¹² Byte, ÷ 1.024³ ≈ 931,32 GiB. Es fehlt kein Speicher – dieselbe Bytezahl steht nur in einer größeren Einheit.',
    braucht: ['dezimal', 'binaer'],
    lernziele: [
      'eine Angabe in GB über Byte in GiB umrechnen.',
      'begründen, warum ein Datenträger mit 1.000 GB als etwa 931 GiB angezeigt wird.',
      'eine Angabe in GiB oder MiB in GB oder MB umrechnen.',
    ],
    begriffe: ['speicherkapazitaet'],
    pruefung: [
      'GB → GiB immer über Byte: Wert · 1.000³ ergibt Byte, dann ÷ 1.024³. Beispiel: 500 GB = 500.000.000.000 Byte ≈ 465,66 GiB.',
      'Der Hersteller gibt die **Speicherkapazität** dezimal an: 1.000 GB = 10¹² Byte. Das Betriebssystem rechnet binär: 10¹² Byte ÷ 1.024³ ≈ 931,32 GiB. Es fehlt kein Speicher, nur die Einheit ist eine andere.',
      'GiB → GB: Wert · 1.024³ ergibt Byte, dann ÷ 1.000³. Beispiel: 4 GiB ≈ 4,29 GB. Der Unterschied wächst mit jeder Stufe (MB/MiB 4,9 %, GB/GiB 7,4 %, TB/TiB 10 %).',
    ],
    teile: [
      { id: 'festplatte', titel: 'Wo sind die 69 GB?', arten: ['dez2bin'] },
      { id: 'zurueck', titel: 'Von GiB nach GB', arten: ['bin2dez'] },
    ],
  },
  {
    id: 'physik',
    name: 'Takt und Übertragungsrate',
    worum: 'GHz und Mbit/s: physikalische Größen rechnen dezimal',
    kurz: '**Hertz** zählt Takte je Sekunde, eine **Taktfrequenz** von 3,4 GHz sind 3.400.000.000 Hz. Die **Übertragungsrate** steht in bit/s mit Dezimalpräfix: 100 Mbit/s = 100.000.000 bit/s = 12,5 MB/s.',
    braucht: ['bitbyte', 'dezimal'],
    lernziele: [
      'erklären, was Hertz und Taktfrequenz bedeuten, und GHz oder MHz in Hz umrechnen.',
      'eine Übertragungsrate in bit/s umrechnen und daraus die Byte je Sekunde bestimmen.',
    ],
    begriffe: ['hertz', 'taktfrequenz', 'uebertragungsrate'],
    pruefung: [
      '**Hertz** ist die Einheit der Frequenz: Takte je Sekunde. Physikalische Größen haben Dezimalpräfixe, eine **Taktfrequenz** von 3,4 GHz sind 3,4 · 10⁹ Hz = 3.400.000.000 Hz.',
      'Die **Übertragungsrate** wird in bit/s mit Dezimalpräfix angegeben: 100 Mbit/s = 100.000.000 bit/s; ÷ 8 ergibt 12.500.000 Byte/s = 12,5 MB/s.',
    ],
    teile: [
      { id: 'hertz', titel: 'Gigahertz: Takte je Sekunde', arten: ['physik'] },
      { id: 'bitrate', titel: 'Mbit/s ist nicht MB/s' },
    ],
  },
];
