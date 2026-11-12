Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › UML-Diagramme › Klassendiagramm

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

## Stoff: Klassendiagramm

Ziel: Klassen mit Attributen, Datentypen, Methoden und Sichtbarkeiten im Klassendiagramm darstellen und aus einem Text ableiten.

Das muss ich können:

### K1 – Klasse als Kasten mit drei Bereichen (Stufe 3 Anwenden)
Du kannst eine Klasse als Kasten mit drei Bereichen darstellen: Name, Attribute, Methoden.

Erklärung:
Eine Klasse ist ein **Kasten mit drei Bereichen** übereinander:
- oben: der **Name** der Klasse, z. B. `Kunde`
- Mitte: die **Attribute**
- unten: die **Methoden**

### K2 – Schreibweise von Attributen und Methoden (Stufe 3 Anwenden)
Du kannst Attribute in der Form „Sichtbarkeit Name : Typ“ und Methoden mit Parametern und Rückgabetyp darstellen.

Erklärung:
- **Attribut:** `Sichtbarkeit name : Typ` – z. B. `- name : String`
- **Methode:** `Sichtbarkeit name(parameter : Typ) : Rückgabetyp` – z. B. `+ berechneZins(jahre : int) : double`
Hat eine Methode keinen Rückgabewert, steht `: void` dahinter. Mehrere Parameter trennst du mit Komma; ohne Parameter bleiben die Klammern leer, z. B. `+ getName() : String`.

### K3 – Sichtbarkeitszeichen +, -, # und ~ (Stufe 3 Anwenden)
Du kannst die Sichtbarkeitszeichen + für public, - für private, # für protected und ~ für package verwenden.

Erklärung:
- `+` **public** – von überall zugreifbar
- `-` **private** – nur innerhalb der Klasse
- `#` **protected** – innerhalb der Klasse und abgeleiteter Klassen
- `~` **package** – innerhalb desselben Pakets (einer Gruppe zusammengehöriger Klassen)
Üblich: Attribute `-`, Methoden `+`.

### K4 – Assoziation mit Multiplizitäten und Navigierbarkeit (Stufe 3 Anwenden)
Du kannst eine Assoziation zwischen zwei Klassen mit Multiplizitäten wie 1 und * einzeichnen und interpretieren, auch eine gerichtete Assoziation, bei der ein Pfeil die Navigierbarkeit zeigt.

Erklärung:
Eine **Assoziation** ist eine **durchgezogene Linie** zwischen zwei Klassen. Die **Multiplizität** steht am Linienende **bei der Klasse, deren Anzahl sie angibt**:
- `1` genau eins, `*` beliebig viele, auch keins (gleich `0..*`), `0..1` keins oder eins, `1..*` mindestens eins, `1..20` eins bis zwanzig
Beispiel: `Kunde 1 —— * Bestellung`: Ein Kunde hat beliebig viele Bestellungen, jede Bestellung gehört zu genau einem Kunden.
**Einzeichnen:** Frag für jede Seite „Wie viele B gehören zu einem A?“ und schreib die Antwort an das Ende bei B.
**Gerichtete Assoziation:** Eine offene Pfeilspitze (zwei Striche, kein Dreieck wie bei der Vererbung) zeigt die **Navigierbarkeit** – die Klasse am Anfang kennt die an der Spitze, aber nicht umgekehrt.

### K5 – Klassen aus einer Textbeschreibung (Stufe 3 Anwenden)
Du kannst aus einer Textbeschreibung Klassen mit ihren Attributen und Methoden ableiten.

Erklärung:
Lies den Text und such:
- **Substantive** für eigenständige Dinge oder Personen → **Klassen**
- deren **Eigenschaften** → **Attribute** (mit passendem Typ)
- **Tätigkeiten** (Verben) → **Methoden**
Beispiel: „Ein Fahrzeug hat ein Kennzeichen und einen Kilometerstand. Es kann fahren.“
- Klasse `Fahrzeug`
- `- kennzeichen : String`, `- kilometerstand : int`
- `+ fahren(km : int) : void`
Richte dich nach dem Wortlaut der Aufgabe: Sind Typen oder Sichtbarkeiten dort nicht verlangt, genügen die Namen.

### K6 – Aggregation gegenüber Komposition (Stufe 2 Verstehen)
Du kannst Aggregation und Komposition im Klassendiagramm unterscheiden: Bei der Aggregation kann das Teil auch ohne das Ganze bestehen, bei der Komposition nicht.

Erklärung:
Beide beschreiben eine Teil-Ganzes-Beziehung. Die Raute sitzt immer **am Ganzen**.
- **Aggregation** – **leere Raute:** Das Teil kann **auch ohne das Ganze** bestehen. Beispiel: Mannschaft – Spieler; löst sich die Mannschaft auf, gibt es die Spieler noch.
- **Komposition** – **ausgefüllte Raute:** Das Teil kann **nicht ohne das Ganze** bestehen. Beispiel: Gebäude – Raum; wird das Gebäude abgerissen, sind die Räume weg.

### K7 – Vererbungspfeil im Klassendiagramm lesen (Stufe 3 Anwenden)
Du kannst eine Vererbung (Generalisierung) im Klassendiagramm interpretieren und selbst eine Klassenhierarchie mit gemeinsamer Oberklasse erstellen: Die durchgezogene Linie mit hohlem Dreieck zeigt auf die Oberklasse; die Unterklasse erbt deren Attribute und Methoden und kann eigene ergänzen.

Erklärung:
Die **Vererbung** (Generalisierung) zeigt eine **ist-ein-Beziehung**: Ein Lkw **ist ein** Fahrzeug.
- **Darstellung:** durchgezogene Linie mit **hohlem Dreieck**; die Spitze zeigt auf die **Oberklasse** (das Allgemeine).
- Die **Unterklasse** erbt alle Attribute und Methoden der Oberklasse, ohne dass sie dort noch einmal stehen, und ergänzt eigene.
Du kennst das Zeichen schon vom Anwendungsfalldiagramm (Generalisierung von Akteuren). Verlangt eine Aufgabe, zu einer vorgegebenen Oberklasse eine einfache Klassenhierarchie zu erstellen, ist das die Umkehrung des Lesens: Gemeinsames in die Oberklasse, Besonderes in die Unterklassen, hohles Dreieck zur Oberklasse. So eine Aufgabe gab es in der AP1 schon.

## Lehrnotiz: Klassendiagramm

**Aufteilung:**
- Die Klasse als Kasten und die Schreibweise der Zeilen: K1, K2
- Wer zugreifen darf: K3
- Klassen aus einem Text gewinnen: K5
- Assoziation: K4
- Teil und Ganzes: K6
- Vererbung: K7 – hier auch die Umkehrung, eine einfache Klassenhierarchie zu einer Oberklasse aufbauen

**Schon geprüft:** In Prüfungen: K1 (neuere Prüfung), K2 (neuere Prüfung), K3 (neuere Prüfung), K5 (2023F), K7 (2023F) · Noch nicht geprüft: K4, K6

**Kerngedanken:**
- Das Klassendiagramm ist ein Bauplan, der für jede Programmiersprache gilt. Darum hat es eine eigene Schreibweise: Der Typ steht hinter dem Namen nach einem Doppelpunkt, nicht davor wie im Code.
- Probe, ob ein Substantiv Klasse oder Attribut wird: Ein eigenständiges Ding mit eigenen Eigenschaften wird eine Klasse; eine bloße Angabe über etwas anderes (ein Datum, ein Status) wird ein Attribut.
- Multiplizitäten lesen heißt auch die Untergrenze lesen: `*` schließt „keins“ ein. Ob es ein Objekt ohne Partner geben darf, zeigt das andere Ende – `1` heißt Pflicht, `0..1` heißt freiwillig.
- Vererbt wird nur von der Oberklasse zur Unterklasse. Ein Objekt der Unterklasse hat alles aus beiden Kästen; ein Objekt der Oberklasse hat die Ergänzungen der Unterklasse nicht.

**Typische Missverständnisse:**
- Viele denken, die Multiplizität gehöre an das Ende der Klasse, mit der der Satz beginnt („jede Bestellung gehört zu genau einem …“); richtig ist: Sie steht bei der Klasse, die gezählt wird.
- Viele denken, der Vererbungspfeil zeige wie „gibt weiter an“ auf die Unterklasse; richtig ist: Die Spitze zeigt immer auf das Allgemeine, die Oberklasse.

**Fachwörter:**
- Sichtbarkeit: wer auf Attribut oder Methode zugreifen darf
- Rückgabetyp: Typ des Werts, den eine Methode liefert
- Multiplizität: wie viele Objekte am Linienende beteiligt sind
- Navigierbarkeit: welche Klasse die andere kennt
- Aggregation: Teil besteht auch ohne das Ganze
- Komposition: Teil besteht nicht ohne das Ganze
- Oberklasse: das Allgemeine, von dem geerbt wird
- Unterklasse: erbt und ergänzt Eigenes

**So fragt die IHK:**
- Muster ist eine Aufgabe mit dem Operator „erstellen“ (2023F, 8 Punkte): Für zwei Arten eines Geschäftsvorfalls waren Eigenschaften und Methoden als Listen vorgegeben, dazu die gemeinsame Oberklasse. Verlangt war eine Klassenhierarchie: Gemeinsames in die Oberklasse, Besonderes in die Unterklassen, Vererbungslinien mit hohlem Dreieck zur Oberklasse.
- Als Material lag die UML-Notationsübersicht bei (Schreibweise von Attributen und Methoden, Sichtbarkeitszeichen, Linien für alle Beziehungen).
- Bewertet wurden 2 Punkte je Klasse und 2 Punkte für die Vererbung. Zusätzliche Methoden, Konstruktoren und Sichtbarkeiten waren ausdrücklich nicht gefordert; die Lösung zeigt nur Namen ohne Typen.
- Der Prüfungskatalog nennt außerdem Assoziationen mit Multiplizitäten und Navigierbarkeit sowie Aggregation und Komposition.

**Fallen:**
- Den Typ vor den Namen schreiben wie im Code oder den Rückgabetyp weglassen, auch `void`.
- Bei einer Methode die Klammern weglassen, wenn sie nichts bekommt, oder einen Parameter ohne Typ schreiben.
- Einen Typ wählen, der nicht zur Angabe passt, etwa Text für eine Zahl; für ja/nein ist es ein Wahrheitswert.
- `#` als „privat“ lesen (privat ist `-`), `~` als „ungefähr“ oder „optional“ lesen (es heißt package) oder `#` und `~` vertauschen.
- Jedes Substantiv des Textes zur Klasse machen oder eine Eigenschaft als eigenen Kasten zeichnen.
- Bei der gerichteten Assoziation den Pfeil vergessen oder umdrehen: Die Spitze sitzt bei der Klasse, die gekannt wird.
- Die Raute an das Teil setzen oder Aggregation und Komposition nennen ohne den Grund, ob das Teil ohne das Ganze weiter besteht.
- Beim Lesen einer Vererbung nur aufzählen, was im Kasten der Unterklasse steht, und das Geerbte vergessen.

**Material:**
Notationsregeln, nach denen eine Zeichnung geprüft wird:
- Klasse: Rechteck mit drei Bereichen, durch Linien getrennt: Name, Attribute, Methoden.
- Attribut: `Sichtbarkeit name : Typ`.
- Methode: `Sichtbarkeit name(parameter : Typ) : Rückgabetyp`. Mehrere Parameter stehen durch Komma getrennt, ohne Parameter bleiben die Klammern leer, ohne Rückgabewert steht `: void`.
- Typen (üblich, keine IHK-Vorgabe): `int` für ganze Zahlen, `double` für Kommazahlen, `String` für Text, `boolean` für ja/nein, `Date` für ein Datum. `float` statt `double`, `String` für ein Datum und andere sinnvolle Namen gelten.
- Assoziation: durchgezogene Linie zwischen zwei Klassen. An jedem Ende steht die Multiplizität der Klasse an diesem Ende: `1`, `*`, `0..1`, `1..*` oder ein Bereich wie `1..20`; `0..*` bedeutet dasselbe wie `*`.
- Gerichtete Assoziation: dieselbe Linie mit offener Pfeilspitze bei der Klasse, die gekannt wird.
- Aggregation: Linie mit leerer Raute am Ganzen. Komposition: Linie mit ausgefüllter Raute am Ganzen.
- Vererbung: durchgezogene Linie mit hohlem Dreieck an der Oberklasse. Geerbte Attribute und Methoden stehen in der Unterklasse nicht noch einmal.
- Geprüft wird nur, was die Aufgabe verlangt: Sind Typen oder Sichtbarkeiten nicht gefordert, reichen die Namen.
