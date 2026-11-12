Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Monitoring, Störungen und Cloud-Modelle › Messdaten sammeln und auswerten: Baseline, Logs und Alarmierung

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

## Stoff: Messdaten sammeln und auswerten: Baseline, Logs und Alarmierung

Ziel: Verfahren zum Sammeln von Messdaten unterscheiden, Log-Dateien auswerten, Messwerte mit einer Baseline vergleichen und festlegen, wie das Monitoring beim Überschreiten eines Schwellwerts reagiert.

Das muss ich können:

### K1 – SNMP, Flussdaten und Paketmitschnitt (Stufe 2 Verstehen)
Du kannst Verfahren zum Sammeln von Messdaten im Netz nach ihrem Zweck unterscheiden: SNMP oder WMI fragen Zustandswerte einzelner Geräte ab (Auslastung, Fehlerzähler, Temperatur), Flussprotokolle wie NetFlow oder IPFIX liefern Statistiken, wer mit wem wie viel überträgt, und ein Paketmitschnitt zeigt den Datenverkehr Paket für Paket.

Erklärung:
Je nach Frage braucht das Monitoring andere Daten:
- **Gerätezustand** („Wie geht es dem Switch?“): **SNMP** – bei Windows-Systemen auch WMI – fragt Werte wie Portauslastung, Fehlerzähler oder Temperatur regelmäßig ab; Geräte können per Trap auch selbst melden.
- **Verkehrsstatistik** („Wer erzeugt die Last?“): **Flussprotokolle** (NetFlow, IPFIX) fassen Verbindungen zusammen – Quelle, Ziel, Port, Datenmenge, aber ohne Inhalt.
- **Einzelheiten** („Was genau geht schief?“): Ein **Paketmitschnitt** (Sniffer) zeichnet die Pakete selbst auf. Sehr genau, aber große Datenmengen und datenschutzrechtlich heikel, daher nur gezielt.
Beispiel: SNMP zeigt, dass die Internetleitung voll ist; NetFlow zeigt, dass ein Backup-Server sie belegt; ein Mitschnitt wäre erst nötig, wenn Verbindungen fehlschlagen.

### K2 – Log-Dateien zur Störungsanalyse (Stufe 3 Anwenden)
Du kannst Log-Dateien zur Störungsanalyse nutzen: Jeder Eintrag enthält Zeitpunkt, Schweregrad (etwa kritisch, Fehler, Warnung, Information, Debug), Quelle und Meldungstext; du filterst nach Schweregrad, Zeitraum und Quelle und verfolgst die Einträge rund um den Zeitpunkt der Störung bis zur Ursache.

Erklärung:
Programme und Systeme protokollieren Ereignisse zeilenweise in **Log-Dateien**. Ein typischer Eintrag:
`2026-03-14 02:13:07 ERROR db-backup: Verbindung zu 10.0.0.5 abgelehnt`
- **Zeitpunkt** – wann es passiert ist
- **Schweregrad** – von kritisch über Fehler, Warnung und Information bis Debug
- **Quelle** – welcher Dienst oder welche Komponente
- **Meldung** – was passiert ist
Vorgehen bei einer Störung: Zeitraum eingrenzen, nach Fehlern und Warnungen filtern, den ersten auffälligen Eintrag suchen (spätere sind oft nur Folgefehler) und Einträge mehrerer Systeme über den Zeitstempel zusammenführen – dafür brauchen alle Systeme eine synchrone Uhrzeit (NTP).

### K3 – Baseline als Maßstab für Messwerte (Stufe 2 Verstehen)
Du kannst erklären, was eine Baseline ist – die Normalwerte eines Systems im Regelbetrieb, etwa typische CPU-Last, Speicherbelegung, Datenrate und Antwortzeiten zu verschiedenen Tageszeiten – und warum Messwerte und Schwellwerte erst im Vergleich mit ihr aussagekräftig sind.

Erklärung:
Ob 70 % CPU-Last ein Problem ist, hängt vom System ab: Für einen Datenbankserver beim Monatsabschluss kann das normal sein, für einen Druckserver nachts nicht.
Die **Baseline** hält fest, was normal ist:
- über einen längeren Zeitraum im Regelbetrieb gemessen
- mit typischen Schwankungen (Tageszeit, Wochentag, Monatsende)
- für die wichtigen Werte: CPU, RAM, Datenträger, Netzlast, Antwortzeiten wichtiger Dienste
Nutzen: Schwellwerte werden passend zum System gesetzt statt pauschal, Abweichungen fallen auf (plötzlich doppelte Netzlast in der Nacht → Schadsoftware? Fehlkonfiguration?), und nach Änderungen sieht man, ob es besser oder schlechter geworden ist.
Nach größeren Umbauten wird die Baseline neu erhoben.

### K4 – Reaktion bei überschrittenem Schwellwert (Stufe 3 Anwenden)
Du kannst festlegen, wie ein Monitoringsystem reagiert, wenn ein Schwellwert überschritten wird: Es meldet den Alarm an die zuständige Stelle (E-Mail, Nachricht an den Bereitschaftsdienst, automatisch erzeugtes Ticket) und führt bei bekannten Störungen ein hinterlegtes Skript zur Entstörung aus, etwa einen hängenden Dienst neu starten oder alte Protokolldateien entfernen.

Erklärung:
Ein Schwellwert nützt nur, wenn jemand – oder etwas – reagiert. Festzulegen ist:
- **Wer wird benachrichtigt?** Je nach Stufe (Warnung oder Alarm) und Uhrzeit: Team-Postfach, Bereitschaftshandy, automatisch erzeugtes Ticket im Ticketsystem.
- **Was passiert automatisch?** Für bekannte, harmlose Ursachen ein hinterlegtes Skript: Dienst neu starten, alte Protokolldateien und temporäre Dateien entfernen, weitere Ressourcen zuschalten.
- **Wann wird eskaliert?** Bleibt der Alarm bestehen, geht er an die nächste Stufe.
Automatische Reaktionen entlasten, dürfen aber die Ursache nicht verdecken: Jede Ausführung wird protokolliert, und häufen sich Ausführungen, ist das ein Fall für das Problem Management (beseitigt die Ursache wiederkehrender Störungen dauerhaft).

## Lehrnotiz: Messdaten sammeln und auswerten: Baseline, Logs und Alarmierung

**Aufteilung:**
- Was „normal“ ist, die Baseline: K3
- Woher die Messdaten kommen: K1
- Log-Dateien auswerten: K2
- Was beim Alarm passiert: K4

**Schon geprüft:** Noch nicht geprüft: K1–K4

**Kerngedanken:**
- Die Baseline ist selbst kein Schwellwert, sondern dessen Grundlage. Mit ihr kann man je Zeitraum eigene Schwellwerte setzen, etwa nachts niedrigere als zur Stoßzeit.
- Die drei Sammelverfahren beantworten aufeinander aufbauende Fragen: SNMP zeigt, dass eine Leitung voll ist, Flussdaten zeigen, wer sie füllt, der Mitschnitt zeigt, was genau übertragen wird. Man nimmt das einfachste Verfahren, das die Frage beantwortet.
- In Logs steht die Ursache oft deutlich vor der Störung, mit niedrigerem Schweregrad und bei einer anderen Quelle als das Symptom.
- Abgrenzung: Welche Werte man überwacht und wie man Schwellwerte stuft, gehört zu PB1-12-2-1. Fachliche und hierarchische Eskalation im Support gehört zu PB1-12-2-2; hier heißt Eskalation nur, dass ein Alarm, der bestehen bleibt, an die nächste Stufe geht.

**Typische Missverständnisse:**
- Viele denken, die Baseline sei ein einzelner Durchschnittswert; richtig ist: Sie bildet die Normalwerte mit ihren Schwankungen nach Tageszeit und Wochentag ab.
- Viele denken, der Eintrag mit dem höchsten Schweregrad zum Zeitpunkt der Störung sei die Ursache; richtig ist: Entscheidend ist der zeitlich erste auffällige Eintrag, oft nur eine Warnung.

**Fachwörter:**
- Baseline: Normalwerte eines Systems im Regelbetrieb
- Flussprotokolle: Statistik, wer mit wem wie viel überträgt
- Paketmitschnitt: Aufzeichnung des Datenverkehrs Paket für Paket
- Schweregrad: Einstufung, wie ernst ein Log-Eintrag ist
- Folgefehler: Fehler, den ein früherer Fehler auslöst
- NTP: gleicht die Uhrzeit über das Netz ab
- Problem Management: beseitigt die Ursache wiederkehrender Störungen dauerhaft

**So fragt die IHK:** In Prüfungsbereich 1 bisher nicht geprüft; die Inhalte ergänzen die Katalogpunkte zum Monitoring. Zu erwarten ist eine Störung mit kurzem Log-Auszug als Material: Baseline erläutern (2–3 Punkte, voll nur mit Begründung), Log analysieren (Ursache und Folgefehler, je Befund 1–2 Punkte), Alarmierung festlegen, Verfahren zuordnen (SNMP, NetFlow, Mitschnitt). Gezählt wird, was am Material begründet ist.

**Fallen:**
- Die Baseline nur definieren, ohne zu sagen, wie der Vergleich mit ihr das geschilderte Problem löst.
- Übersehen, dass ein pauschaler Schwellwert zwei Fehler macht: Er meldet normale Spitzen und übersieht eine niedrige, aber für die Uhrzeit ungewöhnliche Last.
- SNMP wählen, um den Verursacher der Last auf einer gemeinsamen Leitung (etwa dem Internetanschluss) zu finden. SNMP zeigt je Schnittstelle nur, wie voll sie ist, nicht, welche Verbindungen darüber laufen; das zeigen erst Flussdaten.
- Immer zum Paketmitschnitt greifen und Datenmenge und Datenschutz übersehen.
- Bei der Wahl des Verfahrens nicht begründen, warum die anderen nicht passen.
- Im Log nur nach dem Stichwort des Symptoms suchen und so den falschen Dienst für schuldig halten.
- Die Ursache nennen, aber das Vorgehen weglassen, wenn es verlangt ist: Zeitraum eingrenzen, Information und Debug ausblenden, Quellen über den Zeitstempel zusammenführen.
- Den Alarm an eine Stelle schicken, die ihn zur fraglichen Zeit nicht liest (etwa ein Postfach am Wochenende); das ist so gut wie keine Meldung.
- Beim Festlegen der Reaktion einen Teil weglassen: Benachrichtigung je nach Stufe oder Uhrzeit, automatische Reaktion, Eskalation, Protokollierung.
- Ein Skript für unbekannte Störungen vorsehen; die IHK will „Meldung an die zuständige Stelle“ und „Skript bei bekannten Störungen“ lesen.
