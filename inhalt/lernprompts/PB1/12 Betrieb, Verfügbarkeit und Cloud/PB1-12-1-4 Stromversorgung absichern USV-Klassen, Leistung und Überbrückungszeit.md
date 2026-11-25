Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Verfügbarkeit und Betriebssicherheit › Stromversorgung absichern: USV-Klassen, Leistung und Überbrückungszeit

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

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

## Stoff: Stromversorgung absichern: USV-Klassen, Leistung und Überbrückungszeit

Ziel: USV-Klassen nach Schutzwirkung und Einsatz beurteilen, die Wirkleistung und die Überbrückungszeit einer USV berechnen und ihren Einsatz wirtschaftlich beurteilen.

Das muss ich können:

### K1 – USV-Klassen VFD, VI und VFI (Stufe 4 Beurteilen)
Du kannst die USV-Klassen nach Schutzwirkung und Einsatz beurteilen: VFD (Offline bzw. Standby, schaltet erst bei Ausfall mit kurzer Umschaltzeit auf Batterie, günstig, für einzelne Arbeitsplätze), VI (netzinteraktiv, gleicht zusätzlich länger anhaltende Unter- und Überspannung aus, für kleinere Netze) und VFI (Online bzw. Doppelwandler, versorgt die Last ständig über Gleich- und Wechselrichter ohne Umschaltzeit und schützt auch vor Frequenzschwankungen und Spannungsspitzen, für Server und Rechenzentren).

Erklärung:
Die Klassen (nach EN/IEC 62040-3) beschreiben, **wovon die Ausgangsspannung der USV abhängt**:
- **VFD** (Voltage and Frequency Dependent, Offline/Standby): Im Normalbetrieb geht der Netzstrom direkt durch; erst bei Ausfall schaltet die USV in wenigen Millisekunden auf Batterie. Günstig; sie fängt Ausfälle sowie kurze Spannungseinbrüche und Spannungsstöße ab, regelt aber länger anhaltende Unter- oder Überspannung und Frequenzabweichungen nicht aus.
- **VI** (Voltage Independent, netzinteraktiv): regelt zusätzlich länger anhaltende Über- und Unterspannung aus, ohne gleich auf Batterie zu gehen.
- **VFI** (Voltage and Frequency Independent, Online/Doppelwandler): wandelt den Strom ständig mit einem Gleichrichter in Gleichstrom und mit einem Wechselrichter wieder in Wechselstrom um; die Last hängt nie direkt am Netz, eine Umschaltzeit gibt es nicht. Bester Schutz, aber teurer und mit höheren Eigenverlusten.
Beispiel: Für den PC an der Kasse reicht eine VFD-USV; das Rack mit Datenbank- und Virtualisierungsservern bekommt eine VFI-USV.

### K2 – USV-Leistung: Voltampere und Watt (Stufe 3 Anwenden)
Du kannst aus der Scheinleistung einer USV in VA mit dem Leistungsfaktor die Wirkleistung in Watt berechnen (P = S · cos φ), um zu sehen, ob die USV die Last der angeschlossenen Geräte trägt, zum Beispiel liefert eine USV mit 1500 VA bei einem Leistungsfaktor von 0,9 höchstens 1350 W.

Erklärung:
USVs werden oft mit der **Scheinleistung** S in VA (Voltampere) beworben, die Geräte brauchen aber **Wirkleistung** P in W.
- `S = U · I` (in VA)
- `P = S · cos φ` (in W); cos φ ist der Leistungsfaktor zwischen 0 und 1
Die Wirkleistung ist also höchstens so groß wie die Scheinleistung. Wer VA und W gleichsetzt, überlastet die USV.
Vorgehen: Wirkleistung aller angeschlossenen Geräte addieren, etwas Reserve einplanen und mit der Watt-Angabe der USV vergleichen.
Beispiel: USV 1500 VA, cos φ = 0,9 → 1350 W. Zwei Server mit je 600 W (1200 W) passen, ein dritter nicht mehr.

### K3 – Überbrückungszeit einer USV (Stufe 3 Anwenden)
Du kannst die Überbrückungszeit einer USV aus der gespeicherten Energie der Akkus in Wh, dem Wirkungsgrad des Wechselrichters und der Last in W berechnen (t = E · η ÷ P), zum Beispiel versorgt eine USV mit 500 Wh bei 90 % Wirkungsgrad eine Last von 300 W rund 1,5 Stunden.

Erklärung:
Die **Überbrückungszeit** ist die Zeit, in der die USV die Last allein aus ihren Akkus versorgen kann.
- gespeicherte Energie: `E = U · Q` (z. B. 12 V · 9 Ah = 108 Wh je Akku)
- Verluste im Wechselrichter (macht aus dem Gleichstrom der Akkus Wechselstrom): mit dem Wirkungsgrad η multiplizieren
- `t = E · η ÷ P` – P ist hier die Last der Geräte, nicht die Leistung der USV aus K2
Die Zeit muss reichen, um die Systeme geordnet herunterzufahren oder bis ein Notstromaggregat anläuft.
Die Rechnung ist ein Richtwert: Akkus altern und geben bei hoher Last weniger Energie ab; Hersteller nennen deshalb Laufzeittabellen.
Beispiel: 4 Akkus mit je 12 V und 9 Ah = 432 Wh; bei η = 0,9 und 400 W Last → 432 · 0,9 ÷ 400 ≈ 0,97 h, also knapp eine Stunde.

### K4 – USV: Nutzen gegen laufende Kosten (Stufe 4 Beurteilen)
Du kannst den Einsatz einer USV wirtschaftlich beurteilen: Dem Schutz vor Datenverlust, Hardwareschäden und Ausfallzeit bei kurzen Stromausfällen und Netzstörungen stehen Anschaffungskosten, ein dauerhaft höherer Stromverbrauch durch die Eigenverluste, Wartung und der Tausch der Akkus alle paar Jahre gegenüber.

Erklärung:
Eine USV kostet nicht nur beim Kauf:
- **laufend:** Eigenverluste – vor allem bei Online-USVs, die den Strom ständig doppelt wandeln – erhöhen die Stromrechnung; dazu kommen Wartung und Selbsttests.
- **regelmäßig:** Akkus altern und müssen nach einigen Jahren getauscht werden.
Dem steht gegenüber, was ein ungeschützter Stromausfall kostet: abgebrochene Schreibvorgänge und beschädigte Datenbanken, defekte Netzteile, Ausfallzeit und Aufwand für die Wiederherstellung.
Beurteilt wird wie bei jeder Investition: erwarteter Schaden ohne USV gegen Gesamtkosten über die Nutzungsdauer.
Beispiel: Für einen Datenbankserver, dessen Ausfall die ganze Firma stoppt, lohnt sich die USV fast immer; für einen Test-PC meist nicht.

## Lehrnotiz: Stromversorgung absichern: USV-Klassen, Leistung und Überbrückungszeit

**Aufteilung:**
- USV-Klassen nach Schutzwirkung und Einsatz: K1
- Trägt die USV die Last (VA und W): K2
- Wie lange hält sie durch: K3
- Lohnt sie sich: K4

**Schon geprüft:** Noch nicht geprüft: K1–K4

**Kerngedanken:**
- Alle drei Klassen überbrücken einen Stromausfall. Sie unterscheiden sich in der Umschaltzeit und im Schutz vor Netzstörungen. Die Namen sagen es: abhängig vom Netz (VFD), unabhängig von der Spannung (VI), unabhängig von Spannung und Frequenz (VFI).
- In der Leistungsprüfung wird die Wirkleistung der USV mit der Summe der Geräte verglichen. In der Zeitrechnung steht dagegen die Last der Geräte im Nenner, nicht die Leistung der USV.
- Wirtschaftlich rechnen heißt zwei Summen über die Nutzungsdauer bilden. Die Gesamtkosten sind Anschaffung plus laufende Kosten je Jahr mal Jahre plus Akkutausch. Der erwartete Schaden ist Schaden je Ausfall mal Ausfälle je Jahr mal Jahre. Am Ende steht eine Entscheidung für diesen Fall.
- Wozu eine USV grundsätzlich dient und wie Netzteile an getrennte Stromkreise kommen, gehört zum Nachbarstichpunkt über USV, Redundanz und RAID.

**Typische Missverständnisse:**
- Viele denken, die teure Online-USV halte länger durch; richtig ist: Die Laufzeit hängt an den Akkus. Der Aufpreis bezahlt, dass die Last ständig über die USV läuft, ohne Umschaltzeit und geschützt vor Schwankungen.
- Viele denken, man müsse durch Leistungsfaktor oder Wirkungsgrad teilen; richtig ist: Von VA zu W und beim Wirkungsgrad wird multipliziert, das Ergebnis wird kleiner.

**Fachwörter:**
- VFD: Offline-USV, schaltet erst bei Ausfall um
- VI: netzinteraktiv, regelt anhaltende Spannungsabweichung aus
- VFI: Online-USV, Doppelwandler ohne Umschaltzeit
- Scheinleistung: Angabe der USV in VA
- Wirkleistung: tatsächlich nutzbare Leistung in W
- Leistungsfaktor: cos φ, Anteil der Wirkleistung an der Scheinleistung
- Überbrückungszeit: Laufzeit allein aus den Akkus
- Wirkungsgrad: Anteil der Energie nach Verlusten

**So fragt die IHK:**
- In den ausgewerteten Prüfungen kamen USV-Klassen, Wirkleistung und Überbrückungszeit bisher nicht vor; der Stoff stammt aus dem Lehrbuch. Belegt ist nur der Stil des Themenfelds Betrieb (je 4 Punkte für zwei beschriebene Schwachstellen bzw. Anforderungen).
- Zu erwarten sind „Beurteilen Sie, welche USV-Klasse … geeignet ist“ (2–4 Punkte) und „Berechnen Sie die Wirkleistung und prüfen Sie, ob die USV die Last trägt“ bzw. „Berechnen Sie die Überbrückungszeit“ (je 2–3 Punkte).
- Bei den Rechnungen zählen Formel, Werte mit Einheiten, Ergebnis und Folgerung; Folgefehler werden nur einmal abgezogen.
- Dazu kommt „Beurteilen Sie den Einsatz einer USV wirtschaftlich“ (3–4 Punkte, Entscheidung mit Begründung am Fall).

**Fallen:**
- „Online, weil besser“ schreiben. Verlangt sind Klasse, Einsatz und das Merkmal, das dazu passt.
- Einen Hinweis auf länger anhaltende Unter- oder Überspannung in der Lage überlesen; dann reicht VFD nicht, nötig ist mindestens VI.
- Beim Weg von VA zu W durch den Leistungsfaktor teilen statt zu multiplizieren. Prüfstein: Die Watt-Zahl ist nie größer als die VA-Zahl. Wird umgekehrt zu einer Last die nötige VA-Zahl gesucht, wird geteilt.
- Nach der Rechnung die Folgerung weglassen (trägt die Last oder trägt sie nicht, reicht die Zeit oder nicht).
- Bei der Energie nur einen Akku rechnen statt Anzahl × Spannung × Kapazität.
- Den Wirkungsgrad vergessen.
- Bei der Überbrückungszeit mit der VA-Angabe oder der Wirkleistung der USV rechnen statt mit der Last der Geräte.
- Stunden nicht in Minuten umrechnen, bevor mit der Zeit für das Herunterfahren verglichen wird.
- Ohne Spielraum urteilen, obwohl das Ergebnis nur ein Richtwert ist.
- Bei der Wirtschaftlichkeit nur den Kaufpreis gegen den Schaden stellen und die laufenden Kosten weglassen.
- Als Nutzen nur „Strom bleibt da“ nennen statt Schutz vor Datenverlust, Hardwareschäden und Ausfallzeit.
- „Ist teuer“ oder „ist wichtig“ ohne Abwägung schreiben.
