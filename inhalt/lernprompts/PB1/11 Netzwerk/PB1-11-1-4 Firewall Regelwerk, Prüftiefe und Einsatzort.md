Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Schichten, Komponenten, Protokolle und Dienste › Firewall: Regelwerk, Prüftiefe und Einsatzort

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

## Stoff: Firewall: Regelwerk, Prüftiefe und Einsatzort

Ziel: Beschreiben, wie eine Firewall ihr Regelwerk abarbeitet, Firewalls nach Prüftiefe bis zur Next-Generation-Firewall mit IDS und IPS unterscheiden und Personal Firewall und zentrale Netzwerk-Firewall abgrenzen.

Das muss ich können:

### K1 – Firewall-Regelwerk: Reihenfolge, ACCEPT, DROP, REJECT (Stufe 2 Verstehen)
Du kannst beschreiben, wie eine Firewall ihr Regelwerk abarbeitet: Jedes Paket wird der Reihe nach mit den Regeln (Quelle, Ziel, Port, Protokoll, Richtung) verglichen, die erste passende Regel entscheidet über Durchlassen (ACCEPT), stilles Verwerfen (DROP) oder Ablehnen mit Rückmeldung (REJECT); am Ende steht eine Standardregel (Grundsatz siehe PB1-10-2-3-K10).

Erklärung:
Eine Firewall arbeitet eine geordnete Liste ab – deshalb kommt es auf die **Reihenfolge** an.
- Jede Regel nennt Merkmale (Quell- und Zieladresse, Port, Protokoll, Richtung – eingehend oder ausgehend) und eine Aktion.
- **ACCEPT** lässt durch, **DROP** verwirft still (der Absender wartet ins Leere, ein Angreifer erfährt nichts), **REJECT** lehnt ab und schickt eine Rückmeldung (der Absender weiß sofort Bescheid – praktisch im internen Netz).
- Die **erste passende Regel** gilt; eine zu allgemeine Regel weiter oben hebelt speziellere Regeln darunter aus.
- Ganz unten steht die Standardregel „alles andere sperren“ – das Prinzip der Positivliste; Regeln für einen Server festlegen und Black- und Whitelisting vergleichen kannst du in PB1-10-2-3.
Beispiel: Steht „erlaube TCP aus dem LAN“ vor „sperre TCP-Port 25 nach außen“, kommt die zweite Regel für LAN-Rechner nie zum Zug.

### K2 – Next-Generation-Firewall, IDS und IPS (Stufe 2 Verstehen)
Du kannst über Paketfilter und zustandsorientierte Prüfung hinaus die Next-Generation-Firewall beschreiben: Sie prüft per Deep Packet Inspection auch die Nutzdaten bis zur Anwendungsschicht (verschlüsselten Verkehr nur, wenn sie ihn aufbricht und neu verschlüsselt), erkennt Anwendungen und bringt Angriffserkennung mit; ein IDS meldet Angriffsmuster, ein IPS blockiert sie zusätzlich.

Erklärung:
Je tiefer eine Firewall in den Verkehr schaut, desto mehr Angriffe bemerkt sie – und desto mehr Rechenleistung braucht sie.
- **Paketfilter** und **zustandsorientierte Firewall** (PB1-11-1-1-K4) entscheiden nur nach Adressen, Ports, Protokoll und Verbindungszustand (Schicht 3/4).
- **Next-Generation-Firewall (NGFW):** prüft mit **Deep Packet Inspection** auch den Inhalt bis Schicht 7, kennt Anwendungen (z. B. Filesharing über Port 443) und enthält ein IPS. Bei TLS-Verkehr geht das nur, wenn sie die Verbindung aufbricht und neu verschlüsselt (die Clients müssen ihrem Zertifikat vertrauen).
- **IDS** (Intrusion Detection System) erkennt Angriffsmuster und schlägt Alarm, **IPS** (Intrusion Prevention System) blockiert sie zusätzlich sofort.
Beispiel: Ein Paketfilter lässt alles über Port 443 durch; eine NGFW bemerkt, dass darin ein verbotener Fernwartungsdienst läuft, und sperrt ihn.

### K3 – Personal Firewall gegen zentrale Netzwerk-Firewall (Stufe 2 Verstehen)
Du kannst eine Personal Firewall auf dem einzelnen Rechner von einer zentralen Netzwerk-Firewall am Übergang ins Internet unterscheiden: Die Personal Firewall schützt nur ihr Gerät, kennt das Programm hinter jeder Verbindung und wirkt auch gegen Angriffe aus dem eigenen Netz, die zentrale Firewall kontrolliert an einer Stelle den gesamten Verkehr zwischen Firmennetz und Außenwelt für alle Geräte; im Unternehmen arbeiten beide zusammen.

Erklärung:
Die Personal Firewall kennst du aus AP1 als Schutzmaßnahme am Arbeitsplatz. Im Netz kommt eine zentrale Firewall dazu – sie ersetzt die Personal Firewall nicht.
- **Personal Firewall:** läuft auf dem PC selbst, weiß, welches Programm eine Verbindung aufbaut, und schützt auch vor Angriffen aus dem eigenen LAN oder im fremden WLAN unterwegs.
- **Zentrale Netzwerk-Firewall:** eigenes Gerät am Übergang zwischen Firmennetz und Internet (oder zwischen Zonen); aller Verkehr läuft hindurch, die Regeln werden an einer Stelle gepflegt und gelten für alle Geräte – auch für Drucker oder Kameras ohne eigene Firewall.
- Ist eine falsch eingestellt oder ausgefallen, schützt noch die andere (Schutz in mehreren Schichten).
Beispiel: Ein Notebook im Hotel-WLAN ist nur durch seine Personal Firewall geschützt; im Büro sitzt zusätzlich die zentrale Firewall davor.

## Lehrnotiz: Firewall: Regelwerk, Prüftiefe und Einsatzort

**Aufteilung:**
- Regelwerk abarbeiten: K1
- Prüftiefe bis zur Next-Generation-Firewall: K2
- Einsatzort, auf dem Gerät oder zentral: K3

**Schon geprüft:** Noch nicht geprüft: K1–K3

**Kerngedanken:**
- Die Firewall wägt nicht ab und sucht nicht die genaueste Regel. Das ist anders als beim Router, der den Eintrag mit dem längsten Präfix nimmt. Hier zählt allein die Position in der Liste.
- Ein Regelwerk prüft man, indem man ein Paket Zeile für Zeile durchspielt und bei der ersten passenden Zeile aufhört. So findet man auch Regeln, die nie erreicht werden.
- Eine zentrale Firewall sieht nur den Verkehr, der durch sie hindurchläuft. Verkehr zwischen zwei Geräten im selben LAN erreicht sie nicht, der Verkehr eines Notebooks unterwegs ebenfalls nicht, solange er nicht per VPN durch das Firmennetz läuft.
- Für einen Paketfilter, der nur Adressen und Ports prüft, sehen zwei Anwendungen auf demselben Port gleich aus. Unterscheiden lassen sie sich erst in den Nutzdaten.
- Abgrenzung: Regeln für einen Server selbst festlegen und Black- und Whitelisting vergleichen gehört zu PB1-10-2-3. Paketfilter und zustandsorientierte Prüfung werden in PB1-11-1-1 eingeführt.

**Typische Missverständnisse:**
- Viele denken, ein Dienst sei geschützt, weil es eine Regel gibt, die ihn nur für eine bestimmte Quelle erlaubt. Richtig ist: Passt eine allgemeinere Regel weiter oben, wird die genaue Regel nie erreicht.
- Viele denken, mit einer zentralen Firewall könne die Personal Firewall abgeschaltet werden. Richtig ist: Im eigenen LAN und unterwegs schützt nur sie das Gerät.

**Fachwörter:**
- ACCEPT: Paket durchlassen
- DROP: still verwerfen, keine Antwort
- REJECT: ablehnen mit Rückmeldung an den Absender
- Standardregel: letzte Regel, sperrt alles Übrige
- Deep Packet Inspection: Prüfung der Nutzdaten bis Schicht 7
- IDS: erkennt Angriffsmuster und meldet sie
- IPS: erkennt Angriffsmuster und blockiert sofort
- Personal Firewall: Firewall auf dem einzelnen Rechner

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es noch keine echte Aufgabe. Der Prüfungskatalog nennt die Firewall bei den Netzwerkkomponenten.
- Zu erwarten sind kurze Teilaufgaben. Ein Regelwerk mit wenigen Zeilen ist auszuwerten („Geben Sie an, welche Regel greift“, „Erläutern Sie den Fehler“, 2–4 Punkte).
- Firewall-Arten sind zu unterscheiden, also zustandsorientierte Firewall gegen NGFW oder IDS gegen IPS (2–3 Punkte).
- Ein Einsatzort ist zu begründen.
- Es kommt auf genaue Aussagen an: „erste passende Regel“, Deep Packet Inspection heißt Nutzdaten, IDS meldet, IPS blockiert. Beim Einsatzort zählen Merkmale beider Seiten.

**Fallen:**
- Für ein Paket eine Sperrregel weiter unten als greifend angeben, obwohl eine Erlaubnisregel darüber schon passt.
- Den Fehler im Regelwerk erkennen, aber bei verlangter Korrektur die Behebung weglassen. Die speziellere Regel gehört nach oben, oder die allgemeine Regel wird so eingeschränkt, dass sie den Sonderfall nicht mehr erfasst.
- DROP und REJECT verwechseln oder nur eines davon für eine Sperre halten. Beide sperren, der Unterschied ist allein die Rückmeldung.
- Die Wahl zwischen DROP und REJECT nicht mit der Lage begründen. Zum Internet hin passt DROP. REJECT mit dem Grund „schnelle Rückmeldung für Kollegen“ passt nur im internen Netz.
- Deep Packet Inspection als Prüfung des IP-Kopfs beschreiben.
- Die zustandsorientierte Prüfung für eine Schicht-7-Prüfung halten. Sie kennt nur den Verbindungszustand.
- Bei HTTPS die Bedingung weglassen. Die NGFW muss die Verbindung aufbrechen und neu verschlüsseln, und die Clients müssen ihrem Zertifikat vertrauen.
- IDS und IPS vertauschen. Merkhilfe: Detection meldet, Prevention blockiert.
- Beim Einsatzort nur eine der beiden Firewalls beschreiben oder je Seite nur ein Merkmal nennen.
- Die Begründung für das Zusammenspiel beider Firewalls weglassen.
