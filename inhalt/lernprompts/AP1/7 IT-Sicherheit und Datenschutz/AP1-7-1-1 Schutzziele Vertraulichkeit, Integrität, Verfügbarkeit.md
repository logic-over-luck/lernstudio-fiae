Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz › Schutzziele und Organisation › Schutzziele: Vertraulichkeit, Integrität, Verfügbarkeit

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

## Stoff: Schutzziele: Vertraulichkeit, Integrität, Verfügbarkeit

Ziel: Die Schutzziele erklären und Vorfällen und Maßnahmen begründet zuordnen.

Das muss ich können:

### K1 – Vertraulichkeit, Integrität und Verfügbarkeit (Stufe 2 Verstehen)
Du kannst Vertraulichkeit, Integrität und Verfügbarkeit erklären.

Erklärung:
- **Vertraulichkeit:** Nur Befugte können die Informationen einsehen. Verletzt, wenn jemand ohne Berechtigung die Gehaltsliste liest.
- **Integrität:** Daten sind vollständig und unverändert, nur Befugte dürfen sie ändern, unerlaubte Änderungen sind erkennbar. Verletzt, wenn ein Angreifer die Bankverbindung in einer Rechnung austauscht.
- **Verfügbarkeit:** Daten und Systeme stehen bereit, wenn sie gebraucht werden. Verletzt, wenn der Server wegen eines Festplattendefekts ausfällt.

### K2 – Betroffenes Schutzziel bei einem Vorfall (Stufe 2 Verstehen)
Du kannst einem beschriebenen Vorfall oder einer Begründung das betroffene Schutzziel zuordnen.

Erklärung:
Frag, was passiert ist:
- Jemand hat etwas **gesehen**, das er nicht sehen durfte → **Vertraulichkeit**.
- Etwas wurde **verändert** oder ist **falsch** → **Integrität**.
- Etwas ist **nicht erreichbar** oder **weg** → **Verfügbarkeit**.
Beispiel: „Der Webshop war wegen eines Angriffs zwei Tage offline“ → Verfügbarkeit.

### K5 – Sicherheitsmaßnahmen und ihr Schutzziel (Stufe 4 Beurteilen)
Du kannst Sicherheitsmaßnahmen den Schutzzielen zuordnen und die Zuordnung begründen, zum Beispiel Verschlüsselung für Vertraulichkeit, Hashwert für Integrität, Datensicherung für Verfügbarkeit, zentrale Bearbeitung auf dem Server für Integrität.

Erklärung:
Frag: Wogegen schützt die Maßnahme?
- **Verschlüsselung** → **Vertraulichkeit**: ohne Schlüssel ist nichts lesbar.
- **Sichere Passwörter** → **Vertraulichkeit**: Fremde kommen nicht an Konten und Daten.
- **Hashwert** (Prüfwert, der aus der Datei berechnet wird) → **Integrität**: jede Veränderung fällt auf.
- **Datensicherung** → **Verfügbarkeit**: nach einem Verlust lässt sich alles wiederherstellen.
- **Zentrale Bearbeitung auf dem Server** statt Kopien per Mail → **Integrität**: Es gibt nur einen gültigen Stand, Änderungen sind nachvollziehbar.
Begründe immer mit der Wirkung, nicht nur mit dem Stichwort.

### K6 – Schutzziele bei verschlüsselten Daten (Stufe 2 Verstehen)
Du kannst beschreiben, was Vertraulichkeit und Integrität für verschlüsselte Daten bedeuten: Nur Berechtigte können sie lesen; Veränderungen werden bemerkt.

Erklärung:
- **Vertraulichkeit:** Nur wer den Schlüssel hat, kann die Daten lesen – für alle anderen sind sie Zeichensalat.
- **Integrität:** Veränderungen an den Daten werden bemerkt, z. B. über einen mitgeschickten Prüfwert.

## Lehrnotiz: Schutzziele: Vertraulichkeit, Integrität, Verfügbarkeit

**Aufteilung:**
- Die drei Schutzziele: K1
- Vorfall oder Begründung zuordnen: K2
- Maßnahmen zuordnen und begründen: K5
- Verschlüsselte Daten, zwei Ziele zugleich: K6

**Schon geprüft:** In Prüfungen: K5 (2021H, 2025F), K6 (2023H) · Noch nicht geprüft: K1, K2

**Kerngedanken:**
- Eine Maßnahme deckt meist nur ein Schutzziel ab. Eine Datensicherung hilft nicht gegen Mitlesen (sie ist selbst eine Kopie, die Schutz braucht) und sichert falsche Daten einfach mit. Wer eine Maßnahme beurteilt, geht deshalb alle drei Ziele einzeln durch und sagt, welches offen bleibt und was es ergänzt.
- Ein Hashwert ist eine Art Fingerabdruck einer Datei: Ändert sich nur ein Zeichen, ändert sich der Hashwert. Stimmt der selbst berechnete Wert mit dem angegebenen überein, ist die Datei unverändert. Das gilt nur, wenn der angegebene Wert aus sicherer Quelle stammt – wer Datei und Wert zusammen austauschen kann, liefert einen passenden Wert mit.
- Auch eine Begründung nennt ein Schutzziel: „damit niemand mitliest“ Vertraulichkeit, „damit es bei einem Ausfall weiterläuft“ Verfügbarkeit.
- Integrität bei verschlüsselten Daten heißt: Eine Veränderung wird bemerkt. Es heißt nicht, dass eine Veränderung unmöglich ist.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K6 – Verschlüsseln und Veränderung per schlüsselabhängigem Prüfwert erkennen: (1) Beim Verschlüsseln wandelt das Verfahren den Klartext mit dem Schlüssel in Geheimtext um; ohne den passenden Schlüssel lässt sich der Klartext nicht zurückgewinnen. (2) Zusätzlich berechnet das Verfahren aus dem Geheimtext und dem geheimen Schlüssel einen Prüfwert. (3) Geheimtext und Prüfwert werden zusammen gespeichert oder übertragen. (4) Vor dem Entschlüsseln berechnet der Berechtigte mit seinem Schlüssel den Prüfwert aus dem vorliegenden Geheimtext neu und vergleicht ihn mit dem mitgelieferten Wert. (5) Stimmen beide Werte überein, gelten die Daten als unverändert und werden entschlüsselt; weichen sie ab, ist die Veränderung erkannt und die Daten werden verworfen. (6) Ein Angreifer ohne Schlüssel kann den Geheimtext zwar verändern, aber keinen dazu passenden Prüfwert berechnen. Vereinfacht: Der schlüsselabhängige Prüfwert heißt in der Praxis Authentifizierungscode (MAC); reine Verschlüsselung ohne diesen Zusatz erkennt Veränderungen nicht zuverlässig.

**Typische Missverständnisse:**
- Viele denken, ein Erpressungstrojaner verletze durch das Verschlüsseln die Vertraulichkeit. Richtig ist: Die Berechtigten kommen nicht mehr an ihre Daten, verletzt ist dadurch die Verfügbarkeit. Kopieren die Täter die Daten vorher ab, ist zusätzlich die Vertraulichkeit verletzt.
- Viele denken, Integrität sei nur bei absichtlicher Manipulation verletzt. Richtig ist: Auch versehentlich falsche oder unvollständige Daten verletzen sie.

**Fachwörter:**
- Vertraulichkeit: nur Befugte können Informationen einsehen
- Integrität: Daten vollständig, unverändert, Änderungen erkennbar
- Verfügbarkeit: Daten und Systeme stehen bereit
- Hashwert: Prüfwert, zeigt jede Veränderung an

**So fragt die IHK:**
- Meist in einer Kundensituation mit Datenschutzauftrag (Arztpraxis, Kanzlei, Telearbeitsplatz).
- Zuordnungstabelle, 6 Punkte: vier bis fünf Sicherheitsmaßnahmen (darunter sichere Passwörter und Hashwertprüfung bei einer Softwareinstallation), je Zeile ein Kreuz bei einem Schutzziel und eine Begründung; eine Zeile ist als Beispiel vorgegeben. Je 0,5 Punkte für das Kreuz, 1 Punkt für die Begründung. Andere Zuordnungen mit sinnvoller Begründung zählen.
- „Beschreiben“, 4 Punkte: was Vertraulichkeit und Integrität für verschlüsselte Daten auf einem Datenträger bedeuten. Gezählt wird: Nur Berechtigte können die Daten einsehen; eine Veränderung wird bemerkt.
- „Nennen“, 1 Punkt: welches Schutzziel die beschriebene Verwendung von Schlüsseln bei E-Mails erreicht (Vertraulichkeit).
- Gelegentlich dazu eine Frage zum Zweck des Hashwerts beim Software-Download; die Lösung nennt „Integrität“.
- 2026H, 4 Punkte, „ergänzen“: Schutzbedarfstabelle für zwei Anwendungen mit Kategorie und Begründung; in vier Zeilen fehlt das Schutzziel. Es ergibt sich aus der Begründung: personenbezogene Daten → Vertraulichkeit; Daten für die Auftragsabwicklung wichtig → Verfügbarkeit; Fehler im Angebot → Integrität.

**Fallen:**
- Nur die Begriffe aufsagen, ohne Bezug zur beschriebenen Lage.
- Sichere Passwörter ohne Begründung der Integrität zuordnen: Üblich ist Vertraulichkeit (nur Befugte kommen an die Daten); Integrität geht nur mit passender Begründung (Unbefugte können nichts ändern).
- Verschlüsselung von sich aus beiden Zielen zuordnen: Die Standardzuordnung bleibt Vertraulichkeit. Integrität kommt nur dazu, wenn die Aufgabe ausdrücklich sagt, dass das Verfahren beide Ziele unterstützt.
- Sind Vertraulichkeit und Integrität gefragt, nur zu einem Ziel etwas schreiben.
- Integrität bei verschlüsselten Daten als Verfügbarkeit beschreiben („die Daten sind noch da“).
