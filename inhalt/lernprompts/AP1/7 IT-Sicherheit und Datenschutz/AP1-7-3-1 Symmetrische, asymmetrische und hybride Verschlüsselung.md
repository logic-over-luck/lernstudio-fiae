Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz › Technische Schutzmaßnahmen › Symmetrische, asymmetrische und hybride Verschlüsselung

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

## Stoff: Symmetrische, asymmetrische und hybride Verschlüsselung

Ziel: Die drei Verfahren mit ihren Schlüsseln erklären, vergleichen und den Schutz verschlüsselter Daten beurteilen.

Das muss ich können:

### K1 – Symmetrische Verschlüsselung mit einem Schlüssel (Stufe 2 Verstehen)
Du kannst symmetrische Verschlüsselung erklären: derselbe geheime Schlüssel zum Ver- und Entschlüsseln, zum Beispiel bei AES.

Erklärung:
Bei symmetrischer Verschlüsselung gibt es **einen einzigen geheimen Schlüssel** – mit ihm wird **ver- und entschlüsselt**.
- Vorteil: **schnell**, auch bei großen Datenmengen.
- Problem: Sender und Empfänger müssen den Schlüssel vorher **sicher austauschen**. Wer ihn abfängt, kann alles lesen.
Bekanntestes Verfahren: **AES**.

### K2 – Asymmetrische Verschlüsselung mit Schlüsselpaar (Stufe 2 Verstehen · in der Prüfung vorgegeben: Skizze mit Schlüsseln)
Du kannst asymmetrische Verschlüsselung beschreiben: Mit dem öffentlichen Schlüssel des Empfängers wird verschlüsselt, nur sein privater Schlüssel entschlüsselt; ein bekanntes Verfahren ist RSA.

Erklärung:
Jeder Teilnehmer hat ein **Schlüsselpaar**:
- **öffentlicher Schlüssel:** darf jeder kennen
- **privater Schlüssel:** bleibt geheim beim Besitzer
Ablauf: Der Absender verschlüsselt mit dem **öffentlichen Schlüssel des Empfängers**. Entschlüsseln kann **nur** der Empfänger mit seinem **privaten** Schlüssel.
Merkhilfe: Wie ein Briefkasten – einwerfen kann jeder, öffnen nur der mit dem Schlüssel.
Bekanntes Verfahren: **RSA**.

### K3 – Symmetrisch gegen asymmetrisch: Vor- und Nachteil (Stufe 1 Wiedergeben)
Du kannst je einen Vorteil und Nachteil nennen: Das asymmetrische Verfahren braucht keinen sicheren Schlüsseltausch, ist aber rechenaufwendiger.

Erklärung:
- **Vorteil asymmetrisch:** Kein sicherer Schlüsseltausch nötig – den öffentlichen Schlüssel darf ja jeder kennen.
- **Nachteil asymmetrisch:** rechenaufwendiger, also langsamer.
Bei symmetrisch ist es umgekehrt: schnell, aber der Schlüsseltausch ist das Problem.

### K4 – Hybride Verschlüsselung mit Sitzungsschlüssel (Stufe 2 Verstehen)
Du kannst hybride Verschlüsselung erklären: Ein symmetrischer Sitzungsschlüssel wird asymmetrisch geschützt übertragen, die Daten selbst werden symmetrisch verschlüsselt, zum Beispiel bei TLS (HTTPS).

Erklärung:
Hybride Verschlüsselung verbindet die Vorteile beider:
- Die **Daten** werden **symmetrisch** mit einem zufälligen **Sitzungsschlüssel** verschlüsselt – schnell.
- Der **Sitzungsschlüssel** wird **asymmetrisch** mit dem öffentlichen Schlüssel des Empfängers verschlüsselt und mitgeschickt – sicherer Austausch.
- Der Empfänger entschlüsselt mit seinem privaten Schlüssel den Sitzungsschlüssel und damit die Daten.
Nach diesem Prinzip (vereinfacht) arbeitet z. B. HTTPS mit **TLS**.

### K6 – Datenträgerverschlüsselung bei Laptop-Diebstahl (Stufe 4 Beurteilen)
Du kannst beurteilen, ob eine Datenträgerverschlüsselung die Daten bei Diebstahl des Laptops schützt; dabei berücksichtigst du, dass der Schlüssel im TPM-Chip des Geräts liegt, ein Ausbau der SSD dem Dieb also nicht hilft, und dass „TPM ohne PIN“ beim Start automatisch entsperrt und daher schwächer schützt als TPM mit Passwort oder PIN.

Erklärung:
- **Schützt**, wenn das Notebook **ausgeschaltet oder gesperrt** gestohlen wird und Kennwort bzw. Schlüssel **nicht beim Gerät** liegen. Auch wer die Festplatte ausbaut, kann nichts lesen.
- **Schützt nicht**, wenn das Notebook **eingeschaltet und entsperrt** gestohlen wird – dann sind die Daten bereits entschlüsselt zugänglich.
- **Schützt nicht**, wenn das Kennwort auf einem Zettel am Notebook klebt.
Das **TPM** ist ein Sicherheitschip im Gerät, der den Schlüssel speichert und nur an das unveränderte System herausgibt. Ausbauen der SSD hilft dem Dieb nicht – der Schlüssel bleibt im TPM. **TPM ohne PIN** entsperrt beim Einschalten aber automatisch – dann schützt nur noch die Anmeldung am Betriebssystem; sicherer ist **TPM plus PIN oder Passwort**.

### K7 – Aufbewahrung des Wiederherstellungsschlüssels (Stufe 4 Beurteilen)
Du kannst Verfahren zum Aufbewahren eines Wiederherstellungsschlüssels beurteilen: Datei auf dem PC, Cloud-Speicher, USB-Stick, Ausdruck mit je einem Vor- und Nachteil.

Erklärung:
Den Wiederherstellungsschlüssel braucht man, wenn das normale Kennwort nicht mehr funktioniert. Er darf **nicht verloren** gehen und **nicht beim Gerät** liegen.
- **Datei auf dem PC:** bequem / im Ernstfall nicht erreichbar – der PC ist ja gesperrt.
- **Cloud-Speicher:** überall erreichbar / gefährdet, wenn das Cloud-Konto übernommen wird.
- **USB-Stick:** offline, nicht im Internet / kann verloren gehen, darf nicht beim Gerät liegen.
- **Ausdruck:** offline, im Tresor sicher / kann verloren gehen, mühsam abzutippen.

### K8 – SSH statt Telnet für Fernzugriff (Stufe 4 Beurteilen)
Du kannst begründen, warum unverschlüsselte Verbindungsarten wie Telnet oder eine serielle Verbindung für einen Fernzugriff ungeeignet sind und eine verschlüsselte wie SSH gewählt wird.

Erklärung:
- **Telnet** und eine **serielle Verbindung** (direktes Kabel zum Gerät) übertragen Benutzername, Passwort und alle Befehle **unverschlüsselt**. Wer die Verbindung mitliest, sieht alles im Klartext und kann sich selbst anmelden.
- **SSH** verschlüsselt die **gesamte Verbindung**.
Deshalb: Für einen Fernzugriff über ein Netz immer SSH.

### K10 – Passendes Verschlüsselungsverfahren auswählen (Stufe 4 Beurteilen)
Du kannst für einen Fall begründet auswählen, welches Verschlüsselungsverfahren passt: symmetrisch (zum Beispiel AES) für die eigene Festplatte oder große Datenmengen, weil es schnell ist und kein Schlüssel an andere gelangen muss; hybrid für E-Mails an Partner und für Webseiten (HTTPS mit TLS), weil der Sitzungsschlüssel asymmetrisch (zum Beispiel RSA) sicher übertragen und die Daten schnell symmetrisch verschlüsselt werden.

Erklärung:
Frag: **Wer** muss die Daten entschlüsseln, und **wie viele** Daten sind es?
- **Eigene Festplatte, Backup, große Datenmengen:** **symmetrisch (z. B. AES)** – schnell, und der Schlüssel bleibt bei dir, es muss nichts ausgetauscht werden.
- **E-Mail an Partner, Webseite (HTTPS):** **hybrid** – die Daten werden schnell symmetrisch verschlüsselt, der Sitzungsschlüssel asymmetrisch (z. B. **RSA**) mit dem öffentlichen Schlüssel des Empfängers geschützt. So braucht es keinen geheimen Schlüsseltausch vorab. Bei Webseiten heißt das Verfahren **TLS**.
- **Rein asymmetrisch** verschlüsselt man große Daten nicht – das wäre zu langsam.

## Lehrnotiz: Symmetrische, asymmetrische und hybride Verschlüsselung

**Aufteilung:**
- Teil A – die drei Verfahren: symmetrisch K1; asymmetrisch und Vergleich K2, K3; hybrid K4; Verfahren auswählen K10
- Pause möglich nach Teil A.
- Teil B – Verschlüsselung im Einsatz: Laptop-Diebstahl K6; Wiederherstellungsschlüssel K7; Fernzugriff K8

**Schon geprüft:** In Prüfungen: K2 (2025F), K3 (2025F), K6 (2023H), K7 (2023H), K8 (2025F) · Noch nicht geprüft: K1, K4, K10

**Kerngedanken:**
- Beim asymmetrischen Verschlüsseln zählen nur die beiden Schlüssel des Empfängers. Wechseln die Rollen (Antwort zurück), wechselt auch das Schlüsselpaar.
- Hybrid ist nötig, weil jedes Verfahren allein scheitert: Symmetrisch fehlt vorab ein gemeinsamer Schlüssel, rein asymmetrisch ist zu langsam.
- „TPM ohne PIN“ ist weder voll geschützt noch ungeschützt: Der Ausbau der SSD nützt dem Dieb nichts, aber nach dem Einschalten ist das Laufwerk entsperrt, und es schützt nur noch die Anmeldung am Betriebssystem.

**Typische Missverständnisse:**
- Viele denken, asymmetrisch sei „sicherer“ und daher auch für die eigene Festplatte besser; richtig ist: Es löst nur das Problem des Schlüsseltauschs, das es dort gar nicht gibt.
- Viele denken, bei hybrid würden die Daten asymmetrisch verschlüsselt; richtig ist: Asymmetrisch geschützt wird nur der kleine Sitzungsschlüssel.

**Fachwörter:**
- öffentlicher Schlüssel: darf jeder kennen, zum Verschlüsseln
- privater Schlüssel: bleibt geheim beim Besitzer
- Sitzungsschlüssel: zufälliger symmetrischer Schlüssel für eine Übertragung
- TPM: Sicherheitschip im Gerät, speichert den Schlüssel
- Wiederherstellungsschlüssel: Ersatz, wenn das Kennwort nicht funktioniert
- SSH: verschlüsselte Verbindung für den Fernzugriff

**So fragt die IHK:**
- 2023H, Laptop mit verschlüsselter SSD (TPM, Passwort beim Start): Tabelle mit vier Aufbewahrungsorten für den Wiederherstellungsschlüssel, je ein charakteristischer Vor- und Nachteil in Stichworten („beurteilen“, 3 Punkte, Lösungen beispielhaft). Dazu: Schutz der Daten bei Diebstahl des ganzen Laptops beurteilen (2 Punkte; gezählt: kein Zugriff, weil das Passwort zum Entsperren fehlt).
- 2025F, verschlüsselte Mail: anhand einer Skizze mit vier Schlüsseln Ver- und Entschlüsselung beschreiben (4 Punkte), dazu je ein Vorteil und Nachteil gegenüber symmetrisch nennen (2 Punkte).
- 2025F, Verbindungsdialog mit SSH, Serial und Telnet: begründen, warum nicht Serial und Telnet (2 Punkte; gezählt: unverschlüsselt).
- Zu hybrid und zur Auswahl des Verfahrens gibt es keine echte Aufgabe.

**Fallen:**
- Teil A: Für einen neuen Einsatz Triple DES (3DES) oder DES empfehlen – beide sind symmetrisch, gelten aber als veraltet; empfohlen wird AES.
- Teil A: Den geheimen Schlüssel (oder das Kennwort) auf demselben Weg schicken wie die verschlüsselten Daten – wer beides abfängt, kann alles lesen.
- Teil A: Bei der Begründung dazu nur „unsicher“ schreiben, statt zu sagen, dass derselbe Schlüssel auch entschlüsselt.
- Teil A: Mit dem eigenen privaten Schlüssel oder mit dem öffentlichen Schlüssel des Absenders verschlüsseln.
- Teil A: Für Mail oder Webseite „asymmetrisch“ antworten, wo hybrid gemeint ist, oder ein Verfahren nur zuordnen, ohne mit „wer entschlüsselt“ und der Datenmenge zu begründen.
- Teil B: Einen Aufbewahrungsort nur mit „sicher“ oder „unsicher“ bewerten, oder übersehen, dass ein Zettel in der Laptoptasche „beim Gerät“ liegt und ein Handyfoto oft automatisch in der Cloud landet.
- Teil B: Als Begründung nur „SSH ist besser“ schreiben, oder Telnet im internen Netz für unbedenklich halten – auch dort kann jemand mitlesen.
