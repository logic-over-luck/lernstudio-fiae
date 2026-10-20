// Unterricht Zahlensysteme: je Teil eine Liste von Blöcken (Gliederung in zahlensysteme.js, Bausteine und Regeln:
// lernsystem/bausteine.jsx und lernsystem/LEITFADEN.md). Jedes Kapitel muss ohne die vorigen verständlich sein.

import { P, Zwischentitel, Merke, Tafel, Abbildung, Wahl, Eingabe, SoHeisstDas, B } from '../../lernsystem/bausteine.jsx';
import { istZahl, istBinaer, istHex, istText } from '../../lernsystem/pruefen.js';
import { Stellenwert, Lesen, Schreiben, Gruppen, Potenzen, Lampen, Zaehlwerk, PasstEsNoch, Kombinationen, HexTabelle, JeBasis } from '../bilder/zahlensysteme.jsx';

export const INHALT = {
  // ---------- Grundlagen ----------
  'zwei-zustaende': () => [
    <P>
      Bevor wir irgendetwas umrechnen, eine Frage, die sich kaum jemand stellt: <strong>Woher weiß ein Computer überhaupt, was eine Zahl ist?</strong>
    </P>,
    <P>
      Im Inneren eines Computers sitzen Milliarden winziger Schalter (Transistoren). Jeder davon kann genau zwei Dinge: Strom fließt – oder Strom fließt nicht. Stell dir
      jeden Schalter wie eine kleine Lampe vor: <strong>an</strong> oder <strong>aus</strong>. Für „aus“ schreiben wir <code>0</code>, für „an“ <code>1</code>.
    </P>,
    <Abbildung>
      <Lampen anzahl={1} />
    </Abbildung>,
    <Wahl
      frage="Wie viele verschiedene Zustände kann eine einzelne Lampe anzeigen?"
      optionen={[
        { text: '1', warum: 'Sie kann aber an sein und aus sein – das sind schon mehr.' },
        { text: '2', richtig: true },
        { text: '10', warum: 'Dafür bräuchte sie zehn Helligkeitsstufen. Unsere Lampe kennt nur an und aus.' },
      ]}
    >
      <P>Genau: an oder aus, 1 oder 0. Mehr kann ein einzelner Schalter nicht speichern.</P>
    </Wahl>,
    <SoHeisstDas begriff="bit">
      Ein Bit ist die <strong>kleinste Informationseinheit</strong>: eine Stelle, die nur 0 oder 1 sein kann – wie unsere Lampe. Der Name kommt von <em>binary digit</em>,
      „zweiwertige Ziffer“.
    </SoHeisstDas>,
    <P>
      Jetzt das Problem: Wir Menschen schreiben Zahlen mit <strong>zehn</strong> verschiedenen Zeichen, 0 bis 9. Wie soll ein Computer mit nur 0 und 1 die Zahl 200
      speichern?
    </P>,
    <P>
      Die Antwort ist verblüffend einfach. Aber um sie zu sehen, schauen wir uns zuerst etwas an, das du jeden Tag machst, ohne je darüber nachzudenken: <strong>zählen</strong>.
    </P>,
  ],

  zaehlen: () => [
    <P>
      Denk an einen alten Kilometerzähler im Auto oder an einen Wasserzähler: ein paar Rädchen nebeneinander, jedes mit den Zeichen 0 bis 9. Drück ein paar Mal auf
      „1 weiterzählen“ und schau genau hin, was beim Sprung von 9 auf 10 passiert.
    </P>,
    <Abbildung>
      <Zaehlwerk basis={10} stellen={3} start={7} spruenge={[99, 199]} />
    </Abbildung>,
    <Wahl
      frage="Der Zähler steht auf 199. Was zeigt er nach einem Schritt?"
      optionen={[
        { text: '1910', warum: 'Auf ein Rädchen passt nur ein Zeichen. Die 9 kann nicht zur 10 werden – sie springt auf 0 und gibt eins nach links weiter.' },
        { text: '190', warum: 'Das rechte Rädchen springt auf 0 – richtig. Aber das linke daneben wird weitergedreht, und das steht auch schon auf 9.' },
        { text: '200', richtig: true },
      ]}
    >
      <P>Rechts: 9 → 0, das mittlere Rädchen wird weitergedreht. Mitte: 9 → 0, das linke wird weitergedreht. Links: 1 → 2. Ergebnis 200.</P>
    </Wahl>,
    <SoHeisstDas begriff="uebertrag">
      Ist ein Rädchen voll (es steht auf dem größten Zeichen, hier 9), springt es beim Weiterzählen auf 0 und dreht das Rädchen links daneben um eins weiter. Bei 199 → 200
      passiert das gleich zweimal hintereinander.
    </SoHeisstDas>,
    <P>Jetzt geben wir den Teilen des Zählers ihre Fachnamen. Hier ist derselbe Zähler noch einmal – diesmal beschriftet:</P>,
    <Abbildung>
      <Zaehlwerk basis={10} stellen={3} start={352} beschriftet />
    </Abbildung>,
    <SoHeisstDas begriff="ziffer">
      Die Zeichen, aus denen man Zahlen schreibt: 0, 1, 2 … 9. Was auf einem Rädchen steht, ist <strong>eine</strong> Ziffer. Achtung: Ziffer ist nicht dasselbe wie
      Zahl. Die Zahl 352 besteht aus den drei Ziffern 3, 5 und 2.
    </SoHeisstDas>,
    <SoHeisstDas begriff="stelle">
      Der Platz, an dem eine Ziffer steht – ein Rädchen. Gezählt wird <strong>von rechts</strong>, und die rechte Stelle hat die Nummer <strong>0</strong>. In 352 steht die
      2 an Stelle 0, die 5 an Stelle 1, die 3 an Stelle 2.
    </SoHeisstDas>,
    <Wahl
      frage="An welcher Stelle steht die 7 in der Zahl 4.721?"
      optionen={[
        { text: 'Stelle 1', warum: 'Du hast von links gezählt. Stellen zählt man von rechts.' },
        { text: 'Stelle 3', warum: 'Fast – du zählst von rechts, aber die rechte Stelle hat die Nummer 0, nicht 1.' },
        { text: 'Stelle 2', richtig: true },
      ]}
    >
      <P>Von rechts: die 1 steht an Stelle 0, die 2 an Stelle 1, die 7 an Stelle 2, die 4 an Stelle 3.</P>
    </Wahl>,
    <P>
      Jetzt der wichtigste Gedanke dieses Kapitels. Wie oft musst du weiterzählen, bis sich das Rädchen an Stelle 1 einmal bewegt? Zehnmal. Und das an Stelle 2? Erst wenn
      Stelle 1 zehnmal herum ist, also nach 10 · 10 = <strong>100</strong> Schritten.
    </P>,
    <P>
      Jede Stelle zählt also in anderen Schritten: Ein Schritt an Stelle 0 ist 1 wert, an Stelle 1 ist er 10 wert, an Stelle 2 ist er 100 wert. Darum ist die 3 in 352 so
      viel mehr wert als die 2.
    </P>,
    <SoHeisstDas begriff="stellenwert">
      Wie viel eine Stelle wert ist: 1, 10, 100, 1.000 … von rechts. Eine Ziffer trägt <strong>Ziffer · Stellenwert</strong> zum Wert der Zahl bei. Die Ziffer sagt „wie
      viele“, der Stellenwert sagt „wovon“.
    </SoHeisstDas>,
    <P>Alles zusammen an der Zahl 352 – so sieht das an der Tafel aus:</P>,
    <Tafel
      zeilen={[
        { name: 'Stelle', werte: ['2', '1', '0'] },
        { name: 'Stellenwert', werte: ['100', '10', '1'], ton: 'oben' },
        { name: 'Ziffer', werte: ['3', '5', '2'] },
        { name: 'Ziffer · Stellenwert', werte: ['300', '50', '2'] },
        { text: '300 + 50 + 2 = 352', ton: 'summe' },
      ]}
    />,
    <Wahl
      frage="Was ist die 4 in der Zahl 4.721 wert?"
      optionen={[
        { text: '4', warum: 'Das ist nur die Ziffer. Gefragt ist Ziffer · Stellenwert – an welcher Stelle steht die 4?' },
        { text: '40', warum: 'Das wäre die 4 an Stelle 1. Sie steht aber an Stelle 3.' },
        { text: '400', warum: 'Das wäre Stelle 2. Zähl noch einmal von rechts ab 0: 1 → Stelle 0, 2 → Stelle 1, 7 → Stelle 2, 4 → …' },
        { text: '4.000', richtig: true },
      ]}
    >
      <P>
        Die 4 steht an Stelle 3, der <B id="stellenwert" /> ist 1.000. Ziffer · Stellenwert = 4 · 1.000 = 4.000.
      </P>
    </Wahl>,
  ],

  basis: () => [
    <P>
      Eine Frage ist noch offen: Warum wächst der <B id="stellenwert" /> von Stelle zu Stelle gerade mal 10 – und nicht mal 5 oder mal 2?
    </P>,
    <Wahl
      frage="Warum ist jede Stelle 10-mal so viel wert wie die rechts daneben?"
      optionen={[
        { text: 'Weil 10 eine schöne runde Zahl ist.', warum: 'Rund ist sie nur, weil wir mit ihr aufgewachsen sind. Denk an das Rädchen: Wann dreht es das linke weiter?' },
        { text: 'Weil der Zähler drei Rädchen hat.', warum: 'Mit vier Rädchen wäre es genauso mal 10. Es liegt an jedem einzelnen Rädchen.' },
        { text: 'Weil jedes Rädchen 10 Ziffern hat.', richtig: true },
      ]}
    >
      <P>
        Genau: Ein Rädchen mit 10 Ziffern (0 bis 9) ist nach 10 Schritten voll und macht einen <B id="uebertrag" />. Die Anzahl der Ziffern bestimmt also, um welchen Faktor
        der Stellenwert wächst.
      </P>
    </Wahl>,
    <SoHeisstDas begriff="basis">
      Die Anzahl der Ziffern eines Zahlensystems. Sie legt zwei Dinge fest: welche Ziffern es gibt (0 bis Basis − 1, bei uns 0 bis 9) und um welchen Faktor der
      Stellenwert von Stelle zu Stelle wächst (bei uns mal 10).
    </SoHeisstDas>,
    <P>
      Mal 10, mal 10, mal 10 – für wiederholtes Malnehmen gibt es eine Kurzschrift: 10 · 10 = 10², 10 · 10 · 10 = 10³. Die kleine Hochzahl sagt, wie oft man die Basis
      malnimmt. Damit lässt sich jeder Stellenwert aus der Stellennummer ablesen:
    </P>,
    <Tafel
      zeilen={[
        { name: 'Stelle', werte: ['3', '2', '1', '0'] },
        { name: 'als Potenz', werte: ['10³', '10²', '10¹', '10⁰'] },
        { name: 'Stellenwert', werte: ['1.000', '100', '10', '1'], ton: 'oben' },
      ]}
    />,
    <SoHeisstDas begriff="potenz">
      Kurzschrift für wiederholtes Malnehmen: 10³ = 10 · 10 · 10. Der Stellenwert von Stelle n ist <strong>Basis hoch n</strong>. Und weil die Einerstelle die Nummer 0 hat,
      gilt: 10⁰ = 1 – jede Zahl hoch 0 ist 1.
    </SoHeisstDas>,
    <Eingabe
      frage="Welchen Stellenwert hat Stelle 4 im Dezimalsystem?"
      pruefe={istZahl(10000, {
        1000: 'Das ist Stelle 3. Denk daran: Die rechte Stelle hat die Nummer 0.',
        4: 'Das ist die Nummer der Stelle. Gefragt ist ihr Stellenwert: 10 hoch 4.',
        40: '10 hoch 4 heißt 10 · 10 · 10 · 10, nicht 10 · 4.',
      })}
      tipp="Stellenwert = Basis hoch Stellennummer, also 10⁴."
      loesung="10.000"
      platzhalter="Stellenwert"
    >
      <P>10⁴ = 10 · 10 · 10 · 10 = 10.000.</P>
    </Eingabe>,
    <P>Jetzt haben wir alle Teile beisammen, um zu sagen, was für ein System unsere Zahlen eigentlich sind:</P>,
    <SoHeisstDas begriff="stellenwertsystem">
      Ein Zahlensystem, in dem der Wert einer <B id="ziffer" /> von ihrer <B id="stelle" /> abhängt. Der Wert der Zahl ist die Summe aus Ziffer · Stellenwert.
    </SoHeisstDas>,
    <SoHeisstDas begriff="dezimalsystem">
      Unser gewohntes Stellenwertsystem mit der <B id="basis" /> 10 (lateinisch <em>decem</em> = zehn): Ziffern 0 bis 9, Stellenwerte 1, 10, 100, 1.000 …
    </SoHeisstDas>,
    <Wahl
      frage="Was wäre, wenn jedes Rädchen nur die Ziffern 0 und 1 hätte – wie ein Bit?"
      optionen={[
        { text: 'Dann ginge Zählen nicht.', warum: 'Doch – der Übertrag käme nur viel früher. Was passiert nach der 1?' },
        { text: 'Der Übertrag käme schon nach der 1.', richtig: true },
      ]}
    >
      <P>
        Genau: Das Rädchen wäre schon nach zwei Schritten voll. Die Basis wäre 2, und jede Stelle wäre doppelt so viel wert wie die rechts daneben. So zählt der Computer –
        das ist das nächste Kapitel, <strong>Binär</strong>.
      </P>
    </Wahl>,
  ],

  // ---------- Binär ----------
  'binaer-zaehlen': () => [
    <P>
      Ein Computer kennt nur zwei Zustände: Jedes <B id="bit" /> ist 0 oder 1. Wie speichert er damit eine Zahl wie 200, für die wir drei Ziffern aus zehn möglichen
      brauchen? Die Antwort steckt in etwas, das du schon kennst: dem Zählwerk.
    </P>,
    <P>
      Ein Zählwerk hat Rädchen mit den Ziffern 0 bis 9. Ist ein Rädchen bei der 9, springt es auf 0 und dreht das linke eins weiter – ein <B id="uebertrag" />. Und jetzt
      der Trick: Was wäre, wenn jedes Rädchen nur <strong>zwei</strong> Ziffern hätte, 0 und 1 – genau wie ein Bit?
    </P>,
    <P>Probier es aus. Zähl weiter und beobachte, wann ein Übertrag passiert. Rechts siehst du, die wievielte Zahl das gerade ist.</P>,
    <Abbildung>
      <Zaehlwerk basis={2} stellen={4} start={0} spruenge={[7]} dezimal />
    </Abbildung>,
    <Wahl
      frage="Der Zähler zeigt 0111. Was zeigt er nach einem Schritt?"
      optionen={[
        { text: '0112', warum: 'Eine 2 gibt es auf diesen Rädchen nicht. Nach der 1 kommt sofort der Übertrag.' },
        { text: '0110', warum: 'Weiterzählen macht die Zahl größer, nicht kleiner. Schau dir an, was mit allen Rädchen passiert, die auf 1 stehen.' },
        { text: '1111', warum: 'Es ist nur ein Schritt. Die drei rechten Rädchen sind voll – was macht ein volles Rädchen?' },
        { text: '1000', richtig: true },
      ]}
    >
      <P>
        Die drei rechten Rädchen stehen alle auf 1, also sind alle drei „voll“: Sie springen auf 0 und geben weiter – genau wie bei 199 → 200. Das linke springt auf 1.{' '}
        <code>1000</code> ist die Zahl <strong>8</strong>.
      </P>
    </Wahl>,
    <P>
      Schau dir die Zählfolge an: 0, 1, 10, 11, 100, 101, 110, 111, 1000. Das sind die Zahlen null bis acht, nur mit zwei Ziffern geschrieben. Achtung: <code>10</code> heißt
      hier nicht zehn, sondern <strong>zwei</strong>. Man liest solche Zahlen deshalb Ziffer für Ziffer: „eins-null“.
    </P>,
    <SoHeisstDas begriff="binaersystem" auch="Dualsystem">
      Das <B id="stellenwertsystem" /> mit der <B id="basis" /> 2: Es gibt nur die Ziffern 0 und 1, der Übertrag kommt schon nach der 1 – wie im Zählwerk oben. Jedes Bit
      speichert genau eine Binärziffer. So rechnet jeder Computer.
    </SoHeisstDas>,
    <P>Jetzt finden wir heraus, was die Stellen im Binärsystem wert sind. Beim Dezimalzähler bewegt sich das zweite Rädchen nach 10 Schritten – darum ist es 10 wert. Und hier?</P>,
    <Wahl
      frage="Wie oft musst du weiterzählen, bis sich das zweite Rädchen von rechts einmal bewegt?"
      optionen={[
        { text: '1-mal', warum: 'Nach einem Schritt steht rechts erst die 1 – das Rädchen ist noch nicht voll.' },
        { text: '2-mal', richtig: true },
        { text: '10-mal', warum: 'So war es beim Dezimalzähler mit zehn Ziffern. Hier hat das rechte Rädchen nur zwei Ziffern.' },
      ]}
    >
      <P>
        Nach 2 Schritten (0 → 1 → Übertrag). Das zweite Rädchen zählt also in Zweierschritten: Sein <B id="stellenwert" /> ist <strong>2</strong>.
      </P>
    </Wahl>,
    <Wahl
      frage="Welchen Stellenwert hat dann das dritte Rädchen?"
      optionen={[
        { text: '3', warum: 'Die Stellenwerte wachsen nicht um 1. Das dritte Rädchen bewegt sich erst, wenn das zweite einmal ganz herum ist.' },
        { text: '4', richtig: true },
        { text: '20', warum: 'Das wäre die Logik mit zehn Ziffern. Hier ist jedes Rädchen schon nach zwei Schritten voll.' },
      ]}
    >
      <P>
        Das zweite Rädchen muss einmal ganz herum – das sind 2 seiner Schritte, und jeder davon ist 2 wert: 2 · 2 = <strong>4</strong>.
      </P>
    </Wahl>,
    <P>
      Die Regel aus dem Dezimalsystem gilt also auch hier: Der Stellenwert ist die Basis hoch die Nummer der Stelle – nur ist die Basis jetzt 2. Jede Stelle ist{' '}
      <strong>doppelt so viel wert</strong> wie die rechts daneben:
    </P>,
    <Tafel
      zeilen={[
        { name: 'Stelle', werte: ['3', '2', '1', '0'] },
        { name: 'als Potenz', werte: ['2³', '2²', '2¹', '2⁰'] },
        { name: 'Stellenwert', werte: ['8', '4', '2', '1'], ton: 'oben' },
      ]}
    />,
    <P>
      Und so geht es weiter: 16, 32, 64, 128 … Der Computer schreibt Zahlen also genau wie wir – nur mit zwei Ziffern statt zehn.
    </P>,
  ],

  lesen: () => [
    <P>
      Ein Programm zeigt dir den Wert <code>0110 0100</code>. Welche Zahl steckt dahinter? Das Rezept kennst du aus dem <B id="dezimalsystem" />: jede Ziffer mal ihren
      Stellenwert, dann alles zusammenzählen (352 = 300 + 50 + 2). Fangen wir mit einer kurzen Zahl an, <code>1011</code>.
    </P>,
    <Wahl
      frage="In 1011 steht an der Stelle mit dem Stellenwert 4 eine 0. Was trägt diese Stelle zum Wert der Zahl bei?"
      optionen={[
        { text: '4', warum: '4 ist der Stellenwert. Die Ziffer dort ist aber 0 – und gerechnet wird Ziffer · Stellenwert.' },
        { text: '1', warum: 'Gerechnet wird Ziffer · Stellenwert. Welche Ziffer steht an dieser Stelle?' },
        { text: '0', richtig: true },
      ]}
    >
      <P>
        0 · 4 = 0. Binär ist jede Ziffer 0 oder 1: Eine 0 bringt nichts, eine 1 bringt genau ihren Stellenwert.{' '}
        <strong>Du addierst also nur die Stellenwerte über den Einsen.</strong>
      </P>
    </Wahl>,
    <Tafel
      zeilen={[
        { name: 'Stellenwert', werte: ['8', '4', '2', '1'], ton: 'oben' },
        { name: 'Bit', werte: ['1', '0', '1', '1'] },
        { name: 'zählt', werte: ['8', '–', '2', '1'] },
        { text: '1011 = 8 + 2 + 1 = 11', ton: 'summe' },
      ]}
    />,
    <P>
      Im Computer kommen Bits fast immer in Päckchen zu acht. Schreib dir in der Prüfung als Erstes die acht Stellenwerte auf, das spart Zeit und Fehler:{' '}
      <code>128 · 64 · 32 · 16 · 8 · 4 · 2 · 1</code>. Hier kannst du Bits antippen und zusehen, wie sich die Summe ändert:
    </P>,
    <Abbildung>
      <Lesen basis={2} start="10110111" />
    </Abbildung>,
    <SoHeisstDas begriff="byte">
      8 Bit zusammen – wie die acht Kästchen oben. Ein Byte hat die Stellenwerte 128 bis 1. Speicher und Dateigrößen zählt man in Byte; ein Zeichen in einer Textdatei
      ist oft genau ein Byte.
    </SoHeisstDas>,
    <Eingabe
      frage="Jetzt die Zahl vom Anfang: Welche Dezimalzahl ist das Byte 0110 0100?"
      pruefe={istZahl(100, {
        38: 'Du hast links mit der 1 angefangen. Der Stellenwert 1 steht immer ganz rechts.',
        3: 'Das ist die Anzahl der Einsen. Gefragt ist die Summe ihrer Stellenwerte.',
      })}
      tipp="Schreib 128 64 32 16 8 4 2 1 darüber und addiere nur die Werte über den Einsen."
      loesung="100"
      platzhalter="Dezimal"
    >
      <P>
        Über den Einsen stehen 64, 32 und 4: 64 + 32 + 4 = <strong>100</strong>.
      </P>
    </Eingabe>,
    <Eingabe
      frage="Und welche Dezimalzahl ist 1111 1111?"
      pruefe={istZahl(255, {
        256: 'Knapp daneben – 256 wäre schon der Stellenwert der neunten Stelle. Zähl die acht Stellenwerte zusammen.',
        8: 'Das ist die Anzahl der Einsen. Gefragt ist die Summe ihrer Stellenwerte.',
      })}
      tipp="128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = ?"
      loesung="255"
      platzhalter="Dezimal"
    >
      <P>
        <strong>255</strong> – die größte Zahl, die in ein Byte passt. Die wirst du noch oft sehen, zum Beispiel in der Subnetzmaske 255.255.255.0.
      </P>
    </Eingabe>,
  ],

  schreiben: () => [
    <P>
      Jetzt andersherum: Wie wird aus 200 eine Binärzahl? Es gibt zwei Wege. Den ersten verstehst du sofort, den zweiten siehst du oft in Lösungen und Lehrbüchern.
    </P>,
    <Zwischentitel>Weg 1: Passt es noch?</Zwischentitel>,
    <P>
      Du kennst die Stellenwerte 128 bis 1. Geh sie von links nach rechts durch und frag jedes Mal: <strong>Passt dieser Stellenwert noch in das, was übrig ist?</strong>{' '}
      Wenn ja: 1 hinschreiben und den Stellenwert abziehen. Wenn nein: 0 hinschreiben und weiter.
    </P>,
    <Wahl
      frage="Wir wandeln 200 um. Erster Schritt: Passt die 128 in 200?"
      optionen={[
        { text: 'Ja', richtig: true },
        { text: 'Nein', warum: '128 ist kleiner als 200 – sie passt hinein.' },
      ]}
    >
      <P>Ja: Wir schreiben eine 1, und übrig bleiben 200 − 128 = 72. Weiter geht es mit 64. Klick dich Schritt für Schritt durch:</P>
    </Wahl>,
    <Abbildung>
      <PasstEsNoch n={200} />
    </Abbildung>,
    <Eingabe
      frage="Jetzt du: Schreib 52 als Binärzahl (8 Bit)."
      pruefe={istBinaer('110100')}
      tipp="Passt 128? 64? 32? … Bei jedem Ja: 1 schreiben und abziehen."
      loesung="0011 0100"
      platzhalter="z. B. 0000 0000"
    >
      <P>
        32 passt (Rest 20), 16 passt (Rest 4), 8 nicht, 4 passt (Rest 0), 2 und 1 nicht: <strong>0011 0100</strong>. Probe: 32 + 16 + 4 = 52. Die Probe solltest du{' '}
        <em>immer</em> machen – sie kostet zehn Sekunden.
      </P>
    </Eingabe>,
    <Zwischentitel>Weg 2: Immer durch 2 teilen</Zwischentitel>,
    <P>
      Du teilst die Zahl immer wieder durch 2 und schreibst jedes Mal den <strong>Rest</strong> auf (0 oder 1), bis 0 herauskommt. Die Reste{' '}
      <strong>von unten nach oben</strong> gelesen ergeben die Binärzahl. Geh es mit 200 Schritt für Schritt durch:
    </P>,
    <Abbildung>
      <Schreiben basis={2} start={200} max={1023} />
    </Abbildung>,
    <P>
      Warum von unten nach oben? Der erste Rest sagt dir, ob die Zahl gerade ist (Rest 0) oder ungerade (Rest 1). Und genau das entscheidet das Bit ganz rechts, das mit dem
      Stellenwert 1. Jedes weitere Teilen durch 2 schiebt die Zahl eine Stelle nach rechts – dann ist das nächste Bit dran. Der erste Rest gehört also nach ganz rechts.
    </P>,
    <SoHeisstDas begriff="restwertverfahren">
      Umrechnen aus dem Dezimalsystem durch fortlaufendes Teilen durch die Basis, bis 0 herauskommt. Die Reste sind die Ziffern; der erste Rest steht ganz rechts, darum
      liest man sie von unten nach oben. Mit 16 oder 8 statt 2 funktioniert es genauso.
    </SoHeisstDas>,
    <Wahl
      frage="Beim Restwertverfahren kommt als allererster Rest eine 1 heraus. Was weißt du dann sicher?"
      optionen={[
        { text: 'Die Binärzahl beginnt links mit 1.', warum: 'Der erste Rest gehört nach ganz rechts, nicht nach links.' },
        { text: 'Die Zahl ist ungerade.', richtig: true },
        { text: 'Die Zahl ist kleiner als 2.', warum: 'Dann wäre nach dem ersten Teilen schon 0 herausgekommen. Der Rest sagt etwas anderes.' },
      ]}
    >
      <P>Rest 1 beim Teilen durch 2 heißt: ungerade. Und ungerade Zahlen enden binär immer auf 1 – das rechte Bit ist ja das einzige mit einem ungeraden Stellenwert.</P>
    </Wahl>,
    <Eingabe
      frage="Das Restwertverfahren für 37 liefert die Reste 1, 0, 1, 0, 0, 1 – in dieser Reihenfolge. Wie lautet die Binärzahl?"
      pruefe={istBinaer('100101')}
      tipp="Der erste Rest steht ganz rechts: Lies die Reste von hinten nach vorn."
      loesung="10 0101"
      platzhalter="z. B. 0000 0000"
    >
      <P>
        Von unten nach oben gelesen: <strong>100101</strong>. Probe: 32 + 4 + 1 = 37.
      </P>
    </Eingabe>,
    <Merke>
      Welchen Weg du nimmst, ist egal. Bis 255 ist „Passt es noch?“ meist schneller. Wichtig ist nur: <strong>Probe machen</strong>, also zurückrechnen.
    </Merke>,
    <P>
      Eine Frage ist noch offen: Wie viele verschiedene Zahlen passen überhaupt in ein <B id="byte" />? Darum geht es im nächsten Kapitel, <strong>Zweierpotenzen</strong>.
    </P>,
  ],

  // ---------- Zweierpotenzen ----------
  kombinationen: () => [
    <P>
      Eine Frage, die in der Prüfung ständig vorkommt – bei Farbtiefe, Adressen, Speicher: <strong>Wie viele verschiedene Werte kann man mit n Bit darstellen?</strong>{' '}
      Fangen wir klein an und schreiben alle Möglichkeiten auf:
    </P>,
    <Abbildung>
      <Kombinationen bis={3} />
    </Abbildung>,
    <Wahl
      frage="1 Bit: 2 Möglichkeiten. 2 Bit: 4. 3 Bit: 8. Wie viele sind es mit 4 Bit?"
      optionen={[
        { text: '10', warum: 'Es kommen nicht immer gleich viele dazu. Schau, wie sich die Zahl von Spalte zu Spalte verändert.' },
        { text: '12', warum: 'Von 4 auf 8 kamen 4 dazu – aber von 2 auf 4 nur 2. Es wird nicht addiert, sondern …' },
        { text: '16', richtig: true },
      ]}
    >
      <P>
        16. Jedes neue Bit <strong>verdoppelt</strong> die Möglichkeiten. Warum? Das neue Bit kann 0 oder 1 sein. Alle bisherigen Muster gibt es also einmal mit 0 davor und
        einmal mit 1 davor – doppelt so viele.
      </P>
    </Wahl>,
    <P>
      Bei n Bit verdoppelst du also n-mal: 4 Bit sind 2 · 2 · 2 · 2 = 16 Muster. Für wiederholtes Malnehmen kennst du die Kurzschrift schon, die <B id="potenz" />: 2 · 2 · 2 ·
      2 = 2⁴.
    </P>,
    <SoHeisstDas begriff="zweierpotenz">
      Eine Potenz mit der Basis 2: 2ⁿ heißt, die 2 n-mal malnehmen (2³ = 2 · 2 · 2 = 8). Mit n Bit lassen sich <strong>2ⁿ verschiedene Werte</strong> darstellen – wie in den
      Spalten oben.
    </SoHeisstDas>,
    <Eingabe
      frage="Ein Bildformat speichert die Farbe jedes Bildpunkts mit 6 Bit. Wie viele verschiedene Farben sind möglich?"
      pruefe={istZahl(64, {
        12: '6 · 2 wäre addiert. Jedes Bit verdoppelt aber: 2 · 2 · 2 · 2 · 2 · 2.',
        36: 'Das ist 6². Gesucht ist 2⁶ – die 2 sechsmal malnehmen.',
        63: 'Das ist die größte Zahl. Gefragt ist die Anzahl der Werte – die 0 zählt mit.',
      })}
      tipp="6 Bit → 2⁶. Verdopple sechsmal, angefangen bei 1."
      loesung="64"
      platzhalter="Anzahl"
    >
      <P>
        2⁶ = 2 · 2 · 2 · 2 · 2 · 2 = <strong>64</strong> Farben.
      </P>
    </Eingabe>,
  ],

  zweierpotenzen: () => [
    <P>
      In fast jeder Rechnung mit Bits brauchst du dieselben Zahlen: 2⁸ für ein Byte, 2¹⁰ für Speichergrößen, 2⁴ für Hex. Jedes Mal neu ausrechnen kostet Zeit. Zum Glück
      steckt in ihnen ein Muster, das du dir leicht merkst.
    </P>,
    <Wahl
      frage="2⁷ = 128. Wie kommst du am schnellsten auf 2⁸?"
      optionen={[
        { text: '128 + 2', warum: 'Eine Hochzahl mehr heißt einmal mehr malnehmen, nicht addieren.' },
        { text: '128 · 8', warum: '· 8 wären drei Schritte auf einmal (2³). Eine Hochzahl mehr ist nur ein Schritt.' },
        { text: '128 · 2', richtig: true },
      ]}
    >
      <P>
        128 · 2 = <strong>256</strong>. Jede Hochzahl mehr verdoppelt – genau wie jedes Bit mehr. Probier es mit dem Regler aus:
      </P>
    </Wahl>,
    <Abbildung unter="Mit + und − ein Bit dazu oder weg; unten alle Zweierpotenzen bis 2¹⁶ zum Antippen">
      <Potenzen start={8} />
    </Abbildung>,
    <P>
      Die ersten acht Zweierpotenzen kennst du schon: Es sind die Stellenwerte eines <B id="byte" /> von rechts – 1, 2, 4, 8, 16, 32, 64, 128. Ganz rechts steht die Stelle
      mit der Nummer 0.
    </P>,
    <Wahl
      frage="Welchen Wert hat 2⁰?"
      optionen={[
        { text: '0', warum: 'Hoch 0 heißt nicht mal 0. Denk an die rechte Stelle einer Binärzahl: Welchen Stellenwert hat sie?' },
        { text: '1', richtig: true },
        { text: '2', warum: 'Das ist 2¹. 2⁰ ist einen Schritt davor – also die Hälfte.' },
      ]}
    >
      <P>
        2⁰ = 1, der Stellenwert der rechten Stelle. Jede Zahl hoch 0 ist 1. Rückwärts siehst du es auch: 2² = 4, 2¹ = 2, 2⁰ = 1 – jeder Schritt halbiert.
      </P>
    </Wahl>,
    <Merke titel="Auswendig lernen lohnt sich">
      <code>2⁰ = 1 · 2¹ = 2 · 2² = 4 · 2³ = 8 · 2⁴ = 16 · 2⁵ = 32 · 2⁶ = 64 · 2⁷ = 128 · 2⁸ = 256 · 2⁹ = 512 · 2¹⁰ = 1.024</code>
      <br />
      2¹⁰ = 1.024 liegt fast bei 1.000 – genau daher kommt später der Unterschied zwischen kB und KiB.
    </Merke>,
    <Eingabe
      frage="Berechne 2¹² ohne Taschenrechner."
      pruefe={istZahl(4096, {
        24: '2¹² heißt nicht 12 · 2, sondern die 2 zwölfmal malnehmen.',
        144: 'Das ist 12². Basis und Hochzahl sind vertauscht.',
        2048: 'Das ist 2¹¹ – einmal verdoppeln fehlt noch.',
        8192: 'Das ist 2¹³ – einmal zu oft verdoppelt.',
      })}
      tipp="Fang bei 2¹⁰ = 1.024 an und verdopple noch zweimal."
      loesung="4.096"
      platzhalter="Wert"
    >
      <P>
        2¹⁰ = 1.024, 2¹¹ = 2.048, 2¹² = <strong>4.096</strong>. Oder in einem Schritt: 2¹² = 2¹⁰ · 2² = 1.024 · 4.
      </P>
    </Eingabe>,
  ],

  grenzen: () => [
    <P>
      Du weißt jetzt: n Bit ergeben 2ⁿ verschiedene Werte, 8 Bit also 2⁸ = 256. Daraus macht die Prüfung zwei Fragen – und die erste ist die beliebteste Falle
      überhaupt:
    </P>,
    <Wahl
      frage="8 Bit ergeben 256 verschiedene Werte. Was ist die größte Zahl, die man mit 8 Bit schreiben kann?"
      optionen={[
        { text: '256', warum: '256 ist die Anzahl der Werte. Aber wo fängt das Zählen an?' },
        { text: '255', richtig: true },
        { text: '128', warum: '128 ist der Stellenwert des linken Bits. Wenn alle 8 Bit auf 1 stehen, kommt mehr heraus.' },
      ]}
    >
      <P>
        Die Werte gehen von <strong>0</strong> bis 255 – das sind 256 Stück, weil die 0 mitzählt. Allgemein: <strong>größte Zahl = 2ⁿ − 1</strong>. Du kennst sie schon: 1111
        1111 = 255.
      </P>
    </Wahl>,
    <Tafel
      zeilen={[
        { name: 'Bit', werte: ['4', '8', '16'] },
        { name: 'Werte (2ⁿ)', werte: ['16', '256', '65.536'], ton: 'oben' },
        { name: 'größte Zahl', werte: ['15', '255', '65.535'] },
      ]}
    />,
    <P>Die kleinste Zahl ist immer 0, die größte 2ⁿ − 1. Dazwischen liegt alles, was mit n Bit darstellbar ist.</P>,
    <SoHeisstDas begriff="wertebereich">
      Alle Werte, die eine bestimmte Anzahl Bit darstellen kann: mit n Bit (ohne Vorzeichen, also ohne negative Zahlen) von 0 bis 2ⁿ − 1. Ein <B id="byte" /> hat den
      Wertebereich 0 bis 255.
    </SoHeisstDas>,
    <P>Oft fragt die Prüfung auch umgekehrt: Wie viele Bit brauche ich mindestens?</P>,
    <Eingabe
      frage="Ein Lager hat 300 Fächer. Jedes Fach soll eine eigene binäre Nummer bekommen. Wie viele Bit braucht man mindestens?"
      pruefe={istZahl(9, {
        8: '8 Bit reichen nur für 2⁸ = 256 Werte – zu wenig für 300 Fächer.',
        300: 'Gefragt ist die Anzahl der Bit, nicht die Anzahl der Fächer.',
        10: '10 Bit würden reichen – aber geht es auch mit weniger?',
      })}
      tipp="Such die kleinste Zweierpotenz, die mindestens 300 ist: 2⁸ = 256, 2⁹ = …"
      loesung="9"
      platzhalter="Bit"
    >
      <P>
        2⁸ = 256 ist zu wenig, 2⁹ = 512 reicht. Also <strong>9 Bit</strong>, der Wertebereich ist dann 0 bis 511. Merk dir den Weg: Such die kleinste{' '}
        <B id="zweierpotenz" />, die groß genug ist.
      </P>
    </Eingabe>,
    <Eingabe
      frage="Ein Zähler in einem Programm hat 16 Bit (ohne Vorzeichen). Welche Zahl ist die größte in seinem Wertebereich?"
      pruefe={istZahl(65535, {
        65536: '65.536 ist die Anzahl der Werte. Die 0 zählt mit – die größte Zahl ist eins kleiner.',
        32767: 'Das wäre 2¹⁵ − 1. Der Zähler hat 16 Bit.',
        15: 'Das ist der Wertebereich von 4 Bit. Gefragt sind 16 Bit: 2¹⁶ − 1.',
      })}
      tipp="Größte Zahl = 2ⁿ − 1, hier 2¹⁶ − 1. Die Tafel oben hilft."
      loesung="65.535"
      platzhalter="größte Zahl"
    >
      <P>
        2¹⁶ − 1 = 65.536 − 1 = <strong>65.535</strong>.
      </P>
    </Eingabe>,
    <P>
      Mit 2⁴ = 16 hast du übrigens schon den Schlüssel zum nächsten Kapitel: 4 Bit haben genau 16 Muster – und genau so viele Ziffern hat das <strong>Hexadezimalsystem</strong>.
    </P>,
  ],

  // ---------- Hexadezimal ----------
  'hex-idee': () => [
    <P>
      Binär ist für Computer perfekt, für Menschen aber anstrengend. Versuch mal, dir diese Zahl zu merken oder sie fehlerfrei abzuschreiben:{' '}
      <code>1100 1000 0011 1111 1010 0101</code>. Genau dafür gibt es eine Abkürzung.
    </P>,
    <P>
      Die Idee: Man fasst immer <strong>4 Bit zu einer Gruppe</strong> zusammen und gibt jeder möglichen Gruppe ein eigenes Zeichen. Wie viele Zeichen braucht man dafür?
    </P>,
    <Wahl
      frage="Wie viele verschiedene Gruppen aus 4 Bit gibt es?"
      optionen={[
        { text: '4', warum: '4 ist die Anzahl der Bit. Gefragt sind die möglichen Muster – jedes Bit verdoppelt.' },
        { text: '8', warum: 'Das wären 3 Bit (2³). Mit 4 Bit sind es doppelt so viele.' },
        { text: '16', richtig: true },
      ]}
    >
      <P>
        2⁴ = <strong>16</strong>, von 0000 bis 1111. Wir brauchen also 16 verschiedene Ziffern.
      </P>
    </Wahl>,
    <P>
      Unsere Ziffern 0 bis 9 reichen nur für zehn. Für die Werte 10 bis 15 nimmt man einfach Buchstaben: <strong>A = 10, B = 11, C = 12, D = 13, E = 14, F = 15</strong>. Hier
      sind alle 16 Gruppen:
    </P>,
    <Abbildung>
      <HexTabelle />
    </Abbildung>,
    <SoHeisstDas begriff="hexadezimalsystem">
      Das <B id="stellenwertsystem" /> mit der <B id="basis" /> 16 (griechisch <em>hexa</em> = sechs, dazu <em>dezimal</em> = zehn), kurz Hex: Ziffern 0 bis 9 und A bis F.
      Eine Hex-Ziffer steht für genau 4 Bit – wie in der Tabelle.
    </SoHeisstDas>,
    <Eingabe
      frage="Welchen Dezimalwert hat die Hex-Ziffer D?"
      pruefe={istZahl(13, {
        4: 'D ist der vierte Buchstabe – aber A beginnt bei 10, nicht bei 1.',
        14: 'Fast: A = 10, B = 11, C = 12 – und D?',
      })}
      tipp="A = 10, dann zählst du weiter: B, C, D."
      loesung="13"
      platzhalter="Dezimal"
    >
      <P>
        A = 10, B = 11, C = 12, D = <strong>13</strong>. In der Tabelle steht D über 1101 = 8 + 4 + 1.
      </P>
    </Eingabe>,
    <Wahl
      frage="Welche dieser Zeichenfolgen kann keine Hexzahl sein?"
      optionen={[
        { text: 'BAD', warum: 'B, A und D sind alles Hex-Ziffern (11, 10, 13). Auch Wörter können Hexzahlen sein.' },
        { text: '99', warum: '9 ist auch eine Hex-Ziffer. Eine Hexzahl muss keine Buchstaben enthalten.' },
        { text: 'G7', richtig: true },
        { text: '1F0', warum: '1, F und 0 sind alles Hex-Ziffern.' },
      ]}
    >
      <P>
        G gibt es nicht: Die größte Ziffer ist F = 15, also <B id="basis" /> − 1. Danach kommt der Übertrag.
      </P>
    </Wahl>,
    <Merke titel="Wo du Hex begegnest">
      Überall, wo Bytes für Menschen lesbar sein sollen: Farbcodes (<code>#FF8800</code>), MAC-Adressen (<code>00:1A:2B:3C:4D:5E</code>), IPv6-Adressen und im Programmcode
      als <code>0xFF</code>.
    </Merke>,
  ],

  'hex-binaer': () => [
    <P>
      Eine MAC-Adresse beginnt mit dem <B id="byte" /> <code>1100 1000</code>. Auf dem Typenschild steht es kürzer. Wie kurz genau?
    </P>,
    <Wahl
      frage="Wie viele Hex-Ziffern braucht man für ein Byte (8 Bit)?"
      optionen={[
        { text: '8', warum: 'Eine Hex-Ziffer fasst 4 Bit zusammen, nicht nur eines.' },
        { text: '4', warum: '4 ist die Zahl der Bit je Hex-Ziffer. Wie oft passen 4 Bit in 8 Bit?' },
        { text: '2', richtig: true },
      ]}
    >
      <P>8 Bit ÷ 4 = 2 Hex-Ziffern. Ein Byte ist also immer genau zwei Hex-Ziffern, von 00 bis FF.</P>
    </Wahl>,
    <P>
      Binär → Hex ist dadurch fast geschenkt: Teil die Binärzahl <strong>von rechts</strong> in Vierergruppen und übersetze jede Gruppe einzeln. Tipp die Bits an:
    </P>,
    <Abbildung>
      <Gruppen breite={4} start={200} />
    </Abbildung>,
    <SoHeisstDas begriff="nibble" auch="Halbbyte">
      Eine Gruppe aus 4 Bit, ein halbes Byte. Ein Nibble hat 2⁴ = 16 Muster und ist damit genau eine Hex-Ziffer: Das Byte 1100 1000 besteht aus den Nibbles 1100 = C und 1000
      = 8, zusammen C8.
    </SoHeisstDas>,
    <Wahl
      frage="Was ist 1010 1111 in Hex?"
      optionen={[
        { text: '10 15', warum: 'Jedes Nibble wird genau ein Zeichen. 10 und 15 sind zweistellig – welche Buchstaben gehören dazu?' },
        { text: 'FA', warum: 'Die Reihenfolge bleibt gleich: Das linke Nibble wird die linke Ziffer.' },
        { text: 'AF', richtig: true },
      ]}
    >
      <P>
        1010 = 8 + 2 = 10 = <strong>A</strong>, 1111 = 15 = <strong>F</strong>. Also <strong>AF</strong>.
      </P>
    </Wahl>,
    <P>
      Warum von rechts? Weil nur die rechte Gruppe sicher vollständig ist. Hat die Binärzahl keine durch 4 teilbare Länge, füllst du links mit Nullen auf: <code>1 0110</code>{' '}
      wird zu <code>0001 0110</code> = 16 in Hex.
    </P>,
    <Eingabe
      frage="Schreib die Binärzahl 1 1010 als Hexzahl."
      pruefe={istHex('1A', { D0: 'Du hast von links gruppiert (1101 | 0). Gruppen bildet man von rechts, links füllst du mit Nullen auf.' })}
      tipp="Von rechts: 1010 | 1 → links auffüllen zu 0001."
      loesung="1A"
      platzhalter="Hex"
    >
      <P>
        0001 = 1, 1010 = 10 = A → <strong>1A</strong>. Probe: 16 + 10 = 26 = 16 + 8 + 2.
      </P>
    </Eingabe>,
    <Eingabe
      frage="Andersherum: Schreib die Hexzahl 3E als Binärzahl."
      pruefe={istBinaer('111110')}
      tipp="Jede Hex-Ziffer wird zu genau 4 Bit: 3 = ?, E = 14 = ?"
      loesung="0011 1110"
      platzhalter="z. B. 0000 0000"
    >
      <P>
        3 = <strong>0011</strong>, E = 14 = 8 + 4 + 2 = <strong>1110</strong>. Zusammen 0011 1110.
      </P>
    </Eingabe>,
  ],

  'hex-dezimal': () => [
    <P>
      Im Farbcode <code>#C80000</code> steht C8 für den Rotanteil. Wie hell ist das – als Dezimalzahl von 0 bis 255? Dafür brauchst du die Stellenwerte des
      Hexadezimalsystems.
    </P>,
    <Wahl
      frage="Hex hat die Basis 16. Welchen Stellenwert hat dann die zweite Stelle von rechts?"
      optionen={[
        { text: '10', warum: 'Das ist die Zehnerstelle im Dezimalsystem. Hier wächst der Stellenwert mit der Basis 16.' },
        { text: '2', warum: 'Das wäre binär. Hex hat 16 Ziffern pro Stelle.' },
        { text: '16', richtig: true },
      ]}
    >
      <P>
        16¹ = 16. Jede Stelle ist <strong>16-mal so viel wert</strong> wie die rechts daneben: 1, 16, 256, 4.096 …
      </P>
    </Wahl>,
    <Zwischentitel>Hex → Dezimal</Zwischentitel>,
    <P>Wie immer: Ziffer · Stellenwert, dann addieren. Buchstaben vorher in Zahlen übersetzen.</P>,
    <Tafel
      zeilen={[
        { name: 'Stellenwert', werte: ['16', '1'], ton: 'oben' },
        { name: 'Ziffer', werte: ['C', '8'] },
        { name: 'als Zahl', werte: ['12', '8'] },
        { name: 'Ziffer · Wert', werte: ['192', '8'] },
        { text: 'C8 = 192 + 8 = 200', ton: 'summe' },
      ]}
    />,
    <Abbildung unter="Gib eine andere Hexzahl ein (bis 3 Stellen)">
      <Lesen basis={16} start="C8" />
    </Abbildung>,
    <Eingabe
      frage="Welche Dezimalzahl ist die Hexzahl 2A?"
      pruefe={istZahl(42, {
        30: 'Du hast mit dem Stellenwert 10 gerechnet. In Hex hat die zweite Stelle den Stellenwert 16.',
        210: 'Die zweite Stelle hat den Stellenwert 16, nicht 100.',
        12: 'A ist 10 – aber die 2 steht an der Sechzehner-Stelle und ist 2 · 16 wert.',
      })}
      tipp="2 · 16 + A · 1 – und A ist 10."
      loesung="42"
      platzhalter="Dezimal"
    >
      <P>
        2 · 16 + 10 · 1 = 32 + 10 = <strong>42</strong>.
      </P>
    </Eingabe>,
    <Zwischentitel>Dezimal → Hex</Zwischentitel>,
    <P>
      Zwei Wege: Entweder erst binär (Passt es noch?) und dann Nibbles bilden. Oder das <B id="restwertverfahren" /> mit 16: immer durch 16 teilen, Reste von unten nach oben
      lesen. Reste über 9 werden zu Buchstaben.
    </P>,
    <Abbildung>
      <Schreiben basis={16} start={200} max={4095} />
    </Abbildung>,
    <Eingabe
      frage="Schreib 255 als Hexzahl."
      pruefe={istHex('FF', { 255: 'Das ist noch die Dezimalzahl. Tipp: 255 = 1111 1111.', 1515: 'Jede Vierergruppe wird genau ein Zeichen: 15 ist F.' })}
      tipp="255 ÷ 16 = 15 Rest 15. Oder: 255 = 1111 1111 – was ist 1111 als Hex-Ziffer?"
      loesung="FF"
      platzhalter="Hex"
    >
      <P>
        255 = 1111 1111 → F und F → <strong>FF</strong>. Darum steht in einem Farbcode wie <code>#FF8800</code> „FF“ für volle Helligkeit.
      </P>
    </Eingabe>,
    <P>
      Hex fasst 4 Bit zu einer Ziffer zusammen. Was passiert, wenn man stattdessen 3 Bit nimmt? Das ist das <strong>Oktalsystem</strong> – das nächste Kapitel.
    </P>,
  ],

  // ---------- Oktal ----------
  oktal: () => [
    <P>
      Unter Linux siehst du bei Dateien oft Befehle wie <code>chmod 755</code>. Hinter der 755 stecken wieder Bits – diesmal in <strong>Dreiergruppen</strong> statt in
      Vierergruppen wie bei Hex.
    </P>,
    <Wahl
      frage="Wie viele verschiedene Muster haben 3 Bit?"
      optionen={[
        { text: '3', warum: '3 ist die Anzahl der Bit. Gefragt sind die Muster – jedes Bit verdoppelt.' },
        { text: '6', warum: '3 · 2 wäre addiert. Jedes Bit verdoppelt aber: 2 · 2 · 2.' },
        { text: '8', richtig: true },
      ]}
    >
      <P>2³ = 8 Muster, von 000 bis 111. Für jedes Muster eine Ziffer – das sind die Ziffern 0 bis 7. Buchstaben braucht man nicht.</P>
    </Wahl>,
    <P>Tipp die Bits an: Jede Dreiergruppe wird zu genau einer Ziffer, die Gewichte in einer Gruppe sind 4, 2 und 1.</P>,
    <Abbildung>
      <Gruppen breite={3} start={200} />
    </Abbildung>,
    <SoHeisstDas begriff="oktalsystem">
      Das <B id="stellenwertsystem" /> mit der <B id="basis" /> 8 (lateinisch <em>octo</em> = acht): Ziffern 0 bis 7, Stellenwerte 1, 8, 64, 512 … Eine Oktalziffer steht
      für genau 3 Bit.
    </SoHeisstDas>,
    <Wahl
      frage="Welche Ziffer gibt es im Oktalsystem nicht?"
      optionen={[
        { text: '0', warum: 'Die 0 gibt es in jedem Zahlensystem.' },
        { text: '8', richtig: true },
        { text: '7', warum: '7 = 111 – das ist die größte Oktalziffer.' },
      ]}
    >
      <P>
        Basis 8 → acht Ziffern: 0 bis 7. Nach der 7 kommt schon der Übertrag, also <code>10</code>. Allgemein: <strong>Die größte Ziffer ist immer Basis − 1</strong> –
        dezimal 9, binär 1, hex F (15).
      </P>
    </Wahl>,
    <P>
      Jetzt zu chmod: Jede Klasse – Besitzer, Gruppe, andere – hat drei Rechte: lesen, schreiben, ausführen. Drei Rechte sind drei Bit, also genau eine Oktalziffer.
    </P>,
    <Eingabe
      frage="Welche Oktalzahl ist 111 101 101?"
      pruefe={istText(['755', '0755', '0o755'], { 493: 'Das ist der Dezimalwert. Gefragt ist eine Oktalziffer je Dreiergruppe.', 557: 'Die Reihenfolge bleibt: Die linke Gruppe wird die linke Ziffer.' })}
      tipp="Jede Dreiergruppe einzeln: 111 = 4 + 2 + 1 = ?"
      loesung="755"
      platzhalter="Oktal"
    >
      <P>
        111 = 7, 101 = 5, 101 = 5 → <strong>755</strong>. Das ist das bekannte <code>chmod 755</code>: Der Besitzer darf alles, alle anderen lesen und ausführen.
      </P>
    </Eingabe>,
  ],

  'oktal-dezimal': () => [
    <P>
      In einer Prüfungsaufgabe steht: „Rechne die Oktalzahl 17 ins Dezimalsystem um.“ Ist das nicht einfach siebzehn? Schau dir die Stellen an.
    </P>,
    <Wahl
      frage="Welchen Stellenwert hat die 1 in der Oktalzahl 17?"
      optionen={[
        { text: '10', warum: 'Das wäre dezimal. Im Oktalsystem wächst der Stellenwert mal 8.' },
        { text: '1', warum: 'Die 1 steht an Stelle 1, nicht an Stelle 0 – sie ist die linke Ziffer.' },
        { text: '8', richtig: true },
      ]}
    >
      <P>
        8¹ = 8. Also: Oktal 17 = 1 · 8 + 7 · 1 = <strong>15</strong>, nicht siebzehn.
      </P>
    </Wahl>,
    <Zwischentitel>Oktal → Dezimal</Zwischentitel>,
    <P>Dasselbe Rezept wie immer: Ziffer · Stellenwert, dann addieren. Die Stellenwerte sind 1, 8, 64, 512 – Potenzen von 8. Hier mit der 755 von chmod:</P>,
    <Abbildung unter="Gib eine andere Oktalzahl ein (Ziffern 0 bis 7)">
      <Lesen basis={8} start="755" />
    </Abbildung>,
    <Eingabe
      frage="Welche Dezimalzahl ist die Oktalzahl 144?"
      pruefe={istZahl(100, {
        144: 'Das ist die Oktalzahl selbst. Die 1 steht an der Stelle mit dem Stellenwert 64.',
        324: 'Das sind die Stellenwerte von Hex (256, 16, 1). Oktal sind es 64, 8, 1.',
        9: 'Du hast nur die Ziffern addiert. Jede Ziffer zählt mal ihren Stellenwert.',
      })}
      tipp="1 · 64 + 4 · 8 + 4 · 1 = ?"
      loesung="100"
      platzhalter="Dezimal"
    >
      <P>
        1 · 64 + 4 · 8 + 4 · 1 = 64 + 32 + 4 = <strong>100</strong>.
      </P>
    </Eingabe>,
    <Zwischentitel>Dezimal → Oktal</Zwischentitel>,
    <P>
      Mit dem <B id="restwertverfahren" />, diesmal mit 8: immer durch 8 teilen, die Reste (0 bis 7) notieren und von unten nach oben lesen. Hier mit 200:
    </P>,
    <Abbildung>
      <Schreiben basis={8} start={200} max={4095} />
    </Abbildung>,
    <Eingabe
      frage="Schreib 75 als Oktalzahl."
      pruefe={istText(['113', '0113', '0o113'], {
        311: 'Die Reste stehen in der falschen Reihenfolge – der erste Rest gehört nach ganz rechts.',
        '4B': 'Das ist Hex (durch 16 geteilt). Hier wird durch 8 geteilt.',
        1001011: 'Das ist die Binärzahl. Hier wird durch 8 geteilt.',
      })}
      tipp="75 ÷ 8 = 9 Rest 3, 9 ÷ 8 = 1 Rest 1, 1 ÷ 8 = 0 Rest 1."
      loesung="113"
      platzhalter="Oktal"
    >
      <P>
        Reste 3, 1, 1 → von unten nach oben <strong>113</strong>. Probe: 1 · 64 + 1 · 8 + 3 = 75.
      </P>
    </Eingabe>,
    <P>
      Binär, Oktal, Dezimal, Hex – im letzten Kapitel siehst du, dass alle vier in Wahrheit nur <strong>eine</strong> Regel sind.
    </P>,
  ],

  // ---------- Alles zusammen ----------
  aha: () => [
    <P>
      Du kennst jetzt vier Zahlensysteme. Musst du dir also vier Rezepte merken? Prüf das an einem System, das du noch nie gesehen hast – einem mit der Basis 5.
    </P>,
    <Wahl
      frage="Ein Zahlensystem hat die Basis 5. Welche Ziffern gibt es darin?"
      optionen={[
        { text: '0 bis 5', warum: 'Das wären sechs Ziffern. Die größte Ziffer ist immer Basis − 1.' },
        { text: '0 bis 4', richtig: true },
        { text: '1 bis 5', warum: 'Die 0 gibt es in jedem Stellenwertsystem – mit ihr beginnt das Zählen.' },
      ]}
    >
      <P>Fünf Ziffern, 0 bis 4. Nach der 4 ist das Rädchen voll, und es kommt der Übertrag. Du hast die Regel gerade auf ein neues System angewendet.</P>
    </Wahl>,
    <P>
      Genau das ist der Punkt: Es gibt nur <strong>eine</strong> Regel. Die <B id="basis" /> legt fest, welche Ziffern es gibt und mit welchem Faktor die Stellenwerte
      wachsen. Der Wert ist immer die Summe aus Ziffer · <B id="stellenwert" />. Alle vier Systeme im Überblick:
    </P>,
    <div class="ls-tabelle-huelle">
      <table class="ls-tabelle">
        <thead>
          <tr>
            <th>System (Basis)</th>
            <th>Ziffern</th>
            <th>Stellenwerte</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Binär (2)</td>
            <td class="mono">0, 1</td>
            <td class="mono">1 · 2 · 4 · 8 …</td>
          </tr>
          <tr>
            <td>Oktal (8)</td>
            <td class="mono">0–7</td>
            <td class="mono">1 · 8 · 64 …</td>
          </tr>
          <tr>
            <td>Dezimal (10)</td>
            <td class="mono">0–9</td>
            <td class="mono">1 · 10 · 100 …</td>
          </tr>
          <tr>
            <td>Hex (16)</td>
            <td class="mono">0–9, A–F</td>
            <td class="mono">1 · 16 · 256 …</td>
          </tr>
        </tbody>
      </table>
    </div>,
    <P>
      Wo sie dir begegnen: dezimal im Alltag, binär im Computer selbst, oktal bei Dateirechten (chmod), hex bei Farbcodes, MAC- und IPv6-Adressen.
    </P>,
    <P>Probier es selbst: Wähl eine Basis und tipp die Ziffern an. Die Stellenwerte sind immer Potenzen der Basis.</P>,
    <Abbildung>
      <Stellenwert />
    </Abbildung>,
    <Wahl
      frage="Welchen Dezimalwert hat die Zahl „10“ im Hexadezimalsystem?"
      optionen={[
        { text: '10', warum: 'Das gilt nur im Dezimalsystem. Welchen Stellenwert hat die zweite Stelle in Hex?' },
        { text: '16', richtig: true },
        { text: '2', warum: 'Das wäre „10“ im Binärsystem.' },
      ]}
    >
      <P>
        1 · 16 + 0 = 16. Und jetzt der Aha-Moment: <strong>„10“ ist in jedem System genau die Basis</strong> – binär 2, oktal 8, dezimal 10, hex 16. Es ist immer „das
        Rädchen ist einmal voll, eins nach links“.
      </P>
    </Wahl>,
    <Eingabe
      frage="Zurück zum System mit der Basis 5: Welchen Dezimalwert hat dort die Zahl 21?"
      pruefe={istZahl(11, {
        21: 'So sähe sie im Dezimalsystem aus. Die 2 steht an der Stelle mit dem Stellenwert 5.',
        3: 'Du hast nur die Ziffern addiert. Jede Ziffer zählt mal ihren Stellenwert.',
        7: '2 + 5 ist addiert. Die 2 zählt 2 · 5.',
      })}
      tipp="Stellenwerte bei Basis 5: 1, 5, 25 … Also 2 · 5 + 1 · 1."
      loesung="11"
      platzhalter="Dezimal"
    >
      <P>
        2 · 5 + 1 · 1 = <strong>11</strong>. Ein System, das du nie geübt hast – und trotzdem kein Problem. Das ist die eine Regel.
      </P>
    </Eingabe>,
  ],

  schreibweisen: () => [
    <P>
      Wenn „10“ in jedem System etwas anderes bedeutet, gibt es ein Problem: In einer Aufgabe steht nur <code>100</code>. Welche Zahl ist gemeint? Tipp andere Ziffern ein und
      vergleiche:
    </P>,
    <Abbildung>
      <JeBasis start="100" />
    </Abbildung>,
    <Wahl
      frage="Welchen Wert hat die Zahl 100?"
      optionen={[
        { text: 'Hundert', warum: 'Nur, wenn sie dezimal gemeint ist. Schau ins Bild: Was ergibt 100 mit der Basis 2?' },
        { text: 'Das hängt von der Basis ab.', richtig: true },
        { text: 'Vier', warum: 'Nur, wenn sie binär gemeint ist. Woran solltest du das erkennen?' },
      ]}
    >
      <P>
        Ohne Basis ist 100 mehrdeutig: binär 4, oktal 64, dezimal 100, hex 256. Darum schreibt man die Basis dazu, wo sie nicht klar ist.
      </P>
    </Wahl>,
    <P>
      Auf Papier und in Prüfungsaufgaben steht die Basis <strong>tiefgestellt</strong> hinter der Zahl: <code>100₂</code>, <code>100₈</code>, <code>100₁₀</code>,{' '}
      <code>100₁₆</code>. Im Quellcode geht das nicht – dort steht ein Kennzeichen <strong>vor</strong> der Zahl: <code>0b100</code> für binär, <code>0x100</code> für hex
      (manche Sprachen schreiben <code>0o100</code> für oktal). Ohne Kennzeichen gilt dezimal.
    </P>,
    <SoHeisstDas begriff="praefix">
      Ein Vorsatz vor einer Zahl, der ihr Zahlensystem kennzeichnet: <code>0x</code> für hexadezimal, <code>0b</code> für binär. <code>0xFF</code> ist also 255,{' '}
      <code>0b1010</code> ist 10. Das Präfix gehört nicht zur Zahl selbst.
    </SoHeisstDas>,
    <Eingabe
      frage="Welchen Dezimalwert hat 0x1F?"
      pruefe={istZahl(31, {
        25: 'Die 1 steht an der Sechzehner-Stelle, nicht an der Zehner-Stelle.',
        16: 'F = 15 an der rechten Stelle zählt noch dazu.',
        115: '0x ist nur das Präfix. Die Hexzahl ist 1F.',
      })}
      tipp="0x heißt hex. 1F = 1 · 16 + F · 1, und F ist 15."
      loesung="31"
      platzhalter="Dezimal"
    >
      <P>
        1 · 16 + 15 · 1 = <strong>31</strong>.
      </P>
    </Eingabe>,
    <Wahl
      frage="Welche Zahl ist am größten?"
      optionen={[
        { text: '0b1111 1111', warum: 'Acht Einsen sind 255. Rechne die anderen beiden auch aus.' },
        { text: '377₈', warum: '3 · 64 + 7 · 8 + 7 = 255. Rechne die anderen beiden auch aus.' },
        { text: '0x100', richtig: true },
      ]}
    >
      <P>
        0x100 = 1 · 256 = <strong>256</strong>. Die anderen beiden sind 255 – einmal binär, einmal oktal geschrieben. Ohne die Kennzeichen hätte 377 klar gewonnen.
      </P>
    </Wahl>,
  ],

  pruefungsaufgabe: () => [
    <P>
      In der Prüfung kommt die Umrechnung oft als Tabelle mit Lücken: In jeder Zeile ist ein Wert gegeben, die anderen fehlen. Hier ist so eine Tabelle. Füll sie Schritt
      für Schritt aus.
    </P>,
    <div class="ls-tabelle-huelle">
      <table class="ls-tabelle">
        <thead>
          <tr>
            <th>Dezimal</th>
            <th>Binär</th>
            <th>Hexadezimal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="mono">172</td>
            <td class="mono">?</td>
            <td class="mono">?</td>
          </tr>
          <tr>
            <td class="mono">?</td>
            <td class="mono">?</td>
            <td class="mono">3C</td>
          </tr>
        </tbody>
      </table>
    </div>,
    <Wahl
      frage="Zeile 1: Mit welcher Lücke fängst du am besten an?"
      optionen={[
        { text: 'Erst Hex, dann binär', warum: 'Geht – aber durch 16 teilen ist fehleranfälliger. Aus der Binärzahl bekommst du Hex fast geschenkt.' },
        { text: 'Erst binär, dann Hex', richtig: true },
      ]}
    >
      <P>Erst binär mit „Passt es noch?“, dann die Nibbles ablesen – so rechnest du nur einmal wirklich.</P>
    </Wahl>,
    <Eingabe
      frage="Wandle die Dezimalzahl 172 in eine Binärzahl um."
      pruefe={istBinaer('10101100')}
      tipp="Passt es noch? 128 ja (Rest 44), 64 …"
      loesung="1010 1100"
      platzhalter="z. B. 0000 0000"
    >
      <P>128 + 32 + 8 + 4 = 172 → 1010 1100.</P>
    </Eingabe>,
    <Eingabe
      frage="Und jetzt 172 als Hexzahl."
      pruefe={istHex('AC', { CA: 'Die Reihenfolge bleibt: Die linke Vierergruppe wird die linke Ziffer.', 1012: 'Jede Vierergruppe wird genau ein Zeichen: 10 = A, 12 = C.' })}
      tipp="Nimm die Binärzahl von eben und teile sie in Vierergruppen: 1010 | 1100."
      loesung="AC"
      platzhalter="Hex"
    >
      <P>
        1010 = 10 = A, 1100 = 12 = C → <strong>AC</strong>. Probe: 10 · 16 + 12 = 172.
      </P>
    </Eingabe>,
    <Eingabe
      frage="Zeile 2: Welche Dezimalzahl ist die Hexzahl 3C?"
      pruefe={istZahl(60, {
        42: 'Die 3 steht an der Sechzehner-Stelle, nicht an der Zehner-Stelle.',
        312: 'C ist eine einzige Ziffer mit dem Wert 12. Rechne Ziffer · Stellenwert: 3 · 16 + 12 · 1.',
        15: 'Du hast nur die Ziffern addiert. Die 3 zählt 3 · 16.',
      })}
      tipp="3 · 16 + C · 1 – und C ist 12."
      loesung="60"
      platzhalter="Dezimal"
    >
      <P>
        3 · 16 + 12 = <strong>60</strong>. Die letzte Lücke ist dann geschenkt: 3 = 0011, C = 1100 → 0011 1100. Probe: 32 + 16 + 8 + 4 = 60.
      </P>
    </Eingabe>,
    <P>
      Damit hast du alles, was die Prüfung zu Zahlensystemen fragt. Sicher wird es durch Üben – die Aufgaben dazu warten unten. Die Zweierpotenzen brauchst du gleich
      wieder: bei den Präfixen, denn 1 KiB sind 2¹⁰ = 1.024 Byte.
    </P>,
  ],
};
