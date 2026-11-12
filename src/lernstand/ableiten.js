// Berechnet den gesamten Lernstand aus dem Ereignisprotokoll.
// Rein und ohne Browser-Abhängigkeit: gleiche Ereignisse + gleicher Inhalt + gleicher Tag
// ergeben immer denselben Stand. Unbekannte IDs (z. B. nach einem Inhalts-Update) werden
// übersprungen, ohne etwas zu beschädigen.

import { tagVon, tagPlus, tageZwischen } from './zeit.js';
import { KARTEN_ABSTAND, KARTE_SICHER_AB, NOTE, PROBLEM_AB, naechsteStufe, mitPruefungsrunde, XP, rangFuer } from './regeln.js';

export function leererStand() {
  return {
    spErledigt: new Map(), // spId → Zeitpunkt
    spXp: new Map(), // spId → Zeitpunkt, an dem die Punkte fürs Abhaken gebucht wurden
    blockBonus: new Map(), // blockId → Zeitpunkt des gebuchten Block-Bonus
    blockErledigtAm: new Map(), // blockId → Zeitpunkt des ersten Abschlusses
    phasen: new Map(), // blockId → [t1, t2, t3] – nur aus alten Ereignissen der früheren Wiederholungs-Phasen
    karten: new Map(), // kartenId → { stufe, roh, faellig, n, richtig, fehl, zuletzt, note, verlauf }
    gemerkt: new Set(),
    termine: {},
    notizen: new Map(),
    aufgaben: new Map(), // spId → { n, ok, zuletzt }
    trainer: new Map(), // trainerId → { n, ok }
    geloest: new Set(), // „trainerId:aufgabenId" fester Aufgaben (SQL-Labor), die schon einmal gelöst wurden
    pruefungen: [], // abgeschlossene Probeprüfungen { t, teil, titel, satz, p, max, dauer, sp }
    fokusMinuten: 0,
    tage: new Map(), // tag → { xp, n }
    xp: 0,
    xpVerlauf: [], // [zeitpunkt, xp gesamt] bei Rangwechseln
  };
}

// Bucht Erfahrungspunkte auf einen Tag. zaehlt = false: keine eigene Lernhandlung
// (z. B. Abzug beim Wieder-Abwählen oder Bonus zusätzlich zu einer Handlung).
function buche(stand, t, xp, zaehlt = true) {
  const tag = tagVon(t);
  let eintrag = stand.tage.get(tag);
  if (!eintrag) stand.tage.set(tag, (eintrag = { xp: 0, n: 0 }));
  eintrag.xp += xp;
  if (zaehlt) eintrag.n += 1;
  stand.xp += xp;
}

export function ableiten(ereignisse, index, heute = tagVon(Date.now())) {
  const stand = leererStand();
  const spJeBlockErledigt = new Map();

  for (const roh of ereignisse) {
    // Lernstand-Umzug (P6): alte IDs auf die neuen umschreiben; das Protokoll selbst bleibt unverändert.
    // Ein einzelnes kaputtes Ereignis (z. B. aus einer von Hand geänderten Sicherung) wird übersprungen,
    // statt die ganze App am Start zu hindern. Es bleibt im Protokoll, gelöscht wird nichts.
    try {
      verarbeite(stand, spJeBlockErledigt, index, roh);
    } catch {}
  }

  // Prüfungsrunde mit dem zuletzt eingetragenen Termin (er kann nach den Kartenantworten gesetzt worden sein)
  for (const [id, k] of stand.karten) k.faellig = mitPruefungsrunde(k.roh, tagVon(k.zuletzt), terminFuerKarte(stand, index, id), id);

  stand.heute = heute;
  stand.rang = rangFuer(stand.xp);
  stand.serie = serieBerechnen(stand.tage, heute);
  return stand;
}

function terminFuerKarte(stand, index, id) {
  const sp = index.sp.get(index.karten.get(id)?.sp);
  return (sp && stand.termine[sp.raum]) || null;
}

function verarbeite(stand, spJeBlockErledigt, index, ev) {
  switch (ev.e) {
    case 'sp': {
      const sp = index.sp.get(ev.id);
      if (!sp) break;
      const war = stand.spErledigt.has(ev.id);
      if (ev.an && !war) {
        stand.spErledigt.set(ev.id, ev.t);
        spJeBlockErledigt.set(sp.block, (spJeBlockErledigt.get(sp.block) ?? 0) + 1);
        stand.spXp.set(ev.id, ev.t);
        buche(stand, ev.t, XP.stichpunkt);
        const block = index.bloecke.get(sp.block);
        if (block && spJeBlockErledigt.get(sp.block) === block.sp.length) {
          if (!stand.blockErledigtAm.has(sp.block)) stand.blockErledigtAm.set(sp.block, ev.t);
          if (!stand.blockBonus.has(sp.block)) {
            stand.blockBonus.set(sp.block, ev.t);
            buche(stand, ev.t, XP.blockGeschafft, false);
          }
        }
      } else if (!ev.an && war) {
        // Wieder abgewählt: Punkte zurück – am Tag, an dem sie gebucht wurden. So lässt sich
        // durch An- und Abhaken nichts sammeln.
        stand.spErledigt.delete(ev.id);
        spJeBlockErledigt.set(sp.block, spJeBlockErledigt.get(sp.block) - 1);
        if (stand.spXp.has(ev.id)) {
          buche(stand, stand.spXp.get(ev.id), -XP.stichpunkt, false);
          stand.spXp.delete(ev.id);
        }
        if (stand.blockBonus.has(sp.block)) {
          buche(stand, stand.blockBonus.get(sp.block), -XP.blockGeschafft, false);
          stand.blockBonus.delete(sp.block);
        }
      }
      break;
    }
    case 'wdh': {
      // Frühere Wiederholungs-Phasen eines Blocks: werden nicht mehr angeboten. Alte Ereignisse behalten
      // ihre Punkte, damit kein Rang verloren geht; angezeigt oder geplant wird daraus nichts mehr.
      const block = index.bloecke.get(ev.id);
      if (!block || !stand.blockErledigtAm.has(ev.id)) break;
      const p = stand.phasen.get(ev.id) ?? [null, null, null];
      if (ev.p < 1 || ev.p > 3 || p[ev.p - 1] !== null) break;
      if (ev.p > 1 && p[ev.p - 2] === null) break;
      p[ev.p - 1] = ev.t;
      stand.phasen.set(ev.id, p);
      buche(stand, ev.t, XP.wiederholung);
      break;
    }
    case 'karte': {
      if (!index.karten.has(ev.id)) break;
      const k = stand.karten.get(ev.id) ?? { stufe: 0, roh: null, faellig: null, n: 0, richtig: 0, fehl: 0, zuletzt: null, note: null, verlauf: '' };
      // Vorzeitig gewusst (Zufallsmix, Gemerkte, gleicher Tag): kein Aufstieg, sonst ließe sich eine Karte
      // an einem Tag auf „sicher“ hochklicken, ohne dass ein Abstand gehalten wurde.
      const tag = tagVon(ev.t);
      const vorzeitig = k.faellig !== null && tag < k.faellig;
      if (!(vorzeitig && ev.n === NOTE.GEWUSST)) {
        k.stufe = naechsteStufe(k.stufe, ev.n);
        k.roh = tagPlus(tag, KARTEN_ABSTAND[k.stufe]);
        k.faellig = mitPruefungsrunde(k.roh, tag, terminFuerKarte(stand, index, ev.id), ev.id);
      }
      k.n += 1;
      if (ev.n === NOTE.GEWUSST) k.richtig += 1;
      if (ev.n === NOTE.NICHT) k.fehl += 1;
      k.zuletzt = ev.t;
      k.note = ev.n;
      k.verlauf = (k.verlauf + ev.n).slice(-8);
      stand.karten.set(ev.id, k);
      buche(stand, ev.t, XP.karte[ev.n] ?? 1);
      break;
    }
    case 'merken':
      if (ev.an) stand.gemerkt.add(ev.id);
      else stand.gemerkt.delete(ev.id);
      break;
    case 'aufgabe': {
      if (ev.sp && index.sp.has(ev.sp)) {
        const a = stand.aufgaben.get(ev.sp) ?? { n: 0, ok: 0, zuletzt: null, fehlerZuletzt: null };
        a.n += 1;
        if (ev.ok) a.ok += 1;
        else a.fehlerZuletzt = ev.t;
        a.zuletzt = ev.t;
        stand.aufgaben.set(ev.sp, a);
      }
      const tr = stand.trainer.get(ev.tr) ?? { n: 0, ok: 0 };
      tr.n += 1;
      if (ev.ok) tr.ok += 1;
      stand.trainer.set(ev.tr, tr);
      if (ev.ok && ev.a) stand.geloest.add(`${ev.tr}:${ev.a}`);
      buche(stand, ev.t, ev.ok ? XP.aufgabeRichtig : XP.aufgabeVersucht);
      break;
    }
    case 'fokus': {
      const min = Math.max(0, Math.min(180, Math.round(ev.min ?? 0)));
      stand.fokusMinuten += min;
      buche(stand, ev.t, Math.floor(min / XP.fokusJeMinuten));
      break;
    }
    case 'pruefung': {
      if (!(ev.max > 0)) break;
      stand.pruefungen.push({ t: ev.t, teil: ev.teil, titel: ev.titel, satz: ev.satz ?? null, p: ev.p, max: ev.max, dauer: ev.dauer ?? null, sp: ev.sp ?? {} });
      // Punkte je Stichpunkt fließen wie Trainer-Aufgaben in Stärken und Schwächen ein: ab der Hälfte gilt es als gekonnt
      for (const [id, wert] of Object.entries(ev.sp ?? {})) {
        if (!Array.isArray(wert)) continue;
        const [erreicht, max] = wert;
        if (!index.sp.has(id) || !(max > 0)) continue;
        const a = stand.aufgaben.get(id) ?? { n: 0, ok: 0, zuletzt: null, fehlerZuletzt: null };
        a.n += 1;
        if (erreicht >= max / 2) a.ok += 1;
        else a.fehlerZuletzt = ev.t;
        a.zuletzt = ev.t;
        stand.aufgaben.set(id, a);
      }
      buche(stand, ev.t, XP.pruefung);
      break;
    }
    case 'termin':
      if (ev.r) stand.termine[ev.r] = ev.d ?? null;
      break;
    case 'notiz':
      if (ev.text) stand.notizen.set(ev.id, ev.text);
      else stand.notizen.delete(ev.id);
      break;
    default:
      break;
  }
}

// Lernserie: aufeinanderfolgende Tage mit mindestens einer Lernhandlung.
// Ist heute noch nichts passiert, zählt die Serie bis gestern weiter.
export function serieBerechnen(tage, heute) {
  const aktiv = (tag) => (tage.get(tag)?.n ?? 0) > 0;
  const heuteAktiv = aktiv(heute);
  let aktuell = 0;
  let tag = heuteAktiv ? heute : tagPlus(heute, -1);
  while (aktiv(tag)) {
    aktuell++;
    tag = tagPlus(tag, -1);
  }
  const sortiert = [...tage.keys()].filter(aktiv).sort();
  let beste = 0;
  let lauf = 0;
  let vorher = null;
  for (const t of sortiert) {
    lauf = vorher && tageZwischen(vorher, t) === 1 ? lauf + 1 : 1;
    beste = Math.max(beste, lauf);
    vorher = t;
  }
  return { aktuell, beste, heuteAktiv };
}

// ---------- Abfragen auf dem Stand ----------

export function blockZustand(stand, block) {
  const erledigt = block.sp.filter((id) => stand.spErledigt.has(id)).length;
  const gesamt = block.sp.length;
  const fertig = erledigt === gesamt;
  return {
    erledigt,
    gesamt,
    fertig,
    angefangen: erledigt > 0 && !fertig,
    anteil: gesamt ? erledigt / gesamt : 0,
    erledigtAm: stand.blockErledigtAm.get(block.id) ?? null,
  };
}

// Offene Karten: Karten abgehakter Stichpunkte, die noch nie bewertet wurden – in der Reihenfolge,
// in der die Stichpunkte abgehakt wurden, innerhalb eines Stichpunkts in Karten-Reihenfolge.
// Wird ein Stichpunkt wieder geöffnet, fallen seine unbewerteten Karten heraus; bewertete behalten ihren Stand.
export function offeneKarten(stand, index, raumId) {
  return [...stand.spErledigt]
    .filter(([id]) => index.sp.get(id)?.raum === raumId)
    .sort((a, b) => a[1] - b[1])
    .flatMap(([id]) => (index.kartenJeSp.get(id) ?? []).filter((k) => !stand.karten.has(k)));
}

export function istProblemkarte(stand, id) {
  return (stand.karten.get(id)?.fehl ?? 0) >= PROBLEM_AB;
}

export function kartenZustand(stand, kartenIds) {
  let neu = 0;
  let lernen = 0;
  let sicher = 0;
  let faellig = 0;
  let richtig = 0;
  let antworten = 0;
  let problem = 0;
  for (const id of kartenIds) {
    const k = stand.karten.get(id);
    if (!k) {
      neu++;
      continue;
    }
    antworten += k.n;
    richtig += k.richtig;
    if (k.fehl >= PROBLEM_AB) problem++;
    if (k.stufe >= KARTE_SICHER_AB) sicher++;
    else lernen++;
    if (k.faellig <= stand.heute) faellig++;
  }
  return { gesamt: kartenIds.length, neu, lernen, sicher, faellig, problem, richtig, antworten, quote: antworten ? richtig / antworten : null };
}

export function istKarteFaellig(stand, id) {
  const k = stand.karten.get(id);
  return !!k && k.faellig <= stand.heute;
}
