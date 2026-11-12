Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Netzwerkkonzepte, Speichernetze und Standortvernetzung › Sicherheitskonzepte im Netz: DMZ, Segmentierung und Zero Trust

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

## Stoff: Sicherheitskonzepte im Netz: DMZ, Segmentierung und Zero Trust

Ziel: Eine DMZ charakterisieren, ein Netz nach Schutzbedarf in Zonen segmentieren und das Zero-Trust-Prinzip vom Perimeterschutz unterscheiden.

Das muss ich können:

### K1 – DMZ zwischen zwei Firewalls (Stufe 2 Verstehen)
Du kannst eine DMZ charakterisieren: Server, die aus dem Internet erreichbar sein müssen (z. B. Webserver, Mailserver, Shop), stehen in einem eigenen Netzsegment zwischen äußerer und innerer Firewall, sodass ein Angreifer nach einem Einbruch in einen dieser Server noch nicht im internen Netz ist, sondern erst die zweite Firewall überwinden muss; Firewalls verschiedener Hersteller verringern das Risiko, dass beide dieselbe Lücke haben, und ein Extranet öffnet ausgewählte Dienste nur für bestimmte Partner.

Erklärung:
Ein Webserver muss für alle erreichbar sein – und ist damit das wahrscheinlichste Angriffsziel. Die **DMZ** (demilitarisierte Zone) sorgt dafür, dass ein Einbruch dort nicht gleich das ganze Firmennetz öffnet.
- **Äußere Firewall:** lässt aus dem Internet nur die Dienste der DMZ-Server durch, z. B. Port 443 zum Webserver.
- **Innere Firewall:** lässt aus der DMZ ins LAN nur ganz bestimmte Verbindungen zu, etwa vom Webshop zur Datenbank; das LAN selbst ist von außen nicht direkt erreichbar.
- Verschiedene Hersteller für die beiden Firewalls: Eine Sicherheitslücke trifft dann nicht beide.
- **Extranet:** ein ähnlich abgeschirmter Bereich, den nur bekannte Partner nutzen, z. B. ein Lieferantenportal.
Beispiel: Wird der Mailserver in der DMZ übernommen, kommt der Angreifer von dort nicht frei an den Dateiserver im LAN.

### K2 – Segmentierung in Zonen nach Schutzbedarf (Stufe 2 Verstehen)
Du kannst ein Segmentierungskonzept charakterisieren: Systeme werden nach ihrem Schutzbedarf auf getrennte Zonen verteilt, jede Zone wird so streng geschützt wie ihr empfindlichstes System, Verkehr zwischen den Zonen läuft nur über Firewalls ohne Umgehungswege, und je kleiner die Zonen, desto weniger erreicht ein Angreifer nach einem Einbruch; Netze verschiedener Organisationen werden physisch getrennt, weil eine Trennung per VLAN auf gemeinsamen Switches dafür nicht genügt.

Erklärung:
In einem flachen Netz, in dem jeder jeden erreicht, kann ein infizierter PC alles angreifen. **Segmentierung** begrenzt das.
- Systeme mit ähnlichem **Schutzbedarf** (wie streng sie geschützt werden müssen) kommen in eine **Zone** (z. B. Büro-PCs, Server, Produktion, Gäste).
- Eine Zone ist nur so sicher wie ihr schwächster Schutz – deshalb gilt das Schutzniveau ihres heikelsten Systems für die ganze Zone.
- Übergänge nur über Firewalls mit klaren Regeln; ein vergessener Direktweg (z. B. ein zweites Netzwerkkabel am Server) hebelt alles aus.
- Kleine Zonen bremsen die Ausbreitung von Schadsoftware wie Ransomware (PB1-10-1-2).
- VLANs trennen nur logisch auf denselben Switches – für Netze fremder Organisationen ist das zu wenig, weil ein Konfigurationsfehler sie verbindet.
Beispiel: Die Steuerungen einer Fertigungshalle bilden eine eigene Zone, die nur vom Leitstand aus über eine Firewall erreichbar ist.

### K3 – Zero Trust gegen Perimeterschutz (Stufe 2 Verstehen)
Du kannst das Zero-Trust-Prinzip vom klassischen Perimeterschutz unterscheiden: Der Perimeterschutz vertraut allem innerhalb des Firmennetzes, bei Zero Trust gilt dagegen kein Zugriff allein wegen seiner Herkunft als vertrauenswürdig, sondern jeder Zugriff auf Daten, Anwendungen und Dienste wird einzeln nach Identität, Gerätezustand und Richtlinie geprüft, das Netz ist fein segmentiert, und alle Datenflüsse werden überwacht.

Erklärung:
Der klassische **Perimeterschutz** ist wie eine Burg: dicke Mauer (Firewall) nach außen, drinnen vertraut jeder jedem. Ist ein Angreifer einmal drin – über Phishing, ein infiziertes Notebook oder als Innentäter –, bewegt er sich frei.
**Zero Trust** dreht das um: Vertraue niemandem, prüfe jeden Zugriff.
- Jeder Zugriff wird einzeln geprüft: **wer** (Identität, meist mit zweitem Faktor), mit **welchem Gerät** (aktuell, verwaltet?), auf **was**, **wann**, **von wo**, **warum**.
- Rechte nur so weit wie nötig, Netze fein segmentiert, alle Zugriffe protokolliert und ausgewertet.
- Zero Trust ist ein Prinzip, kein Produkt, und nicht an die Cloud gebunden.
Beispiel: Eine Mitarbeiterin bekommt im Büro für die Personalakten dieselbe Anmeldung mit zweitem Faktor wie im Homeoffice – der Standort im Firmennetz allein öffnet nichts.

## Lehrnotiz: Sicherheitskonzepte im Netz: DMZ, Segmentierung und Zero Trust

**Aufteilung:**
- DMZ mit Extranet: K1
- Segmentierung in Zonen: K2
- Zero Trust gegen Perimeterschutz: K3

**Schon geprüft:** Noch nicht geprüft: K1–K3

**Kerngedanken:**
- Die drei Konzepte bauen aufeinander auf. Die DMZ ist eine besondere Zone für Server mit Zugang von außen. Die Segmentierung wendet denselben Gedanken auf das ganze Netz an. Zero Trust nimmt zusätzlich das pauschale Vertrauen innerhalb des Netzes weg.
- Der Kern der DMZ ist der zweite Schutzwall: Zwischen einem übernommenen Server und dem internen Netz steht noch die innere Firewall.
- Maßstab für eine Zone ist ihr empfindlichstes System, nicht der Durchschnitt. Ein besonders heikles System bekommt deshalb eine eigene kleine Zone. Sonst müssten alle anderen Systeme der Zone auf sein Niveau gehoben werden, oder es wäre nur so gut geschützt wie der Rest.
- Einen Vorschlag beurteilen heißt hier: die Regel des Konzepts nennen, sie auf den Betrieb anwenden und daraus das Urteil ableiten. Wie VLANs technisch arbeiten, gehört zum Stichpunkt „VLAN, Drahtlosnetze und Zugriffskontrolle im Netz“.

**Typische Missverständnisse:**
- Viele denken, die DMZ liege ungeschützt vor der Firewall; richtig ist: Auch sie steht hinter der äußeren Firewall, die nur die Dienste ihrer Server durchlässt.
- Viele denken, mit Zero Trust brauche man keine Firewalls und Zonen mehr; richtig ist: Die Segmentierung bleibt und wird feiner, nur das Vertrauen allein wegen der Herkunft fällt weg.

**Fachwörter:**
- DMZ: Netzsegment zwischen äußerer und innerer Firewall
- Extranet: abgeschirmter Bereich nur für bestimmte Partner
- Segmentierung: Netz in getrennte Zonen aufteilen
- Zone: Systeme mit ähnlichem Schutzbedarf
- Schutzbedarf: wie streng ein System geschützt werden muss
- Perimeterschutz: Schutz an der Außengrenze, innen Vertrauen
- Zero Trust: jeder Zugriff wird einzeln geprüft

**So fragt die IHK:**
- In den vorliegenden Prüfungen gibt es zu diesem Stichpunkt keine echte Aufgabe; er stammt aus den Lehrbüchern.
- Zu erwarten ist eine Systemliste oder ein Netzwerkplan eines Betriebs. Dazu „beschreiben“ (Aufbau und Nutzen einer DMZ), „zuordnen und begründen“ (Systeme in Zonen), „beurteilen“ (VLAN-Trennung zweier Firmen, ein Vorschlag des Betriebs) und „erläutern“ (Perimeterschutz gegen Zero Trust).
- 2–4 Punkte je Teil, ein Punkt je Merkmal.

**Fallen:**
- Die DMZ nur als „Server in eigenem Netz“ beschreiben, ohne die zwei Firewalls.
- Die Aufgabe einer der beiden Firewalls weglassen (außen: nur die Dienste der DMZ-Server; innen: nur ganz bestimmte Verbindungen ins LAN).
- Den Nutzen der DMZ nur mit „mehr Sicherheit“ angeben.
- Verschiedene Hersteller mit „doppelt hält besser“ begründen, ohne die gemeinsame Sicherheitslücke zu nennen.
- Einen Bereich nur für Partner als DMZ bezeichnen statt als Extranet.
- Einen Vorschlag zur Zonenbildung ablehnen oder annehmen, ohne das Schutzniveau der Zone als Grund zu nennen.
- Bei den Übergängen nur „Firewall“ schreiben, ohne klare Regeln und ohne den Ausschluss von Umgehungswegen.
- Die VLAN-Trennung zweier Organisationen nur „unsicher“ nennen, ohne den Grund (nur logisch getrennt, ein Konfigurationsfehler verbindet sie) und ohne die Lösung (physisch trennen).
- Zero Trust nur mit „niemandem vertrauen“ beschreiben, ohne die Prüfung nach Identität, Gerätezustand und Richtlinie.
- Beim Vergleich keinen Weg nennen, auf dem ein Angreifer trotz Firewall ins Netz kommt, oder den Gegensatz nicht aussprechen: Perimeterschutz vertraut allem innen, Zero Trust prüft jeden Zugriff einzeln.
