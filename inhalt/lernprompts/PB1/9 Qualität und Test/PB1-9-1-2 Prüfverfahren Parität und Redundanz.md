Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Qualität und Test › Qualität sichern und Software testen › Prüfverfahren: Parität und Redundanz

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

## Stoff: Prüfverfahren: Parität und Redundanz

Ziel: Paritätsbits bestimmen und deuten und Redundanz als Prüfverfahren anwenden. Redundanz heißt hier gewollte Prüfinformation, nicht die unerwünschte Datenredundanz aus PB1-6.

Das muss ich können:

### K1 – Paritätsbit bei gerader und ungerader Parität (Stufe 3 Anwenden)
Du kannst ein Paritätsbit bestimmen: bei gerader Parität so ergänzen, dass die Anzahl der Einsen gerade ist, bei ungerader Parität so, dass sie ungerade ist.

Erklärung:
Das Paritätsbit ist ein **zusätzliches** Bit. Paritätsbit bestimmen – Einsen zählen, das Paritätsbit zählt mit:
- **gerade Parität:** Bit so setzen, dass die Anzahl der Einsen **gerade** ist
- **ungerade Parität:** so, dass sie **ungerade** ist
Beispiel `1011001` (4 Einsen): gerade → `0`, ungerade → `1`.

### K2 – Paritätsbit: was es erkennt und was nicht (Stufe 2 Verstehen)
Du kannst erklären, dass ein Paritätsbit einen einzelnen Bitfehler erkennt, ihn aber nicht findet oder berichtigt, und zwei gleichzeitig gekippte Bits nicht bemerkt.

Erklärung:
Was ein Paritätsbit kann:
- erkennt **ein** gekipptes Bit (Anzahl stimmt nicht mehr)
- findet **nicht**, welches Bit falsch ist, und **berichtigt nicht**
- bemerkt **zwei** gleichzeitig gekippte Bits **nicht** (die Anzahl der Einsen ändert sich um eine gerade Zahl oder gar nicht, die Parität stimmt wieder)

### K3 – Redundanz als Prüfverfahren: Prüfsumme, CRC (Stufe 2 Verstehen)
Du kannst Redundanz als Prüfverfahren erklären: zusätzliche Prüfinformation mitspeichern oder mitsenden, zum Beispiel eine Prüfsumme oder Prüfziffer, die der Empfänger neu berechnet und vergleicht, etwa die Frame Check Sequence (CRC) im Ethernet-Frame.

Erklärung:
**Redundanz als Prüfverfahren** = zusätzliche Prüfinformation, die der Empfänger neu berechnet und vergleicht:
- **Prüfsumme** (z. B. CRC = Cyclic Redundancy Check, ein aus den Daten berechneter Prüfwert; im Ethernet-Frame steht er am Ende als Frame Check Sequence, FCS)
- **Prüfziffer** (z. B. bei IBAN, ISBN)
Stimmt der Vergleich nicht, wurden die Daten bei der Übertragung, Speicherung oder Eingabe verfälscht – die Prüfziffer einer IBAN fängt z. B. Tippfehler ab. Achtung: nicht verwechseln mit unerwünschter **Datenredundanz** in Tabellen (PB1-6).

## Lehrnotiz: Prüfverfahren: Parität und Redundanz

**Aufteilung:**
- Paritätsbit bestimmen: K1
- Was ein Paritätsbit erkennt und was nicht: K2
- Redundanz als Prüfverfahren, mit dem Paritätsbit als einfachster Form: K3

**Schon geprüft:** Noch nicht geprüft: K1–K3

**Kerngedanken:**
- Das Paritätsbit ist ein zusätzliches Bit, und gezählt wird die Gesamtzahl der Einsen einschließlich dieses Bits. Faustregel: Ist die Anzahl in den Datenbits schon so, wie sie sein soll, ist das Paritätsbit 0, sonst 1.
- Der Empfänger kennt den richtigen Wert nicht, er zählt nur die Einsen nach. Kippt ein Bit, ändert sich die Anzahl um 1, und die Parität stimmt nicht mehr. Kippen zwei Bits, ändert sie sich um 0 oder um 2, also um eine gerade Zahl, und die Parität stimmt wieder.
- Berichtigen kann der Empfänger nicht, weil er nur weiß, dass die Anzahl falsch ist, aber nicht, an welcher Stelle.
- Redundanz heißt hier: Information, die für den Inhalt selbst nicht nötig ist und nur mitgeschickt wird, damit Fehler auffallen. Das Paritätsbit ist ihre einfachste Form, Prüfsumme und Prüfziffer arbeiten nach demselben Prinzip.

**Typische Missverständnisse:**
- Viele denken, bei gerader Parität sei das Paritätsbit 1 oder bei einer geraden Anzahl Einsen komme eine 1 dazu; richtig ist: Das Bit macht die Gesamtzahl passend, und bei schon gerader Anzahl ist es bei gerader Parität 0.
- Viele denken, das Paritätsbit „sichere“ die Daten und das System korrigiere Fehler automatisch; richtig ist: Es zeigt einen einzelnen Bitfehler nur an und berichtigt ihn nicht; die Daten müssen dann als fehlerhaft behandelt werden.

**Fachwörter:**
- Paritätsbit: Zusatzbit, macht die Anzahl der Einsen passend
- gerade Parität: Gesamtzahl der Einsen ist gerade
- ungerade Parität: Gesamtzahl der Einsen ist ungerade
- Bitfehler: ein Bit ist bei der Übertragung gekippt
- Prüfsumme: aus den Daten berechneter Kontrollwert
- Prüfziffer: aus den übrigen Ziffern berechnete Kontrollziffer
- Frame Check Sequence: Prüffeld am Ende des Ethernet-Frames
- Redundanz: zusätzliche, für den Inhalt nicht nötige Information

**So fragt die IHK:**
- In den vorliegenden Prüfungen wurde das Thema noch nicht gefragt. Der Prüfungskatalog nennt unter „Methoden der Qualitätslenkung anwenden“ ausdrücklich „Verschiedene Prüfverfahren, z. B. Parität, Redundanz“.
- Zu erwarten ist eine kurze Teilaufgabe (2–4 Punkte) mit drei möglichen Teilen:
  - ein Paritätsbit zu einer Bitfolge bestimmen („Ermitteln/Ergänzen Sie“),
  - prüfen, ob eine empfangene Folge zur vereinbarten Parität passt,
  - „Erläutern Sie“ zur Grenze des Verfahrens.
- Bei Redundanz genügt meist das Prinzip „zusätzliche Prüfinformation, beim Empfänger neu berechnet und verglichen“ mit einem Beispiel (Prüfsumme/CRC, Prüfziffer, Paritätsbit).
- Wichtig ist die Begründung über die Anzahl der Einsen.

**Fallen:**
- Null Einsen sind eine gerade Anzahl.
- Das Paritätsbit mit der Anzahl der Einsen verwechseln oder beim Prüfen einer empfangenen Folge das Paritätsbit nicht mitzählen.
- Nur das Bit hinschreiben, ohne die gezählten Einsen als Begründung.
- Wo das Paritätsbit steht (vorn oder hinten), legt das jeweilige Verfahren fest. Die Aufgabe muss es angeben.
- Eine empfangene Folge mit passender Parität „richtig“ nennen. Zulässig ist nur: Es wird kein Fehler erkannt.
- Bei der Grenze des Verfahrens nur behaupten statt begründen oder einen der drei Teile weglassen (erkennt einen Fehler, berichtigt nicht, übersieht zwei).
- Bei zwei gekippten Bits erwarten, dass sich die Anzahl der Einsen sichtbar ändert. Sie kann auch gleich bleiben.
- Redundanz nur als „doppelte Information“ beschreiben, ohne den Prüfzweck. Beim Unterschied zur Datenredundanz muss der Zweck beider Arten genannt sein.
- Eine CRC wird nicht von Hand gerechnet. Soll eine Prüfsumme oder Prüfziffer berechnet werden, muss die Rechenregel in der Aufgabe stehen.
