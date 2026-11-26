Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Schnittstellen und Datenaustausch › Datenaustausch und Schnittstellen › REST und SOAP: Prinzipien, Nachrichtenaufbau und Auswahl

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

**Hinweis aus dem Lernplan:** Das Lehrbuch schreibt „WDSL“ und nennt ACID als Eigenschaft von SOAP; richtig ist: Die Beschreibungssprache heißt WSDL, und ACID beschreibt Datenbanktransaktionen – SOAP unterstützt verlässliche Transaktionen nur über Zusatzstandards wie WS-AtomicTransaction.

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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K1 – Ablauf eines SOAP-Aufrufs von der WSDL bis zur Antwort: (1) Der Anbieter stellt die WSDL bereit; ein Entwicklungswerkzeug beim Client liest sie und erzeugt Aufrufcode für jede Operation mit ihren Parametern und Datentypen. (2) Das Client-Programm ruft eine Operation auf; der erzeugte Code baut daraus ein XML-Dokument mit Envelope, optionalem Header und dem Operationsaufruf samt Parametern im Body. (3) Der Client sendet diese Nachricht an die in der WSDL genannte Adresse des Dienstes, meist als HTTP-POST-Anfrage. (4) Der Server liest den Envelope, wertet vorhandene Header-Angaben wie ein Anmeldetoken aus und führt die im Body genannte Operation mit den Parametern aus. (5) Der Server schickt eine eigene SOAP-Nachricht zurück, deren Body das Ergebnis enthält oder im Fehlerfall ein Fault-Element mit Code und Text. (6) Der erzeugte Code beim Client wandelt den Body der Antwort in Daten des Programms um oder meldet den Fault als Fehler.

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
