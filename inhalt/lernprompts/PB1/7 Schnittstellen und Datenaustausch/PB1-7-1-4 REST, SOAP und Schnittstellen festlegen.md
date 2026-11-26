Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Schnittstellen und Datenaustausch › Datenaustausch und Schnittstellen › REST, SOAP und Schnittstellen festlegen

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt. Fehlende Nummern (etwa K4) sind Absicht.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet, und für alles, was eine Erklärung im Stoff nur nebenbei erwähnt.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen. Die Begründungen nimmst du aus dem Stoff und der Lehrnotiz; ergänzt du eine eigene, kennzeichne sie mit „Hintergrund, nicht aus dem Stoff: …“. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, reicht die Erklärung aus dem Stoff. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber nur mit dem, was du mir vorher erklärt hast. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Sag bei jeder Aufgabe, wie viele Punkte sie hat (ein Punkt je verlangtem Teil). Bewerte nur, was verlangt war, mit „x von y Punkten“ und dem, was fehlte: ✅ nur bei voller Punktzahl, ⚠️ bei Teilpunkten, ❌ bei null. Stimmt der Inhalt und fehlt nur das Fachwort, gibt es den Punkt: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Zeichnungen mache ich auf Papier und lade ein Foto hoch.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im IHK-Stil (Kundensituation, Teilaufgaben mit Punkten, zusammen etwa 10–12, eine nach der anderen). Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K8 – Wie eine wiederholte POST-Anfrage zur Dublette führt: (1) Der Client sendet POST /kunden mit den Kundendaten im Body an den Server. (2) Der Server legt einen neuen Kunden mit neuer ID an und schickt die Antwort 201 Created zurück. (3) Die Antwort geht durch ein Netzproblem verloren; der Client weiß nach Ablauf seiner Wartezeit (Timeout) nicht, ob der Server die Anfrage verarbeitet hat. (4) Der Client sendet dieselbe POST-Anfrage erneut; der Server hält sie für eine neue Anfrage und legt einen zweiten Kunden mit weiterer ID an. (5) Bei PUT /kunden/42 nennt die URL die Zielressource: Die wiederholte Anfrage ersetzt Kunde 42 erneut durch dieselben Daten, der Zustand bleibt gleich. (6) Trägt die POST-Anfrage eine eindeutige Anfrage-ID, erkennt der Server die Wiederholung an der gespeicherten ID und legt keine weitere Ressource an. Vereinfacht: Geht schon die Anfrage selbst verloren, ist die Wiederholung auch bei POST unschädlich; der Client kann diesen Fall aber nicht vom Verlust der Antwort unterscheiden.

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
