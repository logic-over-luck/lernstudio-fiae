Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Verfügbarkeit und Betriebssicherheit › Verfügbarkeit von Anwendungsdiensten beurteilen

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

## Stoff: Verfügbarkeit von Anwendungsdiensten beurteilen

Ziel: Verfügbarkeit erklären und berechnen und die Verfügbarkeitsanforderungen von Echtzeitkommunikation, Mail-, Web-, Groupware- und Datenbankdiensten beurteilen.

Das muss ich können:

### K1 – Verfügbarkeit: Definition und Berechnung (Stufe 3 Anwenden)
Du kannst Verfügbarkeit als Anteil der Betriebszeit an der Gesamtzeit erklären und berechnen, zum Beispiel entsprechen 99,9 % im Jahr knapp 9 Stunden Ausfall.

Erklärung:
**Verfügbarkeit** = Betriebszeit ÷ Gesamtzeit.
Beispiel 99,9 % im Jahr: 365 × 24 h = 8760 h; 0,1 % davon = **8,76 h** Ausfall erlaubt.
- 99 % → ca. 3,65 Tage
- 99,99 % → ca. 53 Minuten

### K2 – Verfügbarkeitsbedarf je Dienst: Mail, Web, Datenbank (Stufe 4 Beurteilen)
Du kannst die Verfügbarkeitsanforderungen von Anwendungsdiensten beurteilen: Echtzeitkommunikation (Ausfall sofort spürbar), Mailserver (kurze Ausfälle durch Zwischenspeicherung beim Absender überbrückbar), Webserver (Kunden und Umsatz), Groupware (Zusammenarbeit), Datenbanken (alle abhängigen Anwendungen stehen still).

Erklärung:
Wie schwer ein Ausfall wiegt, hängt ab von: Zahl der abhängigen Nutzer und Abläufe, ob sich die Arbeit verschieben oder nachholen lässt, Folgeschäden (Umsatz, Image, Datenverlust) und Dauer des Ausfalls.
Wie wichtig ist Verfügbarkeit je Dienst?
- **Echtzeitkommunikation** (Telefonie, Video): Ausfall **sofort** spürbar
- **Mailserver:** kurze Ausfälle überbrückbar, Absender **speichert zwischen** und sendet erneut
- **Webserver:** Kunden und **Umsatz** gehen verloren
- **Groupware:** Zusammenarbeit stockt
- **Datenbanken:** **alle abhängigen Anwendungen** stehen still

### K3 – Angemessene Verfügbarkeit und nötige Maßnahmen (Stufe 4 Beurteilen)
Du kannst für einen Dienst eine angemessene Verfügbarkeit festlegen und begründen, welche Maßnahmen dafür nötig sind.

Erklärung:
Vorgehen:
- Folgen eines Ausfalls für **diesen** Dienst einschätzen
- **Zielwert** festlegen (z. B. 99,9 %)
- **Maßnahmen** begründen: USV (Strom bei Netzausfall), Redundanz (wichtige Teile doppelt), Cluster (mehrere Server springen füreinander ein), zweite Leitung, Wartungsfenster außerhalb der Geschäftszeit
Je höher die Verfügbarkeit, desto teurer – nur so viel wie nötig.
In einer Anforderungsliste ist die Verfügbarkeit eine **nicht funktionale** Anforderung – wie Performance, Speicherkapazität oder Stabilität der Dienste. **Funktional** ist dagegen, was die Infrastruktur leisten soll, z. B. Standard-Office-Dienste bereitstellen oder Daten zwischen Standorten sicher per VPN übertragen.

### K4 – Verfügbarkeitszusagen: Neunen und Wartungsfenster (Stufe 4 Beurteilen)
Du kannst eine Verfügbarkeitszusage beurteilen: Jede weitere Neun (etwa 99,99 % statt 99,9 %) erlaubt nur noch ein Zehntel der Ausfallzeit und verlangt deutlich mehr Aufwand für Redundanz, Überwachung und Bereitschaft; außerdem achtest du darauf, ob geplante Wartungsfenster für Updates mitgezählt oder aus der Berechnung ausgenommen sind.

Erklärung:
Verfügbarkeit wird oft in „Neunen“ angegeben. Jede zusätzliche Neun teilt die erlaubte Ausfallzeit durch zehn:
- 99,9 % → knapp 9 Stunden im Jahr
- 99,99 % → knapp 53 Minuten
- 99,999 % → gut 5 Minuten
Die letzten Neunen sind am teuersten: doppelte Hardware, zweites Rechenzentrum, Überwachung rund um die Uhr, Bereitschaftsdienst.
Beim Lesen eines SLA (Service Level Agreement: Vertrag über die zugesagte Dienstgüte) zählt auch das Kleingedruckte: Sind **geplante Wartungsfenster** (Updates, Upgrades) ausgenommen, kann der Dienst trotz hoher Prozentzahl deutlich länger nicht erreichbar sein.
Beispiel: Ein Hoster sagt 99,95 % zu, nimmt aber jeden Sonntag 2 Stunden Wartung aus – das sind über 100 Stunden im Jahr zusätzlich.

## Lehrnotiz: Verfügbarkeit von Anwendungsdiensten beurteilen

**Aufteilung:**
- Verfügbarkeit berechnen: K1
- Wie dringend ist welcher Dienst: K2
- Eine Zusage prüfen (Neunen, Wartungsfenster): K4
- Zielwert festlegen, Maßnahmen begründen, funktional oder nicht funktional: K3

**Schon geprüft:** In Prüfungen: K3 (2022W) · Noch nicht geprüft: K1, K2, K4

**Kerngedanken:**
- Gesamtzeit = Betriebszeit + Ausfallzeit. Aufgaben nennen meist die Ausfallzeit; die Betriebszeit muss man erst ausrechnen.
- Um einen Dienst zu beurteilen, helfen zwei Fragen: Was hängt alles an ihm (fällt die Datenbank aus, ist auch ein Webshop, der seine Daten daraus holt, nutzlos)? Ist die Arbeit während des Ausfalls verloren (ein Telefongespräch) oder kommt sie später an (eine Mail)?
- Bei der Datenbank droht zusätzlich Datenverlust oder ein widersprüchlicher Datenbestand. Beim Webserver ist der Ausfall öffentlich sichtbar und schadet dem Image.

**Typische Missverständnisse:**
- Viele denken, Ausfallzeit ÷ Gesamtzeit sei die Verfügbarkeit; richtig ist: Das ist der Ausfallanteil, die Verfügbarkeit ist der Rest bis 100 %.
- Viele denken, die Zusage mit der höheren Prozentzahl sei automatisch die bessere; richtig ist: Erst die Ausfallzeiten samt ausgenommener Wartung ausrechnen, dann den Zeitpunkt der Wartung gegen die Nutzungszeit halten und den Preis abwägen.

**Fachwörter:**
- Verfügbarkeit: Anteil der Betriebszeit an der Gesamtzeit
- SLA: Vertrag über die zugesagte Dienstgüte
- Wartungsfenster: geplante Zeit für Updates
- nicht funktional: Eigenschaft, wie gut das System arbeitet
- Echtzeitkommunikation: Telefonie und Video, nicht nachholbar
- Cluster: Verbund von Servern, die sich vertreten
- USV: unterbrechungsfreie Stromversorgung, überbrückt Stromausfälle

**So fragt die IHK:**
- Belegt ist eine Aufgabe mit zwei passenden Teilaufgaben (je 4 Punkte, „beschreiben“, je zwei Dinge à 2 Punkte). Ausgangslage waren häufige Ausfälle von Diensten wegen veralteter, uneinheitlicher Infrastruktur.
- Zuerst waren Schwachstellen gefragt (das gehört zum Nachbarstichpunkt Ausfallrisiken), dann je eine funktionale und eine nicht funktionale Anforderung. Die Anforderungen stehen nicht im Aufgabentext; man muss sie aus dem Wissen zur Sache selbst finden. „Beschreiben“ verlangt einen Satz zum Fall, kein Stichwort.
- Eine Rechnung zur Verfügbarkeit oder eine Beurteilung einzelner Dienste wurde bisher nicht gestellt; der Katalog nennt die fünf Dienste aber ausdrücklich. Zu erwarten sind: Verfügbarkeit aus Ausfallstunden berechnen (2–3 Punkte, mit Rechenweg), Dienste beurteilen (je 2 Punkte), ein SLA bewerten.
- Ohne fallbezogenes „weil …“ gibt es höchstens die Hälfte der Punkte.

**Fallen:**
- Die Gesamtzeit nicht aus dem Zeitraum der Aufgabe nehmen (Woche, Monat, Jahr) oder bei einem Dienst rund um die Uhr nicht mit 24 Stunden je Tag rechnen.
- Mehrere Ausfälle nicht erst zusammenzählen.
- Den Rechenweg weglassen oder das Ergebnis nicht mit dem Zielwert vergleichen, obwohl das gefragt ist.
- „Alles ist wichtig“ oder „ist wichtiger“ schreiben; eine Beurteilung braucht je Dienst das passende Argument.
- Den Mailserver überschätzen und das Zwischenspeichern beim Absender nicht nennen.
- Bei ausgenommener Wartung die Stunden nicht auf das Jahr hochrechnen (Wochen × Stunden).
- Maßnahmen nur aufzählen; jede braucht ein „damit …“, und sie muss mit der Verfügbarkeit zu tun haben.
- Einen Zielwert ohne Begründung über die Folgen eines Ausfalls nennen oder den höchsten Wert ohne Kostenabwägung wählen.
