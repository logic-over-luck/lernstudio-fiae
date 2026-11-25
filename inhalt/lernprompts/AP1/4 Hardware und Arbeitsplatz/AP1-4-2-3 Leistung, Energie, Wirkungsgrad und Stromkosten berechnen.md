Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Hardware und Arbeitsplatz › Kenngrößen berechnen › Leistung, Energie, Wirkungsgrad und Stromkosten berechnen

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

## Stoff: Leistung, Energie, Wirkungsgrad und Stromkosten berechnen

Ziel: Mit P = U · I und W = P · t rechnen, ein Netzteil wählen, Stromkosten berechnen und Überlastungen nachweisen.

Das muss ich können:

### K1 – Leistung mit P = U · I (Stufe 3 Anwenden)
Du kannst mit P = U · I jede der drei Größen berechnen (Leistung in Watt = Spannung in Volt mal Stromstärke in Ampere).

Erklärung:
`P = U · I` – **Leistung P** (Watt) = **Spannung U** (Volt) × **Stromstärke I** (Ampere)
Umgestellt:
- `I = P ÷ U`
- `U = P ÷ I`
Beispiel: 230 V × 0,5 A = **115 W**. Ein 60-W-Gerät an 230 V zieht 60 ÷ 230 ≈ **0,26 A**.

### K2 – Netzteil aus summierter Leistungsaufnahme (Stufe 4 Beurteilen)
Du kannst die Leistungsaufnahme mehrerer Komponenten summieren, einen Zuschlag einrechnen und ein passendes Netzteil auswählen.

Erklärung:
- Leistungsaufnahme aller Komponenten **addieren** (CPU, Grafikkarte, Mainboard, Laufwerke …).
- Einen **Zuschlag** als Reserve einrechnen – für Lastspitzen und spätere Erweiterungen, z. B. 30 %.
- Das **kleinste Netzteil** wählen, das diesen Wert erreicht.
Beispiel: Summe 400 W × 1,3 = 520 W → Netzteil mit **550 W** (nicht 500 W – das reicht nicht).

### K3 – Energie W = P · t in kWh (Stufe 3 Anwenden)
Du kannst die Energie aus Leistung und Zeit berechnen (W = P · t) und in kWh angeben.

Erklärung:
`W = P · t` – Energie = Leistung × Zeit
Mit P in **kW** und t in **h** kommt **kWh** heraus.
Beispiel: 500 W = 0,5 kW, 4 Stunden → 0,5 kW × 4 h = **2 kWh**.
Achtung: In der Formel steht W für Energie, als Einheit steht W für Watt.

### K4 – Wirkungsgrad und aufgenommene Leistung (Stufe 3 Anwenden)
Du kannst den Wirkungsgrad berücksichtigen: Die aufgenommene Leistung ist die abgegebene Leistung geteilt durch den Wirkungsgrad.

Erklärung:
Kein Netzteil arbeitet verlustfrei – ein Teil wird zu Wärme.
- `Wirkungsgrad η = abgegebene Leistung ÷ aufgenommene Leistung` (immer kleiner als 1)
- `aufgenommene Leistung = abgegebene Leistung ÷ η`
Beispiel: Die Komponenten brauchen 400 W, das Netzteil hat 80 % Wirkungsgrad → aus der Steckdose kommen 400 W ÷ 0,8 = **500 W**.
Für die Stromkosten zählt die **aufgenommene Leistung**.

### K5 – Stromkosten aus Energie und kWh-Preis (Stufe 3 Anwenden)
Du kannst Stromkosten aus Energie und Preis je kWh berechnen, auch bei nur teilweiser Auslastung.

Erklärung:
`Stromkosten = Energie in kWh × Preis je kWh`
Bei teilweiser Auslastung rechnest du mit der durchschnittlich genutzten Leistung.
Beispiel: Ein Server mit 400 W läuft das ganze Jahr bei 50 % Auslastung, 0,30 € je kWh:
- 400 W × 0,5 = 0,2 kW
- 0,2 kW × 8.760 h (365 × 24) = 1.752 kWh
- 1.752 kWh × 0,30 € = **525,60 €**
Ist ein Netzteil mit Auslastung und Wirkungsgrad gegeben, ist seine Wattzahl die höchstens **abgegebene** Leistung: 500 W × 0,6 ÷ 0,8 = 375 W aufgenommen – damit rechnest du Energie und Kosten.

### K6 – Überlastete Mehrfachsteckdose nachweisen (Stufe 3 Anwenden)
Du kannst rechnerisch nachweisen, dass Geräte eine Mehrfachsteckdose überlasten: zulässige Leistung (z. B. 16 A · 230 V = 3.680 W) mit der Summe der Leistungsaufnahmen vergleichen.

Erklärung:
- Zulässige Leistung der Steckdose: `P = I × U`, z. B. 16 A × 230 V = **3.680 W**.
- Leistungsaufnahmen aller angeschlossenen Geräte addieren.
- Vergleichen: Ist die Summe größer, ist die Steckdose überlastet.
Beispiel: zwei Laserdrucker je 1.100 W + PC 500 W + Heizlüfter 1.000 W = 3.700 W > 3.680 W → **überlastet**.

### K7 – Störungen durch zu schwachen USB-Anschluss (Stufe 4 Beurteilen)
Du kannst begründen, warum ein Gerät an einem USB-Anschluss gestört arbeiten kann: Die benötigte Stromstärke (I = P / U) übersteigt, was der Anschluss liefert.

Erklärung:
Ein USB-Anschluss liefert nur eine begrenzte Stromstärke (USB 2.0 z. B. 0,5 A bei 5 V).
- Benötigte Stromstärke berechnen: `I = P ÷ U`
- mit dem Maximum des Anschlusses vergleichen
Beispiel: Eine externe Festplatte braucht 4,5 W → 4,5 W ÷ 5 V = 0,9 A > 0,5 A. Der Anschluss liefert zu wenig, die Platte läuft gestört oder gar nicht.
Abhilfe: ein Anschluss, der mehr Strom liefert (z. B. USB 3.x mit bis zu 0,9 A oder USB-C mit Power Delivery), oder ein eigenes Netzteil.

### K8 – Gesamtwirkungsgrad mehrerer Stufen (Stufe 3 Anwenden)
Du kannst den Gesamtwirkungsgrad hintereinandergeschalteter Stufen berechnen: Die Einzelwirkungsgrade werden multipliziert (z. B. 0,9 · 0,9 = 0,81), und aus dem Gesamtwirkungsgrad ergibt sich die aufgenommene Leistung.

Erklärung:
Jede Stufe gibt nur einen Teil der Leistung weiter. Hintereinander geschaltet gehen die Verluste **nacheinander** ab – deshalb wird multipliziert, nicht addiert.
`η_gesamt = η₁ · η₂`
Beispiel USV mit Gleichrichter (90 %) und Wechselrichter (90 %): η = 0,9 · 0,9 = 0,81.
Brauchen die Server 810 W, nimmt die USV auf: `P_auf = 810 W / 0,81 = 1.000 W` – 190 W werden zu Wärme.

## Lehrnotiz: Leistung, Energie, Wirkungsgrad und Stromkosten berechnen

**Aufteilung:**
- Grundformel P = U · I: K1
- Die Formel anwenden: Mehrfachsteckdose K6, USB-Anschluss K7
- Netzteil auswählen: K2
- Pause möglich nach dem Netzteil.
- Wirkungsgrad, eine und mehrere Stufen: K4, K8
- Energie und Stromkosten: K3, K5

**Schon geprüft:** In Prüfungen: K1 (2025H, 2026F), K2 (2024F), K3 (2021H, 2024F), K4 (2021H, 2024F), K5 (2024F), K6 (2021H), K7 (2025H) · Noch nicht geprüft: K8

**Kerngedanken:**
- Die Wattzahl eines PC-Netzteils ist die Leistung, die es höchstens abgibt. In der Kostenaufgabe der IHK wird daraus eine Kette: Netzteilleistung mal Auslastung ergibt die abgegebene Leistung, geteilt durch den Wirkungsgrad die aufgenommene, mal Stunden die Energie, mal Preis die Kosten.
- Probe für den Wirkungsgrad: Aus der Steckdose muss mehr kommen, als die Geräte brauchen. Ist das Ergebnis kleiner, wurde multipliziert statt geteilt.
- Verglichen werden nur gleiche Größen: Watt mit Watt oder Ampere mit Ampere. Steht an Steckdose oder USB-Anschluss eine Stromstärke und am Gerät eine Leistung, wird erst mit P = U · I umgerechnet.
- Nennt die Aufgabe keinen Wirkungsgrad, wird keiner eingerechnet.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K7 – Von zu wenig Strom am USB-Anschluss zur Störung: (1) Ein Gerät ohne eigenes Netzteil bezieht seine gesamte Betriebsleistung über die 5-V-Versorgungsleitung des USB-Anschlusses, der nur eine begrenzte Stromstärke liefert. (2) Braucht das Gerät mehr Leistung, müsste nach I = P ÷ U eine höhere Stromstärke fließen, als der Anschluss liefern kann. (3) Der Anschluss kann diesen Strom nicht liefern: Die Spannung am Gerät sinkt unter den Wert, den es mindestens braucht, oder der Überstromschutz schaltet den Anschluss ab. (4) Mit zu niedriger Spannung läuft der Motor einer Festplatte nicht richtig an, oder die Elektronik des Geräts startet immer wieder neu. (5) Der PC verliert dadurch die Verbindung zum Gerät, es meldet sich ab und wieder an, und Datenübertragungen brechen ab. (6) Hängen mehrere Geräte an einem Hub ohne eigenes Netzteil, teilen sie sich die Stromstärke eines einzigen Anschlusses, und die Grenze ist früher erreicht.

**Typische Missverständnisse:**
- Viele denken, Watt und Kilowattstunde seien zwei Maße für dasselbe. Richtig ist: Watt sagt, wie viel ein Gerät in jedem Augenblick braucht; Kilowattstunden sind die Menge über die Zeit, und nur die wird bezahlt.
- Viele denken, bei 90 % Wirkungsgrad nehme das Netzteil 90 % der benötigten Leistung auf. Richtig ist: Es nimmt mehr auf, als es abgibt.

**Fachwörter:**
- Energie: Leistung mal Zeit, in kWh
- Wirkungsgrad: abgegebene durch aufgenommene Leistung
- Zuschlag: Reserve für Lastspitzen und Erweiterungen
- Auslastung: genutzter Anteil der vollen Leistung

**So fragt die IHK:**
- Netzteil auswählen: Tabelle mit Leistung je Stück und Anzahl, Puffer von 10 % oder ähnlich, Netzteile in 50-W-Schritten; „Berechnen Sie … und benennen Sie das ausgewählte Netzteil“, 4 Punkte (3 für die Summe mit Puffer, 1 für die Wahl).
- Stromkosten: Folgeaufgabe mit Ersatzwert, 3 Punkte: Arbeitstage mal Stunden mal (Netzteil in kW durch Wirkungsgrad) mal Auslastung mal Preis je kWh. In einer anderen Aufgabe zwei PCs mit verschiedenen Wirkungsgraden, Tabelle teils vorgegeben, die Definition „Efficiency = output/input“ stand englisch daneben; Energiekosten je Monat „errechnen“ (6 Punkte), danach Amortisation des teureren Netzteils in Monaten.
- Mehrfachsteckdose: Geräteliste mit maximaler Leistungsaufnahme und „maximal 16 A“; „Weisen Sie durch eine Rechnung nach, dass …“, 4 Punkte.
- P = U · I (K1), Formel jeweils angegeben: 2025H ein Gerät mit Netzteil 24 V/0,5 A, das auch über einen USB-Port mit 5 V laufen kann – „ermitteln“, welcher Strom dort für dieselbe Leistung nötig wäre (2 Punkte: erst die Leistung, dann durch 5 V). 2026F die maximale Stromstärke in mA für eine Kamera mit 24 W an 48 V über PoE (mit der Wahl des PoE-Standards 4 Punkte).
- USB-Störung (K7, 2025H), 3 Punkte, „begründen“: Am selben PC hängen weitere USB-Geräte; verlangt ist der Zusammenhang zwischen den Störungen und der Stromversorgung über den USB-Port. Lösungshinweise liegen nicht vor.

**Fallen:**
- Beim Umstellen der Formel falsch herum teilen (U durch P).
- Milliampere nicht in Ampere umrechnen, bevor gerechnet oder verglichen wird.
- Komponenten, die mehrfach vorhanden sind, nur einmal zählen – die typische Stolperstelle der Netzteil-Aufgabe.
- Mehrfachsteckdose: mit 16 A rechnen, obwohl auf der Leiste ein anderer Wert steht, oder die Folgerung weglassen.
- USB: mit 230 V statt mit der Spannung des Anschlusses rechnen.
- USB: nur „Anschluss defekt“ sagen ohne Rechnung, oder Vergleich und Abhilfe weglassen.
- Netzteil: Liegt der Wert mit Zuschlag knapp über einer Netzteilgröße, reicht sie trotzdem nicht.
- Kosten: Watt nicht in Kilowatt umrechnen oder die Auslastung weglassen.
- Wirkungsgrad: die Verlustleistung (aufgenommen minus abgegeben) nicht angeben, wenn sie verlangt ist.
- Mehrere Stufen: die Wirkungsgrade mitteln.
