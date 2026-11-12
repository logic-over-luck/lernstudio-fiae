Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz in Anwendungen › Bedrohungen, Anforderungen und Kryptografie › Integrität, Authentizität, Zertifikate und Passwortspeicherung

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

## Stoff: Integrität, Authentizität, Zertifikate und Passwortspeicherung

Ziel: Zertifikate, Signaturen und Hashwerte in Anwendungen einsetzen: Server prüfen, Signieren statt Verschlüsseln beurteilen, Passwörter sicher speichern. Hashwert, Signatur und Zertifikat für einen Zweck auswählen kennst du aus AP1-7-3-2.

Das muss ich können:

### K1 – Was ein SSL/TLS-Zertifikat bewirkt (Stufe 2 Verstehen)
Du kannst die Sicherheitsmechanismen erläutern, die ein SSL/TLS-Zertifikat für einen Webserver bewirkt: Der Server wird authentifiziert, die Übertragung wird verschlüsselt, die Integrität der Daten wird gesichert.

Erklärung:
Ein **SSL/TLS-Zertifikat** bewirkt:
- **Authentifizierung** des Servers (er ist, wer er vorgibt)
- **Verschlüsselung** der Übertragung
- **Integrität** – Veränderungen fallen auf
Die IHK-Lösung (2022S) ließ außerdem gelten: gesicherte Zugangskontrolle, Authentifizierung von Sender und Empfänger sowie einfachen, kostengünstigen Einsatz.

### K2 – Echtheit von Diensten über eine Zertifizierungsstelle (Stufe 2 Verstehen)
Du kannst erläutern, wie eine Software die Echtheit von Diensten prüft, ohne jeden öffentlichen Schlüssel vorab zu kennen: Die Zertifikate der Dienste werden von einer (auch firmeneigenen) Zertifizierungsstelle signiert; die Software prüft diese Signatur und ob das Zertifikat widerrufen wurde.

Erklärung:
Prinzip **Zertifizierungsstelle (CA)**:
- jeder Dienst hat ein Zertifikat, das eine (auch **firmeneigene**) CA **signiert** hat
- die Software kennt nur den öffentlichen Schlüssel der CA
- sie prüft die **Signatur** und ob das Zertifikat **widerrufen** wurde
So muss nicht jeder Schlüssel vorab bekannt sein.

### K3 – Signieren statt Verschlüsseln: reicht das (Stufe 4 Beurteilen)
Du kannst zu dem Vorschlag, Daten zu signieren statt zu verschlüsseln, begründet Stellung nehmen: Eine Signatur sichert Authentizität und Integrität, schützt aber nicht die Vertraulichkeit; ein MAC (Hash mit geheimem Schlüssel) ist günstig zu berechnen, eine echte Signatur ist asymmetrisch und aufwendiger; ob das reicht, hängt von der Art der Daten ab.

Erklärung:
Stellung nehmen „signieren statt verschlüsseln“:
- Signatur sichert **Authentizität und Integrität**
- sie schützt **nicht die Vertraulichkeit** – jeder kann mitlesen
- ein **MAC** (z. B. HMAC: Hash mit dem vorab verteilten geheimen Schlüssel) ist günstig zu berechnen, eine echte Signatur ist asymmetrisch und **aufwendiger**
- ein bloßer Hash ohne Schlüssel erkennt nur Übertragungsfehler, keine absichtliche Änderung (die IHK-Lösung spricht vereinfachend vom „Hash“ mit geringem Rechenaufwand)
Fazit hängt von den Daten ab: Messwerte ohne Geheimnis → Integrität reicht; personenbezogene Daten → verschlüsseln.

### K4 – Passwörter speichern: Hash mit Salt (Stufe 2 Verstehen)
Du kannst eine geeignete Speicherung von Passwörtern in einer Datenbank nennen und beschreiben: nicht im Klartext, sondern als Hashwert mit einem zufälligen Salt je Benutzer und einem bewusst langsamen Verfahren; bei der Anmeldung wird der Hash der Eingabe verglichen.

Erklärung:
Passwörter speichern:
- **nie im Klartext**
- als **Hashwert** mit **Salt** (zufällig, je Benutzer verschieden)
- mit einem **bewusst langsamen** Verfahren (bcrypt, Argon2)
- Anmeldung: Eingabe mit demselben Salt hashen und **Hashes vergleichen**

### K5 – Gebrochene Hashverfahren wie MD5 (Stufe 4 Beurteilen)
Du kannst begründen, warum gebrochene Hashverfahren wie MD5 für Prüfsummen und Signaturen nicht mehr eingesetzt werden, sondern ein Verfahren der SHA-2-Familie wie SHA-256: Bei MD5 lassen sich gezielt zwei Eingaben mit gleichem Hashwert erzeugen, sodass eine Fälschung nicht auffällt; Passwörter werden dagegen mit Salt und einem bewusst langsamen Verfahren gespeichert (K4).

Erklärung:
Eine kryptografische Hashfunktion muss **kollisionsresistent** sein: Zwei verschiedene Eingaben mit gleichem Hash darf man praktisch nicht finden können.
- Bei **MD5** (und inzwischen auch **SHA-1**) gelingt genau das: Angreifer erzeugen gezielt zwei Dateien mit demselben Hashwert.
- Folge: Eine harmlose und eine manipulierte Datei haben dieselbe Prüfsumme; eine Signatur über die eine gilt auch für die andere.
- Die Originaldaten aus dem Hash zurückzurechnen, gelingt dagegen auch bei MD5 nicht allgemein – das Problem sind die Kollisionen.
Deshalb heute **SHA-256** oder **SHA-512** (SHA-2) bzw. SHA-3. Für Passwörter reicht auch das nicht; dort braucht es Salt und ein bewusst langsames Verfahren (PB1-10-1-4-K4).
MD5 taucht noch als einfache Prüfsumme gegen Übertragungsfehler auf; gegen absichtliche Manipulation schützt es nicht. Auch eine SHA-256-Prüfsumme schützt vor Manipulation nur, wenn sie selbst nicht ausgetauscht werden kann – deshalb zusammen mit einer Signatur oder einem MAC (K3).

## Lehrnotiz: Integrität, Authentizität, Zertifikate und Passwortspeicherung

**Aufteilung:**
- Was ein Zertifikat für einen Webserver bewirkt: K1
- Viele Dienste prüfen über eine Zertifizierungsstelle: K2
- Signieren statt verschlüsseln beurteilen: K3
- Passwörter speichern: K4
- Gebrochene Hashverfahren ersetzen: K5

**Schon geprüft:** In Prüfungen: K1 (2022S), K2 (2022W), K3 (2023S), K4 (2025S) · Noch nicht geprüft: K5

**Kerngedanken:**
- Das Salt sorgt dafür, dass gleiche Passwörter verschiedene Hashwerte ergeben und vorberechnete Tabellen nichts nützen. Das langsame Verfahren macht massenhaftes Durchprobieren teuer. Das Salt wird neben dem Hashwert gespeichert.
- Passwörter werden gehasht und nicht verschlüsselt, weil bei Verschlüsselung irgendwo der Schlüssel liegt; ein Hashwert lässt sich nicht zurückrechnen.
- Die Zertifizierungsstelle erspart Schlüssellisten: Ein neuer Dienst bekommt nur ein Zertifikat, sonst ändert sich nichts. Der Widerruf ist nötig, weil ein echt signiertes Zertifikat ungültig werden kann, etwa wenn der private Schlüssel des Dienstes gestohlen wurde; die Signatur allein zeigt das nicht.
- Enthält eine Nachricht vertrauliche und nicht vertrauliche Daten, wird für jede Art getrennt entschieden, ob Signieren reicht.

**Typische Missverständnisse:**
- Viele denken, bei „Stellung nehmen“ zu Signieren statt Verschlüsseln sei nur eine Seite richtig; richtig ist: Zustimmung und Ablehnung können volle Punkte bringen, wenn sie aus der Art der Daten begründet sind.
- Viele denken, Passwörter gehörten „verschlüsselt“ in die Datenbank; richtig ist: als Hashwert mit Salt und langsamem Verfahren.

**Fachwörter:**
- Authentifizierung: Nachweis, wer die Gegenstelle ist
- Integrität: Veränderungen fallen auf
- Authentizität: Daten stammen vom angegebenen Absender
- Zertifizierungsstelle (CA): signiert die Zertifikate der Dienste
- MAC: Hash mit geheimem Schlüssel
- Salt: zufälliger Wert je Benutzer
- kollisionsresistent: zwei verschiedene Eingaben mit gleichem Hashwert praktisch nicht auffindbar

**So fragt die IHK:**
- Vier Teilaufgaben in vier Prüfungen.
- Drei Sicherheitsmechanismen eines SSL-Zertifikats für einen Webserver erläutern (9 Punkte, 3 je Mechanismus). Die Lösung zählt Authentifizierung, Verschlüsselung und Integrität, daneben Zugangskontrolle und einfachen, günstigen Einsatz.
- Erläutern, wie Software die Echtheit von Diensten prüft, ohne jeden öffentlichen Schlüssel zu kennen (3 Punkte: lokale CA signiert, Prüfung von Signatur und Widerruf).
- Stellung nehmen zum Vorschlag, Messdaten zu signieren statt zu verschlüsseln (4 Punkte: Authentizität und Integrität gegen Vertraulichkeit, dazu geringerer Rechenaufwand).
- Eine Passwortspeicherung nennen und beschreiben (3 Punkte; Lösungshinweise liegen nicht vor).
- MD5 wurde noch nicht abgefragt. Denkbar ist ein kurzes „Begründen Sie …“ mit 2 Punkten.

**Fallen:**
- Zertifikat: Nur drei Stichworte nennen. „Erläutern“ verlangt je Mechanismus die Wirkung und wogegen er schützt, sonst gibt es nur einen Teil der Punkte.
- Zertifizierungsstelle: Nur die Signatur prüfen lassen und den Widerruf vergessen; das kostet Punkte.
- Zertifizierungsstelle: Offenlassen, womit geprüft wird. Die Software braucht nur den öffentlichen Schlüssel der Zertifizierungsstelle.
- Zertifizierungsstelle: Für interne Dienste eine öffentliche Zertifizierungsstelle verlangen. Eine firmeneigene genügt.
- Signieren: Pauschal „Verschlüsseln ist immer besser“ oder nur „ja“ oder „nein“ schreiben.
- Signieren: Nicht erwähnen, dass die Signatur die Vertraulichkeit nicht schützt.
- Passwörter: Einen einfachen, schnellen Hash ohne Salt für ausreichend halten.
- Passwörter: Bei „beschreiben“ den Ablauf der Anmeldung weglassen.
