Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Code lesen, schreiben und prüfen › Pseudocode: Kontrollstrukturen abbilden

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

## Stoff: Pseudocode: Kontrollstrukturen abbilden

Ziel: Pseudocode lesen, kurze Abläufe mit Verzweigung und Schleife in Pseudocode schreiben und fehlerhafte Zeilen berichtigen.

Das muss ich können:

### K1 – Pseudocode mit verschachtelten Kontrollstrukturen (Stufe 2 Verstehen)
Du kannst Pseudocode mit Verzweigungen und Schleifen interpretieren, auch wenn sie mehrfach verschachtelt sind.

Erklärung:
Welche Zeilen zu einem Zweig oder einer Schleife gehören, zeigt die **Einrückung** bzw. das **Ende-Wort**.
- Alles zwischen `Für …` und `Ende Für` wird wiederholt.
- Ein `Sonst` gehört zum nächsten `Wenn` darüber auf **derselben Ebene**.
Bei Verschachtelung von außen nach innen lesen: Die innere Schleife läuft **bei jedem Durchlauf der äußeren** komplett durch.
Pseudocode ist nicht genormt – entscheidend sind klare Schlüsselwörter und saubere Einrückung.

### K3 – Fehlerhafte Zeile in Pseudocode (Stufe 3 Anwenden)
Du kannst eine fehlerhafte Zeile in Pseudocode korrigieren.

Erklärung:
Typische Zeilenfehler:
- **Schleifengrenze:** Bei Index ab 0 läuft die Schleife `bis n − 1`, nicht `bis n` – sonst Zugriff hinter das Array-Ende.
- **Vergleich:** „ab 18 Jahren“ heißt `>= 18`, nicht `> 18`.
- **Zähler vergessen:** In einer Solange-Schleife muss der Zähler erhöht werden, sonst endet sie nie.
Prüfe jede Zeile mit einem konkreten Wert: Was passiert bei genau 18?

### K4 – Pseudocode aus Beschreibung in Worten (Stufe 3 Anwenden)
Du kannst einen kurzen, in Worten beschriebenen Ablauf mit Verzweigungen und Schleifen in Pseudocode abbilden und die Struktur durch Einrücken sichtbar machen.

Erklärung:
Übersetze die Wörter in Bausteine:
- „für jedes Element …“ → `Für jedes element in liste … Ende Für`
- „solange …“ → `Solange Bedingung … Ende Solange`
- „falls …, sonst …“ → `Wenn Bedingung dann … Sonst … Ende Wenn`
Beispiel „Für jeden Artikel: Ist der Bestand unter 10, Nachbestellung auslösen“:
`Für jeden artikel in artikelliste`
`    Wenn artikel.bestand < 10 dann`
`        nachbestellen(artikel)`
`    Ende Wenn`
`Ende Für`

### K5 – Reihenfolge und Verschachtelung vorgegebener Anweisungen (Stufe 3 Anwenden · in der Prüfung vorgegeben: Variablen, Felder und Funktionen)
Du kannst einen Ablauf aus vorgegebenen Anweisungen in richtiger Reihenfolge und Verschachtelung abbilden, zum Beispiel zwei ineinander geschachtelte Schleifen über Listen.

Erklärung:
Bei vorgegebenen Anweisungen musst du Reihenfolge und Verschachtelung finden:
- Was gehört **außen**, was **innen**? Die äußere Schleife geht über das „größere“ Ding.
- Beispiel „für jede Abteilung jeden Mitarbeiter prüfen“: außen `Für jede abteilung`, innen `Für jeden mitarbeiter in abteilung`.
- Startwerte (z. B. `summe = 0`) stehen **direkt vor** der Schleife, die sie nutzt, Ausgaben des Gesamtergebnisses **nach** ihr. Der Startwert eines inneren Zählers steht deshalb in der äußeren Schleife direkt vor der inneren – sonst wird er für das nächste äußere Element nicht zurückgesetzt.

### K6 – Schleife mit zusammengesetzter Abbruchbedingung (Stufe 3 Anwenden · in der Prüfung vorgegeben: Funktionen der Schnittstelle)
Du kannst eine Funktion mit einer Schleife und einer zusammengesetzten Abbruchbedingung ergänzen, zum Beispiel wiederholen, solange die Stückzahl nicht erreicht und kein Notaus ausgelöst ist.

Erklärung:
Eine zusammengesetzte Bedingung verknüpfst du mit **UND / ODER / NICHT**.
Beispiel: „Produzieren, solange die Stückzahl nicht erreicht ist und kein Notaus ausgelöst wurde“:
`Solange anzahl < ziel UND NICHT notausAktiv()`
`    produziereStueck()`
`    anzahl = anzahl + 1`
`Ende Solange`
Wichtig: Im Rumpf den Zähler erhöhen – sonst läuft die Schleife endlos. Und **UND** statt ODER: Es soll nur weiterlaufen, wenn **beides** zutrifft.
Steht der Notaus in einer Statusvariablen (vor der Schleife `notaus = notausAktiv()`, Bedingung `Solange anzahl < ziel UND NICHT notaus`), musst du ihn im Rumpf neu abfragen (`notaus = notausAktiv()`) – sonst bemerkt die Schleife einen Notaus nie.

### K7 – Algorithmus gegenüber Programm (Stufe 2 Verstehen)
Du kannst Algorithmus und Programm unterscheiden: Ein Algorithmus ist eine endliche, eindeutige Folge von Schritten zur Lösung eines Problems und unabhängig von einer Programmiersprache; ein Programm setzt ihn in einer bestimmten Programmiersprache um.

Erklärung:
- **Algorithmus:** die **Lösungsidee** als Schrittfolge. Sie ist **endlich** (kommt zum Ende) und **eindeutig** (jeder Schritt ist klar festgelegt).
- **Programm:** dieselbe Schrittfolge in der Syntax **einer bestimmten Sprache**, sodass der Rechner sie ausführen kann.
Weil der Algorithmus nicht an eine Sprache gebunden ist, beschreibt man ihn in **Pseudocode** oder im Aktivitätsdiagramm. Daraus lassen sich Programme in verschiedenen Sprachen schreiben.
Beispiel: „Größten Wert einer Liste finden: ersten Wert merken, jeden weiteren vergleichen, größeren merken“ ist der Algorithmus; die Umsetzung in Java oder Python ist je ein Programm.

## Lehrnotiz: Pseudocode: Kontrollstrukturen abbilden

**Aufteilung:**
- Algorithmus und Programm: K7
- Pseudocode lesen, auch verschachtelt: K1
- Aus einer Beschreibung in Worten schreiben: K4
- Vorgegebene Anweisungen ordnen und schachteln: K5
- Schleife mit zusammengesetzter Bedingung: K6
- Fehlerhafte Zeilen berichtigen: K3

**Schon geprüft:** In Prüfungen: K5 (2022F), K6 (2022H) · Noch nicht geprüft: K1, K3, K4, K7

**Kerngedanken:**
- „Startwert vor die Schleife“ heißt: direkt vor die Schleife, die ihn nutzt. Der Startwert eines inneren Zählers steht deshalb in der äußeren Schleife vor der inneren; vor beiden Schleifen würde er für das zweite äußere Element nicht zurückgesetzt.
- Zu jeder Solange-Schleife mit Zähler gehören drei Zeilen: Startwert davor, Bedingung im Kopf, Erhöhung im Rumpf. Der äußere Zähler wird erst nach dem Ende der inneren Schleife erhöht.
- Die Bedingung hinter `Solange` sagt, wann weitergemacht wird, nicht wann Schluss ist. „Bis das Ziel erreicht ist oder ein Stopp kommt“ wird darum zu „Solange Ziel nicht erreicht UND kein Stopp“.

**Typische Missverständnisse:**
- Viele denken, eine andere Programmiersprache brauche einen neuen Algorithmus; richtig ist: Neu ist nur das Programm.
- Viele denken, zwei `Wenn` hintereinander seien dasselbe wie `Wenn … Sonst wenn`; richtig ist: Bei zwei unabhängigen `Wenn` können beide Zweige laufen.

**Fachwörter:**
- Algorithmus: endliche, eindeutige Schrittfolge, unabhängig von der Sprache
- Programm: Umsetzung in einer bestimmten Programmiersprache
- Pseudocode: Ablauf in Schlüsselwörtern, nicht genormt
- Einrückung: zeigt, was zu Zweig oder Schleife gehört

**So fragt die IHK:**
- Zwei Aufgabentypen kamen vor, früher als Struktogramm, heute in Pseudocode. Die Struktur muss erkennbar sein, etwa durch Einrücken; Syntaxfehler werden toleriert. Operatoren: eintragen, ergänzen, erstellen.
- Anweisungen ordnen (9 Punkte, je richtig platzierte Zeile 1): Neun durcheinander stehende Anweisungen (zwei Solange-Schleifen, Startwerte, Erhöhungen, Funktionsaufrufe) sind „folgerichtig einzutragen“. Kern: was außen, was innen steht und wo die inneren Startwerte hingehören.
- Funktion ergänzen (7 Punkte): Übergeben wird ein Array, dessen Indizes feste Bedeutungen haben; die Funktionen der Schnittstelle sind vorgegeben, darunter ein Notaus-Status als Wahrheitswert. Verlangt: Werte übergeben, Schleife „solange Stückzahl nicht erreicht und kein Notaus“, im Rumpf ein Stück starten, Status neu abfragen, Zähler erhöhen. Schleifenbedingung und Statusabfrage zählen je 2 Punkte, die übrigen Zeilen je 1; Rumpfzeilen dürfen vertauscht sein.
- Korrigieren und Schreiben aus einer Beschreibung stehen im Katalog, kamen aber nicht vor.

**Fallen:**
- Eine ungenaue Anweisung („bis es genug ist“) als Algorithmus gelten lassen: Sie ist nicht eindeutig.
- Ein `Sonst` dem nächstliegenden `Wenn` zuordnen statt dem mit gleicher Einrückung.
- Die Verzweigung hinter die Schleife schreiben, obwohl sie für jedes Element gelten soll.
- Vergleichswörter ungenau übersetzen: „unter“ heißt `<`, „mehr als“ `>`, „höchstens“ `<=`.
- Die Erhöhung des äußeren Zählers in die innere Schleife setzen.
- Den Zähler ohne Startwert benutzen oder bei einem Zähler ab 0 für „höchstens n Durchläufe“ `<= n` schreiben (ein Durchlauf zu viel).
- Einen Status vor der Schleife in eine Variable lesen und im Rumpf nicht neu abfragen.
- Eine Schleife über ein Array `von 1 bis n` laufen lassen: Das erste Element fehlt, der letzte Zugriff liegt hinter dem Ende.
- Nur mit unauffälligen Werten prüfen statt auch den letzten Durchlauf.
