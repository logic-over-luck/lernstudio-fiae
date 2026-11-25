Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Suchen, Sortieren, Rekursion und Generik › Suchen, Sortieren und weiterführende Techniken › Rekursion und Iteration

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 2) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen: gern mit Beispielen aus dem Alltag und dem Warum dahinter.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Die Aufgaben sollen mich vor allem anwenden lassen, nicht nur die Erklärung nachsagen. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Bewerte nur, was in der Aufgabe verlangt war. Stimmt der Inhalt und fehlt nur das Fachwort, zählt es als richtig: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Pseudocode und SQL tippe ich in den Chat; bewerte sie wie ein IHK-Korrektor (jede verständliche Schreibweise zählt, es kommt auf die Logik an). Diagramme und relationale Modelle zeichne ich auf Papier und lade ein Foto hoch. Für SQL gilt das Tabellenmodell aus der Lehrnotiz.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im Stil der IHK-Aufgaben aus der Lehrnotiz (z. B. SQL-Anweisung zu einer vorgegebenen Ergebnistabelle, Pseudocode zu einer Beschreibung), mit Punkten je Teil (zusammen etwa 10–12), eine Teilaufgabe nach der anderen. Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

Antworte auf Deutsch.

## Stoff: Rekursion und Iteration

Ziel: Rekursive Algorithmen nachvollziehen, mit iterativen vergleichen und in eine iterative Lösung umschreiben.

Das muss ich können:

### K1 – Rekursion, Abbruchbedingung und Aufrufstapel (Stufe 2 Verstehen)
Du kannst Rekursion erklären: Eine Funktion ruft sich selbst mit einem kleineren Teilproblem auf, bis eine Abbruchbedingung erreicht ist; jeder Aufruf belegt einen eigenen Rahmen auf dem Aufrufstapel, deshalb bricht das Programm ohne erreichbare Abbruchbedingung mit einem Stapelüberlauf (Stack Overflow) ab.

Erklärung:
**Rekursion:** Eine Funktion löst ein Problem, indem sie sich selbst mit einem **kleineren Teilproblem** aufruft.
- **Abbruchbedingung (Basisfall):** ein Fall, der ohne Selbstaufruf gelöst wird, z. B. `n <= 1`
- **Rekursionsschritt:** Aufruf mit kleinerem Wert, z. B. `n - 1` oder `n div 2`, sodass der Basisfall sicher erreicht wird
- jeder Aufruf bekommt einen eigenen **Rahmen auf dem Aufrufstapel** (Parameter, lokale Variablen, Rücksprungadresse); frei wird er erst, wenn der Aufruf fertig ist
- fehlt die Abbruchbedingung oder wird sie nie erreicht, wächst der Stapel, bis kein Platz mehr ist: **Stapelüberlauf (Stack Overflow)**, das Programm bricht ab
Beispiel Fakultät:
- `funktion fak(n: Ganzzahl): Ganzzahl`
- `  if n <= 1 then`
- `    return 1`
- `  end if`
- `  return n * fak(n - 1)`
`fak(3)` ruft `fak(2)` auf, das ruft `fak(1)` auf (Basisfall, liefert 1). Auf dem Rückweg wird gerechnet: 2 · 1 = 2, dann 3 · 2 = 6.

### K2 – Rekursion gegen Iteration: Vor- und Nachteile (Stufe 2 Verstehen)
Du kannst je einen Vor- und Nachteil der rekursiven gegenüber einer iterativen Lösung beschreiben: oft kürzer, eleganter und näher an der Problembeschreibung, aber mehr Speicher auf dem Aufrufstapel und durch die vielen Aufrufe meist langsamer.

Erklärung:
Rekursiv gegenüber iterativ (mit Schleife):
- **Vorteil:** oft **kürzer und eleganter**, nah an der Problembeschreibung, z. B. bei Bäumen, Verzeichnisstrukturen oder einer rekursiven mathematischen Definition
- **Nachteil:** jeder Aufruf belegt **Speicher auf dem Aufrufstapel**, bei großer Tiefe droht ein Stapelüberlauf; die vielen Funktionsaufrufe machen die Lösung meist **langsamer**
In der Prüfung reicht je ein Vor- und Nachteil mit kurzer Begründung, z. B.: „Die rekursive Lösung ist kürzer, weil sie direkt der Definition folgt; sie braucht aber mehr Speicher, weil jeder Aufruf einen eigenen Rahmen auf dem Stapel belegt.“

### K3 – Iterative Umsetzung eines rekursiven Algorithmus (Stufe 3 Anwenden)
Du kannst einen rekursiven Algorithmus iterativ umsetzen: die Selbstaufrufe durch eine Schleife mit derselben Bedingung ersetzen und das, was die Rekursion auf dem Rückweg erledigt, nachbilden, indem du die Zwischenergebnisse in einer Liste sammelst und danach in umgekehrter Reihenfolge ausgibst (z. B. die Reste aus modulo 2 und div 2 bei der Umrechnung dezimal → binär).

Erklärung:
Viele rekursive Funktionen lassen sich mit einer **Schleife** nachbauen:
- die **Abbruchbedingung** bestimmt die Schleifenbedingung: Die Schleife läuft, solange der Basisfall nicht erreicht ist
- der **Selbstaufruf mit kleinerem Wert** wird zur Zuweisung, z. B. `n = n div 2`
- was die Rekursion **auf dem Rückweg** erledigt (Anweisungen nach dem Selbstaufruf), läuft in umgekehrter Reihenfolge – das bildest du nach, indem du die Zwischenergebnisse in einer Liste sammelst und danach **rückwärts** ausgibst
Beispiel dezimal → binär, rekursiv:
- `funktion binaer(n: Ganzzahl)`
- `  if n > 0 then`
- `    binaer(n div 2)`
- `    ausgabe(n mod 2)`
- `  end if`
Iterativ:
- `funktion binaerIterativ(n: Ganzzahl)`
- `  reste = neue Liste<Ganzzahl>`
- `  while n > 0 do`
- `    reste.add(n mod 2)`
- `    n = n div 2`
- `  end while`
- `  for i = reste.size() - 1 to 0 step -1`
- `    ausgabe(reste.get(i))`
- `  end for`
Für 11 sammelt die Schleife die Reste 1, 1, 0, 1; rückwärts ausgegeben ergibt das 1011.
Für n = 0 geben `binaer` und `binaerIterativ` nichts aus, weil die Bedingung `n > 0` nie erfüllt ist. Soll dann „0“ erscheinen, fängst du den Fall vorab ab: `if n == 0 then ausgabe(0)`.
Gibt die Aufgabe eine Listenklasse vor, verwende genau deren Methoden (2022W: `l.insert(rest)` statt `add`, `l.element(i)` statt `get`, `l.size()`) und lies nach, von welchem Ende die Positionen gezählt werden (dort: „Position 0 ist das Listenende“). Die Ausgabeschleife muss so laufen, dass der zuletzt gespeicherte Rest – die höchste Stelle – zuerst ausgegeben wird.

### K4 – Anweisung vor oder nach dem Selbstaufruf (Stufe 2 Verstehen)
Du kannst erklären, wie die Stellung einer Anweisung vor oder nach dem Selbstaufruf die Reihenfolge bestimmt: Anweisungen davor laufen beim Abstieg in Aufrufreihenfolge, Anweisungen danach beim Rückweg in umgekehrter Reihenfolge; so gibt die Umrechnung von 11 mit der Ausgabe vor dem Aufruf 1101 statt 1011 aus.

Erklärung:
Bei einer rekursiven Funktion entscheidet die **Stellung einer Anweisung zum Selbstaufruf** über die Reihenfolge:
- Anweisungen **vor** dem Selbstaufruf laufen beim **Abstieg** – in der Reihenfolge der Aufrufe
- Anweisungen **nach** dem Selbstaufruf laufen erst auf dem **Rückweg**, wenn der innere Aufruf fertig ist – also in **umgekehrter** Reihenfolge
Beispiel: Umrechnung von 11 ins Binärsystem mit `ausgabe(n mod 2)`
- Aufrufe: `binaer(11)` → `binaer(5)` → `binaer(2)` → `binaer(1)` → `binaer(0)` (Abbruch)
- Reste in Aufrufreihenfolge: 1, 1, 0, 1
- Ausgabe **vor** dem Selbstaufruf: `1101` – die Ziffern stehen verkehrt herum
- Ausgabe **nach** dem Selbstaufruf: `1011` – richtig, denn der zuletzt berechnete Rest ist die höchste Stelle und wird auf dem Rückweg zuerst ausgegeben

### K5 – Eignung eines Problems für Rekursion (Stufe 3 Anwenden)
Du kannst für ein Problem bestimmen, ob es sich rekursiv lösen lässt: Derselbe Ablauf wiederholt sich, jeder Durchlauf arbeitet mit veränderten, kleineren Daten, das Verfahren selbst bleibt gleich, und es gibt einen einfachsten Fall, der ohne weiteren Aufruf gelöst wird.

Erklärung:
Rekursion passt, wenn sich ein Problem auf eine **kleinere Fassung desselben Problems** zurückführen lässt. Vier Prüffragen:
- Wird **derselbe Ablauf mehrmals** ausgeführt?
- Ändern sich die **Daten** bei jedem Durchlauf, werden sie kleiner?
- Bleibt das **Verfahren** selbst gleich?
- Gibt es einen **einfachsten Fall** (Abbruchbedingung), der ohne weiteren Aufruf gelöst wird?
Sind alle vier erfüllt, kann man rekursiv lösen. Fehlt der einfachste Fall oder wird das Problem nicht kleiner, endet die Rekursion nie.
Beispiel: Die Größe eines Ordners ist die Größe seiner Dateien plus die Größe jedes Unterordners (derselbe Ablauf, kleinere Daten); ein Ordner ohne Unterordner ist der einfachste Fall. Eine einzelne Mail zu versenden ist dagegen kein Fall für Rekursion.

### K6 – Rekursive Funktion mit Rückgabewert schreiben (Stufe 3 Anwenden)
Du kannst einen einfachen rekursiven Algorithmus als Funktion mit Parameter und Rückgabewert schreiben: Im Abbruchfall gibt sie direkt einen Wert zurück, sonst ruft sie sich mit einem verkleinerten Parameter selbst auf und setzt das Ergebnis auf dem Rückweg zusammen, zum Beispiel bei der Umwandlung einer Dezimalzahl in eine Dualzahl (Aufruf mit zahl div 2, danach den Rest zahl mod 2 anhängen).

Erklärung:
Eine rekursive Funktion hat immer zwei Teile:
- **Abbruchfall:** Für den einfachsten Eingabewert steht das Ergebnis fest und wird direkt mit `return` zurückgegeben
- **rekursiver Fall:** Die Funktion ruft sich mit einem **kleineren** Parameter auf und verarbeitet dessen Rückgabewert weiter
Das Ergebnis entsteht auf dem **Rückweg**: Erst wenn der innere Aufruf zurückkehrt, hängt der äußere sein Teilergebnis an. Deshalb steht `zahl mod 2` hinter dem Aufruf – so landet das höchstwertige Bit vorn.
Beispiel dezimal → dual:
- `funktion dual(zahl: Ganzzahl): Text`
- `  if zahl < 2 then`
- `    return text(zahl)`
- `  end if`
- `  return dual(zahl div 2) + text(zahl mod 2)`
- `end funktion`
`dual(6)` = `dual(3) + "0"` = `dual(1) + "1" + "0"` = `"110"`.

## Lehrnotiz: Rekursion und Iteration

**Aufteilung:**
- Was Rekursion ist, Abbruchbedingung und Aufrufstapel: K1
- Eignet sich ein Problem für Rekursion: K5
- Anweisung vor oder nach dem Selbstaufruf: K4
- Rekursive Funktion mit Rückgabewert schreiben: K6
- Vor- und Nachteile gegenüber der Schleife: K2
- Rekursiv in iterativ umschreiben: K3 – baut auf der Reihenfolge von Abstieg und Rückweg auf

**Schon geprüft:** In Prüfungen: K2 (2022W), K3 (2022W) · Noch nicht geprüft: K1, K4–K6

**Kerngedanken:**
- Jeder Aufruf hat sein eigenes Exemplar des Parameters und wartet, bis der innere Aufruf zurückkehrt. Auch der Aufruf, der nur noch den Basisfall trifft, belegt einen Rahmen und zählt mit.
- Fehlt die Abbruchbedingung, erscheint eine Ausgabe, die nach dem Selbstaufruf steht, gar nicht, weil kein Aufruf je zurückkehrt.
- Wer beim Umschreiben in eine Schleife die Zwischenergebnisse sofort ausgibt, baut die Fassung mit der Ausgabe vor dem Selbstaufruf nach. Die Ziffern stehen dann verkehrt herum.

**Typische Missverständnisse:**
- Viele denken, Rekursion gebe immer rückwärts aus; richtig ist: Rückwärts läuft nur, was nach dem Selbstaufruf steht.
- Viele denken, eine Rekursion ohne Abbruch sei eine Endlosschleife; richtig ist: Der Aufrufstapel läuft voll und das Programm bricht mit einem Stapelüberlauf ab.
- Viele denken, alles, was sich wiederholt, sei ein Fall für Rekursion; richtig ist: Es braucht dazu kleiner werdende Daten und einen einfachsten Fall, sonst reicht eine Schleife.

**Fachwörter:**
- Rekursion: Funktion ruft sich selbst auf
- Abbruchbedingung (Basisfall): Fall ohne weiteren Selbstaufruf
- Rekursionsschritt: Selbstaufruf mit kleinerem Wert
- Aufrufstapel: Speicher für alle laufenden Aufrufe
- Stapelüberlauf (Stack Overflow): Aufrufstapel voll, Programm bricht ab
- iterativ: mit Schleife statt Selbstaufruf
- div / mod: ganzzahlige Division / Rest der Division

**So fragt die IHK:**
- Das Thema kam einmal als ganze Aufgabe mit 25 Punkten vor. Vorgegeben war ein rekursiver Algorithmus zur Umrechnung dezimal → binär.
- Zuerst waren ein Schreibtischtest und die Korrektur des Algorithmus verlangt, zusammen 11 Punkte. Der Fehler steckte in der Reihenfolge der Ausgabe (K4). Der Schreibtischtest selbst wird in einem anderen Stichpunkt geübt.
- Dann kam „beschreiben“ je eines Vor- und Nachteils der rekursiven gegenüber einer iterativen Lösung, 4 Punkte, mit vorgedruckten Zeilen „Vorteil:“ und „Nachteil:“. Der Lösungshinweis nennt „einfacher/eleganter zu schreiben“ und „mehr Speicher zur Laufzeit“; korrekte Alternativen zählen.
- Zuletzt war ein iterativer Algorithmus für dieselbe Umrechnung zu „erstellen“, 10 Punkte. Vorgegeben war eine Listenklasse mit ungewohnten Methodennamen und der Angabe, welches Ende Position 0 ist.
- Gezählt wird beim Erstellen nach Bestandteilen: Liste anlegen, Schleife mit richtiger Bedingung, Rest berechnen und speichern, Zahl ganzzahlig halbieren, Ausgabe in umgekehrter Reihenfolge mit den vorgegebenen Methoden.
- Der Lösungshinweis der IHK ist bei den Grenzen der Ausgabeschleife selbst nicht ganz stimmig. Es zählt die Logik (höchste Stelle zuerst, kein Zugriff außerhalb der Liste), nicht eine bestimmte Schleifenschreibweise.
- Eine rekursive Funktion selbst schreiben (K6) und die Eignung prüfen (K5) wurden bisher nicht verlangt. Zu erwarten wäre ein kurzes „erstellen“ oder „begründen“.

**Fallen:**
- Rekursion nur mit „die Funktion ruft sich selbst auf“ erklären, ohne Abbruchbedingung und kleineres Teilproblem.
- Bei der Eignung nur „ja“ oder „nein“ schreiben, ohne konkret zu benennen, was das kleinere Problem und was der einfachste Fall ist.
- Beim Schreiben den Selbstaufruf als eigene Zeile hinsetzen und seinen Rückgabewert nicht verwenden; dann liefert die Funktion nur das Teilergebnis des äußersten Aufrufs (bei `dual` nur die letzte Ziffer).
- Beim Schreiben das eigene Teilergebnis vor den Rückgabewert des Selbstaufrufs setzen; dann steht das Ergebnis verkehrt herum.
- Den Abbruchfall so wählen, dass die einfachsten Eingaben (bei `dual` 0 und 1) ein falsches Ergebnis liefern; die Funktion immer mit diesen Werten prüfen.
- Bei Vor- und Nachteil nur Stichwörter wie „eleganter“ oder „Speicher“ nennen; ohne Begründung gibt es nur die halben Punkte.
- Beim Umschreiben die Ausgabeschleife bei der Anzahl der Elemente beginnen statt bei Anzahl − 1; das ist ein Zugriff hinter das Listenende.
