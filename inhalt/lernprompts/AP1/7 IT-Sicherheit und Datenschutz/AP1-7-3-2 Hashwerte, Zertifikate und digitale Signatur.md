Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz › Technische Schutzmaßnahmen › Hashwerte, Zertifikate und digitale Signatur

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

## Stoff: Hashwerte, Zertifikate und digitale Signatur

Ziel: Hashwert, Signatur und Zertifikat erklären, ihren Ablauf beschreiben und für einen Zweck das passende Mittel einsetzen.

Das muss ich können:

### K1 – Hashwert: Begriff und Eigenschaften (Stufe 2 Verstehen)
Du kannst erklären, was ein Hashwert ist: ein Prüfwert fester Länge, der sich schon bei kleinster Änderung der Daten ändert und sich nicht zurückrechnen lässt.

Erklärung:
Ein Hashwert ist ein **Prüfwert fester Länge**, der aus beliebigen Daten berechnet wird – wie ein digitaler Fingerabdruck.
- Er hat immer **dieselbe Länge**, egal ob die Datei 1 KB oder 10 GB groß ist.
- Schon die **kleinste Änderung** an den Daten ergibt einen **völlig anderen** Hashwert.
- Er lässt sich **nicht zurückrechnen** – aus dem Hashwert kann man die Daten nicht wiederherstellen.

### K2 – Prüfung eines Downloads per Hashwert (Stufe 2 Verstehen)
Du kannst erläutern, wie man mit einem Hashwert die Unversehrtheit eines Downloads prüft: Wert selbst berechnen und mit dem angegebenen vergleichen.

Erklärung:
- Auf der Downloadseite steht der Hashwert der Datei, z. B. ein SHA-256-Wert.
- Du berechnest den Hashwert der heruntergeladenen Datei **selbst** – mit demselben Verfahren.
- **Vergleichen:** Sind beide gleich, ist die Datei **unverändert und unbeschädigt**.
Voraussetzung: Der angegebene Wert stammt aus einer **vertrauenswürdigen Quelle** – sonst könnte ein Angreifer Datei und Hashwert gleichzeitig fälschen.

### K3 – Leistung einer digitalen Signatur (Stufe 2 Verstehen)
Du kannst erklären, was eine digitale Signatur leistet: Sie belegt, von wem eine Nachricht stammt und dass sie nicht verändert wurde.

Erklärung:
Eine digitale Signatur belegt zwei Dinge:
- **Herkunft (Authentizität):** Die Nachricht stammt wirklich vom angegebenen Absender.
- **Unversehrtheit (Integrität):** Die Nachricht wurde unterwegs nicht verändert.

### K4 – Ablauf der digitalen Signatur (Stufe 2 Verstehen · in der Prüfung vorgegeben: Skizze mit Schlüsseln)
Du kannst den Ablauf beschreiben: Der Absender verschlüsselt den Hashwert mit seinem privaten Schlüssel; der Empfänger prüft mit dem öffentlichen Schlüssel des Absenders.

Erklärung:
**Absender:**
- bildet den Hashwert der Nachricht
- verschlüsselt diesen Hashwert mit seinem **privaten Schlüssel** – das ist die Signatur
- schickt Nachricht und Signatur
**Empfänger:**
- entschlüsselt die Signatur mit dem **öffentlichen Schlüssel des Absenders**
- berechnet selbst den Hashwert der Nachricht
- vergleicht: gleich → echt und unverändert
Warum privat signieren? Nur der Absender hat seinen privaten Schlüssel – prüfen kann jeder mit dem öffentlichen.

### K5 – Zweck eines Zertifikats (Stufe 2 Verstehen)
Du kannst erklären, wozu ein Zertifikat dient: Es bestätigt, dass ein öffentlicher Schlüssel zu einer bestimmten Person oder Website gehört, und kann so zum Beispiel einen Mitarbeiter gegenüber dem Firmenserver ausweisen.

Erklärung:
Ein Zertifikat ist wie ein **digitaler Ausweis**: Es bestätigt, dass ein **öffentlicher Schlüssel** zu einer **bestimmten Person, Organisation oder Website** gehört.
Ohne Zertifikat könnte ein Angreifer seinen eigenen öffentlichen Schlüssel als den der Bank ausgeben.
Beispiel im Betrieb: Ein Mitarbeiter weist sich mit seinem Zertifikat gegenüber dem Firmenserver aus. Der Server prüft das Zertifikat und dass der Mitarbeiter den passenden privaten Schlüssel besitzt.

### K6 – Zertifizierungsstelle als Aussteller (Stufe 2 Verstehen)
Du kannst erklären, dass eine Zertifizierungsstelle das Zertifikat ausstellt und beglaubigt.

Erklärung:
Eine **Zertifizierungsstelle** (CA, Certificate Authority) prüft die Identität und **stellt das Zertifikat aus**. Mit ihrer eigenen Signatur **beglaubigt** sie, dass öffentlicher Schlüssel und Inhaber zusammengehören.
Browser und Betriebssysteme vertrauen einer Liste bekannter Zertifizierungsstellen – deshalb erscheint bei HTTPS das Schloss.

### K7 – Hashwert, Signatur oder Zertifikat je Zweck (Stufe 3 Anwenden)
Du kannst für einen Zweck das passende Mittel einsetzen: Hashwert für die Unversehrtheit, Signatur für Herkunft und Unversehrtheit, Zertifikat für die Zugehörigkeit eines öffentlichen Schlüssels.

Erklärung:
Frag, was nachgewiesen werden soll:
- Ist die **Datei unverändert**? → **Hashwert**
- Stammt das Dokument **von diesem Absender** und ist es **unverändert**? → **digitale Signatur**
- Gehört dieser **öffentliche Schlüssel** wirklich zu dieser Person oder Website? → **Zertifikat**

### K8 – Zweistufige Prüfung eines Installationsabbilds (Stufe 3 Anwenden)
Du kannst Prüfsumme und Signatur einsetzen, um ein heruntergeladenes Installationsabbild in zwei Stufen abzusichern: Die selbst berechnete Prüfsumme zeigt nur, dass die Datei zur angegebenen Prüfsumme passt; erst die gültige Signatur des Herausgebers über die Prüfsummendatei zeigt, dass beides wirklich von ihm stammt und nicht von einem Angreifer ausgetauscht wurde.

Erklärung:
Ein Angreifer, der einen Download-Server übernimmt, kann die Datei **und** die daneben stehende Prüfsumme austauschen – der Vergleich stimmt dann trotzdem.
- **Stufe 1 – Prüfsumme** (= Hashwert der Datei, z. B. SHA-256) selbst berechnen und vergleichen → Die Datei ist **unversehrt**, also weder beschädigt noch gegenüber der Prüfsummendatei verändert.
- **Stufe 2 – Signatur** der Prüfsummendatei mit dem öffentlichen Schlüssel des Herausgebers prüfen → Die Prüfsummen stammen **wirklich vom Herausgeber**.
Beispiel: Linux-Distributionen veröffentlichen neben dem Abbild eine Datei mit Prüfsummen und eine Signaturdatei dazu.
Erst beide Stufen zusammen sichern Integrität und Herkunft.

### K10 – Website-Zertifikat und Browserwarnung (Stufe 3 Anwenden)
Du kannst das Zertifikat einer Website verwenden, um ihre Echtheit festzustellen: Es enthält den Inhaber (Domain), seinen öffentlichen Schlüssel, den Aussteller, den Gültigkeitszeitraum und die Signatur der Zertifizierungsstelle; der Browser vertraut ihm, wenn sich die Kette bis zu einem Stammzertifikat in seinem Zertifikatsspeicher zurückverfolgen lässt. Ist es abgelaufen, passt der Name nicht zur aufgerufenen Adresse oder ist es selbst signiert, warnt der Browser – dann gibst du keine vertraulichen Daten ein.

Erklärung:
Ein Website-Zertifikat ist ihr **digitaler Ausweis**. Es enthält:
- **Inhaber** (Domain, z. B. `www.meinebank.de`)
- **öffentlichen Schlüssel** des Inhabers
- **Aussteller** (Zertifizierungsstelle, CA)
- **Gültigkeitszeitraum**
- **Signatur der CA**, die alles bestätigt
**Vertrauenskette:** Der Browser prüft die Signatur und verfolgt die Kette bis zu einem **Stammzertifikat** zurück, das in Browser oder Betriebssystem als vertrauenswürdig hinterlegt ist.
**Warnung beurteilen:** Der Browser warnt, wenn das Zertifikat **abgelaufen** ist, der **Name nicht zur Adresse passt** oder es **selbst signiert** bzw. von einer unbekannten Stelle ist. Dann ist die Echtheit nicht bestätigt → nicht fortfahren, keine Zugangsdaten eingeben, Adresse prüfen und die IT informieren.

### K11 – Qualifizierte elektronische Signatur nach eIDAS (Stufe 1 Wiedergeben)
Du kannst die qualifizierte elektronische Signatur nach eIDAS erklären: der Unterschrift rechtlich gleichgestellt, Schlüssel in einer qualifizierten Signaturerstellungseinheit (QSEE), Zertifikat von einem qualifizierten Vertrauensdiensteanbieter; für Organisationen gibt es das elektronische Siegel.

Erklärung:
Die qualifizierte elektronische Signatur nach der EU-Verordnung eIDAS ist der eigenhändigen Unterschrift rechtlich gleichgestellt; der Schlüssel liegt in einer qualifizierten Signaturerstellungseinheit (QSEE), z. B. einer Signaturkarte, das Zertifikat stellt ein qualifizierter Vertrauensdiensteanbieter aus. Für Organisationen gibt es das elektronische Siegel.

## Lehrnotiz: Hashwerte, Zertifikate und digitale Signatur

**Aufteilung:**
- Teil A – Hashwert: Begriff K1; Download prüfen K2
- Teil B – digitale Signatur: Leistung K3; Ablauf K4
- Pause möglich nach Teil B.
- Teil C – Zertifikat: Zweck K5; Zertifizierungsstelle K6; Website-Zertifikat und Browserwarnung K10; qualifizierte elektronische Signatur K11
- Teil D – zusammenführen: Mittel je Zweck K7; zweistufige Prüfung K8

**Schon geprüft:** In Prüfungen: K2 (2025F), K4 (neuere Prüfung), K5 (2023H), K10 (2023H) · Noch nicht geprüft: K1, K3, K6–K8, K11

**Kerngedanken:**
- Signatur und Zertifikat setzen das Schlüsselpaar aus der asymmetrischen Verschlüsselung voraus (öffentlicher und privater Schlüssel). Das vor Teil B kurz wiederholen; dort wird es umgekehrt benutzt: Verschlüsselt wird mit dem öffentlichen Schlüssel des Empfängers, signiert mit dem eigenen privaten.
- Einen Hashwert kann jeder berechnen. Er zeigt deshalb nur, ob Daten zu einem Vergleichswert passen, nie von wem sie stammen. Ein Angreifer ändert die Nachricht und rechnet den Hashwert einfach neu; erst der private Schlüssel bringt etwas hinein, das nur der Absender erzeugen kann.
- Die drei Mittel bauen aufeinander auf: Die Signatur braucht den Hashwert, und die Prüfung der Signatur ist nur so viel wert wie die Gewissheit, wem der öffentliche Schlüssel gehört – die liefert das Zertifikat.
- „Prüfsumme“ meint bei der Prüfung eines Downloads dasselbe wie Hashwert (z. B. ein SHA-256-Wert).

**Typische Missverständnisse:**
- Viele denken, Hashen sei eine Art Verschlüsseln oder Packen; richtig ist: Es gibt keinen Schlüssel und keinen Weg zurück.
- Viele denken, das Schloss im Browser zeige eine seriöse Seite; richtig ist: Das Zertifikat bestätigt nur, dass Domain und Schlüssel zusammengehören – auch eine Betrugsseite unter eigener Domain kann ein gültiges Zertifikat haben.
- Viele denken, eine signierte Nachricht sei geheim; richtig ist: Sie bleibt für jeden lesbar, die Signatur belegt nur Herkunft und Unversehrtheit.

**Fachwörter:**
- Hashwert: Prüfwert fester Länge, digitaler Fingerabdruck
- Integrität: Daten sind unverändert
- Authentizität: Daten stammen vom angegebenen Absender
- digitale Signatur: mit privatem Schlüssel verschlüsselter Hashwert
- Zertifikat: digitaler Ausweis für einen öffentlichen Schlüssel
- Zertifizierungsstelle: stellt Zertifikate aus und beglaubigt sie
- Stammzertifikat: im Browser hinterlegter Anfang der Vertrauenskette

**So fragt die IHK:**
- Kurze Teilaufgaben in größeren Sicherheitsaufgaben; Operatoren erläutern, beschreiben, zuordnen mit Begründung.
- 2025F: Neben einer Installationsdatei steht ein SHA-256-Wert (Material: Dateiname und 64-stelliger Wert). „Erläutern Sie den Zweck“, 4 Punkte; gezählt: nach dem Download erneut berechnen, mit dem angebotenen Wert vergleichen, um Fehler oder Manipulation zu erkennen, Integrität.
- 2023H: Telearbeitsplatz mit VPN und persönlichem Zertifikat. „Beschreiben Sie die geplante Identifizierung“, 3 Punkte; gezählt: Authentifizierung des Mitarbeiters gegenüber dem Server.
- 2021H: Tabelle mit Schutzmaßnahmen, je ein Kreuz bei Vertraulichkeit, Integrität oder Verfügbarkeit plus Begründung (0,5 Punkte für das Kreuz, 1 Punkt für die Begründung je Zeile); die Hashwertprüfung bei einer Softwareinstallation gehört zu Integrität.
- Zu Zertifizierungsstelle, Browserwarnung, zweistufiger Prüfung und qualifizierter elektronischer Signatur gibt es keine echte Aufgabe.

**Fallen:**
- Teil A: „Kollisionsfreiheit“ wörtlich nehmen. Weil beliebig viele Daten auf eine feste Länge abgebildet werden, gibt es gleiche Hashwerte für verschiedene Daten; verlangt ist nur, dass sich solche Paare praktisch nicht finden lassen.
- Teil A: Den angegebenen Hashwert nur ansehen statt selbst zu berechnen, oder mit einem anderen Verfahren rechnen als angegeben – dann stimmen die Werte nie überein.
- Teil A: Bei „erläutern“ nur das Vorgehen oder nur „zur Sicherheit“ schreiben. Dazu gehören Vorgehen, Zweck (Fehler oder Manipulation erkennen) und, wenn gefragt, die Reaktion bei Abweichung: nicht installieren, neu laden.
- Teil B: Die Schlüssel von Verschlüsselung und Signatur vertauschen, etwa mit dem öffentlichen Schlüssel des Empfängers prüfen wollen.
- Teil B: Nur eine der beiden Leistungen der Signatur nennen.
- Teil B: „Hashwert mit dem privaten Schlüssel verschlüsseln“ ist das vereinfachte Modell, das in der Prüfung erwartet wird. Bei manchen modernen Verfahren ist Signieren technisch keine Verschlüsselung – nur erwähnen, wenn danach gefragt wird.
- Teil C: Dem Zertifikat zuschreiben, es verschlüssele die Daten, oder den Inhaber als Aussteller nennen.
- Teil C: Bei einer Browserwarnung den Grund falsch benennen (abgelaufen, Name passt nicht, selbst signiert sind drei verschiedene Prüfungen) oder „trotzdem fortfahren“ als Lösung ansehen.
- Teil C: Die Anmeldung mit Zertifikat nur als „Ausweis vorzeigen“ beschreiben, ohne dass der Server auch den Besitz des passenden privaten Schlüssels prüft.
- Teil D: Für „stammt von …“ den Hashwert wählen, oder ein Mittel nennen, ohne zu sagen, was damit nachgewiesen wird.
- Teil D: Die beiden Stufen falsch deuten. Die gültige Signatur der Prüfsummendatei sagt allein nichts über die eigene heruntergeladene Datei; weicht deren Prüfsumme ab, ist die Datei beschädigt oder manipuliert, auch wenn die Signatur gültig ist. Schlägt eine der beiden Stufen fehl: nicht verwenden, aus offizieller Quelle neu laden, beide Stufen erneut prüfen.
