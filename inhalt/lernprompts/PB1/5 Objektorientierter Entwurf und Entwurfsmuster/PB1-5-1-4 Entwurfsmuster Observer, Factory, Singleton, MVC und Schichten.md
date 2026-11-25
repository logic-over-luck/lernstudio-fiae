Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Objektorientierter Entwurf und Entwurfsmuster › Objektorientierter Entwurf › Entwurfsmuster: Observer, Factory, Singleton, MVC und Schichten

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen. Wo etwas abläuft oder funktioniert (Technik, Verfahren, Protokoll, Rechenweg), erklär zuerst Schritt für Schritt, was passiert, mit den richtigen Begriffen und dem Warum dahinter. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Die Erklärungen im Stoff sind das Minimum für die Prüfung, nicht die Grenze. Wo dort nur steht, was es gibt, erklär mir auch, wie es funktioniert, und trenn sichtbar, was die IHK lesen will und was nur Hintergrund zum Verstehen ist. Stehen in der Lehrnotiz „Abläufe zum Verstehen“, bau sie in deine Erklärung ein.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag – klein heißt wenig auf einmal, nicht oberflächlich. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Die Aufgaben sollen mich vor allem anwenden lassen, nicht nur die Erklärung nachsagen. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K6 – MVC: Weg einer Benutzereingabe: (1) Der Benutzer löst in der Oberfläche eine Eingabe aus, und die View gibt dieses Ereignis an den Controller weiter. (2) Der Controller wertet die Eingabe aus und ruft die passende Methode des Models auf. (3) Das Model wendet die Fachlogik an, also Prüfungen und Berechnungen, und ändert seine Daten. (4) Der Controller veranlasst anschließend die View, sich zu aktualisieren. (5) Die View liest die aktuellen Daten aus dem Model und stellt sie dar; sie enthält selbst keine Fachlogik. Vereinfacht: In der klassischen Variante meldet sich die View als Observer beim Model an und wird von ihm direkt benachrichtigt, statt vom Controller angestoßen zu werden.
- K8 – Singleton: zwei Objekte bei parallelem Erstzugriff: (1) Die Methode getInstance prüft, ob das statische Attribut instanz noch leer (null) ist, und erzeugt nur dann das Objekt. (2) Thread A ruft getInstance auf, stellt fest, dass instanz leer ist, und wird unterbrochen, bevor er das Objekt erzeugt hat. (3) Thread B ruft getInstance auf, findet instanz ebenfalls leer, erzeugt ein Objekt und speichert es in instanz. (4) Thread A läuft weiter, erzeugt ein zweites Objekt und überschreibt damit instanz. (5) Beide Threads arbeiten nun mit verschiedenen Objekten, die Zusicherung „genau ein Objekt“ ist verletzt. (6) Zur Absicherung wird der Abschnitt aus Prüfung und Erzeugung gesperrt (synchronisiert), sodass ihn immer nur ein Thread gleichzeitig ausführt.

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
