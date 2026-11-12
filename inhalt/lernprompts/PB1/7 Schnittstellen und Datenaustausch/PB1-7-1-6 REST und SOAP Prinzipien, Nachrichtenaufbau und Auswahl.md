Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Schnittstellen und Datenaustausch › Datenaustausch und Schnittstellen › REST und SOAP: Prinzipien, Nachrichtenaufbau und Auswahl

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

## Stoff: REST und SOAP: Prinzipien, Nachrichtenaufbau und Auswahl

Ziel: Die Prinzipien eines REST-Dienstes erklären, den Aufbau einer SOAP-Nachricht mit WSDL beschreiben und für eine Anbindung begründet zwischen SOAP und REST auswählen.

Das muss ich können:

### K1 – Aufbau einer SOAP-Nachricht und WSDL (Stufe 2 Verstehen)
Du kannst den Aufbau einer SOAP-Nachricht beschreiben: ein XML-Dokument mit dem Umschlag (Envelope) als Wurzel, einem optionalen Header für Zusatzangaben wie Sicherheitsinformationen und dem Body mit den Nutzdaten oder im Fehlerfall einem Fault-Element; übertragen meist über HTTP, aber auch über andere Protokolle wie SMTP, während die Operationen des Dienstes in einer WSDL-Datei beschrieben sind.

Erklärung:
SOAP ist ein **Protokoll** mit festen Regeln – anders als der Architekturstil REST. Jede Nachricht ist ein XML-Dokument:
- **Envelope:** Wurzelelement, umschließt alles
- **Header** (optional): Metadaten, z. B. Anmeldetoken, Signatur, Transaktionskennung
- **Body:** die eigentliche Anfrage oder Antwort, z. B. `<getKunde><nr>42</nr></getKunde>`
- **Fault** (im Body): strukturierte Fehlermeldung mit Code und Text
Transport: meist HTTP(S), möglich auch SMTP oder andere Protokolle.
**WSDL** (Web Services Description Language) beschreibt in XML, welche Operationen ein Dienst anbietet, welche Parameter und Datentypen sie haben und unter welcher Adresse er erreichbar ist; Entwicklungswerkzeuge erzeugen daraus den Aufrufcode.
Beispiel: Der Webservice einer Bank zur Kontoprüfung stellt seine WSDL bereit; das eigene Programm ruft die Operation `pruefeIban` auf und erhält eine Antwort oder ein Fault.

### K2 – Die sechs REST-Prinzipien (Stufe 2 Verstehen)
Du kannst die Prinzipien eines REST-Dienstes erklären: Trennung von Client und Server, Zustandslosigkeit jeder Anfrage, als zwischenspeicherbar gekennzeichnete Antworten (Caching), eine einheitliche Schnittstelle aus Ressourcen-URLs und Standard-HTTP-Methoden, ein Schichtensystem, in dem Proxys oder Lastverteiler unbemerkt dazwischen sitzen können, und optional Code, den der Server dem Client zum Ausführen mitliefert (Code on Demand).

Erklärung:
REST schreibt keine Technik vor, sondern sechs **Prinzipien (Constraints)**. Wer sie einhält, bekommt einen einfachen, gut skalierbaren Dienst:
- **Client-Server:** Oberfläche und Datenhaltung getrennt, beide unabhängig weiterentwickelbar
- **zustandslos:** jede Anfrage bringt alles mit (z. B. das Token), der Server merkt sich keine Sitzung → jeder Server im Verbund kann antworten
- **Caching:** Antworten geben an, ob und wie lange sie zwischengespeichert werden dürfen → weniger Last
- **einheitliche Schnittstelle:** Ressourcen über URLs, bearbeitet mit GET, POST, PUT, PATCH, DELETE, dargestellt z. B. als JSON
- **Schichtensystem:** Proxy (leitet Anfragen stellvertretend weiter), Cache-Server oder Lastverteiler (verteilt die Anfragen auf mehrere Server) können dazwischenliegen, ohne dass der Client es merkt
- **Code on Demand** (optional): der Server liefert ausführbaren Code mit, z. B. JavaScript
Beispiel: Ein Wetterdienst beantwortet `GET /orte/koeln/wetter` mit JSON, erlaubt das Zwischenspeichern für zehn Minuten und verteilt die Anfragen hinter einem Lastverteiler auf viele Server.

### K3 – SOAP oder REST: Einsatzbereiche (Stufe 2 Verstehen)
Du kannst erläutern, wann SOAP und wann REST eingesetzt wird: SOAP, wenn ein streng beschriebener Vertrag (WSDL), standardisierte Erweiterungen für Sicherheit (WS-Security) und verlässliche Transaktionen (WS-AtomicTransaction) gefordert sind oder ein bestehendes System nur SOAP anbietet; REST für schlanke Web-, Mobil- und IoT-Anwendungen, die mit den HTTP-Methoden auskommen, wenig Overhead haben sollen und Antworten in JSON verarbeiten.

Erklärung:
Beide machen Dienste eines Servers nutzbar, unterscheiden sich aber stark im Aufwand:
- **SOAP:** feste Verträge (WSDL), Zusatzstandards für Sicherheit (WS-Security: Signatur und Verschlüsselung auf Nachrichtenebene) und Transaktionen, immer XML → viel Overhead (Zusatzdaten neben den Nutzdaten, hier der XML-Umschlag), aufwendiger zu entwickeln. Typisch bei Banken, Behörden, Versicherungen und in älteren Unternehmenssystemen.
- **REST:** nutzt HTTP direkt, Antworten meist JSON, leicht zu lernen, gut zwischenspeicherbar → schlank und schnell. Typisch für öffentliche Web-APIs, Apps, Cloud-Dienste und IoT-Geräte (Internet der Dinge: vernetzte Geräte wie Sensoren) mit wenig Rechenleistung.
Entscheidungsfragen: Gibt der Partner das Verfahren vor? Braucht es Sicherheit und Transaktionen über mehrere Stationen hinweg? Wie wichtig sind geringe Datenmenge und schnelle Entwicklung?
Beispiel: Eine Fitness-App mit Smartwatch → REST. Die Anbindung an den bestehenden SOAP-Dienst einer Krankenkasse → SOAP, weil der Partner es vorgibt.

## Lehrnotiz: REST und SOAP: Prinzipien, Nachrichtenaufbau und Auswahl

**Aufteilung:**
- Die sechs Prinzipien von REST: K2
- Aufbau einer SOAP-Nachricht und Rolle der WSDL: K1
- SOAP oder REST begründet auswählen, baut auf beidem auf: K3

**Schon geprüft:** Noch nicht geprüft: K1–K3

**Kerngedanken:**
- Caching und Schichtensystem werden leicht vertauscht, weil auch ein Cache eine Zwischenstation sein kann. Das Prinzip Caching sagt: Die Antwort kennzeichnet selbst, ob und wie lange sie zwischengespeichert werden darf. Das Prinzip Schichtensystem sagt: Zwischenstationen bleiben für den Client unsichtbar.
- Bei der Auswahl zählt die Begründung am Fall, nicht das Wort „SOAP“ oder „REST“. Der stärkste Grund für SOAP ist oft schlicht, dass das bestehende System des Partners nur SOAP anbietet.
- Overhead sind die Zusatzdaten, die neben den Nutzdaten übertragen werden; bei SOAP ist das der XML-Umschlag um jede Nachricht.
- Abgrenzung: Das REST-Konzept in Kurzform, CRUD, Anfragen und Statuscodes gehören zum Nachbarstichpunkt „REST, SOAP und Schnittstellen festlegen“. Die `xmlns`-Angaben in einer SOAP-Nachricht sind kein Prüfungsstoff und werden nicht vertieft.

**Typische Missverständnisse:**
- Viele denken, man wähle REST, weil es moderner ist, und SOAP, weil es sicherer ist; richtig ist: Beides ist keine Begründung, solange der Bezug zum Fall fehlt.
- Viele denken, ein fehlender Header in einer SOAP-Nachricht sei ein Fehler; richtig ist: Der Header ist optional, Pflicht sind nur Envelope und Body.

**Fachwörter:**
- Envelope: Umschlag, Wurzelelement der SOAP-Nachricht
- Fault: strukturierte Fehlermeldung im Body
- WSDL: Beschreibung der Operationen eines Dienstes
- Caching: Antworten dürfen zwischengespeichert werden
- Schichtensystem: unbemerkte Zwischenstationen zwischen Client und Server
- Code on Demand: Server liefert ausführbaren Code mit
- Overhead: Zusatzdaten neben den Nutzdaten

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es bisher keine echte Prüfungsaufgabe. Geprüft wurden REST-Konzept, CRUD, Anfragebestandteile und Statuscodes (Nachbarstichpunkt). Der Prüfungskatalog nennt SOAP als weitere Möglichkeit zur Nutzung von Diensten.
- Zu erwarten ist:
  - eine gegebene SOAP-Nachricht mit Zeilennummern beschreiben (2–4 Punkte)
  - die Rolle der WSDL erläutern (2 Punkte)
  - für zwei Anbindungen der Ausgangssituation die Wahl zwischen SOAP und REST begründen (je 2 Punkte)
  - REST-Prinzipien an einer Last- oder Cache-Situation erklären (2–4 Punkte)
- Bewertet wird, ob die Fachbegriffe stimmen und die Begründung zum Fall passt.

**Fallen:**
- Die Lastverteilung nur mit „der Lastverteiler verteilt“ erklären. Das Warum ist die Zustandslosigkeit: Kein Server hält eine Sitzung, also kann jeder antworten.
- Ein Prinzip nur beim Namen nennen, ohne zu sagen, was es bringt.
- Den Fault neben den Body setzen; er steht im Body.
- SOAP mit „immer über HTTP“ gleichsetzen.
- Die WSDL nur „Beschreibung“ nennen, ohne ihren Inhalt: Operationen, Parameter und Datentypen, Adresse.
- „WDSL“ schreiben (so steht es in einem Lehrbuch); richtig ist WSDL.
- „ACID“ als eingebaute Eigenschaft von SOAP nennen. ACID beschreibt Datenbanktransaktionen; SOAP unterstützt verlässliche Transaktionen nur über Zusatzstandards wie WS-AtomicTransaction.
- Ein Verfahren für alle Anbindungen wählen, „damit alles einheitlich ist“; Einheitlichkeit allein ist kein ausreichender Grund.
- Bei einer Anbindung an ein bestehendes System die Vorgabe des Partners als Grund vergessen.
