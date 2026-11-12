Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz in Anwendungen › Zugriff, Datenschutz, Prüfung und Beratung › Authentifizierung, Autorisierung und Identity & Access Management

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

## Stoff: Authentifizierung, Autorisierung und Identity & Access Management

Ziel: Anmeldung und Berechtigungen in Anwendungen umsetzen, OAuth2 und Single-Sign-On verstehen und Benutzer, Rollen und Rechte zentral verwalten.

Das muss ich können:

### K1 – Identity & Access Management und Berechtigungskonzept (Stufe 2 Verstehen)
Du kannst Identity & Access Management und ein Berechtigungskonzept erläutern: Benutzer, Rollen und Rechte werden zentral verwaltet, die Anmeldung kann an einen Identity Provider abgegeben werden; Zutritt, Zugang und Zugriff werden nach der Organisationsstruktur geregelt, indem Rechte an Rollen statt an einzelne Personen vergeben werden.

Erklärung:
**IAM** = Benutzer, Rollen und Rechte **zentral** verwalten; die Anmeldung kann an einen **Identity Provider** abgegeben werden (zentraler Anmeldedienst, der für mehrere Anwendungen prüft, wer sich anmeldet).
**Berechtigungskonzept:**
- Zutritt, Zugang, Zugriff (Unterscheidung aus AP1) nach der **Organisationsstruktur** regeln
- Rechte an **Rollen**, nicht an Personen; Benutzer erhalten Rollen
- so fallen überflüssige Rechte und verwaiste Konten an einer Stelle auf
(Nur die nötigen Rechte vergeben: AP1.)

### K2 – Authentifizierung und Autorisierung in der Anwendung (Stufe 3 Anwenden)
Du kannst Authentifizierung (Wer bist du?) und Autorisierung (Was darfst du?) mit Benutzer- und Rollenverwaltung in einer Anwendung umsetzen: Anmeldung sicher prüfen, Konten anlegen, Rollen zuweisen, Rechte bei jedem Zugriff prüfen, Konten bei Austritt sofort sperren, Änderungen protokollieren.

Erklärung:
- **Authentifizierung:** *Wer bist du?* – Anmeldung sicher prüfen (Passwort-Hash, Mindestanforderungen an Länge und Komplexität des Passworts, Sperre oder Wartezeit nach mehreren Fehlversuchen, 2FA)
- **Autorisierung:** *Was darfst du?* – Rechte bei **jedem** Zugriff prüfen
Verwaltung:
- Konten anlegen, **Rollen** zuweisen
- bei Austritt **sofort sperren**
- Änderungen **protokollieren**

### K3 – Ablauf der Autorisierung mit OAuth2 (Stufe 2 Verstehen)
Du kannst den Ablauf der Autorisierung mit OAuth2 nachvollziehen (für die Anmeldung erweitert durch OpenID Connect) und die Begriffe zuordnen: Der Client erhält vom Autorisierungsserver einen Autorisierungscode, tauscht ihn gegen ein Access Token und greift damit beim Resource Server auf die geschützte Ressource zu.

Erklärung:
**OAuth2** (Autorisierung): Eine Anwendung erhält mit Erlaubnis des Nutzers Zugriff auf dessen Daten bei einem anderen Dienst, ohne sein Passwort zu kennen.
Rollen: **Resource Owner** (Nutzer, dem die Daten gehören), Client (Anwendung), **Authorization Server** (Autorisierungsserver), Resource Server (hält die geschützten Daten). Ablauf:
- **Client** bittet den Resource Owner um Erlaubnis (Authorization Request) und leitet ihn zum **Autorisierungsserver**; dort stimmt er zu
- Client erhält einen **Autorisierungscode (Auth. Code)**
- Client schickt den Auth. Code an den Autorisierungsserver und erhält dafür ein **Access Token**
- Client schickt das Access Token an den **Resource Server**
- der Resource Server liefert die geschützte Ressource (**Protected Resource**)
Für die **Anmeldung** kommt **OpenID Connect** obendrauf (liefert, wer der Nutzer ist).

### K4 – Single-Sign-On: Vor- und Nachteile für Sicherheit (Stufe 2 Verstehen)
Du kannst Vor- und Nachteile von Single-Sign-On unter dem Sicherheitsaspekt erläutern: zentrale Rechteverwaltung, weniger Passwörter und schnelle Sperrung bei Vorfällen gegenüber Zugriff auf alle Systeme mit einem gestohlenen Zugang und Abhängigkeit vom Identity Provider.

Erklärung:
**Single-Sign-On** – eine Anmeldung für viele Systeme:
- **Vorteile:** zentrale Rechteverwaltung (bessere Übersicht über erteilte Rechte), weniger Passwörter → seltener aufgeschrieben oder wiederverwendet, **schnelle Sperrung** an zentraler Stelle bei Vorfällen
- **Nachteile:** gestohlener Zugang öffnet **alle Systeme**; **Abhängigkeit** vom Identity Provider (fällt er aus, kommt niemand rein)

## Lehrnotiz: Authentifizierung, Autorisierung und Identity & Access Management

**Aufteilung:**
- Authentifizierung und Autorisierung in der Anwendung: K2
- Zentrale Verwaltung und Rollen statt Personen: K1
- OAuth2, erst die vier Beteiligten, dann der Ablauf: K3
- Single-Sign-On unter dem Sicherheitsaspekt: K4

**Schon geprüft:** In Prüfungen: K3 (2022S), K4 (2022W) · Noch nicht geprüft: K1, K2

**Kerngedanken:**
- Die Authentifizierung kommt immer vor der Autorisierung, denn Rechte lassen sich erst prüfen, wenn feststeht, wer jemand ist. Wird ein korrekt angemeldeter Benutzer abgewiesen, hat die Autorisierung gegriffen.
- Gespeichert wird nicht das Passwort selbst, sondern nur sein Hash, ein Einwegwert, aus dem sich das Passwort nicht zurückrechnen lässt; bei der Anmeldung wird die Eingabe ebenso gehasht und verglichen.
- Mit OAuth2 bekommt eine Anwendung mit Erlaubnis des Nutzers Zugriff auf dessen Daten bei einem anderen Dienst.
- Der Nutzen von Rollen zeigt sich bei Veränderungen: Wechselt jemand die Stelle, ändert man nur die Rollenzuordnung, und eine Änderung an einer Rolle gilt sofort für alle ihre Benutzer.
- Bei „erläutern“ reicht ein Stichwort nicht: Zu jedem Argument gehört die Folge für die Sicherheit, bezogen auf den Kunden.

**Typische Missverständnisse:**
- Viele denken, ein ausgeblendeter oder deaktivierter Knopf sei Autorisierung; richtig ist: Wer Adresse oder Schnittstelle direkt aufruft, umgeht die Oberfläche, deshalb prüft der Server die Rechte bei jedem Zugriff.
- Viele denken, der Client schicke den Auth. Code an den Resource Server; richtig ist: Der Auth. Code geht nur zurück an den Autorisierungsserver, zum Resource Server geht das Access Token.
- Viele denken, „bequemer“ oder „schneller“ sei ein Vorteil von Single-Sign-On; richtig ist: Unter dem Sicherheitsaspekt zählt nur ein Argument mit Sicherheitsfolge.

**Fachwörter:**
- Identity Provider: zentraler Dienst, der die Anmeldung übernimmt
- Berechtigungskonzept: Regelung, welche Rolle was darf
- Resource Owner: Nutzer, dem die Daten gehören
- Autorisierungscode (Auth. Code): Zwischenschritt, wird gegen das Token getauscht
- Access Token: Nachweis der Erlaubnis für den Resource Server
- Protected Resource: die geschützten Daten
- Single-Sign-On: eine Anmeldung für viele Systeme

**So fragt die IHK:**
- OAuth2 (K3), Operator „zuordnen“, 4 Punkte: Gegeben war eine Ablaufgrafik mit den Kästen Resource Owner, Client, Authorization Server und Resource Server. Vier leere Pfeile waren mit Auth. Code, Access Token und Protected Resource zu beschriften, 1 Punkt je Pfeil, ein Begriff kam doppelt vor.
- Single-Sign-On (K4), Operator „erläutern“, 6 Punkte: je ein Vor- und Nachteil „unter Beachtung des Sicherheitsaspekts“, in einer Situation mit Identity Provider per OAuth2. Gezählt wurden die Punkte aus dem Stoff, ausformuliert und nicht als Stichwort.
- K1 und K2 wurden noch nicht einzeln geprüft. Nach dem Katalog sind zu erwarten: „Erläutern Sie den Unterschied …“ oder „Beschreiben Sie, wie … umgesetzt wird“.

**Fallen:**
- Bei der Umsetzung ein gemeinsames Konto für mehrere Personen stehen lassen statt eigene Konten je Person.
- Nicht für jedes Problem der Ausgangssituation eine Regel nennen; oft fehlen die Sperre bei Austritt oder die Protokollierung.
- „Jeder bekommt die Rechte, die er braucht“ als Rollenkonzept ausgeben; das ist nur das Prinzip der geringsten Rechte.
- Beim Berechtigungskonzept nur „Rollen einführen“ oder „Konten löschen“ schreiben, ohne den Vorteil zu begründen.
- In der OAuth2-Grafik jeden Begriff nur einmal eintragen, obwohl einer an zwei Pfeilen steht: Das Access Token geht vom Autorisierungsserver zum Client und vom Client zum Resource Server; je nach Grafik hat auch der Auth. Code zwei Pfeile (zum Client und zurück zum Autorisierungsserver).
- Bei Single-Sign-On nur den Vorteil oder nur den Nachteil erläutern.
