// Wichtigkeit eines Stichpunkts: in wie vielen der ausgewerteten Prüfungen seines Raums er vorkam.
// Vorschlag und Begründung: umbau/berichte/wichtigkeit-vorschlag.md. Prüfskript: tools/umbau/wichtigkeit-pruefen.mjs.
// Rein, ohne Browser-Abhängigkeit (App, Prüfskript und Tests rechnen gleich).
//
// – Gezählt wird, in wie vielen Prüfungen der Stichpunkt dran war (je Prüfung höchstens einmal). Jede Prüfung zählt
//   gleich – alter oder neuer Katalog, Abschrift oder Podcast-Stichwort (P75).
// – Vier Stufen als Priorität, ohne Urteilswörter wie „selten“ (P76): Top-Thema = das oberste Viertel des Raums,
//   Wichtig = die obere Hälfte, Geprüft = mindestens einmal dran, Noch nie geprüft = 0. Die Grenzen gelten je Raum,
//   weil Räume verschieden dicht geprüft werden (PB2: SQL in 8–9 von 10 Prüfungen; AP1: im Schnitt 2 von 11).
//   Innerhalb eines Raums gilt: gleiche Zahl, gleiche Stufe. Gemessen: Top-Themen kommen in der nächsten Prüfung
//   1,5- bis 2,5-mal so oft wieder wie die übrigen; feiner trennen die Daten nicht.
// – Hauptzahl in den Details: „in x von N Prüfungen“; der plausible Bereich (80-%-Intervall, Jeffreys-Prior) im Tooltip.
// – Das Fundament (Stichpunkte, die auf diesem aufbauen) zählt nicht zur Stufe, nur zur Lernreihenfolge.

export const STUFEN = [
  { nr: 1, name: 'Top-Thema', ton: 'top', icon: 'flame', text: 'Gehört zum obersten Viertel des Prüfungsteils – kam immer wieder.' },
  { nr: 2, name: 'Wichtig', ton: 'wichtig', icon: null, text: 'Obere Hälfte – kam öfter als die meisten.' },
  { nr: 3, name: 'Geprüft', ton: 'geprueft', icon: null, text: 'War schon in Prüfungen dran.' },
  { nr: 4, name: 'Noch nie geprüft', ton: 'nie', icon: null, text: 'Steht im Katalog, kam bisher aber nicht dran – kann trotzdem kommen.' },
];
// Anteil der Stichpunkte eines Raums, der höchstens Top-Thema bzw. mindestens Wichtig sein darf
export const ANTEIL_TOP = 0.25;
export const ANTEIL_WICHTIG = 0.5;

// Grenzen eines Raums aus den Prüfungszahlen seiner Stichpunkte: kleinste Zahl c, bei der höchstens ANTEIL der
// Stichpunkte c oder mehr Prüfungen haben (mindestens 2 für „Wichtig“, Top über Wichtig).
export function grenzenFuer(xs) {
  const ab = (anteil, min) => {
    let c = min;
    while (xs.filter((x) => x >= c).length > xs.length * anteil) c++;
    return c;
  };
  const wichtig = ab(ANTEIL_WICHTIG, 2);
  return { top: ab(ANTEIL_TOP, wichtig + 1), wichtig };
}
export const NICHT_GEPRUEFT = 4;
// Stufen 1 und 2 gelten als „oft geprüft“ (ab 4 Prüfungen; Filter im Lernplan, Symbol in Listen)
export const OFT_BIS = 2;
// Gewicht des Fundaments in der Lernreihenfolge: Reihenfolge-Wert = Quote + LAMBDA · Summe der Quoten der offenen
// Stichpunkte, die darauf aufbauen. Eine Setzung (aus Prüfungsdaten nicht schätzbar); das Prüfskript zeigt, wie viel
// Prüfungsabdeckung sie kostet.
export const LAMBDA = 0.5;
// Pause (P75, Signaltest nach der Aufnahmeregel): Ein Stichpunkt, der in der letzten Prüfung des Raums dran war, kam in
// der nächsten seltener wieder. Nur für die Reihenfolge, nie für die Stufe: Abschlag auf seinen Anteil. Knapp belegt –
// bei neuen Prüfungen mit dem Prüfskript erneut prüfen.
export const PAUSE = 0.8;
// Plausibler Bereich: 80-%-Intervall
export const BEREICH = [0.1, 0.9];

// Stufe aus der Zahl der Prüfungen und den Grenzen des Raums
export const stufeFuer = (anzahl, g) => (anzahl >= g.top ? 1 : anzahl >= g.wichtig ? 2 : anzahl >= 1 ? 3 : NICHT_GEPRUEFT);
export const stufe = (nr) => STUFEN[nr - 1];

// Prüfungstermine: 2026H → Herbst 2026, 2025S → Sommer 2025. Reihenfolge nach Jahr, dann Frühjahr/Sommer vor Herbst/Winter.
const JAHRESZEIT = { F: ['Frühjahr', 0], S: ['Sommer', 0], H: ['Herbst', 1], W: ['Winter', 1] };
export function terminName(id) {
  const m = String(id).match(/^(\d{4})([FSHW])$/);
  return m ? `${JAHRESZEIT[m[2]][0]} ${m[1]}` : String(id);
}
const terminSchluessel = (id) => {
  const m = String(id).match(/^(\d{4})([FSHW])$/);
  return m ? Number(m[1]) * 2 + JAHRESZEIT[m[2]][1] : Infinity;
};
export const terminVergleich = (a, b) => terminSchluessel(a) - terminSchluessel(b) || String(a).localeCompare(String(b));

// Quantile der Beta-Verteilung, numerisch (Mittelpunktregel). Genau genug für ganze Prüfungen.
export function betaQuantile(a, b, ps, schritte = 2000) {
  const dichte = [];
  let summe = 0;
  for (let i = 0; i < schritte; i++) {
    const x = (i + 0.5) / schritte;
    const d = Math.exp((a - 1) * Math.log(x) + (b - 1) * Math.log(1 - x));
    summe += d;
    dichte.push(summe);
  }
  return ps.map((p) => (dichte.findIndex((c) => c >= p * summe) + 0.5) / schritte);
}

// Plausibler Bereich in ganzen Prüfungen: x von n Prüfungen beobachtet
export function plausiblerBereich(x, n) {
  if (!n) return { von: 0, bis: 0 };
  const [lo, hi] = betaQuantile(x + 0.5, n - x + 0.5, BEREICH);
  return { von: Math.round(lo * n), bis: Math.round(hi * n) };
}

// Wichtigkeit aller Stichpunkte eines Raums. pruef je Stichpunkt: [[Prüfung, Gewicht], …]
export function wichtigkeitRaum(spListe) {
  const pruefungen = new Map();
  for (const s of spListe) for (const [p, g] of s.pruef ?? []) pruefungen.set(p, Math.max(pruefungen.get(p) ?? 0, g));
  const n = pruefungen.size;
  const letzte = [...pruefungen.keys()].sort(terminVergleich).at(-1);
  const anzahlJe = new Map(spListe.map((s) => [s.id, new Set((s.pruef ?? []).map(([p]) => p)).size]));
  const grenzen = grenzenFuer([...anzahlJe.values()]);
  const je = new Map();
  for (const s of spListe) {
    const eigene = new Map();
    for (const [p, g] of s.pruef ?? []) eigene.set(p, Math.max(eigene.get(p) ?? 0, g));
    const x = eigene.size;
    const termine = [...eigene.keys()].sort(terminVergleich);
    je.set(s.id, {
      x,
      // Prüfungen, die nur über die Themenliste des Podcasts belegt sind (Gewicht unter 0,6; UMBAU.md P74)
      nurStichwort: [...eigene.values()].filter((g) => g < 0.6).length,
      n,
      // Anteil der Prüfungen des Raums (für die Reihenfolge)
      quote: n ? x / n : 0,
      stufe: stufeFuer(x, grenzen),
      termine,
      zuletzt: termine.at(-1) ?? null,
      inLetzter: !!letzte && eigene.has(letzte),
      ...plausiblerBereich(x, n),
    });
  }
  return {
    raum: {
      n,
      grenzen,
      aktuell: [...pruefungen.values()].filter((g) => g >= 1).length,
      // Prüfungen ohne Abschrift, nur aus der Themenliste des Podcasts
      nurStichwort: [...pruefungen.entries()].filter(([, g]) => g < 0.6).map(([p]) => p).sort(terminVergleich),
      termine: [...pruefungen.keys()].sort(terminVergleich),
    },
    je,
  };
}

// Zusammenfassung einer Liste von Stichpunkten (Block, Themenbereich): Anzahl je Stufe, beste Stufe
export function stufenVerteilung(spListe) {
  const anzahl = Array(STUFEN.length + 1).fill(0);
  for (const s of spListe) anzahl[s.wichtig.stufe]++;
  return { anzahl, beste: spListe.length ? Math.min(...spListe.map((s) => s.wichtig.stufe)) : NICHT_GEPRUEFT };
}

// Text für Tooltip und Details: „Top-Thema · In 6 von 11 Prüfungen dran, zuletzt Herbst 2026 · wahrscheinlich 4 bis 8 von 11“
export function wichtigkeitText(w, { kurz = false } = {}) {
  const teile = [stufe(w.stufe).name];
  if (w.x) teile.push(`In ${w.x} von ${w.n} Prüfungen dran${w.nurStichwort ? ` (${w.nurStichwort} davon nur laut Themenliste)` : ''}, zuletzt ${terminName(w.zuletzt)}`);
  else if (w.n) teile.push(`In keiner der ${w.n} ausgewerteten Prüfungen dran – kann trotzdem kommen`);
  for (const q of w.quer ?? []) teile.push(`auch in ${q.x} von ${q.n} ${q.name}-Prüfungen`);
  if (!kurz && w.x) teile.push(w.von === w.bis ? `wahrscheinlich ${w.von} von ${w.n}` : `wahrscheinlich ${w.von} bis ${w.bis} von ${w.n}`);
  return teile.join(' · ');
}

// Reihenfolge-Wert eines offenen Stichpunkts: eigener Anteil plus LAMBDA mal die Anteile der offenen Stichpunkte,
// die auf ihm aufbauen (Fundament); wer in der letzten Prüfung dran war, mit Abschlag PAUSE. offen(id) sagt, ob ein Stichpunkt noch nicht abgehakt ist.
const anteilFuerReihenfolge = (w) => (w ? w.quote * (w.inLetzter ? PAUSE : 1) : 0);
export function reihenfolgeWert(s, index, offen = () => true) {
  const fundament = (s.grundlageFuer ?? []).filter(offen).reduce((a, id) => a + anteilFuerReihenfolge(index.sp.get(id)?.wichtig), 0);
  return anteilFuerReihenfolge(s.wichtig) + LAMBDA * fundament;
}

// Wert eines Blocks für die Reihenfolge: der beste offene Stichpunkt zählt; bei Gleichstand die Summe der offenen.
export function blockWert(block, index, offen = () => true) {
  const werte = block.sp.filter(offen).map((id) => index.sp.get(id)).filter(Boolean).map((s) => reihenfolgeWert(s, index, offen));
  return { bester: werte.length ? Math.max(...werte) : -1, summe: werte.reduce((a, w) => a + w, 0) };
}
export const blockVergleich = (a, b) => b.bester - a.bester || b.summe - a.summe;
