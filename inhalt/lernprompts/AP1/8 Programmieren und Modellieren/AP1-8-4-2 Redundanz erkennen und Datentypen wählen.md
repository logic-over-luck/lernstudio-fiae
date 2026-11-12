Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Daten, Masken und Abläufe modellieren › Redundanz erkennen und Datentypen wählen

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

## Stoff: Redundanz erkennen und Datentypen wählen

Ziel: Redundanz und ihre Folgen erklären und für Attribute passende Datentypen begründen.

Das muss ich können:

### K2 – Redundanz und ihre Folgen (Stufe 2 Verstehen)
Du kannst erklären, was Redundanz ist, und ein Problem beschreiben, das dadurch entsteht: Dieselbe Information ist mehrfach gespeichert; wird beim Ändern eine Stelle vergessen, widersprechen sich die Daten.

Erklärung:
**Redundanz** heißt: **Dieselbe Information ist mehrfach gespeichert.**
Problem: Wird beim Ändern **eine Stelle vergessen**, widersprechen sich die Daten (Inkonsistenz). Dazu wird unnötig Speicher belegt.
Beispiel: Die Kundenadresse steht bei jeder Bestellung. Nach einem Umzug wird sie nur in der neuesten Bestellung geändert – jetzt hat der Kunde in der Datenbank zwei Adressen, und niemand weiß, welche stimmt.

### K3 – Datentyp für ein Attribut, etwa Postleitzahl (Stufe 4 Beurteilen)
Du kannst für ein Attribut einen passenden Datentyp begründen, zum Beispiel Datum, Ganzzahl oder Text, auch mit den üblichen Typnamen in Datenbanken (INTEGER, DECIMAL, VARCHAR, CHAR, DATE, BOOLEAN) und warum eine Postleitzahl als Text gespeichert wird: Führende Nullen bleiben erhalten, und gerechnet wird damit nicht.

Erklärung:
Wähle den Datentyp nach dem, was mit dem Wert passieren soll:
- **Datum** (DATE) für ein Geburtsdatum: nur gültige Werte möglich, man kann damit rechnen (Alter) und richtig sortieren.
- **Ganzzahl** (INTEGER) für die Anzahl Kinder oder Minuten: es wird gezählt und gerechnet.
- **Text** (VARCHAR(n)) für einen Nachnamen; **CHAR(n)** für Text fester Länge.
- **Text für die Postleitzahl:** Führende Nullen bleiben erhalten (01067 Dresden – als Zahl würde daraus 1067), und gerechnet wird damit nie; üblich ist CHAR(5).
- **Geldbeträge** als **DECIMAL(p,s)**, z. B. DECIMAL(8,2): Festkomma, keine Rundungsfehler wie bei den Gleitkommatypen FLOAT und DOUBLE.
- **BOOLEAN** für Ja/Nein-Werte.
- **Text** auch für Telefonnummern: führende 0, Zeichen wie + und Leerzeichen.
In der SQL-Übersicht der Prüfung stehen CHARACTER, CHAR(n) und VARCHAR(n) für Text, dazu DECIMAL, DOUBLE (Gleitkommazahl), INTEGER und DATE – nimm die Namen von dort.

### K5 – Einfüge-, Änderungs- und Löschanomalie (Stufe 2 Verstehen)
Du kannst Einfüge-, Änderungs- und Löschanomalie unterscheiden.

Erklärung:
Alle drei entstehen durch Redundanz:
- **Einfügeanomalie:** Ein Datensatz lässt sich nicht anlegen, weil andere Angaben fehlen. Beispiel: Ein neuer Kunde kann nicht gespeichert werden, solange er nichts bestellt hat.
- **Änderungsanomalie:** Eine mehrfach gespeicherte Angabe wird **nicht überall** geändert – die Daten widersprechen sich.
- **Löschanomalie:** Beim Löschen gehen **ungewollt andere Informationen** verloren. Beispiel: Die einzige Bestellung eines Kunden wird gelöscht – damit ist auch seine Adresse weg.

### K6 – Errechenbare Werte nicht speichern (Stufe 2 Verstehen)
Du kannst erklären, warum ein Wert, der sich aus anderen Spalten errechnen lässt, etwa der Gesamtpreis aus Einzelpreis und Menge, nicht zusätzlich gespeichert wird: Er ist versteckte Redundanz, und nach einer Änderung von Preis oder Menge kann er den übrigen Daten widersprechen; der Speicherplatz ist dabei das kleinere Problem.

Erklärung:
Redundanz heißt nicht nur, dass ein Wert zweimal dasteht. **Versteckt** ist sie, wenn ein Wert **aus anderen Werten folgt**.
- Beispiel: Spalten Einzelpreis 20 €, Menge 3, Gesamtpreis 60 €. Der Gesamtpreis steckt schon in den beiden anderen Spalten.
- Wird die Menge auf 4 geändert und der Gesamtpreis vergessen, stehen 60 € neben 4 × 20 € – die Daten **widersprechen sich** (Inkonsistenz).
- Das ist das Hauptproblem; die paar Bytes Speicher fallen kaum ins Gewicht.
Lösung: Rechenwerte nicht speichern, sondern bei Bedarf berechnen (z. B. in der Abfrage oder im Programm).

### K7 – Stammdaten, Bewegungsdaten und Rechendaten (Stufe 2 Verstehen)
Du kannst die Datenarten einer Auftragsbearbeitung unterscheiden: Stammdaten ändern sich selten (Kundenname, Artikelbezeichnung), Bewegungsdaten entstehen mit jedem Vorgang (Bestellmenge), Rechendaten berechnet das Programm (Gesamtpreis) und speichert sie deshalb meist nicht.

Erklärung:
Stammdaten ändern sich selten (Kundenname, Artikelbezeichnung), Bewegungsdaten entstehen laufend mit jedem Vorgang (Bestellmenge), Rechendaten berechnet das Programm (Gesamtpreis) und speichert sie deshalb meist nicht.
Achtung: Der Einzelpreis ist ein Stammdatum des Artikels, auch wenn er in jeder Bestellzeile auftaucht; die Bestellmenge ist das Bewegungsdatum.

## Lehrnotiz: Redundanz erkennen und Datentypen wählen

**Aufteilung:**
- Teil A, Redundanz und was daraus folgt: K2, K5
- Teil A, versteckte Redundanz und Datenarten: K6, K7 – der errechenbare Wert und das Rechendatum sind dieselbe Sache
- Teil B, Datentypen begründen: K3

**Schon geprüft:** In Prüfungen: K2 (2025F), K3 (neuere Prüfung), K5 (2025F) · Noch nicht geprüft: K6, K7

**Kerngedanken:**
- Redundanz ist die Mehrfachspeicherung selbst, nicht „falsche Daten“. Der Widerspruch ist erst die mögliche Folge.
- Die Anomalien treten auf, wenn Angaben über verschiedene Dinge (etwa Kunde und Bestellung) in einer einzigen Tabelle stehen.
- Muss der Preis zum Zeitpunkt der Bestellung erhalten bleiben, ist er in der Bestellzeile keine Redundanz, sondern eine eigene Angabe („Preis bei Bestellung“). In Prüfungsaufgaben gilt der Einzelpreis als Stammdatum des Artikels.
- Beim Datentyp entscheidet, was mit dem Wert geschehen soll. „Besteht nur aus Ziffern“ heißt nicht „ist eine Zahl“ – entscheidend ist, ob man damit rechnet.
- K3 steht auf der Stufe Beurteilen: Verlangt sind ein Urteil, ein passender Typ und eine Begründung am Wert.
**Typische Missverständnisse:**
- Viele denken, das Hauptproblem der Redundanz sei der Speicherplatz; richtig ist, dass der Widerspruch nach einer unvollständigen Änderung das Problem ist.
- Viele denken, bei der Löschanomalie lasse sich etwas nicht löschen; richtig ist, dass beim Löschen etwas mit verschwindet, das man behalten wollte.

**Fachwörter:**
- Redundanz: dieselbe Information mehrfach gespeichert
- Inkonsistenz: Daten widersprechen sich
- Einfügeanomalie: Datensatz nicht anlegbar, weil anderes fehlt
- Änderungsanomalie: Angabe nicht überall geändert
- Löschanomalie: beim Löschen geht anderes ungewollt verloren
- Stammdaten: ändern sich selten
- Bewegungsdaten: entstehen mit jedem Vorgang
- Rechendaten: berechnet das Programm

**So fragt die IHK:**
- Kurz und offen: In einer Ausgangssituation (zum Beispiel ein übernommener Datenbestand „enthält Redundanzen“) soll man den Begriff Redundanz erklären und ein Problem beschreiben, das daraus entstehen kann. Je etwa 2 Punkte, wenige Zeilen Platz.
- Die Situation ist dabei nur Verpackung: Verlangt ist das Wissen über Redundanz, es steht nicht in der Aufgabe.
- Für den Begriff reicht nach den Lösungshinweisen schon „Mehrfachspeicherung von Daten“, auch ohne Bezug auf den Fall. Beim Problem zählen: Änderungen an mehreren Stellen, Inkonsistenz durch eine übersehene Stelle, mehr Aufwand, ungewollte Nebeneffekte beim Einfügen, Ändern und Löschen. Andere sinnvolle Formulierungen gelten auch.
- Zu Datentypen gibt es keine echte Aufgabe. Nach dem Prüfungskatalog ist zu erwarten: für Attribute einen Typ auswählen und begründen. Liegt eine SQL-Übersicht bei (dort stehen CHARACTER, DECIMAL, DOUBLE, INTEGER, DATE), nimmt man die Typnamen von dort. DOUBLE ist eine Gleitkommazahl – für Geld bleibt es bei DECIMAL.

**Fallen:**
- Redundanz mit „falschen Daten“ gleichsetzen.
- Lösch- und Änderungsanomalie verwechseln.
- Einen Datentyp nennen, aber nicht begründen („ist halt Text“).
- Einen Wert für eine Zahl halten, weil er nur aus Ziffern besteht.
- Ein Datum als Text speichern: Sortiert wird dann nach den ersten Zeichen statt nach der Zeit.
- Einen Zählwert als Text speichern, damit auch Schätzungen hineinpassen: Dann lässt sich nicht mehr rechnen.
- Für Geldbeträge eine Gleitkommazahl wählen, weil der Betrag ein Komma hat.
- Einen Rechenwert mitspeichern wollen, „um Rechenzeit zu sparen“: Die Rechnung kostet fast nichts, der Widerspruch viel.
