Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Verfügbarkeit und Betriebssicherheit › RAID vertieft: RAID 6, Hot-Spare, Hardware- oder Software-RAID

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

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

## Stoff: RAID vertieft: RAID 6, Hot-Spare, Hardware- oder Software-RAID

Ziel: Beurteilen, wann RAID 6 statt RAID 5 nötig ist, die Wirkung einer Hot-Spare-Platte erklären und zwischen Hardware- und Software-RAID abwägen.

Das muss ich können:

### K1 – RAID 6 gegenüber RAID 5 (Stufe 4 Beurteilen)
Du kannst beurteilen, wann RAID 6 statt RAID 5 sinnvoll ist: RAID 6 verteilt zwei unabhängige Paritätsinformationen über mindestens vier Platten, verkraftet den gleichzeitigen Ausfall von zwei Platten und bietet die Kapazität von n − 2 Platten; das lohnt sich bei vielen großen Platten, deren Wiederherstellung lange dauert, weil währenddessen eine zweite ausfallen kann.

Erklärung:
Bei **RAID 5** darf eine Platte ausfallen. Danach läuft der Verbund ohne Schutz, bis die Ersatzplatte neu aufgebaut ist (Rebuild). Bei großen Platten dauert das viele Stunden bis Tage – und gerade dann werden alle übrigen Platten stark belastet.
**RAID 6** speichert zwei unabhängige Paritäten, verteilt über alle Platten:
- mindestens 4 Platten, nutzbar `(n − 2) × Plattengröße`
- zwei Platten dürfen gleichzeitig ausfallen
- Schreiben ist langsamer als bei RAID 5, weil zwei Paritäten berechnet werden
Beispiel: 8 Platten mit je 10 TB als RAID 6 → 60 TB nutzbar; fällt eine Platte aus, ist der Verbund während des Rebuilds noch gegen einen weiteren Ausfall geschützt.

### K2 – Hardware-RAID oder Software-RAID (Stufe 4 Beurteilen)
Du kannst für einen Einsatz beurteilen, ob Hardware-RAID (eigener Controller, oft mit gepuffertem Cache, schnell und entlastet die CPU, kostet aber extra und bindet an den Controller) oder Software-RAID (vom Betriebssystem verwaltet, ohne Zusatzkosten, belastet aber die CPU) passt.

Erklärung:
Ein RAID-Verbund muss verwaltet werden: Daten verteilen, Paritäten berechnen, Ausfälle erkennen, neu aufbauen.
- **Hardware-RAID:** Ein eigener Controller übernimmt alles, das Betriebssystem sieht nur ein Laufwerk. Ein Cache mit Batterie- oder Flash-Puffer beschleunigt das Schreiben und schützt beim Stromausfall. Nachteil: Zusatzkosten, und fällt der Controller aus, braucht man oft ein baugleiches Modell, um den Verbund wieder zu lesen.
- **Software-RAID:** Das Betriebssystem verwaltet die Platten selbst. Günstig und flexibel, kostet aber CPU-Leistung, vor allem bei RAID 5 und 6.
Beispiel: Ein Dateiserver mit RAID 6 und viel Schreiblast bekommt einen Hardware-Controller; ein kleiner Server mit RAID 1 für das Betriebssystem kommt gut mit Software-RAID aus.

### K3 – Hot-Spare-Platte und automatischer Neuaufbau (Stufe 2 Verstehen)
Du kannst erklären, wie eine Hot-Spare-Platte die Verfügbarkeit eines RAID erhöht: Die zusätzlich eingebaute, ungenutzte Reserveplatte wird beim Ausfall einer Platte automatisch in den Verbund aufgenommen, und die fehlenden Daten werden darauf neu aufgebaut, ohne auf einen Austausch zu warten; während des Neuaufbaus ist der Zugriff langsamer.

Erklärung:
Ohne Reserve beginnt der Neuaufbau (Rebuild) erst, wenn jemand den Ausfall bemerkt und eine neue Platte einbaut – am Wochenende vielleicht erst Tage später. So lange ist der Verbund ungeschützt.
Eine **Hot-Spare-Platte** steckt schon im Gerät, wird aber nicht genutzt.
- Fällt eine Platte aus, nimmt der Controller (bei Software-RAID das Betriebssystem) die Hot-Spare sofort in den Verbund auf.
- Er rekonstruiert die fehlenden Daten aus den übrigen Platten (Spiegel oder Parität) auf die Reserveplatte.
- Während des Rebuilds ist der Zugriff langsamer; danach ist der Verbund wieder voll geschützt.
Die defekte Platte wird später gegen eine neue getauscht; die neue Platte dient dann als Hot-Spare.
Beispiel: Ein NAS mit RAID 5 aus vier Platten und einer fünften als Hot-Spare baut sich nachts selbst wieder auf, wenn eine Platte ausfällt.

## Lehrnotiz: RAID vertieft: RAID 6, Hot-Spare, Hardware- oder Software-RAID

**Aufteilung:**
- RAID 6 gegenüber RAID 5: K1
- Hot-Spare-Platte: K3 – knüpft direkt an die ungeschützte Zeit an
- Hardware- oder Software-RAID: K2

**Schon geprüft:** Noch nicht geprüft: K1–K3

**Kerngedanken:**
- Der rote Faden ist die ungeschützte Zeit nach dem ersten Plattenausfall. Sie reicht vom Ausfall über das Bemerken und den Einbau der Ersatzplatte bis zum Ende des Rebuilds. RAID 6 schützt in dieser Zeit weiter, die Hot-Spare-Platte verkürzt sie.
- Bei Hardware- oder Software-RAID gibt es keine feste richtige Antwort. Abgewogen werden RAID-Level und Last (muss Parität berechnet werden, wird viel geschrieben?) gegen die Kosten. Jede Entscheidung zählt, wenn sie stimmig am Fall begründet ist.
- RAID 5 und die übrigen Level kommen aus dem Nachbarstichpunkt zu RAID und Backup und werden hier vorausgesetzt. Auch RAID 6 ersetzt kein Backup.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K2 – Schreibvorgang über den gepufferten Controller-Cache: (1) Das Betriebssystem schickt einen Schreibauftrag an den RAID-Controller, der ihm gegenüber wie ein einzelnes Laufwerk auftritt. (2) Der Controller legt die Daten in seinem Cache ab und meldet dem Betriebssystem sofort, dass der Schreibvorgang abgeschlossen ist. (3) Danach berechnet der Prozessor des Controllers die Parität und schreibt Daten und Parität auf die Platten des Verbunds. (4) Fällt vorher der Strom aus, hält die Batterie den Cache-Inhalt, oder ein Kondensator liefert Strom, um ihn in Flash-Speicher zu sichern. (5) Beim nächsten Start schreibt der Controller die gesicherten Daten nachträglich auf die Platten, sodass kein bestätigter Schreibvorgang verloren geht. (6) Bei Software-RAID führt das Betriebssystem Verteilung und Paritätsberechnung mit der CPU des Servers aus; einen batteriegepufferten Controller-Cache gibt es dort nicht. Vereinfacht: Bei kleinen Änderungen muss der Controller für die neue Parität zuerst alte Daten und alte Parität von den Platten lesen, was das Schreiben bei RAID 5 und 6 zusätzlich bremst.

**Typische Missverständnisse:**
- Viele denken, auf der Hot-Spare-Platte liege schon eine Kopie der Daten oder sie bringe mehr Speicherplatz; richtig ist: Sie ist bis zum Ausfall leer, zählt nicht zur nutzbaren Kapazität und ist auch keine weitere Paritätsplatte.
- Viele denken, Hardware-RAID sei immer besser, oder Software-RAID reiche überall, weil es nichts kostet; richtig ist: Es hängt von Level und Schreiblast ab.

**Fachwörter:**
- Rebuild: Neuaufbau der Daten auf einer Ersatzplatte
- Parität: Prüfdaten zum Rekonstruieren einer Platte
- Hot-Spare-Platte: eingebaute, ungenutzte Reserveplatte
- Hardware-RAID: eigener Controller verwaltet den Verbund
- Software-RAID: Betriebssystem verwaltet den Verbund
- Controller: Steckkarte, die das RAID steuert
- Cache: schneller Zwischenspeicher für Schreibvorgänge

**So fragt die IHK:**
- In den ausgewerteten Prüfungen kam RAID bisher nicht vor, auch nicht RAID 6, Hot-Spare oder Hardware-/Software-RAID. Der Stoff stammt aus dem Lehrbuch.
- Belegt ist nur der Stil des Themenfelds Betrieb: Zu einer ausfallgefährdeten Infrastruktur gab es je 4 Punkte für zwei beschriebene Schwachstellen bzw. Anforderungen (Operator „beschreiben“, Lösungen beispielhaft).
- Zu erwarten sind „Berechnen Sie die nutzbare Kapazität“ (1–2 Punkte), „Beurteilen Sie, ob RAID 5 oder RAID 6 …“ bzw. „Erläutern Sie die Funktion einer Hot-Spare-Platte“ (3–4 Punkte) und eine Gegenüberstellung von Hardware- und Software-RAID (je Aspekt 1 Punkt).
- Bei „beurteilen“ zählt die Entscheidung mit Begründung am Fall; Aufzählungen bringen nur Teilpunkte.

**Fallen:**
- „RAID 6 ist sicherer“ schreiben, ohne den langen Rebuild und das Risiko eines zweiten Ausfalls in dieser Zeit zu nennen.
- Bei RAID 6 nur eine Platte abziehen statt zwei.
- Übersehen, dass RAID 6 mit vier Platten nur die Hälfte nutzbar lässt (wie RAID 10); der Anteil wird erst mit mehr Platten günstiger.
- Die Hot-Spare-Platte bei der Kapazität mitrechnen; es zählen nur die Platten im Verbund.
- Die Nachteile von RAID 6 (weniger Kapazität, langsameres Schreiben) nicht gegen den Fall abwägen; bei seltenem Schreiben und genug Platz wiegen sie wenig.
- Sagen, die Hot-Spare verhindere den Rebuild; sie lässt ihn nur sofort beginnen.
- Eine Hot-Spare bei RAID 0 einplanen; dort gibt es weder Spiegel noch Parität zum Rekonstruieren.
- Beim Erklären der Hot-Spare den langsameren Zugriff während des Rebuilds oder den späteren Tausch der defekten Platte weglassen.
- Eigenschaften vertauschen, etwa „Software-RAID entlastet die CPU“.
- Die Bindung an den Controller als Nachteil des Hardware-RAID vergessen.
