Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Software und Betriebssysteme › Betriebssystem einrichten › Installation und Einrichtung: BIOS/UEFI, Partitionieren, Formatieren, Dateisysteme FAT32, NTFS, APFS, ext4

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt. Fehlende Nummern (etwa K4) sind Absicht.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet, und für alles, was eine Erklärung im Stoff nur nebenbei erwähnt.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen. Die Begründungen nimmst du aus dem Stoff und der Lehrnotiz; ergänzt du eine eigene, kennzeichne sie mit „Hintergrund, nicht aus dem Stoff: …“. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, reicht die Erklärung aus dem Stoff. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber nur mit dem, was du mir vorher erklärt hast. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Sag bei jeder Aufgabe, wie viele Punkte sie hat (ein Punkt je verlangtem Teil). Bewerte nur, was verlangt war, mit „x von y Punkten“ und dem, was fehlte: ✅ nur bei voller Punktzahl, ⚠️ bei Teilpunkten, ❌ bei null. Stimmt der Inhalt und fehlt nur das Fachwort, gibt es den Punkt: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Zeichnungen mache ich auf Papier und lade ein Foto hoch.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im IHK-Stil (Kundensituation, Teilaufgaben mit Punkten, zusammen etwa 10–12, eine nach der anderen). Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

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

**Hinweis aus dem Lernplan:** Die RAM-Größe im UEFI oder im Task-Manager prüfen (2026H-A2-ba) wird im Ordner Projektmanagement und Qualität gelernt (AP1-1-5-3-K3). Die Leistungsmerkmale Softwareverteilung, Patch- und Lizenzmanagement aus 2022F-A4-a (englischer Text, Ordner Kunde, Markt und Unternehmen) stehen hier in AP1-5-2-2-K11.

**Aufteilung:**
- Teil A – Vor dem Betriebssystem: Firmware K1; Datenträger vorbereiten K2, K8
- Teil A – Dateisysteme: Zuordnung K3; FAT32 K5; passendes Dateisystem beurteilen K7
- Pause möglich nach Teil A.
- Teil B – Installieren und einrichten: Reihenfolge der Installation K6; Arbeitsplatz konfigurieren K10
- Teil B – Software und viele Arbeitsplätze: Softwareinstallation beim Kunden K9; Installationsarten und Verteilung K11

**Schon geprüft:** In Prüfungen: K5 (2026H) · Noch nicht geprüft: K1–K3, K6–K11

**Kerngedanken:**
- Es sind drei Ebenen: Die Partitionstabelle (MBR oder GPT) hält fest, wie der Datenträger aufgeteilt ist; die Partition ist ein Bereich; das Dateisystem ordnet die Dateien in einer Partition. MBR und GPT sind also keine Dateisysteme, und BIOS/UEFI ist keine Partitionstabelle.
- Die Grenzen stehen in TiB und GiB, Datenträger werden in TB und GB verkauft: 2 TiB sind etwa 2,2 TB, 4 GiB etwa 4,29 GB. Eine 2-TB-Platte geht mit MBR noch ganz, eine mit 3 oder 4 TB nicht mehr.
- Secure Boot schützt nur den Startvorgang, nicht vor jeder Schadsoftware.
- Bei der Wahl des Dateisystems entscheidet der Fall, nicht die Bauform. „Extern, also exFAT“ ist falsch, wenn ein Gerät nur FAT32 liest oder wenn der Datenträger nur an einem System hängt und dessen Fähigkeiten braucht (Rechte, Verschlüsselung, Snapshots). exFAT hat weder Rechte noch Journaling; das ist der Preis für die breite Nutzbarkeit.
- Die Kontoart folgt aus der Umgebung: Gibt es eine Domäne, meldet man sich mit dem Domänenkonto an – Anmeldung, Rechte und Richtlinien kommen dann zentral, und das Konto gilt an jedem Rechner der Domäne. Ohne Domäne bleibt für den Betrieb das lokale Konto.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K1 – Startvorgang mit BIOS/UEFI und Secure Boot: (1) Nach dem Einschalten startet die Firmware (BIOS oder UEFI) und prüft im Selbsttest (POST) Prozessor, Arbeitsspeicher und angeschlossene Geräte. (2) Die Firmware geht die eingestellte Bootreihenfolge durch und sucht auf den Datenträgern nach einem Bootloader. (3) Das BIOS lädt dazu den Startcode aus dem ersten Sektor des Datenträgers (MBR), UEFI lädt eine Bootloader-Datei aus der EFI-Systempartition. (4) Bei aktivem Secure Boot prüft UEFI vor dem Start die digitale Signatur des Bootloaders mit den in der Firmware hinterlegten Schlüsseln. (5) Passt die Signatur nicht, etwa weil ein Bootkit den Bootloader verändert hat, verweigert UEFI den Start. (6) Der gestartete Bootloader lädt den Betriebssystemkern in den Arbeitsspeicher und übergibt ihm die Kontrolle. Vereinfacht: In Wirklichkeit setzt sich die Prüfung als Kette fort: Der Bootloader prüft seinerseits die Signatur des Betriebssystemkerns, bevor er ihn startet.
- K7 – Wie das Journal ein Dateisystem nach einem Absturz rettet: (1) Soll sich die Verwaltungsstruktur ändern, etwa beim Anlegen einer Datei der Verzeichniseintrag und die Liste der belegten Blöcke, schreibt das Dateisystem die geplanten Änderungen zuerst als Vorgang ins Journal. (2) Ist der Vorgang vollständig im Journal, schließt es ihn dort mit einem Abschlussvermerk ab. (3) Erst danach schreibt es die Änderungen an ihre eigentlichen Stellen auf dem Datenträger. (4) Stürzt das System ab, liest das Dateisystem beim nächsten Einbinden das Journal: Abgeschlossene Vorgänge holt es nach, Vorgänge ohne Abschlussvermerk verwirft es. (5) So ist die Verwaltungsstruktur nach Sekunden wieder stimmig; FAT32 und exFAT haben kein Journal, dort muss eine Prüfung wie chkdsk den ganzen Datenträger durchsuchen und halb geschriebene Änderungen reparieren. Vereinfacht: NTFS und ext4 sichern in der Grundeinstellung nur die Verwaltungsdaten über das Journal, nicht den Inhalt der Dateien; gerade geschriebene Daten können trotzdem verloren gehen.

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
- Echte Aufgabe (2026H, K5), 2 Punkte, „nennen“: Auf Baustellen sind verschiedene Betriebssysteme im Einsatz, für eine tragbare Datensicherung sollen USB-Sticks mit FAT32 dienen; verlangt sind ein Vorteil und ein Nachteil von FAT32. Die nicht amtliche Lösung nennt: läuft auf nahezu allen Betriebssystemen und Geräten; höchstens 4 GB je Datei, keine Dateirechte.
- In derselben Prüfung sollte im Testprotokoll die RAM-Größe auf anderem Weg geprüft werden; als Lösung zählt auch der Blick ins UEFI/BIOS.
- Sonst gibt es keine echte Aufgabe. Der Prüfungskatalog nennt Installation und Einrichtung von Systemen (Betriebssysteme, BIOS, UEFI, Partitionierungen/Formatierungen), Einstellungsmöglichkeiten im BIOS/UEFI, Filesysteme (fat32, NTFS, APFS, ext4) sowie Installation und Konfiguration des Betriebssystems.
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
