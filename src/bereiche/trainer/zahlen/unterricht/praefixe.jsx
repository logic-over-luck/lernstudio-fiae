// Unterricht Bit, Byte und Präfixe: je Teil eine Liste von Blöcken (Gliederung in praefixe.js, Bausteine: lernsystem/bausteine.jsx).
// Jedes Kapitel muss ohne die vorigen verständlich sein (Vorwissen steht unter „Baut auf“).

import { P, Merke, Tafel, Abbildung, Wahl, Eingabe, SoHeisstDas, B } from '../../lernsystem/bausteine.jsx';
import { istZahl } from '../../lernsystem/pruefen.js';
import { Potenzen } from '../bilder/zahlensysteme.jsx';
import { Zeichen, Dreiergruppen, Treppe, Familien, GleicheMenge, Takt, Rate } from '../bilder/praefixe.jsx';

export const INHALT = {
  // ---------- Bit und Byte ----------
  'acht-bit': () => [
    <P>
      Ein <B id="bit" /> kann genau zwei Dinge speichern: 0 oder 1, aus oder an. Für eine Ja-nein-Frage reicht das. Aber wie speichert ein Computer einen{' '}
      <strong>Buchstaben</strong>?
    </P>,
    <P>
      Zähl kurz durch, was auf einer Tastatur steht: 26 Großbuchstaben, 26 Kleinbuchstaben, 10 Ziffern, dazu Leerzeichen und Satzzeichen. Das sind rund{' '}
      <strong>100 verschiedene Zeichen</strong>. Jedes braucht sein eigenes Muster aus Nullen und Einsen.
    </P>,
    <Wahl
      frage="Wie viele Bit braucht man mindestens, damit jedes von rund 100 Zeichen ein eigenes Muster bekommt?"
      optionen={[
        { text: '4 Bit', warum: '4 Bit ergeben nur 16 Muster. Jedes Bit mehr verdoppelt – wie oft musst du noch verdoppeln?' },
        { text: '7 Bit', richtig: true },
        { text: '100 Bit', warum: 'Das wäre ein Bit je Zeichen. Bits lassen sich aber kombinieren: Schon 2 Bit ergeben 4 Muster (00, 01, 10, 11).' },
      ]}
    >
      <P>
        Jedes Bit verdoppelt die Zahl der Muster: 2, 4, 8, 16, 32, 64, 128. Erst mit 7 Bit (2⁷ = 128) bekommt jedes der 100 Zeichen sein eigenes. Probier es am Regler aus:
      </P>
    </Wahl>,
    <Abbildung unter="Schieb den Regler: Jedes Bit mehr verdoppelt die Zahl der Werte.">
      <Potenzen start={7} />
    </Abbildung>,
    <P>
      Genau so hat man früher Zeichen gespeichert: mit 7 Bit (der ASCII-Code). Rechner arbeiten aber am liebsten mit Paketen, deren Größe selbst eine{' '}
      <B id="zweierpotenz" /> ist. Durchgesetzt hat sich deshalb ein Paket aus <strong>8 Bit</strong>. Das achte Bit lässt Platz für weitere Zeichen.
    </P>,
    <SoHeisstDas begriff="byte">
      Ein Paket aus <strong>8 Bit</strong>. Das Byte ist die Grundeinheit für Datenmengen: Speicher wird in Byte gezählt, nicht in einzelnen Bit. Ein Zeichen wie „A“
      belegt ein Byte.
    </SoHeisstDas>,
    <Wahl
      frage="Wie viele verschiedene Werte kann ein Byte darstellen?"
      optionen={[
        { text: '8', warum: 'Das ist die Zahl der Bit. Gefragt ist, wie viele Muster sich aus 8 Bit bilden lassen.' },
        { text: '255', warum: '255 ist der größte Wert. Aber die 0 zählt auch mit.' },
        { text: '256', richtig: true },
      ]}
    >
      <P>
        2⁸ = <strong>256</strong> Werte, von <code>0000 0000</code> (0) bis <code>1111 1111</code> (255). Ein Byte, ein Zeichen – wie viel Bit ein ganzes Wort braucht,
        rechnest du im nächsten Teil.
      </P>
    </Wahl>,
  ],

  'bit-byte': () => [
    <P>
      Ein Wort besteht aus mehreren Zeichen. Wenn jedes Zeichen ein <B id="byte" /> belegt – wie viel Platz braucht dann „Hallo“? Im Bild steht jedes Zeichen mit
      seinen 8 Bit. Tipp auch ein eigenes Wort ein.
    </P>,
    <Abbildung>
      <Zeichen start="Hallo" />
    </Abbildung>,
    <Wahl
      frage="„Hallo“ belegt 5 Byte. Wie viele Bit sind das?"
      optionen={[
        { text: '5', warum: 'Das ist die Zahl der Byte. Jedes Byte besteht aus mehreren Bit.' },
        { text: '40', richtig: true },
        { text: '13', warum: 'Du hast 5 + 8 gerechnet. Jedes der 5 Byte hat 8 Bit – das ist eine Malaufgabe.' },
      ]}
    >
      <P>5 Byte · 8 = 40 Bit. Im Bild siehst du sie: fünf Kästchen mit je acht Nullen und Einsen.</P>
    </Wahl>,
    <P>
      Daraus folgen die zwei Rechenregeln. Von Byte nach Bit: Jedes Byte hat 8 Bit, also <strong>mal 8</strong>. Von Bit nach Byte: Je 8 Bit bilden ein Byte, also{' '}
      <strong>geteilt durch 8</strong>.
    </P>,
    <Tafel zeilen={[{ text: '250 Byte · 8 = 2.000 Bit' }, { text: '4.096 Bit ÷ 8 = 512 Byte' }]} />,
    <Merke titel="Bit und Byte">
      Byte → Bit: <strong>· 8</strong>. Bit → Byte: <strong>÷ 8</strong>. Zur Probe: Die Zahl der Bit ist immer die größere.
    </Merke>,
    <Eingabe
      frage="Eine Nachricht ist 4.096 Bit lang. Wie viele Byte sind das?"
      pruefe={istZahl(512, {
        32768: 'Das ist mal 8 gerechnet. Byte ist die größere Einheit – die Zahl muss kleiner werden.',
        4: 'Das ist durch 1.024 geteilt. Hier geht es nur um Bit und Byte: 8 Bit sind ein Byte.',
      })}
      tipp="Je 8 Bit bilden ein Byte."
      loesung="512 Byte"
      platzhalter="Byte"
    >
      <P>4.096 ÷ 8 = 512 Byte.</P>
    </Eingabe>,
    <Eingabe
      frage="Und wie viele Bit sind 250 Byte?"
      pruefe={istZahl(2000, {
        31.25: 'Du hast geteilt. Jedes Byte besteht aus 8 Bit – die Zahl der Bit muss größer werden.',
        258: 'Du hast 8 addiert. Jedes der 250 Byte hat 8 Bit.',
      })}
      tipp="Jedes Byte hat 8 Bit."
      loesung="2.000 Bit"
      platzhalter="Bit"
    >
      <P>250 · 8 = 2.000 Bit.</P>
    </Eingabe>,
  ],

  'gross-klein': () => [
    <P>
      Bit und Byte beginnen mit demselben Buchstaben. Auf einem Speicherchip steht <code>16 Gb</code>, auf einem USB-Stick <code>16 GB</code>. Das G bedeutet bei beiden
      dasselbe – was genau, klärt das nächste Kapitel. Nur der letzte Buchstabe ist anders.
    </P>,
    <Wahl
      frage="Was ist mehr: 16 Gb oder 16 GB?"
      optionen={[
        { text: '16 GB', richtig: true },
        { text: '16 Gb', warum: 'Das kleine b steht für Bit, die kleinere Einheit.' },
        { text: 'gleich viel', warum: 'Die Zahl und das G sind gleich – aber b und B sind verschiedene Einheiten.' },
      ]}
    >
      <P>
        16 GB sind 8-mal so viel wie 16 Gb. Denn es gilt eine feste Regel: <strong>großes B = Byte</strong>, <strong>kleines b oder „bit“ = Bit</strong>.
      </P>
    </Wahl>,
    <Tafel zeilen={[{ text: '16 GB = 16 Gigabyte' }, { text: '16 Gb = 16 Gigabit' }, { text: '16 Gb ÷ 8 = 2 GB', ton: 'summe' }]} />,
    <P>
      Das kleine b begegnet dir vor allem bei Geschwindigkeiten: Internetanschlüsse und Netzwerke werden in Bit je Sekunde angegeben, also <code>Mbit/s</code> (auch{' '}
      <code>Mb/s</code> oder <code>Mbps</code>). Dateien und Speicher dagegen zählt man in <B id="byte" />.
    </P>,
    <Wahl
      frage="Dein Browser lädt mit 10 MB/s herunter. Wie viel Mbit/s sind das?"
      optionen={[
        { text: '1,25 Mbit/s', warum: 'Du hast durch 8 geteilt. Von Byte nach Bit wird die Zahl aber größer.' },
        { text: '80 Mbit/s', richtig: true },
        { text: '10 Mbit/s', warum: 'MB und Mbit sind verschiedene Einheiten – ein Byte hat 8 Bit.' },
      ]}
    >
      <P>
        10 MB/s · 8 = <strong>80 Mbit/s</strong>. Das M bleibt stehen, nur Byte wird zu Bit. Was das M und die anderen Buchstaben davor bedeuten, zeigt das nächste Kapitel.
      </P>
    </Wahl>,
  ],

  // ---------- Dezimalpräfixe ----------
  kilo: () => [
    <P>
      Im Datenblatt einer Speicherkarte steht die Kapazität ganz genau: <code>64.000.000.000 Byte</code>. Elf Ziffern. Solche Zahlen liest niemand gern – und beim
      Abschreiben fehlt schnell eine Null.
    </P>,
    <P>Die Lösung kennst du aus dem Alltag. Niemand sagt: „Der Wanderweg ist 3.500 Meter lang.“ Man sagt 3,5 Kilometer.</P>,
    <Wahl
      frage="Ein Wanderweg ist 3,5 km lang. Wie viele Meter sind das?"
      optionen={[
        { text: '350 m', warum: 'Das wäre 3,5 · 100. Das k steht aber für tausend.' },
        { text: '3.500 m', richtig: true },
        { text: '35.000 m', warum: 'Ein Kilometer hat 1.000 Meter, nicht 10.000.' },
      ]}
    >
      <P>Das k (Kilo) heißt „tausend“: 3,5 · 1.000 m = 3.500 m.</P>
    </Wahl>,
    <SoHeisstDas begriff="praefix">
      Ein Vorsatz vor einer Einheit, der für einen Faktor steht. In km steht k (Kilo) für 1.000: Statt 3.500 m schreibst du 3,5 km. Die Einheit bleibt der Meter – nur die
      Zahl wird kürzer.
    </SoHeisstDas>,
    <P>
      Mit Byte funktioniert das genauso. Hier ist die Zahl aus dem Datenblatt, in Dreiergruppen. Jede Gruppe ist eine Stufe. Wähl eine Einheit und schau, wohin das
      Komma springt.
    </P>,
    <Abbildung>
      <Dreiergruppen wert={64000000000} einheit="B" start={0} />
    </Abbildung>,
    <Wahl
      frage="Wie viele kB sind 64.000.000.000 Byte?"
      optionen={[
        { text: '64 kB', warum: 'Das wären nur 64.000 Byte. Ein k ersetzt genau eine Dreiergruppe.' },
        { text: '64.000.000 kB', richtig: true },
        { text: '64.000.000.000.000 kB', warum: 'Die Einheit wird größer, also muss die Zahl kleiner werden.' },
      ]}
    >
      <P>Ein k steht für 1.000: 64.000.000.000 Byte ÷ 1.000 = 64.000.000 kB. Das Komma rückt um eine Dreiergruppe nach links.</P>
    </Wahl>,
    <SoHeisstDas begriff="kb" auch="Kilobyte">
      1 kB = <strong>1.000 Byte</strong>. Das k ist klein geschrieben, genau wie bei km und kg. Auf die Speicherkarte passen 64 Millionen davon.
    </SoHeisstDas>,
    <P>
      64.000.000 kB ist kürzer, aber noch nicht schön. Im Bild kannst du weitergehen, bis <strong>64 GB</strong> dasteht – so steht es auch auf der Verpackung. Welche
      Stufen es gibt, zeigt der nächste Teil.
    </P>,
  ],

  'treppe-dezimal': () => [
    <P>
      Nach Kilo geht es auf dieselbe Art weiter: Jede Stufe ist das 1.000-Fache der vorigen. Stell dir eine Treppe vor, unten das Byte. Tipp dich durch die Stufen und schau,
      wie die Bytezahl wächst.
    </P>,
    <Abbildung>
      <Treppe basis={1000} start={1} />
    </Abbildung>,
    <Wahl
      frage="Wie viele Byte sind 1 GB?"
      optionen={[
        { text: '1.000.000 Byte', warum: 'Das ist 1 MB. Zähl die Stufen ab Byte: k, M, G.' },
        { text: '1.000.000.000 Byte', richtig: true },
        { text: '1.000 Byte', warum: 'Das ist 1 kB, die erste Stufe. G ist die dritte.' },
      ]}
    >
      <P>G ist die dritte Stufe: 1.000 · 1.000 · 1.000 = 1.000³ = 10⁹ = 1.000.000.000 Byte – eine Milliarde.</P>
    </Wahl>,
    <SoHeisstDas begriff="dezimalpraefix">
      Präfixe, die in Schritten von 1.000 wachsen: k (Kilo) = 10³, M (Mega) = 10⁶, G (Giga) = 10⁹, T (Tera) = 10¹². „Dezimal“, weil es Potenzen von 10 sind. Es sind
      dieselben Präfixe wie bei km, kg oder MHz.
    </SoHeisstDas>,
    <P>
      Umrechnen geht wie auf der Treppe: Eine Stufe <strong>nach unten</strong> (zur kleineren Einheit) heißt <strong>· 1.000</strong>, eine Stufe{' '}
      <strong>nach oben</strong> heißt <strong>÷ 1.000</strong>. Zwei Stufen nach unten sind zweimal · 1.000:
    </P>,
    <Tafel zeilen={[{ text: '2,5 GB · 1.000 = 2.500 MB' }, { text: '2.500 MB · 1.000 = 2.500.000 kB' }]} />,
    <Eingabe
      frage="Wie viele MB sind 0,75 GB?"
      pruefe={istZahl(750, {
        0.00075: 'Du hast geteilt. Von GB nach MB geht es eine Stufe nach unten – die Zahl wird größer.',
        750000: 'Das sind zwei Stufen. Von GB nach MB ist es nur eine.',
        768: 'Das ist mit 1.024 gerechnet. Dezimalpräfixe wachsen in Schritten von 1.000.',
      })}
      tipp="Eine Stufe nach unten: · 1.000."
      loesung="750 MB"
      platzhalter="MB"
    >
      <P>0,75 · 1.000 = 750 MB.</P>
    </Eingabe>,
    <Eingabe
      frage="Eine DVD fasst laut Hersteller 4.700 MB. Wie viele GB sind das?"
      pruefe={istZahl(4.7, {
        4700000: 'Von MB nach GB geht es nach oben: Die Einheit wird größer, die Zahl kleiner.',
        0.0047: 'Das sind zwei Stufen. M → G ist nur eine.',
        4.59: 'Das ist mit 1.024 gerechnet. Hersteller rechnen dezimal: ÷ 1.000.',
      })}
      tipp="Eine Stufe nach oben: ÷ 1.000."
      loesung="4,7 GB"
      platzhalter="GB"
    >
      <P>4.700 ÷ 1.000 = 4,7 GB – genau das steht auf jeder DVD-Hülle.</P>
    </Eingabe>,
    <Merke titel="Größere Einheit, kleinere Zahl">
      Die Menge bleibt gleich, nur die Einheit ändert sich. Wird die Einheit größer, wird die Zahl kleiner – und umgekehrt.
    </Merke>,
    <P>
      So weit ist alles vertraut: Kilo heißt tausend, wie überall. Doch in der IT gibt es eine zweite Treppe, deren Stufen nicht 1.000, sondern 1.024 hoch sind. Warum, zeigt
      das nächste Kapitel.
    </P>,
  ],

  // ---------- Binärpräfixe ----------
  'warum-1024': () => [
    <P>
      Ein Computer nummeriert seine Speicherzellen durch, damit er sie wiederfindet – natürlich mit Bits. Angenommen, für die Nummer hat er 10 <B id="bit" />. Wie viele
      Zellen kann er damit unterscheiden? Stell den Regler auf 10.
    </P>,
    <Abbildung>
      <Potenzen start={10} />
    </Abbildung>,
    <Wahl
      frage="Wie viele Speicherzellen kann man mit 10 Bit durchnummerieren?"
      optionen={[
        { text: '1.000', warum: 'Bits zählen nicht in Zehnerschritten. Jedes Bit verdoppelt: 2, 4, 8 … – wo landest du nach 10 Bit?' },
        { text: '1.024', richtig: true },
        { text: '1.023', warum: '1.023 ist die höchste Nummer. Die 0 ist aber auch eine Nummer.' },
      ]}
    >
      <P>
        2¹⁰ = <strong>1.024</strong> Nummern, von 0 bis 1.023. Speicher wächst darum in <B id="zweierpotenz">Zweierpotenzen</B>: 1.024, 2.048, 4.096 … – nie genau
        1.000.
      </P>
    </Wahl>,
    <P>
      1.024 liegt nah an 1.000. Darum hat man lange einfach „Kilobyte“ gesagt und 1.024 Byte gemeint. Das ging gut, bis die Zahlen größer wurden. Dann wusste niemand mehr,
      ob ein „Kilobyte“ 1.000 oder 1.024 Byte hat.
    </P>,
    <P>
      Die Lösung (seit 1998 genormt): Für 1.024 gibt es eigene Präfixe. Du erkennst sie am <strong>i</strong> für „binär“: Ki, Mi, Gi, Ti.
    </P>,
    <SoHeisstDas begriff="binaerpraefix">
      Ein Präfix, das für eine Potenz von 1.024 = 2¹⁰ steht: Ki = 1.024, Mi = 1.024², Gi = 1.024³, Ti = 1.024⁴. Du erkennst es am <strong>i</strong>. Gesprochen: Kibi,
      Mebi, Gibi, Tebi.
    </SoHeisstDas>,
    <SoHeisstDas begriff="kib" auch="Kibibyte">
      1 KiB = <strong>1.024 Byte</strong>. Das K ist groß, dahinter steht das i. Zum Vergleich: 1 kB = 1.000 Byte.
    </SoHeisstDas>,
    <Wahl
      frage="Welche Angabe meint genau 2.048 Byte?"
      optionen={[
        { text: '2 kB', warum: 'Ohne i ist es ein Dezimalpräfix: 2 kB = 2.000 Byte.' },
        { text: '2 Kib', warum: 'Das kleine b steht für Bit. 2 Kib sind 2.048 Bit, also nur 256 Byte.' },
        { text: '2 KiB', richtig: true },
      ]}
    >
      <P>2 KiB = 2 · 1.024 = 2.048 Byte. Großes K, i, großes B.</P>
    </Wahl>,
  ],

  'treppe-binaer': () => [
    <P>
      Die zweite Treppe sieht aus wie die erste – nur ist jede Stufe 1.024-mal so groß wie die darunter. Vergleich die Bytezahlen mit der Treppe aus 1.000er-Stufen.
    </P>,
    <Abbildung>
      <Treppe basis={1024} start={2} />
    </Abbildung>,
    <Wahl
      frage="Wie viele KiB sind 1 MiB?"
      optionen={[
        { text: '1.000 KiB', warum: 'Das wäre die Treppe mit 1.000. Mit i ist jede Stufe 1.024-mal so groß.' },
        { text: '1.024 KiB', richtig: true },
        { text: '1.048.576 KiB', warum: 'Das ist die Zahl der Byte. KiB liegt nur eine Stufe unter MiB.' },
      ]}
    >
      <P>Eine Stufe: 1 MiB = 1.024 KiB = 1.024 · 1.024 Byte = 1.048.576 Byte.</P>
    </Wahl>,
    <SoHeisstDas begriff="mib" auch="Mebibyte">
      1 MiB = 1.024 KiB = 1.024² Byte = <strong>1.048.576 Byte</strong>. Also etwas mehr als eine Million Byte.
    </SoHeisstDas>,
    <SoHeisstDas begriff="gib" auch="Gibibyte">
      1 GiB = 1.024 MiB = 1.024³ Byte = <strong>1.073.741.824 Byte</strong>. Eine Stufe darüber liegt das TiB (Tebibyte) mit 1.024⁴ Byte.
    </SoHeisstDas>,
    <P>
      Gerechnet wird wie auf der anderen Treppe, nur mit 1.024: eine Stufe nach unten <strong>· 1.024</strong>, eine nach oben <strong>÷ 1.024</strong>. In der Prüfung
      bekommst du oft eine große Bytezahl, die du Stufe für Stufe nach oben rechnest:
    </P>,
    <Tafel zeilen={[{ text: '5.242.880 Byte' }, { text: '÷ 1.024 = 5.120 KiB' }, { text: '÷ 1.024 = 5 MiB', ton: 'summe' }]} />,
    <Eingabe
      frage="Wie viele KiB sind 3 MiB?"
      pruefe={istZahl(3072, {
        3000: 'Das ist mit 1.000 gerechnet. Mit i ist jede Stufe 1.024.',
        3145728: 'Das sind die Byte – zwei Stufen. Von MiB nach KiB ist es nur eine.',
      })}
      tipp="Eine Stufe nach unten: · 1.024."
      loesung="3.072 KiB"
      platzhalter="KiB"
    >
      <P>3 · 1.024 = 3.072 KiB.</P>
    </Eingabe>,
    <Eingabe
      frage="Ein Bild belegt 6.291.456 Byte. Wie viele MiB sind das?"
      pruefe={istZahl(6, {
        6.291456: 'Du hast durch 1.000.000 geteilt – das wären MB. Für MiB teilst du zweimal durch 1.024.',
        6144: 'Das sind KiB – du bist erst eine Stufe hoch. Noch einmal ÷ 1.024.',
      })}
      tipp="Zwei Stufen nach oben: zweimal ÷ 1.024."
      loesung="6 MiB"
      platzhalter="MiB"
    >
      <P>6.291.456 ÷ 1.024 = 6.144 KiB, ÷ 1.024 = 6 MiB.</P>
    </Eingabe>,
  ],

  wofuer: () => [
    <P>
      Jetzt gibt es zwei Treppen und zwei Bedeutungen für „Kilo“. Woher weißt du, welche gerade gilt? Überleg bei jedem Fall selbst, bevor du ihn antippst.
    </P>,
    <Abbildung>
      <Familien />
    </Abbildung>,
    <P>
      Erkennst du das Muster? <strong>Datenmengen</strong> – wie viel Platz Dateien, Bilder oder ganze Sammlungen belegen – gibst du mit{' '}
      <B id="binaerpraefix">Binärpräfixen</B> an. So verlangt es der Prüfungskatalog.
    </P>,
    <P>
      Alles andere ist <strong>physikalisch</strong> und bekommt <B id="dezimalpraefix">Dezimalpräfixe</B> wie km und kg: Taktfrequenzen, Geschwindigkeiten von Leitungen
      und die Angaben der Hersteller auf Festplatten und SSDs.
    </P>,
    <Wahl
      frage="In einer Prüfungsaufgabe sollst du den Speicherbedarf von 2.000 Fotos angeben. Welche Einheit passt?"
      optionen={[
        { text: 'GB', warum: 'GB ist ein Dezimalpräfix. Für Datenmengen verlangt der Prüfungskatalog Binärpräfixe.' },
        { text: 'GiB', richtig: true },
        { text: 'Gbit/s', warum: 'Das ist eine Geschwindigkeit (Bit je Sekunde), keine Datenmenge.' },
      ]}
    >
      <P>Speicherbedarf ist eine Datenmenge, also Binärpräfix: KiB, MiB, GiB oder TiB.</P>
    </Wahl>,
    <Wahl
      frage="Ein Internetanschluss wird beworben. Welche Angabe ist richtig geschrieben?"
      optionen={[
        { text: '250 MiB/s', warum: 'Eine Leitungsgeschwindigkeit ist physikalisch: Dezimalpräfix. Und sie wird in Bit gezählt.' },
        { text: '250 Mbit/s', richtig: true },
        { text: '250 MB', warum: 'Das ist eine Datenmenge ohne Zeit. Eine Geschwindigkeit braucht „je Sekunde“.' },
      ]}
    >
      <P>Bit je Sekunde mit Dezimalpräfix: 250 Mbit/s.</P>
    </Wahl>,
    <P>
      Im Alltag hält sich nicht jeder an die Regel. Windows zum Beispiel rechnet binär, schreibt aber „GB“ statt „GiB“. In der Prüfung schreibst du es richtig.
    </P>,
    <P>
      Und wenn eine Herstellerangabe in GB auf ein Betriebssystem trifft, das in GiB rechnet? Dann scheint Speicher zu fehlen. Das klärt das nächste Kapitel.
    </P>,
  ],

  // ---------- GB und GiB ----------
  festplatte: () => [
    <P>
      Du kaufst eine neue SSD. Auf der Verpackung steht <code>1.000 GB</code>. Du baust sie ein, und das Betriebssystem zeigt <code>931 GiB</code>. Fast 70 weniger.
    </P>,
    <Wahl
      frage="Wo sind die 69 fehlenden GB?"
      optionen={[
        { text: 'Das Betriebssystem belegt sie.', warum: 'Auch eine ganz leere SSD zeigt 931 an. Am Inhalt liegt es nicht.' },
        { text: 'Der Hersteller hat geschummelt.', warum: 'Nachgezählt sind es genau 1.000.000.000.000 Byte – wie versprochen. Schau auf die Einheiten.' },
        { text: 'Es fehlt nichts – nur die Einheit ist eine andere.', richtig: true },
      ]}
    >
      <P>
        Der Hersteller zählt in GB (1.000³ Byte), das Betriebssystem in GiB (1.024³ Byte). Ein GiB ist größer – also passen weniger davon in dieselbe Menge Byte.
      </P>
    </Wahl>,
    <SoHeisstDas begriff="speicherkapazitaet">
      Die Datenmenge, die ein Datenträger aufnehmen kann. Hersteller geben sie mit <B id="dezimalpraefix" /> an (1.000 GB), das Betriebssystem zeigt sie binär an (931 GiB) –
      dieselbe Zahl an Byte.
    </SoHeisstDas>,
    <P>
      Umrechnen geht nie direkt von GB nach <B id="gib" />, sondern <strong>immer über Byte</strong>. Erst rechnest du die Herstellerangabe in Byte aus, dann teilst du durch
      die Bytezahl eines GiB. Im Bild kannst du Wert und Stufe ändern.
    </P>,
    <Abbildung>
      <GleicheMenge wert={1000} stufe={3} />
    </Abbildung>,
    <Merke titel="Immer über Byte">
      <strong>1.</strong> Angabe · 1.000ⁿ = Byte. <strong>2.</strong> Byte ÷ 1.024ⁿ = binäre Einheit. n ist die Stufe: k = 1, M = 2, G = 3, T = 4.
    </Merke>,
    <Eingabe
      frage="Eine SSD hat laut Hersteller 500 GB. Wie viel GiB zeigt das Betriebssystem? Runde auf zwei Nachkommastellen."
      pruefe={istZahl(
        465.66,
        {
          488.28: 'Du hast nur einmal durch 1,024 geteilt. GB → GiB sind drei Stufen: ÷ 1.024³.',
          536.87: 'Du hast multipliziert. GiB ist die größere Einheit, also muss die Zahl kleiner werden.',
          500: 'GB und GiB sind verschiedene Einheiten – rechne über Byte.',
        },
        0.01,
      )}
      tipp="500 · 1.000³ = Byte, dann ÷ 1.024³."
      loesung="465,66 GiB"
      platzhalter="GiB"
    >
      <P>500 · 1.000³ = 500.000.000.000 Byte. ÷ 1.073.741.824 = 465,66 GiB. Die Zahl ist kleiner, der Speicher derselbe.</P>
    </Eingabe>,
    <Wahl
      frage="Wie begründest du in der Prüfung, warum 1.000 GB als 931 GiB angezeigt werden?"
      optionen={[
        { text: 'Ein Teil des Speichers ist als Reserve versteckt.', warum: 'Eine Reserve zählt gar nicht zu den 1.000 GB. Es geht um die Einheiten.' },
        { text: 'Hersteller rechnen dezimal (1 GB = 10⁹ Byte), das Betriebssystem binär (1 GiB = 2³⁰ Byte).', richtig: true },
        { text: 'Beim Umrechnen geht Speicher durch Rundung verloren.', warum: 'Rundung kostet höchstens ein paar Byte, keine 69 GB. Was zählen Hersteller und Betriebssystem?' },
      ]}
    >
      <P>
        1.000 GB = 10¹² Byte. Das Betriebssystem teilt durch 2³⁰ = 1.024³ und kommt auf 931,32 GiB. Es fehlt kein einziges Byte.
      </P>
    </Wahl>,
  ],

  zurueck: () => [
    <P>
      Jetzt andersherum. Eine Datei ist <code>4 GiB</code> groß, dein USB-Stick hat laut Verpackung <code>4 GB</code>. Passt sie drauf?
    </P>,
    <Wahl
      frage="Passt die 4-GiB-Datei auf den 4-GB-Stick?"
      optionen={[
        { text: 'Ja, genau', warum: 'Die Zahl ist gleich, die Einheit nicht. Welche Einheit ist größer?' },
        { text: 'Ja, mit Platz übrig', warum: 'GiB ist die größere Einheit – 4 GiB sind mehr Byte als 4 GB.' },
        { text: 'Nein, zu groß', richtig: true },
      ]}
    >
      <P>1 GiB ist größer als 1 GB. 4 GiB sind also mehr als 4 GB – der Stick ist zu klein.</P>
    </Wahl>,
    <P>
      Wie viel mehr genau? Derselbe Weg über Byte, nur rückwärts: erst <strong>· 1.024ⁿ</strong> (binär → Byte), dann <strong>÷ 1.000ⁿ</strong> (Byte → dezimal).
    </P>,
    <Abbildung>
      <GleicheMenge wert={4} stufe={3} richtung="bin" />
    </Abbildung>,
    <Eingabe
      frage="Ein Video ist 256 MiB groß. Wie viele MB sind das? Runde auf zwei Nachkommastellen."
      pruefe={istZahl(
        268.44,
        {
          262.14: 'Du hast nur einmal mit 1,024 multipliziert. MiB → MB sind zwei Stufen: · 1.024², dann ÷ 1.000².',
          244.14: 'Falsche Richtung: MiB ist die größere Einheit, in MB muss die Zahl größer werden.',
          256: 'Rechne über Byte: 256 · 1.024² Byte, dann ÷ 1.000².',
        },
        0.01,
      )}
      tipp="256 · 1.024² = Byte, dann ÷ 1.000²."
      loesung="268,44 MB"
      platzhalter="MB"
    >
      <P>256 · 1.048.576 = 268.435.456 Byte. ÷ 1.000.000 = 268,44 MB.</P>
    </Eingabe>,
    <P>
      Fällt dir etwas auf? Bei MiB und MB war der Unterschied knapp 5 %, bei GiB und GB schon über 7 %. Im Bild siehst du es an den Balken, wenn du die Stufe wechselst.
    </P>,
    <Wahl
      frage="Bei welcher Stufe ist der Unterschied zwischen dezimal und binär am größten?"
      optionen={[
        { text: 'kB und KiB', warum: 'Hier sind es nur 2,4 % (1.024 statt 1.000). Mit jeder Stufe kommt ein Faktor 1,024 dazu.' },
        { text: 'TB und TiB', richtig: true },
        { text: 'bei allen gleich', warum: 'Jede Stufe multipliziert noch einmal mit 1,024 – der Unterschied wächst.' },
      ]}
    >
      <P>
        Der Faktor ist 1,024ⁿ: 2,4 % bei k, 4,9 % bei M, 7,4 % bei G, 10 % bei T. Eine 4-TB-Festplatte zeigt das Betriebssystem darum nur als 3,64 TiB an.
      </P>
    </Wahl>,
    <P>
      Bis hierher ging es um Datenmengen. Präfixe stehen aber auch vor Hertz und Bit je Sekunde – und dort gilt immer die Treppe mit 1.000. Das ist das letzte Kapitel.
    </P>,
  ],

  // ---------- Takt und Übertragungsrate ----------
  hertz: () => [
    <P>
      Im Datenblatt eines Prozessors steht <code>3,4 GHz</code>. Das G kennst du schon: Giga. Aber was ist Hz – und was zählt der Prozessor da?
    </P>,
    <P>
      Ein Prozessor arbeitet im Gleichschritt, wie ein Ruderboot zum Schlag der Trommel. Bei jedem Schlag – jedem <strong>Takt</strong> – erledigt er einen kleinen
      Arbeitsschritt. Im Bild siehst du einen sehr langsamen Takt. Wähl eine andere Geschwindigkeit.
    </P>,
    <Abbildung>
      <Takt start={4} />
    </Abbildung>,
    <Wahl
      frage="Was ändert sich, wenn du von 4 Hz auf 8 Hz gehst?"
      optionen={[
        { text: 'Die Takte werden länger.', warum: 'Schau aufs Bild: Bei 8 Hz sind die Takte kürzer. Es passen mehr in eine Sekunde.' },
        { text: 'Doppelt so viele Takte passen in eine Sekunde.', richtig: true },
        { text: 'Nichts, die Sekunde bleibt gleich.', warum: 'Die Sekunde schon – aber zähl die Takte darin.' },
      ]}
    >
      <P>8 Hz heißt: 8 Takte je Sekunde. Mehr Hertz, mehr Takte, mehr Arbeit je Sekunde.</P>
    </Wahl>,
    <SoHeisstDas begriff="hertz">
      Die Einheit der Frequenz, Zeichen Hz: <strong>1 Hz = ein Takt (eine Schwingung) je Sekunde</strong>. 4 Hz sind vier Takte in jeder Sekunde.
    </SoHeisstDas>,
    <SoHeisstDas begriff="taktfrequenz">
      Wie viele Arbeitstakte ein Prozessor je Sekunde schafft, angegeben in Hertz. Heute meist in GHz – Milliarden Takte je Sekunde.
    </SoHeisstDas>,
    <P>
      Hertz ist eine physikalische Größe wie Meter oder Gramm. Darum bekommt es <B id="dezimalpraefix">Dezimalpräfixe</B>: kHz, MHz, GHz – immer in Schritten von 1.000,
      nie 1.024.
    </P>,
    <Abbildung>
      <Dreiergruppen wert={3400000000} einheit="Hz" start={3} />
    </Abbildung>,
    <Wahl
      frage="Wie viele Hz sind 3,4 GHz?"
      optionen={[
        { text: '3.400.000 Hz', warum: 'Das sind 3,4 MHz – zwei Stufen. G ist die dritte Stufe.' },
        { text: '3.400.000.000 Hz', richtig: true },
        { text: '3.650.722.201,6 Hz', warum: 'Das ist mit 1.024³ gerechnet. Hertz ist physikalisch – hier gilt 1.000.' },
      ]}
    >
      <P>3,4 · 1.000³ = 3,4 · 10⁹ = 3.400.000.000 Hz. Im Bild: drei Dreiergruppen hinter dem Komma.</P>
    </Wahl>,
    <Eingabe
      frage="Ein Arbeitsspeicher arbeitet mit 1.600 MHz. Wie viele GHz sind das?"
      pruefe={istZahl(1.6, {
        1600000: 'Du bist nach unten gegangen. GHz ist die größere Einheit – die Zahl muss kleiner werden.',
        1.5625: 'Das ist mit 1.024 gerechnet. Hertz rechnet dezimal: ÷ 1.000.',
      })}
      tipp="MHz → GHz ist eine Stufe nach oben: ÷ 1.000."
      loesung="1,6 GHz"
      platzhalter="GHz"
    >
      <P>1.600 ÷ 1.000 = 1,6 GHz.</P>
    </Eingabe>,
  ],

  bitrate: () => [
    <P>
      Dein Internetvertrag verspricht <code>100 Mbit/s</code>. Du lädst ein großes Spiel herunter, und der Browser zeigt höchstens <code>12,5 MB/s</code>. Bekommst du nur ein
      Achtel?
    </P>,
    <Wahl
      frage="Liefert der Anbieter nur ein Achtel der versprochenen Geschwindigkeit?"
      optionen={[
        { text: 'Ja, er liefert zu wenig.', warum: 'Schau genau auf die Einheiten: Mbit und MB.' },
        { text: 'Nein, es ist dieselbe Geschwindigkeit.', richtig: true },
      ]}
    >
      <P>100 Mbit/s ÷ 8 = 12,5 MB/s. Der Vertrag zählt Bit, der Browser zählt Byte.</P>
    </Wahl>,
    <SoHeisstDas begriff="uebertragungsrate" auch="Datenrate">
      Wie viele Daten je Sekunde über eine Leitung gehen. Angegeben in <strong>Bit je Sekunde</strong> (bit/s) mit Dezimalpräfix: 100 Mbit/s = 100.000.000 bit/s.
    </SoHeisstDas>,
    <P>
      Beim Umrechnen achtest du auf zwei Dinge. Erstens: Das M ist dezimal, also 1.000.000 – eine Übertragungsrate ist eine physikalische Größe. Zweitens: Es sind{' '}
      <B id="bit" />, nicht <B id="byte" /> – für Byte teilst du durch 8.
    </P>,
    <Abbildung>
      <Rate start={100} />
    </Abbildung>,
    <Eingabe
      frage="Ein Anschluss hat 250 Mbit/s. Wie viele MB kommen höchstens je Sekunde an?"
      pruefe={istZahl(
        31.25,
        {
          2000: 'Du hast mit 8 multipliziert. Byte ist die größere Einheit – die Zahl wird kleiner.',
          250: 'Das sind Mbit, nicht MB. Teile noch durch 8.',
          29.8: 'Du hast in MiB umgerechnet. Gefragt sind MB, also dezimal.',
        },
        0.005,
      )}
      tipp="Bit → Byte: ÷ 8. Das M bleibt."
      loesung="31,25 MB/s"
      platzhalter="MB/s"
    >
      <P>250 ÷ 8 = 31,25 MB/s.</P>
    </Eingabe>,
    <Eingabe
      frage="Eine alte ISDN-Leitung schafft 128 kbit/s. Wie viele Byte je Sekunde sind das?"
      pruefe={istZahl(16000, {
        16: 'Das sind kB/s. Gefragt sind Byte: noch · 1.000.',
        16384: 'Das ist mit 1.024 gerechnet. Übertragungsraten sind dezimal: 1 kbit/s = 1.000 bit/s.',
        1024000: 'Du hast mit 8 multipliziert statt geteilt.',
      })}
      tipp="Erst in bit/s (· 1.000), dann ÷ 8."
      loesung="16.000 Byte/s"
      platzhalter="Byte/s"
    >
      <P>128 · 1.000 = 128.000 bit/s. ÷ 8 = 16.000 Byte/s.</P>
    </Eingabe>,
    <P>
      Damit kennst du alle Bausteine: Datenmengen in Byte mit Binärpräfix, Übertragungsraten in bit/s mit Dezimalpräfix. Wie lange ein Download dauert, wenn beides
      zusammenkommt, rechnest du im Thema <strong>Übertragungsdauer</strong>.
    </P>,
  ],
};
