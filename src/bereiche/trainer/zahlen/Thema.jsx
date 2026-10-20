// Themenseite: drei Reiter – Verstehen (Unterricht in Kapiteln, lernsystem/Unterricht.jsx), Üben (Aufgaben mit Wertung, ohne
// Werkzeug) und Visualisieren (Labor oder Werkzeug zum Ausprobieren). Der Reiter steht in der Adresse (?ansicht=);
// ohne Angabe beginnt ein Thema mit Verstehen, bis die erste Aufgabe gelöst ist. Alle drei Reiter bleiben eingehängt,
// damit eine angefangene Aufgabe beim Nachschlagen nicht verloren geht.

import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { inhalt } from '../../../daten/inhalt.js';
import { link, geheZu } from '../../../router.js';
import { useEinstellung } from '../../../lernstand/einstellungen.js';
import { Icon, Rich, Marke } from '../../../ui/bausteine.jsx';
import { ThemenLinks, Spickzettel } from '../rahmen/Uebung.jsx';
import { ARTEN } from './aufgaben/index.js';
import { Unterricht } from '../lernsystem/Unterricht.jsx';
import { UNTERRICHT, BEGRIFFE, teilZurArt } from './unterricht/index.js';
import { INHALT } from './unterricht/inhalt.js';
import { ZahlenLabor } from './Labor.jsx';
import { Training } from './Training.jsx';
import { Werkzeug } from './Werkzeug.jsx';

const ANSICHTEN = [
  { id: 'verstehen', name: 'Verstehen', icon: 'book-open' },
  { id: 'ueben', name: 'Üben', icon: 'target' },
  { id: 'visualisieren', name: 'Visualisieren', icon: 'eye' },
];

export function Thema({ raum, trainer, thema, stand, params }) {
  const kapitel = UNTERRICHT[thema.id];
  const [standard] = useState(() => (stand?.ok > 0 ? 'ueben' : 'verstehen'));
  const ansicht = ANSICHTEN.some((a) => a.id === params.ansicht) ? params.ansicht : standard;
  const waehle = (id, weitere = {}) => geheZu(raum, 'trainer', trainer.id, { modus: thema.id, ansicht: id, ...weitere }, { ersetzen: true });

  // Aufgabenarten (leer = alle), gemerkt je Thema
  const arten = ARTEN[thema.id];
  const [gewaehlt, setGewaehlt] = useEinstellung(`zahlen.arten.${thema.id}`, []);
  const gueltig = gewaehlt.filter((id) => arten.some((a) => a.id === id));
  const artenSchluessel = gueltig.join('|');
  const quelle = useMemo(() => () => ({ thema: thema.id, sp: thema.sp, arten: gueltig }), [thema.id, thema.sp, artenSchluessel]);

  // Lösungsweg beim Üben → der Teil des Unterrichts, der diese Aufgabenart erklärt
  const erklaerung = kapitel
    ? (aufgabe) => {
        const ziel = teilZurArt(thema.id, aufgabe.art);
        return ziel && { name: `${ziel.kapitel.name} – ${ziel.teil.titel}`, oeffne: () => waehle('verstehen', { kapitel: ziel.kapitel.id, teil: ziel.teil.id }) };
      }
    : null;
  // Kapitelende → Üben mit genau den Aufgabenarten des Kapitels (leer = alle)
  const uebeArten = (auswahl) => {
    setGewaehlt(auswahl);
    waehle('ueben');
  };

  // Beim Wechsel zu „Üben“ gleich ins Eingabefeld der Aufgabe
  const ueben = useRef(null);
  useEffect(() => {
    if (ansicht === 'ueben') ueben.current?.querySelector('.zt-aufgabe input, .zt-aufgabe select, .zt-aufgabe .zt-segment')?.focus({ preventScroll: true });
  }, [ansicht]);

  return (
    <div class="zt">
      <header class="zt-kopf">
        <a class="zt-zurueck" href={link(raum, 'trainer', trainer.id)}>
          <Icon name="arrow-left" groesse={14} /> Alle Themen
        </a>
        <div class="zt-kopf__zeile">
          <h1 class="zt-kopf__titel">
            <span class="modul__symbol">
              <Icon name={thema.icon} groesse={18} />
            </span>
            {thema.name}
          </h1>
          {stand?.n > 0 && (
            <span class="zt-kopf__stand">
              zuletzt {stand.zuletztOk} von {stand.letzte.length} richtig
              {stand.sicher && (
                <Marke ton="gut" icon="check">
                  sicher
                </Marke>
              )}
            </span>
          )}
        </div>
      </header>

      <div class="zt-ansichten" role="tablist" aria-label="Ansicht">
        {ANSICHTEN.map((a) => (
          <button key={a.id} type="button" role="tab" id={`zt-reiter-${a.id}`} aria-selected={ansicht === a.id} aria-controls={`zt-ansicht-${a.id}`} class="zt-ansichten__knopf" onClick={() => waehle(a.id)}>
            <span class="zt-ansichten__symbol">
              <Icon name={a.icon} groesse={17} />
            </span>
            {a.name}
          </button>
        ))}
      </div>

      <section class="zt-ansicht" id="zt-ansicht-verstehen" role="tabpanel" aria-labelledby="zt-reiter-verstehen" hidden={ansicht !== 'verstehen'}>
        {kapitel ? (
          <Unterricht
            raum={raum}
            schluessel={`zahlen.unterricht.${thema.id}`}
            kapitel={kapitel}
            begriffe={BEGRIFFE[thema.id]}
            inhalt={INHALT[thema.id]}
            params={params} onKapitel={(id) => waehle('verstehen', { kapitel: id })} onUeben={uebeArten} />
        ) : (
          <ErklaerungsBloecke thema={thema} onUeben={() => waehle('ueben')} />
        )}
      </section>

      <section class="zt-ansicht" id="zt-ansicht-ueben" role="tabpanel" aria-labelledby="zt-reiter-ueben" hidden={ansicht !== 'ueben'} ref={ueben}>
        <ArtenWahl arten={arten} gewaehlt={gueltig} onWahl={setGewaehlt} />
        <Training quelle={quelle} erklaerung={erklaerung} />
        <Spickzettel text={thema.spickzettel} />
      </section>

      <section class="zt-ansicht" id="zt-ansicht-visualisieren" role="tabpanel" aria-labelledby="zt-reiter-visualisieren" hidden={ansicht !== 'visualisieren'}>
        {thema.labor ? <ZahlenLabor /> : <Werkzeug definition={thema.werkzeug} />}
      </section>

      <ThemenLinks raum={raum} modus={{ sp: thema.spIds }} />
    </div>
  );
}

// ---------- Verstehen ----------

// Themen ohne Unterricht: die Erklärung in Blöcken, dazu „Das übst du hier“ im Wortlaut der Inhaltsdatei
function ErklaerungsBloecke({ thema, onUeben }) {
  const koennen = thema.spIds.flatMap((id) => inhalt.sp.get(id)?.koennen ?? []).filter(([id]) => thema.koennen.includes(id));
  // Im selben Lesestil wie der Unterricht (lernsystem.css), bis das Thema einen eigenen Unterricht bekommt
  return (
    <div class="ls-lesen ls-erklaerung">
      <header class="ls-kopf">
        <span class="ls-ueber">Kurz erklärt</span>
        <h2 class="ls-kopf__titel">{thema.name}</h2>
        <p class="ls-kopf__text">{thema.kurz}</p>
      </header>
      {thema.erklaerung.map((block) => (
        <section key={block.titel} class="ls-erklaerung__block">
          <h3 class="ls-teil__titel">{block.titel}</h3>
          <Rich text={block.text} class="ls-text" />
        </section>
      ))}
      {koennen.length > 0 && (
        <div class="ls-kasten ls-kasten--merke">
          <span class="ls-kasten__titel">
            <Icon name="target" groesse={15} /> Das übst du hier
          </span>
          <Rich text={koennen.map(([, text]) => `- ${text}`).join('\n')} class="ls-kasten__text" />
        </div>
      )}
      <div class="ls-teil__weiter">
        <button type="button" class="knopf knopf--primaer knopf--m" onClick={onUeben}>
          Zum Üben <Icon name="arrow-right" groesse={16} />
        </button>
      </div>
    </div>
  );
}

// ---------- Üben ----------

function ArtenWahl({ arten, gewaehlt, onWahl }) {
  if (arten.length < 2) return null;
  const umschalten = (id) => onWahl(gewaehlt.includes(id) ? gewaehlt.filter((x) => x !== id) : [...gewaehlt, id]);
  return (
    <div class="zt-arten" role="group" aria-label="Aufgabenarten">
      <span class="zt-arten__titel">Aufgaben:</span>
      <button type="button" class="zt-art" aria-pressed={gewaehlt.length === 0} onClick={() => onWahl([])}>
        Alle gemischt
      </button>
      {arten.map((a) => (
        <button key={a.id} type="button" class="zt-art" aria-pressed={gewaehlt.includes(a.id)} onClick={() => umschalten(a.id)}>
          {a.name}
        </button>
      ))}
    </div>
  );
}
