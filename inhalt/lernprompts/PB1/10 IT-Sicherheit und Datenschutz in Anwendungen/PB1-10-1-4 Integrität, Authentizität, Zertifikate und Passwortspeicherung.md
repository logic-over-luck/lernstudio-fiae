Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz in Anwendungen › Bedrohungen, Anforderungen und Kryptografie › Integrität, Authentizität, Zertifikate und Passwortspeicherung

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen und dem Warum dahinter. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, vor jedem Vergleich, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, wurde das geprüft – dann reicht die Erklärung aus dem Stoff mit dem Warum dazu, ohne eigenen Ablauf. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber lösbar allein mit dem Stoff. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K1 – Ablauf des TLS-Verbindungsaufbaus: (1) Der Browser baut die Verbindung auf, und der Webserver schickt sein Zertifikat mit seinem öffentlichen Schlüssel und seinem Domainnamen. (2) Der Browser prüft die Signatur der Zertifizierungsstelle auf dem Zertifikat, den Gültigkeitszeitraum und ob der Domainname zur aufgerufenen Adresse passt. (3) Der Server führt eine Rechenoperation aus, die nur mit dem zugehörigen privaten Schlüssel gelingt; damit ist er authentifiziert. (4) Browser und Server vereinbaren einen gemeinsamen symmetrischen Sitzungsschlüssel, den ein Mithörer aus den übertragenen Nachrichten nicht ermitteln kann. (5) Beide Seiten verschlüsseln danach alle Daten symmetrisch mit diesem Sitzungsschlüssel. (6) Der Absender fügt jedem Datenblock einen mit dem Sitzungsschlüssel berechneten Prüfwert hinzu; stimmt er beim Empfänger nicht, bricht dieser die Verbindung ab. Vereinfacht: Schlüsselaustausch und Reihenfolge der Nachrichten unterscheiden sich je nach TLS-Version im Detail; meist wird der Sitzungsschlüssel per Diffie-Hellman vereinbart.
- K3 – Signatur erstellen und prüfen: (1) Der Absender berechnet aus den Daten einen Hashwert. (2) Der Absender erzeugt aus diesem Hashwert mit seinem privaten Schlüssel die Signatur. (3) Der Absender sendet die Daten unverschlüsselt zusammen mit der Signatur; jeder auf dem Übertragungsweg kann die Daten lesen. (4) Der Empfänger berechnet aus den empfangenen Daten selbst den Hashwert. (5) Der Empfänger prüft mit dem öffentlichen Schlüssel des Absenders, ob die Signatur zu diesem Hashwert passt. (6) Passt sie, sind die Daten unverändert und stammen vom Inhaber des privaten Schlüssels; nach jeder Änderung schlägt die Prüfung fehl.

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
