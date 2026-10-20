// Lernsystem: der Reiter „Verstehen“ eines Themas als Unterricht in Kapiteln – für alle Trainer gleich. Links die
// Lesespalte mit dem offenen Kapitel, rechts ein mitlaufendes Inhaltsverzeichnis (schmal: Kapitel-Pillen oben).
// Ein Kapitel: Kopf (Kapitel n von m, Titel, ein Satz, „Baut auf“, Lernziele, Begriffe) → Teile, die nacheinander
// aufgehen (jede Zwischenfrage hält den Text an) → „Das hast du gelernt“ (Lernziele, Prüfungssatz, Begriffe) →
// „Aufgaben dazu üben“ / nächstes Kapitel. Verstanden heißt: durchgearbeitet – kein Test.
//
// Daten und Regeln: struktur.js und LEITFADEN.md · Bausteine für den Inhalt: bausteine.jsx · Stil: styles/lernsystem.css
// Der Stand wird je Thema gemerkt (Einstellung <schluessel> = { <kapitel>: Zahl erledigter Teile }).

import { cloneElement } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { useEinstellung } from '../../../lernstand/einstellungen.js';
import { Icon, Knopf, Balken, Rich } from '../../../ui/bausteine.jsx';
import { artenVon } from './struktur.js';
import { BegriffKontext, bedeutung, Inline } from './bausteine.jsx';

// raum: Lernraum · schluessel: Name der Einstellung für den Stand · kapitel, begriffe: Daten des Themas (struktur.js)
// inhalt: { <teil-id>: () => [Blöcke] } · params: Adresse (kapitel, teil) · onKapitel(id) · onUeben(aufgabenarten)
export function Unterricht({ raum, schluessel, kapitel, begriffe, inhalt, params, onKapitel, onUeben }) {
  const [gespeichert, setGespeichert] = useEinstellung(schluessel, {});
  const stand = typeof gespeichert === 'object' && gespeichert ? gespeichert : {};
  const erledigtIn = (k) => Math.min(stand[k.id] ?? 0, k.teile.length);
  const istFertig = (k) => erledigtIn(k) >= k.teile.length;
  const setze = (k, n) => setGespeichert({ ...stand, [k.id]: n });

  // Offenes Kapitel: aus der Adresse (?kapitel= oder über ?teil=), sonst das erste, das beim Öffnen noch nicht fertig war
  // (einmal bestimmt – sonst spränge die Seite nach dem letzten Teil gleich ins nächste Kapitel)
  const [start] = useState(() => kapitel.find((k) => !istFertig(k)) ?? kapitel[0]);
  const aktiv = kapitel.find((k) => k.id === params.kapitel) ?? kapitel.find((k) => k.teile.some((t) => t.id === params.teil)) ?? start;
  const nr = kapitel.indexOf(aktiv);
  const oben = useRef(null);
  const wechsle = (id) => {
    onKapitel(id);
    setTimeout(() => {
      if (oben.current && oben.current.getBoundingClientRect().top < 0) oben.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 30);
  };
  const erledigt = erledigtIn(aktiv);

  return (
    <div class="zu" ref={oben}>
      <Inhaltsverzeichnis kapitel={kapitel} aktiv={aktiv} erledigt={erledigt} erledigtIn={erledigtIn} istFertig={istFertig} onKapitel={wechsle} onErledigt={(n) => setze(aktiv, n)} />
      <div class="ls-lesen">
        <Kapitel
          key={aktiv.id}
          raum={raum}
          begriffe={begriffe}
          nr={nr + 1}
          anzahl={kapitel.length}
          kapitel={aktiv}
          inhalt={inhalt}
          ziel={params.teil}
          erledigt={erledigt}
          onErledigt={(n) => setze(aktiv, n)}
          vorher={aktiv.braucht.map((id) => kapitel.find((k) => k.id === id)).filter(Boolean)}
          naechstes={kapitel[nr + 1] ?? null}
          onKapitel={wechsle}
          onUeben={onUeben}
        />
      </div>
    </div>
  );
}

// Inhaltsverzeichnis: auf breiten Fenstern rechts neben dem Text und mitlaufend – alle Kapitel, beim offenen Kapitel
// seine Teile (erledigt · jetzt · kommt noch). Auf schmalen Fenstern oben eine wischbare Zeile mit den Kapiteln.
function Inhaltsverzeichnis({ kapitel, aktiv, erledigt, erledigtIn, istFertig, onKapitel, onErledigt }) {
  const teile = aktiv.teile;
  return (
    <nav class="ls-inhalt" aria-label="Kapitel">
      <span class="ls-inhalt__titel">Kapitel</span>
      <ol class="ls-inhalt__liste">
        {kapitel.map((k, i) => {
          const offen = k === aktiv;
          const fertig = istFertig(k);
          return (
            <li key={k.id} class={`ls-inhalt__kapitel ${offen ? 'ls-inhalt__kapitel--offen' : ''}`}>
              <button type="button" class="ls-inhalt__knopf" aria-current={offen ? 'page' : undefined} onClick={() => onKapitel(k.id)}>
                <span class={`ls-inhalt__nr ${fertig ? 'ls-inhalt__nr--ok' : ''}`}>{fertig ? <Icon name="check" groesse={11} strich={3} /> : i + 1}</span>
                <span class="ls-inhalt__name">{k.name}</span>
                {!offen && !fertig && erledigtIn(k) > 0 && <span class="ls-inhalt__stand mono">{erledigtIn(k)}/{k.teile.length}</span>}
              </button>
              {offen && (
                <ol class="ls-inhalt__teile">
                  {teile.map((t, j) => {
                    const zustand = j < erledigt ? 'ok' : j === erledigt ? 'jetzt' : 'spaeter';
                    return (
                      <li key={t.id} class={`ls-inhalt__teil ls-inhalt__teil--${zustand}`}>
                        <button
                          type="button"
                          disabled={zustand === 'spaeter'}
                          onClick={() => document.getElementById(`ls-teil-${t.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        >
                          {t.titel}
                        </button>
                      </li>
                    );
                  })}
                </ol>
              )}
            </li>
          );
        })}
      </ol>
      <div class="ls-inhalt__fuss">
        <Balken wert={erledigt / teile.length} label={`Fortschritt im Kapitel ${aktiv.name}`} />
        <span>
          {erledigt >= teile.length ? 'Kapitel durchgearbeitet' : `Teil ${erledigt + 1} von ${teile.length}`} ·{' '}
          {erledigt > 0 ? (
            <button type="button" class="ls-link" onClick={() => onErledigt(0)}>
              von vorn
            </button>
          ) : (
            <button type="button" class="ls-link" onClick={() => onErledigt(teile.length)}>
              alles aufdecken
            </button>
          )}
        </span>
      </div>
    </nav>
  );
}

function Kapitel({ raum, begriffe, nr, anzahl, kapitel, inhalt, ziel, erledigt, onErledigt, vorher, naechstes, onKapitel, onUeben }) {
  const teile = kapitel.teile;
  const fertig = erledigt >= teile.length;
  const aktiv = useRef(null);
  const arten = artenVon(kapitel);
  const [eingefuehrt, setEingefuehrt] = useState(() => new Set());
  const melde = (id) => setEingefuehrt((s) => (s.has(id) ? s : new Set([...s, id])));

  // Sprung aus dem Lösungsweg (?teil=hex-dezimal): der Teil und alles davor ist offen, dann hinscrollen
  useEffect(() => {
    const i = teile.findIndex((t) => t.id === ziel);
    if (i < 0) return;
    if (i >= erledigt) onErledigt(i + 1);
    setTimeout(() => document.getElementById(`ls-teil-${ziel}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }, [ziel]);

  const weiter = (i) => {
    onErledigt(i + 1);
    setTimeout(() => aktiv.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  };

  return (
    <article class="ls-kapitel">
      <header class="ls-kopf">
        <span class="ls-ueber">
          Kapitel {nr} von {anzahl}
        </span>
        <h2 class="ls-kopf__titel">{kapitel.name}</h2>
        <p class="ls-kopf__text">{kapitel.worum}</p>
        {vorher.length > 0 && <Vorwissen vorher={vorher} onKapitel={onKapitel} />}
        {kapitel.lernziele && (
          <div class="ls-ziele">
            <span class="ls-ueber">Am Ende kannst du …</span>
            <ul>
              {kapitel.lernziele.map((z) => (
                <li key={z}>
                  <Icon name={fertig ? 'circle-check' : 'circle'} groesse={15} class={fertig ? 'ls-ziele--ok' : ''} />
                  <span>{z}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {kapitel.begriffe && (
          <div class="ls-chips" aria-label="Fachbegriffe dieses Kapitels">
            {kapitel.begriffe.map((id) => {
              const da = fertig || eingefuehrt.has(id);
              return (
                <button
                  key={id}
                  type="button"
                  class={`ls-chip ${da ? 'ls-chip--da' : ''}`}
                  disabled={!da}
                  title={da ? bedeutung(begriffe, id) : 'Kommt in diesem Kapitel noch'}
                  onClick={() => document.getElementById(`ls-begriff-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                >
                  {begriffe[id]?.wort ?? id}
                </button>
              );
            })}
          </div>
        )}
      </header>

      <BegriffKontext.Provider value={{ raum, melde, begriffe }}>
        {teile.slice(0, erledigt + 1).map((t, i) =>
          inhalt[t.id] ? (
            <div key={t.id} ref={i === erledigt ? aktiv : null}>
              <Teil nr={i + 1} anzahl={teile.length} teil={t} bloecke={inhalt[t.id]()} erledigt={i < erledigt} naechster={teile[i + 1]} onWeiter={() => weiter(i)} />
            </div>
          ) : null,
        )}
      </BegriffKontext.Provider>

      {fertig && (
        <section class="ls-gelernt erscheinen" ref={aktiv} aria-label="Das hast du gelernt">
          <h3 class="ls-gelernt__titel">
            <Icon name="party-popper" groesse={20} /> {kapitel.lernziele ? 'Das hast du gelernt' : `Kapitel ${kapitel.name} geschafft`}
          </h3>
          {kapitel.lernziele ? (
            <ul class="ls-gelernt__ziele">
              {kapitel.lernziele.map((z) => (
                <li key={z}>
                  <Icon name="circle-check" groesse={16} /> <span>Du kannst {z}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p class="ls-gelernt__text">
              {arten.length ? 'Verstanden ist der erste Schritt – sicher wird es durch Üben. Die Aufgaben dazu sind schon ausgewählt.' : naechstes ? `Weiter geht es mit ${naechstes.name}.` : 'Jetzt heißt es üben – am besten alle Aufgaben gemischt.'}
            </p>
          )}
          {kapitel.pruefung && (
            <div class="ls-kasten ls-kasten--pruefung">
              <span class="ls-kasten__titel">
                <Icon name="graduation-cap" groesse={15} /> So sagst du es in der Prüfung
              </span>
              {kapitel.pruefung.map((satz) => (
                <Rich key={satz} text={satz} />
              ))}
            </div>
          )}
          {kapitel.begriffe && (
            <div class="ls-begriffsliste">
              <span class="ls-ueber">Begriffe dieses Kapitels</span>
              <dl>
                {kapitel.begriffe.map((id) => (
                  <div key={id}>
                    <dt>{begriffe[id]?.wort}</dt>
                    <dd>
                      <Inline text={bedeutung(begriffe, id)} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          <div class="ls-gelernt__knoepfe">
            {(arten.length > 0 || !naechstes) && (
              <Knopf variante="primaer" icon="target" onClick={() => onUeben(arten)}>
                {arten.length ? 'Aufgaben dazu üben' : 'Alle Aufgaben üben'}
              </Knopf>
            )}
            {naechstes && (
              <Knopf variante={arten.length ? 'zweit' : 'primaer'} iconRechts="arrow-right" onClick={() => onKapitel(naechstes.id)}>
                Kapitel {naechstes.name}
              </Knopf>
            )}
          </div>
        </section>
      )}
    </article>
  );
}

// Was das Kapitel voraussetzt: eine leise Zeile „Baut auf: Binär · Zweierpotenzen“. Antippen zeigt die Kurzfassung
// des Kapitels in einer Blase, mit Link zum ausführlichen Kapitel.
function Vorwissen({ vorher, onKapitel }) {
  const [offen, setOffen] = useState(null);
  const k = vorher.find((x) => x.id === offen);
  return (
    <div class="ls-baut">
      <span class="ls-baut__titel">Baut auf</span>
      {vorher.map((x, i) => (
        <span key={x.id}>
          {i > 0 && <span class="ls-baut__punkt"> · </span>}
          <button type="button" class="ls-baut__kapitel" aria-expanded={offen === x.id} onClick={() => setOffen(offen === x.id ? null : x.id)}>
            {x.name}
          </button>
        </span>
      ))}
      {k && (
        <div class="ls-baut__blase erscheinen" role="note">
          <Rich text={k.kurz} />
          <button type="button" class="ls-link" onClick={() => onKapitel(k.id)}>
            Kapitel {k.name} ausführlich →
          </button>
        </div>
      )}
    </div>
  );
}

// Ein Teil: Blöcke bis zur ersten offenen Zwischenfrage, darunter „Weiter“, wenn alle Fragen beantwortet sind
function Teil({ nr, anzahl, teil, bloecke, erledigt, naechster, onWeiter }) {
  const [geloest, setGeloest] = useState(0);
  const neu = useRef(null);
  useEffect(() => {
    if (geloest && !erledigt) setTimeout(() => neu.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
  }, [geloest]);

  const sichtbar = [];
  let frage = 0;
  let alleGeloest = true;
  let nachFrage = null; // Nummer der Frage direkt vor dem nächsten Block
  for (const [i, b] of bloecke.entries()) {
    if (!b?.type?.zwischenfrage) {
      // Der erste Block nach der zuletzt beantworteten Frage wird ins Bild gescrollt
      const istNeu = !erledigt && geloest > 0 && nachFrage === geloest - 1;
      sichtbar.push(
        <div key={i} class="ls-block" ref={istNeu ? neu : null}>
          {b}
        </div>,
      );
      nachFrage = null;
      continue;
    }
    const nrFrage = frage++;
    const beantwortet = erledigt || nrFrage < geloest;
    sichtbar.push(
      <div key={i} class="ls-block">
        {cloneElement(b, { beantwortet, onGeloest: () => setGeloest((g) => Math.max(g, nrFrage + 1)) })}
      </div>,
    );
    nachFrage = nrFrage;
    if (!beantwortet) {
      alleGeloest = false;
      break;
    }
  }

  return (
    <section class="ls-teil erscheinen" id={`ls-teil-${teil.id}`} aria-labelledby={`ls-titel-${teil.id}`}>
      <header class="ls-teil__kopf">
        <span class="ls-ueber">
          Teil {nr} von {anzahl}
          {erledigt && <Icon name="circle-check" groesse={13} class="ls-teil__ok" />}
        </span>
        <h3 class="ls-teil__titel" id={`ls-titel-${teil.id}`}>
          {teil.titel}
        </h3>
      </header>
      <div class="ls-teil__inhalt">{sichtbar}</div>
      {!erledigt && alleGeloest && (
        <div class="ls-teil__weiter erscheinen">
          {naechster ? (
            <Knopf variante="primaer" iconRechts="arrow-down" onClick={onWeiter}>
              Weiter: {naechster.titel}
            </Knopf>
          ) : (
            <Knopf variante="primaer" icon="check" onClick={onWeiter}>
              Kapitel abschließen
            </Knopf>
          )}
        </div>
      )}
    </section>
  );
}
