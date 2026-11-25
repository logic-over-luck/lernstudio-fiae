Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Code lesen, schreiben und prüfen › Fehler im Quellcode finden: Debugging, formale und inhaltliche Fehler

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

**Schon geprüft:** In Prüfungen: K2 (2021H), K3 (2026H), K7 (2021H) · Noch nicht geprüft: K1, K5, K6

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
- Aus dem Katalog ableitbar, ohne echte Vorlage: Fehlerart benennen, Fehlerquellen nennen; üblich sind 2–4 Punkte, je Element einer.
- In selbst geschriebenem Pseudocode toleriert die IHK Syntaxfehler; in gegebenem Code zählen die Regeln der Sprache.
- 2026H (K3), 3 Punkte, „erläutern“: Dem Code aus dem Schreibtischtest werden zwei Arrays mit ungleicher Länge übergeben; verlangt ist das Problem, das dabei entsteht. Nicht amtliche Lösung: Im letzten Durchlauf greift der Code auf einen Index zu, den das kürzere Array nicht hat – das Programm bricht zur Laufzeit ab.

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
