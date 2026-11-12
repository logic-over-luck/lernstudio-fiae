// Hilfe: wie das Lernstudio funktioniert. Liest die Regeln aus regeln.js, damit Text und
// Verhalten übereinstimmen.

import { KARTEN_ABSTAND, KARTE_SICHER_AB, PRUEFUNG_FENSTER, PRUEFUNG_PUFFER, RUECKSTAU_AB, PROBLEM_AB, XP, RAENGE } from '../../lernstand/regeln.js';
import { Icon, Kbd, Knopf, StufenMarke } from '../../ui/bausteine.jsx';
import { link } from '../../router.js';
import { inhalt } from '../../daten/inhalt.js';
import { KLASSEN, seitenName } from '../../daten/wichtigkeit.js';

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

export function Hilfe({ raum }) {
  const karten = inhalt.karten.size;
  return (
    <div class="hilfe">
      <header class="seitenkopf">
        <div>
          <div class="ueberschrift-klein ueberschrift-klein--akzent">Nachschlagen</div>
          <h1 class="seitenkopf__titel">So funktioniert das Lernstudio</h1>
          <p class="seitenkopf__text">Alles läuft lokal in deinem Browser, ohne Internet. Hier steht, nach welchen Regeln es arbeitet.</p>
        </div>
      </header>

      <div class="hilfe-raster">
        <Abschnitt icon="layers" titel="Drei Lernräume">
          <p>
            <strong>AP1</strong>, <strong>AP2</strong> und <strong>WiSo</strong> haben je eigenen Fortschritt, eigene Farbe und eigenen Prüfungstermin. Themen, die in zwei
            Räumen vorkommen, lernst und hakst du getrennt ab – am Stichpunkt führt „Auch in …" zum Gegenstück.
          </p>
          <p>Umschalten oben in der Leiste. Im Raum erscheinen nur die Trainer, die dort gebraucht werden; SQL gehört zum Beispiel nur zu AP2.</p>
        </Abschnitt>

        <Abschnitt icon="list-checks" titel="Lernplan">
          <p>
            Ordner sind Themenbereiche, Blöcke die Karten darin, Stichpunkte das, was du abhakst. Sind alle Stichpunkte eines Blocks erledigt, ist der Block
            erledigt. Ein Klick auf einen Stichpunkt zeigt rechts die Kurzfassung; „Alles anzeigen" zeigt den vollen Rahmen und alle Können-Aussagen.
          </p>
          <p>
            „Lernprompt kopieren" legt einen fertigen Auftrag in die Zwischenablage – zum Einfügen in einen neuen KI-Chat. In allen vier Prüfungsteilen ist das
            für jeden Stichpunkt ein eigener Prompt aus festen Regeln, dem Stoff und einer Lehrnotiz (Kerngedanken, typische Fehler, wie die IHK fragt);
            die KI erklärt, fragt nach und stellt am Ende eine Abschlussaufgabe (eine Sitzung je Stichpunkt; der Knopf am Block nimmt den
            nächsten offenen). In WiSo ist die Abschlussaufgabe wie in der Prüfung zum Ankreuzen, Zuordnen und Eintragen. Schon abgehakte Stichpunkte und Blöcke bekommen einen kurzen Wiederholungs-Prompt.
          </p>
        </Abschnitt>

        <Abschnitt icon="trending-up" titel="Wichtigkeit">
          {inhalt.raeume.get(raum)?.wichtig?.system === 'klassen' ? (
            <p>
              Jeder Stichpunkt zeigt, wann du ihn am besten lernst:{' '}
              {KLASSEN.map((k) => [<StufenMarke key={k.nr} nr={k.nr} system="klassen" />, ' '])}
              Erst A, dann B, dann C – für eine gute Note brauchst du alle drei. Fahr mit der Maus darüber, dann siehst du, wie oft das Thema dran war. Ein
              Block zeigt seine früheste Stufe.
            </p>
          ) : (
            <p>
              Jeder Stichpunkt zeigt, wie wichtig er nach den ausgewerteten IHK-Prüfungen ist: <StufenMarke nr={1} /> <StufenMarke nr={2} />{' '}
              <StufenMarke nr={3} /> <StufenMarke nr={4} />. Fahr mit der Maus darüber, dann siehst du, in wie vielen Prüfungen er dran war. Ein Block
              zeigt, ob ein Top-Thema oder etwas Wichtiges darin steckt.
            </p>
          )}
          <p>
            Alle Stufen, die Stichpunkte je Stufe und den Rechenweg findest du unter{' '}
            <a href={link(raum, 'wichtigkeit')}>Nachschlagen → {seitenName(inhalt.raeume.get(raum)?.wichtig?.system)}</a>.
          </p>
        </Abschnitt>

        <Abschnitt icon="refresh-cw" titel="Wiederholen">
          <p>
            Wiederholt wird mit den Lernkarten. Hakst du einen Stichpunkt ab, werden seine Karten <strong>offen</strong>: Sie stehen unter „Offene Karten“
            bereit, in der Reihenfolge, in der du abgehakt hast. Wann du sie machst, entscheidest du – am Tag nach der KI-Sitzung ist ein guter Zeitpunkt,
            dann ist es schon ein echter Abruf mit Abstand.
          </p>
          <p>
            Öffnest du einen Stichpunkt wieder, behalten schon bewertete Karten ihren Stand; die übrigen sind erst nach dem nächsten Abhaken wieder offen.
            Über „Lernkarten“ am Stichpunkt oder Block kannst du jederzeit auch Karten lernen, die noch nicht offen sind.
          </p>
        </Abschnitt>

        <Abschnitt icon="sparkles" titel="Heute im Fokus">
          <p>Die Empfehlung folgt einer festen Reihenfolge:</p>
          <ol>
            <li>angefangene Blöcke (die fast fertigen zuerst)</li>
            <li>offene Blöcke nach ihrem wichtigsten offenen Stichpunkt: oft geprüft zuerst; Grundlagen, auf denen oft geprüfte Themen aufbauen, rücken nach vorn</li>
            <li>wenn alles erledigt ist: fällige Lernkarten</li>
          </ol>
          <p>Offene und fällige Lernkarten stehen daneben als eigene Knöpfe.</p>
          <p>„Hier lohnt sich Wiederholen" zeigt Blöcke, deren Karten du zuletzt nicht wusstest oder deren Trainer-Aufgaben danebengingen.</p>
        </Abschnitt>

        <Abschnitt icon="layers" titel={`Lernkarten (${karten})`}>
          <p>
            <strong>Erst festlegen, dann aufdecken:</strong> Sag dir die Antwort im Kopf in ganzen Worten, bei Aufzählungen zählst du mit. Erst dann
            aufdecken und bewerten – wer die Lösung schon sieht, hält sich leicht für besser, als er ist.
          </p>
          <ul>
            <li>
              <strong>Gewusst</strong> = alles Verlangte, ohne Zögern, so dass es in der Prüfung Punkte gäbe („Nenne vier“ = vier richtige). Die Karte geht
              eine Stufe höher (eine neue springt gleich auf 3 Tage). Abstände je Stufe: {KARTEN_ABSTAND.slice(1).join(', ')} Tage. Ist die Karte noch gar
              nicht fällig (etwa im Zufallsmix), bleiben Stufe und Termin, wie sie sind – aufsteigen geht nur mit Abstand.
            </li>
            <li>
              <strong>Unsicher</strong> = im Kern richtig, aber lückenhaft, langsam oder geraten. Eine Stufe zurück, mindestens Stufe 1 (morgen wieder).
            </li>
            <li>
              <strong>Nicht gewusst</strong> = falsch, leer oder weniger als die Hälfte. Zurück auf Anfang; die Karte kommt in derselben Runde noch einmal.
            </li>
          </ul>
          <p>Ab Stufe {KARTE_SICHER_AB} (also mindestens eine Woche Abstand gehalten) gilt eine Karte als „sicher".</p>
          <p>
            <strong>Prüfungsrunde:</strong> Ist ein Prüfungstermin eingetragen, kommt jede Karte in den letzten {PRUEFUNG_FENSTER / 7} Wochen davor einmal
            dran, spätestens {PRUEFUNG_PUFFER} Tage vor der Prüfung – gleichmäßig über diese Zeit verteilt. So liegt am Prüfungstag keine Wiederholung
            lange zurück.
          </p>
          <p>
            <strong>Fällige Karten</strong> kommen gemischt, damit Karten desselben Themas einander nicht verraten. Sind nach einer Pause mehr als{' '}
            {RUECKSTAU_AB} fällig, kommen die jüngsten zuerst – sie vergessen sich am schnellsten. Am besten erst den Rückstau abbauen, dann neue Stichpunkte.
          </p>
          <p>
            <strong>Problemkarten:</strong> Eine Karte, die du {PROBLEM_AB}-mal nicht wusstest, ist markiert und steht unter „Schwierige“ vorn. Klär die
            Ursache: Ist die Karte unklar (dann notieren), oder verwechselst du sie mit etwas anderem (dann beides gegenüberstellen lassen, etwa im KI-Chat)?
          </p>
          <p>Der Zufallsmix nimmt nur Karten, die du schon einmal bewertet hast.</p>
          <p class="hilfe-tasten">
            <Kbd>Leertaste</Kbd> aufdecken · <Kbd>1</Kbd> <Kbd>2</Kbd> <Kbd>3</Kbd> bewerten · <Kbd>M</Kbd> merken · <Kbd>Esc</Kbd> zurück
          </p>
        </Abschnitt>

        <Abschnitt icon="target" titel="Trainer">
          <p>
            Rechentrainer erzeugen Aufgaben mit zufälligen Werten und prüfen deine Antwort selbst – mit Rechenweg zum Aufdecken. Komma und Punkt sind beide
            erlaubt; wo gerundet wird, steht in der Aufgabe, auf wie viele Stellen.
          </p>
          <p>
            Diagramme lassen sich nicht ehrlich automatisch prüfen. Dort gibt es Aufgaben zum Zuordnen, Ergänzen und Fehlerfinden – und für freie Zeichnungen eine
            Musterlösung mit Prüfliste zum Selbstabgleich.
          </p>
        </Abschnitt>

        <Abschnitt icon="award" titel="Ränge und Lernserie">
          <p>
            Jede Lernhandlung bringt Erfahrungspunkte: Stichpunkt {XP.stichpunkt}, Block geschafft +{XP.blockGeschafft}, jede Kartenantwort {XP.karte[0]} – egal
            wie du bewertest, damit nur Ehrlichkeit zählt –, Aufgabe {XP.aufgabeRichtig}, Fokus 1 je {XP.fokusJeMinuten} Minuten. Wählst du einen Stichpunkt wieder ab, werden seine Punkte (und ein Block-Bonus) wieder abgezogen.
          </p>
          <p>
            Die Rangleiter beginnt bei „{RAENGE[0].name}" und endet bei „{RAENGE[RAENGE.length - 1].name}". Die Lernserie zählt Tage am Stück, an denen du etwas
            gelernt hast. Ist heute noch nichts passiert, bleibt die Serie bis Mitternacht stehen.
          </p>
        </Abschnitt>

        <Abschnitt icon="hard-drive-download" titel="Sichern und Updates">
          <p>
            Der Lernstand liegt im Browser, getrennt vom Inhalt. Über <strong>Sicherung</strong> oben rechts lädst du ihn als Datei herunter und liest ihn wieder
            ein. Der Punkt am Knopf erinnert dich, wenn die letzte Sicherung länger als eine Woche her ist.
          </p>
          <p>
            Nach einem Update ersetzt du einfach die Datei <code>Lernstudio.html</code> am selben Ort – der Lernstand bleibt. Liegt die neue Datei woanders oder
            nutzt du einen anderen Browser, liest du deine Sicherung ein. Ältere Sicherungen bleiben lesbar.
          </p>
        </Abschnitt>

        <Abschnitt icon="keyboard" titel="Tastatur">
          <ul class="hilfe-kurz">
            <li>
              <Kbd>Strg K</Kbd> oder <Kbd>/</Kbd> Suchen und springen
            </li>
            <li>
              <Kbd>Tab</Kbd> durch alle Elemente, <Kbd>Enter</Kbd>/<Kbd>Leertaste</Kbd> auslösen
            </li>
            <li>
              <Kbd>Esc</Kbd> schließt Dialoge und Sitzungen
            </li>
          </ul>
        </Abschnitt>

        <Abschnitt icon="info" titel="Über die Inhalte">
          <p>
            Grundlage ist die geprüfte Inhaltsdatei mit {inhalt.sp.size} Stichpunkten. Kurzfassungen, Lernkarten und Glossar sind daraus abgeleitet und wurden
            unabhängig gegengelesen. Wo etwas fachlich nicht sicher zu klären war, ist es in <code>STAND.md</code> aufgeführt.
          </p>
          <p class="gedaempft">
            Schriften: Inter und JetBrains Mono (SIL Open Font License). Symbole: Lucide (ISC). SQL: sql.js/SQLite (MIT/gemeinfrei). Oberfläche: Preact (MIT).
          </p>
        </Abschnitt>
      </div>
    </div>
  );
}

export { Knopf };
