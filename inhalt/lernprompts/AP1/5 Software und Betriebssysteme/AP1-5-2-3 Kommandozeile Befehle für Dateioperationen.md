Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Software und Betriebssysteme › Betriebssystem einrichten › Kommandozeile: Befehle für Dateioperationen

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP1 und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

**So will ich lernen**
- Bring mir den Stoff so bei, dass ich ihn verstehe und Aufgaben dazu lösen kann. Wie du erklärst, entscheidest du – richte dich danach, wie ich antworte. Die Aufteilung aus der Lehrnotiz ist ein Vorschlag.
- Kleine Portionen: ein Thema erklären, direkt eine Aufgabe dazu, dann das nächste. Immer nur eine Aufgabe auf einmal.
- Erklär in Alltagssprache, Schritt für Schritt an einem Beispiel und mit dem Warum; Formel oder Merksatz kommen am Ende. Sag zuerst, was eine Sache ist, bevor du Regeln dazu erklärst.
- Fachwörter, die die IHK lesen will, machst du beim ersten Auftauchen **fett** und bleibst dann bei genau diesem Wort. Nach der Erklärung, direkt vor der Aufgabe, steht eine kurze Liste „Fachwörter für die Prüfung“: je Zeile das Wort und in wenigen Worten, was es bedeutet – höchstens fünf je Thema.
- Komm direkt zur Sache: keine durchgehende Rahmengeschichte, keine Rate-Fragen vor der Erklärung, kein Smalltalk, kein Lob.
- Bei Fehlern: sag, was richtig war, und erklär klar, wo der Fehler liegt und wie die richtige Antwort lautet. Verstehe ich etwas nicht, erklär es anders statt noch einmal dasselbe.
- Habe ich etwas falsch verstanden (nicht nur unvollständig oder ungenau geantwortet), stellst du danach **eine Kurzfrage** genau zu diesem Punkt – ohne neue Situation, in einem Satz zu beantworten. Höchstens eine je Thema. War die Antwort nur unvollständig, fehlte die Begründung oder das Fachwort, geht es ohne Kurzfrage weiter.
- Keine Schleifen: Hänge ich nach einer Erklärung an derselben Stelle immer noch, zeig mir die Musterantwort, sag in einem Satz, nach welchem Muster sie gebaut ist, und geh weiter. Stell dieselbe Aufgabe nicht mehrmals und bring dann keine neuen Vergleiche mehr.

**Aufgaben und Bewertung**
- Die Aufgaben denkst du dir selbst aus, jede Sitzung neu. Sie sollen anwenden lassen (eine neue Lage, einen Fehler finden, einen Vorschlag beurteilen), nicht die Erklärung nachsagen. Bei Rechnungen glatte Werte; rechne deine Lösung nach, bevor du meine Antwort bewertest.
- Sag in der Aufgabe klar, was verlangt ist, bei mehreren Teilen als a), b). Bewerte nur das – verlang nachträglich nichts, was nicht in der Aufgabe stand.
- Zeichnen: Ich zeichne auf Papier und lade ein Foto hoch (oder beschreibe die Zeichnung in Worten); du prüfst sie Punkt für Punkt.
- Stimmt der Inhalt und fehlt nur das Fachwort, zählt die Antwort als richtig: Nenn mir das Wort in einem Satz und geh weiter.
- Zeig Lösungen nie, bevor ich geantwortet habe.

**Was feststeht**
- Der Stoff ist verbindlich, und jede Aussage muss drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“, statt still etwas anderes beizubringen. Steht bei einer Aussage „in der Prüfung vorgegeben“, muss ich das nur anwenden.
- Sag mir bei jedem Thema in einem Halbsatz, ob es schon in einer Prüfung vorkam (Lehrnotiz „Schon geprüft“). Was schon geprüft wurde, übst du gründlicher.
- Schreibe ich „kann ich“, stell nur eine Aufgabe. Schreibe ich „Pause“, fass in zwei Zeilen zusammen, wo wir stehen; später mache ich im selben Chat weiter.
- Am Ende stellst du eine Abschlussaufgabe im Stil der IHK: kurze Kundensituation, Sie-Form, 3–5 Teilaufgaben mit Punkten (zusammen 10–12), eine nach der anderen. Nimm vor allem das hinein, was unterwegs nicht saß, und das, was schon geprüft wurde. Davor gibt es keine eigene Wiederholungsrunde.
- Abhaken: Hat die Abschlussaufgabe mindestens zwei Drittel der Punkte, schreib: „✅ Kannst du abhaken: <Titel des Stichpunkts>“. Sonst nenn, was noch wackelt, und übe genau das mit mir.

Antworte auf Deutsch.

## Stoff: Kommandozeile: Befehle für Dateioperationen

Ziel: Befehle mit Parametern aufbauen, Dateibefehle für Windows und Linux einsetzen und Rechte unter Linux deuten.

Das muss ich können:

### K1 – Aufbau eines Befehls (Stufe 2 Verstehen)
Du kannst den Aufbau eines Befehls erklären: Befehlsname, Parameter bzw. Optionen, Argumente.

Erklärung:
Ein Befehl besteht aus drei Teilen:
- **Befehlsname:** was getan wird – z. B. `ls`
- **Parameter bzw. Optionen:** wie es getan wird – z. B. `-l` für eine ausführliche Liste
- **Argumente:** womit – z. B. das Verzeichnis `/home`
Zusammen: `ls -l /home`.
Optionen beginnen unter Windows (cmd) meist mit `/` (`dir /s`), unter Linux mit `-` (`ls -l`).

### K2 – Grundbefehle: dir, ls, mkdir, cp, copy, del (Stufe 2 Verstehen)
Du kannst die Befehle dir und ls (Inhalt anzeigen), mkdir (Verzeichnis anlegen), cp und copy (kopieren) sowie del (löschen) der richtigen Shell zuordnen und ihren Zweck nennen: dir, copy und del gehören zur Windows-Eingabeaufforderung (cmd), ls und cp zur Linux-Shell (Bash); die PowerShell kennt beide Namen als Alias.

Erklärung:
Entscheidend ist die **Shell**, nicht nur das Betriebssystem:
- **Inhalt anzeigen:** `dir` (cmd), `ls` (Bash)
- **Verzeichnis anlegen:** `mkdir` (beide)
- **Kopieren:** `copy` (cmd), `cp` (Bash)
- **Löschen:** `del` (cmd), `rm` (Bash)
Die **PowerShell**, Standard-Shell unter Windows 10/11, kennt beide Namen als Alias: `ls` und `dir`, `cp` und `copy`, `rm` und `del` funktionieren dort.
Merkhilfe: Die Linux-Befehle sind meist die kurze Form – `cp` für copy, `rm` für remove.

### K4 – alias als Kurzname für Befehle (Stufe 2 Verstehen)
Du kannst erklären, wozu alias dient: einen eigenen Kurznamen für einen Befehl festlegen.

Erklärung:
Mit `alias` legst du einen **eigenen Kurznamen** für einen Befehl fest – praktisch für lange Befehle, die du oft brauchst.
Beispiel: `alias ll='ls -l'` – danach reicht `ll`, um eine ausführliche Liste anzuzeigen.

### K5 – Linux-Rechte mit chmod, etwa chmod 754 (Stufe 3 Anwenden)
Du kannst mit chmod die Zugriffsrechte einer Datei unter Linux festlegen und deuten: Lesen, Schreiben und Ausführen für Besitzer, Gruppe und andere, zum Beispiel bei chmod 754.

Erklärung:
`chmod` legt unter Linux die Zugriffsrechte einer Datei fest. Die drei Ziffern stehen für **Besitzer, Gruppe, andere** (alle übrigen Benutzer) – in dieser Reihenfolge.
Jede Ziffer ist eine Summe aus:
- r (Lesen) = 4
- w (Schreiben) = 2
- x (Ausführen) = 1
Beispiel `chmod 754 datei`:
- 7 = 4+2+1 → Besitzer: rwx (lesen, schreiben, ausführen)
- 5 = 4+1 → Gruppe: r-x (lesen, ausführen)
- 4 → andere: r-- (nur lesen)
Rückwärts: `rwxr-x---` = 7, 5, 0 = 750.
Festlegen: „Besitzer alles, Gruppe lesen und ausführen, andere nichts“ → `chmod 750 skript.sh`.

### K6 – Eignung eines Befehls samt Parametern (Stufe 4 Beurteilen)
Du kannst beurteilen, ob ein gegebener Befehl mit seinen Parametern in der verwendeten Shell (Windows-Eingabeaufforderung, PowerShell oder Bash) das gewünschte Ergebnis liefert, zum Beispiel ob ein Kopierbefehl dort bekannt ist.

Erklärung:
Prüfe zwei Dinge:
- **Kennt die verwendete Shell den Befehl?** Am Prompt erkennst du sie: `C:\>` = cmd, `PS C:\>` = PowerShell, `$` = Bash (als Administrator „root“ meist `#`). `copy` in der Bash funktioniert nicht → `cp`. `rm` in cmd funktioniert nicht → `del`; in der PowerShell dagegen schon (Alias).
- **Tun die Parameter, was gewünscht ist?** Stimmen Quelle und Ziel, ist die Option richtig – und in der richtigen Form? Für Unterordner z. B. cmd `dir /s`, PowerShell `Get-ChildItem -Recurse`, Bash `cp -r` bzw. `rm -r` – aber `ls -R` mit großem R; `ls -r` sortiert nur umgekehrt.
Beispiel: In der Bash soll `bericht.txt` nach `/backup` kopiert werden. `copy bericht.txt /backup` ist falsch, richtig ist `cp bericht.txt /backup`.

### K7 – Weitere Dateibefehle: cd, pwd, rm, mv, cat (Stufe 2 Verstehen)
Du kannst weitere Dateibefehle ihrem Zweck zuordnen: cd (Verzeichnis wechseln), pwd (aktuelles Verzeichnis anzeigen), rm (löschen), mv und move (verschieben oder umbenennen), type und cat (Dateiinhalt anzeigen); die PowerShell kennt diese Namen als Alias.

Erklärung:
- `cd` – Verzeichnis wechseln (cmd und Bash)
- `pwd` – aktuelles Verzeichnis anzeigen (Bash)
- `rm` – löschen (Bash)
- `mv` (Bash) bzw. `move` (cmd) – verschieben oder umbenennen
- `cat` (Bash) bzw. `type` (cmd) – Inhalt einer Datei anzeigen
Die PowerShell kennt alle diese Namen als Alias.

### K8 – Dateibefehl mit Pfad und Optionen schreiben (Stufe 3 Anwenden)
Du kannst für eine Vorgabe einen Dateibefehl mit Pfad und Parametern schreiben: absoluter oder relativer Pfad, .. für das übergeordnete und ~ für das eigene Home-Verzeichnis, Platzhalter *, typische Optionen wie ls -l und -a, cp -r, rm -r, mkdir -p oder dir /s, und die Hilfe mit man, --help, /? oder Get-Help aufrufen.

Erklärung:
Einen Befehl schreibst du aus Befehlsname, Optionen und Argumenten:
- **Pfade:** absolut ab `/` (Linux) bzw. `C:\` (Windows), relativ vom aktuellen Verzeichnis; `..` = übergeordnetes, `~` = Home-Verzeichnis.
- **Platzhalter:** `*` für beliebig viele Zeichen, z. B. `rm *.tmp`.
- **Typische Optionen:** `ls -l` (ausführlich), `ls -a` (versteckte Dateien), `cp -r` / `rm -r` (rekursiv), `mkdir -p` (fehlende Ordner mit anlegen), `dir /s` (cmd, mit Unterordnern).
- **Hilfe:** `man cp`, `cp --help`, `copy /?`, `Get-Help Copy-Item`.

## Lehrnotiz: Kommandozeile: Befehle für Dateioperationen

**Aufteilung:**
- Aufbau eines Befehls: K1
- Welcher Befehl in welcher Shell, nur Name und Zweck: K2, K7
- Befehle mit Pfad, Platzhalter und Optionen schreiben: K8
- Eigene Kurznamen: K4
- Rechte unter Linux lesen und setzen: K5
- Beurteilen, ob ein Befehl liefert, was er soll: K6

**Schon geprüft:** Noch nicht geprüft: K1, K2, K4–K8

**Kerngedanken:**
- Die PowerShell kennt die Befehlsnamen aus cmd und Bash, aber nicht die cmd-Optionen mit `/`: Sie liest sie als Pfad, ebenso die Bash. Ihre eigenen Optionen beginnen mit `-` und einem Namen (`-Recurse`).
- Ein bekannter Befehl ist noch kein richtiger. Das Urteil besteht aus ja oder nein, der Begründung (Shell, Befehl, Option, Quelle und Ziel) und bei nein der Korrektur; auch „ja“ kann richtig sein.
- Ein relativer Pfad hängt vom aktuellen Verzeichnis ab; es gehört deshalb in jede Aufgabe mit Pfaden. `..` lässt sich reihen (`../..`).
- Bei chmod gibt es drei Richtungen: Ziffern in Rechte, Rechte in Ziffern, Vorgabe in Worten zum ganzen Befehl.

**Typische Missverständnisse:**
- Viele denken, unter Windows gebe es einen einzigen Befehlssatz. Richtig ist: cmd und PowerShell sind zwei Shells; welche gemeint ist, zeigt der Prompt.
- Viele denken, alias erzeuge ein neues Programm oder eine Kopie. Richtig ist: nur ein anderer Name für den Aufruf, der Befehl selbst bleibt unverändert; ohne dauerhaften Eintrag gilt er nur in der laufenden Sitzung.

**Fachwörter:**
- Shell: Programm, das eingetippte Befehle ausführt
- Prompt: Eingabezeile, zeigt Shell und Verzeichnis
- Optionen: sagen, wie es getan wird
- Argumente: sagen, womit, etwa Datei oder Pfad
- Alias: Kurzname für einen Befehl
- Platzhalter: `*` steht für beliebig viele Zeichen
- rekursiv: mit allen Unterordnern und deren Inhalt

**So fragt die IHK:**
- Es liegt keine echte Aufgabe vor. Der Prüfungskatalog nennt Kommandozeile, Befehlssyntax, Parameter und Befehle für Dateioperationen (dir, ls, mkdir, alias, del, cp, copy, chmod).
- Zu erwarten: Windows-Clients und Linux-Server; als Material ein Prompt mit Befehl, eine Rechteangabe in Buchstaben oder Ziffern oder eine kurze Vorgabe, oft als Tabelle.
- Operatoren: zuordnen (Befehl, Zweck, Shell), erläutern (Aufbau), angeben (Befehl mit Pfad und Option, chmod-Ziffern), beurteilen.
- Zu erwarten sind Teilaufgaben mit 2–6 Punkten, oft 1 Punkt je Befehl oder Personengruppe. Gleichwertige Schreibweisen zählen; beim Beurteilen volle Punkte nur mit Begründung.

**Fallen:**
- Den Pfad für eine Option halten: Er ist ein Argument. Nicht jeder Befehl hat alle drei Teile.
- Die lange Form einer Bash-Option übersehen: zwei Bindestriche, etwa `--help`.
- `type` für die Anzeige des Dateityps halten.
- Einen Ordner mit `cp` oder `rm` ohne `-r` bearbeiten; `mkdir` ohne `-p` scheitert, wenn Zwischenordner fehlen.
- Den Platzhalter vergessen oder den Befehl der falschen Shell nehmen.
- Gleichwertiges als falsch werten: `ls -la` = `ls -al` = `ls -l -a`, `cd` = `cd ~` (nur Bash; cmd zeigt so nur das aktuelle Verzeichnis an), absoluter Pfad, wo nicht ausdrücklich ein relativer verlangt ist.
- Bei chmod die Reihenfolge Besitzer – Gruppe – andere vertauschen, die Werte aneinanderhängen statt addieren, 5 (r-x) mit 6 (rw-) verwechseln.
- „andere“ als „alle“ lesen: Gemeint sind die übrigen Benutzer.
- Den Dateinamen im chmod-Befehl weglassen.
- Die Shell am Prompt falsch erkennen, etwa das fehlende `PS` übersehen.
- Nur die Korrektur oder nur „ja“ hinschreiben: Ohne Begründung zählt das Urteil nicht voll.
