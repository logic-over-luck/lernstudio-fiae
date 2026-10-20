// Unterricht Paritätsbit: je Teil eine Liste von Blöcken (Gliederung in paritaet.js, Bausteine: lernsystem/bausteine.jsx).
// Jedes Kapitel muss ohne die vorigen verständlich sein.

import { P, Merke, Tafel, Abbildung, Wahl, Eingabe, SoHeisstDas, B } from '../../lernsystem/bausteine.jsx';
import { istZahl, istText } from '../../lernsystem/pruefen.js';
import { Strecke, Einsen, Bilden, Verdacht, Pruefsumme, Ean, Frame } from '../bilder/paritaet.jsx';

export const INHALT = {
  // ---------- Die Idee ----------
  kippen: () => [
    <P>
      Du überweist einem Freund 40 €. Die Zahl reist als Folge von <B id="bit">Bits</B> durchs Netz: durch Kabel, über Funk, durch Router. Unterwegs gibt es Störungen – ein
      Motor in der Nähe, ein Wackelkontakt, ein Gewitter. Manchmal reicht so eine Störung, und aus einer <code>0</code> wird eine <code>1</code>.
    </P>,
    <P>
      Im ASCII-Code, mit dem Computer Zeichen speichern, steht <code>0110100</code> für die Ziffer „4“. Tippe beim Empfänger ein Bit an – das ist die Störung auf der
      Leitung. Probier zuerst das letzte Bit.
    </P>,
    <Abbildung>
      <Strecke daten="0110100" zeichen />
    </Abbildung>,
    <Wahl
      frage="Beim Empfänger kommt 0110101 an. Kann er erkennen, dass etwas schiefgegangen ist?"
      optionen={[
        { text: 'Ja, die Bitfolge ist ungültig.', warum: 'Ist sie nicht: 0110101 ist das Zeichen „5“, ein ganz normales Zeichen.' },
        { text: 'Nein, für ihn sieht 0110101 ganz normal aus.', richtig: true },
        { text: 'Ja, es kommen weniger Bits an.', warum: 'Es kommen weiterhin 7 Bit an. Ein gekipptes Bit ändert nur seinen Wert, nicht die Länge.' },
      ]}
    >
      <P>
        Der Empfänger hat nur das, was ankommt. <code>0110101</code> ist eine „5“ – ein gültiges Zeichen. Aus 40 € werden 50 €, und niemand merkt es.
      </P>
    </Wahl>,
    <SoHeisstDas begriff="bitfehler">
      Ein Bit, das beim Übertragen oder Speichern verfälscht wurde: Aus 0 wird 1 oder aus 1 wird 0. Man sagt auch: Das Bit ist <strong>gekippt</strong>. Ursache ist zum
      Beispiel eine elektrische Störung auf der Leitung oder eine defekte Speicherzelle.
    </SoHeisstDas>,
    <P>
      Das Tückische am Bitfehler: Die verfälschte Folge ist wieder eine gültige Folge. Mit 7 Bit gibt es 128 Muster, und jedes davon steht für ein Zeichen. Ein
      „verbotenes“ Muster, an dem man den Fehler sehen könnte, gibt es nicht.
    </P>,
    <Wahl
      frage="Wie viele Bits müssen mindestens kippen, damit aus „4“ (0110100) ein anderes Zeichen wird?"
      optionen={[
        { text: '7', warum: 'Es müssen nicht alle kippen. Jede Änderung, auch die kleinste, ergibt ein anderes Muster.' },
        { text: '2', warum: 'Probier es oben aus: Tippe ein einziges Bit an und schau, was der Empfänger liest.' },
        { text: '1', richtig: true },
      ]}
    >
      <P>Ein einziges gekipptes Bit reicht. Jedes Muster bedeutet etwas – also auch das verfälschte.</P>
    </Wahl>,
    <P>
      Der Empfänger braucht also mehr als nur die Daten. Er braucht etwas, womit er <strong>nachprüfen</strong> kann. Wie das geht, ohne viel Aufwand, zeigt der nächste
      Teil.
    </P>,
  ],

  mitschicken: () => [
    <P>
      Stell dir vor, du diktierst jemandem am Telefon eine Kontonummer. Damit kein Fehler durchrutscht, sagst du sie einfach zweimal. Das geht mit Bits genauso: Der Sender
      schickt <code>0110100 0110100</code>.
    </P>,
    <Wahl
      frage="Die Bitfolge kommt doppelt an. Was kann der Empfänger jetzt?"
      optionen={[
        { text: 'Nichts – es sind ja dieselben Daten.', warum: 'Gerade weil es dieselben Daten sind, kann er sie vergleichen. Was ist, wenn in einer Hälfte ein Bit kippt?' },
        { text: 'Er weiß, welche Hälfte stimmt.', warum: 'Kommen 0110100 und 0110101 an – welche ist die echte? Er sieht nur, dass sie nicht gleich sind.' },
        { text: 'Er merkt, wenn die Hälften verschieden sind.', richtig: true },
      ]}
    >
      <P>
        Er vergleicht die beiden Hälften. Sind sie verschieden, ist unterwegs etwas schiefgegangen. Der Preis: doppelt so viele Bits für dieselben Daten.
      </P>
    </Wahl>,
    <SoHeisstDas begriff="redundanz">
      Information, die für den Inhalt nicht nötig ist – die zweite Hälfte sagt nichts Neues. Sie wird mitgesendet oder mitgespeichert, damit Fehler auffallen. In Datenbanken
      ist Redundanz unerwünscht, hier ist sie gewollt: als <strong>Prüfinformation</strong>, die der Empfänger nachrechnet und vergleicht.
    </SoHeisstDas>,
    <P>
      Alles doppelt ist teuer. Geht es billiger? Der Sender könnte nur die <strong>Anzahl der Einsen</strong> mitschicken. Oder noch weniger: nur, ob diese Anzahl gerade
      oder ungerade ist. Dafür reicht ein einziges Bit.
    </P>,
    <Tafel
      zeilen={[
        { text: 'Prüfbits für 7 Datenbits' },
        { name: 'alles noch einmal', werte: ['7'] },
        { name: 'Anzahl der Einsen', werte: ['3'] },
        { name: 'gerade oder ungerade', werte: ['1'], ton: 'oben' },
      ]}
    />,
    <P>Aber reicht „gerade oder ungerade“, um einen Bitfehler zu bemerken? Tippe Bits an und beobachte die Anzahl der Einsen.</P>,
    <Abbildung>
      <Einsen start="0110100" />
    </Abbildung>,
    <Wahl
      frage="Ein Bit kippt. Wie ändert sich die Anzahl der Einsen?"
      optionen={[
        { text: 'Sie bleibt gleich.', warum: 'Tipp oben eine 0 an: Sie wird zur 1 – das ist eine Eins mehr.' },
        { text: 'Das hängt davon ab, welches Bit kippt.', warum: 'Die Richtung hängt davon ab (0 → 1 oder 1 → 0), aber nicht die Größe der Änderung.' },
        { text: 'Um genau 1 – mal mehr, mal weniger.', richtig: true },
      ]}
    >
      <P>
        Kippt eine 0 zur 1, gibt es eine Eins mehr; kippt eine 1 zur 0, eine weniger. Weil die Anzahl immer um genau 1 springt, wird aus gerade ungerade und aus ungerade
        gerade.
      </P>
    </Wahl>,
    <SoHeisstDas begriff="paritaet">
      Ob die Anzahl der Einsen in einer Bitfolge gerade oder ungerade ist. <code>0110100</code> hat 3 Einsen, ihre Parität ist ungerade. Jedes gekippte Bit ändert die
      Parität.
    </SoHeisstDas>,
    <Eingabe
      frage="Ist die Parität von 1011 0110 gerade oder ungerade?"
      pruefe={istText(['ungerade'], {
        gerade: 'Zähl noch einmal nur die Einsen: 1, 0, 1, 1, 0, 1, 1, 0.',
        5: 'Richtig gezählt: 5 Einsen. Gefragt ist aber das Wort: gerade oder ungerade?',
      })}
      tipp="Zähl die Einsen und entscheide: gerade oder ungerade?"
      loesung="ungerade"
      platzhalter="gerade / ungerade"
    >
      <P>1 + 1 + 1 + 1 + 1 = 5 Einsen, und 5 ist ungerade.</P>
    </Eingabe>,
    <P>
      Wenn der Empfänger also die Parität der gesendeten Daten kennt, merkt er jeden einzelnen Bitfehler. Wie der Sender ihm die Parität mitteilt – mit einem einzigen
      Bit –, zeigt das nächste Kapitel.
    </P>,
  ],

  // ---------- Paritätsbit bilden ----------
  ergaenzen: () => [
    <P>
      Der Sender will <code>0110100</code> schicken – 7 Datenbits mit 3 Einsen – und dem Empfänger etwas zum Nachprüfen mitgeben. Er hängt ein achtes Bit an. Welchen Wert
      soll es haben?
    </P>,
    <P>
      Der Trick: Der Sender wählt das Bit so, dass die Anzahl der Einsen <strong>insgesamt gerade</strong> wird. Dann muss der Empfänger sich nur eins merken: „Bei mir
      kommt immer eine gerade Anzahl Einsen an.“
    </P>,
    <Wahl
      frage="0110100 hat 3 Einsen. Welches Bit hängt der Sender an, damit es insgesamt eine gerade Anzahl Einsen wird?"
      optionen={[
        { text: '0', warum: 'Mit einer 0 bleiben es 3 Einsen – und 3 ist ungerade.' },
        { text: '1', richtig: true },
      ]}
    >
      <P>
        Mit der angehängten 1 sind es 4 Einsen: gerade. Gesendet wird <code>0110100 1</code>. Im Bild steht das angehängte Bit abgesetzt, mit einem P darüber. Ändere die
        Datenbits und sieh zu, wie es sich anpasst:
      </P>
    </Wahl>,
    <Abbildung>
      <Bilden daten="0110100" paritaet="gerade" wahl={false} />
    </Abbildung>,
    <SoHeisstDas begriff="paritaetsbit">
      Das zusätzliche Bit, das der Sender an die Daten anhängt. Es ergänzt die Anzahl der Einsen so, dass sie zur vereinbarten Parität passt. Es trägt keine Nutzdaten – es
      ist reine <B id="redundanz" />. Meist steht es am Ende; wichtig ist nur, dass Sender und Empfänger wissen, wo.
    </SoHeisstDas>,
    <SoHeisstDas begriff="gerade">
      Die Vereinbarung: Die Anzahl der Einsen <strong>einschließlich Paritätsbit</strong> ist immer gerade. Haben die Datenbits schon eine gerade Anzahl Einsen, ist das
      Paritätsbit 0, sonst 1.
    </SoHeisstDas>,
    <Eingabe
      frage="Welches Paritätsbit bekommt 1100 1100 bei gerader Parität?"
      pruefe={istZahl(0, { 1: 'Zähl noch einmal: 1100 1100 hat schon 4 Einsen – gerade. Muss noch eine dazukommen?' })}
      tipp="Einsen zählen: gerade Anzahl → 0, ungerade Anzahl → 1."
      loesung="0"
      platzhalter="0 oder 1"
    >
      <P>4 Einsen sind schon gerade. Das Paritätsbit ist 0, die Anzahl bleibt 4. Gesendet wird <code>1100 1100 0</code>.</P>
    </Eingabe>,
  ],

  'gerade-ungerade': () => [
    <P>
      Gerade Parität hat ein Problem: Kommen nur Nullen an, etwa weil die Leitung tot ist, sieht der Empfänger <code>0000000 0</code> – null Einsen, und null ist
      gerade. Die Prüfung meldet: alles in Ordnung. Darum vereinbaren manche Systeme das Gegenteil: Die Anzahl der Einsen soll <strong>ungerade</strong> sein.
    </P>,
    <Wahl
      frage="0110100 hat 3 Einsen. Welches Paritätsbit gehört dazu, wenn die Gesamtzahl der Einsen ungerade sein soll?"
      optionen={[
        { text: '1', warum: 'Dann wären es 4 Einsen – gerade. Die Anzahl ist doch schon ungerade.' },
        { text: '0', richtig: true },
      ]}
    >
      <P>3 ist schon ungerade, es darf keine Eins dazukommen: Paritätsbit 0. Gesendet wird <code>0110100 0</code>.</P>
    </Wahl>,
    <SoHeisstDas begriff="ungerade">
      Die Vereinbarung: Die Anzahl der Einsen <strong>einschließlich Paritätsbit</strong> ist immer ungerade. Das Paritätsbit ist genau das Gegenteil des Bits bei gerader
      Parität. Eine Folge aus lauter Nullen ist hier nie gültig.
    </SoHeisstDas>,
    <P>Sender und Empfänger müssen sich vorher einigen, welche Parität gilt – sonst hält der Empfänger jede richtige Folge für falsch. Schalte im Bild um:</P>,
    <Abbildung>
      <Bilden daten="0110100" paritaet="ungerade" />
    </Abbildung>,
    <div class="ls-tabelle-huelle">
      <table class="ls-tabelle">
        <thead>
          <tr>
            <th>
              Einsen in
              <br />
              den Datenbits
            </th>
            <th>
              gerade
              <br />
              Parität
            </th>
            <th>
              ungerade
              <br />
              Parität
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>gerade Anzahl</td>
            <td class="mono">0</td>
            <td class="mono">1</td>
          </tr>
          <tr>
            <td>ungerade Anzahl</td>
            <td class="mono">1</td>
            <td class="mono">0</td>
          </tr>
        </tbody>
      </table>
    </div>,
    <Merke titel="So bildest du das Paritätsbit">
      Einsen der Datenbits zählen. Dann fragen: Passt die Anzahl schon zur vereinbarten Parität? <strong>Ja → 0. Nein → 1.</strong>
    </Merke>,
    <Eingabe
      frage="1011001 soll mit gerader Parität gesendet werden. Welches Paritätsbit wird angehängt?"
      pruefe={istZahl(0, { 1: 'Die Folge hat schon 4 Einsen, und 4 ist gerade. Gesucht ist das Bit, das die Anzahl gerade lässt.' })}
      tipp="Einsen zählen, dann: Passt die Anzahl schon? Ja → 0, nein → 1."
      loesung="0"
      platzhalter="0 oder 1"
    >
      <P>1011001 hat 4 Einsen – schon gerade. Paritätsbit 0, gesendet wird <code>1011001 0</code>.</P>
    </Eingabe>,
    <Eingabe
      frage="Und dieselbe Folge 1011001 mit ungerader Parität?"
      pruefe={istZahl(1, { 0: 'Mit 0 blieben es 4 Einsen – gerade. Vereinbart ist ungerade.' })}
      tipp="4 Einsen sind gerade. Was muss dazukommen, damit es ungerade wird?"
      loesung="1"
      platzhalter="0 oder 1"
    >
      <P>4 Einsen sind gerade, für ungerade Parität fehlt eine: Paritätsbit 1, insgesamt 5 Einsen. Gesendet wird <code>1011001 1</code>.</P>
    </Eingabe>,
    <P>Damit hat der Sender seinen Teil getan. Im nächsten Kapitel schaust du dem Empfänger über die Schulter: Wie prüft er – und was entgeht ihm?</P>,
  ],

  // ---------- Fehler erkennen ----------
  nachzaehlen: () => [
    <P>
      Vereinbart ist gerade Parität. Der Sender schickt die Datenbits <code>0110100</code> mit dem <B id="paritaetsbit" /> 1, also <code>0110100 1</code> – vier Einsen.
      Unterwegs kann ein Bit kippen. Der Empfänger bekommt 8 Bits und soll entscheiden: heil angekommen oder nicht?
    </P>,
    <Wahl
      frage="Was macht der Empfänger mit den 8 empfangenen Bits?"
      optionen={[
        { text: 'Er vergleicht sie mit dem Original.', warum: 'Das Original hat er nicht – nur das, was angekommen ist.' },
        { text: 'Er zählt alle Einsen und prüft, ob die Anzahl gerade ist.', richtig: true },
        { text: 'Er fragt beim Sender nach, ob alles stimmt.', warum: 'Die Antwort könnte genauso gestört werden. Der Empfänger hat schon alles, was er zum Prüfen braucht.' },
      ]}
    >
      <P>Er zählt alle Einsen, das Paritätsbit eingeschlossen. Ist die Anzahl gerade, passt alles zur Vereinbarung. Probier es: Tippe beim Empfänger ein Bit an.</P>
    </Wahl>,
    <Abbildung>
      <Strecke daten="0110100" paritaet="gerade" />
    </Abbildung>,
    <P>
      Egal welches Bit du kippst – auch das Paritätsbit selbst: Die Anzahl der Einsen wird ungerade, und die Prüfung schlägt an. Das Paritätsbit ist ja ein ganz normales
      Bit und kann genauso gestört werden.
    </P>,
    <SoHeisstDas begriff="paritaetspruefung">
      Die Prüfung beim Empfänger: Er zählt die Einsen einschließlich Paritätsbit und vergleicht mit der vereinbarten Parität. Passt sie nicht, wurde die Bitfolge
      unterwegs verfälscht.
    </SoHeisstDas>,
    <Wahl
      frage="Gerade Parität. Empfangen wird 0100100 1 (Paritätsbit am Ende). Meldet die Prüfung einen Fehler?"
      optionen={[
        { text: 'Nein', warum: 'Zähl alle Einsen, auch das Paritätsbit am Ende: 0100100 hat 2, dazu die 1. Ist das gerade?' },
        { text: 'Ja', richtig: true },
      ]}
    >
      <P>2 + 1 = 3 Einsen, ungerade. Vereinbart ist gerade – Fehler erkannt. (Gesendet war <code>0110100 1</code>, das dritte Bit ist gekippt.)</P>
    </Wahl>,
    <Eingabe
      frage="Ungerade Parität. Empfangen wird 1110000 0. Meldet die Prüfung einen Fehler? (ja/nein)"
      pruefe={istText(['nein', 'kein Fehler'], { ja: 'Zähl alle Einsen: 1110000 hat 3, das Paritätsbit ist 0. Ist 3 bei ungerader Parität ein Problem?' })}
      tipp="Alle Einsen zählen und mit der Vereinbarung „ungerade“ vergleichen."
      loesung="nein"
      platzhalter="ja / nein"
    >
      <P>3 Einsen, ungerade – genau wie vereinbart. Die Prüfung meldet keinen Fehler.</P>
    </Eingabe>,
  ],

  'welches-bit': () => [
    <P>
      Die Prüfung meldet: Fehler. Gut – aber was jetzt? Liegt es nicht nahe, das falsche Bit einfach zurückzukippen? Gerade Parität ist vereinbart, angekommen ist{' '}
      <code>0100100 1</code>. Tippe nacheinander verschiedene Bits an: Was wäre, wenn genau dieses gekippt ist?
    </P>,
    <Abbildung>
      <Verdacht empfangen="01001001" paritaet="gerade" />
    </Abbildung>,
    <Wahl
      frage="Welches Bit ist in 0100100 1 gekippt?"
      optionen={[
        { text: 'Das dritte Bit', warum: 'Kann sein – aber probier im Bild ein anderes Bit. Passt das auch?' },
        { text: 'Das lässt sich nicht sagen.', richtig: true },
        { text: 'Das Paritätsbit', warum: 'Auch möglich. Aber genauso jedes andere Bit – probier es im Bild aus.' },
      ]}
    >
      <P>
        Jedes der 8 Bits kommt in Frage: Kippst du irgendeines zurück, stimmt die Parität wieder. Die Prüfung sagt nur „ungerade Anzahl Einsen – hier stimmt etwas nicht“,
        aber nicht, wo.
      </P>
    </Wahl>,
    <SoHeisstDas begriff="fehlererkennung">
      Feststellen, <strong>dass</strong> Daten verfälscht wurden – ohne zu wissen, welche Stelle falsch ist. Genau das leistet ein Paritätsbit.
    </SoHeisstDas>,
    <SoHeisstDas begriff="fehlerkorrektur">
      Das falsche Bit <strong>finden und berichtigen</strong>, ohne die Daten neu anzufordern. Dafür braucht der Empfänger mehr Prüfinformation; ein einzelnes Paritätsbit
      reicht nicht.
    </SoHeisstDas>,
    <P>
      Was tut der Empfänger also? Er verwirft die Daten und lässt sie sich noch einmal schicken. Im Arbeitsspeicher, wo es kein „noch einmal“ gibt, meldet der Rechner einen
      Speicherfehler.
    </P>,
    <Wahl
      frage="Ein Kollege sagt: „Das Paritätsbit korrigiert Übertragungsfehler automatisch.“ Stimmt das?"
      optionen={[
        { text: 'Ja, das gekippte Bit wird zurückgekippt.', warum: 'Dazu müsste der Empfänger wissen, welches Bit es war. Das verrät das Paritätsbit nicht.' },
        { text: 'Nein, es erkennt den Fehler nur.', richtig: true },
      ]}
    >
      <P>
        Ein Paritätsbit ermöglicht <B id="fehlererkennung" />, keine <B id="fehlerkorrektur" />. In der Prüfung heißt das: Es erkennt einen Bitfehler, kann ihn aber nicht
        berichtigen.
      </P>
    </Wahl>,
  ],

  'zwei-bits': () => [
    <P>
      Bisher ist immer genau ein Bit gekippt. Eine Störung kann aber auch zwei Bits auf einmal treffen. Probier es: Tippe beim Empfänger zwei verschiedene Bits an.
    </P>,
    <Abbildung>
      <Strecke daten="0110100" paritaet="gerade" />
    </Abbildung>,
    <Wahl
      frage="Zwei Bits sind gekippt. Was meldet die Paritätsprüfung?"
      optionen={[
        { text: 'Fehler erkannt – sogar doppelt so deutlich.', warum: 'Es gibt kein „doppelt so deutlich“, nur gerade oder ungerade. Was macht das zweite Bit mit der Anzahl der Einsen?' },
        { text: 'Kein Fehler – die Parität stimmt wieder.', richtig: true },
      ]}
    >
      <P>
        Das erste gekippte Bit ändert die Anzahl der Einsen um 1: gerade wird ungerade. Das zweite ändert sie noch einmal um 1: ungerade wird wieder gerade. Beispiel:{' '}
        <code>0110100 1</code> wird zu <code>0000100 1</code> – 2 Einsen, gerade. Die Prüfung meldet nichts, der Fehler bleibt unbemerkt.
      </P>
    </Wahl>,
    <Eingabe
      frage="Und wenn drei Bits kippen – erkennt die Paritätsprüfung den Fehler? (ja/nein)"
      pruefe={istText(['ja'], { nein: 'Geh Schritt für Schritt: Jedes gekippte Bit macht aus gerade ungerade und umgekehrt. Wo landest du nach drei Schritten?' })}
      tipp="Probier es im Bild: drei Bits antippen."
      loesung="ja"
      platzhalter="ja / nein"
    >
      <P>Gerade → ungerade → gerade → ungerade. Nach drei gekippten Bits ist die Anzahl ungerade, die Prüfung schlägt an.</P>
    </Eingabe>,
    <Merke titel="Die Grenze des Paritätsbits">
      Ein Paritätsbit erkennt jede <strong>ungerade</strong> Anzahl gekippter Bits (1, 3, 5 …). Eine <strong>gerade</strong> Anzahl (2, 4 …) bleibt unbemerkt. Und auch
      erkannte Fehler werden nicht berichtigt.
    </Merke>,
    <P>
      Für ein paar Bits auf einer kurzen Strecke reicht das oft. Für große Datenmengen, in denen Störungen gern mehrere Bits hintereinander treffen, braucht es stärkere
      Prüfinformation – darum geht es im nächsten Kapitel: Prüfsummen.
    </P>,
  ],

  // ---------- Prüfsummen ----------
  pruefsumme: () => [
    <P>
      Ein Lager schickt der Zentrale drei Bestellmengen: 12, 7 und 30. Unterwegs kann eine Zahl verfälscht werden – aus 7 wird 8. Wie beim Paritätsbit soll der Empfänger
      das merken, ohne das Original zu kennen.
    </P>,
    <Wahl
      frage="Was könnte der Sender zu 12, 7 und 30 mitschicken, damit der Empfänger nachrechnen kann?"
      optionen={[
        { text: 'Die Zahl 3 – so viele Werte sind es.', warum: 'Die Anzahl bleibt 3, auch wenn aus 7 eine 8 wird. Sie hängt nicht vom Inhalt ab.' },
        { text: 'Die Summe 49.', richtig: true },
        { text: 'Nichts – Zahlen kann man nicht prüfen.', warum: 'Doch, genau wie Bits. Was kann der Empfänger aus den Zahlen selbst ausrechnen?' },
      ]}
    >
      <P>Die Summe hängt von jeder einzelnen Zahl ab. Ändert sich eine, ändert sich die Summe. Probier es im Bild: Verändere beim Empfänger eine Zahl.</P>
    </Wahl>,
    <Abbildung>
      <Pruefsumme werte={[12, 7, 30]} />
    </Abbildung>,
    <SoHeisstDas begriff="pruefsumme">
      Ein Wert, den der Sender aus den Daten berechnet und mitsendet oder mitspeichert. Der Empfänger berechnet ihn aus den empfangenen Daten neu und vergleicht. Weichen
      beide ab, sind die Daten fehlerhaft.
    </SoHeisstDas>,
    <P>
      Das ist wieder <B id="redundanz" />: Die 49 enthält nichts Neues, sie macht Fehler nur sichtbar. Und eine einfache Summe hat eine ähnliche Schwäche wie das
      Paritätsbit.
    </P>,
    <Wahl
      frage="Unterwegs wird aus 12 eine 13 und aus 7 eine 6. Merkt der Empfänger das?"
      optionen={[
        { text: 'Ja, zwei Zahlen sind falsch.', warum: 'Er sieht nur die empfangenen Zahlen und die Prüfsumme. Rechne nach: 13 + 6 + 30 = ?' },
        { text: 'Nein, die Summe ist wieder 49.', richtig: true },
      ]}
    >
      <P>
        13 + 6 + 30 = 49 – die Prüfsumme passt. Probier es im Bild aus. Fehler, die sich gegenseitig aufheben, rutschen bei einer einfachen Summe durch. Echte Verfahren
        rechnen darum raffinierter.
      </P>
    </Wahl>,
  ],

  pruefziffer: () => [
    <P>
      Prüfinformation steckt auch in Nummern, die Menschen abtippen oder Scanner lesen: in der Artikelnummer unter dem Strichcode (EAN) oder in deiner IBAN. Die letzte
      Ziffer einer EAN beschreibt keinen Artikel – sie ist aus den anderen 12 Ziffern berechnet.
    </P>,
    <Abbildung>
      <Ean nummer="4006381333931" />
    </Abbildung>,
    <P>
      So rechnet die Kasse: die Ziffern abwechselnd mal 1 und mal 3 nehmen, alles addieren, dann bis zum nächsten Zehner ergänzen. Stellen 1, 3, 5 …:{' '}
      <code>4 + 0 + 3 + 1 + 3 + 9 = 20</code>. Stellen 2, 4, 6 …: <code>(0 + 6 + 8 + 3 + 3 + 3) · 3 = 69</code>.
    </P>,
    <Tafel
      zeilen={[
        { name: '1, 3, 5 … · 1', werte: ['20'] },
        { name: '2, 4, 6 … · 3', werte: ['69'] },
        { name: 'Summe', werte: ['89'], ton: 'oben' },
        { text: 'bis 90 fehlt 1 → Prüfziffer 1', ton: 'summe' },
      ]}
    />,
    <Wahl
      frage="Der Scanner liest 4006381333831 – die elfte Ziffer ist falsch erkannt. Was macht die Kasse?"
      optionen={[
        { text: 'Sie bucht einen anderen Artikel.', warum: 'Dann wäre die Prüfziffer nutzlos. Die Kasse rechnet aus den ersten 12 Ziffern nach – kommt wieder 1 heraus?' },
        { text: 'Sie korrigiert die Ziffer selbst.', warum: 'Dafür müsste sie wissen, welche Ziffer falsch ist. Das verrät die Prüfziffer nicht – wie beim Paritätsbit.' },
        { text: 'Sie lehnt den Scan ab, weil die Prüfziffer nicht passt.', richtig: true },
      ]}
    >
      <P>Mit der 8 statt der 9 ergibt die Rechnung 88, die Prüfziffer müsste 2 sein. Aufgedruckt ist 1 – Lesefehler erkannt, der Artikel wird noch einmal gescannt.</P>
    </Wahl>,
    <SoHeisstDas begriff="pruefziffer">
      Eine zusätzliche Ziffer einer Nummer, die aus den übrigen Ziffern berechnet wird. Wer die Nummer liest oder eintippt, rechnet nach – passt die Prüfziffer nicht, ist
      ein Tipp- oder Lesefehler erkannt. Beispiele: EAN, ISBN, die zwei Ziffern nach „DE“ in der IBAN.
    </SoHeisstDas>,
    <Wahl
      frage="Warum werden die Ziffern mit 1 und 3 gewichtet, statt sie einfach zu addieren?"
      optionen={[
        { text: 'Damit niemand die Nummer fälschen kann.', warum: 'Jeder kann die Prüfziffer ausrechnen – sie schützt nicht vor Absicht, nur vor Versehen. Welches Versehen übersieht eine einfache Summe?' },
        { text: 'Damit vertauschte Nachbarziffern auffallen.', richtig: true },
        { text: 'Weil der Strichcode sonst nicht lesbar wäre.', warum: 'Mit dem Strichcode hat die Rechnung nichts zu tun. Denk an einen Tippfehler: 12 statt 21 – ändert sich die einfache Summe?' },
      ]}
    >
      <P>
        1 + 2 = 2 + 1: Eine einfache Summe übersieht einen Zahlendreher. Mit Gewichten nicht: 1 · 1 + 2 · 3 = 7, aber 2 · 1 + 1 · 3 = 5. So fallen die meisten Dreher auf.
      </P>
    </Wahl>,
  ],

  crc: () => [
    <P>
      Im Netzwerk fließen Millionen Bits je Sekunde. Jeder <B id="frame" /> – das Paket, in dem dein Rechner Daten ins lokale Netz schickt – trägt am Ende 4 Byte
      Prüfinformation. Hier ist sein Aufbau, darunter vereinfacht die Nutzdaten „Hallo“:
    </P>,
    <Abbildung>
      <Frame text="Hallo" />
    </Abbildung>,
    <P>
      Das letzte Feld heißt <strong>Frame Check Sequence</strong> (FCS). Der Sender berechnet sie aus Adressen, Typ und Nutzdaten, der Empfänger rechnet nach. Tippe ein
      Zeichen an – ein Bit kippt. Dann tippe ein zweites an.
    </P>,
    <Wahl
      frage="Zwei Bits sind gekippt. Was passiert mit dem Frame?"
      optionen={[
        { text: 'Er wird angenommen – zwei Fehler heben sich auf.', warum: 'So war es beim Paritätsbit. Schau im Bild auf die beiden Prüfwerte: Sind sie gleich?' },
        { text: 'Er wird verworfen, die Prüfwerte sind verschieden.', richtig: true },
        { text: 'Der Empfänger berichtigt die zwei Bits.', warum: 'Auch hier gilt: erkannt heißt nicht gefunden. Die FCS zeigt nur, dass der Frame nicht stimmt.' },
      ]}
    >
      <P>Die Prüfwerte unterscheiden sich, der Frame wird verworfen. Anders als das Paritätsbit erkennt dieses Verfahren auch mehrere gekippte Bits.</P>
    </Wahl>,
    <SoHeisstDas begriff="crc" auch="Frame Check Sequence (FCS)">
      <em>Cyclic Redundancy Check</em>, zyklische Redundanzprüfung: Der Prüfwert wird durch eine Division aus allen Bits berechnet. So fallen auch mehrere gekippte Bits
      auf, sogar ganze Bündel hintereinander. Im Ethernet-Frame ist die CRC 32 Bit lang und steht als Frame Check Sequence am Ende.
    </SoHeisstDas>,
    <P>
      Stimmt die CRC nicht, verwirft die Netzwerkkarte den Frame. Berichtigt wird nichts. Fehlen danach Daten, fordert eine höhere Schicht sie neu an, zum Beispiel TCP.
    </P>,
    <Eingabe
      frage="Wie viele Bit Prüfinformation hängt Ethernet an jeden Frame?"
      pruefe={istZahl(32, { 4: 'Das sind 4 Byte. Gefragt ist in Bit – 1 Byte hat 8 Bit.' })}
      tipp="Die FCS ist 4 Byte lang. 1 Byte = 8 Bit."
      loesung="32 Bit"
      platzhalter="Bit"
    >
      <P>4 Byte · 8 = 32 Bit – bei einem Frame mit 1.500 Byte Nutzdaten weniger als 0,3 % zusätzlich.</P>
    </Eingabe>,
    <Merke titel="Immer dasselbe Prinzip">
      Paritätsbit, Prüfsumme, Prüfziffer, CRC: Der Sender berechnet aus den Daten Prüfinformation und hängt sie an – <strong>Redundanz</strong>. Der Empfänger berechnet
      sie neu und vergleicht. Ungleich heißt: Fehler erkannt, Daten verwerfen oder neu anfordern.
    </Merke>,
    <P>
      In der Prüfung kommt meist das Paritätsbit dran: bilden, prüfen und seine Grenzen nennen. Das alles kannst du jetzt – sicher wird es unter <strong>Üben</strong>.
    </P>,
  ],
};
