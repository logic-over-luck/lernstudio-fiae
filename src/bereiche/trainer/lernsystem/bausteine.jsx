// Lernsystem: Bausteine für den Inhalt eines Unterrichts – für alle Trainer gleich (Regeln: LEITFADEN.md).
//   Text:     <P>, <Zwischentitel>, <Merke titel?>, <Tafel zeilen>, <Abbildung unter?> (Rahmen für Bilder zum Mitmachen)
//   Begriffe: <SoHeisstDas begriff auch?> führt einen Fachbegriff ein, <B id> verwendet ihn (Antippen zeigt die Bedeutung)
//   Fragen:   <Wahl frage optionen> und <Eingabe frage pruefe tipp loesung> halten den Text an, bis sie beantwortet sind
// Ein Teil ist eine Liste dieser Blöcke; die Ansicht (Unterricht.jsx) deckt sie bis zur nächsten offenen Frage auf.

import { createContext } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import { inhalt as daten } from '../../../daten/inhalt.js';
import { link } from '../../../router.js';
import { Icon, Knopf } from '../../../ui/bausteine.jsx';

// Lernraum (Links ins Glossar), die Begriffe des Themas und melde(id), wenn ein Begriff eingeführt wurde
export const BegriffKontext = createContext({ raum: 'AP1', melde: () => {}, begriffe: {} });

// Bedeutung eines Begriffs aus dem Glossar der App – eine Quelle für alle Erklärungen
export const bedeutung = (begriffe, id) => daten.glossar.find((g) => g.b === begriffe[id]?.glossar)?.e ?? '';

// Einzeiliger Text mit `Code` und **fett** (Glossar-Bedeutungen in Blase und Begriffsliste)
export function Inline({ text }) {
  return String(text)
    .split(/(`[^`]+`|\*\*[^*]+\*\*)/)
    .map((t, i) => (t.startsWith('`') && t.endsWith('`') && t.length > 1 ? <code key={i}>{t.slice(1, -1)}</code> : t.startsWith('**') && t.endsWith('**') && t.length > 3 ? <strong key={i}>{t.slice(2, -2)}</strong> : t));
}

// ---------- Zwischenfragen ----------

// Auswahlfrage. optionen: [{ text, richtig?: true, warum? }] – warum erklärt, was an einer falschen Antwort nicht stimmt.
// children: die Erklärung nach der richtigen Antwort.
export function Wahl({ frage, optionen, children, beantwortet, onGeloest }) {
  const [falsch, setFalsch] = useState([]);
  const [ok, setOk] = useState(false);
  const fertig = ok || beantwortet;
  const loese = () => {
    setOk(true);
    onGeloest?.();
  };
  const letzte = optionen.find((o) => o.text === falsch[falsch.length - 1]);
  const kurz = optionen.every((o) => o.text.length <= 14);
  return (
    <div class={`ls-kasten ls-kasten--frage ls-frage ${fertig ? 'ls-frage--ok' : ''}`}>
      <span class="ls-kasten__titel">
        <Icon name={fertig ? 'circle-check' : 'circle-question-mark'} groesse={15} /> {fertig ? 'Beantwortet' : 'Kurz nachgedacht'}
      </span>
      <p class="ls-frage__text">{frage}</p>
      <div class="ls-frage__optionen" role="group" aria-label={frage}>
        {optionen.map((o) => {
          const istFalsch = falsch.includes(o.text);
          const istRichtig = fertig && o.richtig;
          return (
            <button
              key={o.text}
              type="button"
              class={`ls-option ${kurz ? 'mono' : ''} ${istFalsch ? 'ls-option--falsch' : ''} ${istRichtig ? 'ls-option--richtig' : ''}`}
              disabled={fertig || istFalsch}
              onClick={() => (o.richtig ? loese() : setFalsch([...falsch, o.text]))}
            >
              {istRichtig && <Icon name="circle-check" groesse={15} />}
              {istFalsch && <Icon name="circle-x" groesse={15} />}
              {o.text}
            </button>
          );
        })}
      </div>
      {!fertig && letzte && (
        <p class="ls-frage__antwort ls-frage__antwort--falsch" role="status">
          <Icon name="lightbulb" groesse={15} />
          <span>
            {letzte.warum ?? 'Noch nicht.'} Versuch es noch einmal.{' '}
            <button type="button" class="ls-link" onClick={loese}>
              Erklär’s mir
            </button>
          </span>
        </p>
      )}
      {!fertig && !letzte && (
        <button type="button" class="ls-link ls-frage__weiss-nicht" onClick={loese}>
          Weiß ich nicht – erklär’s mir
        </button>
      )}
      {fertig && <div class="ls-frage__antwort ls-frage__antwort--ok erscheinen">{children}</div>}
    </div>
  );
}
Wahl.zwischenfrage = true;

// Eingabefrage. pruefe(text) → true (richtig) | Text (falsch, mit gezieltem Hinweis) | false (falsch)
// tipp: allgemeiner Hinweis nach einer falschen Antwort · loesung: wird nach zwei Fehlversuchen angeboten
export function Eingabe({ frage, pruefe, tipp, loesung, platzhalter, breit, children, beantwortet, onGeloest }) {
  const [text, setText] = useState('');
  const [fehler, setFehler] = useState(0);
  const [hinweis, setHinweis] = useState(null);
  const [wie, setWie] = useState(null); // 'richtig' | 'gezeigt'
  const fertig = !!wie || beantwortet;
  const loese = (art) => {
    setWie(art);
    onGeloest?.();
  };
  const absenden = (e) => {
    e.preventDefault();
    if (fertig || !text.trim()) return;
    const r = pruefe(text);
    if (r === true) return loese('richtig');
    setFehler(fehler + 1);
    setHinweis(typeof r === 'string' ? r : null);
  };
  return (
    <div class={`ls-kasten ls-kasten--frage ls-frage ${fertig ? 'ls-frage--ok' : ''}`}>
      <span class="ls-kasten__titel">
        <Icon name={fertig ? 'circle-check' : 'circle-question-mark'} groesse={15} /> {fertig ? 'Beantwortet' : 'Kurz nachgedacht'}
      </span>
      <p class="ls-frage__text">{frage}</p>
      <form class="ls-frage__eingabe" onSubmit={absenden}>
        <input
          class={`feld feld--mono ${breit ? 'ls-feld--breit' : ''} ${fertig ? 'feld--richtig' : fehler ? 'feld--falsch' : ''}`}
          value={wie === 'richtig' ? text : fertig ? loesung : text}
          disabled={fertig}
          placeholder={platzhalter ?? ''}
          spellcheck={false}
          autoComplete="off"
          aria-label={frage}
          onInput={(e) => setText(e.currentTarget.value)}
        />
        {!fertig && (
          <Knopf variante="zweit" groesse="s" type="submit" icon="check">
            Prüfen
          </Knopf>
        )}
      </form>
      {!fertig && fehler > 0 && (
        <p class="ls-frage__antwort ls-frage__antwort--falsch" role="status">
          <Icon name="lightbulb" groesse={15} />
          <span>
            {hinweis ?? 'Das stimmt noch nicht.'} {tipp}{' '}
            {fehler >= 2 && (
              <button type="button" class="ls-link" onClick={() => loese('gezeigt')}>
                Lösung zeigen
              </button>
            )}
          </span>
        </p>
      )}
      {!fertig && fehler === 0 && (
        <button type="button" class="ls-link ls-frage__weiss-nicht" onClick={() => loese('gezeigt')}>
          Weiß ich nicht – zeig’s mir
        </button>
      )}
      {fertig && (
        <div class="ls-frage__antwort ls-frage__antwort--ok erscheinen">
          {wie !== 'richtig' && (
            <p>
              Lösung: <strong class="mono">{loesung}</strong>
            </p>
          )}
          {children}
        </div>
      )}
    </div>
  );
}
Eingabe.zwischenfrage = true;

// ---------- Text-Bausteine ----------

export function P({ children }) {
  return <p class="ls-text">{children}</p>;
}

export function Zwischentitel({ children }) {
  return <h4 class="ls-zwischentitel">{children}</h4>;
}

// Ein Fachbegriff wird eingeführt: der Begriff groß, darunter seine Bedeutung in eigenen Worten (children), auf Wunsch
// ein Synonym (auch). Füllt den Chip des Begriffs im Kapitelkopf; der Link führt ins Glossar.
export function SoHeisstDas({ begriff, auch, children }) {
  const { raum, melde, begriffe } = useContext(BegriffKontext);
  useEffect(() => melde(begriff), [begriff]);
  const b = begriffe[begriff];
  return (
    <div class="ls-kasten ls-kasten--begriff ls-soheisst" id={`ls-begriff-${begriff}`}>
      <span class="ls-kasten__titel">
        <Icon name="bookmark" groesse={15} /> So heißt das
      </span>
      <span class="ls-soheisst__wort">
        {b?.wort ?? begriff}
        {auch && <span class="ls-soheisst__auch"> – auch {auch}</span>}
      </span>
      <div class="ls-soheisst__text">{children}</div>
      <a class="ls-soheisst__glossar" href={link(raum, 'glossar', null, { begriff: b?.glossar })}>
        <Icon name="book-open" groesse={13} /> Im Glossar
      </a>
    </div>
  );
}

// Ein schon eingeführter Begriff im Text: gepunktet unterstrichen, antippen zeigt die Bedeutung aus dem Glossar
export function B({ id, children }) {
  const { begriffe } = useContext(BegriffKontext);
  const [offen, setOffen] = useState(false);
  return (
    <span class="ls-b">
      <button type="button" class="ls-b__wort" aria-expanded={offen} onClick={() => setOffen(!offen)}>
        {children ?? begriffe[id]?.wort}
      </button>
      {offen && (
        <span class="ls-b__blase erscheinen" role="note">
          <strong>{begriffe[id]?.wort}:</strong> <Inline text={bedeutung(begriffe, id)} />
        </span>
      )}
    </span>
  );
}

// Merkkasten am Ende eines Gedankens
export function Merke({ titel = 'Merke', children }) {
  return (
    <div class="ls-kasten ls-kasten--merke">
      <span class="ls-kasten__titel">
        <Icon name="lightbulb" groesse={15} /> {titel}
      </span>
      <div class="ls-kasten__text">{children}</div>
    </div>
  );
}

// Tafel: eine Rechnung wie an der Tafel – Zeilen aus Spalten, rechtsbündig untereinander.
// zeilen: [{ name?, werte: [..], ton? ('oben' | 'summe') }] oder { text } für eine freie Zeile
export function Tafel({ zeilen }) {
  return (
    <div class="ls-tafel mono" role="img" aria-label={zeilen.map((z) => (z.text ?? [z.name, ...z.werte].join(' '))).join(', ')}>
      {zeilen.map((z, i) =>
        z.text ? (
          <div key={i} class={`ls-tafel__frei ${z.ton ? `ls-tafel__frei--${z.ton}` : ''}`}>
            {z.text}
          </div>
        ) : (
          <div key={i} class={`ls-tafel__zeile ${z.ton ? `ls-tafel__zeile--${z.ton}` : ''}`}>
            <span class="ls-tafel__name">{z.name}</span>
            {z.werte.map((w, j) => (
              <span key={j} class="ls-tafel__zelle">
                {w}
              </span>
            ))}
          </div>
        ),
      )}
    </div>
  );
}

// Rahmen für ein Bild zum Mitmachen (oder eine Tabelle), darunter optional eine Zeile, was man damit tun kann
export function Abbildung({ unter, children }) {
  return (
    <figure class="ls-abbildung">
      {children}
      {unter && <figcaption class="ls-abbildung__unter">{unter}</figcaption>}
    </figure>
  );
}
