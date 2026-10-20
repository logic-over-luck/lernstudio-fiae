// Unterricht Speicherbedarf: je Teil eine Liste von Blöcken (Gliederung in speicher.js, Bausteine: lernsystem/bausteine.jsx,
// Regeln: lernsystem/LEITFADEN.md). Jedes Kapitel muss ohne die vorigen verständlich sein.

import { P, Merke, Tafel, Abbildung, Wahl, Eingabe, SoHeisstDas, B } from '../../lernsystem/bausteine.jsx';
import { istZahl } from '../../lernsystem/pruefen.js';
import { Stufen, Werte, Treppe, Pixelraster, Bildrechnung, Scan, Abtastung, Audiorechnung, Hochrechnen, Komprimierung, Mehrbedarf, Kapazitaet, Vergleich } from '../bilder/speicher.jsx';

const MIB = 1024 ** 2;
const ZWEI = 0.005; // Toleranz bei „auf zwei Nachkommastellen“

export const INHALT = {
  // ---------- Die Formel ----------
  'ein-wert': () => [
    <P>
      Im Serverraum hängt ein Temperatursensor. Jede Sekunde misst er, wie warm es ist, und der Computer speichert jeden Messwert. Die IT will wissen: <strong>Wie viel
      Speicher braucht das?</strong>
    </P>,
    <P>
      Ein Computer speichert alles als <B id="bit" />s, also als Nullen und Einsen. Die erste Frage ist darum: Wie viele Bit bekommt ein einzelner Messwert? Probier es am
      Thermometer aus. Es zeigt den Bereich von 0 bis 50 °C, gemessen werden gerade 23,4 °C.
    </P>,
    <Abbildung unter="Mit Plus und Minus die Bit je Messwert ändern">
      <Stufen start={1} />
    </Abbildung>,
    <Wahl
      frage="Der Sensor speichert jeden Messwert mit 1 Bit. Wie viele verschiedene Temperaturen kann er unterscheiden?"
      optionen={[
        { text: '1', warum: 'Ein Bit kann 0 oder 1 sein – das sind schon zwei Möglichkeiten.' },
        { text: '50', warum: 'Dafür bräuchte er 50 Stufen. Schau ins Bild: Mit 1 Bit ist die Skala nur zweigeteilt.' },
        { text: '2', richtig: true },
      ]}
    >
      <P>Mit 1 Bit gibt es nur zwei Stufen: „unter 25 °C“ (0) oder „ab 25 °C“ (1). Als Thermometer ist das ziemlich grob.</P>
    </Wahl>,
    <P>
      Jedes weitere Bit <strong>verdoppelt</strong> die Zahl der Stufen: 2 Bit ergeben 4, 3 Bit ergeben 8, 8 Bit schon 256. Mit n Bit gibt es also 2 · 2 · … · 2 = 2ⁿ
      Stufen. Schau im Bild auf die Breite einer Stufe: Bei 8 Bit ist sie nur noch 0,2 °C breit.
    </P>,
    <SoHeisstDas begriff="bittiefe">
      Wie viele Bit für einen Wert gespeichert werden. Mit einer Bittiefe von n Bit lassen sich <strong>2ⁿ verschiedene Werte</strong> unterscheiden – im Bild die Zahl
      der Stufen. Mehr Bit heißt feiner, aber auch mehr Speicher.
    </SoHeisstDas>,
    <Eingabe
      frage="Wie viele verschiedene Werte kann ein Messwert mit einer Bittiefe von 12 Bit annehmen?"
      pruefe={istZahl(4096, {
        24: '12 · 2 ist nicht 2 hoch 12. Jedes Bit verdoppelt – zwölfmal hintereinander.',
        144: '12² heißt 12 · 12. Gesucht ist 2¹², also die 2 zwölfmal mit sich selbst malgenommen.',
        4095: 'Das ist der größte Wert, wenn man bei 0 anfängt. Gefragt ist die Anzahl der Werte – die 0 zählt mit.',
      })}
      tipp="Mit n Bit gibt es 2ⁿ Werte."
      loesung="4.096"
      platzhalter="Anzahl"
    >
      <P>2¹² = 4.096. Am Thermometer wäre eine Stufe dann nur noch 50 °C ÷ 4.096 ≈ 0,01 °C breit.</P>
    </Eingabe>,
    <Wahl
      frage="Der Sensor soll mindestens 1.000 Stufen unterscheiden. Welche Bittiefe reicht gerade?"
      optionen={[
        { text: '9 Bit', warum: '2⁹ = 512 Stufen – das reicht noch nicht.' },
        { text: '1.000 Bit', warum: 'Du verwechselst die Zahl der Stufen mit der Zahl der Bit. Jedes Bit verdoppelt – wie oft musst du verdoppeln, bis du über 1.000 bist?' },
        { text: '10 Bit', richtig: true },
      ]}
    >
      <P>2¹⁰ = 1.024 – das ist die erste Zweierpotenz über 1.000. Mit 9 Bit wären es nur 512.</P>
    </Wahl>,
  ],

  'viele-werte': () => [
    <P>
      Unser Sensor speichert jeden Messwert mit 16 Bit. Ein Wert allein ist winzig. Aber er misst jede Sekunde, den ganzen Tag. Bevor wir den ganzen Tag ausrechnen, fangen
      wir klein an: mit drei Messwerten zu je 8 Bit.
    </P>,
    <Abbildung unter="Werte dazunehmen und die Bittiefe ändern – jedes Kästchen ist ein Bit">
      <Werte anzahl={3} tiefe={8} />
    </Abbildung>,
    <Wahl
      frage="Drei Messwerte mit je 8 Bit: Wie viele Bit sind das zusammen?"
      optionen={[
        { text: '11', warum: 'Du hast 3 + 8 gerechnet. Jeder der drei Werte braucht seine eigenen 8 Bit.' },
        { text: '256', warum: '256 = 2⁸ ist die Zahl der möglichen Werte eines Messwerts – nicht sein Platz. Zähl die Kästchen im Bild.' },
        { text: '24', richtig: true },
      ]}
    >
      <P>Jeder Wert belegt 8 Kästchen, drei Werte also 3 · 8 = 24 Bit. Nimm im Bild einen Wert dazu: Es kommen genau 8 Bit dazu.</P>
    </Wahl>,
    <P>
      Mehr ist es nicht. Du zählst, wie viele Werte gespeichert werden, und nimmst das mit den Bit je Wert mal. Ob die Werte Temperaturen, Bildpunkte oder Töne sind, ist
      dabei egal.
    </P>,
    <SoHeisstDas begriff="speicherbedarf">
      Wie viel Speicher Daten belegen. Unkomprimiert gilt immer: <strong>Speicherbedarf in Bit = Anzahl der Werte · Bittiefe</strong>. Im Bild: Werte · Kästchen je Wert.
    </SoHeisstDas>,
    <P>Jetzt der ganze Tag. Ein Tag hat 24 Stunden zu je 60 Minuten zu je 60 Sekunden – bei einer Messung je Sekunde also so viele Werte:</P>,
    <Tafel
      zeilen={[
        { text: '24 · 60 · 60 = 86.400 Sekunden' },
        { text: '1 Messung je s → 86.400 Werte', ton: 'summe' },
      ]}
    />,
    <Eingabe
      frage="Wie groß ist der Speicherbedarf eines Tages in Bit (86.400 Werte mit je 16 Bit)?"
      pruefe={istZahl(1382400, {
        86416: 'Du hast addiert. Jeder Wert braucht 16 Bit – also malnehmen.',
        5400: 'Du hast geteilt. Mehr Werte brauchen mehr Platz – also malnehmen.',
      })}
      tipp="Speicherbedarf in Bit = Anzahl der Werte · Bittiefe."
      loesung="1.382.400 Bit"
      platzhalter="Bit"
    >
      <P>86.400 · 16 Bit = 1.382.400 Bit.</P>
    </Eingabe>,
    <Eingabe
      frage="Ein zweiter Sensor misst nur alle 5 Sekunden. Wie viele Werte speichert er an einem Tag?"
      pruefe={istZahl(17280, {
        432000: 'Seltener messen heißt weniger Werte. Teile die Sekunden des Tages durch 5.',
        86400: 'So viele sind es bei einer Messung je Sekunde. Dieser Sensor misst nur alle 5 Sekunden.',
      })}
      tipp="Werte je Tag = 86.400 s ÷ Abstand zwischen zwei Messungen."
      loesung="17.280"
      platzhalter="Werte"
    >
      <P>
        86.400 s ÷ 5 s = 17.280 Werte. Mit 16 Bit sind das 17.280 · 16 = 276.480 Bit. Die Anzahl der Werte ändert sich – die Formel bleibt dieselbe.
      </P>
    </Eingabe>,
  ],

  umrechnen: () => [
    <P>
      1.382.400 Bit für einen Tag – mit dieser Zahl kann niemand etwas anfangen. Speicher wird in <B id="byte" /> gezählt, große Mengen in KiB, MiB und GiB. Geh die Treppe
      Stufe für Stufe hinunter und schau, durch was jeweils geteilt wird.
    </P>,
    <Abbildung unter="Zeitraum wählen und Stufe für Stufe umrechnen">
      <Treppe />
    </Abbildung>,
    <Wahl
      frage="1.382.400 Bit sind wie viele Byte?"
      optionen={[
        { text: '11.059.200', warum: 'Du hast mit 8 malgenommen. Ein Byte fasst 8 Bit – es werden also weniger Byte als Bit.' },
        { text: '172.800', richtig: true },
        { text: '1.350', warum: 'Du hast durch 1.024 geteilt. Der erste Schritt ist Bit → Byte, und 8 Bit sind 1 Byte.' },
      ]}
    >
      <P>1.382.400 ÷ 8 = 172.800 Byte. Der erste Schritt ist immer ÷ 8.</P>
    </Wahl>,
    <P>
      Ab Byte geht es in Tausender-Schritten weiter – aber nicht mit 1.000. Datenmengen rechnest du in der Prüfung mit dem <B id="binaerpraefix" />: 1 <B id="kib" /> =
      1.024 Byte (2¹⁰), 1 MiB = 1.024 KiB, 1 <B id="gib" /> = 1.024 MiB. Das kleine „i“ zeigt, dass mit 1.024 gerechnet wird.
    </P>,
    <Eingabe
      frage="Wie viele KiB sind 172.800 Byte?"
      pruefe={istZahl(168.75, {
        172.8: 'Du hast durch 1.000 geteilt – das wären kB (Dezimalpräfix). Datenmengen rechnest du mit 1.024.',
        0.16: 'Das sind schon MiB – ein Schritt zu weit. Einmal ÷ 1.024.',
      })}
      tipp="1 KiB = 1.024 Byte."
      loesung="168,75 KiB"
      platzhalter="KiB"
    >
      <P>172.800 ÷ 1.024 = 168,75 KiB. So viel Speicher braucht der Sensor an einem Tag.</P>
    </Eingabe>,
    <Merke titel="Erst am Ende runden">
      Rechne mit den vollen Zahlen weiter und runde nur das Endergebnis, meist auf zwei Nachkommastellen. Wer zwischendurch rundet, liegt am Ende oft in der zweiten Stelle
      daneben.
    </Merke>,
    <Eingabe
      frage="Der Sensor läuft ein Jahr (365 Tage). Wie viele MiB braucht er? Runde auf zwei Nachkommastellen."
      pruefe={istZahl(
        (172800 * 365) / MIB,
        {
          63.07: 'Du hast durch 1.000² geteilt (MB). Datenmengen rechnest du mit Binärpräfix: ÷ 1.024².',
          61593.75: 'Das sind KiB – noch einmal ÷ 1.024.',
          481.2: 'Hast du die Bit statt der Byte umgerechnet? Erst ÷ 8.',
        },
        ZWEI,
      )}
      tipp="Byte je Tag · 365, dann zweimal ÷ 1.024."
      loesung="60,15 MiB"
      platzhalter="MiB"
    >
      <Tafel
        zeilen={[
          { text: '172.800 Byte · 365' },
          { text: '= 63.072.000 Byte' },
          { text: '÷ 1.024 = 61.593,75 KiB' },
          { text: '÷ 1.024 ≈ 60,15 MiB', ton: 'summe' },
        ]}
      />
    </Eingabe>,
    <P>
      Diese eine Formel – Anzahl der Werte · Bit je Wert, dann ÷ 8 und je Stufe ÷ 1.024 – steckt hinter jeder Speicheraufgabe. Im nächsten Kapitel sind die Werte keine
      Temperaturen mehr, sondern die Punkte eines <strong>Bildes</strong>.
    </P>,
  ],

  // ---------- Bilder ----------
  pixel: () => [
    <P>
      Öffne ein Foto auf dem Handy und zoom immer weiter hinein. Irgendwann ist das Bild nicht mehr glatt, sondern besteht aus <strong>kleinen Quadraten</strong>. Jedes hat
      genau eine Farbe. Hier ist so ein Bild, stark vergrößert:
    </P>,
    <Abbildung unter="Breite und Höhe ändern – das Bild wird feiner oder gröber">
      <Pixelraster breite={8} hoehe={6} aufloesung />
    </Abbildung>,
    <Wahl
      frage="Das Raster ist 8 Kästchen breit und 6 hoch. Wie viele Kästchen hat es?"
      optionen={[
        { text: '14', warum: 'Du hast Breite und Höhe addiert. Es sind 6 Zeilen mit je 8 Kästchen.' },
        { text: '48', richtig: true },
        { text: '28', warum: 'Das ist der Rand rundherum (8 + 6 + 8 + 6). Gefragt ist die ganze Fläche.' },
      ]}
    >
      <P>6 Zeilen mit je 8 Kästchen: 8 · 6 = 48. Mach das Raster im Bild breiter – mit jeder Spalte kommen 6 Kästchen dazu.</P>
    </Wahl>,
    <SoHeisstDas begriff="pixel" auch="Bildpunkt">
      Ein einzelner Punkt eines Bildes mit genau einer Farbe – ein Kästchen im Raster. Der Name kommt von <em>picture element</em>, Bildelement.
    </SoHeisstDas>,
    <SoHeisstDas begriff="aufloesung">
      Wie viele Pixel ein Bild hat, angegeben als <strong>Breite × Höhe</strong> in Pixel, z. B. 1.920 × 1.080 (Full HD). Die Anzahl der Pixel ist Breite · Höhe. Mehr
      Pixel heißt: feinere Details.
    </SoHeisstDas>,
    <Eingabe
      frage="Wie viele Pixel hat ein Full-HD-Bild mit der Auflösung 1.920 × 1.080?"
      pruefe={istZahl(2073600, { 3000: 'Du hast addiert. Es sind 1.080 Zeilen mit je 1.920 Pixeln.' })}
      tipp="Anzahl der Pixel = Breite · Höhe."
      loesung="2.073.600"
      platzhalter="Pixel"
    >
      <P>1.920 · 1.080 = 2.073.600 Pixel – gut zwei Millionen.</P>
    </Eingabe>,
    <P>Bei Kameras sind die Zahlen so groß, dass man sie in Millionen angibt: „12 MP“ steht auf dem Datenblatt eines Handys.</P>,
    <SoHeisstDas begriff="megapixel">
      Eine Million Pixel. „Mega“ ist hier ein <B id="dezimalpraefix" />: 12 Megapixel sind 12 · 1.000.000 = 12.000.000 Pixel – nicht 12 · 1.024².
    </SoHeisstDas>,
    <Wahl
      frage="Wie viele Pixel hat ein Foto mit 24 Megapixel?"
      optionen={[
        { text: '25.165.824', warum: 'Das wäre 24 · 1.024². Bei Megapixel ist Mega ein Dezimalpräfix: 1.000.000.' },
        { text: '24.000', warum: 'Das wäre Kilo (1.000). Mega heißt Million.' },
        { text: '24.000.000', richtig: true },
      ]}
    >
      <P>24 · 1.000.000 = 24.000.000 Pixel. Mit 1.024 rechnest du nur Datenmengen um – Pixel werden einfach gezählt.</P>
    </Wahl>,
  ],

  farbtiefe: () => [
    <P>
      Jetzt wissen wir, wie viele Pixel ein Bild hat. Aber jedes Pixel muss sich auch seine <strong>Farbe</strong> merken – und zwar als Bits. Was passiert, wenn ein Pixel
      dafür nur 1 Bit bekommt? Stell das Bild auf 1 Bit und schau es dir an.
    </P>,
    <Abbildung unter="Die Bit je Pixel umschalten">
      <Pixelraster breite={16} hoehe={12} tiefe={24} farbtiefe />
    </Abbildung>,
    <Wahl
      frage="Mit 1 Bit je Pixel: Wie viele Farben kann ein Pixel haben?"
      optionen={[
        { text: '1', warum: 'Ein Bit kann 0 oder 1 sein – das sind schon zwei Möglichkeiten.' },
        { text: '256', warum: 'Dafür bräuchte es 8 Bit. Schalte im Bild auf 1 Bit und zähl, welche Farben übrig bleiben.' },
        { text: '2', richtig: true },
      ]}
    >
      <P>0 oder 1, also schwarz oder weiß. Mit jedem weiteren Bit verdoppelt sich die Zahl der Farben – genau wie bei der <B id="bittiefe" /> eines Messwerts.</P>
    </Wahl>,
    <SoHeisstDas begriff="farbtiefe">
      Die Bittiefe eines Pixels: wie viele Bit für seine Farbe gespeichert werden. Mit n Bit Farbtiefe sind <strong>2ⁿ Farben</strong> möglich – 1 Bit: 2, 8 Bit: 256.
    </SoHeisstDas>,
    <P>
      Üblich sind <strong>24 Bit</strong>: je 8 Bit für Rot, Grün und Blau. Jede der drei Grundfarben hat 256 Stufen, und jede Stufe Rot lässt sich mit jeder Stufe Grün
      und Blau mischen. Ab 16 Bit sieht das Auge im Bild kaum noch einen Unterschied.
    </P>,
    <Eingabe
      frage="Wie viele Farben sind mit 24 Bit Farbtiefe möglich?"
      pruefe={istZahl(16777216, {
        48: '24 · 2 ist nicht 2²⁴. Jedes Bit verdoppelt – vierundzwanzigmal.',
        576: '24² heißt 24 · 24. Gesucht ist 2²⁴.',
        768: 'Du hast die drei Grundfarben addiert (3 · 256). Jede Rot-Stufe lässt sich mit jeder Grün- und Blau-Stufe mischen – also 256 · 256 · 256.',
        16777215: 'Das ist der größte Wert ab 0. Gefragt ist die Anzahl.',
      })}
      tipp="Mit n Bit gibt es 2ⁿ Werte."
      loesung="16.777.216"
      platzhalter="Farben"
    >
      <P>2²⁴ = 256 · 256 · 256 = 16.777.216 Farben, rund 16,7 Millionen. Man nennt das auch „True Color“.</P>
    </Eingabe>,
    <Wahl
      frage="Wie viele Byte braucht ein Pixel mit 24 Bit Farbtiefe?"
      optionen={[
        { text: '24', warum: 'Das sind 24 Bit, nicht Byte. Ein Byte hat 8 Bit.' },
        { text: '3', richtig: true },
        { text: '8', warum: '8 Bit sind ein Byte – so groß ist eine Grundfarbe. Es sind aber drei.' },
      ]}
    >
      <P>24 Bit ÷ 8 = 3 Byte: eines für Rot, eines für Grün, eines für Blau. Diese 3 Byte je Pixel brauchst du gleich für die Größe eines ganzen Bildes.</P>
    </Wahl>,
  ],

  bildgroesse: () => [
    <P>
      Du machst ein Bildschirmfoto in Full HD (1.920 × 1.080) mit 24 Bit Farbtiefe und speicherst es unkomprimiert. Wie viele MiB ist die Datei groß? Erinnere dich an die
      Formel für jeden <B id="speicherbedarf" />: Anzahl der Werte · Bit je Wert.
    </P>,
    <Wahl
      frage="Was ist bei einem Bild die Anzahl der Werte?"
      optionen={[
        { text: 'die Anzahl der möglichen Farben (2²⁴)', warum: '2²⁴ sagt, welche Farben ein Pixel haben könnte. Gespeichert wird aber für jedes Pixel genau eine Farbe.' },
        { text: 'die Anzahl der Pixel', richtig: true },
        { text: 'die Farbtiefe (24)', warum: 'Die Farbtiefe ist die Bit je Wert – der zweite Faktor. Was wird gezählt?' },
      ]}
    >
      <P>
        Jedes Pixel ist ein Wert, die <B id="farbtiefe" /> sind die Bit je Wert. Also: <strong>Speicherbedarf in Bit = Breite · Höhe · Farbtiefe</strong>.
      </P>
    </Wahl>,
    <P>Danach geht es weiter wie immer: ÷ 8 ergibt Byte, zweimal ÷ 1.024 ergibt MiB. An der Tafel sieht das so aus:</P>,
    <Tafel
      zeilen={[
        { text: '1.920 · 1.080 = 2.073.600 Pixel' },
        { text: '· 24 Bit = 49.766.400 Bit' },
        { text: '÷ 8 = 6.220.800 Byte' },
        { text: '÷ 1.024 = 6.075 KiB' },
        { text: '÷ 1.024 ≈ 5,93 MiB', ton: 'summe' },
      ]}
    />,
    <P>Probier andere Auflösungen und Farbtiefen aus. Achte darauf, was sich ändert, wenn du nur die Farbtiefe verdoppelst.</P>,
    <Abbildung unter="Auflösung und Farbtiefe wählen – der Rechenweg läuft mit">
      <Bildrechnung />
    </Abbildung>,
    <Eingabe
      frage="Ein Bild hat 1.024 × 768 Pixel und 16 Bit Farbtiefe. Wie viele MiB braucht es unkomprimiert?"
      pruefe={istZahl(
        1.5,
        {
          12: 'Du hast die Bit durch 1.024² geteilt. Erst ÷ 8, dann hast du Byte.',
          1.57: 'Du hast durch 1.000² geteilt (MB). Datenmengen rechnest du mit 1.024².',
          1536: 'Das sind KiB – noch einmal ÷ 1.024.',
        },
        ZWEI,
      )}
      tipp="Breite · Höhe · Farbtiefe, dann ÷ 8 und zweimal ÷ 1.024."
      loesung="1,5 MiB"
      platzhalter="MiB"
    >
      <P>1.024 · 768 = 786.432 Pixel · 16 Bit = 12.582.912 Bit ÷ 8 = 1.572.864 Byte ÷ 1.024² = 1,5 MiB.</P>
    </Eingabe>,
    <Wahl
      frage="Dasselbe Bild soll mit 32 statt 16 Bit Farbtiefe gespeichert werden. Was passiert mit dem Speicherbedarf?"
      optionen={[
        { text: 'Er steigt um 16 MiB.', warum: 'Es kommen 16 Bit je Pixel dazu, nicht 16 MiB insgesamt.' },
        { text: 'Er wächst auf das 2¹⁶-Fache.', warum: 'So stark wächst die Zahl der Farben. Der Platz wächst nur mit den Bit je Pixel.' },
        { text: 'Er verdoppelt sich.', richtig: true },
      ]}
    >
      <P>Doppelt so viele Bit je Pixel bei gleich vielen Pixeln: 3 MiB statt 1,5 MiB. Die Zahl der Farben explodiert, der Speicher wächst nur im selben Verhältnis wie die Bit.</P>
    </Wahl>,
  ],

  scannen: () => [
    <P>
      Ein Papierfoto hat keine Pixel. Wenn du es einscannst, legt der Scanner ein Raster darüber und misst jedes Kästchen. Wie fein dieses Raster ist, steht als Zahl in
      <strong> dpi</strong> am Scanner. Das Foto ist 4 × 6 Zoll groß – Zoll ist das englische Längenmaß, 1 Zoll = 2,54 cm.
    </P>,
    <Abbildung unter="Die dpi des Scanners wählen – links das Foto in Zoll, rechts ein Ausschnitt unter der Lupe">
      <Scan />
    </Abbildung>,
    <Wahl
      frage="Der Scanner arbeitet mit 300 dpi. Wie viele Pixel liegen auf 1 Zoll nebeneinander?"
      optionen={[
        { text: '90.000', warum: 'Das sind die Pixel auf einer Fläche von 1 Zoll × 1 Zoll (300 · 300). Gefragt ist eine Reihe.' },
        { text: '300', richtig: true },
        { text: '2,54', warum: '2,54 ist die Umrechnung von Zoll in Zentimeter, keine Zahl von Pixeln.' },
      ]}
    >
      <P>300 dpi heißt: 300 Punkte auf jedem Zoll – in der Breite und in der Höhe. Ein Quadrat von 1 Zoll hat also 300 · 300 = 90.000 Pixel.</P>
    </Wahl>,
    <SoHeisstDas begriff="dpi">
      <em>dots per inch</em>, Punkte je Zoll: die <B id="aufloesung" /> beim Scannen und Drucken. Pixel einer Strecke = <strong>Länge in Zoll · dpi</strong>. Doppelte dpi
      heißt doppelt so viele Pixel in der Breite und in der Höhe – also viermal so viele Pixel.
    </SoHeisstDas>,
    <Eingabe
      frage="Das Foto mit 4 × 6 Zoll wird mit 300 dpi gescannt. Wie viele Pixel hat das Bild?"
      pruefe={istZahl(2160000, {
        7200: 'Du hast 4 · 6 · 300 gerechnet. Die dpi gelten in beide Richtungen: Breite und Höhe jeweils · 300.',
        24: 'Das ist die Fläche in Quadratzoll. Rechne erst Breite und Höhe in Pixel um.',
      })}
      tipp="Erst Breite und Höhe in Pixel (Zoll · dpi), dann malnehmen."
      loesung="2.160.000"
      platzhalter="Pixel"
    >
      <P>4 · 300 = 1.200 Pixel breit, 6 · 300 = 1.800 Pixel hoch. 1.200 · 1.800 = 2.160.000 Pixel.</P>
    </Eingabe>,
    <Eingabe
      frage="Wie viele MiB braucht der Scan mit 24 Bit Farbtiefe unkomprimiert? Runde auf zwei Nachkommastellen."
      pruefe={istZahl(
        (2160000 * 3) / MIB,
        {
          6.48: 'Du hast durch 1.000² geteilt (MB). Datenmengen rechnest du mit 1.024².',
          49.44: 'Du hast die Bit umgerechnet. Erst ÷ 8 – oder gleich 3 Byte je Pixel nehmen.',
          6328.13: 'Das sind KiB – noch einmal ÷ 1.024.',
        },
        ZWEI,
      )}
      tipp="Pixel · 3 Byte, dann zweimal ÷ 1.024."
      loesung="6,18 MiB"
      platzhalter="MiB"
    >
      <P>2.160.000 Pixel · 3 Byte = 6.480.000 Byte ÷ 1.024² ≈ 6,18 MiB.</P>
    </Eingabe>,
    <P>
      Pixel zählen, mit der Farbtiefe malnehmen, umrechnen – das ist der ganze Speicherbedarf eines Bildes. Im nächsten Kapitel gilt dieselbe Formel für <strong>Töne</strong>:
      Da sind die Werte die Messungen eines Mikrofons.
    </P>,
  ],

  // ---------- Audio ----------
  abtasten: () => [
    <P>
      Ein Mikrofon liefert keine Zahlen, sondern eine <strong>Schwingung</strong>: eine Spannung, die ständig auf und ab geht, so wie die graue Kurve im Bild. Ein Computer
      kann aber nur Zahlen speichern. Wie wird aus einer Kurve eine Folge von Zahlen?
    </P>,
    <P>
      Die Idee: in festen Abständen messen, wie hoch die Kurve gerade ist, und jeden Messwert speichern. Die grünen Punkte sind diese Messungen, die grüne Treppe ist das,
      was später wieder abgespielt wird.
    </P>,
    <Abbildung unter="Zahl der Messungen und Bit je Messung ändern">
      <Abtastung />
    </Abbildung>,
    <Wahl
      frage="Stell im Bild von 16 auf 64 Messungen. Was passiert mit der grünen Treppe?"
      optionen={[
        { text: 'Sie wird gröber.', warum: 'Mehr Messungen heißt kürzere Abstände – die Stufen werden schmaler, nicht breiter.' },
        { text: 'Sie folgt der Kurve genauer.', richtig: true },
        { text: 'Nichts.', warum: 'Schau genau hin: Die Stufen werden schmaler und die Treppe schmiegt sich an die Kurve.' },
      ]}
    >
      <P>Je öfter gemessen wird, desto genauer passt die Treppe zur Kurve – aber desto mehr Werte müssen gespeichert werden.</P>
    </Wahl>,
    <SoHeisstDas begriff="sampling" auch="Abtastung">
      Ein Signal in festen Zeitabständen messen und jeden Messwert als Zahl speichern. Aus der Kurve wird eine Folge von Werten – im Bild die grünen Punkte.
    </SoHeisstDas>,
    <SoHeisstDas begriff="abtastrate">
      Wie oft je Sekunde gemessen wird, angegeben in Hertz (1 Hz = 1 Messung je Sekunde). Eine Audio-CD hat <strong>44,1 kHz</strong>, also 44.100 Messungen je Sekunde.
    </SoHeisstDas>,
    <Eingabe
      frage="Wie viele Messwerte entstehen in einer Sekunde bei einer Abtastrate von 48 kHz?"
      pruefe={istZahl(48000, {
        48: 'Das k steht für Kilo, also · 1.000.',
        49152: 'Hertz ist eine physikalische Größe: kHz ist ein Dezimalpräfix, also · 1.000 und nicht · 1.024.',
      })}
      tipp="1 kHz = 1.000 Hz = 1.000 Messungen je Sekunde."
      loesung="48.000"
      platzhalter="Messwerte"
    >
      <P>48 kHz = 48 · 1.000 Hz = 48.000 Messwerte je Sekunde, und zwar für jede Tonspur.</P>
    </Eingabe>,
    <P>
      Jetzt der zweite Regler. Jeder Messwert wird mit einer festen Zahl von Bit gespeichert, und die bestimmt, wie viele Höhen es gibt. Stell 1 Bit ein: Der Messwert kennt
      nur noch „oben“ oder „unten“. Mit jedem Bit verdoppeln sich die Stufen – wie bei jeder <B id="bittiefe" />.
    </P>,
    <SoHeisstDas begriff="abtasttiefe">
      Mit wie vielen Bit jeder Messwert gespeichert wird – die Bittiefe einer Messung. Mit n Bit gibt es 2ⁿ Stufen; die CD hat 16 Bit, also 65.536 Stufen.
    </SoHeisstDas>,
    <Wahl
      frage="Mit 3 Bit Abtasttiefe: Auf wie viele Stufen kann ein Messwert fallen?"
      optionen={[
        { text: '3', warum: '3 ist die Zahl der Bit. Jedes Bit verdoppelt die Stufen.' },
        { text: '8', richtig: true },
        { text: '6', warum: '3 · 2 ist nicht 2³. Verdopple dreimal: 2, 4, …' },
      ]}
    >
      <P>2³ = 8 Stufen – im Bild die waagrechten Linien. Jeder Messwert landet auf einer davon.</P>
    </Wahl>,
  ],

  audiogroesse: () => [
    <P>
      Setz Kopfhörer auf und hör ein Musikstück: Links klingt es anders als rechts. Dafür wurden zwei Aufnahmen gleichzeitig gemacht, eine für jedes Ohr, und jede wird für
      sich abgetastet.
    </P>,
    <Wahl
      frage="Eine Aufnahme wird von Mono (ein Lautsprecher) auf Stereo (links und rechts) umgestellt, sonst bleibt alles gleich. Was passiert mit dem Speicherbedarf?"
      optionen={[
        { text: 'Er bleibt gleich – es ist ja dieselbe Musik.', warum: 'Jede Seite wird für sich gemessen und gespeichert. Es sind doppelt so viele Messwerte.' },
        { text: 'Er steigt um 1 Bit je Messwert.', warum: 'Die Messwerte werden nicht genauer – es werden mehr.' },
        { text: 'Er verdoppelt sich.', richtig: true },
      ]}
    >
      <P>Zwei Tonspuren, zwei Folgen von Messwerten: doppelt so viele Werte, doppelt so viel Speicher.</P>
    </Wahl>,
    <SoHeisstDas begriff="kanal">
      Eine eigene Tonspur, die für sich abgetastet und gespeichert wird. <strong>Mono</strong> hat 1 Kanal, <strong>Stereo</strong> 2 (links und rechts), 5.1-Raumklang 6.
    </SoHeisstDas>,
    <P>
      Jetzt passt alles in die bekannte Formel. Die Anzahl der Werte ist <B id="abtastrate" /> · Kanäle · Sekunden, die Bit je Wert sind die <B id="abtasttiefe" />. Eine
      Minute in CD-Qualität (44,1 kHz, 16 Bit, Stereo):
    </P>,
    <Tafel
      zeilen={[
        { text: '44.100 · 16 Bit · 2 · 60 s' },
        { text: '= 84.672.000 Bit' },
        { text: '÷ 8 = 10.584.000 Byte' },
        { text: '÷ 1.024² ≈ 10,09 MiB', ton: 'summe' },
      ]}
    />,
    <Abbildung unter="Abtastrate, Abtasttiefe, Kanäle und Dauer wählen">
      <Audiorechnung />
    </Abbildung>,
    <Eingabe
      frage="Eine Sprachaufnahme: 22,05 kHz, 8 Bit, Mono, 5 Minuten. Wie viele MiB braucht sie unkomprimiert? Runde auf zwei Nachkommastellen."
      pruefe={istZahl(
        (22050 * 300) / MIB,
        {
          6.62: 'Du hast durch 1.000² geteilt (MB). Datenmengen rechnest du mit 1.024².',
          50.47: 'Du hast die Bit umgerechnet. Erst ÷ 8.',
          0.11: 'Du hast mit 5 statt mit 300 gerechnet. Die Abtastrate gilt je Sekunde – 5 Minuten sind 300 Sekunden.',
          12.62: 'Mono heißt 1 Kanal, nicht 2.',
        },
        ZWEI,
      )}
      tipp="Abtastrate · Abtasttiefe · Kanäle · Sekunden, dann ÷ 8 und ÷ 1.024²."
      loesung="6,31 MiB"
      platzhalter="MiB"
    >
      <P>22.050 · 8 Bit · 1 · 300 s = 52.920.000 Bit ÷ 8 = 6.615.000 Byte ÷ 1.024² ≈ 6,31 MiB.</P>
    </Eingabe>,
    <Wahl
      frage="Was braucht mehr Platz: 1 Minute Stereo mit 16 Bit oder 1 Minute Mono mit 32 Bit, bei gleicher Abtastrate?"
      optionen={[
        { text: 'Stereo mit 16 Bit', warum: 'Stereo hat doppelt so viele Werte – aber jeder ist nur halb so groß. Rechne Kanäle · Bit.' },
        { text: 'Beide gleich viel', richtig: true },
        { text: 'Mono mit 32 Bit', warum: 'Die Werte sind doppelt so groß – aber es sind nur halb so viele. Rechne Kanäle · Bit.' },
      ]}
    >
      <P>
        2 Kanäle · 16 Bit = 32 Bit je Messzeitpunkt, 1 Kanal · 32 Bit = 32 Bit. Für den Speicher ist nur das Produkt wichtig. Im nächsten Kapitel rechnen wir nicht eine
        Datei, sondern ein <strong>ganzes Jahr</strong> voller Dateien.
      </P>
    </Wahl>,
  ],

  // ---------- Hochrechnen ----------
  'je-tag': () => [
    <P>
      Eine Prüfstation in einer Fabrik fotografiert jedes Bauteil, das am Band vorbeikommt: <strong>20 Bilder je Minute</strong>, 8 Stunden am Tag, an 250 Arbeitstagen im
      Jahr. Die IT soll den Speicher für ein Jahr bestellen. Zuerst die Frage: Wie viele Bilder sind das überhaupt?
    </P>,
    <Wahl
      frage="20 Bilder je Minute – wie viele sind es in einer Stunde?"
      optionen={[
        { text: '200', warum: 'Eine Stunde hat 60 Minuten, nicht 10.' },
        { text: '1.200', richtig: true },
        { text: '2.000', warum: 'Eine Stunde hat 60 Minuten, nicht 100.' },
      ]}
    >
      <P>20 · 60 = 1.200 Bilder je Stunde.</P>
    </Wahl>,
    <P>
      So geht es Stufe für Stufe weiter: von der Minute zur Stunde (· 60), von der Stunde zum Tag (· Stunden je Tag), vom Tag zum Jahr (· Arbeitstage). Schreib bei jeder
      Stufe dazu, wofür die Zahl steht – dann vergisst du keinen Faktor und nimmst keinen doppelt.
    </P>,
    <Abbildung unter="Bilder je Minute, Arbeitszeit und Arbeitstage ändern">
      <Hochrechnen />
    </Abbildung>,
    <SoHeisstDas begriff="hochrechnung">
      Von einer kleinen Menge auf eine große schließen: die Menge je Zeiteinheit Schritt für Schritt malnehmen – je Minute · 60 → je Stunde · Stunden → je Tag · Tage → im
      Jahr.
    </SoHeisstDas>,
    <Eingabe
      frage="Wie viele Bilder entstehen an einem Arbeitstag mit 8 Stunden?"
      pruefe={istZahl(9600, {
        160: 'Du hast die 60 Minuten je Stunde vergessen: 20 Bilder sind es je Minute.',
        28800: 'Die Station läuft nur 8 Stunden am Tag, nicht 24.',
      })}
      tipp="Bilder je Stunde · Stunden je Tag."
      loesung="9.600"
      platzhalter="Bilder"
    >
      <P>1.200 · 8 = 9.600 Bilder je Tag.</P>
    </Eingabe>,
    <Eingabe
      frage="Und an 250 Arbeitstagen?"
      pruefe={istZahl(2400000, { 3504000: 'Gerechnet wird mit 250 Arbeitstagen, nicht mit 365 Kalendertagen.' })}
      tipp="Bilder je Tag · Arbeitstage."
      loesung="2.400.000"
      platzhalter="Bilder"
    >
      <P>9.600 · 250 = 2.400.000 Bilder im Jahr. Lies die Aufgabe genau: Arbeitstage, Kalendertage oder Wochen – das ist der häufigste Fehler beim Hochrechnen.</P>
    </Eingabe>,
  ],

  'volle-tib': () => [
    <P>
      Jedes Bild der Prüfstation hat <strong>2 Megapixel</strong> und wird unkomprimiert mit 24 Bit Farbtiefe gespeichert. Wie viel Speicher muss die IT für ein Jahr
      bestellen – in vollen TiB? Zuerst ein einzelnes Bild.
    </P>,
    <Wahl
      frage="Wie viele Byte hat ein Bild mit 2 Megapixel und 24 Bit Farbtiefe?"
      optionen={[
        { text: '48.000.000', warum: 'Das sind Bit (2.000.000 · 24). Noch ÷ 8.' },
        { text: '6.000.000', richtig: true },
        { text: '6.291.456', warum: 'Du hast Mega als 1.024² gerechnet. Megapixel ist dezimal: 2.000.000 Pixel.' },
      ]}
    >
      <P>2.000.000 Pixel · 3 Byte = 6.000.000 Byte je Bild.</P>
    </Wahl>,
    <P>Jetzt die <B id="hochrechnung" /> von einem Bild auf das ganze Jahr – und am Ende in TiB, ein <B id="binaerpraefix" /> mit 1.024⁴ Byte:</P>,
    <Tafel
      zeilen={[
        { text: '6.000.000 Byte je Bild' },
        { text: '· 2.400.000 Bilder' },
        { text: '= 14.400.000.000.000 Byte' },
        { text: '÷ 1.024⁴ = 13,0967… TiB' },
        { text: '≈ 13,10 TiB', ton: 'summe' },
      ]}
    />,
    <Abbildung unter="Ändere die Zahlen – unten läuft der Speicher mit">
      <Hochrechnen speicher />
    </Abbildung>,
    <Eingabe
      frage="Rechne selbst: Wie viele TiB sind 14.400.000.000.000 Byte? Runde auf zwei Nachkommastellen."
      pruefe={istZahl(
        14.4e12 / 1024 ** 4,
        {
          14.4: 'Du hast durch 1.000⁴ geteilt (TB). Datenmengen rechnest du mit 1.024⁴.',
          13411.05: 'Das sind GiB – noch einmal ÷ 1.024.',
          13.09: 'Fast. 13,0967 wird auf 13,10 gerundet, nicht abgeschnitten – oder hast du zwischendurch gerundet?',
        },
        ZWEI,
      )}
      tipp="Viermal ÷ 1.024 (Byte → KiB → MiB → GiB → TiB)."
      loesung="13,10 TiB"
      platzhalter="TiB"
    >
      <P>14.400.000.000.000 ÷ 1.024⁴ = 13,0967… ≈ 13,10 TiB.</P>
    </Eingabe>,
    <Merke titel="Erst am Ende runden">
      Rundest du schon je Bild auf 5,72 MiB, kommst du am Ende auf 13,09 statt 13,10 TiB. Mit den vollen Zahlen weiterrechnen, nur das Endergebnis runden.
    </Merke>,
    <P>Jetzt die eigentliche Frage der IT: Wie viel Speicher wird bestellt? Speicher gibt es nur in ganzen Einheiten.</P>,
    <Wahl
      frage="Gefragt sind volle TiB. Berechnet sind 13,10 TiB. Was trägst du ein?"
      optionen={[
        { text: '13 TiB', warum: 'Kaufmännisch gerundet wären es 13 – aber dann fehlen 0,10 TiB, gut 100 GiB. Die Bilder passen nicht.' },
        { text: '13,10 TiB', warum: 'Das ist der Bedarf. Gefragt sind volle TiB – ganze Einheiten.' },
        { text: '14 TiB', richtig: true },
      ]}
    >
      <P>Mit 13 TiB fehlte Platz, also 14 TiB. Hier wird nicht kaufmännisch gerundet, sondern immer nach oben.</P>
    </Wahl>,
    <SoHeisstDas begriff="aufrunden">
      Auf die nächste ganze Zahl nach oben runden, egal wie klein der Rest ist: 13,10 → 14. Immer dann, wenn ganze Einheiten bereitgestellt werden müssen – volle TiB, volle
      Datenträger.
    </SoHeisstDas>,
    <P>
      Bis jetzt war alles unkomprimiert. In der Praxis werden Bilder fast immer kleiner gespeichert – und manchmal sollen sie genauer werden. Um diese{' '}
      <strong>Prozente</strong> geht es im nächsten Kapitel.
    </P>,
  ],

  // ---------- Prozente ----------
  komprimierung: () => [
    <P>
      Ein Full-HD-Bild mit 24 Bit braucht unkomprimiert 5,93 MiB. Dein Handy speichert so ein Foto aber mit 1 bis 2 MiB. Wie geht das? Ein Foto hat viele gleiche Stellen,
      etwa einen blauen Himmel. Statt „blau, blau, blau …“ 500-mal zu speichern, kann man „500 · blau“ speichern.
    </P>,
    <P>In Aufgaben steht dann zum Beispiel: Das Verfahren verringert den Speicherbedarf um 30 %.</P>,
    <Wahl
      frage="Der Speicherbedarf wird um 30 % verringert. Wie viel vom Original bleibt übrig?"
      optionen={[
        { text: '30 %', warum: 'Um 30 % verringert heißt: 30 % fallen weg. Was bleibt übrig?' },
        { text: '130 %', warum: 'Verringert heißt kleiner, nicht größer.' },
        { text: '70 %', richtig: true },
      ]}
    >
      <P>100 % − 30 % = 70 %. Du rechnest also 5,93 MiB · 0,7.</P>
    </Wahl>,
    <Abbildung unter="Prozentsatz wählen und zwischen „um“ und „auf“ umschalten">
      <Komprimierung />
    </Abbildung>,
    <P>
      Achte auf das kleine Wort: <strong>um</strong> 30 % verringert heißt, 30 % fallen weg und 70 % bleiben. <strong>Auf</strong> 30 % verringert heißt, nur 30 % bleiben.
      Schalte im Bild um und vergleiche die Balken.
    </P>,
    <SoHeisstDas begriff="komprimierung">
      Daten so umschreiben, dass sie weniger Speicher brauchen. <strong>Verlustfrei</strong> (z. B. ZIP, PNG): Das Original lässt sich genau wiederherstellen.{' '}
      <strong>Verlustbehaftet</strong> (z. B. JPEG, MP3): Details, die kaum auffallen, gehen verloren – dafür wird es viel kleiner.
    </SoHeisstDas>,
    <Tafel
      zeilen={[
        { text: '6.220.800 Byte ≈ 5,93 MiB' },
        { text: 'um 30 % verringert: · 0,7' },
        { text: '5,9326… · 0,7 ≈ 4,15 MiB', ton: 'summe' },
      ]}
    />,
    <Eingabe
      frage="Ein 4K-Bild (3.840 × 2.160, 24 Bit) braucht unkomprimiert 23,73 MiB. Die Komprimierung verringert den Bedarf um 75 %. Wie viele MiB bleiben?"
      pruefe={istZahl((3840 * 2160 * 3 * 0.25) / MIB, { 17.8: 'Das sind die 75 %, die wegfallen. Gefragt ist, was bleibt: 25 %.' }, ZWEI)}
      tipp="Um p % verringert: · (1 − p ÷ 100)."
      loesung="5,93 MiB"
      platzhalter="MiB"
    >
      <P>23,7305… MiB · 0,25 ≈ 5,93 MiB. Ein 4K-Bild braucht komprimiert so viel wie ein Full-HD-Bild ohne Komprimierung.</P>
    </Eingabe>,
  ],

  mehrbedarf: () => [
    <P>
      Ein Fotostudio speichert seine Bilder bisher mit 16 Bit Farbtiefe. Künftig sollen es 24 Bit sein, die Auflösung bleibt gleich. Die Chefin fragt: <strong>Um wie viel
      Prozent</strong> brauchen wir mehr Speicher?
    </P>,
    <Wahl
      frage="Von 16 auf 24 Bit je Pixel, gleiche Auflösung: Um wie viel Prozent steigt der Speicherbedarf?"
      optionen={[
        { text: '8 %', warum: '8 ist der Unterschied in Bit, kein Prozentwert. Wie viel sind 8 Bit von den alten 16?' },
        { text: '33,33 %', warum: 'Du hast den Zuwachs mit dem neuen Wert verglichen. „Mehr“ bezieht sich auf den alten Wert.' },
        { text: '50 %', richtig: true },
        { text: '150 %', warum: '150 % ist der neue Bedarf im Verhältnis zum alten. Gefragt ist nur das, was dazukommt.' },
      ]}
    >
      <P>Dazu kommen 8 Bit, und 8 von 16 ist die Hälfte: 50 % mehr.</P>
    </Wahl>,
    <Abbildung unter="Bisherige und künftige Farbtiefe wählen">
      <Mehrbedarf />
    </Abbildung>,
    <P>
      Weil die Auflösung gleich bleibt, wächst der Speicher im selben Verhältnis wie die Bit je Pixel – die Pixel musst du gar nicht ausrechnen. Wichtig ist der{' '}
      <strong>Bezugswert</strong>: Prozent „mehr“ vergleicht den Zuwachs immer mit dem alten Stand.
    </P>,
    <SoHeisstDas begriff="mehrbedarf">
      Wie viel zusätzlich gebraucht wird als bisher. In Prozent, bezogen auf den alten Wert: <strong>(neu − alt) ÷ alt · 100</strong>. Im Bild: der orange Zuwachs im
      Vergleich zum alten Balken.
    </SoHeisstDas>,
    <Tafel
      zeilen={[
        { text: '(24 − 16) ÷ 16 · 100' },
        { text: '= 8 ÷ 16 · 100 = 50 %', ton: 'summe' },
      ]}
    />,
    <Eingabe
      frage="Statt 8 Bit sollen 24 Bit gespeichert werden. Wie groß ist der Mehrbedarf in Prozent?"
      pruefe={istZahl(200, {
        300: 'Das ist der neue Bedarf im Verhältnis zum alten (24 ÷ 8 = 3, also 300 %). Zieh die 100 % ab, die schon da waren.',
        66.67: 'Du hast durch den neuen Wert geteilt. Bezugswert ist der alte: 8.',
        16: 'Das ist der Unterschied in Bit. Jetzt noch ÷ 8 · 100.',
      })}
      tipp="(neu − alt) ÷ alt · 100."
      loesung="200 %"
      platzhalter="%"
    >
      <P>(24 − 8) ÷ 8 · 100 = 16 ÷ 8 · 100 = 200 %. Der Bedarf verdreifacht sich, also kommen 200 % dazu.</P>
    </Eingabe>,
    <Eingabe
      frage="Ein Archiv wächst von 3,2 TiB auf 4 TiB. Wie groß ist der Mehrbedarf in Prozent?"
      pruefe={istZahl(25, {
        20: 'Du hast durch 4 geteilt. Bezugswert ist der alte Stand: 3,2 TiB.',
        0.8: 'Das ist der Zuwachs in TiB. Jetzt noch ÷ 3,2 · 100.',
        125: 'Das ist der neue Stand im Verhältnis zum alten. Ohne die 100 %, die schon da waren, bleibt der Mehrbedarf.',
      })}
      tipp="(neu − alt) ÷ alt · 100."
      loesung="25 %"
      platzhalter="%"
    >
      <P>
        (4 − 3,2) ÷ 3,2 · 100 = 0,8 ÷ 3,2 · 100 = 25 %. Die Formel gilt für jede Größe, nicht nur für Bit. Bleibt die wichtigste Frage: Passt das alles auf den Speicher, den
        es gibt? Das klärt das letzte Kapitel.
      </P>
    </Eingabe>,
  ],

  // ---------- Reicht der Speicher? ----------
  kapazitaet: () => [
    <P>
      Du kaufst eine Speicherkarte, auf der Packung steht <strong>64 GB</strong>. Am Computer zeigt Windows aber nur 59,6 GB an – bevor auch nur eine Datei darauf ist.
    </P>,
    <Wahl
      frage="Wohin sind die 4,4 GB verschwunden?"
      optionen={[
        { text: 'Der Hersteller hat geschummelt.', warum: 'Auf der Karte sind wirklich 64.000.000.000 Byte. Es liegt daran, wie gezählt wird.' },
        { text: 'Hersteller und Computer zählen in verschiedenen Einheiten.', richtig: true },
        { text: 'Das Dateisystem hat sie belegt.', warum: 'Ein wenig Platz braucht es tatsächlich – aber 4,4 GB? Rechne nach: 64 · 1.000³ ÷ 1.024³.' },
      ]}
    >
      <P>
        Der Hersteller zählt mit dem <B id="dezimalpraefix" />: 1 GB = 1.000³ Byte. Windows teilt durch 1.024³, also in <B id="gib" /> – auch wenn es „GB“ dranschreibt.
      </P>
    </Wahl>,
    <Abbildung unter="Herstellerangabe wählen – oben gezählt in GB, unten in GiB">
      <Kapazitaet />
    </Abbildung>,
    <P>
      Schau auf das Lineal: Es sind dieselben Byte, nur sind die GiB-Striche weiter auseinander. Ein GiB ist 1,024³ ≈ 1,074-mal so groß wie ein GB, darum passen weniger
      davon hinein. Bei TB und TiB ist der Unterschied noch größer.
    </P>,
    <SoHeisstDas begriff="speicherkapazitaet">
      Wie viele Daten ein Speicher fassen kann. Hersteller geben sie mit Dezimalpräfix an (1 GB = 1.000³ Byte, 1 TB = 1.000⁴ Byte). Zum Vergleich mit einem Bedarf in GiB
      rechnest du sie über Byte um.
    </SoHeisstDas>,
    <Tafel
      zeilen={[
        { text: '64 GB = 64 · 1.000³ Byte' },
        { text: '= 64.000.000.000 Byte' },
        { text: '÷ 1.024³ ≈ 59,60 GiB', ton: 'summe' },
      ]}
    />,
    <Eingabe
      frage="Eine Festplatte hat laut Hersteller 4 TB. Wie viele TiB sind das? Runde auf zwei Nachkommastellen."
      pruefe={istZahl(
        4e12 / 1024 ** 4,
        {
          3.91: 'Du hast nur einmal durch 1,024 geteilt. Von TB zu TiB sind es vier Stufen: · 1.000⁴, dann ÷ 1.024⁴.',
          4: 'TB und TiB sind nicht dasselbe. Rechne über Byte: 4 · 1.000⁴ ÷ 1.024⁴.',
          3725.29: 'Das sind GiB – noch einmal ÷ 1.024.',
        },
        ZWEI,
      )}
      tipp="Erst in Byte (· 1.000⁴), dann ÷ 1.024⁴."
      loesung="3,64 TiB"
      platzhalter="TiB"
    >
      <P>4 · 1.000⁴ = 4.000.000.000.000 Byte ÷ 1.024⁴ ≈ 3,64 TiB. Auf der „4-TB-Platte“ sind also nur 3,64 TiB Platz.</P>
    </Eingabe>,
  ],

  vergleichen: () => [
    <P>
      Eine Fotografin will 2.600 Full-HD-Fotos (24 Bit, unkomprimiert) auf ihre Karte mit <strong>16 GB</strong> kopieren. Ein Bild braucht 6.220.800 Byte, alle zusammen
      6.220.800 · 2.600 = 16.174.080.000 Byte. Das sind ÷ 1.024³ ≈ <strong>15,06 GiB</strong>.
    </P>,
    <Wahl
      frage="Bedarf 15,06 GiB, Karte 16 GB. Reicht die Karte?"
      optionen={[
        { text: 'Ja, 15,06 ist kleiner als 16.', warum: 'Du vergleichst GiB mit GB – zwei verschiedene Einheiten. Rechne die Karte erst in GiB um.' },
        { text: 'Das kann man nicht sagen.', warum: 'Doch – sobald beides in derselben Einheit steht.' },
        { text: 'Nein.', richtig: true },
      ]}
    >
      <P>Die Karte hat 16 · 1.000³ Byte ÷ 1.024³ ≈ 14,90 GiB. Der Bedarf von 15,06 GiB ist größer – es fehlen gut 150 MiB.</P>
    </Wahl>,
    <Abbildung unter="Zahl der Bilder und Größe der Karte ändern">
      <Vergleich />
    </Abbildung>,
    <Tafel
      zeilen={[
        { text: 'Bedarf: 16.174.080.000 Byte' },
        { text: '÷ 1.024³ ≈ 15,06 GiB' },
        { text: 'Karte: 16.000.000.000 Byte' },
        { text: '÷ 1.024³ ≈ 14,90 GiB' },
        { text: '15,06 > 14,90 → reicht nicht', ton: 'summe' },
      ]}
    />,
    <Merke titel="Erst dieselbe Einheit, dann vergleichen">
      Ob du alles in GiB, in GB oder in Byte vergleichst, ist egal – Hauptsache, beide Seiten stehen in derselben Einheit. In Byte siehst du es sofort: 16.174.080.000 ist
      mehr als 16.000.000.000.
    </Merke>,
    <Wahl
      frage="Ein Jahresarchiv braucht 3,43 TiB. Vorhanden ist eine Festplatte mit 4 TB. Wie beurteilst du das?"
      optionen={[
        { text: 'Reicht nicht: 4 TB sind weniger als 3,43 TiB.', warum: 'Rechne nach: 4 TB = 3,64 TiB, das ist mehr als 3,43 TiB.' },
        { text: 'Reicht locker, 0,57 TiB bleiben frei.', warum: '4 − 3,43 mischt TB und TiB. In TiB bleiben nur 3,64 − 3,43 TiB.' },
        { text: 'Reicht, aber nur mit etwa 0,21 TiB Reserve.', richtig: true },
      ]}
    >
      <P>
        4 TB = 3,64 TiB, das sind 0,21 TiB mehr als nötig. In der Prüfung gehört zum Urteil die Begründung mit Zahlen – und ein Satz zur Reserve: Wächst das Archiv weiter, wird
        es eng.
      </P>
    </Wahl>,
    <P>
      Damit hast du das ganze Thema beisammen: Werte zählen, mit den Bit je Wert malnehmen, ÷ 8 und je Stufe ÷ 1.024, erst am Ende runden – und vor jedem Vergleich alles in
      dieselbe Einheit bringen.
    </P>,
  ],
};
