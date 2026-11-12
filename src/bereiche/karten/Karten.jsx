// Lernkarten: Übersicht mit Startpunkten und die Lernsitzung.

import { useEffect, useMemo, useState } from 'preact/hooks';
import { inhalt } from '../../daten/inhalt.js';
import { useLernstand, erfasse, aktuellerStand } from '../../lernstand/store.js';
import { kartenZustand, offeneKarten, istProblemkarte } from '../../lernstand/ableiten.js';
import { KARTEN_ABSTAND, KARTE_SICHER_AB, RUECKSTAU_AB, naechsteStufe, mitPruefungsrunde, NOTE } from '../../lernstand/regeln.js';
import { tageZwischen, tagPlus } from '../../lernstand/zeit.js';
import { geheZu, link } from '../../router.js';
import { Icon, Knopf, SymbolKnopf, Balken, Leer, Rich, Kbd, BlockMarke, Zahl } from '../../ui/bausteine.jsx';

const NEUE_JE_SITZUNG = 20;
const MIX_GROESSE = 20;

function mische(liste) {
  const a = [...liste];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Stellt die Karten einer Sitzung zusammen. Reihenfolge: fällige, neue, übrige.
export function stapelFuer(quelle, raum, stand) {
  const raumKarten = inhalt.kartenJeRaum.get(raum) ?? [];
  const faellig = (id) => {
    const k = stand.karten.get(id);
    return k && k.faellig <= stand.heute;
  };
  const neu = (id) => !stand.karten.has(id);
  const nachFaelligkeit = (ids) => [...ids].sort((a, b) => (stand.karten.get(a).faellig < stand.karten.get(b).faellig ? -1 : 1));
  const geordnet = (ids) => [...nachFaelligkeit(ids.filter(faellig)), ...ids.filter(neu), ...mische(ids.filter((id) => !faellig(id) && !neu(id)))];

  const [art, id] = quelle.split(':');
  switch (art) {
    case 'faellig': {
      // Gemischt, damit Karten desselben Stichpunkts einander nicht verraten; dann nach Fälligkeitstag (stabil).
      // Bei Rückstau (nach einer Pause) die jüngsten Karten zuerst – sie vergessen sich am schnellsten.
      const ids = nachFaelligkeit(mische(raumKarten.filter(faellig)));
      if (ids.length > RUECKSTAU_AB) ids.sort((a, b) => stand.karten.get(a).stufe - stand.karten.get(b).stufe);
      return { titel: 'Fällige Karten', ids };
    }
    case 'neu':
      // Offene Karten: aus abgehakten Stichpunkten, in Abhak-Reihenfolge
      return { titel: 'Offene Karten', ids: offeneKarten(stand, inhalt, raum).slice(0, NEUE_JE_SITZUNG) };
    case 'mix':
      // Nur Karten, die schon bewertet sind – sonst kämen Themen in den Plan, die noch gar nicht gelernt sind
      return { titel: 'Zufallsmix', ids: mische(raumKarten.filter((k) => stand.karten.has(k))).slice(0, MIX_GROESSE) };
    case 'gemerkt':
      return { titel: 'Gemerkte Karten', ids: mische(raumKarten.filter((k) => stand.gemerkt.has(k))) };
    case 'schwer': {
      // Problemkarten zuerst, dann die übrigen gemischt
      const ids = mische(raumKarten.filter((k) => (stand.karten.get(k)?.note ?? 2) < 2 || istProblemkarte(stand, k)));
      return { titel: 'Schwierige Karten', ids: [...ids.filter((k) => istProblemkarte(stand, k)), ...ids.filter((k) => !istProblemkarte(stand, k))] };
    }
    case 'sp':
      return { titel: inhalt.sp.get(id)?.titel ?? 'Stichpunkt', ids: geordnet(inhalt.kartenJeSp.get(id) ?? []) };
    case 'block':
      return { titel: inhalt.bloecke.get(id)?.titel ?? 'Block', ids: geordnet(inhalt.kartenJeBlock.get(id) ?? []) };
    case 'ordner':
      return { titel: inhalt.ordner.get(id)?.titel ?? 'Themenbereich', ids: geordnet(inhalt.kartenJeOrdner.get(id) ?? []) };
    default:
      return { titel: 'Lernkarten', ids: [] };
  }
}

export function Karten({ raum, unter, params }) {
  if (unter === 'sitzung') return <Sitzung key={`${raum}-${params.quelle}-${params.n ?? ''}`} raum={raum} quelle={params.quelle ?? 'faellig'} />;
  return <Uebersicht raum={raum} />;
}

function Uebersicht({ raum }) {
  const stand = useLernstand();
  const r = inhalt.raeume.get(raum);
  const alle = inhalt.kartenJeRaum.get(raum) ?? [];
  const z = kartenZustand(stand, alle);
  const gemerkt = alle.filter((id) => stand.gemerkt.has(id)).length;
  const schwer = alle.filter((id) => (stand.karten.get(id)?.note ?? 2) < 2 || istProblemkarte(stand, id)).length;
  const offen = offeneKarten(stand, inhalt, raum).length;
  const gesehen = z.gesamt - z.neu;
  const start = (quelle) => geheZu(raum, 'karten', 'sitzung', { quelle });

  const Start = ({ icon, titel, text, zahl, quelle, ton, aus }) => (
    <button class={`flaeche flaeche--klickbar karten-start ${ton ? `karten-start--${ton}` : ''}`} disabled={aus} onClick={() => start(quelle)}>
      <span class="karten-start__symbol">
        <Icon name={icon} groesse={20} />
      </span>
      <span class="wachsen">
        <span class="karten-start__titel">{titel}</span>
        <span class="karten-start__text">{text}</span>
      </span>
      <span class="karten-start__zahl tabellenziffern">{zahl}</span>
    </button>
  );

  return (
    <div class="karten">
      <header class="seitenkopf">
        <div>
          <div class="ueberschrift-klein ueberschrift-klein--akzent">{r.name} · Lernkarten</div>
          <h1 class="seitenkopf__titel">Lernkarten</h1>
          <p class="seitenkopf__text">
            Erst die Antwort im Kopf festlegen, dann aufdecken und ehrlich bewerten. Davon hängt ab, wann die Karte wiederkommt. Hakst du im Lernplan
            einen Stichpunkt ab, werden seine Karten hier offen.
          </p>
        </div>
      </header>

      <div class="flaeche flaeche--innen karten-bilanz">
        <div class="karten-bilanz__zahlen">
          <Kennzahl wert={z.gesamt} text="Karten" />
          <Kennzahl wert={offen} text="offen" ton={offen ? 'akzent' : null} />
          <Kennzahl wert={z.neu} text="neu" />
          <Kennzahl wert={z.lernen} text="im Lernen" />
          <Kennzahl wert={z.sicher} text="sicher" ton="gut" />
          <Kennzahl wert={z.faellig} text="heute fällig" ton={z.faellig ? 'warn' : null} />
        </div>
        <div class="karten-bilanz__balken" aria-hidden="true">
          <span class="kb kb--sicher" style={{ flex: z.sicher }} />
          <span class="kb kb--lernen" style={{ flex: z.lernen }} />
          <span class="kb kb--neu" style={{ flex: z.neu }} />
        </div>
      </div>

      <div class="karten-starts">
        <Start
          icon="refresh-cw"
          titel="Fällige Karten"
          text={
            z.faellig > RUECKSTAU_AB
              ? 'Rückstau: die jüngsten Karten kommen zuerst. Mach, so viel du schaffst – neue Stichpunkte am besten erst danach.'
              : z.faellig
                ? 'Jetzt dran – das bringt am meisten.'
                : 'Heute nichts fällig. Stark!'
          }
          zahl={z.faellig}
          quelle="faellig"
          ton={z.faellig ? 'warn' : null}
          aus={!z.faellig}
        />
        <Start
          icon="sparkles"
          titel="Offene Karten"
          text={offen ? `Karten deiner abgehakten Stichpunkte, bis zu ${NEUE_JE_SITZUNG} je Runde.` : 'Hake im Lernplan einen Stichpunkt ab, dann werden seine Karten hier offen.'}
          zahl={offen}
          quelle="neu"
          aus={!offen}
        />
        <Start icon="shuffle" titel="Zufallsmix" text={`${MIX_GROESSE} Karten quer durch alles, was du schon gelernt hast.`} zahl={gesehen ? '∞' : 0} quelle="mix" aus={!gesehen} />
        <Start icon="bookmark" titel="Gemerkte" text="Karten, die du dir markiert hast." zahl={gemerkt} quelle="gemerkt" aus={!gemerkt} />
        <Start
          icon="target"
          titel="Schwierige"
          text={z.problem ? `Zuletzt nicht gewusst oder unsicher. ${z.problem} Problemkarte${z.problem === 1 ? '' : 'n'} zuerst.` : 'Zuletzt nicht gewusst oder unsicher.'}
          zahl={schwer}
          quelle="schwer"
          aus={!schwer}
        />
      </div>

      <section class="abschnitt">
        <div class="abschnitt__kopf">
          <div>
            <h2 class="abschnitt__titel">Nach Themen</h2>
            <p class="abschnitt__text">Starte einen Themenbereich oder einen einzelnen Block.</p>
          </div>
        </div>
        <div class="stapel stapel--4">
          {r.ordner.map((o) => {
            const ids = inhalt.kartenJeOrdner.get(o.id) ?? [];
            const oz = kartenZustand(stand, ids);
            return (
              <details key={o.id} class="flaeche karten-ordner">
                <summary class="karten-ordner__kopf">
                  <Icon name="chevron-right" groesse={16} class="karten-ordner__pfeil" />
                  <span class="wachsen karten-ordner__titel">{o.titel}</span>
                  <span class="gedaempft tabellenziffern">
                    {oz.sicher}/{oz.gesamt} sicher
                  </span>
                  {oz.faellig > 0 && <span class="text-warn tabellenziffern">{oz.faellig} fällig</span>}
                  <span class="karten-ordner__balken">
                    <Balken wert={oz.gesamt ? oz.sicher / oz.gesamt : 0} />
                  </span>
                  <Knopf
                    groesse="s"
                    variante="akzent"
                    icon="play"
                    disabled={!ids.length}
                    onClick={(e) => {
                      e.preventDefault();
                      start(`ordner:${o.id}`);
                    }}
                  >
                    Alle
                  </Knopf>
                </summary>
                <ul class="karten-bloecke">
                  {o.bloecke.map((b) => {
                    const bids = inhalt.kartenJeBlock.get(b.id) ?? [];
                    const bz = kartenZustand(stand, bids);
                    return (
                      <li key={b.id}>
                        <button class="karten-block" onClick={() => start(`block:${b.id}`)} disabled={!bids.length}>
                          <span class="wachsen">{b.titel}</span>
                          <BlockMarke w={inhalt.bloecke.get(b.id).wichtig} />
                          <span class="gedaempft tabellenziffern karten-block__zahl">
                            {bz.sicher}/{bz.gesamt}
                          </span>
                          {bz.faellig > 0 ? <span class="text-warn tabellenziffern karten-block__zahl">{bz.faellig} fällig</span> : <span class="karten-block__zahl" />}
                          <Icon name="play" groesse={14} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function Kennzahl({ wert, text, ton }) {
  return (
    <div class="kb-zahl">
      <div class={`kb-zahl__wert ${ton ? `text-${ton}` : ''}`}>
        <Zahl wert={wert} />
      </div>
      <div class="kb-zahl__text">{text}</div>
    </div>
  );
}

// ---------- Sitzung ----------

function Sitzung({ raum, quelle }) {
  const stand = useLernstand();
  // Der Stapel wird zu Beginn festgelegt und ändert sich während der Sitzung nur durch Wiederholungen.
  const anfang = useMemo(() => stapelFuer(quelle, raum, aktuellerStand()), []);
  const [schlange, setSchlange] = useState(anfang.ids);
  const [pos, setPos] = useState(0);
  const [offen, setOffen] = useState(false);
  const [ergebnis, setErgebnis] = useState({ 0: 0, 1: 0, 2: 0 });
  const [xpStart] = useState(stand.xp);
  const [nochmal, setNochmal] = useState(new Set());

  const id = schlange[pos];
  const karte = id ? inhalt.karten.get(id) : null;
  const fertig = pos >= schlange.length;

  const bewerte = (note) => {
    if (!offen || !karte) return;
    erfasse({ e: 'karte', id, n: note });
    setErgebnis((e) => ({ ...e, [note]: e[note] + 1 }));
    // Nicht gewusst: am Ende der Sitzung noch einmal (höchstens einmal)
    if (note === NOTE.NICHT && !nochmal.has(id)) {
      setNochmal((s) => new Set([...s, id]));
      setSchlange((s) => [...s, id]);
    }
    setOffen(false);
    setPos((p) => p + 1);
  };

  useEffect(() => {
    const taste = (e) => {
      if (e.target.closest('input, textarea, select') || e.ctrlKey || e.metaKey || e.altKey) return;
      if (fertig) return;
      if ((e.key === ' ' || e.key === 'Enter') && !offen) {
        e.preventDefault();
        setOffen(true);
      } else if (offen && ['1', '2', '3'].includes(e.key)) {
        e.preventDefault();
        bewerte(Number(e.key) - 1);
      } else if (e.key === 'm' || e.key === 'M') {
        erfasse({ e: 'merken', id, an: !aktuellerStand().gemerkt.has(id) });
      } else if (e.key === 'Escape') {
        geheZu(raum, 'karten');
      }
    };
    window.addEventListener('keydown', taste);
    return () => window.removeEventListener('keydown', taste);
  });

  if (!anfang.ids.length) {
    return (
      <div class="sitzung">
        <SitzungKopf raum={raum} titel={anfang.titel} />
        <div class="flaeche">
          <Leer icon="circle-check" titel="Keine Karten in diesem Stapel" aktion={<Knopf variante="primaer" onClick={() => geheZu(raum, 'karten')}>Zur Übersicht</Knopf>}>
            {quelle === 'faellig'
              ? 'Heute ist nichts fällig. Mach offene Karten oder übe im Zufallsmix.'
              : quelle === 'neu'
                ? 'Keine offenen Karten. Hake im Lernplan einen Stichpunkt ab, dann werden seine Karten hier offen.'
                : quelle === 'gemerkt'
                  ? 'Merke dir Karten mit dem Lesezeichen oder der Taste M.'
                  : 'Hier gibt es gerade nichts zu lernen.'}
          </Leer>
        </div>
      </div>
    );
  }

  if (fertig) {
    const summe = ergebnis[0] + ergebnis[1] + ergebnis[2];
    return (
      <div class="sitzung">
        <SitzungKopf raum={raum} titel={anfang.titel} />
        <div class="flaeche flaeche--gross sitzung-ende erscheinen">
          <div class="sitzung-ende__symbol">
            <Icon name="party-popper" groesse={28} />
          </div>
          <h2>Runde geschafft!</h2>
          <p class="gedaempft">
            {summe} Antworten · +{stand.xp - xpStart} XP
          </p>
          <div class="sitzung-ende__zahlen">
            <div class="text-gut">
              <strong>{ergebnis[2]}</strong> gewusst
            </div>
            <div class="text-warn">
              <strong>{ergebnis[1]}</strong> unsicher
            </div>
            <div class="text-fehler">
              <strong>{ergebnis[0]}</strong> nicht gewusst
            </div>
          </div>
          <div class="zeile zeile--3" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <Knopf variante="primaer" icon="refresh-cw" onClick={() => geheZu(raum, 'karten', 'sitzung', { quelle, n: Date.now() })}>
              Noch eine Runde
            </Knopf>
            <Knopf onClick={() => geheZu(raum, 'karten')}>Zur Übersicht</Knopf>
          </div>
        </div>
      </div>
    );
  }

  const sp = inhalt.sp.get(karte.sp);
  const block = inhalt.bloecke.get(sp.block);
  const ks = stand.karten.get(id);
  const gemerkt = stand.gemerkt.has(id);
  const problem = istProblemkarte(stand, id);
  const stufe = ks?.stufe ?? 0;
  // Wie in ableiten: Leiter, dazu die Prüfungsrunde, falls ein Termin eingetragen ist
  const termin = stand.termine[raum] ?? null;
  const vorschau = [0, 1, 2].map((n) => tageZwischen(stand.heute, mitPruefungsrunde(tagPlus(stand.heute, KARTEN_ABSTAND[naechsteStufe(stufe, n)]), stand.heute, termin, id)));
  // Noch nicht fällig: „Gewusst“ lässt Stufe und Termin stehen (siehe ableiten)
  if (ks?.faellig && stand.heute < ks.faellig) vorschau[NOTE.GEWUSST] = tageZwischen(stand.heute, ks.faellig);
  const tageText = (t) => (t === 0 ? 'gleich' : t === 1 ? '1 Tag' : `${t} Tage`);

  return (
    <div class="sitzung">
      <SitzungKopf raum={raum} titel={anfang.titel} pos={pos} gesamt={schlange.length} />
      <article class={`flaeche lernkarte ${offen ? 'lernkarte--offen' : ''}`} key={`${id}-${pos}`}>
        <div class="lernkarte__kopf">
          {/* Vor dem Aufdecken nur der Blocktitel – viele Stichpunkt-Titel zählen die Antworten auf */}
          <a class="lernkarte__thema" href={link(raum, 'lernen', null, { sp: sp.id })}>
            {offen ? `${block.titel} › ${sp.titel}` : block.titel}
          </a>
          {problem && (
            <span class="lernkarte__status text-fehler" data-tip={`Schon ${ks.fehl}× nicht gewusst. Ursache klären: Ist die Karte unklar, oder verwechselst du sie mit etwas?`}>
              Problemkarte
            </span>
          )}
          <span class="lernkarte__status">
            {!ks ? 'neu' : stufe >= KARTE_SICHER_AB ? 'sicher' : 'im Lernen'}
          </span>
          <SymbolKnopf icon={gemerkt ? 'bookmark-check' : 'bookmark'} label={gemerkt ? 'Nicht mehr merken (M)' : 'Merken (M)'} aria-pressed={gemerkt} onClick={() => erfasse({ e: 'merken', id, an: !gemerkt })} />
        </div>
        <div class="lernkarte__frage">
          <Rich text={karte.v} />
        </div>
        {offen ? (
          <div class="lernkarte__antwort erscheinen">
            <div class="ueberschrift-klein">Antwort</div>
            <Rich text={karte.h} />
          </div>
        ) : (
          <button class="lernkarte__aufdecken" onClick={() => setOffen(true)}>
            <Icon name="eye" groesse={16} /> Antwort zeigen <Kbd>Leertaste</Kbd>
          </button>
        )}
      </article>

      <p class="bewertung__regel">
        {offen ? (
          <>
            <strong>Gewusst:</strong> alles Verlangte, ohne Zögern („Nenne vier“ = vier richtige) · <strong>Unsicher:</strong> im Kern richtig, aber
            lückenhaft oder geraten · <strong>Nicht gewusst:</strong> falsch, leer oder weniger als die Hälfte
          </>
        ) : (
          'Erst die Antwort im Kopf festlegen – in ganzen Worten, bei Aufzählungen mitzählen –, dann aufdecken.'
        )}
      </p>

      <div class={`bewertung ${offen ? 'bewertung--bereit' : ''}`} aria-hidden={!offen}>
        <button class="bewertung__knopf bewertung__knopf--nicht" disabled={!offen} onClick={() => bewerte(0)}>
          <span class="bewertung__titel">
            <Kbd>1</Kbd> Nicht gewusst
          </span>
          <span class="bewertung__wann">kommt {tageText(vorschau[0])} wieder</span>
        </button>
        <button class="bewertung__knopf bewertung__knopf--unsicher" disabled={!offen} onClick={() => bewerte(1)}>
          <span class="bewertung__titel">
            <Kbd>2</Kbd> Unsicher
          </span>
          <span class="bewertung__wann">in {tageText(vorschau[1])}</span>
        </button>
        <button class="bewertung__knopf bewertung__knopf--gewusst" disabled={!offen} onClick={() => bewerte(2)}>
          <span class="bewertung__titel">
            <Kbd>3</Kbd> Gewusst
          </span>
          <span class="bewertung__wann">in {tageText(vorschau[2])}</span>
        </button>
      </div>
    </div>
  );
}

function SitzungKopf({ raum, titel, pos, gesamt }) {
  return (
    <div class="sitzung-kopf">
      <SymbolKnopf icon="arrow-left" label="Zurück zur Übersicht (Esc)" onClick={() => geheZu(raum, 'karten')} />
      <div class="wachsen">
        <div class="ueberschrift-klein">Lernkarten</div>
        <div class="sitzung-kopf__titel">{titel}</div>
      </div>
      {gesamt ? (
        <div class="sitzung-kopf__stand">
          <span class="tabellenziffern">
            {Math.min(pos + 1, gesamt)} / {gesamt}
          </span>
          <Balken wert={pos / gesamt} />
        </div>
      ) : null}
    </div>
  );
}
