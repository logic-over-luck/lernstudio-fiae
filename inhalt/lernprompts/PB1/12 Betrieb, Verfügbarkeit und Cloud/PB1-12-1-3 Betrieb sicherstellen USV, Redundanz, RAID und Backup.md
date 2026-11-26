Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Verfügbarkeit und Betriebssicherheit › Betrieb sicherstellen: USV, Redundanz, RAID und Backup

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

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

## Stoff: Betrieb sicherstellen: USV, Redundanz, RAID und Backup

Ziel: Elektrotechnische, hardwaretechnische und softwaretechnische Maßnahmen zur Sicherstellung des Betriebs beurteilen, RAID-Level unterscheiden und Kapazitäten berechnen.

Das muss ich können:

### K1 – Einsatz einer USV (Stufe 4 Beurteilen)
Du kannst den Einsatz einer USV beurteilen: Sie überbrückt Stromausfälle und Spannungsschwankungen, bis Systeme geordnet herunterfahren oder ein Notstromaggregat übernimmt; Leistung und Überbrückungszeit müssen zum Bedarf passen.

Erklärung:
**USV** (unterbrechungsfreie Stromversorgung):
- überbrückt **Stromausfälle** und **Spannungsschwankungen**
- bis Systeme **geordnet herunterfahren** oder ein **Notstromaggregat** übernimmt
Beurteilen: Reicht die **Leistung** (VA/W) für alle Geräte, reicht die **Überbrückungszeit**?

### K2 – Hardwaretechnische Redundanz: Netzteile, Cluster, Leitungen (Stufe 4 Beurteilen)
Du kannst hardwaretechnische Redundanz beurteilen: doppelte Netzteile, Server im Verbund (Cluster), zweite Leitung, zweites Rechenzentrum; der Ausfall eines Teils beendet den Betrieb nicht.

Erklärung:
Hardwaretechnische **Redundanz**:
- **doppelte Netzteile**
- Server im **Verbund (Cluster)**
- **zweite Leitung**, zweites **Rechenzentrum**
Ziel: Fällt ein Teil aus, **läuft der Betrieb weiter**. Beurteilen: Wo sitzt noch ein Single Point of Failure?

### K3 – RAID-Level 0, 1, 5 und 10 (Stufe 4 Beurteilen)
Du kannst die RAID-Level 0, 1, 5 und 10 nach Ausfallsicherheit, nutzbarer Kapazität und Geschwindigkeit unterscheiden und für einen Einsatz beurteilen, welcher passt.

Erklärung:
- **RAID 0:** Striping (Daten abwechselnd auf alle Platten verteilt) – schnell, volle Kapazität, **keine** Ausfallsicherheit
- **RAID 1:** Spiegelung – 1 Platte darf ausfallen, **50 %** Kapazität; Lesen von beiden Platten parallel, Schreiben nicht schneller
- **RAID 5:** Parität (Prüfdaten, aus denen sich eine ausgefallene Platte wiederherstellen lässt) – 1 Platte darf ausfallen, Kapazität **(n − 1) × Platte**, mind. 3 Platten; Lesen schnell, Schreiben langsamer, weil die Parität berechnet wird
- **RAID 10:** Spiegel + Striping – schnell und ausfallsicher, **50 %** Kapazität, mind. 4 Platten

### K4 – Nutzbare Kapazität eines RAID-Verbunds (Stufe 3 Anwenden)
Du kannst die nutzbare Kapazität eines RAID-Verbunds berechnen, zum Beispiel RAID 1 aus zwei 4-TB-Platten 4 TB, RAID 5 aus vier 2-TB-Platten 6 TB, RAID 10 aus vier 2-TB-Platten 4 TB (Herstellerangaben dezimal in TB; als Datenmenge in TiB umrechnen wie in AP1).

Erklärung:
Nutzbare Kapazität:
- **RAID 0:** n × Platte
- **RAID 1:** 1 × Platte (2 × 4 TB → **4 TB**)
- **RAID 5:** (n − 1) × Platte (4 × 2 TB → **6 TB**)
- **RAID 10:** n ÷ 2 × Platte (4 × 2 TB → **4 TB**)
Hersteller rechnen in TB (dezimal); als Datenmenge ggf. in TiB umrechnen (AP1): 1 TB = 10¹² Byte, 1 TiB = 2⁴⁰ Byte, also 1 TB ≈ 0,909 TiB (4 TB ≈ 3,64 TiB).

### K5 – RAID ist kein Backup, dazu Snapshots (Stufe 4 Beurteilen)
Du kannst über die Backup-Verfahren aus AP1 hinaus begründen, warum RAID kein Backup ersetzt (Löschen, Verschlüsseln durch Schadsoftware und Fehlbedienung werden sofort auf alle Platten übertragen), und den Einsatz von Snapshots beurteilen.

Erklärung:
**RAID ersetzt kein Backup**, weil jede Änderung **sofort auf alle Platten** geht:
- versehentliches **Löschen**
- **Verschlüsselung durch Ransomware**
- **Fehlbedienung**, defekte Software
**Snapshots** halten einen Stand zu einem Zeitpunkt fest – schnell zurück, aber liegen meist auf demselben System, ersetzen also auch kein getrennt gelagertes Backup.

### K6 – Redundanzformen: funktionell, räumlich, diversitär (Stufe 4 Beurteilen)
Du kannst Formen der Redundanz für einen Betrieb beurteilen: funktionelle Redundanz (Komponenten wie Netzteile, Platten oder Server mehrfach parallel ausgelegt), redundante Datensicherung (Kopien auf getrennten Medien), räumliche Redundanz (Systeme an getrennten Standorten gegen Brand, Wasser oder Stromausfall vor Ort) und diversitäre Redundanz (verschiedene Hersteller, Systeme oder Provider, damit ein gemeinsamer Fehler nicht alle trifft).

Erklärung:
**Redundanz** heißt: zusätzliche, gleichwertige Ressourcen, die im Normalbetrieb nicht gebraucht werden, aber beim Ausfall übernehmen. Welche Form nötig ist, hängt davon ab, wogegen man sich schützen will:
- **funktionell:** ein Bauteil fällt aus → Netzteile, Platten (RAID), Server im Cluster mehrfach
- **Datensicherung:** Daten gehen verloren → Kopien auf getrennten Medien
- **räumlich:** Schaden am Standort (Brand, Hochwasser) → zweites Rechenzentrum oder Sicherung außer Haus
- **diversitär:** gemeinsamer Fehler aller gleichen Teile (Firmware-Fehler, Störung beim Provider) → zwei Provider, Geräte verschiedener Hersteller
Beispiel: Zwei Internetleitungen desselben Providers im selben Kabelkanal helfen nicht, wenn ein Bagger den Kanal trifft – erst räumlich getrennte Leitungen zweier Provider schützen davor.

### K7 – Load Balancer vor mehreren Servern (Stufe 4 Beurteilen)
Du kannst den Einsatz eines Load Balancers beurteilen: Er nimmt als gemeinsamer Einstiegspunkt alle Anfragen an und verteilt sie auf mehrere gleichartige Server; so lässt sich durch weitere Server skalieren, und fällt einer aus, bedienen die übrigen den Dienst weiter; hält ein Server Sitzungsdaten, müssen die Anfragen eines Clients bei ihm landen (Session-Affinität), oder die Sitzung wird zentral gespeichert.

Erklärung:
Ein **Load Balancer** steht vor einer Gruppe gleichartiger Server (Cluster) und ist für die Clients die einzige Adresse.
- **Lastverteilung:** Anfragen gehen reihum oder an den am wenigsten belasteten Server.
- **Ausfallsicherheit:** Er prüft regelmäßig, ob jeder Server antwortet (Health Check), und schickt keine Anfragen mehr an ausgefallene.
- **Skalierung:** Für mehr Last kommen weitere Server dazu, ohne dass sich für die Clients etwas ändert.
**Sitzungen:** Hält ein Server den Warenkorb im eigenen Speicher, muss derselbe Client immer bei ihm landen (Session-Affinität). Robuster ist es, Sitzungen zentral, etwa in einer Datenbank oder einem Cache, abzulegen – dann kann jeder Server jede Anfrage bedienen.
Der Load Balancer selbst darf kein Single Point of Failure sein; er wird deshalb meist ebenfalls doppelt betrieben.

### K8 – Redundante Netzteile an getrennten Stromkreisen (Stufe 4 Beurteilen)
Du kannst begründen, warum die beiden Netzteile eines Servers oder Switches an getrennt abgesicherte Stromkreise, möglichst an verschiedene Phasen oder USVs, angeschlossen werden: Hängen beide am selben Kreis, legt eine ausgelöste Sicherung das Gerät trotz doppelter Netzteile still.

Erklärung:
Doppelte Netzteile schützen nur vor dem Ausfall eines **Netzteils** – nicht vor dem Ausfall des **Stroms**, an dem beide hängen.
- Serverräume haben deshalb eigene, getrennt abgesicherte Stromkreise; die Last wird auf die drei Phasen verteilt.
- Jedes Netzteil kommt an einen anderen Kreis (oft A- und B-Versorgung, je mit eigener USV).
- So bleibt das Gerät in Betrieb, wenn eine Sicherung auslöst, eine Steckdosenleiste ausfällt oder eine USV gewartet wird.
Beispiel: Ein Techniker steckt beide Netzteile eines Datenbankservers in dieselbe Steckdosenleiste. Ein Kurzschluss an einem anderen Gerät der Leiste löst die Sicherung aus – der Server ist trotz Redundanz aus.

## Lehrnotiz: Betrieb sicherstellen: USV, Redundanz, RAID und Backup

**Aufteilung:**
- Teil A – Redundanz und Strom: Redundanz und ihre Formen K2, K6; USV und getrennte Stromkreise K1, K8
- Pause möglich nach Teil A.
- Teil B – Daten und Last: RAID-Level und Kapazität K3, K4; RAID und Snapshots sind kein Backup K5; Load Balancer K7

**Schon geprüft:** Noch nicht geprüft: K1–K8

**Kerngedanken:**
- Prüffrage für jede Redundanz: Gibt es ein Ereignis, das beide Teile gleichzeitig trifft? Zwei gleiche Teile nebeneinander schützen nur gegen den Defekt eines Teils.
- Eine USV ist kein Dauerbetrieb, ihr Akku reicht nur begrenzte Zeit. Das geordnete Herunterfahren ist nötig, weil hartes Abschalten Daten zerstören und Datenbanken beschädigen kann.
- RAID schützt nur vor dem Ausfall einzelner Platten. Brand oder Diebstahl treffen den ganzen Verbund, und ältere Datenstände gibt es nicht. Bei RAID 0 sind schon beim Ausfall einer Platte alle Daten verloren. RAID 10 verkraftet mindestens einen Ausfall, höchstens einen je Spiegelpaar.
- Abgrenzung: USV-Klassen und USV-Berechnungen sowie RAID 6 und Hot-Spare sind eigene Stichpunkte. Die Backup-Verfahren selbst sind Stoff aus AP1.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K1 – Wie die USV das geordnete Herunterfahren auslöst: (1) Fällt der Strom aus, versorgt die USV die angeschlossenen Geräte aus ihrer Batterie weiter. (2) Über eine Datenverbindung (USB-Kabel oder Netzwerkkarte der USV) meldet sie den Stromausfall und die geschätzte Restlaufzeit an eine Software auf den Servern. (3) Kommt der Strom zurück, bevor eine eingestellte Schwelle erreicht ist, passiert nichts weiter. (4) Sinkt die Restlaufzeit unter die eingestellte Schwelle, startet die Software auf jedem Server das geordnete Herunterfahren: Dienste beenden, offene Daten schreiben, ausschalten. (5) Die Schwelle muss so gewählt sein, dass die verbleibende Überbrückungszeit reicht, bis der langsamste Server heruntergefahren ist.
- K3 – RAID 5: Parität berechnen und Platte wiederherstellen: (1) Der RAID-Controller teilt die Daten in Blöcke und schreibt sie streifenweise auf die Platten; je Streifen bleibt eine Platte für den Paritätsblock frei. (2) Aus den Datenblöcken eines Streifens berechnet der Controller per XOR den Paritätsblock und schreibt ihn auf die freie Platte. (3) Der Paritätsblock liegt in jedem Streifen auf einer anderen Platte; insgesamt belegt die Parität so den Platz genau einer Platte. (4) Bei jedem Schreibzugriff berechnet der Controller die Parität des Streifens neu und schreibt sie zusätzlich; deshalb ist Schreiben langsamer als Lesen. (5) Fällt eine Platte aus, berechnet der Controller jeden fehlenden Block per XOR aus den übrigen Blöcken des Streifens samt Parität. (6) Nach dem Plattentausch schreibt der Controller die berechneten Blöcke auf die neue Platte (Rebuild); fällt vorher eine zweite Platte aus, sind die Daten verloren.

**Typische Missverständnisse:**
- Viele denken, RAID 0 sei wegen des „R“ im Namen redundant; richtig ist: Es bietet keinerlei Ausfallsicherheit.
- Viele denken, der Load Balancer halte die Anfragen eines Kunden von selbst beim selben Server; richtig ist: Session-Affinität muss eingestellt werden. Fällt genau dieser Server aus, ist die Sitzung trotzdem weg; deshalb ist zentrales Speichern robuster.

**Fachwörter:**
- USV: unterbrechungsfreie Stromversorgung, überbrückt mit Akkus
- Überbrückungszeit: Dauer, die der Akku durchhält
- Cluster: Verbund von Servern, die sich vertreten
- Striping: Daten abwechselnd auf Platten verteilt
- Spiegelung: gleiche Daten auf zwei Platten
- Parität: Prüfdaten zum Rekonstruieren einer Platte
- Snapshot: festgehaltener Datenstand zu einem Zeitpunkt
- Session-Affinität: Client landet immer beim selben Server

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es bisher keine echte Prüfungsaufgabe. Der Katalog nennt elektrotechnische (USV), hardwaretechnische (Redundanz, RAID) und softwaretechnische Maßnahmen.
- Zu erwarten ist eine Ausgangssituation mit einer konkreten Serverausstattung. Dazu passen „Berechnen Sie die nutzbare Kapazität …“ (2–4 Punkte, Rechenweg), „Beurteilen Sie, ob … ausreicht“ oder „Erläutern Sie, warum ein RAID kein Backup ersetzt“ (2–4 Punkte) und „Beschreiben Sie zwei Maßnahmen …“ (je 2 Punkte).
- Bei „beurteilen“ und „begründen“ zählen nur Begründungen am Fall; reine Stichwortlisten bringen höchstens die Hälfte.

**Fallen:**
- Teil A: „Redundanz ist vorhanden“ schreiben, statt die Form passend zur Bedrohung zu nennen und die Lücke mit einer Verbesserung zu beurteilen.
- Teil A: Eine Kopie auf demselben Gerät als redundante Datensicherung zählen. Oder eine Sicherung im selben Raum als Schutz gegen Brand oder Hochwasser werten; dafür braucht es räumliche Redundanz (Sicherung außer Haus).
- Teil A: Bei der USV nur die Leistung prüfen; ist die Überbrückungszeit kürzer als das Herunterfahren, wird trotzdem hart abgeschaltet. Zur Beurteilung gehören die Folge und eine Abhilfe.
- Teil A: Bei den Netzteilen nur „verschiedene Steckdosen“ schreiben; verlangt sind getrennt abgesicherte Stromkreise.
- Teil B: Bei RAID 10 die volle Kapazität ansetzen statt der Hälfte, oder bei RAID 5 die Hälfte abziehen statt einer Platte.
- Teil B: Bei der Wahl des Levels nur den passenden nennen; die anderen werden je mit ihrem Ausschlussgrund verworfen (zu wenig Kapazität, keine Ausfallsicherheit).
- Teil B: „RAID ist kein Backup“ ohne Begründung schreiben. Erwartet werden „sofort auf alle Platten“, bei Snapshots „auf demselben System“ und als Fazit ein getrennt gelagertes Backup.
- Teil B: Beim Load Balancer die Ursache des Sitzungsproblems nicht erklären (die Sitzung liegt im Speicher eines Servers, die nächste Anfrage landet woanders) oder nur eine der beiden Lösungen kennen.
