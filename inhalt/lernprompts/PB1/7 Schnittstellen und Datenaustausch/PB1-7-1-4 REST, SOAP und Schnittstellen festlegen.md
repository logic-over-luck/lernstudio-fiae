Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Schnittstellen und Datenaustausch › Datenaustausch und Schnittstellen › REST, SOAP und Schnittstellen festlegen

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

## Stoff: REST, SOAP und Schnittstellen festlegen

Ziel: Das Konzept einer REST-API beschreiben, CRUD auf HTTP-Methoden abbilden, Anfragen nach einer API-Dokumentation zusammenstellen, Statuscodes deuten, SOAP kennen und eine Schnittstelle festlegen. Den Ablauf einer REST-Abfrage als Sequenzdiagramm zeigt PB1-4.

Das muss ich können:

### K1 – Konzept einer REST-API (Stufe 2 Verstehen)
Du kannst das Konzept einer REST-API beschreiben: Ressourcen sind über einen Webserver verfügbar und eindeutig über eine URL ansprechbar, Client und Server tauschen nur Daten aus und sind lose gekoppelt, jede Anfrage steht für sich (zustandslos).

Erklärung:
**REST** (API = Programmierschnittstelle: festgelegte Aufrufe, über die ein Programm Daten oder Funktionen eines anderen nutzt):
- **Ressourcen** über einen Webserver erreichbar, eindeutig per **URL** (`/kunden/42`)
- Client und Server tauschen nur Daten aus → **lose gekoppelt**
- **zustandslos**: jede Anfrage enthält alles Nötige
- nutzt die **HTTP-Methoden** und **Statuscodes**

### K2 – CRUD und HTTP-Methoden (Stufe 2 Verstehen)
Du kannst die CRUD-Operationen erläutern und ihnen HTTP-Methoden zuordnen: Create – POST (oder PUT), Read – GET, Update – PUT oder PATCH, Delete – DELETE.

Erklärung:
- **C**reate → `POST` (oder `PUT`)
- **R**ead → `GET`
- **U**pdate → `PUT` (ganz ersetzen) oder `PATCH` (teilweise)
- **D**elete → `DELETE`

### K3 – HTTP-Anfrage nach API-Dokumentation (Stufe 3 Anwenden)
Du kannst nach der Dokumentation einer vorhandenen API eine HTTP-Anfrage zusammenstellen und ihre Bestandteile ergänzen: Endpoint-URL mit Pfad und Abfrageparametern, HTTP-Methode, Kopfzeilen für Metainformationen wie Inhaltstyp und Autorisierung (API-Schlüssel oder Token weisen den Aufrufer aus), Body mit den Daten, oft als JSON.

Erklärung:
Bestandteile einer Anfrage nach API-Doku:
- **Endpoint-URL**: **Pfad** (`/v1/termine`, benennt die Ressource) und **Abfrageparameter** (nach dem `?`, filtern die Antwort): `https://api.example.com/v1/termine?datum=2026-10-14`
- **Methode**: `GET`, `POST`, …
- **Header**: `Content-Type: application/json`, `Authorization: Bearer <token>` (Token = vom Server ausgestellte Zugangskennung) oder API-Schlüssel
- **Body** (bei POST/PUT/PATCH; GET hat keinen Body): die Daten, meist als JSON

### K4 – Klassen der HTTP-Statuscodes (Stufe 1 Wiedergeben)
Du kannst die Bedeutung der HTTP-Statuscode-Klassen nennen: 2xx Anfrage erfolgreich bearbeitet, 4xx Fehler durch die Anfrage des Clients (z. B. 404 nicht gefunden), 5xx Fehler auf der Serverseite.

Erklärung:
- **2xx:** erfolgreich (200 OK, 201 Created)
- **4xx:** Fehler durch den **Client** (400 Bad Request, 401 nicht angemeldet, 403 verboten, 404 nicht gefunden)
- **5xx:** Fehler auf dem **Server** (500 Internal Server Error, 503 nicht verfügbar)

### K5 – SOAP im Unterschied zu REST (Stufe 1 Wiedergeben)
Du kannst SOAP als weitere Möglichkeit zur Nutzung von Diensten nennen: ein Protokoll mit Nachrichten in XML und einer festen Schnittstellenbeschreibung, im Unterschied zum Architekturstil REST auf Grundlage von HTTP.

Erklärung:
**SOAP**:
- **Protokoll** mit Nachrichten in **XML**
- feste Schnittstellenbeschreibung (WSDL: XML-Datei, die die Operationen des Dienstes beschreibt – mehr in PB1-7-1-6)
- im Unterschied zu **REST**, einem **Architekturstil** auf Grundlage von HTTP, meist mit JSON

### K6 – Schnittstelle zwischen zwei Anwendungen festlegen (Stufe 3 Anwenden)
Du kannst eine Schnittstelle zwischen zwei Anwendungen festlegen: Austauschformat (z. B. JSON oder XML mit Schema), Endpunkte mit Methoden, Fehler- und Statusrückmeldungen, Authentifizierung.

Erklärung:
Eine Schnittstelle festlegen heißt beschreiben:
- **Austauschformat** (JSON oder XML mit Schema)
- **Endpunkte** mit Methoden
- **Fehler- und Statusrückmeldungen**
- **Authentifizierung** (API-Schlüssel, Token)

### K7 – Interne und externe Schnittstellen (Stufe 2 Verstehen)
Du kannst interne Schnittstellen (zwischen den Modulen oder Komponenten einer Software) von externen Schnittstellen (zu Benutzern, Geräten und anderen Systemen) unterscheiden: Externe Schnittstellen verbinden auch heterogene Systeme miteinander und vermeiden so Insellösungen, in denen Daten doppelt erfasst werden.

Erklärung:
Eine **Schnittstelle** ist die festgelegte Stelle, an der zwei Systeme oder Teile miteinander kommunizieren – mit vereinbarten Daten und Regeln.
- **intern:** zwischen Modulen, Klassen oder Komponenten derselben Software, z. B. die Methode, über die die Oberfläche den Warenkorb-Dienst aufruft. Sie bestimmt, wie lose die Teile gekoppelt sind.
- **extern:** nach außen – zu Benutzern (Oberfläche), zu anderen Programmen (API, z. B. REST), zu Geräten (Drucker, Scanner) und über Dateiformate (Import, Export). So lassen sich auch **heterogene** (unterschiedlich gebaute) Systeme verbinden.
Ohne externe Schnittstellen entstehen **Insellösungen**: Daten müssen doppelt erfasst oder von Hand übertragen werden.
Beispiel: Der Webshop gibt Bestellungen über eine Schnittstelle direkt an die Warenwirtschaft weiter, statt dass jemand sie abtippt.

### K8 – Idempotenz: PUT gegen POST (Stufe 2 Verstehen)
Du kannst POST und PUT anhand der Idempotenz unterscheiden: Eine mehrfach gesendete PUT-Anfrage hinterlässt immer denselben Zustand, weil sie die Ressource unter einer bekannten URL ersetzt; jede wiederholte POST-Anfrage legt dagegen eine weitere Ressource an, sodass etwa eine doppelt abgeschickte Bestellung zweimal gespeichert wird.

Erklärung:
**Idempotent** heißt: Ob eine Anfrage einmal oder zehnmal ankommt, der Zustand auf dem Server ist danach derselbe.
- **PUT** `/kunden/42` mit vollständigen Daten → Kunde 42 hat genau diesen Stand, egal wie oft gesendet. Idempotent.
- **POST** `/kunden` → der Server legt jedes Mal einen neuen Kunden mit neuer ID an. Nicht idempotent.
- GET und DELETE sind ebenfalls idempotent (ein zweites DELETE ändert nichts mehr, die Ressource bleibt weg).
Warum wichtig: Bei Netzproblemen wiederholen Clients Anfragen oft automatisch. Bei PUT ist das harmlos, bei POST entstehen Dubletten – deshalb sichert man POST z. B. mit einer eindeutigen Anfrage-ID ab oder sperrt den Absenden-Knopf nach dem ersten Klick.

## Lehrnotiz: REST, SOAP und Schnittstellen festlegen

**Aufteilung:**
- Was eine Schnittstelle ist, intern und extern: K7
- Konzept einer REST-API: K1
- CRUD mit HTTP-Methoden, darauf aufbauend Idempotenz: K2, K8
- Pause möglich nach CRUD und Idempotenz.
- Anfrage nach API-Dokumentation und Statuscodes der Antwort: K3, K4
- SOAP als weitere Möglichkeit: K5
- Eine Schnittstelle festlegen, hier kommt alles zusammen: K6

**Schon geprüft:** In Prüfungen: K1 (2024S), K2 (2024S), K3 (2024S), K4 (2024S) · Noch nicht geprüft: K5–K8

**Kerngedanken:**
- In der URL benennt der Pfad die Ressource; Abfrageparameter stehen nach dem `?`, sind durch `&` getrennt und filtern. Eine GET-Anfrage hat keinen Body.
- Über API-Schlüssel oder Token kann der Anbieter den Zugriff erlauben oder sperren und die Nutzung zählen und begrenzen. Ein Schlüssel gehört deshalb nicht offen in den Quellcode einer Webseite: Wer ihn kennt, nutzt die API mit den Rechten und auf Kosten des Inhabers.
- Eine Schnittstelle ist erst festgelegt, wenn jede Angabe so konkret ist, dass beide Seiten unabhängig voneinander entwickeln können.
- Abgrenzung: Hier wird SOAP nur genannt und von REST unterschieden. Die sechs REST-Prinzipien, der Aufbau einer SOAP-Nachricht und die Auswahl zwischen beiden gehören zum Nachbarstichpunkt.

**Typische Missverständnisse:**
- Viele denken, „zustandslos“ heiße, der Server speichere nichts; richtig ist: Die Ressourcen liegen dauerhaft auf dem Server, er merkt sich nur keinen Sitzungszustand zwischen zwei Anfragen.
- Viele denken, „extern“ heiße „über das Internet“; richtig ist: Extern heißt aus der Software hinaus – auch Oberfläche, Gerät und Dateiexport zählen.

**Fachwörter:**
- Ressource: Datenobjekt, eindeutig per URL ansprechbar
- zustandslos: jede Anfrage enthält alles Nötige
- Endpoint-URL: Adresse mit Pfad und Abfrageparametern
- Header: Kopfzeilen mit Metainformationen
- Body: die Daten, meist als JSON
- idempotent: Wiederholung ändert den Zustand nicht
- Insellösung: System ohne Verbindung, Daten doppelt erfasst

**So fragt die IHK:**
- Bisher eine Aufgabe (rund 25 Punkte): Eine Anwendung soll über eine REST-API arbeiten.
- Konzept beschreiben (2 Punkte). Gezählt wurden: Ressource über Webserver, eindeutig per URL, nur Datenaustausch/lose gekoppelt, zustandslos. Andere sinnvolle Antworten waren möglich.
- CRUD in einer Tabelle erläutern und HTTP-Methoden zuordnen (6 Punkte, eine Zeile war als Beispiel vorgegeben). Für C galt „POST/PUT“, für U „PUT/PATCH“.
- Bedeutung der Bestandteile einer gegebenen Anfrage ergänzen (3 Punkte). Gezählt wurden Endpoint-URL, HTTP-Methode und Body für Daten; die Header-Zeile war vorgegeben.
- Bedeutung von 2XX, 4XX, 5XX nennen (3 Punkte). Dazu kam ein Sequenzdiagramm einer GET-Abfrage (gehört zu PB1-4).
- SOAP, Schnittstelle festlegen, intern/extern und Idempotenz wurden noch nicht eigens geprüft. Zu erwarten ist „Nennen Sie vier Festlegungen …“ oder „Erläutern Sie, warum …“ mit 2–4 Punkten. Die Fachbegriffe müssen fallen.

**Fallen:**
- Den Nutzen externer Schnittstellen nur mit „ist praktischer“ begründen statt mit Insellösung und doppelter Erfassung.
- REST nur als „es wird JSON verschickt“ beschreiben.
- Bei CRUD nur die Methode nennen; verlangt ist je Buchstabe auch die Bedeutung (Anlegen, Auslesen, Ändern, Löschen einer Ressource).
- PUT und PATCH vertauschen: PUT braucht alle Felder, für ein einzelnes Feld passt PATCH.
- Methode und Pfad passen nicht zusammen, oder der Pfad benennt die Ressource nicht eindeutig.
- Bei PUT gegen POST nur das Ergebnis nennen, ohne die Begründung „idempotent“ oder „nicht idempotent“.
- Die Daten einer POST-Anfrage in die URL schreiben oder die Filter einer GET-Anfrage in einen Body.
- Einen Header vergessen, den die Dokumentation für jede Anfrage verlangt, oder den Inhaltstyp bei einer Anfrage mit Body.
- Die Bestandteile einer Anfrage umschreiben, statt sie mit den Fachbegriffen zu benennen.
- 4xx als „Netzwerkfehler“ deuten oder zu einem einzelnen Code nur seine Bedeutung nennen, ohne die Klasse.
- Beim Festlegen nur die vier Überschriften aufzählen, ohne konkrete Festlegung zum Fall.
- Authentifizierung mit Verschlüsselung verwechseln; gemeint ist, wie sich der Aufrufer ausweist.
