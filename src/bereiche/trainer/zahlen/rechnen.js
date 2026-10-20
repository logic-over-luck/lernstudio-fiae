// Rechen- und Formathilfen des Zahlen-Trainers. Rein, ohne Browser-Abhängigkeit (Tests laden sie mit Node).
// Zahlen prüfen und formatieren übernimmt der gemeinsame Prüfer der Rechentrainer (rahmen/pruefen.js).

import { zahlText, runde, lesarten } from '../rahmen/pruefen.js';

export { zahlText as z, runde };
const z = zahlText;

// ---------- Einheiten ----------

export const BIN_EINHEITEN = ['Byte', 'KiB', 'MiB', 'GiB', 'TiB'];
export const DEZ_EINHEITEN = ['Byte', 'kB', 'MB', 'GB', 'TB'];

// Byte je Einheit – Datenmengen mit Binärpräfix (1.024), Herstellerangaben und Übertragungsraten dezimal (1.000)
export const BYTE_JE = {
  Bit: 1 / 8,
  Byte: 1,
  kB: 1e3,
  KiB: 1024,
  MB: 1e6,
  MiB: 1024 ** 2,
  GB: 1e9,
  GiB: 1024 ** 3,
  TB: 1e12,
  TiB: 1024 ** 4,
};

// Rechenweg-Text zum Faktor einer Einheit: „1.000³“, „1.024²“, „÷ 8“
export function faktorText(einheit) {
  if (einheit === 'Bit') return '÷ 8';
  if (einheit === 'Byte') return '1';
  const stufe = (einheit.endsWith('iB') ? BIN_EINHEITEN : DEZ_EINHEITEN).indexOf(einheit);
  const basis = einheit.endsWith('iB') ? '1.024' : '1.000';
  return stufe === 1 ? basis : `${basis}${hoch(stufe)}`;
}

// Passende Stufe für eine Bytezahl: die größte Einheit, in der der Wert mindestens 1 ist
export function passendeEinheit(byte, einheiten, basis) {
  let stufe = 0;
  while (stufe < einheiten.length - 1 && byte >= basis ** (stufe + 1)) stufe++;
  return { stufe, einheit: einheiten[stufe], wert: byte / basis ** stufe };
}

const HOCHZAHLEN = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
export const hoch = (n) =>
  String(n)
    .split('')
    .map((c) => HOCHZAHLEN[Number(c)])
    .join('');

// Sekunden als „2 min 10 s“ (Sekunden ganzzahlig gerundet)
export function minSek(sekunden) {
  const ganz = Math.round(sekunden);
  const min = Math.floor(ganz / 60);
  return min ? `${min} min ${ganz % 60} s` : `${ganz} s`;
}

// ---------- Übertragung ----------

// Bit je Sekunde je Einheit einer Übertragungsrate – Raten sind immer dezimal
export const BPS_JE = { 'bit/s': 1, 'kbit/s': 1e3, 'Mbit/s': 1e6, 'Gbit/s': 1e9 };

// Datenmenge in Bit: Wert · Byte je Einheit · 8 („5 MiB“ → 5 · 1.024² · 8)
export const inBit = (wert, einheit) => wert * BYTE_JE[einheit] * 8;

// Sekunden in ganze Minuten und Restsekunden, vorher auf ganze Sekunden gerundet: 85,9 → { ganz: 86, min: 1, sek: 26 }
export function minutenUndSekunden(sekunden) {
  const ganz = Math.round(sekunden);
  return { ganz, min: Math.floor(ganz / 60), sek: ganz % 60 };
}

// ---------- Eingaben lesen ----------

// Erste plausible Zahl einer Eingabe („1.024,5“, „2,5“, „3 400 000“) oder null
export function leseZahl(text) {
  const werte = lesarten(text);
  return werte.length ? werte[0] : null;
}

// Zahl in einem Stellenwertsystem lesen: Leerzeichen, 0x/0b/0o und ein h am Ende sind erlaubt
export function leseBasis(text, basis) {
  let s = String(text ?? '')
    .trim()
    .toLowerCase()
    .replace(/[\s_]/g, '');
  if (basis === 16) s = s.replace(/^0x/, '').replace(/h$/, '');
  if (basis === 2) s = s.replace(/^0b/, '');
  if (basis === 8) s = s.replace(/^0o/, '');
  const ziffern = { 2: /^[01]+$/, 8: /^[0-7]+$/, 10: /^\d+$/, 16: /^[0-9a-f]+$/ }[basis];
  return ziffern.test(s) ? parseInt(s, basis) : null;
}

// Bitfolge („0110 100“) als Array aus 0 und 1, sonst null
export function leseBits(text) {
  const s = String(text ?? '').replace(/\s/g, '');
  return /^[01]+$/.test(s) ? [...s].map(Number) : null;
}

// ---------- Zahlensysteme ----------

// Binärzahl in Vierergruppen: „1100 1000“
export function gruppiert(bin, breite = 4) {
  const s = bin.padStart(Math.ceil(bin.length / breite) * breite, '0');
  return s.match(new RegExp(`.{${breite}}`, 'g')).join(' ');
}

export const hexZiffer = (wert) => wert.toString(16).toUpperCase();

// Restwertverfahren in Schritten: [{ x, q, r }] mit x ÷ basis = q Rest r, der erste Rest ist die rechte Ziffer
export function restSchritte(n, basis) {
  if (n === 0) return [{ x: 0, q: 0, r: 0 }];
  const schritte = [];
  for (let x = n; x > 0; x = Math.floor(x / basis)) schritte.push({ x, q: Math.floor(x / basis), r: x % basis });
  return schritte;
}

// Restwertverfahren als Text, eine Zeile je Schritt
export function divisionsweg(n, basis) {
  return restSchritte(n, basis).map(({ x, q, r }) => `${z(x)} ÷ ${basis} = ${z(q)} Rest ${basis === 16 && r > 9 ? `${hexZiffer(r)} (${r})` : r}`);
}

// Ziffern mit ihren Stellenwerten: [{ ziffer, wert, potenz, stellenwert, produkt }], links beginnend
export function stellen(ziffern, basis) {
  return [...ziffern].map((ziffer, i) => {
    const potenz = ziffern.length - 1 - i;
    const wert = parseInt(ziffer, basis);
    return { ziffer: ziffer.toUpperCase(), wert, potenz, stellenwert: basis ** potenz, produkt: wert * basis ** potenz };
  });
}

// Stellenwerte einer Ziffernfolge: „1·128 + 1·64 + 1·8“ (Nullen weggelassen)
export function stellenwertweg(ziffern, basis) {
  return (
    stellen(ziffern, basis)
      .filter((s) => s.wert)
      .map((s) => `${s.wert}·${z(s.stellenwert)}`)
      .join(' + ') || '0'
  );
}

// Bits einer Zahl in Gruppen von rechts (4 = Hex-Ziffern, 3 = Oktalziffern), links mit Nullen aufgefüllt:
// [{ bits: '1100', ziffer: 'C', wert: 12 }]. mindestens: so viele Bit werden mindestens gezeigt.
export function bitGruppen(n, breite, mindestens = 8) {
  const bin = n.toString(2);
  const laenge = Math.ceil(Math.max(bin.length, mindestens) / breite) * breite;
  return bin
    .padStart(laenge, '0')
    .match(new RegExp(`.{${breite}}`, 'g'))
    .map((bits) => {
      const wert = parseInt(bits, 2);
      return { bits, wert, ziffer: wert.toString(breite === 4 ? 16 : 8).toUpperCase() };
    });
}

// Dieselbe Ziffernfolge in mehreren Basen gelesen: [{ basis, wert, weg }]. wert und weg (Ziffer · Stellenwert) sind null,
// wenn eine Ziffer in dieser Basis nicht vorkommt („19“ gibt es binär und oktal nicht).
export function jeBasis(ziffern, basen = [2, 8, 10, 16]) {
  const s = String(ziffern ?? '')
    .replace(/\s/g, '')
    .toUpperCase();
  return basen.map((basis) => {
    const gueltig = /^[0-9A-Z]+$/.test(s) && [...s].every((c) => parseInt(c, 36) < basis);
    return { basis, wert: gueltig ? parseInt(s, basis) : null, weg: gueltig ? stellenwertweg(s, basis) : null };
  });
}

// Binärzahl in Nibbles mit Hex-Ziffer: „1100 = C · 1000 = 8“
export function nibbles(bin) {
  return gruppiert(bin)
    .split(' ')
    .map((g) => `${g} = ${hexZiffer(parseInt(g, 2))}`)
    .join(' · ');
}

// ---------- Dateirechte ----------

export const RWX = ['---', '--x', '-w-', '-wx', 'r--', 'r-x', 'rw-', 'rwx'];
export const KLASSEN = ['Besitzer', 'Gruppe', 'andere'];

// „754“ → „rwxr-xr--“
export function symbolisch(oktal) {
  return [...String(oktal)].map((d) => RWX[Number(d)]).join('');
}

// Rechte lesen – als Oktalzahl („754“, „0754“) oder symbolisch („rwxr-xr--“, „-rwxr-xr--“); null, wenn beides nicht passt
export function leseRechte(text) {
  const s = String(text ?? '')
    .trim()
    .toLowerCase()
    .replace(/\s/g, '')
    .replace(/^chmod/, '');
  if (/^0?[0-7]{3}$/.test(s)) {
    const oktal = s.slice(-3);
    return { oktal, sym: symbolisch(oktal) };
  }
  const sym = s.replace(/^-(?=.{9}$)/, '');
  if (/^([-r][-w][-x]){3}$/.test(sym)) return { oktal: [0, 3, 6].map((i) => RWX.indexOf(sym.slice(i, i + 3))).join(''), sym };
  return null;
}

// Erklärung einer Oktalziffer: „7 = r + w + x = 4 + 2 + 1“
export function rechteSumme(ziffer) {
  const teile = [];
  if (ziffer & 4) teile.push(['r', 4]);
  if (ziffer & 2) teile.push(['w', 2]);
  if (ziffer & 1) teile.push(['x', 1]);
  if (!teile.length) return `${ziffer} = keine Rechte`;
  return `${ziffer} = ${teile.map(([b]) => b).join(' + ')} = ${teile.map(([, w]) => w).join(' + ')}`;
}

// Neun Schalter (Besitzer r w x, Gruppe r w x, andere r w x) → { ziffern: [7, 5, 4], oktal: '754', sym: 'rwxr-xr--' }
export function rechteAusSchaltern(schalter) {
  const ziffern = [0, 1, 2].map((k) => schalter.slice(k * 3, k * 3 + 3).reduce((summe, an, i) => summe + (an ? 4 >> i : 0), 0));
  const oktal = ziffern.join('');
  return { ziffern, oktal, sym: symbolisch(oktal) };
}

// Oktalzahl → neun Schalter („754“ → true true true, true false true, true false false)
export const schalterAusOktal = (oktal) => [...String(oktal)].flatMap((d) => [4, 2, 1].map((w) => (Number(d) & w) > 0));

// Welche Klasse gilt für einen Benutzer? Linux prüft der Reihe nach: Besitzer (0), sonst Gruppe (1), sonst andere (2).
//   benutzer: { name, gruppen: [..] } · datei: { besitzer, gruppe }
export function geltendeKlasse(benutzer, datei) {
  if (benutzer.name === datei.besitzer) return 0;
  return benutzer.gruppen.includes(datei.gruppe) ? 1 : 2;
}

// ---------- Parität ----------

export const einsen = (bits) => bits.reduce((a, b) => a + b, 0);

// Paritätsbit für eine Bitfolge: gerade Parität → Gesamtzahl der Einsen gerade
export const paritaetsbit = (bits, gerade) => (gerade ? einsen(bits) % 2 : 1 - (einsen(bits) % 2));

// Prüfung beim Empfänger: passt die Anzahl der Einsen (mit Paritätsbit) zur vereinbarten Parität?
export const paritaetOk = (bits, gerade) => einsen(bits) % 2 === (gerade ? 0 : 1);

// Zeichen zu einer 7-Bit-Folge im ASCII-Code („0110100“ → „4“); Steuerzeichen (unter 32 und 127) als null
export function asciiZeichen(bits) {
  const n = parseInt(bits.join(''), 2);
  return n >= 32 && n < 127 ? String.fromCharCode(n) : null;
}

// CRC-32 (wie die Frame Check Sequence im Ethernet-Frame) über eine Liste von Bytes, als Zahl
export function crc32(bytes) {
  let crc = 0xffffffff;
  for (const b of bytes) {
    crc ^= b;
    for (let i = 0; i < 8; i++) crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
  }
  return (crc ^ 0xffffffff) >>> 0;
}

// Prüfziffer der EAN-13 aus den ersten 12 Ziffern: Gewichte 1, 3, 1, 3 …, Prüfziffer ergänzt die Summe auf ein Vielfaches von 10
export function eanPruefziffer(ziffern) {
  const summe = ziffern.reduce((a, z, i) => a + z * (i % 2 ? 3 : 1), 0);
  return (10 - (summe % 10)) % 10;
}

// ---------- Bilder im Unterricht ----------

// Zählwerk: Ziffern einer Zahl in einer Basis mit fester Stellenzahl (vorn mit 0 aufgefüllt), Überlauf beginnt bei 0
export function zaehlwerk(n, basis, stellen) {
  const max = basis ** stellen;
  const wert = ((n % max) + max) % max;
  return wert.toString(basis).toUpperCase().padStart(stellen, '0').split('');
}

// „Passt es noch?“: von der größten Zweierpotenz abwärts, je Stelle { stellenwert, rest (vorher), passt, danach }
export function passtSchritte(n, bits) {
  const schritte = [];
  let rest = n;
  for (let i = bits - 1; i >= 0; i--) {
    const stellenwert = 2 ** i;
    const passt = rest >= stellenwert;
    schritte.push({ stellenwert, rest, passt, danach: passt ? rest - stellenwert : rest });
    if (passt) rest -= stellenwert;
  }
  return schritte;
}

// ---------- Bilder im Unterricht: Bit, Byte und Präfixe ----------

// Dreiergruppen einer ganzen Zahl von links: 3.400.000.000 → ['3', '400', '000', '000']. Jede Gruppe ist eine Präfixstufe.
export function dreiergruppen(n) {
  const s = String(Math.round(Math.abs(n)));
  const kopf = s.length % 3 || 3;
  const gruppen = [s.slice(0, kopf)];
  for (let i = kopf; i < s.length; i += 3) gruppen.push(s.slice(i, i + 3));
  return gruppen;
}

// Eine Angabe in eine andere Einheit umrechnen, immer über Byte: umrechnen(1000, 'GB', 'GiB') = 931,32…
export const umrechnen = (wert, von, nach) => (wert * BYTE_JE[von]) / BYTE_JE[nach];

// Um wie viel Prozent die binäre Einheit einer Stufe größer ist als die dezimale: 1 → 2,4 (KiB/kB), 3 → 7,37… (GiB/GB)
export const praefixAbstand = (stufe) => ((1024 / 1000) ** stufe - 1) * 100;

// Zeichen eines Textes als Byte (ASCII-Code, 8 Bit); Zeichen außerhalb von ASCII → bits: null
export function zeichenBytes(text) {
  return [...text].map((zeichen) => {
    const code = zeichen.codePointAt(0);
    return { zeichen, code, bits: code < 128 ? code.toString(2).padStart(8, '0') : null };
  });
}

// ---------- Leistung und Stromkosten: Bilder im Unterricht (bilder/strom.jsx) ----------

// Netzteil wählen: Summe der Leistungsaufnahmen (W), Bedarf mit Zuschlag (%), kleinstes passendes Netzteil (oder null)
export function netzteilWahl(leistungen, zuschlag, groessen) {
  const summe = leistungen.reduce((a, w) => a + w, 0);
  const bedarf = runde(summe * (1 + zuschlag / 100), 6);
  return { summe, bedarf, passend: groessen.find((g) => g >= bedarf) ?? null };
}

// Stufen hintereinander (Wirkungsgrade 0 bis 1): aus der aufgenommenen Leistung die Leistung nach jeder Stufe.
// Liefert { stufen: [{ rein, raus, verlust }], eta (Gesamtwirkungsgrad), pab }. Eine einzelne Stufe = ein Netzteil.
export function stufenKette(pzu, etas) {
  const stufen = [];
  let rein = pzu;
  for (const eta of etas) {
    const raus = rein * eta;
    stufen.push({ rein, raus, verlust: rein - raus });
    rein = raus;
  }
  return { stufen, eta: etas.reduce((a, e) => a * e, 1), pab: rein };
}

// Energie und Kosten über Tage. zustaende: [{ leistung (W), stunden (je Tag) }], z. B. Last und Leerlauf
export function jahresEnergie(zustaende, tage, preis) {
  const whTag = zustaende.reduce((a, s) => a + s.leistung * s.stunden, 0);
  const kwh = (whTag * tage) / 1000;
  return { whTag, stunden: zustaende.reduce((a, s) => a + s.stunden, 0) * tage, kwh, kosten: kwh * preis };
}

// Anschluss mit begrenzter Stromstärke (Steckdose 230 V · 16 A, USB 5 V · 0,5 A): reicht er für die Geräte?
export function anschlussLast(leistungen, spannung, maxStrom) {
  const summe = leistungen.reduce((a, w) => a + w, 0);
  const zulaessig = spannung * maxStrom;
  return { summe, strom: summe / spannung, zulaessig, reicht: summe <= zulaessig + 1e-9 };
}

// ---------- Speicherbedarf (Bilder im Unterricht) ----------

// Treppe von Bit bis zu einer Binäreinheit: [{ einheit, wert, schritt }] – Bit → Byte ÷ 8, dann je Stufe ÷ 1.024
export function einheitenTreppe(bit, bis = 'TiB') {
  const treppe = [
    { einheit: 'Bit', wert: bit, schritt: null },
    { einheit: 'Byte', wert: bit / 8, schritt: '÷ 8' },
  ];
  for (const einheit of BIN_EINHEITEN.slice(1, BIN_EINHEITEN.indexOf(bis) + 1)) treppe.push({ einheit, wert: treppe[treppe.length - 1].wert / 1024, schritt: '÷ 1.024' });
  return treppe;
}

// Bit je Farbkanal (Rot, Grün, Blau) einer Farbtiefe; 1 und 4 Bit speichern nur die Helligkeit (schwarz/weiß, 16 Graustufen)
export const FARBKANAELE = { 8: [3, 3, 2], 16: [5, 6, 5], 24: [8, 8, 8] };

// Eine Farbe [r, g, b] (je 0–255) so, wie sie mit `tiefe` Bit je Pixel gespeichert würde
export function farbeInTiefe([r, g, b], tiefe) {
  const stufe = (wert, bits) => {
    const max = 2 ** bits - 1;
    return Math.round((Math.round((wert / 255) * max) / max) * 255);
  };
  if (!FARBKANAELE[tiefe]) {
    const grau = stufe(0.299 * r + 0.587 * g + 0.114 * b, Math.min(tiefe, 8));
    return [grau, grau, grau];
  }
  const [br, bg, bb] = FARBKANAELE[tiefe];
  return [stufe(r, br), stufe(g, bg), stufe(b, bb)];
}

// Abtasten (Sampling): eine Kurve mit Werten von −1 bis 1 an `anzahl` gleich verteilten Zeitpunkten t (0 ≤ t < 1) messen und
// jeden Messwert auf eine von 2^tiefe Stufen legen → [{ t, wert, stufe (0 … 2^tiefe − 1), gespeichert (Mitte der Stufe) }]
export function abtasten(kurve, anzahl, tiefe) {
  const stufen = 2 ** tiefe;
  return Array.from({ length: anzahl }, (_, i) => {
    const t = i / anzahl;
    const wert = kurve(t);
    const stufe = Math.min(stufen - 1, Math.max(0, Math.floor(((wert + 1) / 2) * stufen)));
    return { t, wert, stufe, gespeichert: ((stufe + 0.5) / stufen) * 2 - 1 };
  });
}

// Hochrechnen: eine Startmenge über Faktoren [{ name, faktor }] → [{ name, faktor, menge }] mit der laufenden Menge
export function hochrechnen(start, faktoren) {
  let menge = start;
  return faktoren.map((f) => ({ ...f, menge: (menge *= f.faktor) }));
}

// Um p % verringert (Komprimierung): es bleiben (100 − p) %
export const verringert = (wert, prozent) => wert * (1 - prozent / 100);

// Mehrbedarf in Prozent, bezogen auf den alten Wert
export const mehrbedarf = (alt, neu) => ((neu - alt) / alt) * 100;

// Volle Einheiten bereitstellen heißt aufrunden; winzige Rechenungenauigkeiten (4,000000000001) zählen nicht
export const volle = (wert) => Math.ceil(wert - 1e-9);
