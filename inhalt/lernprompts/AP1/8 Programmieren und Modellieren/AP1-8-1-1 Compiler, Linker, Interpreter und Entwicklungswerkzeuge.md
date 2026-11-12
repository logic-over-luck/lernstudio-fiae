Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Programmiersprachen und Werkzeuge › Compiler, Linker, Interpreter und Entwicklungswerkzeuge

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

## Stoff: Compiler, Linker, Interpreter und Entwicklungswerkzeuge

Ziel: Erklären, wie aus Quelltext ein lauffähiges Programm wird, und Entwicklungswerkzeuge für einen Einsatz beurteilen.

Das muss ich können:

### K1 – Compiler gegenüber Interpreter (Stufe 2 Verstehen)
Du kannst den Unterschied zwischen Compiler und Interpreter erläutern: Übersetzung des ganzen Programms vor der Ausführung gegenüber schrittweiser Ausführung zur Laufzeit.

Erklärung:
- **Compiler:** übersetzt das **ganze Programm vor der Ausführung**, z. B. in Maschinencode (Befehle aus Nullen und Einsen – nur sie versteht der Prozessor direkt). Ausgeführt wird dann das übersetzte Programm. Beispiele: C, C++.
- **Interpreter:** führt den Quelltext **zur Laufzeit Anweisung für Anweisung** aus – es entsteht kein eigenständiges Programm. Beispiele: Python, PHP, JavaScript.
Bild dazu: Der Compiler übersetzt ein ganzes Buch vorab, der Interpreter dolmetscht Satz für Satz, während vorgelesen wird.

### K2 – Aufgabe des Linkers (Stufe 2 Verstehen)
Du kannst die Aufgabe des Linkers erklären: übersetzte Programmteile und Bibliotheken zu einem ausführbaren Programm verbinden.

Erklärung:
Ein Programm besteht oft aus mehreren Teilen und nutzt fertige **Bibliotheken**. Der Compiler übersetzt jeden Teil einzeln.
Der **Linker** verbindet danach die übersetzten Teile und die Bibliotheken zu **einem ausführbaren Programm**.
Reihenfolge: Quelltext → **Compiler** → übersetzte Teile → **Linker** → ausführbares Programm.

### K4 – Virtuelle Maschine bei Sprachen wie Java (Stufe 2 Verstehen)
Du kannst erklären, was eine virtuelle Maschine bei Sprachen wie Java leistet: Sie führt Zwischencode auf verschiedenen Betriebssystemen aus.

Erklärung:
Bei Java erzeugt der Compiler keinen Maschinencode, sondern **Zwischencode** (Bytecode).
Diesen führt die **virtuelle Maschine** (JVM) aus – und die gibt es für Windows, Linux und macOS.
Vorteil: Dasselbe übersetzte Programm läuft auf **verschiedenen Betriebssystemen**, ohne es für jedes neu zu übersetzen.

### K5 – Vorteile kompilierter und interpretierter Programme (Stufe 1 Wiedergeben)
Du kannst je einen Vorteil nennen: Kompilierte Programme laufen schneller; interpretierte lassen sich ohne Übersetzungsschritt testen.

Erklärung:
- **Kompiliert:** läuft **schneller**, weil die Übersetzung schon vorher erledigt ist.
- **Interpretiert:** lässt sich **ohne Übersetzungsschritt** sofort ausführen und testen.

### K6 – Eignung eines Entwicklungssystems für den Einsatz (Stufe 4 Beurteilen)
Du kannst Entwicklungssysteme für einen Einsatz beurteilen, zum Beispiel ob für ein kleines Automatisierungsskript eine interpretierte Sprache genügt oder ein kompiliertes Programm nötig ist.

Erklärung:
Frag: Wie wichtig ist die Geschwindigkeit, und wie oft wird geändert?
- **Kleines Automatisierungsskript**, z. B. nachts Dateien sichern – Tempo unwichtig, schnell geändert → **interpretierte Sprache genügt** (z. B. Python, PowerShell).
- **Rechenintensiv**, Geschwindigkeit entscheidend, z. B. Bildverarbeitung → **kompiliertes Programm**.

### K7 – Editor, Debugger und IDE (Stufe 4 Beurteilen)
Du kannst Editor, Debugger und integrierte Entwicklungsumgebung (IDE) erklären, auch was Debugging ist (Programm schrittweise ausführen und Variablen beobachten, um Fehler zu finden), und die Wahl einer IDE begründen: Editor, Übersetzer und Debugger in einer Oberfläche, dazu Hilfen wie Syntaxhervorhebung und Autovervollständigung.

Erklärung:
- **Editor:** Quelltext schreiben, oft mit Syntaxhervorhebung.
- **Debugger:** Programm **schrittweise** ausführen, an Haltepunkten (Breakpoints) anhalten und **Variablenwerte beobachten**.
- **Debugging:** systematisch Fehler suchen und beheben – meist mit dem Debugger.
- **IDE** (integrierte Entwicklungsumgebung): **Editor, Übersetzer und Debugger in einer Oberfläche**, dazu Hilfen wie Syntaxhervorhebung und Autovervollständigung.
Warum eine IDE: weniger Tippfehler, Fehler werden direkt angezeigt, man arbeitet schneller, und im Team arbeiten alle einheitlich.

### K8 – Entwicklungs- und Laufzeitumgebung (Stufe 2 Verstehen)
Du kannst Entwicklungs- und Laufzeitumgebung unterscheiden: Zum Entwickeln brauchst du den Compiler und weitere Werkzeuge, zum Ausführen genügt auf dem Rechner des Anwenders die Laufzeitumgebung aus virtueller Maschine und Standardbibliothek.

Erklärung:
Bei Sprachen mit virtueller Maschine gibt es zwei Pakete, weil Entwickler und Anwender Verschiedenes brauchen.
- **Entwicklungsumgebung:** Compiler, Debugger und weitere Werkzeuge, um Quelltext in Zwischencode zu übersetzen und zu testen.
- **Laufzeitumgebung:** die **virtuelle Maschine**, die den Zwischencode ausführt, und die **Standardbibliothek**, die das Programm aufruft.
Der Anwender will das Programm nur starten – er braucht also nur die Laufzeitumgebung.
Beispiel Java: Der Entwickler installiert das **JDK** (enthält auch eine Laufzeitumgebung), auf dem Büro-PC des Anwenders reicht die **JRE**. Heute liefern viele Java-Programme ihre Laufzeitumgebung gleich mit; als Prüfungsantwort bleibt JDK/JRE richtig.

### K9 – Auswahlkriterien für eine IDE (Stufe 4 Beurteilen)
Du kannst die Wahl zwischen mehreren integrierten Entwicklungsumgebungen begründen: Lizenz und Kosten, unterstützte Betriebssysteme, Erweiterbarkeit durch Plug-ins (zum Beispiel für weitere Sprachen oder einen GUI-Designer) und ein Funktionsumfang, der zum Einsatzzweck passt.

Erklärung:
Viele IDEs können ähnliches; entschieden wird nach Kriterien, die zum Team und zum Projekt passen.
- **Lizenz und Kosten:** freie IDE oder kommerzielle mit Lizenzgebühr pro Entwickler.
- **Betriebssysteme:** Läuft die IDE auf allen Rechnern im Team (Windows, Linux, macOS)?
- **Erweiterbarkeit:** Lassen sich über **Plug-ins** weitere Sprachen, ein GUI-Designer oder eine Versionsverwaltung ergänzen?
- **Einsatzzweck:** Für die Ausbildung reicht eine schlanke IDE, für große Unternehmensanwendungen braucht man z. B. Datenbank- und Server-Werkzeuge.
Beispiel: Ein kleines Team mit Linux- und Windows-Rechnern wählt eine freie, plattformübergreifende IDE mit Plug-in für die eigene Sprache.

### K10 – Weitergabe kompilierter und interpretierter Programme (Stufe 2 Verstehen)
Du kannst kompilierte und interpretierte Programme bei der Weitergabe vergleichen: Ein kompiliertes Programm läuft ohne Compiler, aber nur auf der Plattform, für die es übersetzt wurde; ein interpretiertes läuft auf jeder Plattform, auf der ein passender Interpreter installiert ist, und wird dafür meist etwas langsamer ausgeführt.

Erklärung:
Der Unterschied zeigt sich, wenn das Programm auf andere Rechner soll.
- **Kompiliert:** Der Compiler erzeugt Maschinencode für **einen** Prozessor und **ein** Betriebssystem. Das Programm startet schnell und braucht keinen Compiler – für eine andere Plattform muss man aber neu übersetzen.
- **Interpretiert:** Weitergegeben wird der Quelltext. Er läuft überall, wo der **Interpreter** installiert ist, der ihn bei jeder Ausführung neu abarbeitet – das kostet etwas Zeit.
Beispiel: Ein Skript läuft unverändert unter Windows und Linux, wenn dort der Interpreter vorhanden ist; ein übersetztes Windows-Programm startet unter Linux nicht.

### K11 – Programme interaktiv oder als Datei ausführen (Stufe 3 Anwenden)
Du kannst Wege nennen, ein Programm zu erstellen und auszuführen: im interaktiven Modus des Interpreters eine Anweisung eingeben und sofort das Ergebnis sehen, größere Programme als Datei speichern und über die Konsole oder eine Entwicklungsumgebung (z. B. IDLE, PyCharm, Visual Studio Code) starten.

Erklärung:
Interpretierte Sprachen bieten oft einen interaktiven Modus: eine Anweisung eingeben und sofort das Ergebnis sehen – praktisch zum Ausprobieren; größere Programme speichert man als Datei und startet sie über die Konsole oder die IDE.

## Lehrnotiz: Compiler, Linker, Interpreter und Entwicklungswerkzeuge

**Aufteilung:**
- Teil A – Vom Quelltext zum laufenden Programm: Compiler und Interpreter K1, K5; Linker K2; Weitergabe auf andere Rechner K10; virtuelle Maschine K4; Entwicklungs- und Laufzeitumgebung K8
- Pause möglich nach Teil A.
- Teil B – Auswählen und Werkzeuge: Skript oder kompiliertes Programm K6; interaktiv oder als Datei K11; Editor, Debugger und IDE K7; IDE auswählen K9

**Schon geprüft:** In Prüfungen: K1 (2024H) · Noch nicht geprüft: K2, K4–K11

**Kerngedanken:**
- Ein Prozessor versteht nur Maschinencode, also Bitmuster. Quelltext muss darum immer übersetzt werden; die einzige Frage ist, wann: einmal vorab für das ganze Programm oder bei jeder Ausführung. Tempo, Testen und Weitergabe sind Folgen dieses Zeitpunkts, keine eigenen Merkmale.
- Java verbindet beides: Übersetzt wird einmal vorab, aber in Zwischencode; ausgeführt wird er zur Laufzeit von der virtuellen Maschine. Plattformunabhängig ist nur der Zwischencode – die virtuelle Maschine selbst muss es für jedes Betriebssystem eigens geben.
- Eine Beurteilung (Skript oder kompiliert, IDE ja oder nein, welche IDE) besteht aus dem Urteil, dem Bezug auf die Lage und einem Gegenargument oder einer Bedingung, unter der das andere richtig wäre.

**Typische Missverständnisse:**
- Viele denken, ein Interpreter sei ein langsamer Compiler. Richtig ist: Er übersetzt nicht vorab, es entsteht kein eigenständiges Programm; dass er langsamer ist, ist die Folge davon.
- Viele denken, die virtuelle Maschine bei Java sei ein virtueller Rechner wie bei VirtualBox oder Hyper-V. Richtig ist: Sie ist ein Programm, das Zwischencode ausführt.
- Viele denken, der Debugger finde und behebe den Fehler. Richtig ist: Er macht den Zustand des Programms sichtbar, den Fehler erkennt der Mensch. Debugger ist das Werkzeug, Debugging die Tätigkeit.

**Fachwörter:**
- Maschinencode: Befehle, die der Prozessor direkt ausführt
- Zwischencode: Ergebnis des Java-Compilers, noch kein Maschinencode
- Bibliothek: fertige Programmteile zum Einbinden
- Laufzeitumgebung: virtuelle Maschine und Standardbibliothek zum Ausführen
- Haltepunkt: Stelle, an der der Debugger anhält
- Plug-in: Erweiterung, die eine IDE ergänzt
- interaktiver Modus: Anweisung eingeben, Ergebnis sofort sehen

**So fragt die IHK:**
- Eine echte Teilaufgabe (2024H): Ein Betrieb will Software selbst entwickeln, zur Wahl stehen Compiler- und Interpreter-Sprachen. Operator „erläutern“, 3 Punkte, etwa fünf Antwortzeilen, kein Material.
- Die Lösungshinweise zählen: Compiler-Sprachen übersetzen den Code im Voraus in Maschinencode, was schnelle Ausführung ermöglicht; Interpreter-Sprachen führen den Code zeilenweise zur Laufzeit aus. Für volle Punkte also beide Seiten mit dem Zeitpunkt der Übersetzung und die Geschwindigkeit als Folge.
- Zu den übrigen Aussagen gibt es keine echte Aufgabe. Der Prüfungskatalog nennt: Entwicklungssysteme (Compiler, Linker, virtuelle Maschine, Interpreter, Editor, Debugger) unterscheiden und beurteilen, eine IDE bedarfsgerecht auswählen und begründen, Debugging mit Breakpoints. Zu erwarten sind die Operatoren nennen, erläutern, begründen, beurteilen.

**Fallen:**
- Teil A: Python oder JavaScript erzeugen intern oft Bytecode oder übersetzen erst während der Ausführung; in der Prüfung gelten sie trotzdem als interpretiert.
- Teil A: „Zeilenweise“ ist ebenso richtig wie „Anweisung für Anweisung“. Entscheidend ist der Zeitpunkt: vorab gegen zur Laufzeit.
- Teil A: Beim Unterschied nur eine Seite erklären oder nur „der Compiler ist schneller“ schreiben, ohne den Zeitpunkt der Übersetzung.
- Teil A: Dem Linker eine Übersetzung zuschreiben. Er fügt nur zusammen, was der Compiler geliefert hat.
- Teil A: Beim Linker die Bibliotheken vergessen oder ihn ganz weglassen, sodass der Compiler scheinbar direkt das ausführbare Programm liefert.
- Teil A: Zur virtuellen Maschine nur „Java läuft überall“ schreiben, ohne zu sagen, was sie tut.
- Teil A: Dem Anwender den Compiler oder die ganze Entwicklungsumgebung installieren wollen, „damit es sicher läuft“.
- Teil B: „Kompiliert ist schneller, also immer besser“ – Tempo zählt nur, wenn die Aufgabe es braucht.
- Teil B: Was im interaktiven Modus eingegeben wurde, ist nach dem Schließen weg. Was man wieder braucht, gehört in eine Datei.
- Teil B: Bei einem größeren Programm nur „als Programm ausführen“ schreiben, ohne Datei und ohne Startweg (Konsole oder IDE).
- Teil B: Den Debugger nur nennen, ohne seine Arbeitsweise: Haltepunkt setzen, schrittweise ausführen, Variablenwerte beobachten.
- Teil B: Syntaxhervorhebung mit Fehlersuche verwechseln. Das Einfärben hilft beim Schreiben. Fehler, die erst beim Ausführen auftreten, findet man mit dem Debugger: Er zeigt, was das Programm Schritt für Schritt tut und welche Werte die Variablen haben.
- Teil B: Eine IDE für immer nötig halten. Für ein kurzes Skript eines Einzelnen genügt ein Editor; der Nutzen wächst mit Programmgröße und Team.
- Teil B: „Die IDE mit den meisten Funktionen ist die beste“ – der Umfang muss zum Einsatzzweck passen, sonst zahlt man für Ungenutztes.
- Teil B: Auswahlkriterien nur aufzählen, ohne sie auf Team und Vorhaben zu beziehen. Ein Kriterium, in dem sich die Kandidaten nicht unterscheiden, trägt die Entscheidung nicht.
