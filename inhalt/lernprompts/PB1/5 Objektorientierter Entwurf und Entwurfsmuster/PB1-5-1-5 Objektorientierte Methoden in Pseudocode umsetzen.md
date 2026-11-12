Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Objektorientierter Entwurf und Entwurfsmuster › Objektorientierter Entwurf › Objektorientierte Methoden in Pseudocode umsetzen

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

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

## Stoff: Objektorientierte Methoden in Pseudocode umsetzen

Ziel: Methoden aus einem Klassendiagramm in Pseudocode implementieren: Listen von Objekten durchlaufen, prüfen, Objekte erzeugen, Fabrikmethoden und Benachrichtigungen. Pseudocode an sich kennst du aus AP1.

Das muss ich können:

### K1 – Pseudocode: Liste von Objekten durchlaufen (Stufe 3 Anwenden)
Du kannst eine Methode aus dem Klassendiagramm in Pseudocode implementieren, die eine Liste von Objekten durchläuft und je Objekt Methoden aufruft, zum Beispiel für jeden Aktionär eine Einladungsmail senden oder im Observer-Muster für jeden registrierten Beobachter update aufrufen.

Erklärung:
Muster:
- `für jedes element in liste:`
- `    element.methode(…)`
- `    eigeneListe.add(element)` – falls verlangt, das Objekt zusätzlich in eine Liste der eigenen Klasse eintragen, z. B. `eingeladeneTeilnehmer.add(a)`
Beispiele: für jeden Aktionär `sendeEinladungsmail(a.getEmailAdresse())`; im Observer für jeden Beobachter `o.update()`. Auf private Attribute eines anderen Objekts nur über dessen Getter zugreifen.
Namen von Attributen und Methoden genau aus dem Klassendiagramm übernehmen und mit dem **Methodenkopf** beginnen (Sichtbarkeit, Name, Parameter mit Typ, Rückgabetyp), z. B. `+ notifyObservers() : void`.
Pseudocode ist nicht genormt: Er muss für Dritte ohne Kenntnis der Programmiersprache verständlich sein, ausführbar muss er nicht sein. Deutsche Schlüsselwörter (wenn, solange, für jedes) zählen ebenso wie eine Java-ähnliche Schreibweise (`for`, `if`, `return`).

### K2 – Pseudocode: Prüf- und Berechnungsmethoden (Stufe 3 Anwenden)
Du kannst Prüf- und Berechnungsmethoden implementieren, zum Beispiel eine Liste von Objekten durchsuchen und true oder false zurückgeben oder in einer Unterklasse eine Methode überschreiben (calculatePreis mit 5 % Rabatt für Premium-Besucher).

Erklärung:
- **Prüfen:** Liste durchlaufen, bei Treffer `return true`, nach der Schleife `return false`. Enthält die Liste Objekte einer anderen Klasse, über deren Getter zum gesuchten Objekt gehen und mit `equals` vergleichen, z. B. `wenn vTN.getAktionaer().equals(a): return true`.
- **Überschreiben:** in der Unterklasse die Methode mit **derselben Signatur** neu schreiben, z. B. in `PremiumBesucher` (erbt von der abstrakten Klasse `Besucher`) `+ calculatePreis(basisPreis : Double) : Double` mit `return basisPreis * 0.95` für 5 % Rabatt. `super.methode(…)` nur aufrufen, wenn die Oberklasse eine fertige (nicht abstrakte) Fassung hat.

### K3 – Pseudocode: Objekte erzeugen und einfügen (Stufe 3 Anwenden)
Du kannst eine Methode implementieren, die Objekte erzeugt und in eine Liste einfügt: mit einem überladenen Konstruktor oder über eine statische Fabrikmethode, die je nach übergebenem Typ ein Objekt der passenden Unterklasse erzeugt (Mehrfachauswahl).

Erklärung:
Objekte erzeugen und einfügen:
- mit **Konstruktor**: `neu = new Kunde(name, nummer)`, dann `liste.add(neu)`
- über eine **statische Fabrikmethode** mit Mehrfachauswahl:
- `+ createBesucher(typ : String) : Besucher {static}`
- `    switch typ:`
- `        case "STANDARD": return new StandardBesucher()`
- `        case "PREMIUM": return new PremiumBesucher()`
- `        case "VIP": return new VipBesucher()`
Einen Standardfall (`default` bzw. `sonst`) schreibst du nur, wenn die Aufgabe ihn verlangt; in der Prüfungsaufgabe zu diesem Beispiel war er ausdrücklich ausgeschlossen.
Ist die Oberklasse abstrakt (hier `Besucher`), wird sie selbst nie mit `new` erzeugt; sie ist nur der Rückgabetyp.
Überladener Konstruktor = mehrere Konstruktoren mit unterschiedlichen Parametern.
Oft nur einfügen, wenn das Objekt noch fehlt – dazu vorhandene Methoden der Klasse aufrufen, statt die Prüfung neu zu schreiben:
- `wenn nicht istAngemeldeterTeilnehmer(a):`
- `    code = erstelleCode()`
- `    vTN = new Versammlungsteilnehmer(a, code)`
- `    angemeldeteTeilnehmer.add(vTN)`

## Lehrnotiz: Objektorientierte Methoden in Pseudocode umsetzen

**Aufteilung:**
- Liste durchlaufen und je Objekt Methoden aufrufen: K1
- Prüfmethoden mit true/false und überschriebene Berechnungen: K2
- Objekte erzeugen und einfügen (Konstruktor, „nur wenn noch nicht da“, statische Fabrikmethode): K3 – hier kommen die ersten beiden Themen zusammen

**Schon geprüft:** In Prüfungen: K1 (2022S, 2024S), K2 (2023S, 2024S), K3 (2023S, 2024S)

**Kerngedanken:**
- Das Klassendiagramm gibt fast alles vor: Methodenkopf, Namen, Typen, Reihenfolge der Konstruktorparameter und vorhandene Hilfsmethoden werden abgeschrieben. Selbst zu entscheiden ist nur der Rumpf.
- `return` beendet die Methode sofort. Deshalb darf `return false` erst nach der Schleife stehen: Erst wenn alle Elemente geprüft sind, steht fest, dass keines passt.
- Bewertet wird die Logik, nicht die Schreibweise. Gleichwertig sind zum Beispiel:
  - eine Ergebnisvariable (vor der Schleife `false`, beim Treffer `true`, am Ende zurückgeben) statt des frühen `return`
  - eine Zählschleife mit `get(i)` statt „für jedes“
  - „wenn / sonst wenn“ statt `switch`
- Abgrenzung: Die statische Fabrikmethode mit Mehrfachauswahl ist die einfache Fabrik. Das Muster Factory Method mit eigenen Erzeugerklassen gehört zum Stichpunkt Entwurfsmuster.

**Typische Missverständnisse:**
- Viele denken, zu „wenn Treffer: return true“ gehöre in der Schleife ein „sonst: return false“; richtig ist: Dann bricht die Methode schon beim ersten Element ab, das nicht passt.
- Viele denken, ein geschütztes Attribut (`#`) eines anderen Objekts dürfe man direkt setzen; richtig ist: `#` gilt für Unterklassen. Eine fremde Klasse nimmt Getter und Setter.

**Fachwörter:**
- Methodenkopf: Sichtbarkeit, Name, Parameter mit Typ, Rückgabetyp
- Signatur: Name und Parameter einer Methode
- Getter: Methode, die einen Attributwert liefert
- Überschreiben: geerbte Methode in der Unterklasse neu schreiben
- überladener Konstruktor: mehrere Konstruktoren mit unterschiedlichen Parametern
- statische Fabrikmethode: liefert je nach Parameter das passende Objekt
- Mehrfachauswahl: Verzweigung mit mehreren Fällen (`switch`)

**So fragt die IHK:**
- Die Aufgaben kamen in drei Prüfungen vor, immer im Anschluss an ein vorgegebenes oder zuvor erstelltes Klassendiagramm. Der Operator ist „implementieren“; in den Lösungen steht „Andere Lösungen sind möglich“.
- Observer: die Benachrichtigungsmethode des Subjekts (4 Punkte: 1 Methodenkopf, 2 Schleife, 1 Methodenaufruf).
- Statische Fabrikmethode mit Mehrfachauswahl, Standardfall ausdrücklich nicht zu berücksichtigen (5 Punkte: 1 Selektor, 1 Mehrfachauswahl, 3 Rückgaben).
- Zwei überschreibende Methoden für einen Kundentyp (4 Punkte, je 2): Eine gibt den Parameter zurück, eine einen Rabattpreis.
- Eine weitere Aufgabe hatte drei Methoden zu je 5 Punkten mit dem Hinweis „Jede Liste hat add“:
  - Liste durchlaufen, je Element eine Mail über einen Getter senden und das Element in eine eigene Liste eintragen
  - Prüfmethode mit Boolean-Rückgabe über eine Liste von Objekten einer anderen Klasse (Getter, dann `equals`)
  - Anmelden: vorhandene Prüfmethode aufrufen, Code erzeugen, überladenen Konstruktor benutzen, Objekt einfügen
- Früher war auch ein Struktogramm erlaubt, heute ist Pseudocode verlangt. Die Namen müssen zum Klassendiagramm passen.

**Fallen:**
- Durchlaufen: Den Methodenkopf weglassen; das kostet einen Punkt.
- Durchlaufen: Über die falsche Liste laufen, etwa über das eigene Attribut statt über die übergebene Liste.
- Durchlaufen: `add` oder den Methodenaufruf außerhalb der Schleife schreiben; dann wird nur ein Element oder gar keins bearbeitet.
- Durchlaufen: Bei einer Zählschleife ab 0 mit eingeschlossener Obergrenze bis `size()` statt bis `size() - 1` laufen (mit `i < size()` ist `size()` richtig).
- Durchlaufen: Liegt der Wert zwei Objekte entfernt, braucht es eine Kette von Gettern (erst zum Objekt, dann zum Wert).
- Prüfen: Objekte mit `==` statt mit `equals` vergleichen; `==` ist für Zahlen.
- Prüfen: „ab einem Wert“ als `>` statt `>=` schreiben.
- Überschreiben: Den Methodenkopf ändern (anderer Parametertyp, fehlender oder anderer Rückgabetyp) oder das `return` vergessen.
- Überschreiben: Bei einem Rabatt mit dem Rabattsatz malnehmen; das ergibt nur den Rabatt, nicht den Preis.
- Erzeugen: Das Objekt erzeugen, aber nicht in die Liste einfügen.
- Erzeugen: `add` außerhalb der Bedingung schreiben; dann entstehen doppelte Einträge.
- Erzeugen: Die Konstruktorparameter in anderer Reihenfolge als im Diagramm übergeben.
- Erzeugen: Den überladenen Konstruktor mit zu wenigen Parametern nehmen, sodass ein verlangter Wert verloren geht.
- Erzeugen: Das Ergebnis einer Hilfsmethode (Nummer, Code) nicht in einer Variablen festhalten.
- Fabrikmethode: Objekte erzeugen, aber nicht zurückgeben, oder einen Fall auslassen.
- Fabrikmethode: `{static}` im Kopf weglassen.
- Fabrikmethode: Einen verlangten Standardfall vergessen. Schließt die Aufgabe ihn ausdrücklich aus, braucht es keinen.

**Material:**
Schreibweise, die als richtig gilt (Pseudocode ist nicht genormt; Java-ähnlich mit `for`, `if`, `{ }` zählt genauso):
- Erst der Methodenkopf wie im Diagramm, darunter eingerückt der Rumpf.
- Schleife: `für jedes x in liste:`
- Verzweigung: `wenn Bedingung:` / `sonst:`, Verneinung mit `nicht`
- Rückgabe: `return wert`
- Objekt erzeugen: `new Klasse(…)`
- Mehrfachauswahl: `switch wert:` mit `case "X": …`
- Listen haben `add(Object)`, `size()` und `get(i)`.
