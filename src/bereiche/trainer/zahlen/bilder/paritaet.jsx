// Bilder zum Mitmachen für Paritätsbit (Rahmen im Unterricht: <Abbildung> aus lernsystem/bausteine.jsx;
// Stil: styles/zahlen-paritaet.css, Präfix zt-paritaet-). Die Rechnungen stehen in ../rechnen.js (getestet).
//   Strecke (Sender → Leitung → Empfänger, Bits antippen = Störung, Prüfung läuft mit) · Einsen (Anzahl und Parität)
//   Bilden (Paritätsbit für gerade/ungerade Parität) · Verdacht (welches Bit war es?) · Pruefsumme (Zahlen mit Summe)
//   Ean (Prüfziffer einer Artikelnummer) · Frame (Ethernet-Frame mit CRC-32 als Frame Check Sequence)

import { useState } from 'preact/hooks';
import { Icon, Knopf } from '../../../../ui/bausteine.jsx';
import { Segmente } from '../bausteine.jsx';
import { einsen, paritaetsbit, paritaetOk, asciiZeichen, crc32, eanPruefziffer } from '../rechnen.js';

const bitsAus = (text) => [...text].map(Number);
const geradeText = (n) => (n % 2 === 0 ? 'gerade' : 'ungerade');
const einsenText = (n) => `${n} ${n === 1 ? 'Eins' : 'Einsen'}`;
const kippe = (bits, i) => bits.map((b, j) => (j === i ? 1 - b : b));
const zeichenText = (bits) => {
  const z = asciiZeichen(bits);
  return z === null ? 'ein Steuerzeichen' : `„${z}“`;
};

// Eine Reihe Bits; das Paritätsbit (letztes, wenn mitP) ist abgesetzt und mit P beschriftet, gekippte Bits orange.
// onTipp(i): Bits sind Knöpfe
function Bitreihe({ bits, mitP, gekippt = [], markiert, onTipp, label }) {
  return (
    <div class="zt-paritaet-reihe" role="group" aria-label={label}>
      {bits.map((b, i) => {
        const istP = mitP && i === bits.length - 1;
        const kipp = gekippt.includes(i);
        const klasse = `zt-bit ${kipp ? 'zt-bit--c' : b ? 'zt-bit--a' : ''} ${istP ? 'zt-paritaet-p' : ''} ${markiert === i ? 'zt-paritaet-markiert' : ''}`;
        const marke = kipp ? <Icon name="zap" groesse={12} /> : istP ? 'P' : '';
        return (
          <div key={i} class={`zt-paritaet-spalte ${istP ? 'zt-paritaet-spalte--p' : ''}`}>
            <span class={`zt-paritaet-marke ${kipp ? 'zt-paritaet-marke--kipp' : ''}`}>{marke}</span>
            {onTipp ? (
              <button type="button" class={klasse} aria-pressed={kipp} aria-label={`${istP ? 'Paritätsbit' : `Bit ${i + 1}`}: ${b}`} onClick={() => onTipp(i)}>
                {b}
              </button>
            ) : (
              <span class={klasse}>{b}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Urteil({ ton, icon, children }) {
  return (
    <p class={`zt-paritaet-urteil zt-paritaet-urteil--${ton}`} role="status">
      <Icon name={icon} groesse={16} />
      <span>{children}</span>
    </p>
  );
}

// ---------- Strecke: Sender → Leitung → Empfänger ----------

// daten: Datenbits als Text · paritaet: null (ohne Paritätsbit) | 'gerade' | 'ungerade' · zeichen: ASCII-Zeichen zeigen
export function Strecke({ daten = '0110100', paritaet = null, zeichen = false }) {
  const d = bitsAus(daten);
  const gerade = paritaet === 'gerade';
  const gesendet = paritaet ? [...d, paritaetsbit(d, gerade)] : d;
  const [gekippt, setGekippt] = useState([]);
  const empfangen = gesendet.map((b, i) => (gekippt.includes(i) ? 1 - b : b));
  const tipp = (i) => setGekippt(gekippt.includes(i) ? gekippt.filter((x) => x !== i) : [...gekippt, i]);
  const nE = einsen(empfangen);
  const ok = paritaet ? paritaetOk(empfangen, gerade) : true;

  let urteil;
  if (!paritaet) {
    urteil = gekippt.length ? (
      <Urteil ton="warn" icon="triangle-alert">
        Gesendet {zeichenText(gesendet)}, angekommen {zeichenText(empfangen)}. Der Empfänger hat nur die empfangenen Bits.
      </Urteil>
    ) : (
      <Urteil ton="gut" icon="circle-check">
        Alles kommt unverändert an.
      </Urteil>
    );
  } else if (!ok) {
    urteil = (
      <Urteil ton="fehler" icon="circle-x">
        Parität falsch: Fehler erkannt.
      </Urteil>
    );
  } else if (gekippt.length) {
    urteil = (
      <Urteil ton="warn" icon="triangle-alert">
        Parität stimmt: kein Fehler erkannt. Gekippt sind aber {gekippt.length} Bits – unbemerkt.
      </Urteil>
    );
  } else {
    urteil = (
      <Urteil ton="gut" icon="circle-check">
        Parität stimmt: kein Fehler erkannt.
      </Urteil>
    );
  }

  return (
    <>
      <div class="zt-paritaet-strecke">
        <div class="zt-paritaet-seite">
          <span class="zt-paritaet-seite__name">
            <Icon name="send" groesse={14} /> Sender
          </span>
          <Bitreihe bits={gesendet} mitP={!!paritaet} label="gesendete Bits" />
          <span class="zt-paritaet-info">{zeichen ? `Zeichen ${zeichenText(gesendet)}` : `${einsenText(einsen(gesendet))} – ${geradeText(einsen(gesendet))}`}</span>
        </div>
        <div class="zt-paritaet-leitung" aria-hidden="true">
          <Icon name="arrow-down" groesse={14} /> Leitung
        </div>
        <div class="zt-paritaet-seite">
          <span class="zt-paritaet-seite__name">
            <Icon name="monitor" groesse={14} /> Empfänger
          </span>
          <Bitreihe bits={empfangen} mitP={!!paritaet} gekippt={gekippt} onTipp={tipp} label="empfangene Bits, antippen kippt ein Bit" />
          <span class="zt-paritaet-info">
            {zeichen
              ? `liest ${zeichenText(empfangen)}`
              : paritaet
                ? `zählt: ${einsenText(nE)} – ${geradeText(nE)} · vereinbart: ${paritaet}`
                : `${einsenText(nE)} – ${geradeText(nE)}`}
          </span>
        </div>
      </div>
      {urteil}
      <div class="zt-bild__knoepfe">
        <span class="zt-bild__hinweis">Bit beim Empfänger antippen = Störung auf der Leitung</span>
        {gekippt.length > 0 && (
          <Knopf variante="geist" groesse="s" icon="rotate-ccw" onClick={() => setGekippt([])}>
            Störung weg
          </Knopf>
        )}
      </div>
    </>
  );
}

// ---------- Einsen: Anzahl der Einsen und ihre Parität ----------

export function Einsen({ start = '0110100' }) {
  const [bits, setBits] = useState(bitsAus(start));
  const n = einsen(bits);
  return (
    <>
      <Bitreihe bits={bits} onTipp={(i) => setBits(kippe(bits, i))} label="Bits, antippen zum Kippen" />
      <div class="zt-paritaet-zaehler">
        <span class="zt-paritaet-zaehler__zahl mono">{n}</span>
        <span class="zt-paritaet-zaehler__text">
          {n === 1 ? 'Eins' : 'Einsen'} – <b class={`zt-paritaet-wort zt-paritaet-wort--${geradeText(n)}`}>{geradeText(n)}</b>
        </span>
      </div>
      <span class="zt-bild__hinweis">Bit antippen: Es kippt, die Anzahl der Einsen ändert sich um 1</span>
    </>
  );
}

// ---------- Bilden: Paritätsbit für gerade oder ungerade Parität ----------

// wahl: gerade/ungerade umschaltbar
export function Bilden({ daten = '0110100', paritaet = 'gerade', wahl = true }) {
  const [bits, setBits] = useState(bitsAus(daten));
  const [art, setArt] = useState(paritaet);
  const gerade = art === 'gerade';
  const n = einsen(bits);
  const p = paritaetsbit(bits, gerade);
  const gesamt = n + p;
  return (
    <>
      {wahl && (
        <Segmente
          optionen={[
            { wert: 'gerade', text: 'gerade Parität' },
            { wert: 'ungerade', text: 'ungerade Parität' },
          ]}
          wert={art}
          onWahl={setArt}
          label="vereinbarte Parität"
        />
      )}
      <div class="zt-paritaet-bilden">
        <Bitreihe bits={bits} onTipp={(i) => setBits(kippe(bits, i))} label="Datenbits, antippen zum Ändern" />
        <span class="zt-paritaet-plus" aria-hidden="true">
          +
        </span>
        <Bitreihe bits={[p]} mitP label="Paritätsbit" />
      </div>
      <ol class="zt-paritaet-schritte">
        <li>
          Datenbits: <b>{einsenText(n)}</b> – {geradeText(n)}
        </li>
        <li>
          {art} Parität verlangt insgesamt eine {art} Anzahl → Paritätsbit <b class="mono">{p}</b>
        </li>
        <li>
          gesendet: <span class="mono">{bits.join('')}</span>
          <b class="mono zt-paritaet-pwert">{p}</b> – {einsenText(gesamt)}, {geradeText(gesamt)}{' '}
          <Icon name="check" groesse={14} class="zt-paritaet-haken" />
        </li>
      </ol>
      <span class="zt-bild__hinweis">{wahl ? 'Datenbits antippen oder die Parität umschalten' : 'Datenbits antippen'}</span>
    </>
  );
}

// ---------- Verdacht: Welches Bit ist gekippt? ----------

// empfangen: Bitfolge mit Paritätsbit am Ende, deren Parität nicht stimmt
export function Verdacht({ empfangen = '01001001', paritaet = 'gerade' }) {
  const bits = bitsAus(empfangen);
  const gerade = paritaet === 'gerade';
  const [wahl, setWahl] = useState(null);
  const [gesehen, setGesehen] = useState([]);
  const tipp = (i) => {
    setWahl(i);
    if (!gesehen.includes(i)) setGesehen([...gesehen, i]);
  };
  const original = wahl === null ? null : kippe(bits, wahl);
  return (
    <>
      <div class="zt-paritaet-seite">
        <span class="zt-paritaet-seite__name">
          <Icon name="monitor" groesse={14} /> Empfangen ({paritaet} Parität vereinbart)
        </span>
        <Bitreihe bits={bits} mitP markiert={wahl} onTipp={tipp} label="empfangene Bits, antippen = Verdacht" />
        <span class="zt-paritaet-info">
          {einsenText(einsen(bits))} – {geradeText(einsen(bits))}: Fehler erkannt
        </span>
      </div>
      {original ? (
        <div class="zt-paritaet-seite">
          <span class="zt-paritaet-seite__name">Wenn {wahl === bits.length - 1 ? 'das Paritätsbit' : `Bit ${wahl + 1}`} gekippt ist, wurde gesendet:</span>
          <Bitreihe bits={original} mitP gekippt={[wahl]} label="mögliches Original" />
          <span class="zt-paritaet-info">
            {einsenText(einsen(original))} – {geradeText(einsen(original))} {paritaetOk(original, gerade) ? '✓ passt' : '✗ passt nicht'}
          </span>
        </div>
      ) : null}
      <span class="zt-bild__hinweis">
        {gesehen.length >= bits.length
          ? `Alle ${bits.length} Möglichkeiten passen gleich gut.`
          : `Tippe ein Bit an: Was, wenn genau dieses gekippt ist? (${gesehen.length} von ${bits.length} ausprobiert)`}
      </span>
    </>
  );
}

// ---------- Prüfsumme: Zahlen mit ihrer Summe senden ----------

export function Pruefsumme({ werte = [12, 7, 30] }) {
  const summe = werte.reduce((a, b) => a + b, 0);
  const [empf, setEmpf] = useState(werte);
  const neu = empf.reduce((a, b) => a + b, 0);
  const geaendert = empf.some((w, i) => w !== werte[i]);
  const aendere = (i, d) => setEmpf(empf.map((w, j) => (j === i ? Math.max(0, w + d) : w)));
  return (
    <>
      <div class="zt-paritaet-tabelle-huelle">
        <table class="zt-paritaet-tabelle">
          <thead>
            <tr>
              <th />
              <th>
                <Icon name="send" groesse={13} /> Sender
              </th>
              <th>
                <Icon name="monitor" groesse={13} /> Empfänger
              </th>
            </tr>
          </thead>
          <tbody>
            {werte.map((w, i) => (
              <tr key={i}>
                <th>Zahl {i + 1}</th>
                <td class="mono">{w}</td>
                <td>
                  <span class="zt-paritaet-stepper">
                    <button type="button" class="zt-paritaet-stepper__knopf" aria-label={`Zahl ${i + 1} verringern`} onClick={() => aendere(i, -1)}>
                      <Icon name="minus" groesse={12} />
                    </button>
                    <span class={`mono ${empf[i] !== w ? 'zt-paritaet-anders' : ''}`}>{empf[i]}</span>
                    <button type="button" class="zt-paritaet-stepper__knopf" aria-label={`Zahl ${i + 1} erhöhen`} onClick={() => aendere(i, 1)}>
                      <Icon name="plus" groesse={12} />
                    </button>
                  </span>
                </td>
              </tr>
            ))}
            <tr class="zt-paritaet-tabelle__summe">
              <th>Prüfsumme</th>
              <td class="mono">{summe}</td>
              <td class="mono">{summe}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <span class="zt-summe">
        Empfänger rechnet: {empf.join(' + ')} =<b>{neu}</b>
      </span>
      {neu !== summe ? (
        <Urteil ton="fehler" icon="circle-x">
          {neu} ≠ {summe}: Fehler erkannt.
        </Urteil>
      ) : geaendert ? (
        <Urteil ton="warn" icon="triangle-alert">
          {neu} = {summe}: kein Fehler erkannt – obwohl Zahlen verfälscht sind.
        </Urteil>
      ) : (
        <Urteil ton="gut" icon="circle-check">
          {neu} = {summe}: kein Fehler erkannt.
        </Urteil>
      )}
      <div class="zt-bild__knoepfe">
        <span class="zt-bild__hinweis">Mit − und + eine Störung beim Empfänger einbauen</span>
        {geaendert && (
          <Knopf variante="geist" groesse="s" icon="rotate-ccw" onClick={() => setEmpf(werte)}>
            Störung weg
          </Knopf>
        )}
      </div>
    </>
  );
}

// ---------- Ean: Prüfziffer einer Artikelnummer ----------

export function Ean({ nummer = '4006381333931' }) {
  const [ziffern, setZiffern] = useState(bitsAus(nummer));
  const vorn = ziffern.slice(0, 12);
  const soll = eanPruefziffer(vorn);
  const steht = ziffern[12];
  const geaendert = ziffern.some((z, i) => z !== Number(nummer[i]));
  return (
    <>
      <div class="zt-paritaet-ean" role="group" aria-label="Artikelnummer, Ziffer antippen zählt hoch">
        {ziffern.map((z, i) => (
          <div key={i} class="zt-paritaet-ean__spalte">
            <span class="zt-paritaet-ean__gewicht">{i < 12 ? `·${i % 2 ? 3 : 1}` : 'P'}</span>
            <button
              type="button"
              class={`zt-paritaet-ean__ziffer mono ${i === 12 ? 'zt-paritaet-ean__ziffer--p' : ''} ${z !== Number(nummer[i]) ? 'zt-paritaet-anders' : ''}`}
              aria-label={`Ziffer ${i + 1}: ${z}`}
              onClick={() => setZiffern(ziffern.map((x, j) => (j === i ? (x + 1) % 10 : x)))}
            >
              {z}
            </button>
          </div>
        ))}
      </div>
      <span class="zt-paritaet-info">Kasse rechnet aus den ersten 12 Ziffern: Prüfziffer {soll}</span>
      {soll === steht ? (
        <Urteil ton={geaendert ? 'warn' : 'gut'} icon={geaendert ? 'triangle-alert' : 'circle-check'}>
          Prüfziffer {steht} passt{geaendert ? ' – obwohl Ziffern verändert sind.' : ': Nummer angenommen.'}
        </Urteil>
      ) : (
        <Urteil ton="fehler" icon="circle-x">
          Aufgedruckt ist {steht}, berechnet {soll}: Lesefehler erkannt.
        </Urteil>
      )}
      <div class="zt-bild__knoepfe">
        <span class="zt-bild__hinweis">Ziffer antippen = Lesefehler (zählt um 1 hoch)</span>
        {geaendert && (
          <Knopf variante="geist" groesse="s" icon="rotate-ccw" onClick={() => setZiffern(bitsAus(nummer))}>
            zurück
          </Knopf>
        )}
      </div>
    </>
  );
}

// ---------- Frame: Ethernet-Frame mit Frame Check Sequence (CRC-32) ----------

const FELDER = [
  { name: 'Präambel', groesse: '8 Byte' },
  { name: 'Ziel-MAC', groesse: '6 Byte' },
  { name: 'Quell-MAC', groesse: '6 Byte' },
  { name: 'Typ', groesse: '2 Byte' },
  { name: 'Nutzdaten', groesse: '46–1.500 Byte', breit: true },
  { name: 'FCS', groesse: '4 Byte', fcs: true },
];
const hex8 = (n) => {
  const h = n.toString(16).toUpperCase().padStart(8, '0');
  return `${h.slice(0, 4)} ${h.slice(4)}`;
};

export function Frame({ text = 'Hallo' }) {
  const codes = [...text].map((c) => c.charCodeAt(0));
  const fcs = crc32(codes);
  const [gekippt, setGekippt] = useState([]);
  const empf = codes.map((c, i) => (gekippt.includes(i) ? c ^ 1 : c));
  const neu = crc32(empf);
  const tipp = (i) => setGekippt(gekippt.includes(i) ? gekippt.filter((x) => x !== i) : [...gekippt, i]);
  return (
    <>
      <div class="zt-paritaet-frame" aria-label="Aufbau eines Ethernet-Frames">
        {FELDER.map((f) => (
          <div key={f.name} class={`zt-paritaet-feld ${f.breit ? 'zt-paritaet-feld--breit' : ''} ${f.fcs ? 'zt-paritaet-feld--fcs' : ''}`}>
            <span class="zt-paritaet-feld__name">{f.name}</span>
            <span class="zt-paritaet-feld__groesse">{f.groesse}</span>
          </div>
        ))}
      </div>
      <div class="zt-paritaet-seite">
        <span class="zt-paritaet-seite__name">
          <Icon name="monitor" groesse={14} /> Empfangene Nutzdaten (vereinfacht)
        </span>
        <div class="zt-paritaet-reihe" role="group" aria-label="Nutzdaten, antippen kippt ein Bit">
          {empf.map((c, i) => (
            <div key={i} class="zt-paritaet-spalte">
              <span class={`zt-paritaet-marke ${gekippt.includes(i) ? 'zt-paritaet-marke--kipp' : ''}`}>{gekippt.includes(i) ? <Icon name="zap" groesse={12} /> : ''}</span>
              <button type="button" class={`zt-bit ${gekippt.includes(i) ? 'zt-bit--c' : 'zt-bit--b'}`} aria-pressed={gekippt.includes(i)} aria-label={`Zeichen ${String.fromCharCode(c)}`} onClick={() => tipp(i)}>
                {String.fromCharCode(c)}
              </button>
            </div>
          ))}
        </div>
      </div>
      <dl class="zt-paritaet-vergleich mono">
        <div>
          <dt>FCS im Frame</dt>
          <dd>{hex8(fcs)}</dd>
        </div>
        <div>
          <dt>Empfänger rechnet</dt>
          <dd class={neu !== fcs ? 'zt-paritaet-anders' : ''}>{hex8(neu)}</dd>
        </div>
      </dl>
      {neu === fcs ? (
        <Urteil ton="gut" icon="circle-check">
          Gleich: Frame wird angenommen.
        </Urteil>
      ) : (
        <Urteil ton="fehler" icon="circle-x">
          Verschieden: Frame wird verworfen ({gekippt.length} {gekippt.length === 1 ? 'Bit' : 'Bits'} gekippt).
        </Urteil>
      )}
      <span class="zt-bild__hinweis">Zeichen antippen = ein Bit kippt · CRC-32 hier nur über die Nutzdaten</span>
    </>
  );
}
