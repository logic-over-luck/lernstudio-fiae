Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Objektorientierter Entwurf und Entwurfsmuster › Objektorientierter Entwurf › Entwurfsmuster: Observer, Factory, Singleton, MVC und Schichten

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

## Stoff: Entwurfsmuster: Observer, Factory, Singleton, MVC und Schichten

Ziel: Vorteile und Kategorien von Entwurfsmustern kennen und Observer, Factory Method, Singleton, MVC und die Schichtenarchitektur anwenden und begründen.

Das muss ich können:

### K1 – Vorteile von Entwurfsmustern (Stufe 2 Verstehen)
Du kannst Vorteile von Entwurfsmustern beschreiben: bewährte Lösungen für wiederkehrende Probleme sparen Zeit und Kosten, verbessern Erweiterbarkeit und Wartbarkeit und geben dem Team eine gemeinsame Sprache.

Erklärung:
Ein **Entwurfsmuster** ist eine bewährte, allgemeine Lösungsschablone für ein wiederkehrendes Entwurfsproblem: Es beschreibt die beteiligten Klassen und ihr Zusammenspiel, keinen fertigen Code.
Vorteile von Entwurfsmustern:
- **bewährte Lösung** für ein wiederkehrendes Problem → spart Zeit und Kosten
- bessere **Erweiterbarkeit und Wartbarkeit**
- **gemeinsame Sprache** im Team („hier ein Observer“)

### K2 – Kategorien der Entwurfsmuster (Stufe 2 Verstehen)
Du kannst Entwurfsmuster den Kategorien Erzeugungsmuster (Singleton, Factory), Strukturmuster (z. B. Facade) und Verhaltensmuster (Observer) zuordnen und ein weiteres Muster beschreiben.

Erklärung:
- **Erzeugungsmuster:** wie Objekte entstehen – Singleton, Factory Method
- **Strukturmuster:** wie Klassen zusammengesetzt werden – z. B. Facade (einfache Schnittstelle vor einem Subsystem), Adapter (macht eine vorhandene Klasse über die Schnittstelle nutzbar, die der aufrufende Code erwartet)
- **Verhaltensmuster:** wie Objekte zusammenarbeiten – Observer

### K3 – Observer-Muster: Einsatz und Aufbau (Stufe 4 Beurteilen)
Du kannst begründen, wann das Observer-Muster passt, und seinen Aufbau erläutern: Ein Subjekt hält eine Liste von Beobachtern (Aggregation zu einem Observer-Interface), meldet sie mit addObserver an und benachrichtigt bei jeder Änderung alle über update; jede Anzeige realisiert das Interface und überschreibt update, dank Polymorphie ruft das Subjekt für alle dieselbe Methode auf.

Erklärung:
**Wann?** Wenn mehrere Objekte (Anzeigen) automatisch informiert werden sollen, sobald sich etwas ändert – ohne dass das Subjekt sie im Einzelnen kennt.
**Aufbau:**
- **Subjekt** hält eine Liste von Beobachtern: **Aggregation** zum `Observer`-Interface („hat ein“, has-a-Beziehung; Linie mit hohler Raute am Subjekt). Das Subjekt kann mehrere Observer-Objekte haben, die auch ohne es bestehen (z. B. verschiedene Anzeigen)
- `addObserver(o : Observer) : void` meldet an (ggf. `removeObserver` meldet ab)
- bei Änderung: `notifyObservers() : void` ruft für jeden Beobachter `update()` auf
- jede Anzeige **realisiert** das Interface (gestrichelte Linie, hohles Dreieck am Interface) und überschreibt `update()` – **Polymorphie**; im Klassendiagramm steht `+ update() : void` deshalb in jeder Anzeige-Klasse noch einmal
**Ablauf:** Der Beobachter bekommt das Subjekt im Konstruktor und meldet sich dort selbst an (`subjekt.addObserver(this)`). Setzt der Client neue Daten, ruft das Subjekt bei sich selbst `notifyObservers()` auf, darin für jeden Beobachter `update()`. Hat `update()` keinen Parameter, holt sich der Beobachter die neuen Werte über einen Getter des Subjekts (z. B. `getAvgMonth()` für den monatlichen Durchschnittsverbrauch eines Stromzählers) und zeigt sie an (`display()`). Im Sequenzdiagramm folgen danach die Antworten in umgekehrter Reihenfolge der Aufrufe.

### K4 – Factory Method: Aufbau und Erweiterung (Stufe 3 Anwenden · in der Prüfung vorgegeben: englischer Text zur Factory Method (2025S))
Du kannst das Muster Factory Method anwenden: Jede konkrete Erzeugerklasse überschreibt die Fabrikmethode und liefert ihr Produkt; ein Klassenmodell nach dem Muster um ein neues Produkt mit Erzeugerklasse ergänzen. Davon zu unterscheiden ist die einfache statische Fabrikmethode, die je nach Parameter das passende Objekt liefert (Simple Factory, Stichpunkt Pseudocode).

Erklärung:
**Factory Method:**
- abstrakter Erzeuger mit abstrakter **Fabrikmethode** `erzeuge()`
- **jede konkrete Erzeugerklasse** überschreibt sie und liefert ihr Produkt
- neues Produkt → neue Produktklasse **+** neue Erzeugerklasse
- Beispiel Etiketten: Gegeben sind die abstrakte `EtikettFabrik` mit `+ erstelleEtikett() : Etikett {abstract}`, die abstrakte Klasse `Etikett` mit `+ druckeEtikett() : void {abstract}` und je Etikettart eine Fabrik- und eine Produktklasse (z. B. `EKGEtikettFabrik` und `EKGEtikett`). Für Hilfsmittel kommen zwei Klassen hinzu, aufgebaut wie die vorhandenen: `HilfsmittelEtikett` erbt von `Etikett` (Pfeil mit hohlem Dreieck an `Etikett`) und hat den Konstruktor `+ HilfsmittelEtikett(Patient)` und `+ druckeEtikett() : void`; `HilfsmittelEtikettFabrik` erbt von `EtikettFabrik` und hat `+ erstelleEtikett() : Etikett`. Der Rückgabetyp bleibt der abstrakte Typ `Etikett`
Abgrenzung **Simple Factory**: eine statische Methode liefert je nach Parameter das passende Objekt (kein Überschreiben).
Beide Formen bündeln das Erzeugen an einer Stelle – das lohnt sich auch, wenn die Erzeugung aufwendig ist.

### K5 – Einschränkung der Factory Method (Stufe 2 Verstehen · in der Prüfung vorgegeben: englischer Text zur Factory Method (2025S))
Du kannst eine Einschränkung der Factory Method erläutern: Alle Produkte brauchen eine gemeinsame Oberklasse oder Schnittstelle, und jedes neue Produkt braucht eine eigene Erzeugerklasse.

Erklärung:
Einschränkungen der Factory Method:
- alle Produkte brauchen eine **gemeinsame Oberklasse/Schnittstelle**, und die Fabrikmethode des abstrakten Erzeugers muss diese als **Rückgabetyp** haben (z. B. `erstelleEtikett() : Etikett`) – nur so können die Unterklassen unterschiedliche Produkte liefern
- jedes neue Produkt braucht eine **eigene Erzeugerklasse** → viele Klassen

### K6 – Singleton und MVC im Entwurf (Stufe 3 Anwenden)
Du kannst Singleton (privater Konstruktor, Zugriff über eine statische Methode, die immer dasselbe Objekt liefert) und das Architekturmuster MVC (Model hält Daten und Fachlogik, View stellt dar, Controller nimmt Eingaben entgegen und steuert) in einem Entwurf anwenden.

Erklärung:
- **Singleton:** privates statisches Attribut für die einzige Instanz (`- instanz : Konfiguration {static}`), **privater Konstruktor** (`- Konfiguration()`), statische Methode `+ getInstance() : Konfiguration {static}`: Sie erzeugt das Objekt meist beim ersten Aufruf und liefert danach **immer dasselbe Objekt** (z. B. Konfiguration, Datenbankverbindung).
- **MVC:**
- **Model:** Daten und Fachlogik
- **View:** Darstellung
- **Controller:** nimmt Eingaben entgegen, steuert Model und View
Singleton ist ein Entwurfsmuster; MVC und die Schichtenarchitektur (K7) sind **Architekturmuster**: Sie legen den Aufbau der ganzen Anwendung fest (PB1-5-1-6-K1).

### K7 – 3-Schichten-Architektur einer Webanwendung (Stufe 2 Verstehen)
Du kannst die 3-Schichten-Architektur einer Webanwendung beschreiben: Darstellung im Webserver bzw. Browser, Logik im Backend-Server, Daten in der Datenbank; die Webanwendung fragt beim Backend an, das die Daten aus der Datenbank holt und zurückliefert.

Erklärung:
**3-Schichten-Architektur** einer Webanwendung:
- **Darstellung:** Browser / Webserver (Oberfläche)
- **Logik:** Backend-Server (Fachlogik, API = Schnittstelle, über die die Oberfläche ihre Anfragen an das Backend stellt)
- **Daten:** Datenbank
Ablauf: Oberfläche fragt beim Backend an → Backend holt Daten aus der Datenbank → Antwort zurück.

### K8 – Singleton: Einsatz und Nachteile (Stufe 4 Beurteilen)
Du kannst den Einsatz eines Singletons beurteilen: sinnvoll, wenn eine Klasse nur ein einziges Objekt haben darf, etwa für eine zentrale Konfiguration oder eine aufwendig aufzubauende Ressource, die erst beim ersten Zugriff entsteht; nachteilig ist, dass es wie eine globale Variable wirkt, bei parallelen Threads eigens abgesichert werden muss und Klassen, die es benutzen, schwer isoliert zu testen sind.

Erklärung:
Das Singleton sichert zu, dass es **genau ein** Objekt einer Klasse gibt, und bietet einen zentralen Zugriff darauf (Aufbau siehe K6).
- **Passt**, wenn mehrere Objekte fachlich falsch oder teuer wären: zentrale Konfiguration, Protokollierung, Verbindungspool (ein Vorrat offener Datenbankverbindungen, den sich alle Programmteile teilen). Das Objekt entsteht oft erst beim ersten Zugriff.
- **Globale Variable:** Jede Klasse kann zugreifen, Abhängigkeiten werden unsichtbar.
- **Threads** (Programmteile, die gleichzeitig laufen): Ohne Absicherung können bei gleichzeitigen ersten Zugriffen zwei Objekte entstehen.
- **Tests:** Klassen, die das Singleton aufrufen, lassen sich nicht einfach mit einem Ersatzobjekt testen.
Beispiel: Ein `Logger` als Singleton ist vertretbar; den Warenkorb eines Onlineshops als Singleton anzulegen wäre falsch – jeder Kunde braucht seinen eigenen.

### K9 – Factory Method: wann sie passt (Stufe 4 Beurteilen)
Du kannst begründen, wann eine Factory Method passt: wenn der aufrufende Code Objekte benutzen soll, deren konkrete Klasse er nicht kennen muss oder die erst später hinzukommen, etwa in einem Framework; weil er nur mit den abstrakten Erzeuger- und Produktklassen arbeitet, bleibt er entkoppelt, und neue Produkte kommen ohne Eingriff in ihn hinzu.

Erklärung:
Die Factory Method trennt das **Erzeugen** eines Objekts von seiner **Verwendung**.
- Der aufrufende Code (Client) kennt nur den abstrakten `Erzeuger` mit der Fabrikmethode und das abstrakte `Produkt`.
- Welche konkrete Klasse entsteht, entscheidet die jeweilige konkrete Erzeugerklasse.
- Darum passt das Muster, wenn der Client die konkreten Klassen **nicht kennen soll oder kann** – typisch in Frameworks (Programmgerüste, die den Ablauf vorgeben), die später um eigene Klassen erweitert werden.
- Neue Produkte kommen mit einer neuen Erzeugerklasse hinzu, **ohne den Client anzufassen** (Preis: siehe Einschränkung K5).
Beispiel: Ein Berichtsmodul ruft `exporter.erzeugeDatei()` auf; ob PDF oder CSV entsteht, legt der jeweilige Exporter fest. Ein neues Format braucht keinen Eingriff ins Berichtsmodul.

### K10 – Observer: Vor- und Nachteile (Stufe 4 Beurteilen)
Du kannst Vor- und Nachteile des Observer-Musters beurteilen: Subjekt und Beobachter sind lose gekoppelt, sodass sich beide unabhängig weiterentwickeln und neue Beobachter einfach anmelden lassen; dafür können Ketten von Aktualisierungen entstehen, nicht mehr gebrauchte Beobachter müssen abgemeldet werden, und jeder Beobachter erhält auch Änderungen, die ihn nicht betreffen.

Erklärung:
Beim Observer kennt das Subjekt seine Beobachter nur über das Interface mit `update()` (Aufbau siehe K3).
- **Vorteil – lose Kopplung:** Subjekt und Beobachter lassen sich getrennt weiterentwickeln; ein neuer Beobachter wird nur angemeldet, das Subjekt bleibt unverändert.
- **Kaskaden:** Löst ein Beobachter in `update()` selbst Änderungen aus, folgen weitere Benachrichtigungen – in großen Systemen schwer zu überblicken und langsam.
- **Abmelden:** Ein nicht mehr gebrauchter Beobachter, der angemeldet bleibt, bekommt weiter Meldungen und belegt Speicher.
- **Unnötige Meldungen:** Jeder Beobachter erhält jede Änderung, auch wenn sie ihn nicht betrifft.
Beispiel: Ein Aktienkurs benachrichtigt Chart, Depotansicht und Kursalarm. Ein neuer Push-Dienst wird einfach angemeldet; ein geschlossenes Chartfenster muss sich abmelden.

## Lehrnotiz: Entwurfsmuster: Observer, Factory, Singleton, MVC und Schichten

**Aufteilung:**
- Teil A – Grundlagen: Vorteile von Entwurfsmustern K1, Kategorien K2
- Teil B – Observer: Einsatz und Aufbau K3, danach Vor- und Nachteile K10
- Pause möglich nach Teil B.
- Teil C – Factory Method: Aufbau und Erweiterung K4, Einschränkung K5, wann sie passt K9
- Teil D – Singleton und MVC: Aufbau von beiden K6, Singleton beurteilen K8
- Teil E – 3-Schichten-Architektur: K7

**Schon geprüft:** In Prüfungen: K1 (2024W), K2 (2024W, 2025S), K3 (2022S, 2024W), K4 (2025S), K5 (2025S), K7 (2022W) · Noch nicht geprüft: K6, K8–K10

**Kerngedanken:**
- Der Observer löst ein bestimmtes Problem: Ohne ihn stehen im Subjekt feste Aufrufe an jede einzelne Anzeige, und für jede neue Anzeige muss das Subjekt geändert und neu getestet werden.
- Der private Konstruktor ist der Kern des Singletons: Er verhindert, dass jemand von außen mit `new` ein zweites Objekt anlegt. Ohne ihn hätte jede Klasse ihr eigenes Objekt, und eine Änderung in einem käme bei den anderen nicht an.
- Bei „begründen“ und „beurteilen“ zählt der Bezug zur Situation: Das Wissen über das Muster steht nicht in der Aufgabe, es wird auf die Lage des Kunden angewandt. Eine Beurteilung endet mit einem Ergebnis (passt, passt nicht, passt unter einer Bedingung).
- Abgrenzung: Vor- und Nachteile von Schichten und MVC und die Ereignisbehandlung gehören zum Stichpunkt Architekturmuster. Methoden wie `notifyObservers` oder eine statische Fabrikmethode in Pseudocode zu schreiben gehört zum Stichpunkt Pseudocode.

**Typische Missverständnisse:**
- Viele denken, MVC müsse in eine der drei Kategorien passen; richtig ist: MVC ist kein Erzeugungs-, Struktur- oder Verhaltensmuster, sondern ein Architekturmuster für eine ganze Anwendung.
- Viele denken, die Factory Method passe, „weil man kein `new` mehr braucht“; richtig ist: `new` steht weiter in der Fabrikmethode. Entscheidend ist, dass der aufrufende Code nur die abstrakten Klassen kennt.

**Fachwörter:**
- Erzeugungsmuster: regelt, wie Objekte entstehen
- Strukturmuster: regelt, wie Klassen zusammengesetzt werden
- Verhaltensmuster: regelt, wie Objekte zusammenarbeiten
- Subjekt: beobachtetes Objekt, hält die Liste der Beobachter
- Aggregation: „hat ein“-Beziehung, hohle Raute am Ganzen
- Polymorphie: gleicher Aufruf, jede Klasse führt ihre Fassung aus
- Fabrikmethode: Methode, die ein Produktobjekt liefert
- lose Kopplung: Klassen kennen sich nur über ein Interface

**So fragt die IHK:**
- Entwurfsmuster kamen in vier Prüfungen vor.
- Observer: Zu mehreren Anzeigen lag ein unvollständiges Klassendiagramm vor. Verlangt waren drei Dinge:
  - die Beziehung zwischen Datenklasse und Observer-Interface ergänzen und erläutern (4 Punkte: 1 für das Aggregationssymbol, 3 für „has-a, mehrere Observer-Objekte“)
  - fehlende Methoden eintragen (2 Punkte, je 0,5)
  - die Realisierung erläutern und begründen (4 Punkte: überschreibt `update`, `notifyObservers` ruft `update` bei allen auf, Polymorphie)
- Allgemein: zwei Vorteile von Entwurfsmustern beschreiben (4 Punkte); zu einem gegebenen Strukturmuster Beispiele der anderen Kategorien nennen (2 Punkte); ein Muster für die Aktualisierung mehrerer Anzeigen nennen und begründen (4 Punkte).
- Factory Method: Vorgegeben war ein englischer Text zum Muster; zu der Aufgabe gibt es keine Lösungshinweise. Verlangt waren:
  - zwei Aspekte erläutern (6 Punkte)
  - eine Einschränkung erläutern (3 Punkte)
  - ein Klassenmodell um Produkt- und Fabrikklasse ergänzen (6 Punkte)
  - ein weiteres Muster nennen und beschreiben (3 Punkte)
- 3-Schichten-Architektur einer Webanwendung beschreiben (6 Punkte: Webserver, Backend-Server, Datenbank, Ablauf).
- Singleton und MVC wurden noch nicht einzeln gefragt; sie stehen im Prüfungskatalog.

**Fallen:**
- Teil A: Bei „beschreiben“ nur das Stichwort des Vorteils nennen, ohne einen Satz zur Wirkung.
- Teil A: Zwei Vorteile nennen, die dasselbe sagen.
- Teil A: Von einem weiteren Muster nur den Namen nennen statt seinen Zweck.
- Teil B: Die Aggregation zu den Anzeigeklassen statt zum Interface ziehen oder die Raute ans Interface setzen.
- Teil B: Die Realisierung als durchgezogene Vererbungslinie zeichnen.
- Teil B: Beim Erläutern des Aufbaus die Methoden weglassen (`addObserver`, `notifyObservers`, `update`).
- Teil B: Vor- und Nachteile nur aufzählen, ohne sie auf die Lage zu beziehen.
- Teil C: Nur die neue Produktklasse ergänzen und die Erzeugerklasse vergessen.
- Teil C: Das neue Produkt über eine Fallunterscheidung in einer vorhandenen Fabrik erzeugen statt über eine neue Erzeugerklasse.
- Teil C: Als Rückgabetyp der neuen Fabrikmethode das konkrete Produkt schreiben statt des abstrakten Typs.
- Teil C: Die überschriebenen Methoden in den neuen Klassen nicht noch einmal aufführen.
- Teil C: Eine Vererbung weglassen oder den Pfeil falsch herum zeichnen.
- Teil C: Die Einschränkung nur nennen, ohne Grund und ohne Bezug zum Fall.
- Teil C: Als Begründung nur „leicht erweiterbar“ schreiben, ohne zu sagen, warum (der aufrufende Code arbeitet nur mit abstraktem Erzeuger und Produkt).
- Teil D: Beim Singleton den privaten Konstruktor oder `{static}` an Attribut und Methode vergessen.
- Teil D: Ein Singleton nur mit „dann ist der Zugriff überall einfach“ rechtfertigen; das allein reicht nicht. Der Grund muss sein, dass mehrere Objekte fachlich falsch oder teuer wären.
- Teil D: Ein Singleton nur loben, ohne einen Nachteil zu nennen.
- Teil D: Bei MVC Fachregeln und Berechnungen dem Controller zuordnen; sie gehören ins Model.
- Teil E: Nur die drei Schichten aufzählen, ohne zu beschreiben, wie sie zusammenarbeiten.
- Teil E: Die Oberfläche direkt auf die Datenbank zugreifen lassen; der Weg führt immer über das Backend.
