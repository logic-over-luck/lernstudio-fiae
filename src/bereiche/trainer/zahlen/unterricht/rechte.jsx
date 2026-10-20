// Unterricht Dateirechte (chmod): je Teil eine Liste von Blöcken (Gliederung in rechte.js, Bausteine und Regeln:
// lernsystem/bausteine.jsx und lernsystem/LEITFADEN.md). Jedes Kapitel muss ohne die vorigen verständlich sein.

import { P, Merke, Tafel, Abbildung, Wahl, Eingabe, SoHeisstDas, B } from '../../lernsystem/bausteine.jsx';
import { istZahl, istText } from '../../lernsystem/pruefen.js';
import { EineKlasse, WerGilt, LsZeile, Schaltpult } from '../bilder/rechte.jsx';

export const INHALT = {
  // ---------- Wer darf was? ----------
  'drei-rechte': () => [
    <P>
      Stell dir den Server einer Firma vor: ein Linux-Rechner, auf dem alle 200 Mitarbeitenden ihre Dateien ablegen. Dort liegt die Datei <code>gehaelter.csv</code> mit
      den Gehältern aller Mitarbeitenden. Und das Programm <code>backup.sh</code>, das jede Nacht eine Sicherung macht.
    </P>,
    <P>
      Klar ist: Nicht jeder darf mit jeder Datei alles machen. Aber was heißt „alles“ eigentlich? Was kann man mit einer Datei überhaupt tun?
    </P>,
    <Wahl
      frage="Eine Kollegin aus der Personalabteilung soll die Gehaltsliste ansehen können, aber nichts daran ändern. Was muss für sie erlaubt sein?"
      optionen={[
        { text: 'Ansehen und ändern', warum: 'Mit „ändern“ könnte sie Gehälter umschreiben – genau das soll nicht gehen.' },
        { text: 'Als Programm starten', warum: 'Eine Gehaltsliste ist kein Programm, starten kann man sie nicht. Sie will nur hineinschauen.' },
        { text: 'Nur ansehen', richtig: true },
      ]}
    >
      <P>Genau. Ansehen und Ändern sind zwei verschiedene Dinge – und Linux erlaubt oder verbietet sie einzeln.</P>
    </Wahl>,
    <P>
      Linux unterscheidet genau <strong>drei</strong> Dinge, die man mit einer Datei tun kann. Probier es an der Gehaltsliste aus: Schalte die drei Rechte an und aus und
      schau, was dann geht.
    </P>,
    <Abbildung>
      <EineKlasse start="r--" zeige="tun" datei="gehaelter.csv" />
    </Abbildung>,
    <SoHeisstDas begriff="leserecht">
      Das Recht, den Inhalt einer Datei anzusehen: öffnen, anzeigen, kopieren. Kurzzeichen <code>r</code> (read). Ohne Leserecht bleibt die Datei für dich verschlossen.
    </SoHeisstDas>,
    <SoHeisstDas begriff="schreibrecht">
      Das Recht, den Inhalt einer Datei zu ändern: etwas hineinschreiben, überschreiben, leeren. Kurzzeichen <code>w</code> (write).
    </SoHeisstDas>,
    <SoHeisstDas begriff="ausfuehrungsrecht">
      Das Recht, die Datei als Programm zu starten. Kurzzeichen <code>x</code> (execute). Wichtig bei Programmen und <B id="skript">Skripten</B> wie{' '}
      <code>backup.sh</code> – bei der Gehaltsliste ergibt es keinen Sinn.
    </SoHeisstDas>,
    <Wahl
      frage="Das Skript backup.sh soll jede Nacht gestartet werden. Welches Recht ist dafür entscheidend?"
      optionen={[
        { text: 'r', warum: 'Mit r kannst du den Text des Skripts lesen. Starten lässt es sich damit noch nicht.' },
        { text: 'x', richtig: true },
        { text: 'w', warum: 'Mit w könntest du das Skript ändern. Zum Starten braucht es ein anderes Recht.' },
      ]}
    >
      <P>
        Das <B id="ausfuehrungsrecht" /> <code>x</code>. Fehlt es, meldet Linux beim Starten <code>Permission denied</code> (Zugriff verweigert) – auch wenn du die Datei
        lesen darfst.
      </P>
    </Wahl>,
    <Wahl
      frage="Du darfst bericht.txt lesen, aber nicht schreiben. Was klappt?"
      optionen={[
        { text: 'Einen Tippfehler darin korrigieren', warum: 'Korrigieren ändert den Inhalt – dafür bräuchtest du das Schreibrecht w.' },
        { text: 'Die Datei öffnen und lesen', richtig: true },
        { text: 'Gar nichts', warum: 'Das Leserecht hast du ja. Was erlaubt es?' },
      ]}
    >
      <P>
        Mit dem <B id="leserecht" /> kannst du den Bericht öffnen und lesen. Ändern kannst du ihn nicht, dafür fehlt das <B id="schreibrecht" />.
      </P>
    </Wahl>,
  ],

  'drei-klassen': () => [
    <P>
      Die Kollegin aus der Personalabteilung darf die Gehaltsliste lesen. Aber sicher nicht jeder im Haus: Ein Azubi aus dem Vertrieb soll sie gar nicht sehen. Die Rechte
      hängen also davon ab, <strong>wer</strong> zugreift.
    </P>,
    <Wahl
      frage="Der Server hat 200 Benutzer. Wie würdest du festlegen, wer die Gehaltsliste lesen darf?"
      optionen={[
        { text: 'Für jeden der 200 einzeln', warum: 'Das ginge, wäre bei Tausenden Dateien aber kaum zu pflegen. Viele brauchen dieselben Rechte – wie könnte man sie zusammenfassen?' },
        { text: 'Benutzer zu wenigen Gruppen zusammenfassen', richtig: true },
        { text: 'Allen dieselben Rechte geben', warum: 'Dann dürfte der Azubi aus dem Vertrieb mitlesen – genau das wollten wir verhindern.' },
      ]}
    >
      <P>Genau so macht es Linux – und zwar mit nur drei Klassen von Benutzern je Datei.</P>
    </Wahl>,
    <P>
      Jede Datei gehört einem Benutzer, meist dem, der sie angelegt hat. Außerdem ist sie einer Benutzergruppe zugeordnet, zum Beispiel der Abteilung{' '}
      <code>personal</code>. Darum hat jede Datei drei Sätze von Rechten: einen für den Benutzer, dem sie gehört, einen für die Mitglieder ihrer Gruppe und einen für alle
      übrigen. Wähl aus, wer auf die Gehaltsliste zugreift:
    </P>,
    <Abbildung>
      <WerGilt />
    </Abbildung>,
    <SoHeisstDas begriff="besitzer">
      Der Benutzer, dem die Datei gehört – meist der, der sie angelegt hat, hier <code>anna</code>. Für ihn gelten die ersten drei Rechte. Kürzel <code>u</code> (user).
    </SoHeisstDas>,
    <SoHeisstDas begriff="gruppe">
      Die Benutzergruppe, der die Datei zugeordnet ist, hier <code>personal</code>. Für alle Mitglieder dieser Gruppe gelten die mittleren drei Rechte. Kürzel{' '}
      <code>g</code> (group).
    </SoHeisstDas>,
    <SoHeisstDas begriff="andere">
      Alle Benutzer, die weder <B id="besitzer" /> noch Mitglied der <B id="gruppe" /> sind, hier <code>carla</code>. Für sie gelten die letzten drei Rechte. Kürzel{' '}
      <code>o</code> (others).
    </SoHeisstDas>,
    <Wahl
      frage="david arbeitet im Einkauf (Gruppe einkauf). Welche Klasse gilt für ihn bei der Gehaltsliste?"
      optionen={[
        { text: 'Besitzer', warum: 'Die Datei gehört anna, nicht david.' },
        { text: 'Gruppe', warum: 'Die Datei gehört zur Gruppe personal. david ist nur in einkauf.' },
        { text: 'andere', richtig: true },
      ]}
    >
      <P>
        david ist weder Besitzer noch in der Gruppe <code>personal</code>, also gilt für ihn die Klasse <B id="andere" />: <code>---</code>. Er darf nichts.
      </P>
    </Wahl>,
    <Merke titel="Genau eine Klasse">
      Linux prüft der Reihe nach: Gehört dir die Datei? Dann gelten die Rechte des Besitzers. Sonst: Bist du in ihrer Gruppe? Dann die der Gruppe. Sonst die von andere.
      Es gilt immer <strong>genau eine</strong> Klasse – die erste, die passt.
    </Merke>,
    <Wahl
      frage="anna ist Besitzerin der Gehaltsliste und auch Mitglied der Gruppe personal. Welche Rechte gelten für sie?"
      optionen={[
        { text: 'Die des Besitzers', richtig: true },
        { text: 'Die der Gruppe', warum: 'Sie ist zwar auch in der Gruppe. Aber was fragt Linux zuerst?' },
        { text: 'Beide zusammen', warum: 'Die Klassen werden nicht zusammengezählt – es gilt immer genau eine.' },
      ]}
    >
      <P>Linux fragt zuerst: Gehört ihr die Datei? Ja – also gelten für anna die ersten drei Rechte, egal in welchen Gruppen sie sonst noch ist.</P>
    </Wahl>,
  ],

  'ls-l': () => [
    <P>
      Wo sieht man die Rechte einer Datei? In der <B id="kommandozeile" /> mit dem Befehl <code>ls -l</code>. <code>ls</code> listet Dateien auf (list), die{' '}
      <B id="option" /> <code>-l</code> macht daraus eine ausführliche Liste (long) mit einer Zeile je Datei. Für <code>backup.sh</code> sieht das so aus:
    </P>,
    <Abbildung>
      <LsZeile />
    </Abbildung>,
    <Wahl
      frage="Bei der Gruppe steht r-x. Was bedeutet wohl der Strich in der Mitte?"
      optionen={[
        { text: 'Nur ein Trennzeichen', warum: 'Dann stünde er bei jeder Klasse an derselben Stelle. Beim Besitzer steht dort aber ein w.' },
        { text: 'Das w fehlt: Schreiben ist verboten', richtig: true },
        { text: 'Die Gruppe darf alles außer lesen', warum: 'Das r steht ja da – Lesen ist erlaubt. Der Strich steht an der Stelle des w.' },
      ]}
    >
      <P>Genau: Jedes Recht hat seinen festen Platz. Steht dort ein Buchstabe, ist es erlaubt; steht dort ein Strich, fehlt es.</P>
    </Wahl>,
    <P>
      So liest du die ersten zehn Zeichen: Das erste sagt, was für ein Eintrag das ist (<code>-</code> eine Datei, <code>d</code> ein Verzeichnis). Danach kommen{' '}
      <strong>neun</strong> Zeichen: drei für den <B id="besitzer" />, drei für die <B id="gruppe" />, drei für <B id="andere" />. Immer in dieser Reihenfolge, und in jeder
      Dreiergruppe immer erst r, dann w, dann x.
    </P>,
    <SoHeisstDas begriff="zugriffsrecht" auch="Dateirecht">
      Das Recht, auf eine Datei oder ein Verzeichnis auf eine bestimmte Weise zuzugreifen: lesen, schreiben oder ausführen. Jede Datei hat neun Zugriffsrechte – r, w, x
      für Besitzer, Gruppe und andere.
    </SoHeisstDas>,
    <SoHeisstDas begriff="symbolisch">
      Die Schreibweise mit Buchstaben, wie <code>ls -l</code> sie zeigt: neun Zeichen, je drei für Besitzer, Gruppe und andere. Ein Buchstabe heißt erlaubt, ein{' '}
      <code>-</code> heißt verboten: <code>rwxr-xr--</code>.
    </SoHeisstDas>,
    <Eingabe
      frage="ls -l zeigt für eine Datei -rw-r-----. Schreib die drei Zeichen der Gruppe auf."
      pruefe={istText(['r--'], {
        'rw-': 'Das sind die Rechte des Besitzers – die ersten drei nach dem Dateityp. Die Gruppe kommt danach.',
        '---': 'Das sind die letzten drei Zeichen, die Klasse andere.',
        '-rw': 'Das erste Zeichen ist der Dateityp und gehört nicht zu den Rechten. Fang beim zweiten Zeichen an.',
        '-r-': 'Du hast die Gruppen um ein Zeichen verschoben. Erst den Dateityp weglassen, dann in Dreiergruppen teilen.',
      })}
      tipp="Erstes Zeichen weglassen, den Rest in Dreiergruppen teilen: Besitzer, Gruppe, andere."
      loesung="r--"
      platzhalter="z. B. rwx"
    >
      <P>
        Dateityp <code>-</code> weglassen, dann in Dreiergruppen: <code>rw-</code> Besitzer, <code>r--</code> Gruppe, <code>---</code> andere. Die Gruppe darf die
        Datei nur lesen.
      </P>
    </Eingabe>,
    <Wahl
      frage="Bei -rw-r--r--: Darf ein Benutzer, der weder Besitzer noch in der Gruppe ist, die Datei ändern?"
      optionen={[
        { text: 'Ja', warum: 'Für ihn gelten die letzten drei Zeichen: r--. Steht dort ein w?' },
        { text: 'Nein', richtig: true },
      ]}
    >
      <P>
        Für ihn gilt die Klasse andere: <code>r--</code>, also nur lesen.
      </P>
    </Wahl>,
    <P>
      Neun Zeichen, und jedes heißt nur ja oder nein. Genau das kann ein Computer besonders gut speichern. Im nächsten Kapitel wird daraus eine kurze Zahl wie{' '}
      <code>754</code> – die Zahl, die der Befehl <code>chmod</code> erwartet.
    </P>,
  ],

  // ---------- Rechte als Bits ----------
  'ein-bit': () => [
    <P>
      Neun Zeichen wie <code>rwxr-xr--</code> sind für Menschen gut lesbar. Der Computer speichert sie viel knapper. Denn jedes Recht kennt nur zwei Zustände: erlaubt oder
      nicht erlaubt.
    </P>,
    <Wahl
      frage="Wie viele Bit braucht man, um ein einziges Recht zu speichern – etwa „Lesen erlaubt: ja oder nein“?"
      optionen={[
        { text: '3', warum: 'Drei Bit sind es für eine ganze Klasse mit r, w und x. Ein einzelnes Recht ist nur ja oder nein.' },
        { text: '8', warum: '8 Bit sind ein Byte, viel zu viel. Es gibt ja nur zwei Zustände.' },
        { text: '1', richtig: true },
      ]}
    >
      <P>
        Ein <B id="bit" /> hat genau zwei Werte, 0 und 1 – wie ein Recht: <strong>1 = erlaubt, 0 = verboten</strong>.
      </P>
    </Wahl>,
    <P>Eine Klasse hat drei Rechte, also drei Bit. Schalte die Rechte und schau, welche Bits daraus werden:</P>,
    <Abbildung>
      <EineKlasse start="r-x" zeige="bits" />
    </Abbildung>,
    <P>
      Die Regel ist einfach: Wo ein Buchstabe steht, ist das Bit 1; wo ein Strich steht, ist es 0. Die Reihenfolge bleibt r, w, x. Aus <code>r-x</code> wird{' '}
      <code>101</code>, aus <code>rw-</code> wird <code>110</code>.
    </P>,
    <Wahl
      frage="Welches Bitmuster gehört zu r--?"
      optionen={[
        { text: '011', warum: 'Du hast die Striche als 1 gezählt. Umgekehrt: Ein gesetztes Recht, also ein Buchstabe, ist eine 1.' },
        { text: '100', richtig: true },
        { text: '001', warum: 'Die Reihenfolge ist r, w, x – das r steht links.' },
      ]}
    >
      <P>
        r ist gesetzt (1), w und x nicht (0, 0): <code>100</code>.
      </P>
    </Wahl>,
    <Eingabe
      frage="Wie viele verschiedene Einstellungen der Rechte gibt es für eine Klasse?"
      pruefe={istZahl(8, {
        3: 'Das ist die Anzahl der Rechte. Gefragt ist, wie viele verschiedene Stellungen der drei Schalter es gibt.',
        6: 'Du hast addiert (2 + 2 + 2). Bei Kombinationen wird malgenommen.',
        9: 'Neun Zeichen hat die ganze Zeile. Für eine Klasse sind es drei Bit.',
      })}
      tipp="Jedes Bit verdoppelt die Möglichkeiten: 2 · 2 · 2."
      loesung="8"
      platzhalter="Anzahl"
    >
      <P>
        2 · 2 · 2 = 2³ = <strong>8</strong>: von <code>---</code> (000) bis <code>rwx</code> (111). Acht Möglichkeiten – das passt genau in eine Ziffer von 0 bis 7.
      </P>
    </Eingabe>,
  ],

  'vier-zwei-eins': () => [
    <P>
      Drei Bit nebeneinander sind eine kleine Binärzahl. Und eine Binärzahl lässt sich in eine gewöhnliche Zahl umrechnen: Jede Stelle hat einen Stellenwert, von rechts 1,
      2, 4 – jede Stelle doppelt so viel wie die rechts daneben.
    </P>,
    <Wahl
      frage="Das r steht ganz links, an der dritten Stelle von rechts. Welchen Stellenwert hat es?"
      optionen={[
        { text: '4', richtig: true },
        { text: '3', warum: 'Stellenwerte wachsen nicht um 1, sie verdoppeln sich: 1, 2, …' },
        { text: '1', warum: 'Den Stellenwert 1 hat die rechte Stelle – dort steht das x.' },
      ]}
    >
      <P>Rechts das x mit 1, in der Mitte das w mit 2, links das r mit 4. Schalte die Rechte und sieh zu, wie die Ziffer entsteht:</P>
    </Wahl>,
    <Abbildung>
      <EineKlasse start="rw-" zeige="ziffer" />
    </Abbildung>,
    <SoHeisstDas begriff="wertigkeit">
      Der Zahlenwert eines Rechts: <strong>r = 4, w = 2, x = 1</strong> – die Stellenwerte der drei Bit. Zählst du die Wertigkeiten der erlaubten Rechte zusammen, erhältst du
      die Ziffer der Klasse.
    </SoHeisstDas>,
    <Tafel
      zeilen={[
        { name: 'Recht', werte: ['r', 'w', 'x'] },
        { name: 'Wertigkeit', werte: ['4', '2', '1'], ton: 'oben' },
        { name: 'rw-', werte: ['4', '2', '–'] },
        { text: 'rw- = 4 + 2 = 6', ton: 'summe' },
      ]}
    />,
    <Eingabe
      frage="Welche Ziffer gehört zu r-x?"
      pruefe={istZahl(5, {
        6: '6 wäre rw- (4 + 2). Hier ist w aus und x an.',
        3: 'Du hast w und x gezählt. Gesetzt sind r (4) und x (1).',
        101: 'Das ist das Bitmuster. Rechne es in eine Ziffer um: die Wertigkeiten addieren.',
      })}
      tipp="r = 4, w = 2, x = 1 – addiere nur, was gesetzt ist."
      loesung="5"
      platzhalter="Ziffer"
    >
      <P>
        r und x sind gesetzt: 4 + 1 = <strong>5</strong>.
      </P>
    </Eingabe>,
    <P>Jede Kombination ergibt eine andere Summe. Darum gehört zu jeder Ziffer von 0 bis 7 genau eine Kombination. Alle acht auf einen Blick:</P>,
    <div class="ls-tabelle-huelle">
      <table class="ls-tabelle">
        <thead>
          <tr>
            <th>Ziffer</th>
            <th>Rechte</th>
            <th>Bedeutung</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['0', '---', 'nichts'],
            ['1', '--x', 'nur ausführen'],
            ['2', '-w-', 'nur schreiben'],
            ['3', '-wx', 'schreiben, ausführen'],
            ['4', 'r--', 'nur lesen'],
            ['5', 'r-x', 'lesen, ausführen'],
            ['6', 'rw-', 'lesen, schreiben'],
            ['7', 'rwx', 'alles'],
          ].map(([z, r, b]) => (
            <tr key={z}>
              <td class="mono">{z}</td>
              <td class="mono">{r}</td>
              <td>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>,
    <Eingabe
      frage="Und rückwärts: Welche Rechte stehen hinter der Ziffer 6? Schreib sie als drei Zeichen."
      pruefe={istText(['rw-'], {
        'r-x': 'Das ist 5 (4 + 1). Welche zwei Wertigkeiten ergeben 6?',
        rwx: 'Das wäre 7, mit x. Für 6 brauchst du nur zwei Rechte.',
        '-wx': 'Das ist 2 + 1 = 3. Für 6 brauchst du die 4.',
        '110': 'Richtig gedacht – das sind die Bits. Schreib sie jetzt als Buchstaben: r, w, x oder -.',
      })}
      tipp="Zerlege 6 in Wertigkeiten: Passt die 4? Was bleibt übrig?"
      loesung="rw-"
      platzhalter="z. B. r-x"
    >
      <P>
        6 = 4 + 2, also r und w, kein x: <strong>lesen und schreiben</strong>. Das ist eine beliebte Prüfungsfrage.
      </P>
    </Eingabe>,
    <Merke titel="Die Falle mit der 6">
      6 heißt lesen und <strong>schreiben</strong> (4 + 2), nicht lesen und ausführen – das wäre 5 (4 + 1).
    </Merke>,
    <P>
      Eine Klasse ergibt eine Ziffer. Drei Klassen ergeben drei Ziffern – und schon hast du eine Zahl wie <code>754</code>. Wie man sie liest und mit <code>chmod</code>{' '}
      setzt, zeigt das nächste Kapitel.
    </P>,
  ],

  // ---------- Oktalschreibweise ----------
  chmod: () => [
    <P>
      Du willst die nächtliche Sicherung von Hand testen und tippst <code>./backup.sh</code>. Linux antwortet: <code>Permission denied</code> – Zugriff verweigert. Ein Blick
      mit <code>ls -l</code> zeigt die Rechte:
    </P>,
    <Abbildung>
      <LsZeile rechte="rw-r--r--" />
    </Abbildung>,
    <Wahl
      frage="Warum lässt sich backup.sh nicht starten?"
      optionen={[
        { text: 'Es fehlt das Ausführungsrecht', richtig: true },
        { text: 'Es fehlt das Leserecht', warum: 'Lesen dürfen alle: In jeder Dreiergruppe steht ein r.' },
        { text: 'Es fehlt das Schreibrecht', warum: 'Der Besitzer hat w – und zum Starten braucht man es ohnehin nicht.' },
      ]}
    >
      <P>In keiner der drei Dreiergruppen steht ein x. Niemand darf das Skript starten, auch seine Besitzerin anna nicht.</P>
    </Wahl>,
    <P>
      Rechte ändert man mit einem eigenen Befehl. Für <code>backup.sh</code> soll gelten: anna darf alles, die Gruppe darf lesen und ausführen, alle anderen dürfen nur
      lesen. Der Befehl dafür lautet <code>chmod 754 backup.sh</code>.
    </P>,
    <P>
      Er besteht aus drei Teilen: dem Befehl <code>chmod</code>, den neuen Rechten <code>754</code> und der Datei <code>backup.sh</code>, für die sie gelten sollen (das{' '}
      <B id="argument" />). Danach zeigt <code>ls -l</code> <code>-rwxr-xr--</code>, und das Skript startet.
    </P>,
    <SoHeisstDas begriff="chmod">
      Der Linux-Befehl, der die <B id="zugriffsrecht">Zugriffsrechte</B> einer Datei oder eines Verzeichnisses ändert – kurz für <em>change mode</em>. Er bekommt die neuen
      Rechte und die Datei: <code>chmod 754 backup.sh</code>. Ändern darf die Rechte nur der Besitzer der Datei (und der Administrator).
    </SoHeisstDas>,
    <Wahl
      frage="Was bewirkt chmod 640 bericht.txt?"
      optionen={[
        { text: 'Es zeigt die Rechte von bericht.txt an', warum: 'Anzeigen macht ls -l. chmod setzt neue Rechte.' },
        { text: 'Es ändert die Zugriffsrechte von bericht.txt', richtig: true },
        { text: 'Es ändert den Inhalt von bericht.txt', warum: 'chmod rührt den Inhalt nicht an – es legt nur fest, wer was mit der Datei tun darf.' },
      ]}
    >
      <P>
        <code>chmod</code> ändert die Rechte, sonst nichts. Was 640 genau bedeutet, liest du im nächsten Teil.
      </P>
    </Wahl>,
    <P>
      <code>chmod</code> kennt auch eine Form mit Buchstaben: <code>chmod u+x backup.sh</code> gibt dem Besitzer (<code>u</code>) das Ausführungsrecht dazu (
      <code>+x</code>), <code>chmod o-r</code> nimmt allen anderen (<code>o</code>) das Leserecht weg.
    </P>,
    <Wahl
      frage="Was macht chmod g+w plan.txt?"
      optionen={[
        { text: 'Die Gruppe verliert das Schreibrecht', warum: '+ heißt dazugeben, - heißt wegnehmen.' },
        { text: 'Alle bekommen das Schreibrecht', warum: 'g steht für group – es betrifft nur die Gruppe.' },
        { text: 'Die Gruppe bekommt das Schreibrecht', richtig: true },
      ]}
    >
      <P>
        <code>g</code> = Gruppe, <code>+</code> = dazu, <code>w</code> = schreiben. In Prüfungen geht es aber fast immer um die Form mit Zahlen wie <code>754</code> – und die
        schauen wir uns jetzt genau an.
      </P>
    </Wahl>,
  ],

  'drei-ziffern': () => [
    <P>
      <code>chmod 754</code> – wie weiß Linux aus drei Ziffern, wer was darf? Ein Baustein ist schon klar: Die drei Rechte einer Klasse passen genau in eine Ziffer von 0 bis
      7, mit r = 4, w = 2, x = 1.
    </P>,
    <Wahl
      frage="754 hat drei Ziffern. Für wen gilt die 7?"
      optionen={[
        { text: 'Für andere', warum: 'Die Reihenfolge ist dieselbe wie bei ls -l. Wer steht dort vorne?' },
        { text: 'Für den Besitzer', richtig: true },
        { text: 'Für alle', warum: '754 ist hier nicht „siebenhundertvierundfünfzig“ – jede Ziffer steht für sich und gilt für eine Klasse.' },
      ]}
    >
      <P>Erste Ziffer Besitzer, zweite Gruppe, dritte andere – dieselbe Reihenfolge wie bei ls -l. Probier es am Schaltpult aus:</P>
    </Wahl>,
    <Abbildung unter="Jede Zeile ist eine Klasse, die Ziffer rechts ist die Summe ihrer Zeile.">
      <Schaltpult start="754" />
    </Abbildung>,
    <SoHeisstDas begriff="oktalschreibweise" auch="numerische Schreibweise">
      Die Rechte als drei Ziffern, eine je Klasse: Besitzer, Gruppe, andere. Jede Ziffer ist die Summe der Wertigkeiten (r = 4, w = 2, x = 1) und liegt zwischen 0 und 7 –
      darum sind es Ziffern des <B id="oktalsystem">Oktalsystems</B>.
    </SoHeisstDas>,
    <Tafel
      zeilen={[
        { name: '', werte: ['r', 'w', 'x', ''], ton: 'oben' },
        { name: 'Besitzer 7', werte: ['4', '2', '1', 'rwx'] },
        { name: 'Gruppe 5', werte: ['4', '–', '1', 'r-x'] },
        { name: 'andere 4', werte: ['4', '–', '–', 'r--'] },
        { text: 'chmod 754 → rwxr-xr--', ton: 'summe' },
      ]}
    />,
    <Eingabe
      frage="Welche Rechte setzt chmod 640? Schreib alle neun Zeichen."
      pruefe={istText(['rw-r-----', '-rw-r-----'], {
        'rw-r--': 'Auch die 0 bekommt drei Zeichen: --- für keine Rechte. Es sind immer neun.',
        'r--rw----': 'Die Reihenfolge ist Besitzer, Gruppe, andere – die 6 gehört dem Besitzer.',
        'r-xr-----': '6 ist 4 + 2, also lesen und schreiben. r-x wäre 5.',
        'rwxr-----': 'Die 6 hat kein x: 4 + 2 = 6.',
      })}
      tipp="Jede Ziffer einzeln: 6 = 4 + 2, 4 = 4, 0 = nichts."
      loesung="rw-r-----"
      platzhalter="z. B. rwxr-xr--"
      breit
    >
      <P>
        6 = <code>rw-</code>, 4 = <code>r--</code>, 0 = <code>---</code>. Zusammen <code>rw-r-----</code>: Der Besitzer darf lesen und schreiben, die Gruppe nur lesen,
        alle anderen nichts.
      </P>
    </Eingabe>,
    <Wahl
      frage="Nach chmod 751 skript.sh: Was darf die Gruppe?"
      optionen={[
        { text: 'Lesen und schreiben', warum: '5 = 4 + 1. Die 1 ist das x, nicht das w – das wäre 2.' },
        { text: 'Lesen und ausführen', richtig: true },
        { text: 'Nur ausführen', warum: 'Das wäre die 1 – die gilt für andere, die dritte Ziffer.' },
      ]}
    >
      <P>
        Die Gruppe ist die zweite Ziffer: 5 = 4 + 1 = <code>r-x</code>. Sie darf das Skript lesen und starten, aber nicht ändern.
      </P>
    </Wahl>,
  ],

  'zur-zahl': () => [
    <P>
      Oft ist es umgekehrt: <code>ls -l</code> zeigt dir <code>-rwxr-x---</code>, und du sollst die Zahl für <code>chmod</code> nennen – etwa, um dieselben Rechte für eine
      andere Datei zu setzen. Das ist derselbe Weg, nur rückwärts.
    </P>,
    <Wahl
      frage="Was machst du mit dem ersten Zeichen, dem Strich vor rwx?"
      optionen={[
        { text: 'Als 0 mitzählen', warum: 'Das erste Zeichen sagt nur, ob es eine Datei (-) oder ein Verzeichnis (d) ist. Rechte stecken darin nicht.' },
        { text: 'Weglassen – es ist der Dateityp', richtig: true },
      ]}
    >
      <P>Dann bleiben neun Zeichen, die du in drei Dreiergruppen teilst. Jede Dreiergruppe wird eine Ziffer:</P>
    </Wahl>,
    <Tafel
      zeilen={[
        { name: '', werte: ['r', 'w', 'x', ''], ton: 'oben' },
        { name: 'Besitzer rwx', werte: ['4', '2', '1', '= 7'] },
        { name: 'Gruppe r-x', werte: ['4', '–', '1', '= 5'] },
        { name: 'andere ---', werte: ['–', '–', '–', '= 0'] },
        { text: 'rwxr-x--- → chmod 750', ton: 'summe' },
      ]}
    />,
    <P>
      Das Rezept in drei Schritten: <strong>Dateityp weglassen</strong>, den Rest <strong>in drei Dreiergruppen teilen</strong>, in jeder Dreiergruppe{' '}
      <strong>die Wertigkeiten addieren</strong>. Das ergibt drei Ziffern in der Reihenfolge Besitzer, Gruppe, andere.
    </P>,
    <Eingabe
      frage="Wie lautet -rw-r--r-- als Zahl für chmod?"
      pruefe={istText(['644', '0644', 'chmod 644'], {
        744: 'rw- hat kein x: 4 + 2 = 6, nicht 7.',
        466: 'Die Reihenfolge stimmt nicht: Die erste Dreiergruppe gehört dem Besitzer.',
        64: 'Jede Klasse bekommt eine eigene Ziffer – es sind immer drei.',
        110100100: 'Das sind die Bits. Gefragt ist eine Ziffer je Dreiergruppe.',
      })}
      tipp="In Dreiergruppen teilen: rw- | r-- | r--, dann je Dreiergruppe addieren."
      loesung="644"
      platzhalter="z. B. 750"
    >
      <P>
        <code>rw-</code> = 4 + 2 = 6, <code>r--</code> = 4, <code>r--</code> = 4 → <strong>644</strong>.
      </P>
    </Eingabe>,
    <Eingabe
      frage="Und -rwx------?"
      pruefe={istText(['700', '0700', 'chmod 700'], {
        7: 'Auch Klassen ohne Rechte bekommen eine Ziffer, die 0. Es sind immer drei Ziffern.',
        777: 'Die Striche bedeuten: kein Recht. --- ist 0.',
        '007': 'Die Reihenfolge ist Besitzer, Gruppe, andere – die 7 gehört nach vorn.',
      })}
      tipp="rwx | --- | --- – was ergibt eine Dreiergruppe ohne Rechte?"
      loesung="700"
      platzhalter="z. B. 750"
    >
      <P>
        7, 0, 0 → <strong>700</strong>: Nur der Besitzer darf etwas, und zwar alles.
      </P>
    </Eingabe>,
    <Merke titel="Typische Fallen">
      Das erste Zeichen ist der Dateityp, kein Recht. Auch <code>---</code> bekommt eine Ziffer: die 0. Die Reihenfolge ist immer Besitzer, Gruppe, andere. Und 6 ist{' '}
      <code>rw-</code>, nicht <code>r-x</code>.
    </Merke>,
    <P>
      In der Prüfung steht oft gar kein <code>rwx</code>, sondern ein Satz: „Der Besitzer darf …, die Gruppe darf …“. Wie du daraus die Zahl machst, zeigt das nächste
      Kapitel.
    </P>,
  ],

  // ---------- Rechte festlegen ----------
  'nach-anforderung': () => [
    <P>So sieht eine typische Prüfungsaufgabe aus:</P>,
    <P>
      <em>
        „Für das Skript deploy.sh sollen folgende Rechte gelten: Der Besitzer darf lesen, schreiben und ausführen; die Gruppe darf lesen und ausführen; alle anderen dürfen
        nichts. Geben Sie den chmod-Befehl an.“
      </em>
    </P>,
    <Wahl
      frage="Womit fängst du an?"
      optionen={[
        { text: 'Mit den anderen, weil man Zahlen von rechts liest', warum: 'Die Ziffern stehen von links in der Reihenfolge Besitzer, Gruppe, andere. Von rechts anzufangen lädt nur zum Vertauschen ein.' },
        { text: 'Für jede Klasse aufschreiben, was sie darf', richtig: true },
        { text: 'Mit 777 beginnen und abziehen', warum: 'Das geht, ist aber ein Umweg mit vielen Fehlerquellen. Einfacher: Was darf jede Klasse?' },
      ]}
    >
      <P>Genau. Der Text nennt die Klassen schon in der richtigen Reihenfolge – du musst nur noch je Klasse übersetzen.</P>
    </Wahl>,
    <Tafel
      zeilen={[
        { name: '', werte: ['r', 'w', 'x', ''], ton: 'oben' },
        { name: 'Besitzer', werte: ['4', '2', '1', '= 7'] },
        { name: 'Gruppe', werte: ['4', '–', '1', '= 5'] },
        { name: 'andere', werte: ['–', '–', '–', '= 0'] },
        { text: 'chmod 750 deploy.sh', ton: 'summe' },
      ]}
    />,
    <P>
      Also immer: <strong>je Klasse die erlaubten Rechte notieren</strong>, <strong>die Wertigkeiten addieren</strong> (r = 4, w = 2, x = 1),{' '}
      <strong>die Ziffern in der Reihenfolge Besitzer, Gruppe, andere schreiben</strong>. Darf eine Klasse nichts, ist ihre Ziffer 0. Am Schaltpult kannst du jede
      Lösung nachstellen:
    </P>,
    <Abbildung>
      <Schaltpult start="000" />
    </Abbildung>,
    <Eingabe
      frage="Für notizen.txt gilt: Der Besitzer darf lesen und schreiben; die Gruppe und alle anderen dürfen nur lesen. Welche Zahl gibst du chmod mit?"
      pruefe={istText(['644', '0644', 'chmod 644', 'chmod 644 notizen.txt'], {
        744: 'Ausführen steht nicht in der Beschreibung. Lesen und schreiben = 4 + 2.',
        444: 'Der Besitzer darf auch schreiben: 4 + 2.',
        466: 'Die Reihenfolge stimmt nicht: zuerst der Besitzer.',
        64: 'Die anderen bekommen auch eine Ziffer. Es sind immer drei.',
      })}
      tipp="Besitzer: lesen + schreiben = ?, Gruppe: lesen = 4, andere: lesen = 4."
      loesung="644"
      platzhalter="z. B. 750"
    >
      <P>
        Besitzer 4 + 2 = 6, Gruppe 4, andere 4 → <code>chmod 644 notizen.txt</code>.
      </P>
    </Eingabe>,
    <Eingabe
      frage="Für passwoerter.txt gilt: Nur der Besitzer darf lesen und schreiben, sonst darf niemand etwas. Welche Zahl?"
      pruefe={istText(['600', '0600', 'chmod 600', 'chmod 600 passwoerter.txt'], {
        6: 'Gruppe und andere bekommen auch eine Ziffer, die 0. Es sind immer drei.',
        700: 'Ausführen ist nicht verlangt – eine Textdatei startet man nicht. Lesen und schreiben = 6.',
        644: 'Dann könnten Gruppe und andere die Passwörter lesen. Hier soll außer dem Besitzer niemand etwas dürfen.',
        '006': 'Die Reihenfolge ist Besitzer, Gruppe, andere – die 6 gehört nach vorn.',
      })}
      tipp="Besitzer: 4 + 2, Gruppe: nichts, andere: nichts."
      loesung="600"
      platzhalter="z. B. 750"
    >
      <P>
        Besitzer 6, Gruppe 0, andere 0 → <code>chmod 600 passwoerter.txt</code>.
      </P>
    </Eingabe>,
  ],

  typisch: () => [
    <P>
      Ein Kollege hat Ärger mit einer Datei auf dem Server: Ein Programm darf sie nicht lesen. Er tippt kurzerhand <code>chmod 777</code> – „dann geht’s sicher“. Und es geht
      tatsächlich.
    </P>,
    <Wahl
      frage="Was ist an chmod 777 schlecht?"
      optionen={[
        { text: 'Nichts – Hauptsache, es funktioniert', warum: 'Es funktioniert, ja. Aber was dürfen jetzt alle anderen Benutzer auf dem Server?' },
        { text: 'chmod 777 gibt es nicht', warum: '7 ist eine gültige Ziffer (4 + 2 + 1). 777 ist erlaubt, nur selten sinnvoll.' },
        { text: 'Jetzt darf jeder die Datei ändern und ausführen', richtig: true },
      ]}
    >
      <P>
        777 heißt <code>rwxrwxrwx</code>: Jeder Benutzer auf dem Server darf die Datei jetzt ändern – und bei einem Programm eigene Befehle hineinschreiben, die dann
        gestartet werden. Besser ist: so viel wie nötig, so wenig wie möglich. Das ist der <B id="geringsteRechte" /> aus der IT-Sicherheit.
      </P>
    </Wahl>,
    <P>Deshalb begegnen dir immer wieder dieselben Zahlen. Hinter jeder steckt die Frage: Wer braucht was?</P>,
    <div class="ls-tabelle-huelle">
      <table class="ls-tabelle">
        <thead>
          <tr>
            <th>Zahl</th>
            <th>Rechte</th>
            <th>typisch für</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['755', 'rwxr-xr-x', 'Skripte, Ordner'],
            ['644', 'rw-r--r--', 'normale Dateien'],
            ['700', 'rwx------', 'private Skripte'],
            ['600', 'rw-------', 'Passwörter'],
            ['777', 'rwxrwxrwx', 'fast nie richtig'],
          ].map(([z, r, wofuer]) => (
            <tr key={z}>
              <td class="mono">{z}</td>
              <td class="mono">{r}</td>
              <td>{wofuer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>,
    <P>
      Bei 755 und 644 dürfen alle die Datei benutzen bzw. lesen, aber nur der Besitzer ändert sie. Bei 700 und 600 darf außer dem Besitzer niemand etwas – richtig für
      private Skripte und vertrauliche Dateien wie Passwörter oder Schlüssel.
    </P>,
    <P>
      In der Tabelle steht 755 auch für Ordner – denn Rechte gibt es nicht nur für Dateien. Einen Ordner erkennst du bei <code>ls -l</code> am <code>d</code> ganz
      vorn:
    </P>,
    <Abbildung>
      <LsZeile typ="d" rechte="rwxr-x---" groesse="4096" datum="Okt 17 16:02" name="projekte" />
    </Abbildung>,
    <Wahl
      frage="Was bedeutet das x wohl bei einem Ordner? Ein Ordner ist ja kein Programm."
      optionen={[
        { text: 'Den Ordner löschen', warum: 'Löschen verändert etwas – das wäre eher Sache des w. Stell dir den Ordner als Raum vor: Was macht man mit einem Raum?' },
        { text: 'Hineinwechseln und die Dateien darin benutzen', richtig: true },
        { text: 'Programme im Ordner starten', warum: 'Ob ein Programm starten darf, entscheidet das x der Programmdatei selbst. Hier geht es um den Ordner als Ganzes.' },
      ]}
    >
      <P>Ohne x kommt man nicht in den Ordner hinein – auch wenn man seinen Inhalt auflisten darf.</P>
    </Wahl>,
    <SoHeisstDas begriff="verzeichnis" auch="Ordner">
      Ein Behälter im Dateisystem für Dateien und weitere Verzeichnisse; <code>ls -l</code> zeigt ihn mit <code>d</code> am Anfang. Bei einem Verzeichnis heißt r: Inhalt
      auflisten, w: Dateien darin anlegen und löschen, x: hineinwechseln. Darum bekommen Verzeichnisse fast immer x, meist 755 oder 750.
    </SoHeisstDas>,
    <Eingabe
      frage="Für das Verzeichnis projekte gilt: Der Besitzer darf alles; die Gruppe darf den Inhalt auflisten und hineinwechseln; alle anderen dürfen nichts. Welche Zahl?"
      pruefe={istText(['750', '0750', 'chmod 750', 'chmod 750 projekte'], {
        740: 'Ohne x kann die Gruppe nicht hineinwechseln. Auflisten (r) und hineinwechseln (x) = 4 + 1.',
        754: 'Alle anderen sollen nichts dürfen – ihre Ziffer ist 0.',
        770: 'Dateien anlegen (w) ist für die Gruppe nicht verlangt.',
      })}
      tipp="Besitzer: alles = 7; Gruppe: r und x; andere: nichts."
      loesung="750"
      platzhalter="z. B. 755"
    >
      <P>
        7, 4 + 1 = 5, 0 → <code>chmod 750 projekte</code>. Jetzt kannst du Rechte lesen, umrechnen und festlegen – sicher wird es mit den Aufgaben zum Üben.
      </P>
    </Eingabe>,
  ],
};
