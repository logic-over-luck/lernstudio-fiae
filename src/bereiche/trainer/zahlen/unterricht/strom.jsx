// Unterricht Leistung und Stromkosten: je Teil eine Liste von Blöcken (Gliederung in strom.js, Bausteine und Regeln:
// lernsystem/bausteine.jsx und lernsystem/LEITFADEN.md). Jedes Kapitel muss ohne die vorigen verständlich sein.

import { P, Merke, Tafel, Abbildung, Wahl, Eingabe, SoHeisstDas, B } from '../../lernsystem/bausteine.jsx';
import { istZahl } from '../../lernsystem/pruefen.js';
import { Leitung, Formeldreieck, Netzteilwahl, Netzteil, Stufen, Zaehler, Jahr, Steckdose, Usb } from '../bilder/strom.jsx';

const PUI = { P: 'Leistung', U: 'Spannung', I: 'Stromstärke' };

export const INHALT = {
  // ---------- Leistung ----------
  'spannung-strom': () => [
    <P>
      Dreh dein Handy-Ladegerät um. Irgendwo steht klein gedruckt so etwas wie <code>Ausgang: 5 V ⎓ 3 A</code>. Auf dem Netzteil eines Notebooks steht vielleicht{' '}
      <code>20 V ⎓ 3,25 A</code>. <strong>Was bedeuten V und A – und warum braucht man zwei Angaben?</strong>
    </P>,
    <P>
      Strom kann man nicht sehen. Darum hilft ein Bild, das du kennst: Wasser in einer Leitung. Das Bild ist nur eine Brücke zum Verstehen – in der Prüfung sprichst du
      später in Fachbegriffen.
    </P>,
    <P>
      Damit Wasser durch ein Rohr fließt, braucht es zwei Dinge. Etwas muss <strong>drücken</strong>: ein Wassertank, der hoch steht. Und dann fließt eine bestimmte{' '}
      <strong>Menge</strong> pro Sekunde durch das Rohr. Probier beide Regler aus:
    </P>,
    <Abbildung>
      <Leitung u={12} i={2} />
    </Abbildung>,
    <Wahl
      frage="Im Tank steht das Wasser hoch, aber der Hahn am Ende ist fast zu. Fließt viel Wasser durch das Rohr?"
      optionen={[
        { text: 'Ja, der Druck ist ja hoch.', warum: 'Der Druck steht bereit – aber durch einen fast geschlossenen Hahn kommt trotzdem nur wenig.' },
        { text: 'Nein, nur wenig.', richtig: true },
        { text: 'Gar nichts, ohne Durchfluss gibt es keinen Druck.', warum: 'Der Druck ist auch bei geschlossenem Hahn da – wie in der Wasserleitung zu Hause, wenn kein Hahn offen ist.' },
      ]}
    >
      <P>
        Genau: Druck und Durchfluss sind zwei verschiedene Dinge. Hoher Druck heißt nicht automatisch, dass viel fließt. Darum stehen auf dem Ladegerät auch zwei Angaben.
      </P>
    </Wahl>,
    <P>Beim Strom ist es genauso. Es gibt etwas, das den Strom antreibt – den „Druck“ –, und es gibt die Menge Strom, die tatsächlich fließt.</P>,
    <SoHeisstDas begriff="spannung">
      Der „Druck“, der den Strom durch die Leitung treibt. Formelzeichen <strong>U</strong>, Einheit <strong>Volt (V)</strong>. Die Steckdose hat 230 V, ein
      USB-Anschluss 5 V. Wie der Druck in der Wasserleitung ist die Spannung auch da, wenn gerade kein Gerät läuft.
    </SoHeisstDas>,
    <SoHeisstDas begriff="stromstaerke">
      Wie viel Strom durch die Leitung fließt – der „Durchfluss“. Formelzeichen <strong>I</strong>, Einheit <strong>Ampere (A)</strong>. Sie hängt davon ab, wie viel das
      angeschlossene Gerät gerade braucht.
    </SoHeisstDas>,
    <Wahl
      frage="Auf dem Notebook-Netzteil steht 20 V ⎓ 3,25 A. Was bedeutet das?"
      optionen={[
        { text: 'Es liefert 20 A bei 3,25 V.', warum: 'Schau auf die Einheiten: V gehört zur Spannung, A zur Stromstärke.' },
        { text: 'Es verbraucht 20 V pro Stunde.', warum: 'Volt ist kein Verbrauch, sondern der „Druck“, der den Strom antreibt. Mit Zeit hat die Spannung nichts zu tun.' },
        { text: 'Es treibt mit 20 V an und liefert bis zu 3,25 A.', richtig: true },
      ]}
    >
      <P>
        20 V ist die <B id="spannung" />, 3,25 A die größte <B id="stromstaerke" />, die das Netzteil liefern kann. Wie viel das Notebook davon wirklich zieht, hängt davon
        ab, was es gerade tut.
      </P>
    </Wahl>,
    <P>
      Bleibt die Frage: Was hat das Gerät davon? Wie viel „Kraft“ steckt in 20 V und 3,25 A? Dafür muss man die beiden Angaben zusammenbringen – das ist der nächste Teil.
    </P>,
  ],

  'leistung-pui': () => [
    <P>
      Stell dir ans Ende der Wasserleitung ein Wasserrad. Wann dreht es sich am kräftigsten? Wenn das Wasser mit viel Druck kommt <strong>und</strong> viel davon fließt.
      Wenig Druck oder wenig Durchfluss – dann dreht sich das Rad träge.
    </P>,
    <Wahl
      frage="Du verdoppelst die Spannung, die Stromstärke bleibt gleich. Was passiert mit der Kraft am Rad?"
      optionen={[
        { text: 'Sie bleibt gleich.', warum: 'Der Druck ist doch doppelt so groß – das Wasser trifft das Rad mit mehr Wucht.' },
        { text: 'Sie verdoppelt sich.', richtig: true },
        { text: 'Sie vervierfacht sich.', warum: 'Nur eine der beiden Größen ist doppelt so groß. Die andere bleibt, wie sie ist.' },
      ]}
    >
      <P>Doppelter Druck bei gleichem Durchfluss – doppelte Kraft. Und umgekehrt genauso. Die Kraft am Rad ist also Spannung mal Stromstärke. Prüf es nach:</P>
    </Wahl>,
    <Abbildung>
      <Leitung u={12} i={2} leistung />
    </Abbildung>,
    <SoHeisstDas begriff="leistung">
      Wie viel elektrische Energie ein Gerät in jedem Moment umsetzt – wie kräftig sich das Rad dreht. Formelzeichen <strong>P</strong> (englisch <em>power</em>). Sie ist
      Spannung mal Stromstärke: <strong>P = U · I</strong>.
    </SoHeisstDas>,
    <SoHeisstDas begriff="watt">
      Die Einheit der Leistung, kurz <strong>W</strong>. 1 Watt = 1 Volt · 1 Ampere. 1.000 W sind 1 Kilowatt (kW).
    </SoHeisstDas>,
    <P>Das Handy-Ladegerät vom Anfang, jetzt mit Formel:</P>,
    <Tafel
      zeilen={[
        { name: 'Spannung U', werte: ['5 V'] },
        { name: 'Stromstärke I', werte: ['3 A'] },
        { text: 'P = U · I = 5 V · 3 A = 15 W', ton: 'summe' },
      ]}
    />,
    <Eingabe
      frage="Ein Gerät nimmt an 230 V einen Strom von 0,5 A auf. Welche Leistung nimmt es auf?"
      pruefe={istZahl(115, {
        230.5: 'Du hast addiert. Leistung ist Spannung mal Stromstärke.',
        460: 'Du hast durch 0,5 geteilt. Mal 0,5 heißt: die Hälfte.',
      })}
      tipp="P = U · I, also 230 · 0,5."
      loesung="115 W"
      platzhalter="Watt"
    >
      <P>P = 230 V · 0,5 A = 115 W. Ein halbes Ampere ist die Hälfte von 230 – das kann man sogar im Kopf rechnen.</P>
    </Eingabe>,
    <Eingabe
      frage="Wie viel Leistung kann das Notebook-Netzteil mit 20 V ⎓ 3,25 A höchstens abgeben?"
      pruefe={istZahl(65, { 23.25: 'Du hast addiert. Leistung ist Spannung mal Stromstärke.', 6.15: 'Du hast geteilt. P = U · I – also malnehmen.' }, 0.01)}
      tipp="P = 20 V · 3,25 A."
      loesung="65 W"
      platzhalter="Watt"
    >
      <P>
        20 V · 3,25 A = 65 W. Genau das steht oft groß auf solchen Netzteilen: „65 W“. Jetzt weißt du, woher die Zahl kommt.
      </P>
    </Eingabe>,
  ],

  umstellen: () => [
    <P>
      In Prüfungsaufgaben ist oft nicht die <B id="leistung" /> gesucht, sondern die Stromstärke. Typisch: „Ein Monitor nimmt 60 W auf und hängt an 230 V. Welcher Strom
      fließt?“ Du kennst P und U – aber die Formel fängt mit P an.
    </P>,
    <Wahl
      frage="P = U · I. Was machst du mit 60 W und 230 V, um I zu bekommen?"
      optionen={[
        { text: '60 · 230', warum: 'Dann kämen 13.800 heraus – so viel Strom würde jedes Kabel schmelzen. Gesucht ist die Zahl, die mal 230 genau 60 ergibt.' },
        { text: '230 ÷ 60', warum: 'Fast – aber andersherum. Probe: 230 ÷ 60 ≈ 3,83, und 230 V · 3,83 A wären 881 W, nicht 60 W.' },
        { text: '60 ÷ 230', richtig: true },
      ]}
    >
      <P>
        I = P ÷ U = 60 W ÷ 230 V ≈ 0,26 A. Probe: 230 V · 0,26 A ≈ 60 W. Mit dem Teilen machst du das Malnehmen rückgängig.
      </P>
    </Wahl>,
    <P>
      Damit du dir nicht drei Formeln merken musst, gibt es einen Trick: das Formeldreieck. Oben steht P, unten nebeneinander U und I. Deck ab, was du suchst – der Rest
      zeigt die Rechnung.
    </P>,
    <Abbildung>
      <Formeldreieck oben="P" links="U" rechts="I" namen={PUI} start="I" />
    </Abbildung>,
    <Merke titel="Die Einheiten verraten die Rechnung">
      <strong>W ÷ V = A</strong>, <strong>W ÷ A = V</strong>, <strong>V · A = W</strong>. Wenn am Ende die falsche Einheit herauskommt, hast du falsch umgestellt.
    </Merke>,
    <Eingabe
      frage="Ein Gerät mit 1.150 W hängt an 230 V. Welcher Strom fließt?"
      pruefe={istZahl(5, { 264500: 'Du hast malgenommen. Gesucht ist I = P ÷ U.', 0.2: 'Du hast U ÷ P gerechnet. Die Leistung gehört nach oben: I = P ÷ U.' }, 0.01)}
      tipp="I = P ÷ U = 1.150 W ÷ 230 V."
      loesung="5 A"
      platzhalter="Ampere"
    >
      <P>I = 1.150 W ÷ 230 V = 5 A. Probe: 230 V · 5 A = 1.150 W.</P>
    </Eingabe>,
    <Eingabe
      frage="Eine externe Festplatte nimmt 4,5 W bei 0,9 A auf. Mit welcher Spannung wird sie betrieben?"
      pruefe={istZahl(5, { 4.05: 'Du hast malgenommen. Gesucht ist U = P ÷ I.', 0.2: 'Du hast I ÷ P gerechnet. Die Leistung gehört nach oben: U = P ÷ I.' }, 0.01)}
      tipp="U = P ÷ I = 4,5 W ÷ 0,9 A."
      loesung="5 V"
      platzhalter="Volt"
    >
      <P>U = 4,5 W ÷ 0,9 A = 5 V – die Spannung eines USB-Anschlusses.</P>
    </Eingabe>,
    <P>
      Jetzt weißt du, wie viel Leistung ein Gerät aufnimmt. In einem PC hängen aber viele Bauteile – die Komponenten – an einem einzigen Netzteil. Wie groß muss das sein? Das ist das
      nächste Kapitel.
    </P>,
  ],

  // ---------- Netzteil ----------
  'netzteil-waehlen': () => [
    <P>
      Du stellst einen PC für die Grafikabteilung zusammen. Prozessor, Grafikkarte, Mainboard, Arbeitsspeicher, SSD, Lüfter – jede dieser Komponenten braucht Strom. Und alle
      bekommen ihn aus einem einzigen Kasten hinten im Gehäuse.
    </P>,
    <SoHeisstDas begriff="netzteil">
      Der Kasten, der die 230 V Wechselspannung aus der Steckdose in die kleinen Gleichspannungen umwandelt, die die Komponenten brauchen (12 V, 5 V, 3,3 V). Auf ihm steht,
      wie viel <B id="leistung" /> er höchstens abgeben kann, z. B. 550 W.
    </SoHeisstDas>,
    <SoHeisstDas begriff="leistungsaufnahme">
      Die Leistung, die ein Gerät oder eine Komponente aufnimmt, in Watt. Im Datenblatt steht meist die höchste Leistungsaufnahme – das, was die Komponente unter voller Arbeit
      braucht.
    </SoHeisstDas>,
    <Wahl
      frage="Die Komponenten brauchen zusammen höchstens 400 W. Reicht ein Netzteil mit genau 400 W?"
      optionen={[
        {
          text: 'Ja, das passt genau.',
          warum: 'Rechnerisch ja – aber dann läuft es ständig an seiner Grenze. Was passiert, wenn die Grafikkarte kurz mehr zieht oder du später eine zweite SSD einbaust?',
        },
        { text: 'Nein, es braucht eine Reserve.', richtig: true },
      ]}
    >
      <P>
        Genau. Komponenten ziehen kurzzeitig mehr (Lastspitzen), und vielleicht wird der PC später erweitert. Ein Netzteil an seiner Grenze wird heiß und altert schneller.
        Darum plant man eine Reserve ein.
      </P>
    </Wahl>,
    <SoHeisstDas begriff="zuschlag">
      Die Reserve, die du auf die Summe der Leistungsaufnahmen aufschlägst. Die Aufgabe nennt den Wert, meist 20 % oder 30 %. 30 % Zuschlag heißt: mal 1,3.
    </SoHeisstDas>,
    <P>Das Vorgehen hat drei Schritte: alle Leistungsaufnahmen addieren, den Zuschlag einrechnen, das kleinste Netzteil nehmen, das mindestens so viel liefert.</P>,
    <Abbildung>
      <Netzteilwahl />
    </Abbildung>,
    <Tafel
      zeilen={[
        { text: '125 + 200 + 40 + 10 + 5 + 20' },
        { text: '= 400 W' },
        { text: 'mit 30 %: 400 W · 1,3 = 520 W' },
        { text: 'kleinstes Netzteil: 550 W', ton: 'summe' },
      ]}
    />,
    <Wahl
      frage="Mit Zuschlag kommst du auf 520 W. Es gibt Netzteile mit 500 W, 550 W und 650 W. Welches nimmst du?"
      optionen={[
        { text: '500 W', warum: '500 W liegt näher an 520 W – ist aber kleiner. Das Netzteil muss mindestens 520 W liefern.' },
        { text: '550 W', richtig: true },
        { text: '650 W', warum: 'Das reicht auch, ist aber größer und teurer als nötig. Gesucht ist das kleinste passende.' },
      ]}
    >
      <P>550 W ist das kleinste Netzteil, das mindestens 520 W liefert. Nicht runden – „ungefähr“ reicht beim Netzteil nicht.</P>
    </Wahl>,
    <Eingabe
      frage="Die Komponenten eines PCs nehmen zusammen 350 W auf. Mit 20 % Zuschlag: Wie viel muss das Netzteil mindestens liefern?"
      pruefe={istZahl(420, {
        370: 'Du hast 20 W addiert statt 20 %. 20 % von 350 W sind 70 W.',
        70: 'Das ist nur der Zuschlag. Das Netzteil muss die Komponenten und den Zuschlag liefern.',
        437.5: 'Du hast durch 0,8 geteilt. 20 % Zuschlag heißt mal 1,2.',
      })}
      tipp="350 W · 1,2 = ?"
      loesung="420 W"
      platzhalter="Watt"
    >
      <P>350 W · 1,2 = 420 W. Das Netzteil muss also mindestens 420 W liefern.</P>
    </Eingabe>,
  ],

  verlust: () => [
    <P>
      Fass nach ein paar Stunden Arbeit hinten an den PC, wo das <B id="netzteil" /> sitzt: Es bläst warme Luft heraus. Diese Wärme hat niemand bestellt – und trotzdem
      steht sie auf der Stromrechnung.
    </P>,
    <Wahl
      frage="Das Netzteil gibt 400 W an die Komponenten ab. Wie viel nimmt es aus der Steckdose?"
      optionen={[
        { text: 'weniger als 400 W', warum: 'Das Netzteil kann keine Leistung erzeugen. Was hinten herauskommt, muss vorne auch hinein.' },
        { text: 'genau 400 W', warum: 'Das wäre ein perfektes Netzteil. Aber woher kommt dann die warme Luft?' },
        { text: 'mehr als 400 W', richtig: true },
      ]}
    >
      <P>
        Mehr. Beim Umwandeln von 230 V in 12 V, 5 V und 3,3 V geht immer etwas verloren – als Wärme. Ein gutes Netzteil gibt von 100 W, die es aufnimmt, etwa 80 bis 90 W
        weiter.
      </P>
    </Wahl>,
    <P>
      Man unterscheidet darum zwei Leistungen: die <strong>aufgenommene</strong> Leistung P<sub>zu</sub> (aus der Steckdose, auch zugeführte Leistung) und die{' '}
      <strong>abgegebene</strong> Leistung P<sub>ab</sub> (an die Komponenten). Wie gut ein Netzteil ist, sagt das Verhältnis der beiden.
    </P>,
    <SoHeisstDas begriff="wirkungsgrad">
      Welcher Anteil der aufgenommenen Leistung als nutzbare Leistung herauskommt: <strong>η = P<sub>ab</sub> ÷ P<sub>zu</sub></strong> (η ist der griechische Buchstabe
      „eta“). Angegeben als Dezimalzahl (0,8) oder in Prozent (80 %); er ist immer kleiner als 1.
    </SoHeisstDas>,
    <Abbildung>
      <Netzteil pab={400} eta={80} />
    </Abbildung>,
    <SoHeisstDas begriff="verlustleistung">
      Der Teil der aufgenommenen Leistung, der nicht beim Gerät ankommt: P<sub>zu</sub> − P<sub>ab</sub>. Im Netzteil wird er zu Wärme – darum der Lüfter. Im Bild ist das
      der gestreifte Teil.
    </SoHeisstDas>,
    <P>
      In der Prüfung sind meist P<sub>ab</sub> und η gegeben, gesucht ist P<sub>zu</sub>. Du stellst um wie bei P = U · I: P<sub>zu</sub> = P<sub>ab</sub> ÷ η.
    </P>,
    <Tafel
      zeilen={[
        { text: 'abgegeben 400 W, η = 0,8' },
        { text: 'aufgenommen = 400 W ÷ 0,8' },
        { text: '= 500 W' },
        { text: 'Wärme: 500 W − 400 W = 100 W', ton: 'summe' },
      ]}
    />,
    <Wahl
      frage="Ein Netzteil gibt 300 W ab und hat 90 % Wirkungsgrad. Ein Kollege rechnet: 300 W · 0,9 = 270 W aus der Steckdose. Was stimmt nicht?"
      optionen={[
        { text: 'Man muss mit 90 rechnen, nicht mit 0,9.', warum: '300 · 90 wären 27.000 W. Prozent heißt Hundertstel: 90 % = 0,9 – das war schon richtig.' },
        { text: 'Er muss teilen: 300 W ÷ 0,9.', richtig: true },
        { text: 'Nichts, das stimmt so.', warum: '270 W wären weniger, als das Netzteil abgibt. Es würde Leistung aus dem Nichts erzeugen.' },
      ]}
    >
      <P>
        300 W ÷ 0,9 = 333,33 W. Die schnelle Probe: Die aufgenommene Leistung ist <strong>immer größer</strong> als die abgegebene. Kommt etwas Kleineres heraus, hast du
        malgenommen statt geteilt.
      </P>
    </Wahl>,
    <Eingabe
      frage="Ein Netzteil gibt 450 W ab und hat einen Wirkungsgrad von 90 %. Welche Leistung nimmt es aus dem Netz auf?"
      pruefe={istZahl(
        500,
        {
          405: 'Du hast malgenommen. Die aufgenommene Leistung muss größer sein als die abgegebene: teilen.',
          495: 'Du hast 10 % aufgeschlagen. Die 10 % Verlust beziehen sich aber auf die aufgenommene Leistung, nicht auf die abgegebene – teile durch 0,9.',
        },
        0.01,
      )}
      tipp="aufgenommen = abgegeben ÷ η = 450 W ÷ 0,9."
      loesung="500 W"
      platzhalter="Watt"
    >
      <P>450 W ÷ 0,9 = 500 W. Davon werden 50 W zu Wärme. Für die Stromkosten zählt die aufgenommene Leistung – das ist das, was der Stromzähler sieht.</P>
    </Eingabe>,
  ],

  stufen: () => [
    <P>
      Im Serverraum hängen die Server oft nicht direkt am Netz, sondern an einer <B id="usv" />. Sie hält die Server bei einem Stromausfall mit einem Akku am Laufen. Dafür
      wandelt sie den Strom zweimal um: erst für den Akku (Gleichrichter), dann wieder zurück für die Server (Wechselrichter). Jede Stufe hat ihre Verluste.
    </P>,
    <Wahl
      frage="Beide Stufen haben einen Wirkungsgrad von 90 %. Wie groß ist der Wirkungsgrad der ganzen USV?"
      optionen={[
        { text: '90 %', warum: 'Dann hätte die zweite Stufe keine Verluste. Sie verliert aber auch 10 % – von dem, was bei ihr ankommt.' },
        { text: '80 %', warum: 'Du hast die Verluste addiert (10 % + 10 %). Die zweite Stufe verliert aber 10 % von weniger als dem Ganzen.' },
        { text: '81 %', richtig: true },
      ]}
    >
      <P>Von 1.000 W bleiben nach der ersten Stufe 900 W. Davon gibt die zweite Stufe 90 % weiter: 810 W. Das sind 81 % von 1.000 W. Schau es dir an:</P>
    </Wahl>,
    <Abbildung>
      <Stufen pzu={1000} etas={[90, 90]} namen={['Gleichrichter', 'Wechselrichter']} ziel="an die Server" />
    </Abbildung>,
    <SoHeisstDas begriff="gesamtwirkungsgrad">
      Der <B id="wirkungsgrad" /> mehrerer Stufen, die hintereinandergeschaltet sind. Die Einzelwirkungsgrade werden <strong>multipliziert</strong>: η = η₁ · η₂. Er ist
      immer kleiner als der schlechteste Einzelwirkungsgrad.
    </SoHeisstDas>,
    <P>Mit dem Gesamtwirkungsgrad rechnest du dann genau wie bei einem einzelnen Netzteil:</P>,
    <Tafel
      zeilen={[
        { text: 'η = 0,9 · 0,9 = 0,81' },
        { text: 'aus dem Netz = 810 W ÷ 0,81' },
        { text: '= 1.000 W' },
        { text: 'Wärme: 1.000 W − 810 W = 190 W', ton: 'summe' },
      ]}
    />,
    <Eingabe
      frage="Ein Netzteil (90 %) versorgt einen Spannungswandler (85 %). Wie groß ist der Gesamtwirkungsgrad in Prozent?"
      pruefe={istZahl(
        76.5,
        {
          75: 'Du hast die Verluste addiert (10 % + 15 %). Multipliziere die Wirkungsgrade: 0,9 · 0,85.',
          175: 'Du hast die Wirkungsgrade addiert. Hintereinander wird multipliziert.',
          87.5: 'Das ist der Durchschnitt. Hintereinander wird multipliziert: 0,9 · 0,85.',
          0.765: 'Als Dezimalzahl stimmt das. Gefragt ist der Wert in Prozent.',
        },
        0.01,
      )}
      tipp="η = 0,9 · 0,85 – dann mal 100 für Prozent."
      loesung="76,5 %"
      platzhalter="Prozent"
    >
      <P>0,9 · 0,85 = 0,765 = 76,5 %. Schlechter als jede Stufe allein – jede Stufe nimmt sich ihren Anteil.</P>
    </Eingabe>,
    <Eingabe
      frage="Hinter diesen beiden Stufen brauchen die Komponenten 306 W. Welche Leistung wird aus dem Netz aufgenommen?"
      pruefe={istZahl(400, { 234.09: 'Du hast malgenommen. Aus dem Netz kommt mehr, als hinten ankommt: 306 W ÷ 0,765.' }, 0.01)}
      tipp="aufgenommen = abgegeben ÷ η = 306 W ÷ 0,765."
      loesung="400 W"
      platzhalter="Watt"
    >
      <P>306 W ÷ 0,765 = 400 W. 94 W davon werden in den beiden Stufen zu Wärme.</P>
    </Eingabe>,
    <P>
      Jetzt weißt du, wie viel Leistung wirklich aus der Steckdose kommt. Aber was kostet das? Dafür fehlt noch eine Zutat: die <strong>Zeit</strong>. Das ist das nächste
      Kapitel.
    </P>,
  ],

  // ---------- Energie ----------
  'leistung-zeit': () => [
    <P>
      Eine LED-Lampe hat 10 W, ein Wasserkocher 2.000 W – zweihundertmal so viel. Trotzdem kann die Lampe im Jahr mehr Strom kosten als der Wasserkocher.{' '}
      <strong>Wie geht das?</strong>
    </P>,
    <Wahl
      frage="Wovon hängt es ab, wie viel du für ein Gerät bezahlst?"
      optionen={[
        { text: 'nur von der Leistung in Watt', warum: 'Dann wäre der Wasserkocher immer teurer. Aber er läuft nur ein paar Minuten am Tag …' },
        { text: 'nur davon, wie lange es läuft', warum: 'Eine Stunde Wasserkocher kostet aber viel mehr als eine Stunde LED-Lampe.' },
        { text: 'von Leistung und Laufzeit', richtig: true },
      ]}
    >
      <P>Beides zählt. Ein starkes Gerät, das kurz läuft, kann weniger verbrauchen als ein schwaches, das den ganzen Tag läuft. Probier es aus:</P>
    </Wahl>,
    <Abbildung>
      <Zaehler geraet={0} stunden={24} />
    </Abbildung>,
    <P>
      Die <B id="leistung" /> ist wie die Geschwindigkeit beim Autofahren: Sie sagt, wie viel <em>gerade</em> passiert. Wie weit du insgesamt gekommen bist, hängt
      zusätzlich davon ab, wie lange du fährst. Strecke = Geschwindigkeit · Zeit.
    </P>,
    <SoHeisstDas begriff="energie">
      Leistung über eine Zeit: <strong>W = P · t</strong>. Sie sagt, wie viel ein Gerät insgesamt umgesetzt hat – und genau die bezahlst du. Achtung: Das Formelzeichen
      der Energie ist <strong>W</strong> (von <em>work</em>, Arbeit) – nicht zu verwechseln mit der Einheit Watt.
    </SoHeisstDas>,
    <SoHeisstDas begriff="wattstunde">
      Einheit der Energie, kurz <strong>Wh</strong>: die Energie, die ein Gerät mit 1 W in einer Stunde umsetzt. Watt mal Stunden ergibt Wattstunden: 10 W · 24 h = 240 Wh.
    </SoHeisstDas>,
    <Wahl
      frage="In der Formel W = P · t steht ein W. Auf der Lampe steht „10 W“. Ist das dasselbe?"
      optionen={[
        { text: 'Ja, beides ist Watt.', warum: 'Auf der Lampe ist W die Einheit Watt. In der Formel steht W für eine Größe – welche?' },
        { text: 'Nein: Energie und Watt.', richtig: true },
      ]}
    >
      <P>In der Formel ist W das Formelzeichen der Energie, auf der Lampe ist W die Einheit Watt (Leistung). Gleicher Buchstabe, zwei Bedeutungen – eine beliebte Falle.</P>
    </Wahl>,
    <Eingabe
      frage="Ein Monitor mit 40 W läuft 8 Stunden. Wie viel Energie ist das in Wh?"
      pruefe={istZahl(320, { 5: 'Du hast geteilt. Energie ist Leistung mal Zeit.', 48: 'Du hast addiert. Energie ist Leistung mal Zeit.' })}
      tipp="W = P · t = 40 W · 8 h."
      loesung="320 Wh"
      platzhalter="Wh"
    >
      <P>40 W · 8 h = 320 Wh.</P>
    </Eingabe>,
    <P>Und jetzt das Rätsel vom Anfang. Der Wasserkocher läuft am Tag vielleicht 6 Minuten, das sind 0,1 Stunden – Minuten musst du immer erst in Stunden umrechnen:</P>,
    <Tafel
      zeilen={[
        { text: 'Lampe: 10 W · 24 h = 240 Wh' },
        { text: 'Kocher: 2.000 W · 0,1 h = 200 Wh' },
        { text: 'Die Lampe braucht mehr.', ton: 'summe' },
      ]}
    />,
  ],

  'kwh-kosten': () => [
    <P>
      Auf deiner Stromrechnung steht nicht Wh, sondern kWh – und ein Preis wie <code>0,30 €/kWh</code>. Wattstunden sind für den Alltag einfach zu kleine Einheiten: Ein
      Kühlschrank kommt im Jahr auf rund 150.000 Wh.
    </P>,
    <Wahl
      frage="Wie viele Kilo-Wattstunden sind 150.000 Wh? (Kilo heißt wie bei kg: tausend)"
      optionen={[
        { text: '150.000.000', warum: '1 kg sind 1.000 g – in kg wird die Zahl kleiner, nicht größer.' },
        { text: '1.500', warum: 'Kilo heißt 1.000, nicht 100.' },
        { text: '150', richtig: true },
      ]}
    >
      <P>150.000 Wh ÷ 1.000 = 150 kWh. Wie bei Gramm und Kilogramm.</P>
    </Wahl>,
    <SoHeisstDas begriff="kwh" auch="kWh">
      1.000 Wattstunden. 1 kWh ist die Energie, die bei 1 kW (1.000 W) Leistung in einer Stunde umgesetzt wird. Von Wh zu kWh teilst du durch 1.000.
    </SoHeisstDas>,
    <P>
      Es gibt zwei gleich gute Wege zur Kilowattstunde. Entweder rechnest du erst Wh aus und teilst dann durch 1.000. Oder du machst <strong>vorher</strong> aus Watt
      Kilowatt – dann kommt direkt kWh heraus:
    </P>,
    <Tafel
      zeilen={[
        { text: 'Weg 1: 500 W · 4 h = 2.000 Wh' },
        { text: '2.000 Wh ÷ 1.000 = 2 kWh' },
        { text: 'Weg 2: 0,5 kW · 4 h = 2 kWh', ton: 'summe' },
      ]}
    />,
    <P>
      Bezahlt wird die <B id="energie" />, nicht die Leistung. Der Stromanbieter nennt einen Preis je kWh, und die Kosten sind einfach: <strong>Kosten = kWh · Preis je kWh</strong>.
      Hier kannst du es ausprobieren:
    </P>,
    <Abbildung>
      <Zaehler geraet={2} stunden={10} kosten preis={0.3} />
    </Abbildung>,
    <Eingabe
      frage="Ein Gerät mit 65 W läuft 30 Stunden. Wie viel Energie ist das in kWh?"
      pruefe={istZahl(1.95, { 1950: 'Das sind Wattstunden. Teile noch durch 1.000.', 95: 'Du hast addiert. Energie ist Leistung mal Zeit.' }, 0.001)}
      tipp="65 W · 30 h = ? Wh, dann ÷ 1.000."
      loesung="1,95 kWh"
      platzhalter="kWh"
    >
      <P>65 W · 30 h = 1.950 Wh = 1,95 kWh. Oder: 0,065 kW · 30 h = 1,95 kWh.</P>
    </Eingabe>,
    <Eingabe
      frage="Was kostet das bei 0,32 €/kWh? Runde auf Cent."
      pruefe={istZahl(0.62, { 624: 'Du hast mit Wattstunden gerechnet. Der Preis gilt je kWh – erst durch 1.000 teilen.', 6.09: 'Du hast geteilt. Kosten = kWh mal Preis.' }, 0.006)}
      tipp="1,95 kWh · 0,32 €/kWh."
      loesung="0,62 €"
      platzhalter="Euro"
    >
      <P>1,95 kWh · 0,32 €/kWh = 0,624 € ≈ 0,62 €.</P>
    </Eingabe>,
    <Merke>
      <strong>Watt</strong> ist Leistung: wie viel gerade. <strong>kWh</strong> ist Energie: wie viel insgesamt. Bezahlt wird die Energie.
    </Merke>,
    <P>
      So weit ging es um ein paar Stunden. In der Prüfung geht es meist um ein ganzes Jahr – und um Geräte, die nicht immer gleich viel brauchen. Das ist das nächste
      Kapitel.
    </P>,
  ],

  // ---------- Kosten im Jahr ----------
  betriebsstunden: () => [
    <P>
      Ein kleiner Server im Keller deiner Firma nimmt 150 W auf – weniger als ein Föhn. Er läuft aber Tag und Nacht, das ganze Jahr. <strong>Was kostet das?</strong>
    </P>,
    <P>
      Die Rechnung kennst du: <B id="energie" /> = Leistung · Zeit, Kosten = kWh · Preis. Neu ist nur die Zeit: Wie viele Stunden läuft das Gerät im Jahr?
    </P>,
    <Eingabe
      frage="Der Server läuft jeden Tag 24 Stunden, das ganze Jahr. Wie viele Stunden sind das?"
      pruefe={istZahl(8760, { 365: 'Das sind die Tage. Jeder Tag hat 24 Stunden.', 8640: 'Ein Jahr hat 365 Tage, nicht 360.', 8784: 'Das wäre ein Schaltjahr. Rechne mit 365 Tagen.' })}
      tipp="24 h · 365 Tage."
      loesung="8.760 h"
      platzhalter="Stunden"
    >
      <P>24 h · 365 = 8.760 h. Diese Zahl brauchst du für jedes Gerät im Dauerbetrieb – merk sie dir.</P>
    </Eingabe>,
    <SoHeisstDas begriff="betriebsstunden">
      Die Zeit, die ein Gerät in einem Zeitraum eingeschaltet ist: <strong>Stunden je Tag · Betriebstage</strong>. Dauerbetrieb heißt 24 h an 365 Tagen = 8.760 h. Ein
      Büro-PC läuft eher 8 h an 250 Arbeitstagen = 2.000 h.
    </SoHeisstDas>,
    <Abbildung>
      <Jahr leistung={150} stunden={24} tage={365} preis={0.3} />
    </Abbildung>,
    <P>An der Tafel sieht die Rechnung für den Server so aus – mit der Leistung gleich in kW:</P>,
    <Tafel
      zeilen={[
        { text: '24 h · 365 = 8.760 h' },
        { text: '0,15 kW · 8.760 h = 1.314 kWh' },
        { text: '1.314 kWh · 0,30 €/kWh' },
        { text: '= 394,20 € im Jahr', ton: 'summe' },
      ]}
    />,
    <Eingabe
      frage="Ein Büro-PC mit 90 W läuft 8 Stunden an 230 Tagen im Jahr. Wie viele kWh braucht er im Jahr?"
      pruefe={istZahl(165.6, {
        165600: 'Das sind Wattstunden. Teile noch durch 1.000.',
        0.72: 'Das ist ein Tag. Nimm noch mal 230 Tage.',
        788.4: 'Du hast mit Dauerbetrieb gerechnet. Der PC läuft nur 8 h an 230 Tagen.',
      }, 0.01)}
      tipp="Betriebsstunden: 8 h · 230 = 1.840 h. Dann 0,09 kW · 1.840 h."
      loesung="165,6 kWh"
      platzhalter="kWh"
    >
      <P>8 h · 230 = 1.840 h. 90 W · 1.840 h = 165.600 Wh = 165,6 kWh.</P>
    </Eingabe>,
    <Eingabe
      frage="Was kostet das bei 0,35 €/kWh? Runde auf Cent."
      pruefe={istZahl(57.96, { 57960: 'Du hast mit Wattstunden gerechnet. Der Preis gilt je kWh.', 473.14: 'Du hast geteilt. Kosten = kWh mal Preis.' }, 0.006)}
      tipp="165,6 kWh · 0,35 €/kWh."
      loesung="57,96 €"
      platzhalter="Euro"
    >
      <P>165,6 kWh · 0,35 €/kWh = 57,96 € im Jahr.</P>
    </Eingabe>,
    <P>Bisher lief jedes Gerät immer mit derselben Leistung. Ein Server braucht aber nicht immer gleich viel – darum geht es im nächsten Teil.</P>,
  ],

  'last-leerlauf': () => [
    <P>
      Ein Server rechnet tagsüber, wenn alle arbeiten. Nachts hat er kaum etwas zu tun. Unter Arbeit nimmt er 250 W auf, nachts nur 60 W. Er läuft 8 Stunden mit 250 W und
      16 Stunden mit 60 W.
    </P>,
    <Wahl
      frage="Darf man einfach den Durchschnitt nehmen, (250 W + 60 W) ÷ 2 = 155 W, und damit 24 Stunden rechnen?"
      optionen={[
        { text: 'Ja, das ist der Durchschnitt.', warum: 'Das stimmt nur, wenn er in beiden Zuständen gleich lange läuft. Die 60 W laufen aber doppelt so lange wie die 250 W.' },
        { text: 'Nein, beide Anteile getrennt rechnen.', richtig: true },
      ]}
    >
      <P>
        Richtig. 155 W · 24 h wären 3.720 Wh. Getrennt gerechnet sind es nur 250 W · 8 h + 60 W · 16 h = 2.000 Wh + 960 Wh = 2.960 Wh. Der Durchschnitt hätte fast ein
        Viertel zu viel ergeben.
      </P>
    </Wahl>,
    <SoHeisstDas begriff="last">
      Der Zustand, in dem ein Gerät arbeitet: Ein Server bearbeitet Anfragen, ein PC rechnet. Dann nimmt es seine höhere Leistung auf. Arbeitet es mit allem, was es kann,
      spricht man von Volllast.
    </SoHeisstDas>,
    <SoHeisstDas begriff="leerlauf">
      Das Gerät ist eingeschaltet, hat aber nichts zu tun. Es nimmt dann deutlich weniger Leistung auf als unter Last – aber nicht null.
    </SoHeisstDas>,
    <Abbildung>
      <Jahr leerlauf last={250} leer={60} lastStunden={8} tage={250} preis={0.3} />
    </Abbildung>,
    <P>Das Rezept bleibt dasselbe wie bisher, nur mit zwei Zeilen für den Tag. An der Tafel, für 250 Tage im Jahr:</P>,
    <Tafel
      zeilen={[
        { text: 'Last: 250 W · 8 h = 2.000 Wh' },
        { text: 'Leerlauf: 60 W · 16 h = 960 Wh' },
        { text: 'je Tag: 2.960 Wh' },
        { text: '2.960 Wh · 250 = 740 kWh' },
        { text: '740 kWh · 0,30 €/kWh = 222,00 €', ton: 'summe' },
      ]}
    />,
    <Eingabe
      frage="Ein Server nimmt unter Last 180 W auf, im Leerlauf 40 W. An 220 Tagen läuft er 10 h unter Last und 14 h im Leerlauf. Wie viele kWh braucht er im Jahr?"
      pruefe={istZahl(
        519.2,
        {
          519200: 'Das sind Wattstunden. Teile noch durch 1.000.',
          2.36: 'Das ist ein Tag. Nimm noch mal 220 Tage.',
          580.8: 'Du hast den Durchschnitt der beiden Leistungen genommen. Rechne Last und Leerlauf getrennt.',
          396: 'Das ist nur der Anteil unter Last. Der Leerlauf braucht auch Energie.',
        },
        0.01,
      )}
      tipp="Je Tag: 180 W · 10 h + 40 W · 14 h. Dann mal 220 und ÷ 1.000."
      loesung="519,2 kWh"
      platzhalter="kWh"
    >
      <P>1.800 Wh + 560 Wh = 2.360 Wh je Tag. 2.360 Wh · 220 = 519.200 Wh = 519,2 kWh.</P>
    </Eingabe>,
    <Eingabe
      frage="Was kostet das bei 0,32 €/kWh? Runde auf Cent."
      pruefe={istZahl(166.14, { 166144: 'Du hast mit Wattstunden gerechnet. Der Preis gilt je kWh.' }, 0.006)}
      tipp="519,2 kWh · 0,32 €/kWh."
      loesung="166,14 €"
      platzhalter="Euro"
    >
      <P>519,2 kWh · 0,32 €/kWh = 166,144 € ≈ 166,14 € im Jahr.</P>
    </Eingabe>,
    <P>
      Manchmal steht in der Aufgabe statt Last und Leerlauf eine <strong>Auslastung</strong>, z. B. „läuft das ganze Jahr mit 50 % Auslastung“. Dann nimmst du die
      Leistung mal 0,5 als durchschnittliche Leistung: 400 W · 0,5 = 0,2 kW, · 8.760 h = 1.752 kWh.
    </P>,
    <Merke titel="Rezept Stromkosten im Jahr">
      Je Zustand <strong>Leistung · Stunden</strong>, addieren, <strong>mal Tage</strong>, <strong>÷ 1.000</strong> (kWh), <strong>mal Preis</strong>. Hat das Gerät ein
      Netzteil mit Wirkungsgrad, zählt die aufgenommene Leistung.
    </Merke>,
  ],

  // ---------- Anschlüsse ----------
  steckdose: () => [
    <P>
      Im Büro hängt an einer Mehrfachsteckdose alles, was Strom braucht: zwei Laserdrucker und ein PC. Im Winter steckt jemand noch einen Heizlüfter dazu – und plötzlich
      ist alles dunkel. <strong>Was ist passiert?</strong>
    </P>,
    <P>
      Hinter jeder Steckdose sitzt im Sicherungskasten ein Schutzschalter. Er schaltet ab, wenn mehr als eine bestimmte <B id="stromstaerke" /> fließt – meist 16 A. Die
      Spannung ist 230 V.
    </P>,
    <Eingabe
      frage="Wie viel Leistung darf an dieser Steckdose höchstens hängen?"
      pruefe={istZahl(3680, { 246: 'Du hast addiert. P = U · I – also malnehmen.', 14.375: 'Du hast geteilt. P = U · I – also malnehmen.' }, 0.01)}
      tipp="P = U · I = 230 V · 16 A."
      loesung="3.680 W"
      platzhalter="Watt"
    >
      <P>230 V · 16 A = 3.680 W. Mehr dürfen alle Geräte zusammen nicht aufnehmen.</P>
    </Eingabe>,
    <SoHeisstDas begriff="sicherung">
      Die Schutzeinrichtung, die einen Stromkreis abschaltet, wenn die Stromstärke zu groß wird – hier bei 16 A. Sie schützt die Leitungen davor, heiß zu werden und zu
      brennen.
    </SoHeisstDas>,
    <P>Die Mehrfachsteckdose hängt an genau so einer Steckdose. Steck die Geräte ein und schau, wann es zu viel wird:</P>,
    <Abbildung>
      <Steckdose />
    </Abbildung>,
    <SoHeisstDas begriff="ueberlastung">
      Die angeschlossenen Geräte nehmen zusammen mehr Leistung auf, als der Anschluss liefern darf – hier mehr als 3.680 W. Dann fließt mehr als 16 A, und die{' '}
      <B id="sicherung" /> schaltet ab.
    </SoHeisstDas>,
    <Wahl
      frage="Laserdrucker 1.100 W + Laserdrucker 1.100 W + PC 500 W + Heizlüfter 1.000 W. Ist die Mehrfachsteckdose überlastet?"
      optionen={[
        { text: 'Nein, das passt noch.', warum: 'Rechne die Summe aus und vergleiche sie mit 3.680 W.' },
        { text: 'Ja, überlastet.', richtig: true },
        { text: 'Nur ein bisschen, das hält die Sicherung aus.', warum: 'Knapp drüber ist drüber. Die Sicherung kennt kein „ungefähr“.' },
      ]}
    >
      <P>
        Summe: 3.700 W. Das ist mehr als 3.680 W – überlastet. Als Stromstärke: 3.700 W ÷ 230 V ≈ 16,09 A, also mehr als 16 A. Der Heizlüfter war einer zu viel.
      </P>
    </Wahl>,
    <Merke titel="Nachweis in drei Schritten">
      1. Zulässige Leistung: <strong>230 V · 16 A = 3.680 W</strong>. 2. Leistungsaufnahmen aller Geräte <strong>addieren</strong>. 3. <strong>Vergleichen</strong> und das
      Ergebnis als Satz hinschreiben: „3.700 W &gt; 3.680 W, die Steckdose ist überlastet.“
    </Merke>,
  ],

  usb: () => [
    <P>
      Du schließt eine externe Festplatte an einen alten USB-2.0-Anschluss an. Sie klackert, meldet sich an und wieder ab – und läuft nicht. Am USB-3.0-Anschluss geht sie
      sofort. Kaputt ist sie also nicht. <strong>Was ist los?</strong>
    </P>,
    <SoHeisstDas begriff="usb">
      Die Schnittstelle überträgt nicht nur Daten, sondern versorgt Geräte auch mit Strom. Die <B id="spannung" /> ist immer 5 V. Wie viel Strom ein Anschluss höchstens
      liefert, hängt von der Version ab: USB 2.0 0,5 A, USB 3.0 0,9 A, USB-C bis 3 A.
    </SoHeisstDas>,
    <Eingabe
      frage="Die Festplatte braucht 4,5 W. Welche Stromstärke braucht sie an 5 V?"
      pruefe={istZahl(0.9, { 22.5: 'Du hast malgenommen. Gesucht ist I = P ÷ U.', 1.11: 'Du hast U ÷ P gerechnet. Die Leistung gehört nach oben: I = P ÷ U.' }, 0.01)}
      tipp="I = P ÷ U = 4,5 W ÷ 5 V."
      loesung="0,9 A"
      platzhalter="Ampere"
    >
      <P>I = 4,5 W ÷ 5 V = 0,9 A.</P>
    </Eingabe>,
    <Abbildung>
      <Usb leistung={4.5} anschluss={0} />
    </Abbildung>,
    <Wahl
      frage="Warum läuft die Festplatte am USB-2.0-Anschluss nicht?"
      optionen={[
        { text: 'Die Spannung ist zu niedrig.', warum: 'Alle USB-Anschlüsse liefern dieselben 5 V. Der Unterschied liegt woanders.' },
        { text: 'USB 2.0 ist zu langsam für die Daten.', warum: 'Langsamer schon – aber dann liefe die Platte trotzdem, nur langsamer. Hier fehlt etwas anderes.' },
        { text: 'Sie braucht 0,9 A, der Anschluss liefert nur 0,5 A.', richtig: true },
      ]}
    >
      <P>
        Der Anschluss liefert zu wenig Strom. Die Platte bekommt nicht die Leistung, die sie braucht, und arbeitet gestört oder gar nicht. Abhilfe: ein Anschluss, der mehr
        liefert (USB 3.0, USB-C), oder ein eigenes Netzteil.
      </P>
    </Wahl>,
    <Wahl
      frage="Ein USB-Ventilator braucht 2 W. Reicht ein USB-2.0-Anschluss mit 0,5 A?"
      optionen={[
        { text: 'Nein', warum: 'Rechne nach: I = 2 W ÷ 5 V. Ist das mehr als 0,5 A?' },
        { text: 'Ja', richtig: true },
      ]}
    >
      <P>2 W ÷ 5 V = 0,4 A. Das ist weniger als 0,5 A – der Anschluss reicht.</P>
    </Wahl>,
    <P>Damit hast du alles beisammen, was die Prüfung zu Leistung und Stromkosten fragt. Zum Schluss die Formeln auf einen Blick:</P>,
    <div class="ls-tabelle-huelle">
      <table class="ls-tabelle">
        <thead>
          <tr>
            <th>Was</th>
            <th>Formel und Beispiel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Leistung</td>
            <td class="mono">
              <strong>P = U · I</strong>
              <br />
              230 V · 0,5 A = 115 W
            </td>
          </tr>
          <tr>
            <td>Netzteil</td>
            <td class="mono">
              <strong>Summe · (1 + Zuschlag)</strong>
              <br />
              400 W · 1,3 = 520 W
            </td>
          </tr>
          <tr>
            <td>Wirkungsgrad</td>
            <td class="mono">
              <strong>P<sub>zu</sub> = P<sub>ab</sub> ÷ η</strong>
              <br />
              400 W ÷ 0,8 = 500 W
            </td>
          </tr>
          <tr>
            <td>Stufen</td>
            <td class="mono">
              <strong>η = η₁ · η₂</strong>
              <br />
              0,9 · 0,9 = 0,81
            </td>
          </tr>
          <tr>
            <td>Energie</td>
            <td class="mono">
              <strong>W = P · t</strong>
              <br />
              0,5 kW · 4 h = 2 kWh
            </td>
          </tr>
          <tr>
            <td>Kosten</td>
            <td class="mono">
              <strong>kWh · Preis je kWh</strong>
              <br />
              10 kWh · 0,30 € = 3,00 €
            </td>
          </tr>
          <tr>
            <td>Anschluss</td>
            <td class="mono">
              <strong>I = P ÷ U</strong>
              <br />
              4,5 W ÷ 5 V = 0,9 A
            </td>
          </tr>
        </tbody>
      </table>
    </div>,
  ],
};
