Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Verfügbarkeit und Betriebssicherheit › RAID vertieft: RAID 6, Hot-Spare, Hardware- oder Software-RAID

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
