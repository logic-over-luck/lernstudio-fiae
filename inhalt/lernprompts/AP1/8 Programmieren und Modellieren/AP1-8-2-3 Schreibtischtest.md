Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Code lesen, schreiben und prüfen › Schreibtischtest

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt. Fehlende Nummern (etwa K4) sind Absicht.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet, und für alles, was eine Erklärung im Stoff nur nebenbei erwähnt.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen. Die Begründungen nimmst du aus dem Stoff und der Lehrnotiz; ergänzt du eine eigene, kennzeichne sie mit „Hintergrund, nicht aus dem Stoff: …“. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, reicht die Erklärung aus dem Stoff. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber nur mit dem, was du mir vorher erklärt hast. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Sag bei jeder Aufgabe, wie viele Punkte sie hat (ein Punkt je verlangtem Teil). Bewerte nur, was verlangt war, mit „x von y Punkten“ und dem, was fehlte: ✅ nur bei voller Punktzahl, ⚠️ bei Teilpunkten, ❌ bei null. Stimmt der Inhalt und fehlt nur das Fachwort, gibt es den Punkt: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Zeichnungen mache ich auf Papier und lade ein Foto hoch.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im IHK-Stil (Kundensituation, Teilaufgaben mit Punkten, zusammen etwa 10–12, eine nach der anderen). Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

Antworte auf Deutsch.

## Stoff: Schreibtischtest

Ziel: Einen gegebenen Code von Hand mit Eingabewerten durchgehen, das Ergebnis ermitteln und begründen – auch wenn er in C-ähnlicher Syntax, in Python oder in englischem Pseudocode geschrieben ist.

Das muss ich können:

### K1 – Schreibtischtest mit Variablentabelle (Stufe 3 Anwenden)
Du kannst einen Schreibtischtest durchführen: den Code Zeile für Zeile mit gegebenen Werten abarbeiten und die Werte der Variablen in einer Tabelle mitführen.

Erklärung:
- Lege eine **Tabelle** an: eine Spalte je Variable, bei Bedarf auch für Bedingung und Ausgabe.
- Trage die **Startwerte** in die erste Zeile ein.
- Geh den Code **Zeile für Zeile** durch und trage **jede Änderung** in eine neue Zeile ein.
- Prüfe Bedingungen immer mit den **aktuellen** Werten.
Beispiel:
`summe = 0`
`Für i von 1 bis 4`
`    Wenn i % 2 == 0 dann summe = summe + i`
`Ende Für`
Tabelle: i=1 → summe 0; i=2 → summe 2; i=3 → summe 2; i=4 → summe 6. Ergebnis: **6**.

### K2 – Begründung des Ergebnisses über den Durchlauf (Stufe 4 Beurteilen)
Du kannst das Ergebnis eines Schreibtischtests mit dem Durchlauf der Schleifen und Verzweigungen begründen.

Erklärung:
Beschreibe, **wie** das Ergebnis zustande kommt:
- Wie oft läuft die Schleife?
- In welchen Durchläufen wird welcher Zweig genommen?
- Wann und warum endet sie?
Im Beispiel: „Die Schleife läuft viermal. Nur bei i = 2 und i = 4 ist die Bedingung erfüllt, also wird 2 + 4 = 6 addiert.“
Achtung: Ein `return` beendet die Funktion **sofort**, auch mitten in einer Schleife.

### K3 – Prozentwerte und ganzzahlige Division (Stufe 3 Anwenden)
Du kannst die Rechnungen im Code berechnen, auch Prozentwerte und die Division ganzer Zahlen ohne Rest.

Erklärung:
- **Ganzzahldivision:** Bei ganzen Zahlen fällt der Rest weg. `7 / 2` ergibt bei `int` **3** (in Python `7 // 2` = 3, `7 / 2` = 3.5).
- **Modulo:** `7 % 2` = 1 – der Rest.
- **Prozent:** +20 % → × 1,2; −20 % → × 0,8; 20 % davon → × 0,2.
- **Punkt vor Strich**, Klammern zuerst.

### K4 – Durchlaufener Zweig bei verschachtelten Verzweigungen (Stufe 3 Anwenden)
Du kannst bei verschachtelten Verzweigungen den Zweig bestimmen, der durchlaufen wird.

Erklärung:
Prüfe **von außen nach innen**: Nur wenn die äußere Bedingung zutrifft, schaust du dir die innere an.
Bei `Wenn … Sonst wenn … Sonst` gilt der **erste** zutreffende Zweig – die weiteren werden übersprungen.
Beispiel mit alter = 20 und mitglied = falsch:
`Wenn alter >= 18 dann`
`    Wenn mitglied dann preis = 8 Sonst preis = 12`
`Sonst preis = 5`
→ äußere Bedingung wahr, innere falsch → **preis = 12**.

### K6 – Rückgabewert bei zweidimensionalem Array (Stufe 3 Anwenden)
Du kannst den Rückgabewert einer Funktion mit verschachtelten Schleifen über ein zweidimensionales Array ermitteln.

Erklärung:
Ein zweidimensionales Array ist eine Tabelle mit Zeilen und Spalten.
- Die **äußere Schleife** geht über die Zeilen (i), die **innere** über die Spalten (j).
- Ein Element ist `m[i][j]`.
- Für **jede Kombination** von i und j die Bedingung prüfen.
- Die Zeilen können verschieden lang sein; die innere Schleife läuft dann nur bis zur Länge der jeweiligen Zeile.
Beispiel: `m = [[1, 2], [3, 4]]`, addiert werden nur Elemente mit i = j (Diagonale):
- i=0, j=0 → 1 ✓; i=0, j=1 → 2 ✗; i=1, j=0 → 3 ✗; i=1, j=1 → 4 ✓
- Rückgabewert: 1 + 4 = **5**

### K7 – Code in C-ähnlicher Syntax lesen (Stufe 3 Anwenden)
Du kannst einen Schreibtischtest mit Code in C-ähnlicher Syntax (C#, Java, C) durchführen: Typangaben wie int, bool und int[] lesen, Blöcke in geschweiften Klammern zuordnen, die Zählschleife „for (int i = 0; i < a.Length; i++)“ mit Startwert, Bedingung und Schritt nachvollziehen und beachten, dass die Division zweier int-Werte eine Ganzzahl ergibt, weil der Rest wegfällt.

Erklärung:
In der Prüfung steht Code oft in **C-ähnlicher Syntax** (C#, Java, C). Worauf du achtest:
- **Typangaben** vor dem Namen: `int` Ganzzahl, `double` Kommazahl, `bool` wahr/falsch, `int[]` Array von Ganzzahlen.
- **Blöcke** stehen in `{ }`. Ohne Klammern gehört zu `if` oder `for` nur **die eine** folgende Anweisung.
- **Zählschleife** `for (int i = 0; i < a.Length; i++)`: Start 0, wiederholen solange i < Länge, nach jedem Durchlauf `i++`. Der Index läuft also von 0 bis Länge − 1.
- **Operatoren:** `=` Zuweisung, `==` Vergleich, `!=` ungleich, `&&` UND, `||` ODER, `!` NICHT.
- **Ganzzahldivision:** Sind beide Werte `int`, fällt der Rest weg: `19 / 20` ist **0**, `42 / 20` ist **2**. Erst mit einer Kommazahl (`42.0 / 20`) entstehen Nachkommastellen. Den Rest liefert `%`.

### K8 – Python-Code im Schreibtischtest (Stufe 3 Anwenden)
Du kannst einen Schreibtischtest mit Python-Code durchführen: eine Funktion nach def mit ihren Parametern lesen, Blöcke an der Einrückung erkennen, die Schleifen „for x in liste“ und „for i in range(n)“ (0 bis n − 1) nachvollziehen, die Rückgabe mehrerer Werte nach return als Tupel verstehen und die Operatoren / (immer mit Nachkommastellen), // (ganzzahlig) und % unterscheiden.

Erklärung:
**Python** liest sich fast wie Pseudocode:
- `def name(parameter):` beginnt eine Funktion. **Blöcke** erkennst du nur an der **Einrückung**, es gibt kein `{ }` und kein ENDE.
- `for x in liste:` – x nimmt nacheinander jedes Element an. `for i in range(n):` zählt von **0 bis n − 1**, `range(1, 4)` liefert 1, 2, 3.
- `return a, b` gibt mehrere Werte zusammen als **Tupel** `(a, b)` zurück.
- **Division:** `/` liefert immer eine Kommazahl (`7 / 2` = 3.5), `//` ganzzahlig (`7 // 2` = 3), `%` den Rest (`7 % 2` = 1).
- `True`/`False`, `and`/`or`/`not` sind die Wahrheitswerte und logischen Operatoren.

### K9 – Englischer Pseudocode im Schreibtischtest (Stufe 3 Anwenden)
Du kannst einen Schreibtischtest mit englischem Pseudocode durchführen: Schlüsselwörter wie FUNCTION, IF … THEN … ELSE … END IF, WHILE, FOR EACH … IN …, RETURN und PRINT den bekannten Kontrollstrukturen zuordnen und den Ablauf mit den Werten der Variablen nachvollziehen.

Erklärung:
**Englischer Pseudocode** nutzt dieselben Kontrollstrukturen wie der deutsche, nur mit anderen Wörtern:
- `FUNCTION … END FUNCTION` – Funktion
- `IF … THEN … ELSE … END IF` – Wenn … dann … sonst
- `WHILE … END WHILE` – kopfgesteuerte Schleife; `REPEAT … UNTIL` – fußgesteuert, läuft, **bis** die Bedingung hinter `UNTIL` wahr wird (umgekehrt zu `WHILE`)
- `FOR EACH x IN liste … END FOR` – x nimmt nacheinander jedes Element an
- `RETURN` – Rückgabe, beendet die Funktion; `PRINT` – nur Ausgabe auf dem Bildschirm
Geh den Code wie jeden Schreibtischtest durch: Variablentabelle anlegen, Durchlauf für Durchlauf eintragen.

### K10 – Datensätze mit Schlüsselzugriff und FOR EACH (Stufe 3 Anwenden)
Du kannst in einem Schreibtischtest Werte eines Datensatzes über den Schlüssel oder den Attributnamen lesen (p["gewicht"] bzw. p.gewicht) und eine FOR-EACH-Schleife über eine Liste von Datensätzen Durchlauf für Durchlauf nachvollziehen.

Erklärung:
Oft verarbeitet ein Programm eine **Liste von Datensätzen**, z. B. Pakete, Artikel oder Kunden. Einen Wert im Datensatz liest du über seinen **Namen**:
- `p["gewicht"]` – Zugriff über den **Schlüssel** (wie bei einem Python-Dictionary oder JSON-artigen Daten)
- `p.gewicht` – Zugriff über den **Attributnamen** (wie bei einem Objekt)
In einer Schleife `FOR EACH p IN pakete` ist `p` in jedem Durchlauf **ein** Datensatz. Lege in der Tabelle je Durchlauf eine Zeile an und trage die gelesenen Werte und die Zwischenergebnisse ein.

## Lehrnotiz: Schreibtischtest

**Hinweis aus dem Lernplan:** Drei der vier Code-Aufgaben nach aktuellem Katalog sind nicht in deutschem Pseudocode geschrieben – 2025F-A3-d in Python, 2026F-A4-bb in englischem Pseudocode mit FOR EACH und Schlüsselzugriff auf Datensätze, 2026H-A3-ba in C#-ähnlicher Syntax mit Ganzzahldivision. K7–K10 machen das Lesen dieser Schreibweisen zur Pflicht. Der Code-Trainer übt bisher nur deutschen Pseudocode; sein Spickzettel („/ teilt mit Nachkommastellen“) gilt nicht für int / int in C#, Java und C (dafür K7).

**Aufteilung:**
- Teil A – die Methode: Variablentabelle K1; Ergebnis begründen K2; verschachtelte Verzweigungen K4; zweidimensionales Array K6
- Pause möglich nach Teil A.
- Teil B – dieselbe Methode in anderen Schreibweisen: Rechnen im Code K3 zusammen mit Python K8; C-ähnliche Syntax K7; englischer Pseudocode K9 mit Datensätzen K10

**Schon geprüft:** In Prüfungen: K1 (2026H), K2 (2024H), K3 (2025F, 2026F), K4 (2025F), K6 (2024H), K7 (2026H), K8 (2025F), K9 (2026F), K10 (2026F)

**Kerngedanken:**
- Im Schreibtischtest wird ausgeführt, was dasteht, nicht was der Code vermutlich soll.
- Rückgabe und Ausgabe sind zwei Dinge: Der Wert einer Funktion ist nur, was hinter der Rückgabe steht. `Ausgabe`, `PRINT`, `print` und `Console.WriteLine` zeigen nur etwas an.
- In einem zweidimensionalen Array dürfen die Zeilen verschieden lang sein. Die innere Schleife läuft dann bis zur Länge der jeweiligen Zeile.
- Bei zwei `int`-Werten entscheidet die Reihenfolge: Wer erst teilt und dann multipliziert, verliert den Rest schon vor dem Multiplizieren. Bei „Anteil in Prozent“ kann so 0 herauskommen.

**Typische Missverständnisse:**
- Viele denken, jeder übergebene Wert müsse im Ergebnis eine Rolle spielen; richtig ist: Liegt eine Bedingung in einem Zweig, der nicht läuft, wird sie gar nicht geprüft.
- Viele denken, die Rückgabe hinter der Schleife komme immer zum Schluss dran; richtig ist: Sie gilt nur, wenn die Schleife ohne vorherige Rückgabe zu Ende läuft.

**Fachwörter:**
- Schreibtischtest: Code von Hand mit Werten durchgehen
- Rückgabewert: Wert, den die Funktion liefert
- Ganzzahldivision: Teilen ohne Rest, Ergebnis ganze Zahl
- Schlüssel: Name eines Werts im Datensatz

**So fragt die IHK:**
- Operatoren: ermitteln, berechnen, angeben, teils begründen.
- Rückgabewert über ein zweidimensionales Array ermitteln und begründen (6 Punkte): Zeilen unterschiedlich weit belegt, Index ab 0; verschachtelte Schleifen, Bedingung aus zwei UND-verknüpften Vergleichen, Rückgabe `True` mitten in der Schleife, sonst `False`. Es zählt das Ergebnis mit kurzer Begründung.
- Python-Funktion berechnen (6 Punkte, je Wert 2): drei Rückgabewerte aus Divisionen und Prozentrechnungen, auf zwei Nachkommastellen.
- Verschachtelte Verzweigungen (8 Punkte, je Aufruf 4): vier Ebenen Wenn, Sonst, Sonst wenn; zwei Aufrufe mit Wahrheitswerten und Zahlen. Verlangt ist nur das Ergebnis, nicht der Weg.
- 2026F (K3, K9, K10), 10 Punkte, „berechnen“: englischer Pseudocode einer Funktion, die mit FOR EACH über eine Liste von Datensätzen läuft (Zugriff über Schlüssel wie `package["weight"]`), verschachtelte IF mit Fehlerzweig, ein Zuschlag nach einem Wahrheitswert und am Ende ein Rabatt ab einer Summe. Gegeben sind Startwerte und drei Datensätze; einzutragen sind drei Einzelpreise und der Gesamtpreis. Lösungshinweise liegen nicht vor.
- 2026H (K1, K7), 6 Punkte, „berechnen“: Code in C-ähnlicher Syntax mit zwei gleich langen Arrays (Zahlen und Wahrheitswerte), for-Schleife und Ganzzahldivision; verlangt ist nur der ausgegebene Wert. Die nicht amtliche Lösung führt eine Zeile je Durchlauf. Falle: 19 / 20 ist bei int 0.

**Fallen:**
- Teil A: Nach der letzten Änderung noch einen Durchlauf rechnen, obwohl die Bedingung mit dem neuen Wert schon falsch ist.
- Teil A: Bei Gleichheit sind `>` und `<` falsch; nur `>=` und `<=` schließen den Grenzwert ein.
- Teil A: Gibt die Funktion beim ersten Treffer zurück, den letzten nennen oder danach weiterrechnen; überschreibt sie bei jedem Treffer eine Variable, zählt der letzte.
- Teil A: Einen anderen Wert nennen als den zurückgegebenen, etwa die Summe statt des Index.
- Teil A: Als Begründung nur das Ergebnis nennen.
- Teil A: Zeile und Spalte vertauschen: Bei `m[1][0]` steht die Zeile vorn.
- Teil A: Übersehen, dass ein Startwert in der äußeren Schleife steht und je Zeile neu gesetzt wird.
- Teil B: „20 % mehr“ als × 0,2 rechnen oder 0,2 addieren.
- Teil B: Bei `int / int` runden statt abschneiden.
- Teil B: Durch die Zahl der Treffer teilen, wenn im Code die Länge des Arrays steht.
- Teil B: Bei Datensätzen den gelesenen Wert weiterverarbeiten, obwohl der Code damit erst rechnet, etwa eine Differenz bildet (Grenze minus Wert).
- Teil B: `REPEAT … UNTIL` wie `WHILE` lesen: Hinter `UNTIL` steht, wann Schluss ist; die Schleife läuft, solange die Bedingung falsch ist.
