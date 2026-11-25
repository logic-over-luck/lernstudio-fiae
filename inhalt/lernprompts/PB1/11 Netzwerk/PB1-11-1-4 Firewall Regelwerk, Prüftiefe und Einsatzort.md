Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Schichten, Komponenten, Protokolle und Dienste › Firewall: Regelwerk, Prüftiefe und Einsatzort

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen und dem Warum dahinter. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, vor jedem Vergleich, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, wurde das geprüft – dann reicht die Erklärung aus dem Stoff mit dem Warum dazu, ohne eigenen Ablauf. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber lösbar allein mit dem Stoff. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K2 – Wie die NGFW TLS-Verkehr aufbricht und prüft: (1) Der Client startet den TLS-Verbindungsaufbau zum Server; die NGFW im Datenweg fängt ihn ab und tritt selbst als Gegenstelle auf. (2) Die NGFW baut eine eigene, zweite TLS-Verbindung zum echten Server auf und prüft dessen Zertifikat. (3) Dem Client legt die NGFW ein Ersatzzertifikat für den Servernamen vor, das sie mit ihrer eigenen Zertifizierungsstelle signiert hat. (4) Der Client akzeptiert dieses Zertifikat nur, wenn die Zertifizierungsstelle der NGFW bei ihm als vertrauenswürdig hinterlegt ist; sonst zeigt er einen Zertifikatsfehler. (5) Die NGFW entschlüsselt die Daten des Clients und prüft die Nutzdaten im Klartext per Deep Packet Inspection auf Anwendung und Angriffsmuster. (6) Erlaubte Daten verschlüsselt die NGFW neu und sendet sie über ihre eigene TLS-Verbindung zum Server; erkannte Angriffe oder verbotene Anwendungen blockiert sie. Vereinfacht: Jede der beiden TLS-Verbindungen handelt im Handshake eigene Sitzungsschlüssel aus; diesen Schlüsselaustausch lassen die Schritte weg.

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
