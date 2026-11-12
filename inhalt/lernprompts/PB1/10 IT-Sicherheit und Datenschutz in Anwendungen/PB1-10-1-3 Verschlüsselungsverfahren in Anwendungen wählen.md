Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz in Anwendungen › Bedrohungen, Anforderungen und Kryptografie › Verschlüsselungsverfahren in Anwendungen wählen

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

## Stoff: Verschlüsselungsverfahren in Anwendungen wählen

Ziel: Für eine Anwendung ein Verschlüsselungsverfahren vorschlagen und begründen, die hybride Transportverschlüsselung erläutern und Transport- von Ende-zu-Ende-Verschlüsselung unterscheiden.

Das muss ich können:

### K1 – Passendes Verschlüsselungsverfahren für eine Anwendung (Stufe 4 Beurteilen)
Du kannst ein Verschlüsselungsverfahren für eine Anwendung vorschlagen und begründen, zum Beispiel symmetrisch mit vorab verteiltem Schlüssel für batteriebetriebene Sensoren mit wenig Rechenleistung, deren Teilnehmer alle bekannt sind.

Erklärung:
Verfahren begründet wählen:
- **symmetrisch:** schnell, wenig Rechenleistung, aber Schlüssel muss vorab sicher verteilt sein (**Pre-Shared-Key**) → passt zu **Sensoren mit Batterie**, deren Teilnehmer bekannt sind
- **asymmetrisch:** kein gemeinsamer Geheimschlüssel nötig, aber rechenaufwendig
- **hybrid:** asymmetrisch Schlüssel aushandeln, dann symmetrisch verschlüsseln → Standard im Internet
Die Verfahren selbst kennst du aus AP1-7-3-1.
Achtung: Gefragt ist die Art des Verfahrens (symmetrisch). Wer nur einen Algorithmus wie AES nennt, verliert Punkte; schreib deshalb „symmetrisch, z. B. AES“.

### K2 – Hybride Transportverschlüsselung bei TLS und E-Mail (Stufe 2 Verstehen)
Du kannst die Art der Transportverschlüsselung bei TLS und bei der E-Mail-Übertragung nennen und erläutern: hybrid, also Sitzungsschlüssel asymmetrisch ausgehandelt (bei TLS 1.3 per Diffie-Hellman), Server per Zertifikat geprüft, Daten symmetrisch mit dem Sitzungsschlüssel verschlüsselt.

Erklärung:
TLS und E-Mail-Transport sind **hybrid**:
- Sitzungsschlüssel wird **asymmetrisch ausgehandelt** (TLS 1.3: Diffie-Hellman)
- der **Server** wird per **Zertifikat** geprüft
- die Daten werden **symmetrisch** mit dem Sitzungsschlüssel verschlüsselt
**Warum hybrid?** Asymmetrische Verfahren sind sehr rechenaufwendig, symmetrische schnell; hybrid vereint die Vorteile beider.
**Vorteil gegenüber rein symmetrisch:** Die Partner brauchen kein vorher vereinbartes gemeinsames Geheimnis (Pre-Shared-Secret); der Sitzungsschlüssel entsteht je Verbindung neu.
Achtung: Gefragt ist die **Art** des Verfahrens, richtig ist nur „hybrid“. Die Antwort „asymmetrisch“ oder der Protokollname „TLS“ gibt in der Prüfung 0 Punkte.

### K3 – Transport- gegen Ende-zu-Ende-Verschlüsselung (Stufe 3 Anwenden)
Du kannst Transportverschlüsselung (nur der Übertragungsweg ist geschützt) und Ende-zu-Ende-Verschlüsselung (nur Absender und Empfänger können lesen) unterscheiden und für eine Anwendung festlegen, welche nötig ist.

Erklärung:
- **Transportverschlüsselung:** nur der **Weg** ist geschützt; auf dem Server liegen die Daten lesbar (z. B. E-Mail per TLS)
- **Ende-zu-Ende:** nur **Absender und Empfänger** können lesen, auch der Anbieter nicht (z. B. Messenger)
Festlegen: Dürfen Betreiber oder Zwischenstationen die Daten sehen? Wenn nein → Ende-zu-Ende.

### K4 – Schlüsseltausch nach Diffie-Hellman (Stufe 2 Verstehen)
Du kannst das Prinzip des Diffie-Hellman-Schlüsselaustauschs erklären: Beide Seiten tauschen nur öffentliche Werte aus und berechnen daraus zusammen mit ihrem jeweils geheimen Wert denselben Sitzungsschlüssel, der selbst nie übertragen wird, sodass ein Mithörer ihn nicht kennt.

Erklärung:
Das Grundproblem symmetrischer Verfahren ist der **Schlüsseltausch**: Wie einigen sich zwei Seiten über eine abhörbare Leitung auf einen gemeinsamen Schlüssel?
**Diffie-Hellman** löst das, ohne den Schlüssel zu senden:
- Jede Seite wählt einen geheimen Wert und schickt nur einen daraus berechneten öffentlichen Wert.
- Jede Seite verrechnet den fremden öffentlichen Wert mit dem eigenen Geheimnis – beide erhalten dasselbe Ergebnis.
- Ein Mithörer sieht nur die öffentlichen Werte; daraus den Schlüssel zu berechnen ist praktisch unmöglich.
Bildlich: Beide mischen eine gemeinsame Grundfarbe mit ihrer Geheimfarbe, tauschen die Mischungen und geben ihre Geheimfarbe noch einmal dazu – am Ende haben beide dieselbe Farbe.
Wichtig: Diffie-Hellman prüft nicht, **wer** am anderen Ende ist; deshalb prüft TLS den Server zusätzlich per Zertifikat (PB1-10-1-3-K2).

### K5 – Nur anerkannte Kryptoverfahren und Bibliotheken (Stufe 4 Beurteilen)
Du kannst begründen, warum eine Anwendung nur anerkannte, aktuell empfohlene Kryptoverfahren aus gepflegten Bibliotheken einsetzt (Orientierung gibt eine Technische Richtlinie des BSI) und keine selbst erfundenen, selbst programmierten oder veralteten: Eigenentwicklungen enthalten fast immer Schwachstellen, und auch in bewährten Verfahren und ihren Umsetzungen werden Lücken gefunden, die eine gepflegte Bibliothek per Update schließt.

Erklärung:
Ob ein Verfahren sicher ist, zeigt sich erst, wenn viele Fachleute jahrelang vergeblich versucht haben, es zu brechen. Ein selbst erdachtes Verfahren hat diese Prüfung nie bestanden.
- **Nicht selbst erfinden:** Eigene „geheime“ Algorithmen sind meist schnell geknackt; Sicherheit darf nur vom Schlüssel abhängen, nicht von der Geheimhaltung des Verfahrens.
- **Nicht selbst programmieren:** Auch ein bewährtes Verfahren wie AES lässt sich falsch umsetzen, etwa mit schwachem Zufall oder wiederverwendeten Startwerten.
- **Gepflegte Bibliothek:** Lücken werden dort gefunden und per Update geschlossen.
- **Aktuelle Empfehlungen:** Das BSI nennt in der TR-02102 geeignete Verfahren und Schlüssellängen; veraltete wie DES oder MD5 fallen heraus.
Beispiel: Statt Kundendaten mit einer selbst geschriebenen XOR-Routine zu „verschlüsseln“, nutzt du AES aus der Kryptobibliothek der Plattform.

### K6 – OpenPGP und S/MIME im Vergleich (Stufe 2 Verstehen)
Du kannst OpenPGP und S/MIME als Verfahren der Ende-zu-Ende-Verschlüsselung von E-Mails vergleichen: Beide arbeiten mit Schlüsselpaaren und sind untereinander nicht kompatibel; bei OpenPGP bestätigen sich die Nutzer gegenseitig die Echtheit der Schlüssel (Web of Trust), bei S/MIME beglaubigt eine Zertifizierungsstelle das Zertifikat – das kostet meist etwas, wird aber von den meisten Mailprogrammen ohne Zusatzsoftware unterstützt.

Erklärung:
Bei der Ende-zu-Ende-Verschlüsselung (PB1-10-1-3-K3) verschlüsselt der Absender mit dem öffentlichen Schlüssel des Empfängers, intern hybrid. Die Kernfrage ist: **Woher weiß ich, dass dieser Schlüssel wirklich dem Empfänger gehört?**
- **OpenPGP:** Nutzer erzeugen ihre Schlüssel selbst und bestätigen sich gegenseitig (**Web of Trust**). Kostenlos, aber das Vertrauen muss man selbst aufbauen; oft ist Zusatzsoftware nötig.
- **S/MIME:** Eine **Zertifizierungsstelle** stellt ein Zertifikat aus, wie bei TLS. Meist kostenpflichtig, dafür in gängigen Mailprogrammen eingebaut und in Firmen zentral verwaltbar.
- Beide können auch signieren. Sie sind nicht kompatibel: Absender und Empfänger brauchen dasselbe Verfahren.
Beispiel: Ein Unternehmen mit eigener Zertifikatsverwaltung wählt S/MIME; ein Open-Source-Projekt mit verstreuten Freiwilligen eher OpenPGP.

## Lehrnotiz: Verschlüsselungsverfahren in Anwendungen wählen

**Aufteilung:**
- Verfahren für eine Anwendung begründet wählen: K1
- Warum TLS und E-Mail-Transport hybrid arbeiten: K2
- Schlüssel vereinbaren, ohne ihn zu senden: K4
- Transport- oder Ende-zu-Ende-Verschlüsselung festlegen: K3
- Ende-zu-Ende bei E-Mail, zwei Verfahren im Vergleich: K6
- Nur anerkannte Verfahren aus gepflegten Bibliotheken: K5

**Schon geprüft:** In Prüfungen: K1 (2021W, 2023S), K2 (2022W, 2025W) · Noch nicht geprüft: K3–K6

**Kerngedanken:**
- Gewählt wird nach Gerät und Teilnehmern. Begründen heißt, eine Eigenschaft des Verfahrens mit einer Eigenschaft des Falls zu verbinden: Wenig Rechenleistung spricht für symmetrisch. Sind alle Teilnehmer bekannt, ist das Verteilen des Schlüssels zumutbar. Unbekannte oder wechselnde Teilnehmer verlangen hybrid.
- Beim Vorschlagen eines Verfahrens und bei der Frage nach der Art der Verschlüsselung (TLS, E-Mail-Transport) ist die Art gefragt (symmetrisch, asymmetrisch, hybrid), nicht ein Protokoll oder ein Algorithmus.
- Diffie-Hellman schützt nur gegen Mithörer. Ohne Zertifikat könnte ein Angreifer in der Mitte mit beiden Seiten je einen eigenen Schlüssel aushandeln.

**Typische Missverständnisse:**
- Viele denken, bei Diffie-Hellman werde der Schlüssel mit dem öffentlichen Schlüssel des Partners verschlüsselt verschickt; richtig ist: Es wird nichts verschlüsselt übertragen, beide berechnen den Schlüssel selbst.
- Viele denken, Ende-zu-Ende sei immer die bessere Wahl; richtig ist: Ist der Server selbst der Empfänger und muss die Daten verarbeiten, genügt Transportverschlüsselung.

**Fachwörter:**
- hybrid: Schlüssel asymmetrisch aushandeln, Daten symmetrisch verschlüsseln
- Sitzungsschlüssel: symmetrischer Schlüssel für eine Verbindung
- Pre-Shared-Secret: vorab vereinbartes gemeinsames Geheimnis
- Transportverschlüsselung: nur der Übertragungsweg ist geschützt
- Ende-zu-Ende: nur Absender und Empfänger lesen
- Diffie-Hellman: Schlüssel berechnen, ohne ihn zu senden
- Web of Trust: Nutzer bestätigen sich gegenseitig Schlüssel
- Zertifizierungsstelle: beglaubigt Zertifikate

**So fragt die IHK:**
- Sechs Teilaufgaben in vier Prüfungen. Am häufigsten: die Art des Verfahrens bei TLS oder beim E-Mail-Transport nennen (1 Punkt, erwartet „hybrid“) und erläutern.
- Erläutert wurde einmal der Vorteil (3 Punkte: kein vorab vereinbartes gemeinsames Geheimnis) und einmal der Ablauf (4 Punkte: im Handshake asymmetrisch, nach Einigung auf den Schlüssel symmetrisch, weil asymmetrisch sehr rechenaufwendig ist).
- Einmal war für batteriebetriebene Geräte mit wenig Rechenleistung ein Verfahren vorzuschlagen und zu begründen (4 Punkte). Erwartet war symmetrisch, weil wenig Rechenleistung da ist und alle Teilnehmer bekannt sind.
- Einmal war ein symmetrisches Verfahren zu beschreiben (2 Punkte) und eine Alternative mit Vor- und Nachteil anzugeben (6 Punkte).
- Transport gegen Ende-zu-Ende, Diffie-Hellman, OpenPGP und S/MIME sowie die BSI-Empfehlung kamen noch nicht eigens vor. Zu erwarten sind „Erläutern Sie …“ oder „Nehmen Sie Stellung …“ mit 2–4 Punkten.

**Fallen:**
- Wahl: Einen Algorithmus wie AES statt der Art des Verfahrens nennen; das kostet Punkte.
- Wahl: „Symmetrisch, weil schneller“ schreiben, ohne zu sagen, warum die Schlüsselverteilung hier zumutbar ist.
- Wahl: Bei vorher unbekannten Teilnehmern symmetrisch vorschlagen (Verteilung ungelöst) oder asymmetrisch, ohne den Rechenaufwand zu bedenken.
- Wahl: „Hybrid“ nur halb begründen. Es gehören beide Gründe dazu: kein vorab verteilbarer Schlüssel und asymmetrisch allein zu aufwendig.
- TLS: Den Protokollnamen als Art des Verfahrens nennen; das gibt 0 Punkte.
- TLS: Als Vorteil gegenüber rein symmetrisch nur „schneller“ nennen oder beim Erläutern nicht beide Teile mit ihrer Rolle und dem Grund angeben.
- Schlüsseltausch: Die Rolle des Zertifikats weglassen.
- Transport oder Ende-zu-Ende: Nur „ist sicherer“ schreiben, statt zu sagen, wer Empfänger ist und wer nur auf dem Weg liegt.
- E-Mail: Web of Trust und Zertifizierungsstelle vertauschen oder „S/MIME ist sicherer“ als Begründung geben. Die Unterschiede sind Bestätigung der Schlüssel, Kosten und Software.
- E-Mail: Nicht vorab klären, welches Verfahren die Gegenseite nutzt.
- Bibliotheken: „Wir nehmen eine Bibliothek“ für ausreichend halten, obwohl sie veraltet ist.
- Bibliotheken: In einer Lage mit zwei Problemen (eigene Umsetzung und veraltetes Verfahren) nur eines ansprechen oder die Orientierung am BSI weglassen.
