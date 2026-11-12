Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Software und Betriebssysteme › Betriebssystem einrichten › Client-Server-Systeme, Domäne und Remote-Desktop

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

## Stoff: Client-Server-Systeme, Domäne und Remote-Desktop

Ziel: Das Client-Server-Prinzip erklären, die Einbindung in eine Domäne und Remote-Desktop beschreiben und IT-Systeme Einsatzbereichen zuordnen.

Das muss ich können:

### K1 – Client-Server-Prinzip: Anfrage und Dienst (Stufe 2 Verstehen)
Du kannst das Client-Server-Prinzip erklären: Der Client fragt einen Dienst an, der Server stellt ihn bereit.

Erklärung:
- Der **Client** fragt einen Dienst an.
- Der **Server** stellt den Dienst bereit und antwortet.
- Ein Server bedient viele Clients.
Typische Dienste: Dateiablage, Drucken, E-Mail, Webseiten, Datenbank, zentrale Anmeldung.
Beispiel: Dein Browser (Client) fragt eine Webseite an, der Webserver schickt sie dir.

### K2 – Einbinden eines Rechners in eine Domäne (Stufe 2 Verstehen)
Du kannst erklären, was es bedeutet, einen Rechner in eine Domäne einzubinden.

Erklärung:
Wird ein Rechner in eine Domäne eingebunden, wird er **Mitglied eines zentral verwalteten Netzes**.
- Anmeldung, Rechte und Richtlinien kommen dann vom **Domänencontroller** (einem Server).
- Der Benutzer meldet sich mit seinem **Domänenkonto** an – und kann dieses Konto an jedem Rechner der Domäne nutzen.

### K3 – Vorteile einer Domäne (Stufe 1 Wiedergeben)
Du kannst Vorteile einer Domäne nennen: zentrale Benutzerkonten, einheitliche Richtlinien, zentrale Rechtevergabe.

Erklärung:
- **Zentrale Benutzerkonten:** ein Konto für alle Rechner, einmal angelegt.
- **Einheitliche Richtlinien:** z. B. Passwortregeln gelten überall.
- **Zentrale Rechtevergabe:** Zugriffe auf Ordner und Drucker an einer Stelle regeln.
Ohne Domäne müsste jeder Rechner einzeln gepflegt werden.

### K4 – Zweck von Remote-Desktop (Stufe 2 Verstehen)
Du kannst erklären, wozu Remote-Desktop dient.

Erklärung:
Mit Remote-Desktop bedienst du einen **entfernten Rechner** über das Netz: Du siehst seinen Bildschirm und steuerst ihn mit deiner eigenen Tastatur und Maus.
Wofür:
- **Fernwartung** und **Support** – der Techniker hilft, ohne hinzufahren
- **Arbeit am Büro-PC von zu Hause**

### K5 – Remote-Desktop gegen virtuellen Desktop (Stufe 2 Verstehen)
Du kannst den Unterschied zum virtuellen Desktop erklären: Remote-Desktop steuert einen vorhandenen Rechner fern.

Erklärung:
- **Remote-Desktop:** Du steuerst einen **vorhandenen, echten Rechner** aus der Ferne – z. B. deinen Büro-PC.
- **Virtueller Desktop:** Der Desktop läuft in einer **virtuellen Maschine** auf einem Server oder in der Cloud – es gibt keinen eigenen physischen Rechner dafür.

### K11 – Remote-Desktop einrichten und absichern (Stufe 3 Anwenden)
Du kannst einen Remote-Desktop-Zugriff auf einen Windows-Arbeitsplatz einrichten und absichern: Der Zielrechner braucht Windows Pro, Enterprise oder Education (Home kann nur Client sein), dort wird Remote-Desktop aktiviert und für berechtigte Benutzer freigegeben, die Verbindung nutzt RDP auf Port 3389 und wird nicht direkt ins Internet freigegeben, sondern über VPN oder ein Gateway erreicht.

Erklärung:
- **Edition:** Ziel (Host) muss Windows Pro, Enterprise oder Education sein; Home kann nur Client sein.
- **Einrichten:** Remote-Desktop am Ziel aktivieren und Benutzer berechtigen (Gruppe Remotedesktopbenutzer).
- **Protokoll:** RDP, Standardport **3389**.
- **Absichern:** nie direkt ins Internet freigeben, sondern über **VPN** (verschlüsselter Tunnel von außen ins Firmennetz) oder ein Remote-Desktop-Gateway (abgesicherter Zugangspunkt für Remote-Desktop-Verbindungen von außen); starke Passwörter oder Mehr-Faktor-Anmeldung.

### K7 – Passendes IT-System für einen Einsatzbereich (Stufe 2 Verstehen)
Du kannst einem Einsatzbereich ein passendes IT-System zuordnen und seinen Nutzen erläutern, zum Beispiel eine Videoerfassung für An- und Ablieferungen.

Erklärung:
Nenne das System und den Nutzen für genau diesen Bereich:
- **Videoerfassung für An- und Ablieferungen:** belegt, wann was in welchem Zustand geliefert wurde – hilft bei Streit über Schäden oder fehlende Mengen.
- **Zeiterfassungsterminal:** Arbeitszeiten werden automatisch erfasst, keine Stundenzettel mehr.
- **Scanner mit Texterkennung in der Buchhaltung:** Rechnungen werden digital erfasst und sind durchsuchbar.

### K8 – Client und Server als Rollen (Stufe 2 Verstehen)
Du kannst erklären, dass Client und Server Rollen sind und keine Gerätearten: Server ist jeder Rechner, der im Netz einen Dienst anbietet, deshalb wird schon ein Arbeitsplatz-PC mit einer Datei- oder Druckerfreigabe zum File- oder Printserver.

Erklärung:
„Server“ beschreibt, was ein Rechner im Netz **tut**:
- **Client:** nutzt einen Dienst.
- **Server:** bietet einen Dienst an.
Ein Rechner kann beides zugleich sein. Gibt eine Mitarbeiterin ihren Drucker im Netz frei, ist ihr PC für die Kollegen ein **Printserver** – und bleibt selbst Client des Mailservers.
Warum das wichtig ist: Ein Arbeitsplatz-PC eignet sich schlecht für die Server-Rolle. Wird er ausgeschaltet oder neu gestartet, ist der Dienst für alle weg. Dauerhafte Dienste gehören deshalb auf eigene Serverhardware.

### K10 – Typische Server und ihr Dienst (Stufe 2 Verstehen)
Du kannst typischen Servern ihren Dienst zuordnen: Fileserver (Dateiablage), Printserver (Drucken), Mailserver (E-Mail), DNS-Server (Namensauflösung), Webserver (Webseiten), Anwendungsserver (z. B. Warenwirtschaft), NAS (Speicher im Netz) und Terminalserver (Arbeitssitzungen für Thin Clients).

Erklärung:
Benannt wird ein Server nach dem Dienst, den er anbietet:
- **Fileserver:** zentrale Dateiablage mit Freigaben und Rechten
- **Printserver:** verwaltet Drucker und Druckaufträge
- **Mailserver:** nimmt E-Mails an, verteilt sie und hält die Postfächer
- **DNS-Server:** übersetzt Namen wie `intranet.firma.de` in IP-Adressen
- **Webserver:** liefert Webseiten aus, z. B. Intranet oder Shop
- **Anwendungsserver:** führt eine zentrale Anwendung aus, z. B. Warenwirtschaft
- **NAS:** eigenständiges Speichergerät, das Speicherplatz als Freigabe im Netz bereitstellt
- **Terminalserver:** Programme laufen auf dem Server, Thin Clients (einfache Endgeräte ohne eigene Programme) zeigen nur die Sitzung an; viele Benutzer teilen sich dabei ein Server-Betriebssystem, während beim virtuellen Desktop (VDI) jeder Benutzer eine eigene virtuelle Maschine bekommt
Ein physischer Rechner kann mehrere dieser Dienste gleichzeitig anbieten.

### K12 – Content-Management-System und responsives Design (Stufe 2 Verstehen)
Du kannst ein Content-Management-System (CMS) erklären: Redakteure pflegen damit die Inhalte einer Website ohne Programmierkenntnisse, und Vorlagen (Templates) sorgen für ein einheitliches Aussehen, das sich an das Endgerät anpasst (responsives Design).

Erklärung:
Mit einem Content-Management-System pflegen Redakteure die Inhalte einer Website ohne Programmierkenntnisse; Vorlagen (Templates) sorgen für ein einheitliches Aussehen, das sich an das Endgerät anpasst (responsives Design).

### K13 – Eigenschaften von Serverhardware (Stufe 1 Wiedergeben)
Du kannst Eigenschaften von Serverhardware nennen: leistungsfähiger und zuverlässiger als ein Arbeitsplatzrechner, um viele gleichzeitige Zugriffe rund um die Uhr zu bedienen, meist im 19-Zoll-Gehäuse im Serverschrank, mit zwei Netzteilen und großen Lüftern.

Erklärung:
Serverhardware gegen Arbeitsplatzrechner: Serverhardware ist darauf ausgelegt, viele gleichzeitige Zugriffe schnell zu bedienen und rund um die Uhr zuverlässig zu laufen, und steckt meist in einem 19-Zoll-Gehäuse im Serverschrank. Typisch sind zwei Netzteile (fällt eins aus, läuft der Server weiter) und große, leistungsstarke Lüfter.

## Lehrnotiz: Client-Server-Systeme, Domäne und Remote-Desktop

**Aufteilung:**
- Teil A – Client und Server: Prinzip und Rollen K1, K8; typische Server K10; Serverhardware K13
- Teil A – Domäne als Anwendung des Prinzips: K2, K3
- Pause möglich nach Teil A.
- Teil B – Remote-Desktop: Zweck K4; Abgrenzung zum virtuellen Desktop K5; einrichten und absichern K11
- Teil C – zwei einzelne Themen: Content-Management-System K12; IT-System zum Einsatzbereich K7

**Schon geprüft:** In Prüfungen: K7 (neuere Prüfung) · Noch nicht geprüft: K1–K5, K8, K10–K13

**Kerngedanken:**
- Die Domäne ist selbst ein Fall von Client und Server: Bei der Anmeldung fragt der Rechner (Client) beim Domänencontroller (Server) nach. Das Konto liegt also auf dem Server und nicht auf dem einzelnen Rechner – darum funktioniert es an jedem Rechner der Domäne.
- Einbinden in eine Domäne hat zwei Seiten, und eine Erklärung braucht beide: Für den Rechner kommen Anmeldung, Rechte und Richtlinien vom Domänencontroller; für den Benutzer gilt ein Domänenkonto an allen Rechnern.
- Zur Einrichtung von Remote-Desktop gehört über den Stoff hinaus: Der Zielrechner muss eingeschaltet und erreichbar bleiben (kein Ruhezustand), und wer sich verbindet, braucht dessen Rechnernamen oder IP-Adresse. Beim Aktivieren gibt Windows die nötige Firewall-Regel am Zielrechner selbst frei.
- Warum nie direkt ins Internet: Ein von außen erreichbarer Remote-Desktop-Zugang wird automatisch gefunden und angegriffen (Passwortraten, Sicherheitslücken). Mit VPN oder Gateway gibt es nur einen geschützten Zugang ins Netz; die RDP-Verbindung läuft erst danach innerhalb des Netzes.

**Typische Missverständnisse:**
- Viele denken, Domäne heiße hier Internetadresse wie bei einer Website. Richtig ist: Gemeint ist ein zentral verwaltetes Netz mit einem Domänencontroller.
- Viele denken, mit Windows Home gehe Remote-Desktop gar nicht. Richtig ist: Die Einschränkung gilt nur für den Zielrechner; von einem Rechner mit Home aus kann man sich verbinden.
- Viele denken, responsives Design sei eine eigene App oder eine zweite Website für das Smartphone. Richtig ist: Dieselbe Seite passt ihre Darstellung an das Endgerät an.

**Fachwörter:**
- Client: nutzt einen Dienst, fragt an
- Server: bietet im Netz einen Dienst an
- Domänencontroller: Server für Anmeldung, Rechte und Richtlinien
- Domänenkonto: ein Benutzerkonto für alle Rechner der Domäne
- Remote-Desktop: entfernten, vorhandenen Rechner über das Netz bedienen
- RDP: Protokoll für Remote-Desktop, Standardport 3389
- VPN: geschützter Zugang von außen ins Firmennetz
- Templates: Vorlagen für einheitliches Aussehen der Website

**So fragt die IHK:**
- Über die Form echter Aufgaben zu diesem Stichpunkt ist nichts bekannt. Das Folgende ist aus dem Prüfungskatalog abgeleitet (typische IT-Systeme und deren Einsatzbereiche zuordnen: Client-Server-Systeme, Einbindung in einer Domäne; Installation und Einrichtung von Systemen, z. B. Remote-Desktop).
- Zu erwarten: Ein Kunde mit mehreren Standorten oder Homeoffice erweitert sein Netz um Server, Domäne oder Fernzugriff. Als Material ein Netzplan oder eine Liste von Geräten und Diensten, ein Ausschnitt aus Einstellungen oder der Vorschlag eines Kollegen.
- Operatoren: nennen (Vorteile einer Domäne, Eigenschaften von Serverhardware), zuordnen (Server zu Dienst, System zu Einsatzbereich), erklären oder erläutern (Client-Server, Domäne, Remote-Desktop gegen virtuellen Desktop, CMS), beschreiben (Remote-Desktop einrichten), beurteilen (Absicherung eines Fernzugriffs).
- Zu erwarten sind kleine Teilaufgaben mit 2–6 Punkten; bei Zuordnungen ein Punkt je richtiger Zuordnung, beim Erläutern zählt der Nutzen für den konkreten Fall.

**Fallen:**
- Teil A: Beim Erklären des Prinzips an einem Beispiel nur eine Rolle eines Rechners nennen, obwohl er für einen Dienst Server und für einen anderen Client ist.
- Teil A: Annehmen, dass nach dem Einbinden weiter mit dem lokalen Konto des Rechners gearbeitet wird – Arbeitskonto ist dann das Domänenkonto.
- Teil A: NAS und Fileserver nicht auseinanderhalten können: Das NAS ist ein eigenständiges Speichergerät, das den Dateidienst gleich mitbringt; „Fileserver“ benennt den Dienst, den auch ein gewöhnlicher Server übernehmen kann.
- Teil A: Terminalserver und Anwendungsserver verwechseln: Beim Terminalserver laufen die ganze Arbeitssitzung und alle Anwendungen auf dem Server, der Thin Client zeigt sie nur an. Beim Anwendungsserver läuft nur die zentrale Anwendung (z. B. Warenwirtschaft) auf dem Server, die Arbeitsplätze sind normale PCs mit eigenen Programmen.
- Teil A: Beim Zuordnen nur den Namen des Servers nennen, wenn auch sein Dienst verlangt ist.
- Teil B: Übersehen, dass Remote-Desktop einen echten, eingeschalteten Zielrechner braucht; beim virtuellen Desktop ist der „Rechner“ eine virtuelle Maschine.
- Teil B: Bei der Edition die Richtung nicht prüfen, also verlangen, dass der Rechner, von dem aus man sich verbindet, eine andere Edition braucht.
- Teil B: Bei einem Zielrechner mit Home nur feststellen, dass es nicht geht, statt die Lösung zu nennen (Edition hochstufen).
- Teil B: Übersehen, dass Remote-Desktop zwar schon aktiviert, der Benutzer aber noch nicht berechtigt ist.
- Teil B: Als Absicherung nur „Port freigeben und gutes Passwort“ nennen.
- Teil B: Einen anderen Port als 3389 für eine Absicherung halten – offene Ports werden automatisch gesucht, der Zugang bleibt direkt aus dem Internet erreichbar.
- Teil C: Beim CMS nur die Pflege der Inhalte nennen und die Templates weglassen: Das CMS trennt Inhalt (Redakteure) und Aussehen (Template).
- Teil C: Ein IT-System nennen, ohne den Nutzen für genau diesen Bereich zu erläutern; „ist moderner“ ist kein Nutzen.
- Teil C: Ein System vorschlagen, das nicht zum Einsatzbereich passt, zum Beispiel eine Videoerfassung für Lieferungen in einem Betrieb ohne Warenverkehr.
