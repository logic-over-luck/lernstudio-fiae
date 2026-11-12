Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Netzwerkkonzepte, Speichernetze und Standortvernetzung › Client-Server, Peer-to-Peer und Speicher im Netz

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

## Stoff: Client-Server, Peer-to-Peer und Speicher im Netz

Ziel: Client-Server und Peer-to-Peer vergleichen und bewerten, Dateifreigabe und Datenabruf einordnen und NAS, SAN, iSCSI und Fibre Channel beschreiben.

Das muss ich können:

### K1 – Peer-to-Peer gegen Client-Server (Stufe 4 Beurteilen)
Du kannst Peer-to-Peer (gleichberechtigte Rechner ohne zentralen Server) und Client-Server (zentraler Dienst, der sich gemeinsam verwalten und sichern lässt) vergleichen und für einen Einsatz bewerten, welches Konzept passt.

Erklärung:
- **Peer-to-Peer:** gleichberechtigte Rechner, kein zentraler Server – einfach, billig, für **wenige** Rechner; schwer zu verwalten und zu sichern
- **Client-Server:** zentraler Dienst – **gemeinsam verwalten, sichern, Rechte vergeben**; braucht Server und Betreuung
Bewerten: ab mehreren Arbeitsplätzen mit gemeinsamen Daten → Client-Server.

### K2 – Dateifreigaben über SMB/CIFS und NFS (Stufe 4 Beurteilen)
Du kannst Dateifreigaben über SMB/CIFS (vor allem Windows) und NFS (vor allem Unix und Linux) beschreiben und für einen Einsatz bewerten, welche passt.

Erklärung:
- **SMB/CIFS:** Datei- und Druckerfreigabe vor allem unter **Windows** (CIFS ist eine ältere SMB-Version)
- **NFS:** vor allem unter **Unix/Linux**
Bewerten nach den Systemen im Netz; gemischte Umgebungen nutzen oft SMB, weil auch Linux und macOS es können.

### K3 – Datenabruf über HTTP und ODBC (Stufe 4 Beurteilen)
Du kannst Wege des Datenabrufs vergleichen und bewerten: HTTP für Webdienste und Schnittstellen, ODBC als einheitliche Schnittstelle von Anwendungen zu verschiedenen Datenbanken.

Erklärung:
- **HTTP:** Datenabruf über **Webdienste und Schnittstellen** (REST: Abruf mit normalen HTTP-Anfragen an URLs, meist als JSON), plattformunabhängig, gut durch Firewalls
- **ODBC:** **einheitliche Schnittstelle** von Anwendungen zu **verschiedenen Datenbanken** – die Anwendung muss die Datenbank nicht kennen

### K4 – NAS gegen SAN (Stufe 2 Verstehen)
Du kannst das NAS aus AP1 (dateibasiert, stellt Dateien über das Netz bereit) vom SAN unterscheiden: eigenes Speichernetz, das Servern Speicher blockbasiert wie eine lokale Festplatte bereitstellt.

Erklärung:
- **NAS** (aus AP1): **dateibasiert**, stellt Dateien über das normale Netz bereit
- **SAN:** **eigenes Speichernetz**, stellt Servern Speicher **blockbasiert** bereit – wirkt wie eine lokale Festplatte

### K5 – Blockspeicher über iSCSI und Fibre Channel (Stufe 2 Verstehen)
Du kannst die Anbindung von Blockspeicher beschreiben: iSCSI über das normale Ethernet, Fibre Channel über ein eigenes, schnelles Speichernetz.

Erklärung:
Blockspeicher anbinden:
- **iSCSI:** über **Ethernet und TCP/IP** – dieselbe Technik wie im LAN, daher günstiger; im Rechenzentrum meist in einem eigenen, vom übrigen Verkehr getrennten Netz
- **Fibre Channel:** über ein **eigenes, schnelles Speichernetz** – teurer, sehr leistungsfähig
Beide binden den Blockspeicher eines SAN an.

### K6 – Datenbanktreiber hinter ODBC und JDBC (Stufe 2 Verstehen)
Du kannst beschreiben, wie eine Anwendung über eine standardisierte Datenbankschnittstelle wie ODBC (allgemein) oder JDBC (für Java) auf eine Datenbank zugreift: Das Programm ruft nur die einheitlichen Funktionen der Schnittstelle auf, ein Treiber des jeweiligen Datenbanksystems übersetzt sie in dessen eigenes Protokoll, sodass ein Wechsel des Datenbanksystems vor allem einen anderen Treiber und andere Verbindungsdaten erfordert.

Erklärung:
Jedes Datenbanksystem spricht über das Netz sein eigenes Protokoll. Damit nicht jede Anwendung all diese Protokolle kennen muss, gibt es eine Zwischenschicht.
- Die **Schnittstelle** (ODBC sprachunabhängig, JDBC für Java) legt einheitliche Funktionen fest: Verbindung öffnen, Anweisung schicken, Ergebnis lesen, schließen.
- Der **Treiber** des Herstellers setzt diese Aufrufe für sein Datenbanksystem um.
- Die Anwendung bleibt dadurch weitgehend unabhängig von der Datenbank: Wechselt man das System, tauscht man Treiber und Verbindungsangaben – nur SQL-Besonderheiten eines Herstellers müssen angepasst werden.
Beispiel: Ein Auswertungsprogramm liest über ODBC einmal aus einer Access-Datei und einmal aus einem SQL Server, ohne dass sich sein Code ändert.

### K7 – Ablauf eines Datenbankzugriffs aus dem Programm (Stufe 2 Verstehen)
Du kannst den Ablauf eines Datenbankzugriffs aus einem Programm beschreiben: Verbindung mit Adresse, Port, Datenbankname, Benutzer und Passwort öffnen, die SQL-Anweisung an die Datenbank schicken (Benutzereingaben als Parameter einer vorbereiteten Anweisung), das Ergebnis verarbeiten und die Verbindung in jedem Fall wieder schließen, auch nach einem Fehler (Transaktion und Commit siehe PB1-6-1-5-K4).

Erklärung:
Egal in welcher Sprache: Der Zugriff auf eine Datenbank läuft immer in denselben Schritten.
- **Verbinden:** Adresse (Host und Port), Datenbankname, Benutzer, Passwort. Der Datenbankbenutzer bekommt nur die Rechte, die die Anwendung braucht. Zugangsdaten gehören in eine geschützte Konfiguration, nicht in den Quelltext.
- **Anweisung schicken:** Benutzereingaben nie in den SQL-Text kleben, sondern als Parameter einer vorbereiteten Anweisung übergeben (Schutz vor SQL-Injection, PB1-10-1-2).
- **Ergebnis verarbeiten:** die Zeilen einer Abfrage nacheinander lesen bzw. die Zahl der geänderten Zeilen auswerten.
- **Commit:** Ohne Autocommit gehören Änderungen zu einer offenen Transaktion und müssen mit Commit bestätigt werden, sonst gehen sie beim Schließen in der Regel verloren; im Autocommit-Modus, den viele Treiber voreinstellen, ist jede Anweisung sofort gespeichert (PB1-6-1-5-K4).
- **Schließen** – auch im Fehlerfall, sonst bleiben Verbindungen offen, bis der Server keine neuen mehr annimmt.
Beispiel: Im Pseudocode steht das Schließen der Verbindung in einem `finally`-Block, der auch nach einer Ausnahme ausgeführt wird.

### K8 – Auswahlkriterien für ein NAS (Stufe 2 Verstehen)
Du kannst Kriterien für die Auswahl eines NAS beschreiben: Kapazität und Zahl der Laufwerkschächte, RAID mit Tausch defekter Platten im laufenden Betrieb, Lese- und Schreibgeschwindigkeit, Netzanbindung (mehrere Ports, per Link-Aggregation gebündelt), Verschlüsselung, Snapshots im Dateisystem und ein redundantes Netzteil.

Erklärung:
Ein NAS ist ein kleiner Dateiserver mit eigenen Festplatten. Welches passt, ergibt sich aus Datenmenge, Zahl der Nutzer und den Folgen eines Ausfalls.
- **Kapazität und Schächte:** genug Platz mit Reserve für Wachstum; mehr Schächte erlauben RAID und spätere Erweiterung.
- **RAID mit Hot-Swap:** Fällt eine Platte aus, läuft das NAS weiter, und die Platte wird im Betrieb getauscht (RAID-Level in PB1-12-1-3).
- **Geschwindigkeit und Netzanbindung:** Viele gleichzeitige Nutzer brauchen schnelle Platten und mehrere Netzports, die per **Link-Aggregation** zu einer breiteren Verbindung gebündelt werden.
- **Schutz:** Verschlüsselung gegen Diebstahl, **Snapshots** gegen versehentliches Löschen und Ransomware, redundantes Netzteil gegen den Ausfall eines Netzteils.
Beispiel: Für zehn Grafiker mit großen Dateien passt ein NAS mit vier Schächten, RAID, zwei gebündelten 10-Gbit-Ports und Snapshots.

### K9 – NAS, SAN und DAS im Vergleich (Stufe 4 Beurteilen)
Du kannst beurteilen, ob für einen Einsatz NAS, SAN oder DAS passt: Das NAS stellt Dateien über das vorhandene Ethernet-LAN bereit (einfach und günstig, belastet aber das LAN), das SAN gibt den Servern über ein eigenes schnelles Speichernetz Blockspeicher (hohe Leistung für viele Server, aber teuer und aufwendig), das DAS hängt direkt an einem einzigen Server (schnell und günstig, aber nur dieser Server hat Zugriff).

Erklärung:
Drei Wege, Speicher an Server und Nutzer zu bringen – sie unterscheiden sich in Anbindung, Zugriffsart und Kosten.
- **DAS** (Direct Attached Storage): Platten direkt am Server, z. B. per SAS. Schnell und günstig, aber nur dieser eine Server hat Zugriff; fällt er aus, sind die Daten nicht erreichbar.
- **NAS** (Network Attached Storage): Dateiserver im LAN, Zugriff auf **Dateien** per SMB oder NFS. Einfach einzurichten, teilt sich aber die Bandbreite mit dem übrigen LAN-Verkehr.
- **SAN** (Storage Area Network): eigenes Speichernetz (Fibre Channel oder iSCSI), das Servern **Blöcke** wie eine lokale Platte gibt. Sehr schnell und flexibel für viele Server und Virtualisierung, aber teuer und aufwendig im Betrieb.
Beispiel: Das kleine Büro nimmt ein NAS für gemeinsame Dateien, ein einzelner Datenbankserver ein DAS, das Rechenzentrum mit zwanzig virtualisierten Hosts ein SAN.

## Lehrnotiz: Client-Server, Peer-to-Peer und Speicher im Netz

**Aufteilung:**
- Teil A – Netzmodell und Speicher: Peer-to-Peer oder Client-Server K1; NAS auswählen und Dateien freigeben K8, K2; NAS, SAN und DAS mit Anbindung K4, K5, K9
- Pause möglich nach Teil A.
- Teil B – Datenabruf: HTTP oder ODBC K3; Treiber K6; Ablauf im Programm K7

**Schon geprüft:** Noch nicht geprüft: K1–K9

**Kerngedanken:**
- Client und Server sind Rollen, keine Gerätearten. Bei Peer-to-Peer liegen Rechte und Sicherung auf jedem Rechner einzeln. Bei Client-Server trifft ein Ausfall des Servers alle Clients.
- Bewerten und beurteilen heißt: Merkmale auf die Lage beziehen (Zahl der Rechner, gemeinsame Daten, Rechte, Sicherung, Betreuung), entscheiden und auch den Nachteil der gewählten Lösung nennen.
- Leitfrage beim Speicher: Greifen Menschen auf Dateien zu oder Server auf Speicher wie auf eine eigene Platte, und wie viele? iSCSI und Fibre Channel sind keine weiteren Speicherarten, sondern zwei Wege, den Blockspeicher eines SAN anzubinden.
- Bei HTTP sendet der Client eine Anfrage an eine URL, der Server antwortet mit Statuscode und Daten (z. B. JSON). Das passt, wenn fremde Geräte von außen zugreifen. ODBC passt, wenn eine Anwendung direkt mit einer oder mehreren Datenbanken arbeitet.

**Typische Missverständnisse:**
- Viele denken, Client-Server sei immer die bessere Antwort; richtig ist: Für wenige Rechner ohne Administrator genügt Peer-to-Peer.
- Viele denken, ODBC oder JDBC sei eine Datenbank oder ersetze SQL; richtig ist: SQL wird weiter geschrieben, die Schnittstelle vereinheitlicht nur den Zugriff.

**Fachwörter:**
- Peer-to-Peer: gleichberechtigte Rechner ohne zentralen Server
- SMB/CIFS: Dateifreigabe vor allem unter Windows; CIFS ist eine ältere SMB-Version
- NFS: Dateifreigabe vor allem unter Unix/Linux
- dateibasiert: Zugriff über Dateien und Ordner; das Dateisystem verwaltet das NAS
- blockbasiert: Server bekommt Speicherblöcke und verwaltet das Dateisystem selbst; wirkt wie lokale Festplatte
- Link-Aggregation: mehrere Netzports zu einer Verbindung gebündelt
- Treiber: übersetzt Schnittstellenaufrufe ins Protokoll der Datenbank
- vorbereitete Anweisung: SQL mit Platzhaltern für Parameter

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es keine eigene echte Aufgabe. Das SAN kam aber in einer Zuordnungsaufgabe vor (9 Punkte; drei Netzkonzepte drei Anwendungsgebieten zuordnen und begründen; je 1 Punkt Zuordnung, 2 Punkte Begründung). Beim SAN zählten Geschwindigkeit, Skalierbarkeit, Zuverlässigkeit und Datenaustausch zwischen Servern und Speichersystemen.
- Client-Server stand sonst nur in einer Ausgangssituation.
- Zu erwarten nach Katalog: „Bewerten Sie …“, „Vergleichen Sie …“, „Ordnen Sie zu und begründen Sie“, 2–4 Punkte je Teil, oft als Tabelle. Die Punkte stecken in der Begründung aus der Situation.

**Fallen:**
- Teil A: Nur allgemeine Merkmale aufzählen, ohne Bezug zum Betrieb und ohne Entscheidung.
- Teil A: Auswahlkriterien für ein NAS als Stichworte nennen, ohne den Zweck („Snapshots, weil …“).
- Teil A: Das Freigabeprotokoll wählen, ohne alle zugreifenden Betriebssysteme zu beachten.
- Teil A: NAS und SAN gleichsetzen oder ein SAN für wenige Büro-PCs mit gemeinsamen Dateien empfehlen.
- Teil A: Die Wahl zwischen iSCSI und Fibre Channel nicht aus vorhandenem Netz und Budget begründen.
- Teil B: Bei „vergleichen und bewerten“ nur zuordnen, statt erst beide Wege mit Merkmal zu beschreiben; eine Empfehlung ohne Begründung zählt nicht.
- Teil B: Die Rolle des Treibers weglassen oder behaupten, beim Wechsel der Datenbank ändere sich nichts; Treiber und Verbindungsdaten ändern sich immer.
- Teil B: Die Schritte des Zugriffs nennen, ohne zu sagen, worauf man bei jedem achtet.
- Teil B: Als Schutz vor SQL-Injection nur „Eingabe prüfen“ schreiben; es zählt der Parameter einer vorbereiteten Anweisung.
- Teil B: Das Schließen als letzte Zeile für ausreichend halten; nach einem Fehler wird sie nie erreicht.
- Teil B: Bei Schwächen in einem Programmstück die Verbesserung weglassen oder Stilfragen anführen.
