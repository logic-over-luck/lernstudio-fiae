// Wichtigkeit: Legende der Stufen, Stichpunkte je Stufe im Raum und wie gerechnet wird.
// Liest Stufen, Grenzen und Rechenweg aus src/daten/wichtigkeit.js, damit Text und Verhalten übereinstimmen.

import { useState } from 'preact/hooks';
import { inhalt } from '../../daten/inhalt.js';
import { useLernstand } from '../../lernstand/store.js';
import { STUFEN, KLASSEN, LAMBDA, terminName, wichtigkeitText, zahl } from '../../daten/wichtigkeit.js';
import { link } from '../../router.js';
import { Icon, StufenMarke, Aufklapp } from '../../ui/bausteine.jsx';


// Grenze einer Stufe in Prüfungen, für diesen Raum
function grenzeText(nr, g) {
  const p = (x) => `${x} ${x === 1 ? 'Prüfung' : 'Prüfungen'}`;
  if (nr === 1) return `ab ${p(g.top)}`;
  if (nr === 2) return g.top - 1 === g.wichtig ? p(g.wichtig) : `${g.wichtig}–${p(g.top - 1)}`;
  if (nr === 3) return g.wichtig - 1 === 1 ? p(1) : `1–${p(g.wichtig - 1)}`;
  return p(0);
}

export function Wichtigkeit({ raum }) {
  const r0 = inhalt.raeume.get(raum);
  if (r0.wichtig.system === 'klassen') return <WichtigkeitKlassen raum={raum} />;
  return <WichtigkeitPruefungen raum={raum} />;
}

function Abschnitt({ icon, titel, children }) {
  return (
    <section class="flaeche flaeche--gross hilfe-abschnitt">
      <h2 class="hilfe-abschnitt__titel">
        <span class="hilfe-abschnitt__symbol">
          <Icon name={icon} groesse={18} />
        </span>
        {titel}
      </h2>
      <div class="hilfe-abschnitt__text">{children}</div>
    </section>
  );
}

// Lernreihenfolge (AP1): drei Stufen in empfohlener Reihenfolge, warum A zuerst, ehrliche Obergrenzen je Prüfung
const note = (x) => (x >= 92 ? 1 : x >= 81 ? 2 : x >= 67 ? 3 : x >= 50 ? 4 : x >= 30 ? 5 : 6);

function Wert({ x }) {
  return (
    <span class="tabellenziffern">
      {zahl(x)}
      <span class="gedaempft"> ({note(x)})</span>
    </span>
  );
}

function WichtigkeitKlassen({ raum }) {
  const stand = useLernstand();
  const r = inhalt.raeume.get(raum);
  const w = r.wichtig;
  const sps = r.bloeckeListe.flatMap((b) => b.sp.map((id) => inhalt.sp.get(id)).filter(Boolean));
  const jeKlasse = KLASSEN.map((k) => sps.filter((x) => x.wichtig.stufe === k.nr).sort((a, b) => a.wichtig.rang - b.wichtig.rang));
  const [offen, setOffen] = useState(1);
  const tabelle = r.lernreihenfolge?.tabelle ?? [];
  const aufwand = (liste) => liste.reduce((a, x) => a + x.koennen.length, 0);
  const anteilA = Math.round((aufwand(jeKlasse[0]) / Math.max(1, aufwand(sps))) * 100);

  return (
    <div class="wichtigkeit">
      <header class="seitenkopf">
        <div>
          <div class="ueberschrift-klein ueberschrift-klein--akzent">Nachschlagen</div>
          <h1 class="seitenkopf__titel">Lernreihenfolge</h1>
          <p class="seitenkopf__text">
            In welcher Reihenfolge du {r.name} lernst: erst A, dann B, dann C. Die Reihenfolge sagt, was zuerst kommt – nicht, was du weglassen kannst.{' '}
            <strong>Für eine gute Note brauchst du alle drei.</strong>
          </p>
        </div>
      </header>

      <section class="flaeche flaeche--gross wichtigkeit__stufen" aria-label="Die drei Stufen">
        {KLASSEN.map((k, i) => (
          <div key={k.nr} class="wichtigkeit__stufe">
            <button class="wichtigkeit__kopf" aria-expanded={offen === k.nr} onClick={() => setOffen(offen === k.nr ? null : k.nr)}>
              <span class="wichtigkeit__etikett">
                <StufenMarke nr={k.nr} system="klassen" />
              </span>
              <span class="wichtigkeit__grenze mono">{i === 0 ? 'zuerst' : i === 1 ? 'danach' : 'zum Schluss'}</span>
              <span class="wichtigkeit__text">
                <strong>{k.name.split(' · ')[1]}</strong> – {k.text}
              </span>
              <span class="wichtigkeit__zahl tabellenziffern">{jeKlasse[i].length}</span>
              <Icon name="chevron-down" groesse={16} class="wichtigkeit__pfeil" />
            </button>
            <Aufklapp offen={offen === k.nr}>
              <ol class="wichtigkeit__liste">
                {jeKlasse[i].map((x) => (
                  <li key={x.id}>
                    <a class={`wichtigkeit__sp ${stand.spErledigt.has(x.id) ? 'wichtigkeit__sp--erledigt' : ''}`} href={link(raum, 'lernen', null, { sp: x.id })}>
                      <span class="wichtigkeit__sp-titel">
                        {x.titel}
                        {x.wichtig.name !== k.name && <span class="gedaempft"> · Grundlage</span>}
                      </span>
                      <span class="gedaempft wichtigkeit__sp-zahl">{x.wichtig.x ? `${x.wichtig.x} von ${x.wichtig.n}${x.wichtig.punkte ? ` · ${zahl(x.wichtig.punkte)} P.` : ''}` : '–'}</span>
                      <Icon name="arrow-right" groesse={13} />
                    </a>
                  </li>
                ))}
              </ol>
            </Aufklapp>
          </div>
        ))}
      </section>

      <div class="hilfe-raster">
        <Abschnitt icon="calculator" titel="Warum A zuerst">
          <p>
            In A steht alles, was du in der Prüfung <strong>rechnest oder zeichnest</strong> – Netzplan, Kalkulation, Nutzwertanalyse, Datenmengen, Subnetting,
            UML, ER-Modell, Schreibtischtest. Das sind etwa {anteilA} % des Stoffs, brachten aber in fast jeder Prüfung ein Drittel bis die Hälfte der
            Punkte. Und es braucht Übung – je früher du anfängst, desto öfter wiederholst du.
          </p>
          <p>
            Dazu kommen die <strong>Grundlagen</strong>, ohne die A nicht geht (z. B. Pseudocode vor dem Schreibtischtest, IPv4-Konfiguration vor dem
            Subnetting), und Englisch: Englische Texte und Werte aus dem Material lesen bringen in jeder Prüfung ein paar Punkte – das übst du laufend mit.
          </p>
          <p>
            Welches <strong>Wissensthema</strong> in der nächsten Prüfung drankommt, lässt sich kaum vorhersagen – das haben wir an allen Prüfungen seit
            2023 nachgeprüft. Deshalb gibt es nur diese grobe Reihenfolge und keine Prozente.
          </p>
        </Abschnitt>

        <Abschnitt icon="list-checks" titel="Was du mit A, B und C geschafft hättest">
          <p>
            Obergrenze je Prüfung nach neuem Katalog – <strong>wenn alles Gelernte voll sitzt</strong>; in Klammern die Note. In echt rechne lieber mit etwa
            einer Note schlechter.
          </p>
          <div class="ls-tabelle-huelle">
          <table class="ls-tabelle">
            <thead>
              <tr>
                <th>Prüfung</th>
                <th>nur A</th>
                <th>A + B</th>
                <th>A + B + C</th>
                <th>+ Englisch, Material</th>
              </tr>
            </thead>
            <tbody>
              {tabelle.map((z) => (
                <tr key={z.pruefung}>
                  <td>
                    {terminName(z.pruefung)}
                    {z.erfasst < 100 && <span class="gedaempft">*</span>}
                  </td>
                  <td>
                    <Wert x={z.a} />
                  </td>
                  <td>
                    <Wert x={z.ab} />
                  </td>
                  <td>
                    <Wert x={z.abc} />
                  </td>
                  <td>
                    <Wert x={z.mitTransfer} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <p class="gedaempft">
            A nach heutiger Einteilung; B und C jeweils nur aus den Prüfungen davor – so, wie du es damals gewusst hättest.
            {tabelle.some((z) => z.erfasst < 100) &&
              ` * nicht alle Aufgaben erfasst (${tabelle
                .filter((z) => z.erfasst < 100)
                .map((z) => `${terminName(z.pruefung)}: ${zahl(z.erfasst)} von 100 Punkten`)
                .join(', ')}).`}{' '}
            Note 1 ab 92 Punkten.
          </p>
        </Abschnitt>

        <Abschnitt icon="layers" titel="Reihenfolge im Einzelnen">
          <p>
            In A und B steht zuerst, was bisher <strong>pro Lernaufwand</strong> die meisten Punkte brachte – eine grobe Sortierung. Voraussetzungen stehen
            direkt vor dem Thema, das sie braucht. C folgt dem Lernplan.
          </p>
          <p>
            „Dein nächster Schritt“ geht blockweise vor: Ein angefangener Block wird zuerst fertig gelernt, danach kommt der Block, dessen
            bester offener Stichpunkt hier am weitesten oben steht. Der Lernplan selbst bleibt nach Themenbereichen sortiert.
          </p>
        </Abschnitt>

        <Abschnitt icon="info" titel="Woher die Zahlen kommen">
          <p>
            Grundlage sind die Teilaufgaben aus {w.n} ausgewerteten Prüfungen ({w.termine.length ? `${terminName(w.termine[0])} bis ${terminName(w.termine.at(-1))}` : '–'}) mit ihren
            Punkten. Aufgaben, die laut aktuellem Katalog nicht mehr zu {r.name} gehören (z. B. SQL, RAID, Struktogramme), zählen nicht. Betrifft eine Aufgabe
            mehrere Themen, werden ihre Punkte geteilt.
          </p>
          <p>Kommt eine neue Prüfung dazu, wird alles neu gerechnet.</p>
        </Abschnitt>
      </div>
    </div>
  );
}

// Prüfungsteile ohne Klassen: Stufen nach der Zahl der Prüfungen
function WichtigkeitPruefungen({ raum }) {
  const stand = useLernstand();
  const r = inhalt.raeume.get(raum);
  const w = r.wichtig;
  const sps = r.bloeckeListe.flatMap((b) => b.sp.map((id) => inhalt.sp.get(id)).filter(Boolean));
  const jeStufe = STUFEN.map((s) => sps.filter((x) => x.wichtig.stufe === s.nr).sort((a, b) => b.wichtig.quote - a.wichtig.quote || a.titel.localeCompare(b.titel, 'de')));
  const [offen, setOffen] = useState(null);

  return (
    <div class="wichtigkeit">
      <header class="seitenkopf">
        <div>
          <div class="ueberschrift-klein ueberschrift-klein--akzent">Nachschlagen</div>
          <h1 class="seitenkopf__titel">Wichtigkeit</h1>
          <p class="seitenkopf__text">
            Wie wichtig ein Stichpunkt nach den ausgewerteten IHK-Prüfungen von {r.name} ist. Die Stufe sagt, was bisher geprüft wurde – nicht, was sicher kommt. Alles im Lernplan kann drankommen.
          </p>
          {r.merksatz && <p class="seitenkopf__text"><strong>{r.merksatz}</strong></p>}
        </div>
      </header>

      <section class="flaeche flaeche--gross wichtigkeit__stufen" aria-label="Die vier Stufen">
        {STUFEN.map((s, i) => (
          <div key={s.nr} class="wichtigkeit__stufe">
            <button class="wichtigkeit__kopf" aria-expanded={offen === s.nr} onClick={() => setOffen(offen === s.nr ? null : s.nr)}>
              <span class="wichtigkeit__etikett">
                <StufenMarke nr={s.nr} />
              </span>
              <span class="wichtigkeit__grenze mono">{grenzeText(s.nr, w.grenzen)}</span>
              <span class="wichtigkeit__text">{s.text}</span>
              <span class="wichtigkeit__zahl tabellenziffern">{jeStufe[i].length}</span>
              <Icon name="chevron-down" groesse={16} class="wichtigkeit__pfeil" />
            </button>
            <Aufklapp offen={offen === s.nr}>
              {jeStufe[i].length ? (
                <ul class="wichtigkeit__liste">
                  {jeStufe[i].map((x) => (
                    <li key={x.id}>
                      <a class={`wichtigkeit__sp ${stand.spErledigt.has(x.id) ? 'wichtigkeit__sp--erledigt' : ''}`} href={link(raum, 'lernen', null, { sp: x.id })}>
                        <span class="wichtigkeit__sp-titel">{x.titel}</span>
                        <span class="gedaempft wichtigkeit__sp-zahl">{x.wichtig.x ? `${x.wichtig.x} von ${x.wichtig.n}` : '–'}</span>
                        <Icon name="arrow-right" groesse={13} />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p class="gedaempft wichtigkeit__leer">In {r.name} liegt kein Stichpunkt in dieser Stufe.</p>
              )}
            </Aufklapp>
          </div>
        ))}
      </section>

      <div class="hilfe-raster">
        <section class="flaeche flaeche--gross hilfe-abschnitt">
          <h2 class="hilfe-abschnitt__titel">
            <span class="hilfe-abschnitt__symbol">
              <Icon name="calculator" groesse={18} />
            </span>
            So wird gerechnet
          </h2>
          <div class="hilfe-abschnitt__text">
            <p>
              Grundlage sind <strong>{w.n} ausgewertete Prüfungen</strong> ({w.termine.length ? `${terminName(w.termine[0])} bis ${terminName(w.termine.at(-1))}` : '–'}), davon {w.aktuell} nach dem
              aktuellen Prüfungskatalog. Jede Prüfung zählt je Stichpunkt höchstens einmal, und alle zählen gleich.
              {w.nurStichwort.length > 0 && (
                <>
                  {' '}
                  Von {w.nurStichwort.map(terminName).join(', ')} gibt es keine Abschrift; dort zählen die Themen-Stichworte des IT-Berufe-Podcasts.
                </>
              )}
            </p>
            <p>
              <strong>Top-Thema</strong> ist das oberste Viertel der Stichpunkte in {r.name}, <strong>Wichtig</strong> reicht bis zur oberen Hälfte. Die Grenzen hängen vom
              Prüfungsteil ab, weil manche Teile dichter geprüft werden – in PB2 kommt SQL fast in jeder Prüfung dran, in AP1 ist ein Stichpunkt im Schnitt in 2 von 11
              Prüfungen. Innerhalb von {r.name} gilt: gleiche Zahl, gleiche Stufe.
            </p>
            <p>
              Welche Aufgabe welchen Stichpunkt prüft, ist doppelt geprüft: Zwei unabhängige Zuordnungen jeder Teilaufgabe, und wo sie sich uneinig waren, hat ein
              Schiedsspruch an der Musterlösung entschieden. Gezählt wird ein Stichpunkt nur, wenn man seinen Stoff zum Lösen wirklich braucht. Als Gegenprobe
              dienten die Themenlisten des IT-Berufe-Podcasts.
            </p>
            <p>
              <strong>„auch in 4 von 10 PB2“</strong>: Der Stoff wohnt in diesem Prüfungsteil, wurde aber auch in Prüfungen des anderen Teils abgefragt. Das steht als
              Hinweis dabei und ändert die Stufe nicht.
            </p>
            <p>
              Die Stufe ist Orientierung, keine Vorhersage. Nachgeprüft: In {r.name} kommen Themen, die schon dran waren, beim nächsten Mal deutlich öfter wieder
              als neue – deshalb taugt die Häufigkeit hier als Reihenfolge.
            </p>
          </div>
        </section>

        <section class="flaeche flaeche--gross hilfe-abschnitt">
          <h2 class="hilfe-abschnitt__titel">
            <span class="hilfe-abschnitt__symbol">
              <Icon name="list-checks" groesse={18} />
            </span>
            Block und Themenbereich
          </h2>
          <div class="hilfe-abschnitt__text">
            <p>
              <strong>Block:</strong> zeigt „Top-Thema“ oder „Wichtig“, wenn ein solcher Stichpunkt darin steckt – sonst nichts. Es gibt keine
              Durchschnitts-Stufe; welche Stichpunkte es sind, siehst du beim Aufklappen.
            </p>
            <p>
              <strong>Themenbereich:</strong> welcher Anteil der Prüfungsaufgaben ihn betrifft, z. B. „19 % der Prüfungsaufgaben“.
            </p>
          </div>
        </section>

        <section class="flaeche flaeche--gross hilfe-abschnitt">
          <h2 class="hilfe-abschnitt__titel">
            <span class="hilfe-abschnitt__symbol">
              <Icon name="layers" groesse={18} />
            </span>
            Grundlagen und Reihenfolge
          </h2>
          <div class="hilfe-abschnitt__text">
            <p>
              „<strong>Grundlage für 3</strong>“ heißt: Drei andere Stichpunkte bauen darauf auf, auch in späteren Prüfungsteilen. Das ändert die Stufe nicht, zählt aber für „Heute im
              Fokus“: Ein Thema, auf dem oft geprüfte Themen aufbauen, kommt früher dran.
            </p>
            <p class="gedaempft">
              Reihenfolge-Wert = eigener Anteil der Prüfungen + {String(LAMBDA).replace('.', ',')} × Anteile der offenen Stichpunkte, die darauf aufbauen. Ein Block zählt mit seinem wichtigsten offenen Stichpunkt. Was in der letzten Prüfung schon dran war, rückt ein Stück nach hinten – solche
              Themen kamen beim nächsten Mal etwas seltener wieder.
            </p>
          </div>
        </section>

        <section class="flaeche flaeche--gross hilfe-abschnitt">
          <h2 class="hilfe-abschnitt__titel">
            <span class="hilfe-abschnitt__symbol">
              <Icon name="info" groesse={18} />
            </span>
            Wofür die Stufe nicht taugt
          </h2>
          <div class="hilfe-abschnitt__text">
            <p>
              „Noch nie geprüft“ heißt nicht unwichtig: Alles im Lernplan steht im Prüfungskatalog und kann drankommen – in AP1 kam etwa jeder achte
              davon in der nächsten Prüfung dann doch dran. Und die Stufe sagt nichts darüber, wie tief du ein Thema können musst – das steht an den
              Können-Aussagen.
            </p>
            {raum === 'AP1' && (
              <p>
                In AP1 sagen ältere Prüfungen die neuen nur schwach vorher (neuer Katalog ab 2025, breit gestreute Aufgaben): Ein Top-Thema war in der nächsten
                Prüfung nur etwa jedes vierte Mal dran. Lerne dort nicht nur nach der Stufe.
              </p>
            )}
            {jeStufe.flat()[0] && <p class="gedaempft">Beispiel: „{jeStufe.flat()[0].titel}“ – {wichtigkeitText(jeStufe.flat()[0].wichtig)}</p>}
          </div>
        </section>
      </div>
    </div>
  );
}
