Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Datenmodellierung und Datenhaltung › Datenmodelle und Datenhaltung › Relationale und NoSQL-Datenbanken

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

## Stoff: Relationale und NoSQL-Datenbanken

Ziel: Relationale und NoSQL-Datenbanken unterscheiden, Begriffe zuordnen und für eine Anwendung begründet eine Datenbankart vorschlagen. Dokumente einbetten steht in PB1-7.

Das muss ich können:

### K1 – Relationale gegen NoSQL-Datenbanken (Stufe 2 Verstehen)
Du kannst relationale Datenbanken (Tabellen mit festem Schema, Beziehungen über Schlüssel, Transaktionssicherheit) von NoSQL-Datenbanken (flexibles Schema) unterscheiden und Arten von NoSQL-Datenbanken nennen: dokumentenorientiert, Schlüssel-Wert, spaltenorientiert, Graph.

Erklärung:
- **Relational:** Tabellen mit **festem Schema** (Spalten und Datentypen vorab festgelegt), Beziehungen über **Schlüssel**, **Transaktionssicherheit** (Änderungen gelten ganz oder gar nicht), Abfrage mit SQL
- **NoSQL:** **flexibles Schema**, oft horizontal skalierbar
Arten von NoSQL:
- **dokumentenorientiert** (MongoDB)
- **Schlüssel-Wert** (Redis)
- **spaltenorientiert** (Cassandra)
- **Graph** (Neo4j)

### K2 – Begriffe relational und dokumentenorientiert zuordnen (Stufe 2 Verstehen)
Du kannst Begriffe relationaler und dokumentenorientierter Datenbanken einander zuordnen: Tabelle – Collection, Datensatz – Dokument, Spalte – Feld, Datenbank – Datenbank.

Erklärung:
- Tabelle (Table) ↔ **Collection**
- Datensatz (Zeile; Record/Row) ↔ **Dokument** (Document)
- Spalte (Column) ↔ **Feld** (Field)
- Datenbank (Database) ↔ Datenbank
In der Prüfung standen die Begriffe auf Englisch.

### K3 – Vorteile von NoSQL wie MongoDB (Stufe 2 Verstehen · in der Prüfung vorgegeben: englischer Text zu MongoDB)
Du kannst Vorteile einer NoSQL-Datenbank wie MongoDB gegenüber relationalen Datenbanken aus einem englischen Text erläutern: flexibles Datenmodell für neue Funktionen, schnellere Abfragen ohne Joins, Datenstrukturen passend zum Programm.

Erklärung:
Vorteile einer Dokumentendatenbank (aus dem Text herauslesen):
- **flexibles Datenmodell**: neue Felder ohne Schemaänderung
- **schnellere Abfragen**, weil Zusammengehöriges in einem Dokument liegt (**keine Joins**)
- Datenstrukturen **passen zum Programm** (Objekt ≈ Dokument)
Der englische Text wird in der Prüfung vorgegeben.

### K4 – Datenbankart für eine Anwendung wählen (Stufe 4 Beurteilen)
Du kannst für eine Anwendung ein dokumentenorientiertes oder ein relationales DBMS vorschlagen und die Wahl begründen, zum Beispiel flexible Ausstattungsmerkmale und große Datenmengen für NoSQL, Transaktionssicherheit und Konsistenz für relational.

Erklärung:
Entscheidung begründen:
- **NoSQL (dokumentenorientiert):** wechselnde, unterschiedliche Merkmale (Ausstattung je Produkt verschieden), sehr große Datenmengen, schnelle Lesezugriffe
- **Relational:** feste Struktur, viele Beziehungen, **Transaktionssicherheit und Konsistenz** wichtig (Buchungen, Bestellungen, Geld)
Am Ende eine klare Empfehlung mit dem ausschlaggebenden Grund.

### K5 – Skalierung relationaler und NoSQL-Datenbanken (Stufe 4 Beurteilen)
Du kannst begründen, warum relationale Datenbanken meist vertikal (ein leistungsstärkerer Server) und NoSQL-Datenbanken meist horizontal (weitere Server im Verbund) skaliert werden (Skalierungsarten: PB1-12-2-2): Joins und sofortige Konsistenz über alle Tabellen lassen sich schwer auf viele Rechner verteilen, während NoSQL-Daten ohne feste Verknüpfungen auf viele Server aufgeteilt werden können.

Erklärung:
**Skalieren** heißt: mehr Daten oder Zugriffe bewältigen (die beiden Arten ausführlich in PB1-12-2-2).
- **vertikal (scale up):** ein Server bekommt mehr CPU, RAM, schnellere SSDs. Einfach, aber irgendwann am Ende und teuer.
- **horizontal (scale out):** weitere Server kommen dazu, die Daten werden aufgeteilt. Fast beliebig erweiterbar, oft mit günstiger Standardhardware.
Warum die typische Zuordnung?
- Relational: Joins über Tabellen und ACID-Transaktionen setzen voraus, dass alle beteiligten Daten sofort konsistent erreichbar sind – über viele Rechner verteilt wird das langsam und aufwendig.
- NoSQL: Ein Dokument oder Schlüssel-Wert-Paar ist in sich abgeschlossen und kann auf irgendeinem Server liegen; dafür wird oft auf sofortige Konsistenz verzichtet.
Beispiel: Ein Onlineshop mit Millionen Sitzungen legt die Warenkörbe in eine verteilte NoSQL-Datenbank, die Buchhaltung bleibt relational.

### K6 – BASE und Eventual Consistency (Stufe 2 Verstehen)
Du kannst das BASE-Prinzip vieler verteilter NoSQL-Datenbanken vom ACID-Prinzip relationaler Datenbanken unterscheiden: Bei BASE geht Verfügbarkeit vor sofortiger Konsistenz, Kopien der Daten dürfen kurz voneinander abweichen und gleichen sich erst nach einer Weile an (Eventual Consistency).

Erklärung:
**ACID** (PB1-6-1-5-K1) verlangt, dass nach jeder bestätigten Transaktion sofort überall der neue, regelgerechte Stand gilt.
**BASE** (Basically Available, Soft State, Eventual Consistency) setzt andere Prioritäten – passend zu Daten, die auf viele Server verteilt und mehrfach kopiert sind:
- **Basically Available:** Das System antwortet immer, auch wenn ein Teil ausfällt.
- **Soft State:** Der Zustand kann sich ändern, während die Kopien sich abgleichen.
- **Eventual Consistency:** Irgendwann sind alle Kopien gleich – aber nicht sofort.
Beispiel: Ein neuer Kommentar in einem sozialen Netz erscheint bei manchen Nutzern ein paar Sekunden später. Für Kontostände wäre das untragbar – dort braucht man ACID.

### K7 – Nachteile von NoSQL-Datenbanken (Stufe 2 Verstehen)
Du kannst Nachteile von NoSQL-Datenbanken gegenüber relationalen beschreiben: Es gibt keine einheitliche Abfragesprache wie SQL, Verknüpfungen zwischen Datenbeständen (Joins) sind kaum möglich, und Integritätsprüfungen wie die eines Fremdschlüssels muss die Anwendung selbst programmieren.

Erklärung:
Die Freiheiten von NoSQL (flexibles Schema, leichte Verteilung) haben eine Kehrseite:
- **Keine einheitliche Abfragesprache:** Jedes Produkt fragt anders ab; Wissen und Code lassen sich schlecht übertragen, ein Wechsel ist aufwendig.
- **Kaum Joins:** Was zusammen gebraucht wird, muss eingebettet oder im Programm zusammengesucht werden; Auswertungen über viele Beziehungen werden mühsam. Ausnahme: Graphdatenbanken sind gerade für vernetzte Daten gebaut (K8).
- **Integrität im Code:** Fremdschlüssel, CHECK oder NOT NULL prüft das DBMS oft nicht. Verweist eine Bestellung auf einen gelöschten Kunden, merkt das nur die Anwendung – wenn sie es prüft.
Deshalb: Für stark verknüpfte Daten mit strengen Regeln (Rechnungen, Lagerbestand) bleibt relational meist die bessere Wahl (PB1-6-1-4-K4).

### K8 – NoSQL-Arten und ihr Einsatz (Stufe 2 Verstehen)
Du kannst die vier NoSQL-Arten typischen Einsätzen zuordnen: Schlüssel-Wert für schnellen Zugriff über einen Schlüssel (Sitzungsdaten, Cache), dokumentenorientiert für Datensätze mit wechselndem Aufbau (Blog, CMS, Produktkatalog), Graph für stark vernetzte Daten (Follower, Empfehlungen) und spaltenorientiert für Auswertungen weniger Spalten über sehr viele Datensätze.

Erklärung:
Die NoSQL-Arten sind jeweils auf einen Zugriffsweg spezialisiert – das bestimmt den Einsatz:
- **Schlüssel-Wert:** Wert nur über seinen Schlüssel abrufbar, dafür extrem schnell → Sitzungsdaten, Warenkorb, Cache.
- **Dokumentenorientiert:** JSON-ähnliche Dokumente mit flexiblem Aufbau → Blogbeiträge, CMS-Seiten, Produkte mit unterschiedlichen Merkmalen.
- **Graph:** Knoten und Kanten → soziale Netze (wer folgt wem), Empfehlungen, Betrugserkennung über Verbindungen.
- **Spaltenorientiert:** Werte einer Spalte liegen zusammen → Auswertungen wie Umsatzsummen über Millionen Zeilen.
Achtung beim Beispiel: Die Lehrbücher nennen Cassandra als „spaltenorientiert“. Genauer ist Cassandra ein Wide-Column-Store (Zeilen mit frei wählbaren Spalten, gebaut für sehr viele Schreibzugriffe); die Beschreibung oben passt auf Analyse-Spaltenspeicher im Data Warehouse. Für die Prüfung genügt Cassandra als Beispiel.
Faustregel: Erst fragen, wie die Anwendung auf die Daten zugreift, dann die Art wählen.

### K9 – Datenmodelle von Datenbanken (Stufe 2 Verstehen)
Du kannst Datenbanken nach ihrem Datenmodell unterscheiden: hierarchisch (Baum, jeder Datensatz hat genau einen Vorgänger), Netzwerkmodell (mehrere Vorgänger, dadurch auch m:n), relational (verknüpfte Tabellen), objektorientiert (Objekte samt Methoden), objektrelational (Tabellen mit komplexen, objektartigen Datentypen) und NoSQL.

Erklärung:
Das **Datenmodell** legt fest, wie ein DBMS Daten und Beziehungen grundsätzlich ablegt.
- **hierarchisch:** Baumstruktur, jeder Datensatz außer der Wurzel hat genau einen Vorgänger; m:n lässt sich nur mit Redundanz abbilden. Ähnlich: ein Dateisystem, ein XML-Dokument.
- **Netzwerkmodell:** Erweiterung, ein Datensatz kann mehrere Vorgänger haben → m:n ohne Redundanz.
- **relational:** Tabellen, verknüpft über Schlüssel – heute Standard.
- **objektorientiert:** speichert Objekte mit Attributen und Methoden direkt; mächtig, aber komplex und selten.
- **objektrelational:** relationale Tabellen mit eigenen, komplexen Datentypen.
- **NoSQL:** Sammelbegriff für Dokument-, Schlüssel-Wert-, Graph- und spaltenorientierte Modelle.
In der Prüfung geht es meist um relational gegen NoSQL; die übrigen Modelle helfen beim Einordnen.

## Lehrnotiz: Relationale und NoSQL-Datenbanken

**Aufteilung:**
- Relational gegen NoSQL, übrige Datenmodelle zum Einordnen: K1, K9
- Begriffe zuordnen und NoSQL-Arten einsetzen: K2, K8
- Vorteile aus einem englischen Text erläutern: K3
- Pause möglich nach den Vorteilen.
- Nachteile von NoSQL, BASE gegen ACID: K7, K6
- Skalierung begründen: K5
- Datenbankart begründet vorschlagen: K4 – hier dient alles Vorige als Argument

**Schon geprüft:** In Prüfungen: K2 (2023W), K3 (2022S), K4 (2022W) · Noch nicht geprüft: K1, K5–K9

**Kerngedanken:**
- Festes Schema heißt: Spalten und Datentypen sind vorab festgelegt, jede Zeile ist gleich aufgebaut. Ein Merkmal, das nur wenige Datensätze haben, braucht dort eine Schemaänderung und bleibt in den meisten Zeilen leer; ein Dokument hat nur seine eigenen Felder.
- Bei der Textaufgabe stehen die Vorteile im vorgegebenen englischen Text. Verlangt ist: herauslesen, sinngemäß auf Deutsch wiedergeben und sagen, was das der beschriebenen Anwendung bringt.
- Beim Vorschlagen einer Datenbankart können beide Richtungen richtig sein. Punkte bringen die Argumente, und nur solche, die zur beschriebenen Anwendung passen.
- Im hierarchischen Modell hat ein Datensatz nur einen Vorgänger. Gehört er zu mehreren übergeordneten, muss er mehrfach abgelegt werden – daher die Redundanz bei m:n.
- Abgrenzung: Die vier ACID-Eigenschaften einzeln gehören zum Stichpunkt Transaktionen und Datenintegrität, das Einbetten von Dokumenten zu PB1-7.

**Typische Missverständnisse:**
- Viele denken, NoSQL heiße „ohne Struktur“ oder einfach „ohne Tabellen“; richtig ist: Die Struktur ist nur nicht für alle Datensätze gleich vorgeschrieben.
- Viele denken, bei Eventual Consistency gingen Daten verloren; richtig ist: Die Kopien weichen nur kurz voneinander ab und gleichen sich dann an.

**Fachwörter:**
- festes Schema: Spalten und Datentypen vorab festgelegt
- flexibles Schema: Datensätze dürfen verschieden aufgebaut sein
- Collection: Sammlung von Dokumenten, entspricht der Tabelle
- Dokument: ein ganzer Datensatz, in sich abgeschlossen
- Feld: einzelne Angabe im Dokument, entspricht der Spalte
- Transaktionssicherheit: zusammengehörige Änderungen gelten ganz oder gar nicht
- Eventual Consistency: Kopien werden erst nach einer Weile gleich
- horizontal skalieren: weitere Server im Verbund hinzunehmen

**So fragt die IHK:**
- Bisher gab es Teilaufgaben in drei Prüfungen, jeweils als Teil einer größeren Datenbankaufgabe.
- Einmal waren drei Vorteile von MongoDB aus einem englischen Herstellertext zu erläutern (9 Punkte, 3 je Vorteil). Weitere Vorteile aus dem Text waren zugelassen.
- Einmal war für Kunden- und Auftragsdaten ein dokumentenorientiertes oder relationales DBMS vorzuschlagen und mit zwei Argumenten zu begründen (5 Punkte: 1 für die Entscheidung, 2 je Argument). Beide Richtungen zählten.
- Einmal waren englische Begriffe zuzuordnen (Table, Record/Row, Column; Database war vorgegeben; 1 Punkt je Pfeil). Die Einleitung sagte, dass verteilte Datenbanken ACID und hohe Verfügbarkeit schwer zugleich schaffen. Danach folgte das Einbetten in JSON.
- Skalierung, BASE, Nachteile, Einsatz der Arten und die übrigen Datenmodelle wurden nicht eigens gefragt. Sie liefern Argumente fürs Begründen.

**Fallen:**
- Relational nur mit „Tabellen“ beschreiben; dazu gehören das feste Schema und die Beziehungen über Schlüssel.
- Produktnamen nennen, wo die vier Arten gefragt sind.
- Die Zuordnung nur auf Deutsch können: In der Prüfung stand sie englisch (Table → Collection, Record/Row → Document, Column → Field).
- Das Dokument der Spalte zuordnen statt dem ganzen Datensatz.
- Bei „erläutern“ nur Stichworte wie „flexibel, schnell, einfach“ schreiben, ohne Begründung.
- Vorteile nennen, die nicht im Text stehen („billiger“, „sicherer“), oder den Text nur übersetzen, ohne Bezug zur Anwendung.
- Als Nachteil „NoSQL ist unsicher“ oder „langsamer“ schreiben; gemeint ist, dass die Anwendung Prüfungen selbst programmieren muss.
- Verzögert sichtbare Änderungen mit „der Server ist langsam“ erklären statt mit Kopien, die sich erst angleichen.
- Bei der Skalierung nur zuordnen, nur eine Seite begründen oder „NoSQL ist schneller“ als Grund angeben.
- Beim Vorschlag nur die Entscheidung oder Schlagworte ohne Bezug zur Anwendung liefern; „es kommt darauf an“ ist keine Empfehlung.
- Ein Argument verwenden, das zur Lage nicht passt, etwa „flexible Merkmale“, obwohl alle Datensätze gleich aufgebaut sind.
