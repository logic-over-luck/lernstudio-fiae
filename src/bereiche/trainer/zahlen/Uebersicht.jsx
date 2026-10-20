// Übersicht des Zahlen-Trainers: je Thema eine Kachel mit Stand (Verstehen: Kapitel durchgearbeitet · Üben), dazu das
// gemischte Training.

import { inhalt } from '../../../daten/inhalt.js';
import { link } from '../../../router.js';
import { einstellung } from '../../../lernstand/einstellungen.js';
import { Icon, Marke, Balken } from '../../../ui/bausteine.jsx';
import { StandZeile } from './bausteine.jsx';
import { UNTERRICHT } from './unterricht/index.js';
import { GEMISCHT, MISCH_LAENGE } from './Mischtraining.jsx';

export function Uebersicht({ raum, trainer, themen, stand }) {
  const r = inhalt.raeume.get(raum);
  const ziel = (modus) => link(raum, 'trainer', trainer.id, { modus });
  return (
    <div class="zt">
      <header class="seitenkopf">
        <div>
          <div class="ueberschrift-klein ueberschrift-klein--akzent">{r.name} · Trainer</div>
          <h1 class="seitenkopf__titel">{trainer.name}</h1>
          <p class="seitenkopf__text">Such dir ein Thema aus. Jedes Thema kannst du verstehen, üben und ausprobieren.</p>
        </div>
      </header>
      <div class="zt-kacheln">
        {themen.map((t) => (
          <a key={t.id} class="flaeche flaeche--klickbar zt-kachel" href={ziel(t.id)}>
            <span class="zt-kachel__kopf">
              <span class="modul__symbol">
                <Icon name={t.icon} groesse={18} />
              </span>
              {stand.get(t.id)?.sicher && (
                <Marke ton="gut" icon="check">
                  sicher
                </Marke>
              )}
            </span>
            <span class="zt-kachel__titel">{t.name}</span>
            <span class="zt-kachel__text">{t.kurz}</span>
            <VerstehenZeile thema={t} />
            <StandZeile stand={stand.get(t.id)} />
          </a>
        ))}
        {themen.length > 1 && (
          <a class="flaeche flaeche--klickbar flaeche--akzent zt-kachel zt-kachel--misch" href={ziel(GEMISCHT)}>
            <span class="modul__symbol">
              <Icon name="shuffle" groesse={18} />
            </span>
            <span class="zt-kachel__misch-text">
              <span class="zt-kachel__titel">Gemischtes Training</span>
              <span class="zt-kachel__text">
                {MISCH_LAENGE} Aufgaben quer durch {themen.length === 2 ? 'beide' : `alle ${themen.length}`} Themen, ohne Vorwarnung – wie in der Prüfung. Am Ende siehst du, wo es hakt.
              </span>
            </span>
            <Icon name="arrow-right" groesse={18} class="zt-kachel__pfeil" />
          </a>
        )}
      </div>
    </div>
  );
}

// „Verstehen: 2 von 6 Kapiteln“ für Themen mit Unterricht (Stand aus der Einstellung des Unterrichts)
function VerstehenZeile({ thema }) {
  const kapitel = UNTERRICHT[thema.id];
  if (!kapitel) return null;
  const stand = einstellung(`zahlen.unterricht.${thema.id}`, {}) ?? {};
  const fertig = kapitel.filter((k) => (stand[k.id] ?? 0) >= k.teile.length).length;
  return (
    <div class="zt-stand">
      <Balken wert={fertig / kapitel.length} label="Kapitel durchgearbeitet" />
      <div class="zt-stand__text">
        Verstehen: <strong>{fertig}</strong> von {kapitel.length} Kapiteln
      </div>
    </div>
  );
}
