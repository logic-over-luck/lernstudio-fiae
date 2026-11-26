Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Betrieb, Verfügbarkeit und Cloud › Verfügbarkeit und Betriebssicherheit › Verfügbarkeit von Anwendungsdiensten beurteilen

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

**Hinweis aus dem Lernplan:** Betreiben von IT-Systemen ist im AP2-Katalog gemeinsamer Inhalt aller Fachinformatiker. Verfügbarkeit als nichtfunktionale Anforderung steht in PB1-1.

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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K2 – SMTP-Zustellung bei Ausfall des Empfängerservers: (1) Der sendende Mailserver ermittelt über den MX-Eintrag im DNS den Mailserver des Empfängers und versucht, per SMTP eine Verbindung aufzubauen. (2) Ist der Empfängerserver nicht erreichbar, verwirft der sendende Server die Mail nicht, sondern legt sie in seine Warteschlange (Queue). (3) Der sendende Server wiederholt den Zustellversuch automatisch in größer werdenden Abständen. (4) Ist der Empfängerserver wieder erreichbar, nimmt er die Mail an, und der sendende Server löscht sie aus seiner Warteschlange. (5) Bleibt der Empfängerserver länger aus als die eingestellte Höchstdauer, meist einige Tage, gibt der sendende Server auf und schickt dem Verfasser eine Unzustellbarkeitsmeldung.

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
