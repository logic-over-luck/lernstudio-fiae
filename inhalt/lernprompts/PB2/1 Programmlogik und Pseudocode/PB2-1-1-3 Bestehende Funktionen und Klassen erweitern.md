Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmlogik und Pseudocode › Algorithmen in Pseudocode › Bestehende Funktionen und Klassen erweitern

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 2) und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

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
- Pseudocode und SQL tippe ich in den Chat; bewerte sie wie ein IHK-Korrektor (jede verständliche Schreibweise zählt, es kommt auf die Logik an). Diagramme und relationale Modelle zeichne ich auf Papier und lade ein Foto hoch. Für SQL gilt das Tabellenmodell aus der Lehrnotiz.
- Stimmt der Inhalt und fehlt nur das Fachwort, zählt die Antwort als richtig: Nenn mir das Wort in einem Satz und geh weiter.
- Zeig Lösungen nie, bevor ich geantwortet habe.

**Was feststeht**
- Der Stoff ist verbindlich, und jede Aussage muss drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“, statt still etwas anderes beizubringen. Steht bei einer Aussage „in der Prüfung vorgegeben“, muss ich das nur anwenden.
- Sag mir bei jedem Thema in einem Halbsatz, ob es schon in einer Prüfung vorkam (Lehrnotiz „Schon geprüft“). Was schon geprüft wurde, übst du gründlicher.
- Schreibe ich „kann ich“, stell nur eine Aufgabe. Schreibe ich „Pause“, fass in zwei Zeilen zusammen, wo wir stehen; später mache ich im selben Chat weiter.
- Am Ende stellst du eine Abschlussaufgabe im Stil der IHK-Aufgaben aus der Lehrnotiz (z. B. SQL-Anweisung zu vorgegebener Ergebnistabelle, Pseudocode zu einer Beschreibung), mit Punkten je Teil (zusammen 10–12), eine Teilaufgabe nach der anderen. Nimm vor allem das hinein, was unterwegs nicht saß, und das, was schon geprüft wurde. Davor gibt es keine eigene Wiederholungsrunde.
- Abhaken: Hat die Abschlussaufgabe mindestens zwei Drittel der Punkte, schreib: „✅ Kannst du abhaken: <Titel des Stichpunkts>“. Sonst nenn, was noch wackelt, und übe genau das mit mir.

Antworte auf Deutsch.

## Stoff: Bestehende Funktionen und Klassen erweitern

Ziel: Vorhandene Klassen nach einem Klassendiagramm um Methoden erweitern, die Attribute, fremde Objekte und statische Methoden nutzen, und dabei die vorgegebenen Schnittstellen einhalten. Methoden aus einem Klassendiagramm umsetzen kennst du aus PB1-5.

Das muss ich können:

### K1 – Methode mit fremdem Objekt und compare() (Stufe 3 Anwenden)
Du kannst in einer vorhandenen Klasse eine Methode ergänzen, die über ein Attribut ein anderes Objekt nutzt (this.fahrplanService.getAbfahrten(…)), statische Methoden wie DateTime.now() aufruft und die Rückgabewerte weiterverarbeitet, auch mit einer vorgegebenen Vergleichsmethode wie compare(), deren Rückgabe −1, 0 oder 1 du nach der Beschreibung richtig deutest.

Erklärung:
Eine Klasse kennt andere Objekte oft über ein **Attribut**, z. B. `fahrplanService` vom Typ `FahrplanService`. Dessen Methoden rufst du über das Attribut auf: `this.fahrplanService.getAbfahrten(haltestelle)`. Das Ergebnis (eine Liste oder ein Array) speicherst du in einer Variablen und verarbeitest es weiter.
- **statische Methoden** gehören zur Klasse, nicht zu einem Objekt: Aufruf über den Klassennamen, z. B. `jetzt = DateTime.now()`
- **vorgegebene Vergleichsmethode:** lies genau, was sie liefert. Gilt etwa für die Objektmethode `a.compare(b)`: −1, wenn a früher ist, 0 bei Gleichheit, 1, wenn a später ist, dann heißt „Abfahrt nicht vor jetzt“: `abfahrt.abfahrtsZeit.compare(jetzt) >= 0`. Tauschst du Aufrufer und Argument, dreht sich das Vergleichszeichen um: `jetzt.compare(abfahrt.abfahrtsZeit) <= 0` sagt dasselbe
- nur Methoden und Attribute aus dem Klassendiagramm verwenden und ihre Namen genau übernehmen
Beispiel:
- `methode naechsteAbfahrten(haltestelle: Ganzzahl): Liste<Abfahrt>`
- `  jetzt = DateTime.now()`
- `  alle = this.fahrplanService.getAbfahrten(haltestelle)`
- `  ergebnis = neue Liste<Abfahrt>`
- `  for i = 0 to alle.length - 1`
- `    if alle[i].abfahrtsZeit.compare(jetzt) >= 0 then`
- `      ergebnis.add(alle[i])`
- `    end if`
- `  end for`
- `  return ergebnis`
Hier liefert `getAbfahrten` laut Klassendiagramm ein Array (`Abfahrt[]`), und `abfahrtsZeit` ist ein öffentliches Attribut ohne Getter – deshalb `alle.length`, `alle[i]` und `.abfahrtsZeit`.

### K2 – Methode, die ein Objekt erzeugt und zurückgibt (Stufe 3 Anwenden)
Du kannst eine Methode nach Vorgabe implementieren, die ein Objekt erzeugt, befüllt und zurückgibt, zum Beispiel eine HTTP-Antwort mit Statuscode, Kopfzeilen (Content-Type, Content-Length) und Body.

Erklärung:
Manche Methoden sollen ein **Objekt erzeugen, befüllen und zurückgeben**:
- Objekt mit dem Konstruktor anlegen
- über die vorgegebenen Setter oder Methoden befüllen
- das fertige Objekt mit `return` zurückgeben
Beispiel HTTP-Antwort (Aufbau und Statuscodes kennst du aus PB1):
- `methode erzeugeAntwort(inhalt: String): HttpResponse`
- `  antwort = new HttpResponse()`
- `  antwort.setStatus(200)`
- `  antwort.addHeader("Content-Type", "application/json")`
- `  antwort.addHeader("Content-Length", String(inhalt.length()))`
- `  antwort.setBody(inhalt)`
- `  return antwort`
Die Methodennamen (`setStatus`, `addHeader` …) stammen in der Prüfung aus dem vorgegebenen Klassendiagramm – nimm genau diese. Nimmt dort schon der Konstruktor den Statuscode entgegen (`new HttpResponse(statusCode)`), setzt du ihn so und nicht über einen Setter. Der Wert einer Kopfzeile ist ein Text, deshalb wird die Länge mit `String(…)` umgewandelt. **Content-Length** ist die Länge des Body in Bytes; bei reinem ASCII-Text entspricht das der Zeichenzahl, bei Umlauten in UTF-8 sind es mehr Bytes als Zeichen – die Zeichenzahl aus `length()` stimmt also nur bei reinem ASCII-Text.

### K3 – Hilfsmethode: Einträge ab Zeitpunkt bis Höchstzahl (Stufe 3 Anwenden)
Du kannst eine private Hilfsmethode schreiben, die aus einer sortierten Liste von Objekten nur die Einträge ab einem Zeitpunkt übernimmt, das Ergebnisarray in der Größe der Höchstzahl anlegt und aufhört, sobald diese erreicht ist.

Erklärung:
Eine **private Hilfsmethode** ist nur innerhalb der Klasse aufrufbar und nimmt einer öffentlichen Methode einen Teilschritt ab. Typischer Fall: aus einer **nach Zeit sortierten** Liste höchstens `max` Einträge ab einem Zeitpunkt übernehmen.
- Ergebnisarray in der Größe der Höchstzahl anlegen
- einen Zähler für die belegten Plätze führen
- nur Einträge ab dem Zeitpunkt übernehmen
- aufhören, sobald `anzahl == max` – weil die Liste sortiert ist, kommen danach nur noch spätere Einträge, die nicht mehr gebraucht werden
- `private methode filtereAb(liste: Liste<Abfahrt>, ab: DateTime, max: Ganzzahl): Abfahrt[]`
- `  ergebnis = new Abfahrt[max]`
- `  anzahl = 0`
- `  i = 0`
- `  while i < liste.size() and anzahl < max do`
- `    if liste.get(i).abfahrtsZeit.compare(ab) >= 0 then`
- `      ergebnis[anzahl] = liste.get(i)`
- `      anzahl = anzahl + 1`
- `    end if`
- `    i = i + 1`
- `  end while`
- `  return ergebnis`
Gibt es weniger passende Einträge als `max`, bleiben die restlichen Plätze leer (`null`).
Gibt die Aufgabe eine Signatur ohne Liste und Zeitpunkt vor, etwa `getNaechsteAbfahrten(haltestellenId, maxAbfahrten)`, holt sich die Methode beides selbst: die Abfahrten über das Attribut (`this.fahrplanService.getAbfahrten(haltestellenId)`), den Zeitpunkt mit `DateTime.now()`. Liefert der Dienst ein Array, heißt es `abfahrten.length` und `abfahrten[i]` – der Ablauf bleibt derselbe.

## Lehrnotiz: Bestehende Funktionen und Klassen erweitern

**Aufteilung:**
- Fremdes Objekt über ein Attribut, statische Methode, compare(): K1
- Objekt erzeugen, befüllen, zurückgeben: K2
- Private Hilfsmethode mit Höchstzahl, baut auf dem ersten Thema auf: K3

**Schon geprüft:** In Prüfungen: K1 (2024W), K2 (2024W), K3 (2024W)

**Kerngedanken:**
- Das Ergebnis von `compare` beschreibt das Objekt links vom Punkt im Verhältnis zum Argument; `a.compare(b) >= 0` und `b.compare(a) <= 0` sagen deshalb dasselbe.
- In der Hilfsmethode laufen zwei Indizes: die Laufvariable durch die Quelle, der Zähler durch das Ergebnisarray. Gespeichert wird an der Stelle des Zählers.
- `Content-Length` hängt vom Body ab und lässt sich erst bestimmen, wenn der Body feststeht.
- Verlangt die Aufgabe den Vergleich ausdrücklich mit `compare`, zählt ein Vergleich der Zeitpunkte mit `<` oder `>` nicht.

**Typische Missverständnisse:**
- Viele denken, `compare` liefere −1 für etwas, das „noch kommt“; richtig ist: Liegt das aufrufende Objekt nach dem Argument, kommt 1 heraus (bei der im Stoff beschriebenen Rückgabe).
- Viele denken, die Suche dürfe bei der Höchstzahl enden, „weil es schneller ist“; richtig ist: Sie darf enden, weil die Liste sortiert ist und danach nur spätere Einträge kommen.

**Fachwörter:**
- Attribut: Eigenschaft einer Klasse, kann ein Objekt halten
- statische Methoden: gehören zur Klasse, Aufruf über Klassennamen
- Vergleichsmethode: liefert hier −1, 0 oder 1
- Konstruktor: legt mit `new` ein Objekt an
- Setter: Methode, die einen Wert setzt
- private Hilfsmethode: nur innerhalb der Klasse aufrufbar
- Content-Length: Länge des Body in Bytes

**So fragt die IHK:**
- Bisher eine echte Aufgabe: eine API-Aufgabe mit Klassendiagramm-Auszug – Controller mit Dienst-Attribut, Dienst liefert ein sortiertes Array, Antwortklasse, Zeitklasse mit statischem `now()` und `compare` samt Beschreibung der Rückgabewerte.
- Teil a (10 Punkte, „implementieren“, vorgedruckte Kopfzeile): private Methode, die eine HTTP-Antwort mit übergebenem Statuscode (dort im Konstruktor), zwei Kopfzeilen (Typ, Länge) und Body erzeugt und zurückgibt.
- Teil b (15 Punkte): private Methode, die die nächsten höchstens N Einträge ab jetzt liefert – Ergebnisarray in Höchstgröße, Zähler, Schleife mit zwei Bedingungen, `now()` statisch, Dienst über `this`, Vergleich ausdrücklich mit `compare`.
- In der veröffentlichten Lösung stand der Vergleich falsch herum. Dort steht `jetzt.compare(abfahrt.abfahrtsZeit) >= 0`; nach der Beschreibung von `compare` liefert das die vergangenen Abfahrten. Richtig ist `<= 0` oder gleichwertig `abfahrt.abfahrtsZeit.compare(jetzt) >= 0`. Verlangt ist ausdrücklich der Vergleich mit `compare`.
- Andere richtige Lösungen werden gewertet; Punkte gibt es je Bestandteil.

**Fallen:**
- Aufrufer und Argument von `compare` tauschen, ohne das Vergleichszeichen umzudrehen – dann kommen die vergangenen Einträge heraus (samt denen genau zum Zeitpunkt).
- Den Grenzfall Gleichheit (Rückgabe 0) nicht nach dem Text entscheiden: „nicht vor“ schließt ihn ein, „echt vor“ schließt ihn aus.
- Den Dienst nicht über das Attribut aufrufen, sondern statisch über seinen Klassennamen (`FahrplanService.getAbfahrten(…)`); für `now()` erst ein Objekt mit `new` anlegen.
- Einen Konstruktor mit Parameter benutzen, den das Klassendiagramm nicht hat.
- Das Objekt befüllen, aber nicht zurückgeben; `Content-Length` als festen Wert eintragen.
- Das Ergebnisarray so groß wie die Quelle anlegen; den Zähler nach dem Speichern nicht erhöhen.
- Den Abbruch bei der Höchstzahl weglassen – bei mehr Treffern wird hinter das Ende des Ergebnisarrays geschrieben.
- Die Laufvariable nur im Treffer-Zweig erhöhen – beim ersten Eintrag, der nicht passt, entsteht eine Endlosschleife.
- `DateTime.now()` nehmen, obwohl die Signatur den Zeitpunkt als Parameter übergibt.
