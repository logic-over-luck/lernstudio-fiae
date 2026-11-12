Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Monitoring, Störungen und Cloud-Modelle › Störungen bearbeiten: Incident Management, SLA, SOP, Eskalation

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

## Stoff: Störungen bearbeiten: Incident Management, SLA, SOP, Eskalation

Ziel: Monitoringergebnisse analysieren und Maßnahmen bestimmen, Störungen nach SLA im Ticketsystem bearbeiten, SOPs festlegen und Eskalationen bestimmen.

Das muss ich können:

### K1 – Ticketsystem im Incident Management: Vor- und Nachteile (Stufe 2 Verstehen)
Du kannst Vor- und Nachteile eines Ticketsystems im Incident Management erläutern: Zeitersparnis durch strukturierte Abläufe, Echtzeit-Übersicht mit Auswertungen und Wissensdatenbank, zugesicherte Reaktionszeiten für Kunden gegenüber Aufwand und Kosten für Einführung und Pflege.

Erklärung:
**Ticketsystem** im Incident Management (Störungen erfassen, einordnen, beheben und dokumentieren):
- **Vorteile:** strukturierte Abläufe sparen Zeit, **Echtzeit-Übersicht** mit Auswertungen, **Wissensdatenbank**, zugesicherte **Reaktionszeiten** für Kunden
- **weitere Vorteile:** rund um die Uhr über E-Mail oder Portal erreichbar, automatische Zuteilung der Tickets und Benachrichtigung bei Statusänderungen, **Schnittstellen** zu ERP, CRM und Telefonanlage
- **Nachteile:** **Aufwand und Kosten** für Einführung, Pflege und Schulung; Fachpersonal für Betrieb und Wartung, ggf. leistungsstärkere Server
- Die Zeitbuchung je Ticket kann als **Leistungs- und Verhaltenskontrolle** empfunden werden (Unzufriedenheit der Mitarbeiter) – vorher Datenschutz und Mitbestimmung des Betriebsrats (§ 87 Abs. 1 Nr. 6 BetrVG) klären

### K2 – Korrektive Maßnahmen aus Monitoringergebnissen (Stufe 4 Beurteilen)
Du kannst Monitoringergebnisse analysieren und korrektive Maßnahmen bestimmen, zum Beispiel bei Speicherengpass erweitern oder aufräumen, bei Überlast zu Stoßzeiten die Last verteilen oder Ressourcen erhöhen; vorbeugender Tausch nach Messwerten ist Predictive Maintenance.

Erklärung:
Monitoring auswerten → **korrektive Maßnahme** bestimmen:
- Speicherengpass → **erweitern** oder **aufräumen**
- Überlast zu Stoßzeiten → **Last verteilen**, **Ressourcen erhöhen**
- Dienst nicht erreichbar → neu starten, Ursache suchen
Vorbeugender Tausch nach Messwerten ist Predictive Maintenance.

### K3 – Standard Operation Procedure für wiederkehrende Störungen (Stufe 4 Beurteilen)
Du kannst analysieren, für welche wiederkehrenden Störungen eine Standard Operation Procedure sinnvoll ist, und sie als festgelegte Schritt-für-Schritt-Anweisung bestimmen.

Erklärung:
**SOP** (Standard Operation Procedure – so der Prüfungskatalog; üblich ist auch „Standard Operating Procedure“) = festgelegte **Schritt-für-Schritt-Anweisung**.
Sinnvoll für **wiederkehrende** Störungen mit **bekannter Lösung** (Passwort zurücksetzen, Drucker-Warteschlange leeren, Dienst neu starten).
Vorteil: gleiche Qualität, auch neue Kollegen können es.

### K4 – Service Level Agreement: Reaktions- und Lösungszeiten (Stufe 4 Beurteilen)
Du kannst ein Service Level Agreement analysieren (zugesagte Verfügbarkeit, Reaktions- und Lösungszeiten je Service Level) und bestimmen, ob eine Störung danach rechtzeitig bearbeitet wurde; „Service Level 1 bis 3“ meint je nach Vertrag die vereinbarten Leistungsstufen oder die Support-Stufen First, Second, Third Level aus AP1.

Erklärung:
**SLA** analysieren:
- zugesagte **Verfügbarkeit**
- **Reaktionszeit** (bis jemand anfängt) und **Lösungszeit** je Service Level
Dann prüfen: Wurde die Störung **rechtzeitig** bearbeitet? Die Fristen laufen ab Eingang der Meldung und meist nur in der vereinbarten **Servicezeit** (z. B. Mo–Fr 8–18 Uhr).
„Service Level 1–3“ kann **Leistungsstufen** im Vertrag (z. B. Gold/Silber/Bronze) oder die **Support-Stufen** First/Second/Third Level meinen – aus dem Text erschließen.

### K5 – Fachliche und hierarchische Eskalation (Stufe 4 Beurteilen)
Du kannst an einem Störungsverlauf analysieren, wann fachlich (an die nächste Support-Stufe, siehe AP1-1-3-1) oder hierarchisch (an Vorgesetzte) eskaliert werden muss.

Erklärung:
Eskalation:
- **fachlich:** an die **nächste Support-Stufe** mit mehr Wissen, wenn die aktuelle nicht lösen kann (AP1-1-3-1)
- **hierarchisch:** an **Vorgesetzte**, wenn Zeiten aus dem SLA zu reißen drohen oder Entscheidungen/Geld nötig sind
Am Verlauf erkennen: Ab welchem Zeitpunkt hätte eskaliert werden müssen?

### K6 – Service-Level-Management und SLA-Berichte (Stufe 2 Verstehen)
Du kannst Service-Level-Management erklären: Serviceziele werden mit dem Kunden in SLAs vereinbart, ihre Einhaltung wird laufend über Kennzahlen gemessen, etwa aus dem Ticketsystem (Anteil fristgerecht gelöster Tickets, Zahl der SLA-Verletzungen, erreichte Verfügbarkeit, MTTR), und in regelmäßigen Berichten mit dem Kunden ausgewertet, um Abweichungen abzustellen.

Erklärung:
Ein SLA ist nur so gut wie seine Kontrolle. **Service-Level-Management** ist der Prozess drumherum:
- **vereinbaren:** mit dem Kunden messbare Ziele festlegen – Verfügbarkeit, Reaktions- und Lösungszeiten je Priorität, Servicezeiten
- **messen:** Kennzahlen laufend erfassen, vor allem aus Ticketsystem und Monitoring (fristgerecht gelöste Tickets, SLA-Verletzungen, erreichte Verfügbarkeit, mittlere Reparaturzeit)
- **berichten:** regelmäßige Service-Reports an Kunde und Verantwortliche
- **verbessern:** bei Abweichungen Ursachen klären, Maßnahmen vereinbaren, gegebenenfalls das SLA anpassen
Beispiel: Der Monatsbericht zeigt, dass Tickets der Priorität 2 in 15 % der Fälle die 4-Stunden-Frist reißen – Folge: mehr Personal im Second Level zu Stoßzeiten.

### K8 – Vertikale und horizontale Skalierung (Stufe 3 Anwenden)
Du kannst bei einem Leistungsengpass bestimmen, ob vertikal oder horizontal skaliert wird (Begriffe aus PB1-6-1-4-K5): vertikal einfach, aber durch die Hardware begrenzt und meist mit Ausfallzeit; horizontal im laufenden Betrieb und nahezu unbegrenzt, wenn die Anwendung mehrere Instanzen verträgt.

Erklärung:
Zeigt das Monitoring dauerhaft einen Engpass, gibt es zwei Wege zu mehr Leistung:
- **vertikal (scale up):** den vorhandenen Server stärker machen – mehr RAM, mehr Kerne, schnellere Platten, in der Cloud eine größere VM. Die Anwendung bleibt unverändert, aber es gibt eine Obergrenze, und der Umbau erfordert meist einen Neustart.
- **horizontal (scale out):** weitere gleichartige Server dazunehmen, die Last verteilt ein Load Balancer. Das geht im laufenden Betrieb und erhöht zugleich die Ausfallsicherheit – die Anwendung muss aber verteilbar sein, etwa Sitzungen zentral speichern.
Für Datenbanken gilt die Abwägung aus PB1-6-1-4-K5: relationale Datenbanken meist vertikal, NoSQL-Datenbanken meist horizontal.
Beispiel: Ein Webshop bricht im Weihnachtsgeschäft ein → weitere Webserver hinter dem Load Balancer (horizontal); der Datenbankserver bekommt mehr Arbeitsspeicher (vertikal).

## Lehrnotiz: Störungen bearbeiten: Incident Management, SLA, SOP, Eskalation

**Aufteilung:**
- Ticketsystem im Incident Management: K1
- SLA lesen und Fristen prüfen: K4
- Eskalation am Störungsverlauf: K5
- SOP für wiederkehrende Störungen: K3
- Maßnahmen aus Monitoringergebnissen und Skalierung: K2, K8
- Service-Level-Management: K6

**Schon geprüft:** In Prüfungen: K1 (2022S) · Noch nicht geprüft: K2–K6, K8

**Kerngedanken:**
- Bei „erläutern Sie Vor- und Nachteile“ stehen die Vorteile nicht in der Aufgabe; die Kundensituation ist nur Verpackung. Verlangt ist das Wissen über Ticketsysteme, je Aspekt als Stichwort plus wem es was bringt und warum.
- Ein SLA regelt auch, wann die Uhr läuft: meist ab Eingang der Meldung und oft nur innerhalb der Servicezeit. Was als Reaktion und was als Lösung zählt (etwa auch eine vorübergehende Umgehung), steht ebenfalls im SLA.
- Der richtige Zeitpunkt der Eskalation liegt früh. Fachlich wird eskaliert, sobald die bekannte Lösung erfolglos war, und hierarchisch, sobald absehbar ist, dass die Frist nicht hält oder eine Entscheidung nötig wird. Erst nach dem Fristbruch ist es zu spät.
- Abgrenzung: Den Engpass aus Messwerten erkennen ist Thema von PB1-12-2-1; hier geht es um die Maßnahme danach und den Weg der Skalierung.

**Typische Missverständnisse:**
- Viele denken, wer ein Ticket schnell annimmt, habe das SLA eingehalten; richtig ist: Reaktionszeit und Lösungszeit sind zwei Fristen und werden getrennt geprüft.
- Viele denken, bei hierarchischer Eskalation löse die Führungskraft den Fehler; richtig ist: Sie entscheidet, gibt Geld oder Personal frei und trägt das Risiko.

**Fachwörter:**
- Incident Management: Störungen erfassen, einordnen, beheben, dokumentieren
- Reaktionszeit: Zeit bis zum Beginn der Bearbeitung
- Lösungszeit: Zeit, bis die Störung behoben ist
- SOP: festgelegte Anweisung in festen Einzelschritten
- korrektive Maßnahme: behebt einen festgestellten Mangel
- Load Balancer: verteilt Anfragen auf mehrere Server
- MTTR: mittlere Reparaturzeit

**So fragt die IHK:** Ein Beleg (K1): Zur Einführung eines Ticketsystems für den Support einer App waren drei Vorteile und ein Nachteil zu erläutern, 12 Punkte, 3 je Aspekt. Gezählt wurden Zeitersparnis, Echtzeit-Übersicht mit Reporting und Wissensdatenbank, zugesicherte Reaktionszeiten nach SLA, einfache Nutzung und Schnittstellen; als Nachteile Kosten (Einführung, Personal, Server) und die Überwachungswirkung der Zeitbuchung. Volle Punkte gab es nur mit Erläuterung. SLA-Analyse, Eskalation, SOP und Maßnahmen stehen im Katalog, wurden aber noch nicht geprüft; zu erwarten sind SLA-Auszug und Ticketverlauf als Material, je Befund 1–2 Punkte mit Begründung.

**Fallen:**
- Denselben Vorteil zweimal mit anderen Worten nennen („Übersicht“ und „Überblick“) oder den Nachteil unkonkret lassen.
- Stunden außerhalb der Servicezeit mitzählen, obwohl das SLA sie ausnimmt.
- Fachliche und hierarchische Eskalation vertauschen oder einen Zeitpunkt ohne Begründung nennen (fehlt Wissen, oder fehlen Entscheidung, Geld, Zeit?).
- Nach erfolgloser Anleitung allein weitersuchen statt weiterzugeben.
- Eine SOP aus allgemeinen Ratschlägen schreiben statt aus konkreten Schritten in fester Reihenfolge, einschließlich was geschieht, wenn sie nicht hilft, und der Dokumentation.
- Eine SOP für einmalige Störungen oder solche mit unbekannter Ursache vorschlagen.
- Eine Maßnahme wählen, die nicht zum Befund passt: Mehr RAM hilft nicht gegen volle CPU.
- Ressourcen erhöhen, ohne vorher zu prüfen, ob ein einzelner Prozess die Last verursacht.
- Einen nicht erreichbaren Dienst nur neu starten, ohne die Ursache zu suchen.
- Horizontal skalieren, ohne zu sagen, was vorher an der Software geändert werden muss, etwa Sitzungen zentral speichern.
- Vertikal skalieren, ohne den Neustart in ein Wartungsfenster zu legen.
- Service-Level-Management auf das Unterschreiben des SLA verkürzen oder Kennzahlen nennen, die nicht messbar sind.
