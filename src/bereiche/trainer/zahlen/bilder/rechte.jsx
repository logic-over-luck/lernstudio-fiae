// Bilder zum Mitmachen für Dateirechte (chmod) (Rahmen im Unterricht: <Abbildung> aus lernsystem/bausteine.jsx;
// Stil: styles/zahlen-rechte.css, Präfix zt-rechte-). Jedes Bild liefert nur seinen Inhalt; die Rechnung steht in
// ../rechnen.js (getestet).
//   EineKlasse (drei Schalter r, w, x für eine Klasse: was erlaubt ist, als Bits oder als Ziffer)
//   WerGilt (welche Klasse für welchen Benutzer gilt) · LsZeile (eine Zeile aus ls -l, Teile antippen)
//   Schaltpult (3 × 3 Schalter, darunter live -rwxr-xr-- und chmod 754; auch eine Zahl eintippen)

import { useState } from 'preact/hooks';
import { Icon } from '../../../../ui/bausteine.jsx';
import { Segmente } from '../bausteine.jsx';
import { RWX, KLASSEN, rechteAusSchaltern, schalterAusOktal, geltendeKlasse } from '../rechnen.js';

const RECHTE = [
  { b: 'r', name: 'Lesen', wert: 4, tun: 'Inhalt ansehen' },
  { b: 'w', name: 'Schreiben', wert: 2, tun: 'Inhalt ändern' },
  { b: 'x', name: 'Ausführen', wert: 1, tun: 'als Programm starten' },
];

// „r-x“ → „lesen und ausführen“, „---“ → „nichts“
export function inWorten(drei) {
  const w = RECHTE.filter((_, i) => drei[i] !== '-').map((r) => r.name.toLowerCase());
  if (!w.length) return 'nichts';
  return w.length === 1 ? `nur ${w[0]}` : `${w.slice(0, -1).join(', ')} und ${w[w.length - 1]}`;
}

const dreiAus = (an) => RECHTE.map((r, i) => (an[i] ? r.b : '-')).join('');

// Ein Schalter für ein Recht: groß der Buchstabe (oder - wenn aus), darunter der Name
function Schalter({ recht, an, onKlick, klein, klasse }) {
  return (
    <button
      type="button"
      class={`zt-rechte-schalter ${an ? 'zt-rechte-schalter--an' : ''} ${klein ? 'zt-rechte-schalter--klein' : ''}`}
      aria-pressed={an}
      aria-label={`${klasse ? `${klasse}: ` : ''}${recht.name} ${an ? 'erlaubt' : 'nicht erlaubt'}`}
      onClick={onKlick}
    >
      <span class="zt-rechte-schalter__b">{an ? recht.b : '-'}</span>
      {!klein && <span class="zt-rechte-schalter__name">{recht.name}</span>}
    </button>
  );
}

// ---------- Eine Klasse: drei Schalter ----------
// zeige: 'tun' (was mit der Datei geht) · 'bits' (jedes Recht als 0/1) · 'ziffer' (Wertigkeiten 4, 2, 1 und Summe)

export function EineKlasse({ start = 'rw-', zeige = 'tun', datei = 'gehaelter.csv' }) {
  const [an, setAn] = useState(() => [...start].map((c) => c !== '-'));
  const drei = dreiAus(an);
  const ziffer = RWX.indexOf(drei);
  const umschalten = (i) => setAn(an.map((x, j) => (j === i ? !x : x)));
  return (
    <>
      {zeige === 'tun' && (
        <span class="zt-rechte-datei mono">
          <Icon name="file-text" groesse={15} /> {datei}
        </span>
      )}
      <div class="zt-rechte-klasse">
        {RECHTE.map((r, i) => (
          <div key={r.b} class="zt-rechte-klasse__spalte">
            {zeige === 'ziffer' && <span class={`zt-rechte-wert ${an[i] ? 'zt-rechte-wert--an' : ''}`}>{r.wert}</span>}
            <Schalter recht={r} an={an[i]} onKlick={() => umschalten(i)} />
            {zeige === 'bits' && <span class={`zt-rechte-bit mono ${an[i] ? 'zt-rechte-bit--an' : ''}`}>{an[i] ? 1 : 0}</span>}
          </div>
        ))}
      </div>
      {zeige === 'tun' && (
        <ul class="zt-rechte-tun">
          {RECHTE.map((r, i) => (
            <li key={r.b} class={an[i] ? 'zt-rechte-tun--ja' : 'zt-rechte-tun--nein'}>
              <Icon name={an[i] ? 'circle-check' : 'circle-x'} groesse={16} />
              <span>{r.tun}</span>
              <span class="zt-rechte-tun__wort">{an[i] ? 'erlaubt' : 'verweigert'}</span>
            </li>
          ))}
        </ul>
      )}
      {zeige === 'bits' && (
        <div class="zt-rechte-ergebnis mono">
          <span>{drei}</span>
          <span class="zt-rechte-ergebnis__pfeil">→</span>
          <b>{an.map((x) => (x ? 1 : 0)).join('')}</b>
        </div>
      )}
      {zeige === 'ziffer' && (
        <div class="zt-rechte-ergebnis mono">
          <span>{drei}</span>
          <span class="zt-rechte-ergebnis__pfeil">→</span>
          <span>{RECHTE.filter((_, i) => an[i]).map((r) => r.wert).join(' + ') || '0'}</span> =<b>{ziffer}</b>
        </div>
      )}
      <span class="zt-bild__hinweis">Schalter antippen zum Erlauben und Verbieten</span>
    </>
  );
}

// ---------- Wer gilt? Besitzer, Gruppe oder andere ----------

const DATEI = { name: 'gehaelter.csv', besitzer: 'anna', gruppe: 'personal', sym: 'rw-r-----' };
const BENUTZER = [
  { name: 'anna', gruppen: ['personal'] },
  { name: 'ben', gruppen: ['personal'] },
  { name: 'carla', gruppen: ['vertrieb'] },
];
const GRUND = [
  (b) => `${b.name} hat die Datei angelegt – ihr gehört sie.`,
  (b) => `${b.name} gehört die Datei nicht, aber ${b.name} ist in der Gruppe ${DATEI.gruppe}.`,
  (b) => `${b.name} gehört die Datei nicht und ist nicht in der Gruppe ${DATEI.gruppe} (sondern in ${b.gruppen.join(', ')}).`,
];

export function WerGilt() {
  const [wer, setWer] = useState('ben');
  const b = BENUTZER.find((x) => x.name === wer);
  const k = geltendeKlasse(b, DATEI);
  const drei = DATEI.sym.slice(k * 3, k * 3 + 3);
  return (
    <>
      <span class="zt-rechte-datei mono">
        <Icon name="file-text" groesse={15} /> {DATEI.name}
        <span class="zt-rechte-datei__zusatz">
          gehört {DATEI.besitzer} · Gruppe {DATEI.gruppe}
        </span>
      </span>
      <div class="zt-rechte-wer">
        <span class="zt-rechte-wer__frage">Wer greift zu?</span>
        <Segmente optionen={BENUTZER.map((x) => ({ wert: x.name, text: x.name }))} wert={wer} onWahl={setWer} label="Benutzer" />
      </div>
      <div class="zt-rechte-drei">
        {KLASSEN.map((name, i) => (
          <div key={name} class={`zt-rechte-drei__klasse zt-rechte--k${i} ${i === k ? 'zt-rechte-drei__klasse--gilt' : ''}`}>
            <span class="zt-rechte-drei__name">{name}</span>
            <span class="zt-rechte-drei__rechte mono">{DATEI.sym.slice(i * 3, i * 3 + 3)}</span>
            <span class="zt-rechte-drei__gilt">{i === k ? `gilt für ${wer}` : ' '}</span>
          </div>
        ))}
      </div>
      <p class="zt-rechte-satz">
        {GRUND[k](b)} Also gilt <strong>{KLASSEN[k]}</strong>: <code>{drei}</code> – {wer} darf {inWorten(drei)}.
      </p>
      <span class="zt-bild__hinweis">Benutzer wählen</span>
    </>
  );
}

// ---------- Eine Zeile aus ls -l, die Teile zum Antippen ----------

export function LsZeile({ rechte = 'rwxr-xr--', typ = '-', besitzer = 'anna', gruppe = 'personal', groesse = '2048', datum = 'Okt 19 09:14', name = 'backup.sh' }) {
  const teile = [
    { t: typ, name: 'Dateityp', text: `${typ === 'd' ? 'd = Verzeichnis (directory)' : '- = normale Datei'}. Ein d stünde für ein Verzeichnis. Das Zeichen gehört nicht zu den Rechten.`, rechte: true },
    ...KLASSEN.map((k, i) => {
      const drei = rechte.slice(i * 3, i * 3 + 3);
      return { t: drei, name: `Rechte: ${k}`, text: `${drei} – ${k === 'andere' ? 'alle anderen dürfen' : `${k === 'Besitzer' ? 'der Besitzer' : 'die Gruppe'} darf`} ${inWorten(drei)}.`, rechte: true, k: i };
    }),
    { t: '1', name: 'Anzahl der Verweise', text: 'Wie viele Namen auf die Datei zeigen – für die Rechte unwichtig.' },
    { t: besitzer, name: 'Besitzer', text: `Der Benutzer, dem die Datei gehört, hier ${besitzer}. Für den Besitzer gelten die ersten drei Rechte.`, k: 0 },
    { t: gruppe, name: 'Gruppe', text: `Die Gruppe ${gruppe}. Für ihre Mitglieder gelten die mittleren drei Rechte.`, k: 1 },
    { t: groesse, name: 'Größe', text: `${groesse} Byte.` },
    { t: datum, name: 'Geändert am', text: 'Wann die Datei zuletzt geändert wurde.' },
    { t: name, name: 'Name', text: 'Der Name der Datei.' },
  ];
  const [wahl, setWahl] = useState(1);
  const teil = (x, i) => (
    <button
      key={i}
      type="button"
      class={`zt-rechte-ls__teil ${x.k !== undefined ? `zt-rechte--k${x.k}` : ''} ${x.rechte ? 'zt-rechte-ls__teil--rechte' : ''} ${wahl === i ? 'zt-rechte-ls__teil--wahl' : ''}`}
      aria-pressed={wahl === i}
      aria-label={x.name}
      onClick={() => setWahl(i)}
    >
      {x.t}
    </button>
  );
  const w = teile[wahl];
  return (
    <>
      <div class="zt-rechte-befehl mono">
        <span class="zt-rechte-befehl__prompt">$</span> ls -l {name}
      </div>
      <div class="zt-rechte-ls mono">
        <span class="zt-rechte-ls__block">{teile.slice(0, 4).map((x, i) => teil(x, i))}</span>
        {teile.slice(4).map((x, i) => teil(x, i + 4))}
      </div>
      <div class={`zt-rechte-ls__erklaerung ${w.k !== undefined ? `zt-rechte--k${w.k}` : ''}`} aria-live="polite">
        <strong>{w.name}</strong> <span>{w.text}</span>
      </div>
      <span class="zt-bild__hinweis">Teile der Zeile antippen</span>
    </>
  );
}

// ---------- Schaltpult: 3 × 3 Schalter, live die Zeile aus ls -l und die Zahl für chmod ----------
// start: Oktalzahl am Anfang · werte: Wertigkeiten 4, 2, 1 über den Spalten zeigen

export function Schaltpult({ start = '754', werte = true }) {
  const [an, setAn] = useState(() => schalterAusOktal(start));
  const [text, setText] = useState(start);
  const r = rechteAusSchaltern(an);
  const gueltig = /^[0-7]{3}$/.test(text.trim());
  const umschalten = (i) => {
    const neu = an.map((x, j) => (j === i ? !x : x));
    setAn(neu);
    setText(rechteAusSchaltern(neu).oktal);
  };
  const tippe = (wert) => {
    setText(wert);
    if (/^[0-7]{3}$/.test(wert.trim())) setAn(schalterAusOktal(wert.trim()));
  };
  return (
    <>
      <div class="zt-rechte-pult" role="group" aria-label="Rechte-Schaltpult">
        <span />
        {RECHTE.map((x) => (
          <span key={x.b} class="zt-rechte-pult__kopf">
            {x.b}
            {werte && <span class="zt-rechte-pult__wert">{x.wert}</span>}
          </span>
        ))}
        <span class="zt-rechte-pult__kopf">=</span>
        {KLASSEN.map((k, ki) => [
          <span key={`n${ki}`} class={`zt-rechte-pult__klasse zt-rechte--k${ki}`}>
            {k}
          </span>,
          ...RECHTE.map((x, i) => <Schalter key={`${ki}${x.b}`} recht={x} an={an[ki * 3 + i]} klein klasse={k} onKlick={() => umschalten(ki * 3 + i)} />),
          <span key={`z${ki}`} class={`zt-rechte-pult__ziffer mono zt-rechte--k${ki}`}>
            {r.ziffern[ki]}
          </span>,
        ])}
      </div>
      <div class="zt-rechte-zeilen">
        <div class="zt-rechte-zeile">
          <span class="zt-rechte-zeile__name">ls -l zeigt</span>
          <span class="zt-rechte-zeile__wert mono">
            <span class="zt-rechte-zeile__typ">-</span>
            {[0, 1, 2].map((k) => (
              <span key={k} class={`zt-rechte--k${k} zt-rechte-farbig`}>
                {r.sym.slice(k * 3, k * 3 + 3)}
              </span>
            ))}
          </span>
        </div>
        <label class="zt-rechte-zeile">
          <span class="zt-rechte-zeile__name">Befehl</span>
          <span class="zt-rechte-zeile__wert mono">
            chmod{' '}
            <input
              class={`feld feld--mono zt-rechte-zahl ${gueltig ? '' : 'feld--falsch'}`}
              value={text}
              maxLength={3}
              inputMode="numeric"
              spellcheck={false}
              autoComplete="off"
              aria-label="Oktalzahl für chmod"
              onInput={(e) => tippe(e.currentTarget.value)}
            />
          </span>
        </label>
      </div>
      <span class={`zt-bild__hinweis ${gueltig ? '' : 'zt-bild__hinweis--warn'}`}>
        {gueltig ? 'Schalter antippen – oder selbst eine Zahl hinter chmod eintippen' : 'Drei Ziffern von 0 bis 7, z. B. 754'}
      </span>
    </>
  );
}
