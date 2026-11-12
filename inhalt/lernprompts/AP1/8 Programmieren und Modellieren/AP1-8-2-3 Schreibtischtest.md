Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Code lesen, schreiben und prüfen › Schreibtischtest

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
