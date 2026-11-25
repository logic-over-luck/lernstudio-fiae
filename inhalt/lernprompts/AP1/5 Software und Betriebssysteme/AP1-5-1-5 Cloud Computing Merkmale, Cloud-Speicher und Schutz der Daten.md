Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Software und Betriebssysteme › Softwarearten und Softwareauswahl › Cloud Computing: Merkmale, Cloud-Speicher und Schutz der Daten

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

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

## Stoff: Cloud Computing: Merkmale, Cloud-Speicher und Schutz der Daten

Ziel: Die Merkmale und Arten von Cloud Computing erklären, die Arbeitsweise eines synchronisierten Cloud-Speichers erklären und den Schutz von Daten in der Cloud beurteilen.

Das muss ich können:

### K1 – Merkmale von Cloud Computing (Stufe 2 Verstehen)
Du kannst die Merkmale von Cloud Computing erklären: Rechenleistung, Speicher oder Software kommen über das Internet als Dienst, den der Kunde selbst bucht (Self-Service), der nach Bedarf wächst oder schrumpft, nach Verbrauch abgerechnet wird und aus einer gemeinsamen Plattform vieler Kunden mit getrennten Daten (mandantenfähig) bereitgestellt wird.

Erklärung:
„Cloud“ heißt nicht nur „irgendwo im Internet“. Typisch sind:
- **über das Netz bereitgestellt**, meist virtualisiert im Rechenzentrum des Anbieters
- **Selbstbedienung:** Der Kunde bucht und ändert Leistungen selbst im Portal, ohne Bestellung beim Vertrieb
- **skalierbar:** mehr Speicher oder Nutzer in Minuten – und wieder weniger, wenn der Bedarf sinkt
- **Abrechnung nach Verbrauch**, z. B. je Nutzer und Monat oder je Gigabyte
- **mandantenfähig:** Viele Kunden teilen dieselbe Plattform, jeder sieht aber nur seine eigenen Daten
Beispiel: Ein Onlineshop bucht für das Weihnachtsgeschäft zusätzliche Server und gibt sie im Januar wieder zurück.

### K4 – Cloud-Arten: Public, Private, Hybrid (Stufe 1 Wiedergeben)
Du kannst die Cloud-Arten nennen und einem Fall zuordnen: Public Cloud (ein Anbieter stellt seine Plattform vielen Kunden über das Internet bereit), Private Cloud (Cloud nur für eine Organisation, im eigenen Haus oder bei einem Dienstleister) und Hybrid Cloud (Verbindung aus beiden).

Erklärung:
- **Public Cloud:** Ein Anbieter stellt seine Plattform vielen Kunden über das Internet bereit.
- **Private Cloud:** Die Cloud dient nur einer Organisation – im eigenen Haus oder bei einem Dienstleister.
- **Hybrid Cloud:** Beides verbunden, z. B. sensible Daten in der Private Cloud, E-Mail und Office aus der Public Cloud.
Die Merkmale „mandantenfähig“ und „Abrechnung nach Verbrauch“ gelten bei einer Private Cloud nur innerhalb der Organisation: Mandanten sind dann ihre Abteilungen oder Standorte, abgerechnet wird höchstens intern.

### K2 – Arbeitsweise eines synchronisierten Cloud-Speichers (Stufe 2 Verstehen)
Du kannst erklären, wie ein eingebundener Cloud-Speicher arbeitet: Er erscheint wie ein Ordner im Dateisystem, hält eine lokale Kopie, gleicht Änderungen im Hintergrund mit allen verbundenen Geräten ab und bewahrt frühere und gelöschte Versionen eine Zeit lang auf – anders als beim bloßen Hoch- und Herunterladen einzelner Dateien.

Erklärung:
Zwei Wege, Dateien in die Cloud zu bringen:
- **Übertragen** (z. B. per FTP oder Upload im Browser): Du lädst eine Datei bewusst hoch oder herunter; jede Kopie ist danach unabhängig.
- **Einbinden mit Synchronisation:** Der Cloud-Speicher erscheint als Ordner. Ein Programm im Hintergrund gleicht jede Änderung mit der Cloud und allen verbundenen Geräten ab; dank lokaler Kopie geht das Arbeiten auch offline, abgeglichen wird beim nächsten Verbinden.
- **Versionierung:** Ältere Stände und gelöschte Dateien lassen sich eine Zeit lang zurückholen.
Achtung: Synchronisation ist **kein Backup**. Eine versehentlich gelöschte oder von Schadsoftware verschlüsselte Datei wird ebenfalls auf alle Geräte übertragen – dann helfen nur die Versionierung oder eine echte Sicherung.

### K3 – Schutz der Daten im Cloud-Speicher (Stufe 4 Beurteilen)
Du kannst beurteilen, wie Daten in einem Cloud-Speicher geschützt werden: Serverstandort und dort geltendes Recht beachten, ebenso das Recht des Heimatlandes des Anbieters (z. B. US CLOUD Act), verschlüsselt übertragen und speichern und abwägen, dass eine Verschlüsselung schon auf dem eigenen Gerät am sichersten ist, die gemeinsame Arbeit im Team aber erschwert.

Erklärung:
- **Serverstandort und Recht:** Für personenbezogene Daten gilt die DSGVO, wenn der Verantwortliche in der EU sitzt oder ein Anbieter Personen in der EU Dienste anbietet – egal, wo der Server steht. Der Serverstandort entscheidet aber, ob Daten in ein Drittland übermittelt werden, also in einen Staat außerhalb von EU und EWR wie die USA (das ist nur erlaubt, wenn die EU dem Land ein angemessenes Schutzniveau bescheinigt hat – Angemessenheitsbeschluss nach Art. 45 DSGVO – oder wenn zusätzliche Garantien wie Standardvertragsklauseln vereinbart sind) und welche fremden Behörden auf sie zugreifen können. Bei Anbietern aus Drittländern gilt zusätzlich deren Heimatrecht: US-Anbieter können nach dem **CLOUD Act** auch zur Herausgabe von Daten verpflichtet werden, die in der EU liegen. Ein Rechenzentrum in der EU macht es deutlich einfacher.
- **Verschlüsselte Übertragung** (HTTPS/TLS) ist Pflicht. Viele Anbieter verschlüsseln auch die gespeicherten Daten – den Schlüssel hat dann aber der Anbieter.
- **Verschlüsselung vorab auf dem eigenen Gerät** (Ende-zu-Ende): Der Anbieter sieht nur unlesbare Daten. Nachteil: Wer mitarbeiten soll, braucht den Schlüssel; Vorschau, Suche und gemeinsames Bearbeiten im Browser funktionieren oft nicht.
Beispiel: Personalakten → vorab verschlüsseln. Eine Präsentation, an der das Team gemeinsam arbeitet → Anbieter mit Rechenzentrum in der EU und verschlüsselter Übertragung.

### K5 – Eigene Private Cloud mit DynDNS (Stufe 2 Verstehen)
Du kannst erklären, wie eine eigene Private Cloud auf einem Server im eigenen Netz oder bei einem Hoster betrieben und von außen erreichbar wird: beim Server im eigenen Netz über eine Portfreigabe am Router und bei wechselnder öffentlicher IP-Adresse über einen DynDNS-Dienst.

Erklärung:
Eine eigene (private) Cloud läuft auf einem Server im eigenen Netz oder auf einem gemieteten Server bei einem Hoster. Beim Hoster ist der Server meist schon unter einer festen öffentlichen Adresse erreichbar. Im eigenen Netz sieht man von außen nur den Router: Eine **Portfreigabe** (Portweiterleitung) am Router leitet Anfragen aus dem Internet an den Server weiter. Wechselt die öffentliche IP-Adresse des Anschlusses, sorgt ein **DynDNS-Dienst** dafür, dass ein fester Name immer auf die gerade gültige Adresse zeigt.

## Lehrnotiz: Cloud Computing: Merkmale, Cloud-Speicher und Schutz der Daten

**Aufteilung:**
- Was einen Dienst zur Cloud macht, und die Cloud-Arten: K1, K4
- Eigene Private Cloud von außen erreichbar machen: K5
- Synchronisierter Cloud-Speicher: K2
- Schutz der Daten, erst Serverstandort und Recht, dann Verschlüsselung: K3

**Schon geprüft:** Noch nicht geprüft: K1–K5

**Kerngedanken:**
- Die Portfreigabe und der DynDNS-Dienst lösen zwei verschiedene Hürden. Die Portfreigabe sorgt dafür, dass der Router eine Anfrage von außen an den Cloud-Server im eigenen Netz weiterleitet. Der DynDNS-Dienst sorgt dafür, dass ein fester Name immer auf die gerade gültige öffentliche IP-Adresse zeigt.
- Für das Synchronisationsprogramm ist jede Änderung gleich, auch ein Löschen oder das Verschlüsseln durch Schadsoftware: Es ist ein neuer Stand, der an alle Geräte verteilt wird. Daraus folgt, warum Synchronisation kein Backup ist.
- Bei der Verschlüsselung entscheidet eine Frage: Wer hat den Schlüssel? Wer ihn hat, kann die Daten lesen.
- Der Schutz wird je nach Art der Daten beurteilt, nicht einmal für alles: wie sensibel sie sind und ob mehrere gemeinsam daran arbeiten müssen.

**Typische Missverständnisse:**
- Viele denken, „mandantenfähig“ heiße, dass viele Mitarbeiter einer Firma den Dienst nutzen; richtig ist: Viele verschiedene Kunden (Mandanten) teilen sich eine Plattform, ihre Daten sind streng getrennt.
- Viele denken, ein Rechenzentrum in der EU bedeute, dass nur EU-Recht gilt; richtig ist: Bei einem Anbieter aus einem Drittland kommt dessen Heimatrecht hinzu.

**Fachwörter:**
- Self-Service: Kunde bucht Leistungen selbst im Portal
- mandantenfähig: viele Kunden, eine Plattform, getrennte Daten
- Public Cloud: Plattform eines Anbieters für viele Kunden
- Private Cloud: Cloud nur für eine Organisation
- Hybrid Cloud: Public und Private Cloud verbunden genutzt
- Versionierung: ältere und gelöschte Stände zurückholen
- DynDNS: fester Name für wechselnde IP-Adresse

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es keine echte Prüfungsaufgabe. Im Prüfungskatalog stehen „Cloudlösungen“ unter den marktgängigen IT-Systemen.
- Zu erwarten sind kurze Teilaufgaben in einer Kundensituation zu jedem der Themen aus der Aufteilung, mit nennen, erklären, zuordnen oder beurteilen; je 2–4 Punkte. Bei „beurteilen“ zählt das Urteil mit Begründung aus dem Fall.

**Fallen:**
- Merkmale nur aufzählen, wenn ein Fall beschrieben ist. Zu jedem Merkmal gehört, woran man es dort erkennt oder warum es fehlt.
- Bei der eigenen Private Cloud nur eine der beiden Einrichtungen nennen: Ohne Portfreigabe blockt der Router die Anfrage, ohne DynDNS ist der Anschluss nach dem nächsten Wechsel der IP-Adresse nicht mehr zu finden.
- DynDNS ohne seinen Zweck nennen oder auch bei fester öffentlicher IP-Adresse verlangen; dort ist der Dienst überflüssig.
- Einen Anbieter nur mit „kommt aus den USA, also unsicher“ ablehnen. Verlangt ist der Grund: der CLOUD Act.
- Ein Rechenzentrum in einem anderen EU-Land so behandeln, als läge es außerhalb der EU.
- Nur auf den Hauptstandort schauen: Liegt die Datensicherung des Anbieters in einem Drittland, werden die Daten auch dorthin übermittelt.
- Beim Urteil über Anbieter die Bedingung oder das Gegenargument weglassen (Preis, zusätzlicher Schutz durch eigene Verschlüsselung).
- „Alles vorab verschlüsseln, das ist sicherer“ ohne Abwägung: Müssen mehrere gemeinsam im Browser an den Daten arbeiten, ist das kein brauchbares Urteil.
