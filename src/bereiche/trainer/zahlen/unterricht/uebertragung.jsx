// Unterricht Übertragungsdauer: je Teil eine Liste von Blöcken (Gliederung in uebertragung.js, Bausteine und Regeln:
// lernsystem/bausteine.jsx und lernsystem/LEITFADEN.md). Jedes Kapitel muss ohne die vorigen verständlich sein.

import { P, Merke, Tafel, Abbildung, Wahl, Eingabe, SoHeisstDas, B } from '../../lernsystem/bausteine.jsx';
import { istZahl, istText } from '../../lernsystem/pruefen.js';
import { Leitung, RateInBit, MengeInBit, Download, Angekommen, Minuten, Dreieck } from '../bilder/uebertragung.jsx';

export const INHALT = {
  // ---------- Menge und Rate ----------
  'pro-sekunde': () => [
    <P>
      Du lädst ein Spiel herunter, der Balken kriecht, und du fragst dich: <strong>Wie lange noch?</strong> Um das auszurechnen, brauchst du zwei Zahlen – und du musst
      genau wissen, was jede von ihnen bedeutet.
    </P>,
    <P>
      Wir fangen ganz klein an: eine winzige Datei aus 24 Bit, also 24 Nullen und Einsen. Sie soll vom Absender über eine Leitung zum Empfänger. Die Leitung schafft{' '}
      <strong>4 Bit in jeder Sekunde</strong>. Drück ein paar Mal auf „1 Sekunde weiter“ und schau zu, was wandert.
    </P>,
    <Abbildung unter="„1 Sekunde weiter“ lässt die Leitung genau eine Sekunde lang arbeiten. Die Regler kommen gleich.">
      <Leitung menge={24} rate={4} />
    </Abbildung>,
    <Wahl
      frage="Nach 3 Sekunden: Wie viele Bit sind beim Empfänger angekommen?"
      optionen={[
        { text: '3', warum: '3 ist die Zeit. In jeder Sekunde kommen aber mehrere Bit an – wie viele?' },
        { text: '7', warum: 'Du hast Zeit und Bit je Sekunde addiert. Es kommen aber in jeder der 3 Sekunden 4 Bit dazu.' },
        { text: '12', richtig: true },
        { text: '24', warum: 'Das ist die ganze Datei. Nach 3 Sekunden ist die Leitung noch nicht fertig.' },
      ]}
    >
      <P>Jede Sekunde 4 Bit, dreimal hintereinander: 3 · 4 = 12 Bit. Die anderen 12 Bit warten noch beim Absender.</P>
    </Wahl>,
    <P>Zwei Zahlen bestimmen, was passiert. Die erste sagt, wie viel überhaupt übertragen werden muss – hier die 24 Bit links.</P>,
    <SoHeisstDas begriff="datenmenge">
      Wie viele Daten übertragen oder gespeichert werden – im Bild die 24 Bit beim Absender. Bei einer Datei ist die Datenmenge ihre Größe, etwa 25 MiB.
    </SoHeisstDas>,
    <SoHeisstDas begriff="uebertragungsrate" auch="Datenrate">
      Wie viele Bit in jeder Sekunde durch die Leitung gehen – im Bild 4 Bit je Sekunde. Die Rate sagt nichts über die Größe der Datei, nur über das Tempo.
    </SoHeisstDas>,
    <P>
      „Pro Sekunde“ heißt also: Die Rate ist kein Vorrat, sondern ein <strong>Tempo</strong>. Wie beim Wasserhahn: „6 Liter pro Minute“ sagt, wie schnell der Eimer voll
      wird – nicht, wie groß der Eimer ist.
    </P>,
    <Wahl
      frage="Dieselbe Datei, aber die Leitung schafft 8 Bit pro Sekunde statt 4. Was ändert sich?"
      optionen={[
        { text: 'Die Übertragung dauert halb so lang.', richtig: true },
        { text: 'Die Datei wird doppelt so groß.', warum: 'Die Datenmenge gehört zur Datei, nicht zur Leitung. 24 Bit bleiben 24 Bit.' },
        { text: 'Die Übertragung dauert doppelt so lang.', warum: 'Mehr Bit je Sekunde heißt schneller, nicht langsamer. Wie viele Sekunden braucht es für 24 Bit, wenn jede Sekunde 8 ankommen?' },
      ]}
    >
      <P>
        Je Sekunde kommen 8 Bit an, nach 3 Sekunden sind alle 24 da – statt nach 6. Doppelte <B id="uebertragungsrate" />, halbe Zeit. Probier es unten mit den Reglern aus.
      </P>
    </Wahl>,
    <Abbildung unter="Datenmenge und Rate einstellen, dann abspielen. Die Uhr läuft in echten Sekunden.">
      <Leitung menge={24} rate={8} regler />
    </Abbildung>,
    <P>Echte Leitungen schaffen aber nicht 4 oder 8 Bit pro Sekunde, sondern viele Millionen. Wie man so große Raten schreibt, kommt im nächsten Teil.</P>,
  ],

  mbit: () => [
    <P>
      Auf deinem Vertrag für den Internetanschluss steht: <strong>100 Mbit/s</strong>. Den hinteren Teil kennst du schon: „/s“ heißt pro Sekunde. Gezählt werden{' '}
      <B id="bit">Bits</B>. Und das M davor ist die Abkürzung für eine große Zahl.
    </P>,
    <Wahl
      frage="Was meinst du – für wie viel steht das M in Mbit/s?"
      optionen={[
        { text: '1.048.576', warum: 'Das ist 1.024 · 1.024 – so rechnet man bei Dateigrößen in MiB. Bei Raten ist das M dezimal.' },
        { text: '1.000.000', richtig: true },
        { text: '1.000', warum: 'Das wäre k (kilo). M (mega) ist noch einmal tausendmal mehr.' },
      ]}
    >
      <P>M steht für Mega, eine Million. 100 Mbit/s sind 100 · 1.000.000 = 100.000.000 Bit in jeder Sekunde.</P>
    </Wahl>,
    <SoHeisstDas begriff="bps">
      Die Einheit der Übertragungsrate, geschrieben bit/s (manchmal bps): so viele Bit gehen je Sekunde durch die Leitung. Davor steht ein{' '}
      <B id="dezimalpraefix" />: k = 1.000, M = 1.000.000, G = 1.000.000.000.
    </SoHeisstDas>,
    <P>Probier es aus: Ändere Zahl und Einheit. Jede Stufe von kbit/s über Mbit/s bis Gbit/s ist genau 1.000-mal größer als die vorige.</P>,
    <Abbildung>
      <RateInBit wert={100} einheit="Mbit/s" />
    </Abbildung>,
    <Eingabe
      frage="Ein DSL-Anschluss hat 16 Mbit/s. Wie viele bit/s sind das?"
      pruefe={istZahl(16000000, {
        16777216: 'Das ist 16 · 1.024². Raten sind dezimal: M = 1.000.000.',
        16000: 'Das wären 16 kbit/s. M heißt Million, nicht Tausend.',
        128000000: 'Du hast mit 8 malgenommen – das braucht man nur, um Byte in Bit umzurechnen. Hier steht schon bit.',
      })}
      tipp="M = 1.000.000, also 16 · 1.000.000."
      loesung="16.000.000 bit/s"
      platzhalter="bit/s"
    >
      <P>16 · 1.000.000 = 16.000.000 bit/s – sechzehn Millionen Bit in jeder Sekunde.</P>
    </Eingabe>,
    <Wahl
      frage="Was ist schneller: 500 Mbit/s oder 1 Gbit/s?"
      optionen={[
        { text: '500 Mbit/s', warum: 'Die Zahl 500 ist größer – aber die Einheiten sind verschieden. Rechne beides in Mbit/s.' },
        { text: '1 Gbit/s', richtig: true },
        { text: 'Beide gleich', warum: '1 Gbit/s sind 1.000 Mbit/s, nicht 500.' },
      ]}
    >
      <P>1 Gbit/s = 1.000 Mbit/s, also doppelt so schnell wie 500 Mbit/s. Vergleichen kannst du nur in derselben Einheit.</P>
    </Wahl>,
  ],

  'byte-oder-bit': () => [
    <P>
      Du hast eine Leitung mit 100 Mbit/s und lädst eine große Datei. Der Browser zeigt aber nur <strong>11,9 MiB/s</strong>. Bekommst du nur einen Bruchteil von dem,
      wofür du bezahlst?
    </P>,
    <Wahl
      frage="Was meinst du – woran liegt das?"
      optionen={[
        { text: 'Der Browser zählt Byte, die Leitung Bit.', richtig: true },
        { text: 'Die Leitung ist zu langsam.', warum: 'Kann sein, muss aber nicht. Schau genau auf die Einheiten: Mbit/s und MiB/s.' },
        { text: 'Der Browser rundet falsch.', warum: 'Gerundet wird nur die letzte Stelle. Der Unterschied ist viel zu groß – fast Faktor 8.' },
      ]}
    >
      <P>
        Genau. Der Browser zählt <B id="byte">Byte</B>, die Leitung zählt Bit. Ein Byte sind 8 Bit.
      </P>
    </Wahl>,
    <P>
      Hier steckt die wichtigste Falle des ganzen Themas. Leitungen werden in <strong>Bit</strong> pro Sekunde angegeben, mit Dezimalpräfix. Dateien werden in{' '}
      <strong>Byte</strong> angegeben – und meist mit <B id="binaerpraefix" />: 1 MiB = 1.024 · 1.024 Byte = 1.048.576 Byte.
    </P>,
    <Abbildung unter="Die Leitung hält, was sie verspricht: 100 Mbit/s sind 11,92 MiB/s.">
      <RateInBit wert={100} einheit="Mbit/s" byte />
    </Abbildung>,
    <P>
      Willst du mit beiden Zahlen rechnen, müssen sie dieselbe Einheit haben. Am sichersten ist <strong>Bit</strong>: Die Rate steht schon in Bit, nur die{' '}
      <B id="datenmenge" /> musst du umrechnen. Erst der Präfix, dann · 8:
    </P>,
    <Abbildung unter="Zahl und Einheit ändern – achte darauf, was zwischen MiB und MB passiert.">
      <MengeInBit wert={5} einheit="MiB" />
    </Abbildung>,
    <Eingabe
      frage="Wie viele Bit sind 2 MiB?"
      pruefe={istZahl(16777216, {
        2097152: 'Das sind die Byte. Ein Byte hat 8 Bit – es fehlt noch · 8.',
        16000000: 'Du hast mit 1.000.000 gerechnet. MiB ist ein Binärpräfix: 1.024².',
        2000000: 'Zwei Fehler: MiB ist binär (1.024²), und Byte werden mit · 8 zu Bit.',
      })}
      tipp="2 · 1.024² ergibt Byte, dann · 8."
      loesung="16.777.216 Bit"
      platzhalter="Bit"
    >
      <P>2 · 1.048.576 = 2.097.152 Byte, · 8 = 16.777.216 Bit.</P>
    </Eingabe>,
    <Wahl
      frage="In einer Aufgabe steht „25 MB“ – ohne i. Wie kommst du auf Bit?"
      optionen={[
        { text: '25 · 1.024² · 8', warum: 'So rechnet man MiB. Steht nur MB da, ist der Präfix dezimal.' },
        { text: '25 · 1.000.000 · 8', richtig: true },
        { text: '25 · 1.000.000', warum: 'MB sind Byte – das · 8 fehlt noch.' },
      ]}
    >
      <P>
        MB ohne i ist dezimal: 25 · 1.000.000 = 25.000.000 Byte, · 8 = 200.000.000 Bit. Steht MiB, GiB oder KiB da, rechnest du mit 1.024.
      </P>
    </Wahl>,
    <Merke titel="Erst alles in Bit">
      Datenmenge: Wert · Präfix (MiB: 1.024², MB: 1.000²) · 8 = Bit. Rate: Wert · Präfix (Mbit/s: 1.000.000) = bit/s.
    </Merke>,
    <P>Jetzt passen beide Zahlen zusammen: Bit und Bit pro Sekunde. Wie man daraus die Dauer ausrechnet, zeigt das nächste Kapitel.</P>,
  ],

  // ---------- Dauer berechnen ----------
  teilen: () => [
    <P>
      Eine Datei soll durch eine Leitung. Zwei Zahlen kennst du: die <B id="datenmenge" /> (wie viel) und die <B id="uebertragungsrate" /> (wie viel je Sekunde).
      Gesucht ist die dritte: <strong>Wie lange dauert es?</strong>
    </P>,
    <P>Zum Ausprobieren eine winzige Datei: 48 Bit über eine Leitung mit 8 Bit pro Sekunde.</P>,
    <Wahl
      frage="Was schätzt du: Nach wie vielen Sekunden sind alle 48 Bit angekommen?"
      optionen={[
        { text: '6 s', richtig: true },
        { text: '8 s', warum: '8 ist die Rate, also Bit je Sekunde. Wie oft passen 8 Bit in 48 Bit?' },
        { text: '384 s', warum: 'Du hast 48 · 8 gerechnet. Mehr Tempo heißt aber weniger Zeit – also teilen, nicht malnehmen.' },
      ]}
    >
      <P>In jeder Sekunde kommen 8 Bit an. Nach 6 Sekunden sind es 6 · 8 = 48 – alle da. Prüf es an der Leitung nach.</P>
    </Wahl>,
    <Abbildung unter="Abspielen und die Uhr beobachten. Mit den Reglern kannst du andere Dateien und Raten ausprobieren.">
      <Leitung menge={48} rate={8} regler formel />
    </Abbildung>,
    <P>
      Die Frage war eigentlich: <strong>Wie oft passt die Rate in die Datenmenge?</strong> Und „wie oft passt das hinein“ ist eine Division: 48 Bit ÷ 8 Bit je Sekunde = 6
      Sekunden.
    </P>,
    <SoHeisstDas begriff="uebertragungsdauer">
      Die Zeit, bis eine Datenmenge vollständig übertragen ist: Datenmenge ÷ Übertragungsrate. Steht die Datenmenge in Bit und die Rate in bit/s, kommt die Dauer in
      Sekunden heraus.
    </SoHeisstDas>,
    <Merke titel="Die Grundformel">
      <strong>Übertragungsdauer = Datenmenge ÷ Übertragungsrate</strong>
    </Merke>,
    <Eingabe
      frage="Eine Datei hat 400 Mbit, die Leitung schafft 100 Mbit/s. Wie viele Sekunden dauert die Übertragung?"
      pruefe={istZahl(4, {
        40000: 'Du hast malgenommen. Die Dauer ist Menge ÷ Rate.',
        0.25: 'Andersherum geteilt: Rate ÷ Menge. Die Datenmenge kommt nach vorn.',
      })}
      tipp="Datenmenge ÷ Rate."
      loesung="4 s"
      platzhalter="Sekunden"
    >
      <P>400 Mbit ÷ 100 Mbit/s = 4 s. Die Mbit fallen weg, übrig bleiben Sekunden – weil beide Zahlen in derselben Einheit stehen.</P>
    </Eingabe>,
    <Wahl
      frage="Warum durftest du hier einfach 400 ÷ 100 rechnen?"
      optionen={[
        { text: 'Weil beide Angaben in Mbit stehen.', richtig: true },
        { text: 'Weil man das immer darf.', warum: 'Nicht, wenn die Datei in MiB und die Rate in Mbit/s steht – dann passen die Einheiten nicht zusammen.' },
      ]}
    >
      <P>
        Genau. In echten Aufgaben steht die Datei aber fast nie in Mbit, sondern in MiB oder GiB. Dann musst du vorher umrechnen – das ist der nächste Teil.
      </P>
    </Wahl>,
  ],

  'alles-in-bit': () => [
    <P>
      Jetzt eine Aufgabe, wie sie in der Prüfung steht: <strong>Eine Datei mit 25 MiB wird über eine Leitung mit 16 Mbit/s übertragen. Wie lange dauert das?</strong>
    </P>,
    <Wahl
      frage="Darfst du einfach 25 ÷ 16 rechnen?"
      optionen={[
        { text: 'Ja, das ergibt 1,56 s.', warum: 'Dann teilst du MiB durch Mbit/s – zwei verschiedene Einheiten. Ein MiB ist nicht dasselbe wie ein Mbit.' },
        { text: 'Nein, erst müssen beide in Bit stehen.', richtig: true },
      ]}
    >
      <P>
        Richtig. MiB zählt <B id="byte">Byte</B> mit <B id="binaerpraefix" />, Mbit/s zählt Bit mit <B id="dezimalpraefix" />. Erst wenn beide in Bit stehen, darfst du
        teilen.
      </P>
    </Wahl>,
    <P>Also in drei Schritten – genau so schreibst du es auch in der Prüfung auf:</P>,
    <Tafel
      zeilen={[
        { text: '1. Datenmenge in Bit' },
        { text: '25 · 1.024² · 8 = 209.715.200 Bit' },
        { text: '2. Rate in bit/s' },
        { text: '16 · 1.000.000 = 16.000.000 bit/s' },
        { text: '3. Teilen' },
        { text: '209.715.200 ÷ 16.000.000' },
        { text: '= 13,1072 s ≈ 13,11 s', ton: 'summe' },
      ]}
    />,
    <P>Erst ganz am Ende wird gerundet, und zwar auf die Stellen, die die Aufgabe verlangt – meist zwei Nachkommastellen.</P>,
    <Wahl
      frage="Jemand rundet unterwegs: 1 MiB ≈ 1,05 Millionen Byte. Er kommt auf 13,13 s statt 13,11 s. Was lernst du daraus?"
      optionen={[
        { text: '13,13 s ist genauer.', warum: 'Gerundete Zwischenwerte machen das Ergebnis ungenauer, nicht genauer – 1,05 Millionen ist mehr als 1.048.576.' },
        { text: 'Nur das Ergebnis runden, nie Zwischenwerte.', richtig: true },
        { text: 'Ist egal, ungefähr reicht.', warum: 'In der Prüfung kostet eine falsche zweite Nachkommastelle Punkte. Woher kommt der Unterschied?' },
      ]}
    >
      <P>Rechne mit den vollen Zahlen bis zum Schluss – im Taschenrechner einfach weiterrechnen – und runde nur das Endergebnis.</P>
    </Wahl>,
    <P>
      Die zwei häufigsten Fehler bei dieser Aufgabe haben beide mit Einheiten zu tun: das <strong>· 8 vergessen</strong> (Byte sind keine Bit) und die{' '}
      <strong>Präfixe verwechseln</strong> (MiB mit 1.000.000 oder Mbit/s mit 1.048.576 rechnen).
    </P>,
    <Eingabe
      frage="Jetzt du: 700 MiB über 16 Mbit/s. Wie viele Sekunden dauert das? Runde auf zwei Nachkommastellen."
      pruefe={istZahl(
        367.0016,
        {
          45.88: 'Das · 8 fehlt: MiB sind Byte, die Rate zählt Bit.',
          350: 'Du hast MiB wie MB gerechnet (1.000.000). MiB ist binär: 1.024².',
          43.75: 'Zwei Fehler: · 8 vergessen und MiB dezimal gerechnet.',
        },
        0.005,
      )}
      tipp="700 · 1.024² · 8 Bit, geteilt durch 16 · 1.000.000 bit/s."
      loesung="367,00 s"
      platzhalter="Sekunden"
    >
      <P>700 · 1.024² · 8 = 5.872.025.600 Bit. Geteilt durch 16.000.000 bit/s ergibt 367,0016 s ≈ 367,00 s – gut sechs Minuten.</P>
    </Eingabe>,
    <P>Hier kannst du selbst Dateien und Leitungen ausprobieren. Der Rechenweg läuft mit:</P>,
    <Abbildung unter="Dateigröße und Rate ändern. Wähl einmal MB statt MiB und vergleich die Dauer.">
      <Download menge={25} einheit="MiB" rate={16} />
    </Abbildung>,
  ],

  minuten: () => [
    <P>
      1 GiB über eine Leitung mit 100 Mbit/s dauert 85,90 s. Das stimmt – aber niemand sagt „fünfundachtzig Komma neun Sekunden“. In der Prüfung heißt es oft:{' '}
      <strong>Gib die Dauer in Minuten und Sekunden an.</strong>
    </P>,
    <Wahl
      frage="Wie viel sind 85,90 s in Minuten und Sekunden?"
      optionen={[
        { text: '1 min 43 s', warum: '85,9 ÷ 60 = 1,43 – aber die ,43 sind Hundertstel Minuten, keine Sekunden.' },
        { text: '1 min 26 s', richtig: true },
        { text: '0 min 86 s', warum: 'Rechnerisch richtig, aber 86 s sind mehr als eine volle Minute. Wie viele Sekunden bleiben nach einer Minute übrig?' },
      ]}
    >
      <P>Erst auf ganze Sekunden runden: 86 s. Eine volle Minute sind 60 s, übrig bleiben 86 − 60 = 26 s. Also 1 min 26 s.</P>
    </Wahl>,
    <P>
      Das kennst du von der Uhr: Volle Päckchen zu 60 Sekunden sind Minuten. Was nicht mehr für ein ganzes Päckchen reicht, sind die Sekunden. Im Bild ist jeder Block eine
      Minute.
    </P>,
    <Abbildung unter="Sekunden eingeben, auch mit Komma (85,9). Jeder volle Block ist eine Minute, der angefangene Block sind die Restsekunden.">
      <Minuten start={130} />
    </Abbildung>,
    <P>
      Rechnerisch ist das eine <B id="ganzzahldivision" /> mit Rest: 130 ÷ 60 = 2 Rest 10, also 2 min 10 s. In C# oder Java schreibst du das als <code>130 / 60</code> (= 2)
      und <code>130 % 60</code> (= 10).
    </P>,
    <Merke titel="Sekunden in Minuten und Sekunden">
      Auf ganze Sekunden runden, dann ÷ 60: Das ganzzahlige Ergebnis sind die Minuten, der Rest die Sekunden. Die Nachkommastellen von „2,17 min“ sind keine Sekunden.
    </Merke>,
    <Eingabe
      frage="700 MiB über 16 Mbit/s dauern 367,00 s. Wie viel ist das in Minuten und Sekunden?"
      pruefe={istText(['6 min 7 s', '6 min 07 s', '6 min 7', '6:07', '6 m 7 s', '6 min 7 sek', '6 Minuten 7 Sekunden'], {
        '6 min 12 s': '367 ÷ 60 = 6,12 – die ,12 sind Hundertstel Minuten. Wie viele Sekunden bleiben nach 6 vollen Minuten?',
        '6,12 min': 'Das stimmt als Kommazahl, gefragt sind aber Minuten und Sekunden. Was bleibt nach 6 · 60 Sekunden übrig?',
        '6,12': 'Das stimmt als Kommazahl, gefragt sind aber Minuten und Sekunden. Was bleibt nach 6 · 60 Sekunden übrig?',
        '367 s': 'Das sind die Sekunden. Wie viele volle Minuten stecken darin?',
      })}
      tipp="367 ÷ 60 = 6 Rest … – schreib es als „6 min … s“."
      loesung="6 min 7 s"
      platzhalter="z. B. 1 min 26 s"
      breit
    >
      <P>6 · 60 = 360 s, Rest 367 − 360 = 7 s. Also 6 min 7 s.</P>
    </Eingabe>,
    <Wahl
      frage="Und rückwärts: Wie viele Sekunden sind 2 min 30 s?"
      optionen={[
        { text: '230 s', warum: 'Minuten und Sekunden kann man nicht einfach nebeneinanderschreiben – eine Minute hat 60 s, nicht 100.' },
        { text: '150 s', richtig: true },
        { text: '2,30 min', warum: 'Eine halbe Minute sind 30 s. 2 min 30 s sind also 2,5 min, nicht 2,30 min.' },
      ]}
    >
      <P>2 · 60 + 30 = 150 s. Rückwärts geht es also mit · 60 und plus.</P>
    </Wahl>,
    <P>
      Bisher war immer die Dauer gesucht. In der Prüfung wird auch andersherum gefragt: Wie schnell muss die Leitung sein? Und wie viel schafft sie in einer Minute? Das ist
      das nächste Kapitel.
    </P>,
  ],

  // ---------- Rate und Menge ----------
  'rate-gesucht': () => [
    <P>
      Eine Firma sichert jede Nacht <strong>500 MiB</strong> auf einen Server in einem anderen Gebäude. Die Sicherung darf <strong>höchstens 60 Sekunden</strong> dauern.
      Welcher Anschluss reicht dafür?
    </P>,
    <P>
      Diesmal ist nicht die Dauer gesucht, sondern die <B id="uebertragungsrate" />. Probier es zuerst aus: Schieb den Regler, bis die Vorgabe erfüllt ist.
    </P>,
    <Abbildung unter="Rate verschieben, bis die Sicherung in höchstens 60 s fertig ist.">
      <Download menge={500} einheit="MiB" rate={50} ziel={60} />
    </Abbildung>,
    <Wahl
      frage="Welche ist die kleinste Rate im Regler, die reicht?"
      optionen={[
        { text: '50 Mbit/s', warum: 'Bei 50 Mbit/s dauert es 83,89 s – mehr als eine Minute.' },
        { text: '100 Mbit/s', richtig: true },
        { text: '1.000 Mbit/s', warum: 'Die reicht natürlich – aber gefragt ist die kleinste Rate, die reicht. Gibt es eine kleinere?' },
      ]}
    >
      <P>Mit 100 Mbit/s dauert es 41,94 s, das reicht. 50 Mbit/s sind zu wenig. Die genaue Grenze liegt irgendwo dazwischen – die rechnen wir jetzt aus.</P>
    </Wahl>,
    <P>
      Die Grundformel lautet Dauer = Datenmenge ÷ Rate. Umgestellt nach der Rate: <strong>Rate = Datenmenge ÷ Dauer</strong>. Die Datenmenge wird auf die Sekunden
      verteilt: Wie viele Bit müssen in jeder Sekunde durch die Leitung?
    </P>,
    <Tafel
      zeilen={[
        { text: '500 · 1.024² · 8' },
        { text: '= 4.194.304.000 Bit' },
        { text: '4.194.304.000 Bit ÷ 60 s' },
        { text: '= 69.905.066,67 bit/s' },
        { text: '÷ 1.000.000 ≈ 69,91 Mbit/s', ton: 'summe' },
      ]}
    />,
    <SoHeisstDas begriff="bandbreite">
      Im IT-Alltag die höchste Übertragungsrate, die eine Leitung oder ein Anschluss schafft – „ein Anschluss mit 100 Mbit/s Bandbreite“. Die ausgerechnete Rate ist eine
      Untergrenze: Die Bandbreite muss mindestens so groß sein. Streng genommen ist Bandbreite ein Frequenzbereich in Hertz; in Aufgaben ist aber fast immer die Rate gemeint.
    </SoHeisstDas>,
    <Eingabe
      frage="Eine Datei mit 2 GiB soll in 120 s übertragen werden. Welche Rate in Mbit/s ist mindestens nötig? Runde auf zwei Nachkommastellen."
      pruefe={istZahl(
        143.16557653333334,
        {
          17.895697: 'Das · 8 fehlt: GiB sind Byte, die Rate zählt Bit.',
          133.333333: 'Du hast GiB wie GB gerechnet (1.000³). GiB ist binär: 1.024³.',
          136.533333: 'Am Ende durch 1.048.576 geteilt? Mbit/s ist dezimal: ÷ 1.000.000.',
        },
        0.005,
      )}
      tipp="2 · 1.024³ · 8 Bit ÷ 120 s ergibt bit/s, dann ÷ 1.000.000."
      loesung="143,17 Mbit/s"
      platzhalter="Mbit/s"
    >
      <P>2 · 1.024³ · 8 = 17.179.869.184 Bit. ÷ 120 s = 143.165.576,53 bit/s. ÷ 1.000.000 ≈ 143,17 Mbit/s.</P>
    </Eingabe>,
    <Wahl
      frage="Zur Auswahl stehen Anschlüsse mit 100, 150 und 250 Mbit/s. Welchen nimmst du für die 2 GiB in 120 s?"
      optionen={[
        { text: '100 Mbit/s', warum: 'Weniger als die nötigen 143,17 Mbit/s – die Datei bräuchte länger als 120 s.' },
        { text: '150 Mbit/s', richtig: true },
        { text: '250 Mbit/s', warum: 'Der reicht auch, ist aber größer als nötig. Gesucht ist der kleinste, der reicht.' },
      ]}
    >
      <P>
        150 Mbit/s ist die kleinste <B id="bandbreite" />, die über 143,17 Mbit/s liegt. Bei einer Mindestrate gehst du im Zweifel nach oben, nie nach unten.
      </P>
    </Wahl>,
  ],

  'menge-gesucht': () => [
    <P>
      Andersherum gefragt: Eine Leitung mit <strong>16 Mbit/s</strong> ist <strong>eine Minute</strong> lang voll ausgelastet. Wie viele MiB sind danach beim Empfänger?
    </P>,
    <Wahl
      frage="Wie kommst du an die Datenmenge?"
      optionen={[
        { text: 'Rate ÷ Dauer', warum: 'Dann würde die Menge kleiner, je länger die Leitung läuft. Es kommt aber mehr an, je länger sie läuft.' },
        { text: 'Rate · Dauer', richtig: true },
        { text: 'Dauer ÷ Rate', warum: 'Das wären Sekunden je Bit – eine seltsame Größe. Denk an „pro Sekunde“: Jede Sekunde kommt die Rate dazu.' },
      ]}
    >
      <P>
        Jede Sekunde kommen 16.000.000 Bit an, und das 60 Sekunden lang. Also: <strong>Datenmenge = Übertragungsrate · Dauer</strong>.
      </P>
    </Wahl>,
    <P>
      Das Ergebnis steht dann in Bit. Gefragt ist aber MiB – du rechnest also rückwärts: erst ÷ 8 in <B id="byte">Byte</B>, dann ÷ 1.024² in MiB.
    </P>,
    <Tafel
      zeilen={[
        { text: '16.000.000 bit/s · 60 s' },
        { text: '= 960.000.000 Bit' },
        { text: '÷ 8 = 120.000.000 Byte' },
        { text: '÷ 1.024² ≈ 114,44 MiB', ton: 'summe' },
      ]}
    />,
    <Abbildung unter="Rate und Dauer verschieben. Abspielen zeigt, wie die Datenmenge Sekunde für Sekunde wächst.">
      <Angekommen rate={16} dauer={60} />
    </Abbildung>,
    <Eingabe
      frage="Eine Leitung mit 100 Mbit/s ist 30 Sekunden lang voll ausgelastet. Wie viele MiB wurden übertragen? Runde auf zwei Nachkommastellen."
      pruefe={istZahl(
        357.62786865234375,
        {
          2861.022949: 'Das ÷ 8 fehlt: Das Ergebnis in Bit muss erst in Byte.',
          375: 'Du hast durch 1.000.000 geteilt – das wären MB. Für MiB teilst du durch 1.024².',
          3000: 'Das sind Mbit. Bit ÷ 8 ergibt Byte, dann ÷ 1.024² ergibt MiB.',
          3.333333: 'Das ist Rate ÷ Dauer. Die Datenmenge ist Rate · Dauer.',
        },
        0.005,
      )}
      tipp="100 · 1.000.000 · 30 Bit, dann ÷ 8 und ÷ 1.024²."
      loesung="357,63 MiB"
      platzhalter="MiB"
    >
      <P>100.000.000 bit/s · 30 s = 3.000.000.000 Bit. ÷ 8 = 375.000.000 Byte. ÷ 1.048.576 ≈ 357,63 MiB.</P>
    </Eingabe>,
  ],

  dreieck: () => [
    <P>
      Drei Größen, drei Fragen – aber du musst dir nur <strong>eine</strong> Formel merken: <strong>Datenmenge = Übertragungsrate · Dauer</strong>. Die beiden anderen
      bekommst du durch Umstellen. Ein Merkbild dafür ist das Dreieck: oben die Datenmenge, unten Rate und Dauer nebeneinander.
    </P>,
    <Abbildung unter="Tipp an, was gesucht ist – was übrig bleibt, ist die Rechnung. Übereinander heißt geteilt, nebeneinander heißt mal.">
      <Dreieck start="dauer" />
    </Abbildung>,
    <Wahl
      frage="Gegeben sind Datenmenge und Dauer, gesucht ist die Rate. Wie rechnest du?"
      optionen={[
        { text: 'Datenmenge ÷ Dauer', richtig: true },
        { text: 'Datenmenge · Dauer', warum: 'Nebeneinander stehen im Dreieck nur Rate und Dauer. Deck die Rate ab: Was bleibt übrig?' },
        { text: 'Dauer ÷ Datenmenge', warum: 'Die Datenmenge steht oben, also über dem Bruchstrich – sie kommt nach vorn.' },
      ]}
    >
      <P>Deckst du die Rate ab, bleibt Datenmenge über Dauer: Rate = Datenmenge ÷ Dauer.</P>
    </Wahl>,
    <Merke titel="Eine Formel, drei Formen">
      Datenmenge = Rate · Dauer · Dauer = Datenmenge ÷ Rate · Rate = Datenmenge ÷ Dauer – immer mit Bit und bit/s.
    </Merke>,
    <P>
      Zum Schluss eine Aufgabe wie in der Prüfung, mit allem, was dazugehört: <strong>Eine 2 GiB große Datei wird über eine Leitung mit 50 Mbit/s übertragen. Wie lange
      dauert das in Minuten und Sekunden?</strong>
    </P>,
    <Wahl
      frage="Welche zwei Umrechnungen brauchst du vor dem Teilen?"
      optionen={[
        { text: '2 · 1.000³ · 8 und 50 · 1.024²', warum: 'Genau verkehrt herum: Die Datei steht in GiB (binär), die Rate in Mbit/s (dezimal).' },
        { text: '2 · 1.024³ · 8 und 50 · 1.000.000', richtig: true },
        { text: '2 · 1.024³ und 50 · 1.000.000', warum: 'GiB sind Byte – ohne · 8 teilst du Byte durch Bit.' },
      ]}
    >
      <P>Datenmenge: 2 · 1.024³ · 8 = 17.179.869.184 Bit. Rate: 50 · 1.000.000 = 50.000.000 bit/s.</P>
    </Wahl>,
    <Eingabe
      frage="Wie lange dauert es? Gib Minuten und Sekunden an."
      pruefe={istText(['5 min 44 s', '5 min 44', '5:44', '5 m 44 s', '5 min 44 sek', '5 Minuten 44 Sekunden'], {
        '5 min 43 s': 'Fast: 343,60 s rundest du auf 344 s, bevor du in Minuten umrechnest.',
        '5 min 73 s': '343,6 ÷ 60 ≈ 5,73 – die ,73 sind Hundertstel Minuten, keine Sekunden.',
        '5 min 20 s': '320 s kommen heraus, wenn du GiB wie GB rechnest. GiB ist binär: 1.024³.',
        '0 min 43 s': 'Das · 8 fehlt: GiB sind Byte, die Rate zählt Bit.',
        '43 s': 'Das · 8 fehlt: GiB sind Byte, die Rate zählt Bit.',
      })}
      tipp="17.179.869.184 ÷ 50.000.000 ergibt Sekunden, dann ÷ 60 mit Rest."
      loesung="5 min 44 s"
      platzhalter="z. B. 1 min 26 s"
      breit
    >
      <P>17.179.869.184 ÷ 50.000.000 = 343,60 s ≈ 344 s. 344 ÷ 60 = 5 Rest 44, also 5 min 44 s.</P>
    </Eingabe>,
    <P>
      Damit hast du alles beisammen: Einheiten angleichen, die passende Form der Formel wählen, erst am Ende runden und in Minuten und Sekunden angeben. Sicher wird es durch
      Üben – mit neuen Zahlen bei jeder Aufgabe.
    </P>,
  ],
};
