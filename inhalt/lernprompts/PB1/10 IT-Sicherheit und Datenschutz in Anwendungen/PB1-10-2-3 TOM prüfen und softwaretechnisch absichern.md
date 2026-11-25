Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz in Anwendungen › Zugriff, Datenschutz, Prüfung und Beratung › TOM prüfen und softwaretechnisch absichern

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen: gern mit Beispielen aus dem Alltag und dem Warum dahinter.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
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

## Stoff: TOM prüfen und softwaretechnisch absichern

Ziel: Maßnahmen der Zutritts-, Zugangs- und Zugriffskontrolle zuordnen und ihre Wirksamkeit und Effizienz prüfen, auch mit Log Management und Compliance Reports; physische Absicherung benennen; Webfilter und Portsecurity einrichten.

Das muss ich können:

### K2 – Wirksamkeit von Zutritts-, Zugangs-, Zugriffskontrolle (Stufe 4 Beurteilen)
Du kannst die Wirksamkeit einer Maßnahme der Zutritts-, Zugangs- oder Zugriffskontrolle prüfen und eine Schwäche benennen, zum Beispiel Videoüberwachung ohne Auswertung, Bildschirmsperre erst nach langer Zeit, nicht zurückgegebene Besucherausweise, Rollenkonzept mit veralteten Rechten, Löschung ohne Überschreiben, Datenträgerverschlüsselung ohne sicher hinterlegten Wiederherstellungsschlüssel.

Erklärung:
Zuordnung (Grundlagen aus AP1-7-1-2):
- **Zutritt** (ins Gebäude, in den Raum): Alarmanlage, Videoüberwachung, Besucherausweise
- **Zugang** (ans System): Bildschirmschoner mit Passwortschutz, biometrische Verfahren, Magnet- oder Chipkarte zur Anmeldung
- **Zugriff** (auf die Daten): Rollenkonzept, Verschlüsselung und Löschung von Datenträgern
Wirksamkeit prüfen = Schwachstelle der Maßnahme finden:
- Videoüberwachung, die **niemand auswertet**
- Bildschirmsperre erst nach **langer Zeit**
- **nicht zurückgegebene** Besucherausweise
- Rollenkonzept mit **veralteten Rechten**
- Löschen **ohne Überschreiben**
- Verschlüsselung ohne **sicher hinterlegten Wiederherstellungsschlüssel**

### K3 – Effizienz technisch-organisatorischer Maßnahmen (Stufe 4 Beurteilen)
Du kannst die Effizienz technisch-organisatorischer Maßnahmen prüfen: ob Aufwand und Kosten im Verhältnis zum Schutzbedarf stehen und ob eine einfachere Maßnahme denselben Schutz bietet.

Erklärung:
Effizienz prüfen:
- stehen **Aufwand und Kosten** im Verhältnis zum **Schutzbedarf**?
- gibt es eine **einfachere** Maßnahme mit demselben Schutz?
Beispiel: Biometrie für einen Raum mit Büromaterial ist überzogen; ein Schloss reicht.

### K4 – Physische Absicherung und Elementarrisiken (Stufe 1 Wiedergeben)
Du kannst Möglichkeiten der physischen Absicherung benennen: Zutrittskontrollen für Gebäude, Serverraum und Schrank, Schutz vor Elementarrisiken wie Feuer und Hochwasser (Brandmeldeanlage, Serverraum nicht im Keller, Sicherung an einem anderen Ort).

Erklärung:
Physische Absicherung:
- **Zutrittskontrollen** für Gebäude, Serverraum, Schrank (der Prüfungskatalog schreibt hier „Zugangskontrollen“; nach der Einteilung in K2 ist es Zutritt)
- Schutz vor **Elementarrisiken**: Brandmelde- und Löschanlage, Serverraum **nicht im Keller** (Hochwasser), Sicherung an einem **anderen Ort**

### K5 – Wirksamkeit der TOM: Log Management, Compliance Reports (Stufe 4 Beurteilen)
Du kannst mit Log Management und Compliance Reports prüfen, ob TOM wirken: Ereignisse zentral sammeln und auswerten, um Vorfälle zu erkennen und nachzuweisen; Berichte zeigen, ob Vorgaben eingehalten werden.

Erklärung:
- **Log Management:** Ereignisse (Anmeldungen, Fehler, Zugriffe) **zentral sammeln und auswerten** → Vorfälle **erkennen** und **nachweisen**
- **Compliance Reports** (Compliance = Einhalten von Gesetzen, Verträgen und eigenen Richtlinien): Berichte, ob **Vorgaben eingehalten** werden (z. B. alle Geräte verschlüsselt, Updates eingespielt)

### K6 – Webfilter und Abgrenzung zur Firewall (Stufe 3 Anwenden)
Du kannst einen Webfilter einrichten, der Inhalte und Webseiten nach Kategorien oder Listen sperrt, und ihn von der Firewall abgrenzen, die Verbindungen nach Adressen, Ports und Protokollen erlaubt oder sperrt.

Erklärung:
- **Webfilter:** sperrt **Inhalte und Webseiten** nach Kategorien oder Listen (z. B. Glücksspiel, bekannte Schadseiten)
- **Firewall:** erlaubt oder sperrt **Verbindungen** nach Adressen, Ports und Protokollen
Der Webfilter schaut auf den **Inhalt**, die Firewall auf die **Verbindung**.

### K7 – Portsecurity an einem Switch (Stufe 3 Anwenden)
Du kannst Portsecurity an einem Switch umsetzen: An einem Anschluss werden nur bekannte Geräte (MAC-Adressen) zugelassen, unbekannte werden gesperrt.

Erklärung:
**Portsecurity** am Switch (Verteiler im lokalen Netz; die MAC-Adresse ist die ab Werk vergebene Hardwareadresse einer Netzwerkkarte – beides aus AP1-6):
- an einem Anschluss sind nur **bekannte MAC-Adressen** erlaubt
- **unbekannte Geräte** werden gesperrt oder der Port abgeschaltet
Schützt vor fremden Geräten, die einfach ins Netz gesteckt werden.

### K8 – Sicherheitsrelevante Ereignisse protokollieren (Stufe 3 Anwenden)
Du kannst festlegen, welche sicherheitsrelevanten Ereignisse eine Anwendung protokolliert – fehlgeschlagene Anmeldungen, Ausnahmen, Validierungsfehler, Änderungen an Rechten, Aktionen von Administratoren und schreibende Zugriffe auf wichtige Daten, jeweils mit Zeit und Benutzer – und dabei den Datenschutz wahren: keine Passwörter oder unnötigen Personendaten im Protokoll, Zugriff beschränkt, Speicherdauer begrenzt.

Erklärung:
Log Management (PB1-10-2-3-K5) kann nur auswerten, was die Anwendung vorher **protokolliert** hat. Deshalb legt man beim Entwurf fest, was ins Protokoll gehört:
- **Anmeldungen**, vor allem fehlgeschlagene – viele Fehlversuche deuten auf Passwortraten hin.
- **Ausnahmen und Validierungsfehler** – mögliche Hinweise auf Angriffsversuche wie SQL-Injection.
- **Rechteänderungen und Admin-Aktionen** – besonders folgenreich.
- **Schreibzugriffe** auf wichtige Daten – wer hat was wann geändert.
Jeder Eintrag braucht Zeitpunkt, Benutzer, Aktion und Ergebnis.
**Datenschutz:** Protokolle enthalten selbst personenbezogene Daten (AP1-7-5-3-K1). Keine Passwörter oder Kartennummern loggen, Zugriff auf die Protokolle beschränken, nach festgelegter Frist löschen.

### K9 – Blacklisting gegen Whitelisting (Stufe 2 Verstehen)
Du kannst Blacklisting und Whitelisting unterscheiden: Eine Negativliste sperrt bekannte schädliche Seiten oder Programme und erlaubt alles andere, verpasst aber neue Bedrohungen; eine Positivliste erlaubt nur ausdrücklich Vertrauenswürdiges und sperrt alles Unbekannte – sicherer, aber aufwendiger zu pflegen und für die Nutzer einschränkender.

Erklärung:
Webfilter, Firewalls und Programmsteuerung arbeiten mit Listen. Entscheidend ist, was mit **Unbekanntem** geschieht.
- **Blacklisting (Negativ- oder Sperrliste):** Bekannt Schädliches wird gesperrt, alles andere ist erlaubt. Bequem, aber eine neue Phishing-Seite steht noch auf keiner Liste.
- **Whitelisting (Positiv- oder Erlaubnisliste):** Nur Freigegebenes ist erlaubt, alles andere gesperrt. Sehr sicher, aber jede neue Seite oder Software muss erst freigegeben werden.
Auswahl nach Schutzbedarf: Büro-PCs oft mit Sperrliste nach Kategorien; eine Kasse, eine Maschinensteuerung oder ein Schul-PC mit Erlaubnisliste.
Der Grundsatz „alles verbieten, was nicht ausdrücklich erlaubt ist“ ist ein Whitelisting – so sind auch gute Firewall-Regeln aufgebaut.

### K10 – Firewall-Regeln für einen Server (Stufe 3 Anwenden)
Du kannst für einen Server Firewall-Regeln nach dem Grundsatz „alles gesperrt, was nicht ausdrücklich erlaubt ist“ festlegen: eingehende Verbindungen standardmäßig verweigern, nur die Ports der angebotenen Dienste freigeben, etwa 443 für HTTPS, und Verwaltungszugänge wie SSH nur aus dem Verwaltungsnetz zulassen.

Erklärung:
Jeder offene Port ist ein möglicher Angriffsweg. Deshalb beginnt die Firewall eines Servers mit **Default Deny**: Eingehend ist zunächst alles verboten.
- Dann nur die Dienste freigeben, die der Server wirklich anbietet: beim Webserver 443 (und 80 nur zur Umleitung auf HTTPS).
- Verwaltungszugänge wie SSH nicht für alle, sondern nur für bestimmte Quelladressen, etwa das Admin-Netz oder das VPN.
- Wo möglich auch ausgehend beschränken – das erschwert Schadsoftware das Nachladen.
Beispiel-Regelwerk: `erlaube TCP 443 von überall`, `erlaube TCP 22 von 10.0.99.0/24`, `verweigere alles andere`.
Die Regeln werden von oben nach unten geprüft; die letzte ist das Verbot. Wie die Firewall als Paketfilter arbeitet, steht in PB1-11-1-1-K4.

## Lehrnotiz: TOM prüfen und softwaretechnisch absichern

**Aufteilung:**
- Teil A – TOM prüfen: zuordnen und Wirksamkeit K2; physische Absicherung K4; Effizienz K3; was die Anwendung protokolliert K8; Auswertung und Berichte K5
- Pause möglich nach Teil A.
- Teil B – Absicherung im Netz: Webfilter gegen Firewall K6; Sperrliste gegen Erlaubnisliste K9; Firewall-Regeln K10; Portsecurity K7

**Schon geprüft:** Noch nicht geprüft: K2–K10

**Kerngedanken:**
- Zugeordnet wird nach dem Ziel, nicht nach dem Gerät: Die Chipkarte an der Tür ist Zutritt, die Chipkarte zur Anmeldung ist Zugang.
- Wirksamkeit beurteilen heißt, eine konkrete Schwäche und die Abhilfe dazu zu nennen. Auch eine umgangene Maßnahme ist unwirksam.
- Wirksam und effizient sind zwei Fragen: Eine Maßnahme kann wirken und trotzdem überzogen sein. Effizient heißt aber nicht „möglichst billig“, denn bei sehr hohem Schutzbedarf kann eine teure Maßnahme effizient sein.
- Log Management erkennt Vorfälle, ein Compliance Report prüft Vorgaben. Erst beides zusammen zeigt, ob die TOM wirken.

**Typische Missverständnisse:**
- Viele denken, die Firewall könne Webseiten nach Themen sperren; richtig ist: Sie sieht nur Adressen, Ports und Protokolle, und fast alle Webseiten laufen über denselben Port 443. Was Glücksspiel ist, erkennt nur der Webfilter (in manchen Firewall-Produkten als Zusatzfunktion eingebaut).
- Viele denken, Default Deny heiße, gefährliche Ports zu sperren; richtig ist das Gegenteil: Alles ist gesperrt, nur Nötiges wird freigegeben, sonst wäre jeder versehentlich geöffnete Dienst sofort erreichbar.
- Viele denken, Portsecurity arbeite mit IP-Adressen oder in der Firewall; richtig ist: Sie ist eine Funktion des Switches und prüft MAC-Adressen.

**Fachwörter:**
- Elementarrisiken: Naturgefahren wie Feuer und Hochwasser
- Log Management: Protokolle zentral sammeln und auswerten
- Compliance Reports: Berichte über eingehaltene Vorgaben
- Webfilter: sperrt Webseiten nach Inhalt
- Whitelisting: nur Freigegebenes ist erlaubt
- Default Deny: alles verboten, was nicht erlaubt ist
- Portsecurity: Switch lässt nur bekannte Geräte zu
- MAC-Adresse: ab Werk vergebene Hardware-Adresse der Netzwerkkarte, lässt sich aber per Software fälschen

**So fragt die IHK:**
- Bisher gibt es keine echte Prüfungsaufgabe zu diesem Stichpunkt.
- Zu erwarten sind Tabellen mit Maßnahme und Ist-Zustand: je Zeile die Kontrollart zuordnen und die Wirksamkeit beurteilen (1–2 Punkte je Zeile, Schwäche plus Abhilfe).
- Ebenfalls zu erwarten: die Effizienz beurteilen (2 Punkte), den Unterschied zwischen Webfilter und Firewall erläutern (2–4 Punkte), ein Firewall-Regelwerk ergänzen oder korrigieren.
- Bei „beurteilen“ zählt nur eine konkrete Schwäche oder Abwägung am Fall.

**Fallen:**
- Teil A: „Gute Maßnahme“ schreiben oder die Schwäche ohne Abhilfe nennen.
- Teil A: Die Sicherung im selben Raum wie das Original lassen; Feuer oder Hochwasser zerstören dann beides.
- Teil A: Den Serverschrank vergessen; er schützt die Geräte auch vor Personen, die den Raum betreten dürfen.
- Teil A: Bei der Effizienz nur „zu teuer“ schreiben, ohne den Schutzbedarf zu nennen und eine einfachere Maßnahme mit demselben Schutz vorzuschlagen.
- Teil A: „Alles protokollieren“: Dann landen Passwörter und unnötige Personendaten im Protokoll, und Wichtiges geht in der Menge unter. Ebenso falsch: Zugriff auf die Protokolle und Speicherdauer nicht begrenzen.
- Teil B: Sperr- oder Erlaubnisliste nur zuordnen, ohne Begründung über das Unbekannte und den Pflegeaufwand.
- Teil B: Beim Einrichten des Webfilters keine Kategorien oder Listen nennen.
- Teil B: Die Verbotsregel weglassen (dann ist alles Übrige erlaubt) oder nach oben setzen (dann greift keine Freigabe mehr).
- Teil B: SSH von überall erlauben; auch mit gutem Passwort bleibt es ein unnötiger Angriffsweg.
- Teil B: Ports freigeben, die nur der Server selbst braucht (Datenbank) oder die niemand mehr nutzt.
- Teil B: Ungenutzte Netzwerkdosen nicht am Switch abschalten.
