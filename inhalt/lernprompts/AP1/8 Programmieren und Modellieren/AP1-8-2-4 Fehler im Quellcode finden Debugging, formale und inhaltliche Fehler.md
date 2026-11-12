Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Code lesen, schreiben und prüfen › Fehler im Quellcode finden: Debugging, formale und inhaltliche Fehler

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

## Stoff: Fehler im Quellcode finden: Debugging, formale und inhaltliche Fehler

Ziel: Fehler in einem gegebenen Code oder Skript finden, ihre Art benennen, die Folge erläutern und die Zeile berichtigen.

Das muss ich können:

### K1 – Formale, Laufzeit- und inhaltliche Fehler (Stufe 2 Verstehen)
Du kannst formale Fehler (Verstoß gegen die Regeln der Sprache, das Programm startet nicht), Laufzeitfehler (das Programm bricht bei bestimmten Daten ab, zum Beispiel Division durch null oder Zugriff über das Array-Ende) und inhaltliche Fehler (das Programm läuft, liefert aber ein falsches Ergebnis) unterscheiden.

Erklärung:
- **Formaler Fehler** (Syntaxfehler): Verstoß gegen die Regeln der Sprache – z. B. fehlendes Semikolon, fehlende Klammer. Das Programm lässt sich nicht übersetzen bzw. **startet nicht**.
- **Laufzeitfehler:** Das Programm startet, **bricht aber bei bestimmten Daten ab** – z. B. Division durch null, Zugriff über das Array-Ende.
- **Inhaltlicher (logischer) Fehler:** Das Programm **läuft**, liefert aber ein **falsches Ergebnis** – z. B. falsche Formel oder eine Schleifengrenze, durch die ein Element fehlt.
Die Art richtet sich nach der Wirkung: Greift eine falsche Schleifengrenze über das Array-Ende hinaus, bricht das Programm ab – dann ist es ein Laufzeitfehler.

### K2 – Fehlerhafte Zeilen in kurzem Skript (Stufe 3 Anwenden · in der Prüfung vorgegeben: englische Anleitung zu den Vergleichsoperatoren)
Du kannst fehlerhafte Zeilen in einem kurzen Skript korrigieren, zum Beispiel einen vertauschten Vergleichsoperator oder einen falschen Faktor in einer Prozentrechnung.

Erklärung:
Lies die Aufgabe genau und vergleiche mit dem Code:
- **Vertauschter Vergleichsoperator:** Es soll gewarnt werden, wenn der Speicher **unter** 10 % liegt → `-lt 10` (less than) statt `-gt 10`.
- **Falscher Faktor bei Prozent:** 19 % aufschlagen → `* 1.19`, nicht `* 0.19` (das wäre nur die Steuer).
Die Bedeutung der Operatoren steht oft in einer englischen Anleitung: less than = kleiner, greater than = größer, equal = gleich.

### K3 – Eingabedaten, die Fehler auslösen (Stufe 2 Verstehen)
Du kannst erläutern, welches Problem bestimmte Eingabedaten auslösen, zum Beispiel ein Zugriff über das Ende eines Arrays hinaus.

Erklärung:
Frag: Bei welchen Daten geht der Code schief?
Beispiel: Zwei Arrays werden mit einem gemeinsamen Index durchlaufen, die Schleife geht bis zur Länge des **ersten** Arrays.
- Ist das zweite Array **kürzer** → Zugriff über sein Ende hinaus → **Laufzeitfehler**, das Programm bricht ab.
- Ist es **länger** → seine letzten Elemente werden nicht berücksichtigt → **falsches Ergebnis**.
Vorbeugen: Längen vorher prüfen.

### K5 – Fehlerquellen wie Schleifengrenze und Division durch null (Stufe 1 Wiedergeben)
Du kannst typische Fehlerquellen nennen: falsche Schleifengrenze, vertauschter Vergleichsoperator, nicht initialisierte Variable, Division durch null.

Erklärung:
- **Falsche Schleifengrenze:** eine Runde zu viel oder zu wenig (`<=` statt `<`).
- **Vertauschter Vergleichsoperator:** `>` statt `<`.
- **Nicht initialisierte Variable:** `summe` hat keinen Startwert → vorher `summe = 0`.
- **Division durch null:** vorher prüfen, ob der Teiler ungleich 0 ist.
**Debugging** heißt, solche Fehler systematisch zu suchen und zu beheben.

### K6 – Typische formale Fehler wie fehlendes Semikolon (Stufe 3 Anwenden)
Du kannst typische formale Fehler in gegebenem Code korrigieren: falsche Groß- und Kleinschreibung eines Namens in einer Sprache, die sie unterscheidet, ein fehlendes Anweisungsende wie das Semikolon, eine nicht geschlossene Blockklammer oder ein Schlüsselwort bzw. unzulässiges Zeichen in einem Variablennamen.

Erklärung:
Formale Fehler verstoßen gegen die Regeln der Sprache; der Übersetzer meldet sie, das Programm startet nicht. Typische Fälle:
- **Groß-/Kleinschreibung:** In vielen Sprachen sind `summe` und `Summe` zwei verschiedene Namen; `Print` statt `print` ist unbekannt.
- **Anweisungsende:** In Sprachen wie Java oder C# endet jede Anweisung mit `;`; in Python endet sie mit der Zeile.
- **Klammern:** Jede geöffnete Block- oder Ausdrucksklammer braucht ihr Gegenstück.
- **Ungültige Namen:** Ein Schlüsselwort (`while`, `if`) oder ein Leer- bzw. Sonderzeichen (`netto preis`, `preis-neu`) als Variablenname ist nicht erlaubt; ein Name beginnt nicht mit einer Ziffer.
Beispiel: `int 2anzahl = 5` → Name darf nicht mit einer Ziffer beginnen, z. B. `anzahl2`.

### K7 – PowerShell- und Bash-Skripte lesen (Stufe 3 Anwenden)
Du kannst Zeilen eines kurzen PowerShell- oder Bash-Skripts korrigieren und dazu seine Schreibweise lesen: Variablen werden mit $ gelesen (in der Bash ohne $ zugewiesen), Vergleiche schreibt man mit -eq, -ne, -gt, -ge, -lt und -le statt mit = oder <, und Verzweigungen stehen in der PowerShell als if (…) { … } else { … }, in der Bash als if [ … ]; then … else … fi.

Erklärung:
Skripte für **PowerShell** (Windows) und **Bash** (Linux) sehen anders aus als Pseudocode:
- **Variablen** beginnen beim Lesen mit `$` (`$prozent`). In der Bash wird ohne `$` zugewiesen (`anzahl=10`), in der PowerShell mit (`$anzahl = 10`).
- **Vergleiche** schreibt man mit Buchstaben: `-eq` gleich, `-ne` ungleich, `-gt` größer, `-ge` größer oder gleich, `-lt` kleiner, `-le` kleiner oder gleich. `>` ist in der PowerShell eine Umleitung in eine Datei, kein Vergleich.
- **Verzweigung:** PowerShell `if ($x -lt 15) { … } else { … }`, Bash `if [ $x -lt 15 ]; then … else … fi`.
- **Ausgabe:** `Write-Host` (PowerShell), `echo` (Bash).
Typische Fehler beim Korrigieren: vertauschter Vergleich (`-gt` statt `-lt`) oder falscher Faktor (`* 1000` statt `* 100`).

## Lehrnotiz: Fehler im Quellcode finden: Debugging, formale und inhaltliche Fehler

**Aufteilung:**
- Drei Fehlerarten: K1
- Formale Fehler korrigieren: K6
- Typische Fehlerquellen und fehlerhafte Zeilen: K5, K2
- Eingabedaten, die Fehler auslösen: K3
- PowerShell- und Bash-Skripte: K7

**Schon geprüft:** In Prüfungen: K2 (2021H), K3 (neuere Prüfung), K7 (2021H) · Noch nicht geprüft: K1, K5, K6

**Kerngedanken:**
- Die Fehlerart richtet sich nach der Wirkung, nicht nach der Ursache: Eine falsche Schleifengrenze mit einer Runde zu wenig ist ein inhaltlicher Fehler, eine Runde über das Array-Ende hinaus ein Laufzeitfehler.
- Nur formale Fehler meldet der Übersetzer. Ein Laufzeitfehler zeigt sich erst beim Ausführen mit bestimmten Daten, ein inhaltlicher Fehler meldet sich nie; beide findet man nur durch Testen.
- Eine fehlerhafte Zeile findet man über Soll und Ist: aus dem Auftrag mit einem Testwert ausrechnen, was herauskommen soll, dann im Schreibtischtest, was der Code liefert. Wo beide auseinanderlaufen, steckt der Fehler.
- Formale Regeln gelten je Sprache; zuerst klären, welche Sprache vorliegt.

**Typische Missverständnisse:**
- Viele denken, jeder Abbruch sei ein formaler Fehler; richtig ist: Ein formaler Fehler verhindert schon den Start.
- Viele denken, ein Fehler ohne Meldung sei harmlos; richtig ist: Der inhaltliche Fehler ist der gefährlichste, weil er nur beim Nachrechnen auffällt.
- Viele denken, `* 0.1` ziehe 10 % ab; richtig ist: Das ergibt nur den Rabattbetrag, 10 % weniger heißt `* 0.9`.

**Fachwörter:**
- formaler Fehler: Verstoß gegen Sprachregeln, Programm startet nicht
- Laufzeitfehler: Abbruch bei bestimmten Daten
- inhaltlicher Fehler: läuft, aber Ergebnis falsch
- Vergleichsoperator: vergleicht zwei Werte, etwa `-lt`

**So fragt die IHK:**
- Eine echte Aufgabe (8 Punkte, Operator „korrigieren“): ein kurzes PowerShell-Skript, das warnen soll, wenn der freie Platz eines Laufwerks unter einen Prozentwert fällt. Es steht zeilenweise in einer Tabelle mit der leeren Spalte „Falsche Zeilen korrigieren“; das Symptom ist genannt. Als Material liegt eine englische Anleitung mit den Vergleichsoperatoren und den benutzten Befehlen bei.
- Gesucht waren genau zwei Fehler: ein falscher Faktor in der Prozentrechnung und ein vertauschter Vergleich. Nur diese Zeilen werden berichtigt, die übrigen bleiben leer.
- Aus dem Katalog ableitbar, ohne echte Vorlage: Fehlerart benennen, Fehlerquellen nennen, problematische Eingabedaten erläutern; üblich sind 2–4 Punkte, je Element einer.
- In selbst geschriebenem Pseudocode toleriert die IHK Syntaxfehler; in gegebenem Code zählen die Regeln der Sprache.

**Fallen:**
- Nach dem ersten gefundenen Fehler aufhören, statt nach jeder Korrektur erneut mit dem Testwert zu prüfen.
- Den Grenzwert falsch einschließen: „ab“ schließt ihn ein (`>=`, `-ge`), „weniger als“ und „mehr als“ nicht (`-lt`, `-gt`).
- Eine fehlende schließende Klammer übersehen: geöffnete und geschlossene zählen.
- Einen unzulässigen Namen nur an einer Stelle ändern statt überall, wo er benutzt wird.
- Die Fehlerart ohne ihr Merkmal begründen.
- Nur mit passenden Daten prüfen: Ungleich lange Arrays, leere Listen und ein Teiler 0 decken Fehler auf.
- Bei zwei Arrays annehmen, das erste bestimme die Grenze: Es zählt, welche Länge im Schleifenkopf steht.
- In der Bash das abschließende `fi` vergessen.
- `>` in einer PowerShell-Bedingung gibt keine Fehlermeldung: Es entsteht eine Datei, und der else-Zweig läuft.
- Bei der Ausgabe den Variablennamen stehen lassen: In doppelten Anführungszeichen wird `$name` durch den Wert ersetzt.
