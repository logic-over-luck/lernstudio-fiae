Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Software und Betriebssysteme › Betriebssystem einrichten › Installation und Einrichtung: BIOS/UEFI, Partitionieren, Formatieren, Dateisysteme FAT32, NTFS, APFS, ext4

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

## Stoff: Installation und Einrichtung: BIOS/UEFI, Partitionieren, Formatieren, Dateisysteme FAT32, NTFS, APFS, ext4

Ziel: Ein Betriebssystem installieren und einrichten, BIOS und UEFI unterscheiden und das passende Dateisystem beurteilen.

Das muss ich können:

### K1 – BIOS gegen UEFI (Stufe 2 Verstehen)
Du kannst BIOS und UEFI unterscheiden: Beide prüfen beim Start die Hardware und laden das Betriebssystem; UEFI unterstützt zusätzlich GPT für große Datenträger und Secure Boot, das nur signierte Bootloader startet und so vor Schadsoftware schützt, die sich vor dem Betriebssystem einnistet, und hat meist eine grafische Oberfläche.

Erklärung:
**Gemeinsam:** Beide sind Firmware auf dem Mainboard. Sie prüfen beim Start die Hardware und laden das Betriebssystem.
**UEFI bietet zusätzlich:**
- **GPT** – damit auch Datenträger über 2 TiB
- **Secure Boot** – startet nur signierte, vertrauenswürdige Bootloader und schützt so vor Schadsoftware, die sich vor dem Betriebssystem einnistet (Bootkits)
- **meist** eine grafische Oberfläche mit Mausbedienung – das ist eine übliche Umsetzung, keine Eigenschaft von UEFI selbst
UEFI ist der moderne Nachfolger des BIOS; Windows 11 setzt UEFI mit Secure Boot voraus.
Typische Einstellungen im BIOS/UEFI: Bootreihenfolge, Datum und Uhrzeit, Secure Boot und Virtualisierung ein- oder ausschalten, Schnittstellen aktivieren oder deaktivieren, ein Passwort setzen.

### K2 – Partitionieren gegen Formatieren (Stufe 2 Verstehen)
Du kannst Partitionieren und Formatieren unterscheiden.

Erklärung:
- **Partitionieren:** den Datenträger in Bereiche (Partitionen) aufteilen – z. B. eine für das System, eine für Daten.
- **Formatieren:** in einer Partition ein **Dateisystem** anlegen, damit Dateien gespeichert werden können.
Reihenfolge: erst partitionieren, dann formatieren. Beim Formatieren gehen vorhandene Daten verloren, ebenso beim Löschen oder Neuanlegen von Partitionen.

### K3 – FAT32, NTFS, APFS, ext4 je Betriebssystem (Stufe 2 Verstehen)
Du kannst die Dateisysteme FAT32, NTFS, APFS und ext4 dem Betriebssystem oder Einsatz zuordnen, für den sie gedacht sind: NTFS für Windows, APFS für macOS, ext4 für Linux und FAT32 für Wechseldatenträger an vielen Geräten.

Erklärung:
- **NTFS** → Windows
- **APFS** → macOS und iOS
- **ext4** → Linux
- **FAT32** → kein eigenes Betriebssystem, sondern für **Wechseldatenträger**: von fast allen Systemen lesbar, typisch für ältere USB-Sticks und Speicherkarten

### K5 – FAT32: Eigenschaften, Vor- und Nachteile (Stufe 2 Verstehen)
Du kannst die Eigenschaften von FAT32 erklären und daraus Vor- und Nachteile ableiten: Es wird von fast allen Systemen gelesen, erlaubt aber nur Dateien bis 4 GiB und kennt keine Zugriffsrechte.

Erklärung:
Eigenschaften von FAT32:
- wird von **fast allen Systemen** gelesen – Windows, macOS, Linux, Fernseher, Autoradios
- erlaubt Dateien nur **bis 4 GiB**
- kennt **keine Zugriffsrechte**
Daraus folgt: Gut zum Austausch kleiner Dateien zwischen vielen Geräten. Schlecht für große Dateien (ein Film mit 6 GiB passt nicht) und für alles, was geschützt werden muss.

### K6 – Reihenfolge einer Betriebssysteminstallation (Stufe 2 Verstehen)
Du kannst die Schritte einer Betriebssysteminstallation in eine sinnvolle Reihenfolge bringen: Bootreihenfolge einstellen, partitionieren, formatieren, installieren, Treiber und Updates einspielen.

Erklärung:
- Vorher: Daten sichern, Hardwareanforderungen prüfen, Installationsmedium (z. B. USB-Stick) erstellen.
- **Bootreihenfolge** im UEFI einstellen – das Installationsmedium an erste Stelle – und davon starten.
- **Partitionieren**.
- **Formatieren** (vorhandene Daten gehen verloren).
- **Installieren**.
- **Treiber und Updates** einspielen – damit die Hardware richtig läuft und Sicherheitslücken geschlossen sind.
- Danach die Anwendungen installieren.

### K7 – Passendes Dateisystem für einen Datenträger (Stufe 4 Beurteilen)
Du kannst beurteilen, welches Dateisystem für einen Datenträger passt, indem du die Eigenschaften vergleichst: NTFS (Zugriffsrechte, Journaling, Verschlüsselung; Windows-Systemlaufwerk; macOS kann es ohne Zusatzsoftware nur lesen), ext4 (Linux-Rechte, Journaling; Windows und macOS lesen es nicht von sich aus), APFS (macOS, für SSDs, Snapshots, Verschlüsselung; Windows liest es nicht von sich aus), FAT32 (fast überall les- und schreibbar, Dateien nur bis 4 GiB, keine Rechte) und exFAT (überall les- und schreibbar, ohne 4-GiB-Grenze, keine Rechte) – für einen USB-Stick an vielen Geräten heute meist exFAT.

Erklärung:
Frag: An welchen Geräten wird der Datenträger genutzt, wie groß sind die Dateien, braucht es Zugriffsrechte?
- **NTFS:** Zugriffsrechte, Journaling (Änderungen werden protokolliert; nach einem Absturz ist das Dateisystem schnell wieder in Ordnung), Verschlüsselung; Windows-Systemlaufwerk. macOS kann NTFS ohne Zusatzsoftware nur lesen, nicht beschreiben.
- **ext4:** Linux-Rechte, Journaling. Windows und macOS lesen es nicht von sich aus.
- **APFS:** macOS, für SSDs, Snapshots (festgehaltene Stände, zu denen man zurückkehren kann), Verschlüsselung. Windows liest es nicht von sich aus.
- **FAT32:** fast überall les- und schreibbar, Dateien nur bis 4 GiB, keine Rechte.
- **exFAT:** bei aktuellen Windows-, macOS- und Linux-Versionen les- und schreibbar, keine 4-GiB-Grenze, keine Rechte.
Beispiele: USB-Stick für Windows, macOS und Linux mit großen Dateien → **exFAT**. Windows-Systemlaufwerk → **NTFS**. Datenpartition eines Linux-Servers → **ext4**.
Begründe mit der Eigenschaft, die den Ausschlag gibt.

### K8 – Partitionstabellen MBR gegen GPT (Stufe 2 Verstehen)
Du kannst die Partitionstabellen MBR und GPT unterscheiden: MBR erlaubt höchstens vier primäre Partitionen (oder drei primäre und eine erweiterte mit logischen Laufwerken) und Datenträger bis 2 TiB, GPT sehr große Datenträger und viele Partitionen (unter Windows bis zu 128) und wird mit UEFI genutzt.

Erklärung:
- **MBR** (Master Boot Record): höchstens **vier primäre Partitionen** – oder drei primäre und eine **erweiterte** Partition, die mehrere **logische Laufwerke** enthält –, Datenträger bis **2 TiB**. Älter, mit BIOS.
- **GPT** (GUID Partition Table): sehr große Datenträger und viele Partitionen (**unter Windows bis zu 128**). Wird mit **UEFI** genutzt.
Beispiel: Eine 4-TB-Festplatte muss mit GPT eingerichtet werden, sonst sind nur 2 TiB nutzbar.

### K9 – Softwareinstallation beim Kunden mit Testprotokoll (Stufe 2 Verstehen)
Du kannst die Schritte einer Softwareinstallation beim Kunden beschreiben: Systemvoraussetzungen prüfen, installieren, Grundeinstellungen vornehmen, vorhandene Daten übernehmen, testen und das Ergebnis in einem Testprotokoll festhalten.

Erklärung:
Die Reihenfolge verhindert, dass man später von vorn anfangen muss:
- **Systemvoraussetzungen prüfen** – Betriebssystemversion, Arbeitsspeicher, freier Speicherplatz, benötigte Laufzeitumgebungen, Rechte. Sonst bricht die Installation ab oder das Programm läuft instabil.
- **Installieren** – aus vertrauenswürdiger Quelle, mit den nötigen Rechten.
- **Grundeinstellungen** – Sprache, Speicherorte, Benutzer, Lizenz.
- **Daten übernehmen** (migrieren) – Bestände aus dem Altsystem einspielen, vorher sichern.
- **Testen** – startet das Programm, laufen die wichtigsten Abläufe, sind die Daten vollständig?
- **Testprotokoll** – was wie geprüft wurde und mit welchem Ergebnis; Grundlage für die Abnahme.
Beispiel: Neue Warenwirtschaft → Artikelstamm aus der alten Software übernehmen und eine Testbestellung durchspielen.

### K10 – Arbeitsplatz nach der Installation konfigurieren (Stufe 3 Anwenden)
Du kannst einen frisch installierten Arbeitsplatzrechner konfigurieren: Benutzerkonten einrichten (Standardbenutzer für die tägliche Arbeit, Administratorrechte nur für die Verwaltung; lokales Konto, Microsoft-Konto oder Domänenkonto), Updates einstellen, Datenschutz- und Telemetrie-Einstellungen festlegen und Energieoptionen setzen.

Erklärung:
Nach der Installation wird der Rechner für die Arbeit eingerichtet:
- **Benutzerkonten:** Standardbenutzer für die tägliche Arbeit, Administratorrechte nur für die Verwaltung. Kontoart: lokal (nur dieser PC), Microsoft-Konto (privat/Cloud) oder Domänenkonto (zentral im Betrieb).
- **Updates:** automatisch, mit festem Zeitfenster.
- **Datenschutz und Telemetrie:** Diagnosedaten so weit wie möglich einschränken.
- **Energieoptionen:** Bildschirmsperre, Ruhezustand.

### K11 – Installationsarten, Softwareverteilung, Patchmanagement (Stufe 2 Verstehen)
Du kannst Installationsarten und die Softwareverteilung erklären: Neuinstallation, Upgrade, Installation aus einem Image (Klonen) und unbeaufsichtigte Installation mit Antwortdatei; bei vielen Arbeitsplätzen verteilt eine Softwareverteilung Programme und Updates zentral und automatisch, das Patchmanagement sorgt dafür, dass Sicherheitsupdates geprüft und zeitnah eingespielt werden, und das Lizenzmanagement behält die Lizenzen im Blick.

Erklärung:
**Installationsarten:** Neuinstallation (frisch auf leerem oder neu formatiertem Datenträger), Upgrade (neue Version über die alte; Daten und Programme bleiben erhalten), Image/Klonen (ein fertiges Abbild auf viele gleiche Rechner), unbeaufsichtigte Installation mit Antwortdatei (darin stehen vorab alle Eingaben, sodass die Installation ohne Rückfragen durchläuft).
Bei vielen Arbeitsplätzen übernimmt das eine **Softwareverteilung**: Programme und Updates werden zentral und automatisch verteilt.
- **Patchmanagement:** nötige Sicherheitsupdates erkennen, testen, zeitnah einspielen, dokumentieren.
- **Lizenzmanagement:** wissen, welche Lizenzen wo genutzt werden.

## Lehrnotiz: Installation und Einrichtung: BIOS/UEFI, Partitionieren, Formatieren, Dateisysteme FAT32, NTFS, APFS, ext4

**Aufteilung:**
- Teil A – Vor dem Betriebssystem: Firmware K1; Datenträger vorbereiten K2, K8
- Teil A – Dateisysteme: Zuordnung K3; FAT32 K5; passendes Dateisystem beurteilen K7
- Pause möglich nach Teil A.
- Teil B – Installieren und einrichten: Reihenfolge der Installation K6; Arbeitsplatz konfigurieren K10
- Teil B – Software und viele Arbeitsplätze: Softwareinstallation beim Kunden K9; Installationsarten und Verteilung K11

**Schon geprüft:** In Prüfungen: K5 (neuere Prüfung) · Noch nicht geprüft: K1–K3, K6–K11

**Kerngedanken:**
- Es sind drei Ebenen: Die Partitionstabelle (MBR oder GPT) hält fest, wie der Datenträger aufgeteilt ist; die Partition ist ein Bereich; das Dateisystem ordnet die Dateien in einer Partition. MBR und GPT sind also keine Dateisysteme, und BIOS/UEFI ist keine Partitionstabelle.
- Die Grenzen stehen in TiB und GiB, Datenträger werden in TB und GB verkauft: 2 TiB sind etwa 2,2 TB, 4 GiB etwa 4,29 GB. Eine 2-TB-Platte geht mit MBR noch ganz, eine mit 3 oder 4 TB nicht mehr.
- Secure Boot schützt nur den Startvorgang, nicht vor jeder Schadsoftware.
- Bei der Wahl des Dateisystems entscheidet der Fall, nicht die Bauform. „Extern, also exFAT“ ist falsch, wenn ein Gerät nur FAT32 liest oder wenn der Datenträger nur an einem System hängt und dessen Fähigkeiten braucht (Rechte, Verschlüsselung, Snapshots). exFAT hat weder Rechte noch Journaling; das ist der Preis für die breite Nutzbarkeit.
- Die Kontoart folgt aus der Umgebung: Gibt es eine Domäne, meldet man sich mit dem Domänenkonto an – Anmeldung, Rechte und Richtlinien kommen dann zentral, und das Konto gilt an jedem Rechner der Domäne. Ohne Domäne bleibt für den Betrieb das lokale Konto.

**Typische Missverständnisse:**
- Viele denken, die 4-GiB-Grenze von FAT32 gelte für den ganzen Datenträger. Richtig ist: Sie gilt für jede einzelne Datei.
- Viele denken, ein Mac könne mit NTFS gar nichts anfangen. Richtig ist: Er kann es ohne Zusatzsoftware lesen, aber nicht beschreiben.
- Viele denken, Patchmanagement heiße „automatische Updates einschalten“. Richtig ist: Erkennen, Testen und Dokumentieren gehören dazu.

**Fachwörter:**
- Firmware: fest eingebaute Software auf dem Mainboard
- Secure Boot: startet nur signierte, vertrauenswürdige Bootloader
- Partitionstabelle: Verzeichnis der Partitionen, MBR oder GPT
- Journaling: Änderungen werden protokolliert, schützt bei Absturz
- Snapshots: festgehaltene frühere Stände, wiederherstellbar
- Domänenkonto: zentral verwaltetes Konto im Betrieb
- Antwortdatei: vorab festgelegte Eingaben für die Installation
- Testprotokoll: was geprüft wurde, mit welchem Ergebnis

**So fragt die IHK:**
- Es liegt keine verwendbare echte Aufgabe vor. Der Prüfungskatalog nennt Installation und Einrichtung von Systemen (Betriebssysteme, BIOS, UEFI, Partitionierungen/Formatierungen), Einstellungsmöglichkeiten im BIOS/UEFI, Filesysteme (fat32, NTFS, APFS, ext4) sowie Installation und Konfiguration des Betriebssystems.
- Zu erwarten: Ein Kunde lässt Arbeitsplätze neu einrichten oder Datenträger beschaffen, oft als Teil einer größeren Aufgabe zu Hardware oder Arbeitsplätzen. Material kann ein Datenblatt oder eine Tabelle sein (Datenträgergröße, beteiligte Betriebssysteme, Dateigrößen), eine Liste von Installationsschritten in falscher Reihenfolge oder ein Ausschnitt aus einem UEFI-Menü.
- Operatoren: nennen (Einstellungen im UEFI, Installationsarten), unterscheiden oder erläutern (BIOS/UEFI, Partitionieren/Formatieren, MBR/GPT), in Reihenfolge bringen, beurteilen (Dateisystem für einen Datenträger).
- Zu erwarten sind kleine Teilaufgaben mit 2–6 Punkten. Beim Beurteilen gibt es volle Punkte nur mit der ausschlaggebenden Eigenschaft; bei FAT32 zählen der Vorteil (fast überall lesbar) und die Nachteile (4 GiB je Datei, keine Rechte).

**Fallen:**
- Teil A: Beim Vergleich von BIOS und UEFI die Gemeinsamkeit weglassen oder so tun, als lade nur UEFI das Betriebssystem.
- Teil A: Secure Boot nur mit „ist sicherer“ erklären, ohne die signierten Bootloader.
- Teil A: Die grafische Oberfläche als Pflichtmerkmal von UEFI ausgeben.
- Teil A: Partitionieren und Formatieren gleichsetzen oder die Begriffe nur nennen, ohne zu sagen, was dabei entsteht.
- Teil A: GPT wählen, ohne es zu begründen – etwa mit der 2-TiB-Grenze von MBR, mit mehr als vier Partitionen oder mit UEFI.
- Teil A: FAT32 als „das Windows-Dateisystem“ bezeichnen.
- Teil A: Ein Dateisystem mit „weil es modern ist“ oder „weil es am stabilsten ist“ begründen, statt mit der Eigenschaft, die im Fall den Ausschlag gibt.
- Teil A: Ein Dateisystem vorschlagen, das eines der beteiligten Geräte nicht lesen oder nicht beschreiben kann.
- Teil A: exFAT oder FAT32 dort vorschlagen, wo Zugriffsrechte gebraucht werden, etwa auf der Datenplatte eines Servers.
- Teil A: Beim Urteil nicht sagen, warum die anderen Dateisysteme ausscheiden und was man mit der Wahl aufgibt.
- Teil B: Bei einem schon genutzten Datenträger die Datensicherung vergessen; in der Reihenfolge das Partitionieren auslassen.
- Teil B: Die Bootreihenfolge nicht begründen können: Ohne sie startet der Rechner nicht vom Installationsmedium.
- Teil B: Treiber und Updates „bei Gelegenheit“ nachholen. Sie kommen vor den Anwendungen und bevor jemand mit dem Rechner arbeitet.
- Teil B: Administratorrechte für die tägliche Arbeit vergeben, weil es bequem ist oder damit jemand selbst Programme installieren kann.
- Teil B: Ein privates Microsoft-Konto auf einem Firmen-PC einrichten; es liegt außerhalb der Verwaltung des Betriebs. Ein Domänenkonto vorschlagen, wo es keine Domäne gibt.
- Teil B: Einstellungen ohne Bezug auf den Arbeitsplatz nennen. Dazu gehört das Warum: Update-Zeitfenster außerhalb der Arbeitszeit, Bildschirmsperre, wo Fremde auf den Bildschirm sehen können, kein Ruhezustand mitten in einer laufenden Vorführung.
- Teil B: Bei der Softwareinstallation einen Schritt auslassen, meist das Prüfen der Systemvoraussetzungen oder die Datenübernahme.
- Teil B: Testen, aber nichts festhalten, oder das Testprotokoll nur nennen: Ohne Protokoll fehlt die Grundlage für die Abnahme.
- Teil B: Ein Upgrade wie eine Neuinstallation behandeln; beim Upgrade bleiben Daten und Programme erhalten.
- Teil B: Viele baugleiche Rechner einzeln von Hand installieren wollen, statt ein Image oder eine Antwortdatei zu nutzen.
