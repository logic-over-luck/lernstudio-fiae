Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz › Technische Schutzmaßnahmen › Hashwerte, Zertifikate und digitale Signatur

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen. Wo etwas abläuft oder funktioniert (Technik, Verfahren, Protokoll, Rechenweg), erklär zuerst Schritt für Schritt, was passiert, mit den richtigen Begriffen und dem Warum dahinter. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Die Erklärungen im Stoff sind das Minimum für die Prüfung, nicht die Grenze. Wo dort nur steht, was es gibt, erklär mir auch, wie es funktioniert, und trenn sichtbar, was die IHK lesen will und was nur Hintergrund zum Verstehen ist. Stehen in der Lehrnotiz „Abläufe zum Verstehen“, bau sie in deine Erklärung ein.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag – klein heißt wenig auf einmal, nicht oberflächlich. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
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
Beispiel im Betrieb: Ein Mitarbeiter weist sich mit seinem Zertifikat gegenüber dem Firmenserver aus. Diesen Nachweis der Identität nennt man **Authentifizierung**. Der Server prüft das Zertifikat und dass der Mitarbeiter den passenden privaten Schlüssel besitzt.

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

**Schon geprüft:** In Prüfungen: K2 (2025F), K4 (2025H), K5 (2023H) · Noch nicht geprüft: K1, K3, K6–K8, K10, K11

**Kerngedanken:**
- Signatur und Zertifikat setzen das Schlüsselpaar aus der asymmetrischen Verschlüsselung voraus (öffentlicher und privater Schlüssel). Das vor Teil B kurz wiederholen; dort wird es umgekehrt benutzt: Verschlüsselt wird mit dem öffentlichen Schlüssel des Empfängers, signiert mit dem eigenen privaten.
- Einen Hashwert kann jeder berechnen. Er zeigt deshalb nur, ob Daten zu einem Vergleichswert passen, nie von wem sie stammen. Ein Angreifer ändert die Nachricht und rechnet den Hashwert einfach neu; erst der private Schlüssel bringt etwas hinein, das nur der Absender erzeugen kann.
- Die drei Mittel bauen aufeinander auf: Die Signatur braucht den Hashwert, und die Prüfung der Signatur ist nur so viel wert wie die Gewissheit, wem der öffentliche Schlüssel gehört – die liefert das Zertifikat.
- „Prüfsumme“ meint bei der Prüfung eines Downloads dasselbe wie Hashwert (z. B. ein SHA-256-Wert).

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K5 – Anmeldung mit Zertifikat: Besitznachweis des privaten Schlüssels: (1) Der Rechner des Mitarbeiters sendet beim Verbindungsaufbau das Zertifikat des Mitarbeiters an den Firmenserver. (2) Der Server prüft das Zertifikat: Signatur der Zertifizierungsstelle, Gültigkeitszeitraum und ob er dem Aussteller vertraut. (3) Der Server schickt dem Rechner des Mitarbeiters einen frisch erzeugten Zufallswert. (4) Der Rechner signiert diesen Zufallswert mit dem privaten Schlüssel des Mitarbeiters und sendet die Signatur zurück. (5) Der Server prüft die Signatur mit dem öffentlichen Schlüssel aus dem Zertifikat. (6) Ist die Signatur gültig, besitzt die Gegenseite den privaten Schlüssel und gilt als authentifiziert; ein kopiertes Zertifikat allein genügt dafür nicht. Vereinfacht: In der Praxis (z. B. bei TLS) signiert der Client nicht einen einzelnen Zufallswert, sondern die bisherigen Nachrichten des Verbindungsaufbaus, in denen ein Zufallswert des Servers enthalten ist.

**Typische Missverständnisse:**
- Viele denken, Hashen sei eine Art Verschlüsseln oder Packen; richtig ist: Es gibt keinen Schlüssel und keinen Weg zurück.
- Viele denken, das Schloss im Browser zeige eine seriöse Seite; richtig ist: Das Zertifikat bestätigt nur, dass Domain und Schlüssel zusammengehören – auch eine Betrugsseite unter eigener Domain kann ein gültiges Zertifikat haben.
- Viele denken, eine signierte Nachricht sei geheim; richtig ist: Sie bleibt für jeden lesbar, die Signatur belegt nur Herkunft und Unversehrtheit.
- Viele denken, Authentizität und Authentifizierung seien dasselbe; richtig ist: Authentizität ist die Echtheit, etwa die Herkunft einer Nachricht. Authentifizierung ist der Vorgang, mit dem eine Identität nachgewiesen und geprüft wird – bei der Anmeldung des Mitarbeiters mit Zertifikat heißt es deshalb Authentifizierung.

**Fachwörter:**
- Hashwert: Prüfwert fester Länge, digitaler Fingerabdruck
- Integrität: Daten sind unverändert
- Authentizität: Daten stammen vom angegebenen Absender
- Authentifizierung: Vorgang, bei dem eine behauptete Identität nachgewiesen und geprüft wird, z. B. mit Zertifikat
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
- 2025H (K4), 4 Punkte, „beschreiben“: Skizze mit zwei Seiten (Absender und Empfänger), je einem privaten und einem öffentlichen Schlüssel und Umschlägen mit und ohne Schloss, ohne Zuordnung der Schlüssel. Verlangt ist das prinzipielle Vorgehen beim Erstellen und Prüfen einer Signatur. Die Skizze sieht aus wie eine Verschlüsselung; für die Signatur zählen aber nur die Schlüssel des Absenders. Lösungshinweise liegen nicht vor.

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
