Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Programmiersprachen und Werkzeuge › Compiler, Linker, Interpreter und Entwicklungswerkzeuge

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen und dem Warum dahinter. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, vor jedem Vergleich, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, wurde das geprüft – dann reicht die Erklärung aus dem Stoff mit dem Warum dazu, ohne eigenen Ablauf. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber lösbar allein mit dem Stoff. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Bewerte nur, was in der Aufgabe verlangt war. Stimmt der Inhalt und fehlt nur das Fachwort, zählt es als richtig: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Zeichnungen mache ich auf Papier und lade ein Foto hoch.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im IHK-Stil (Kundensituation, Teilaufgaben mit Punkten, zusammen etwa 10–12, eine nach der anderen). Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K2 – Was der Linker beim Verbinden tut: (1) Der Compiler übersetzt jede Quelltextdatei einzeln in eine Objektdatei mit Maschinencode. (2) Ruft der Code eine Funktion aus einer anderen Datei oder Bibliothek auf, kennt der Compiler deren Adresse nicht und vermerkt nur den Namen als offenen Verweis. (3) Der Linker liest alle Objektdateien und die benötigten Bibliotheken ein und ordnet ihren Maschinencode hintereinander an, sodass jede Funktion eine feste Adresse erhält. (4) Der Linker sucht zu jedem offenen Verweis die Stelle, an der die Funktion definiert ist, und trägt deren Adresse an der Aufrufstelle ein. (5) Findet der Linker zu einem Namen keine Definition, bricht er mit einer Fehlermeldung ab; andernfalls schreibt er die ausführbare Datei. Vereinfacht: Beim dynamischen Linken wird der Bibliothekscode nicht in die ausführbare Datei kopiert, sondern erst beim Programmstart eingebunden.

**Typische Missverständnisse:**
- Viele denken, ein Interpreter sei ein langsamer Compiler. Richtig ist: Er übersetzt nicht vorab, es entsteht kein eigenständiges Programm; dass er langsamer ist, ist die Folge davon.
- Viele denken, die virtuelle Maschine bei Java sei ein virtueller Rechner wie bei VirtualBox oder Hyper-V. Richtig ist: Sie ist ein Programm, das Zwischencode ausführt.
- Viele denken, der Debugger finde und behebe den Fehler. Richtig ist: Er macht den Zustand des Programms sichtbar, den Fehler erkennt der Mensch. Debugger ist das Werkzeug, Debugging die Tätigkeit.

**Fachwörter:**
- Compiler: übersetzt Quellcode vor der Ausführung in Zielcode
- Interpreter: führt Quell- oder Zwischencode zur Laufzeit schrittweise aus; im einfachen Prüfungsmodell den Quelltext Anweisung für Anweisung
- Linker: verbindet übersetzte Programmteile und Bibliotheken
- Maschinencode: Befehle, die der Prozessor direkt ausführt
- Zwischencode: Ergebnis des Java-Compilers, noch kein Maschinencode
- Bibliothek: fertige Programmteile zum Einbinden
- Laufzeitumgebung: virtuelle Maschine und Standardbibliothek zum Ausführen
- Debugger: Werkzeug zum Anhalten, schrittweisen Ausführen und Beobachten
- Debugging: systematische Fehlersuche und -behebung
- Haltepunkt: Stelle, an der der Debugger anhält
- IDE: integrierte Entwicklungsumgebung mit mehreren Werkzeugen
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
