// Bilder zum Mitmachen für Zahlensysteme – im Unterricht (Rahmen: <Abbildung> aus lernsystem/bausteine.jsx) und zum Teil
// im Zahlen-Labor. Jedes Bild liefert nur seinen Inhalt; die Rechnung dahinter steht in ../rechnen.js (getestet).
//   Stellenwert (Spalten Basis hoch n, Ziffern hochzählen) · Lesen (Ziffer · Stellenwert, Bits antippen) · Schreiben
//   (Restwert-Leiter Schritt für Schritt) · Gruppen (Vierer-/Dreiergruppen als Hex-/Oktalziffer) · Potenzen (2ⁿ)
//   Lampen · Zaehlwerk (Übertrag, beschriftbar) · PasstEsNoch · Kombinationen · HexTabelle · JeBasis (eine Ziffernfolge,
//   vier Basen: Schreibweise und Wert)

import { Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { Icon, Knopf, Zahl } from '../../../../ui/bausteine.jsx';
import { z, hoch, gruppiert, stellen, restSchritte, bitGruppen, leseBasis, zaehlwerk, passtSchritte, jeBasis } from '../rechnen.js';
import { Segmente } from '../bausteine.jsx';

const NAME = { 2: 'Binär', 8: 'Oktal', 10: 'Dezimal', 16: 'Hex' };
const ZIFFERN_TEXT = { 2: '0 und 1', 8: '0 bis 7', 10: '0 bis 9', 16: '0 bis 9 und A bis F' };
// Farben der Bitgruppen von rechts: grün, blau, orange (unabhängig vom Akzent des Lernraums)
export const GRUPPEN_FARBEN = ['a', 'b', 'c'];
const zahl = (x) => z(Math.round(x));


// Hex-Buchstaben einer Ziffernfolge als Hinweis: „C = 12 · F = 15“
function buchstaben(ziffern) {
  return [...new Set([...ziffern].filter((c) => /[A-F]/.test(c)))].map((c) => `${c} = ${parseInt(c, 16)}`).join(' · ');
}

// ---------- Stellenwert: Spalten mit Basis hoch n, Ziffern zum Hochzählen ----------

const STELLEN_BEISPIEL = { 10: '352', 2: '1101', 8: '754', 16: '2F' };

export function Stellenwert() {
  const [basis, setBasis] = useState(10);
  const [ziffern, setZiffern] = useState(STELLEN_BEISPIEL[10]);
  const s = stellen(ziffern, basis);
  const summe = s.reduce((a, x) => a + x.produkt, 0);
  const hochzaehlen = (i) => setZiffern(ziffern.slice(0, i) + ((s[i].wert + 1) % basis).toString(basis).toUpperCase() + ziffern.slice(i + 1));
  return (
    <>
      <Segmente
        optionen={[10, 2, 8, 16].map((b) => ({ wert: String(b), text: `Basis ${b}` }))}
        wert={String(basis)}
        onWahl={(w) => {
          setBasis(Number(w));
          setZiffern(STELLEN_BEISPIEL[w]);
        }}
        label="Basis"
      />
      <div class="zt-stellen">
        {s.map((st, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <span class="zt-stellen__faktor" aria-hidden="true">
                <Icon name="arrow-left" groesse={12} />· {basis}
              </span>
            )}
            <div class="zt-stelle">
              <span class="zt-stelle__potenz">
                {basis}
                {hoch(st.potenz)}
              </span>
              <span class="zt-stelle__wert">{z(st.stellenwert)}</span>
              <button type="button" class="zt-ziffer" onClick={() => hochzaehlen(i)} aria-label={`Ziffer ${st.ziffer} an der Stelle ${z(st.stellenwert)}, antippen zum Hochzählen`}>
                {st.ziffer}
              </button>
              <span class="zt-stelle__produkt">{z(st.produkt)}</span>
            </div>
          </Fragment>
        ))}
      </div>
      <div class="zt-summe">
        {s.map((st) => z(st.produkt)).join(' + ')} =<b>{z(summe)}</b>
      </div>
      <span class="zt-bild__hinweis">
        Ziffer antippen zählt hoch. Nach {(basis - 1).toString(basis).toUpperCase()} kommt wieder 0{basis === 16 ? ' · A = 10 … F = 15' : ''}.
      </span>
    </>
  );
}

// ---------- Lesen: Ziffern mit Stellenwerten, Produkte, Summe ----------

const LESEN_LAENGE = { 2: 12, 8: 4, 16: 3 };

export function Lesen({ basis, start }) {
  const [text, setText] = useState(basis === 2 ? gruppiert(start) : start);
  const roh = text.toUpperCase().replace(/\s/g, '');
  const gueltig = leseBasis(roh, basis) !== null && roh.length <= LESEN_LAENGE[basis];
  const s = gueltig ? stellen(roh, basis) : [];
  const summe = s.reduce((a, x) => a + x.produkt, 0);
  const sichtbar = basis === 2 ? s.filter((x) => x.wert) : s;
  const umschalten = (i) => {
    const neu = [...roh];
    neu[i] = neu[i] === '1' ? '0' : '1';
    setText(gruppiert(neu.join('')));
  };
  return (
    <>
      <label class="zt-bild__eingabe">
        {NAME[basis]}
        <input class="feld feld--mono" value={text} spellcheck={false} autoComplete="off" onInput={(e) => setText(e.currentTarget.value)} />
      </label>
      {!gueltig ? (
        <span class="zt-bild__hinweis zt-bild__hinweis--warn">
          {NAME[basis]} kennt nur die Ziffern {ZIFFERN_TEXT[basis]}, hier höchstens {LESEN_LAENGE[basis]} Stellen.
        </span>
      ) : (
        <>
          <div class="zt-bits">
            {s.map((st, i) => (
              <div key={i} class="zt-bits__spalte">
                <span class="zt-bits__potenz">
                  {basis}
                  {hoch(st.potenz)}
                </span>
                <span class="zt-bits__wert">{z(st.stellenwert)}</span>
                {basis === 2 ? (
                  <button type="button" class={`zt-bit ${st.wert ? 'zt-bit--a' : ''}`} aria-pressed={!!st.wert} aria-label={`Bit ${z(st.stellenwert)}`} onClick={() => umschalten(i)}>
                    {st.ziffer}
                  </button>
                ) : (
                  <span class="zt-bit zt-bit--a">{st.ziffer}</span>
                )}
                <span class={`zt-bits__produkt ${st.wert ? '' : 'zt-bits__produkt--leer'}`}>{st.wert ? z(st.produkt) : '·'}</span>
              </div>
            ))}
          </div>
          <div class="zt-summe">
            {sichtbar.length ? sichtbar.map((x) => z(x.produkt)).join(' + ') : '0'} =
            <b>
              <Zahl wert={summe} format={zahl} />
            </b>
          </div>
          <span class="zt-bild__hinweis">
            {basis === 2 ? 'Bits antippen zum Umschalten' : buchstaben(roh) || 'Oben der Stellenwert, unten Ziffer · Stellenwert'}
          </span>
        </>
      )}
    </>
  );
}

// ---------- Schreiben: Restwert-Leiter, die Reste wandern ins Ergebnis ----------

export function Schreiben({ basis, start, max }) {
  const [text, setText] = useState(String(start));
  const [schritt, setSchritt] = useState(null); // null: alles zeigen, sonst Anzahl sichtbarer Schritte
  const n = Math.min(Number(text.replace(/\D/g, '')) || 0, max);
  const schritte = restSchritte(n, basis);
  const sichtbar = schritt ?? schritte.length;
  const fertig = sichtbar >= schritte.length;
  const ziffer = (r) => r.toString(basis).toUpperCase();
  const ergebnis = schritte.map((s) => ziffer(s.r)).reverse();

  return (
    <>
      <label class="zt-bild__eingabe">
        Dezimal
        <input
          class="feld feld--mono"
          value={text}
          inputMode="numeric"
          autoComplete="off"
          onInput={(e) => {
            setText(e.currentTarget.value);
            setSchritt(null);
          }}
        />
      </label>
      <div class="zt-leiter">
        {schritte.slice(0, sichtbar).map((s, i) => (
          <div key={`${n}-${i}`} class={`zt-leiter__zeile ${schritt !== null && i === sichtbar - 1 ? 'zt-leiter__zeile--neu' : ''}`}>
            <span class="zt-leiter__rechnung">
              {z(s.x)} ÷ {basis} = <span class="zt-leiter__q">{z(s.q)}</span>
            </span>
            <span class="zt-rest">
              {ziffer(s.r)}
              <small>{i + 1}</small>
            </span>
            <span class="zt-leiter__notiz">{s.r > 9 ? `Rest ${s.r}` : 'Rest'}</span>
          </div>
        ))}
      </div>
      <div class="zt-ergebnis-zeile" aria-label={`Ergebnis ${ergebnis.join('')}`}>
        {ergebnis.map((c, j) => {
          const nr = ergebnis.length - j; // Schritt, aus dem diese Ziffer stammt
          const da = nr <= sichtbar;
          return (
            <span key={j} class={`zt-slot ${da ? '' : 'zt-slot--leer'} ${schritt !== null && nr === sichtbar ? 'zt-slot--neu' : ''} ${basis === 2 && j > 0 && (ergebnis.length - j) % 4 === 0 ? 'zt-slot--luecke' : ''}`}>
              {da ? c : ''}
              <small>{nr}</small>
            </span>
          );
        })}
      </div>
      <span class="zt-bild__hinweis">
        <Icon name="arrow-up" groesse={12} /> Reste von unten nach oben lesen: Rest 1 steht ganz rechts
      </span>
      <div class="zt-bild__knoepfe">
        {schritt === null ? (
          <Knopf groesse="s" icon="play" onClick={() => setSchritt(1)}>
            Schritt für Schritt
          </Knopf>
        ) : (
          <>
            <Knopf groesse="s" variante={fertig ? 'zweit' : 'primaer'} icon="step-forward" disabled={fertig} onClick={() => setSchritt(sichtbar + 1)}>
              {fertig ? 'Fertig' : 'Nächster Schritt'}
            </Knopf>
            <Knopf groesse="s" variante="geist" icon="rotate-ccw" onClick={() => setSchritt(1)}>
              Von vorn
            </Knopf>
            <Knopf groesse="s" variante="geist" onClick={() => setSchritt(null)}>
              Alles zeigen
            </Knopf>
          </>
        )}
      </div>
    </>
  );
}

// ---------- Gruppen: Bits antippen, jede Gruppe ist eine Ziffer ----------

export function Gruppen({ breite, start }) {
  const basis = breite === 4 ? 16 : 8;
  const stellenzahl = breite === 4 ? 8 : 9;
  const [n, setN] = useState(start);
  const gruppen = bitGruppen(n, breite, stellenzahl);
  const gewichte = Array.from({ length: breite }, (_, i) => 2 ** (breite - 1 - i));
  return (
    <>
      <div class="zt-gruppen">
        {gruppen.map((g, gi) => {
          const farbe = GRUPPEN_FARBEN[(gruppen.length - 1 - gi) % GRUPPEN_FARBEN.length];
          const teile = gewichte.filter((_, bi) => g.bits[bi] === '1');
          return (
            <div key={gi} class={`zt-gruppe zt-gruppe--${farbe}`}>
              <div class="zt-gruppe__gewichte">
                {gewichte.map((w) => (
                  <span key={w}>{w}</span>
                ))}
              </div>
              <div class="zt-gruppe__bits">
                {[...g.bits].map((b, bi) => {
                  const pos = (gruppen.length - 1 - gi) * breite + (breite - 1 - bi);
                  return (
                    <button key={bi} type="button" class={`zt-bit ${b === '1' ? `zt-bit--${farbe}` : ''}`} aria-pressed={b === '1'} aria-label={`Bit ${z(2 ** pos)}`} onClick={() => setN(n ^ (2 ** pos))}>
                      {b}
                    </button>
                  );
                })}
              </div>
              <span class="zt-gruppe__klammer" />
              <span class="zt-gruppe__rechnung">{teile.length ? `${teile.join(' + ')} = ${g.wert}` : '0'}</span>
              <span class="zt-gruppe__ziffer">{g.ziffer}</span>
            </div>
          );
        })}
      </div>
      <div class="zt-summe">
        {NAME[basis]} {gruppen.map((g) => g.ziffer).join('')} = dezimal<b>{z(n)}</b>
      </div>
      {basis === 16 ? (
        <div class="zt-hextafel">
          {'ABCDEF'.split('').map((c, i) => (
            <span key={c} class={gruppen.some((g) => g.ziffer === c) ? 'zt-hextafel--an' : ''}>
              {c} = {10 + i}
            </span>
          ))}
        </div>
      ) : (
        <span class="zt-bild__hinweis">Bits antippen zum Umschalten</span>
      )}
    </>
  );
}

// ---------- Zweierpotenzen: ein Punkteraster, das sich mit jedem Bit verdoppelt ----------

const MAX_PUNKTE = 256;

export function Potenzen({ start }) {
  const [n, setN] = useState(start);
  const werte = 2 ** n;
  const punkte = Math.min(werte, MAX_PUNKTE);
  const jePunkt = werte / punkte;
  const spalten = 2 ** Math.ceil(Math.log2(punkte) / 2);
  return (
    <>
      <div class="zt-potenz">
        <span class="zt-potenz__gross">
          {n} Bit → <Zahl wert={werte} format={zahl} />
        </span>
        <span class="zt-potenz__klein">
          Werte von 0 bis {z(werte - 1)} · 2{hoch(n)} = {z(werte)}
        </span>
      </div>
      <div class="zt-potenz__regler">
        <button type="button" class="symbolknopf symbolknopf--s" aria-label="Ein Bit weniger" disabled={n <= 1} onClick={() => setN(n - 1)}>
          <Icon name="minus" groesse={15} />
        </button>
        <input type="range" min="1" max="16" value={n} aria-label="Anzahl Bit" onInput={(e) => setN(Number(e.currentTarget.value))} />
        <button type="button" class="symbolknopf symbolknopf--s" aria-label="Ein Bit mehr" disabled={n >= 16} onClick={() => setN(n + 1)}>
          <Icon name="plus" groesse={15} />
        </button>
      </div>
      <div class="zt-punkte" style={{ gridTemplateColumns: `repeat(${spalten}, 1fr)`, width: `${Math.min(spalten * 14, 224)}px` }} aria-hidden="true">
        {Array.from({ length: punkte }, (_, i) => (
          <span key={i} class={i >= punkte / 2 ? 'zt-punkte--neu' : ''} />
        ))}
      </div>
      <span class="zt-bild__hinweis">
        {jePunkt === 1 ? 'Jeder Punkt ist ein Wert.' : `Jeder Punkt steht für ${z(jePunkt)} Werte.`} Hell: die Hälfte, die das {n}. Bit dazubringt.
      </span>
      <div class="zt-potenzen">
        {Array.from({ length: 16 }, (_, i) => i + 1).map((i) => (
          <button key={i} type="button" class={i === n ? 'zt-potenzen--an' : ''} onClick={() => setN(i)}>
            2{hoch(i)} = {z(2 ** i)}
          </button>
        ))}
      </div>
    </>
  );
}

// ---------- Lampen: an = 1, aus = 0 ----------

export function Lampen({ anzahl = 1 }) {
  const [an, setAn] = useState(() => Array(anzahl).fill(false));
  return (
    <>
      <div class="zt-lampen">
        {an.map((x, i) => (
          <button
            key={i}
            type="button"
            class={`zt-lampe ${x ? 'zt-lampe--an' : ''}`}
            aria-pressed={x}
            aria-label={`Lampe ${i + 1}: ${x ? 'an' : 'aus'}`}
            onClick={() => setAn(an.map((y, j) => (j === i ? !y : y)))}
          >
            <span class="zt-lampe__birne" />
            <span class="zt-lampe__bit mono">{x ? 1 : 0}</span>
            <span class="zt-lampe__text">{x ? 'an' : 'aus'}</span>
          </button>
        ))}
      </div>
      <span class="zt-bild__hinweis">Antippen zum Ein- und Ausschalten</span>
    </>
  );
}

// ---------- Zählwerk: Rädchen mit den Ziffern der Basis, +1 mit Übertrag ----------
// beschriftet: die Fachbegriffe am Bild – über jedem Rädchen „Stelle n“ (von rechts ab 0), die Zahl darauf ist die Ziffer;
// mit stellenwerte zusätzlich der Stellenwert jeder Stelle

export function Zaehlwerk({ basis, stellen, start = 0, spruenge = [], dezimal = false, stellenwerte = false, beschriftet = false }) {
  const [n, setN] = useState(start);
  const [vorher, setVorher] = useState(null);
  const max = basis ** stellen;
  const ziffern = zaehlwerk(n, basis, stellen);
  const alt = vorher === null ? ziffern : zaehlwerk(vorher, basis, stellen);
  const geaendert = ziffern.map((c, i) => c !== alt[i]);
  const uebertrag = vorher !== null && geaendert.filter(Boolean).length > 1;
  const setze = (neu) => {
    setVorher(n);
    setN(((neu % max) + max) % max);
  };
  // Verlauf: die letzten Zahlen bis n (binär mit Dezimalwert)
  const verlauf = dezimal ? Array.from({ length: Math.min(n, 8) + 1 }, (_, i) => n - Math.min(n, 8) + i) : [];
  return (
    <>
      <div class="zt-zaehlwerk">
        {ziffern.map((c, i) => (
          <div key={i} class="zt-rad">
            {beschriftet && <span class="zt-rad__stelle">Stelle {stellen - 1 - i}</span>}
            {stellenwerte && <span class="zt-rad__wert mono">{z(basis ** (stellen - 1 - i))}</span>}
            <span key={`${i}-${c}-${n}`} class={`zt-rad__ziffer mono ${geaendert[i] ? 'zt-rad__ziffer--neu' : ''}`}>
              {c}
            </span>
          </div>
        ))}
        {dezimal && (
          <span class="zt-zaehlwerk__dezimal">
            <Icon name="arrow-right" groesse={16} /> die Zahl <b class="mono">{n}</b>
          </span>
        )}
      </div>
      {beschriftet && (
        <p class="zt-zaehlwerk__legende">
          Jedes Rädchen ist eine <b>Stelle</b> (von rechts gezählt, ab 0) · was darauf steht, ist eine <b>Ziffer</b>
          {stellenwerte && (
            <>
              {' '}
              · oben der <b>Stellenwert</b>
            </>
          )}
        </p>
      )}
      <p class={`zt-zaehlwerk__meldung ${uebertrag ? 'zt-zaehlwerk__meldung--an' : ''}`} role="status">
        {uebertrag ? `Übertrag! Ein Rädchen war voll (${(basis - 1).toString(basis).toUpperCase()}), springt auf 0 und dreht das linke weiter.` : ' '}
      </p>
      <div class="zt-bild__knoepfe">
        <Knopf variante="primaer" groesse="s" icon="plus" onClick={() => setze(n + 1)}>
          1 weiterzählen
        </Knopf>
        {spruenge.map((s) => (
          <Knopf key={s} variante="zweit" groesse="s" onClick={() => setze(s)}>
            Auf {basis === 10 ? s : zaehlwerk(s, basis, stellen).join('')} stellen
          </Knopf>
        ))}
        <Knopf variante="geist" groesse="s" icon="rotate-ccw" onClick={() => setze(0)}>
          Auf 0
        </Knopf>
      </div>
      {dezimal && (
        <div class="zt-verlauf mono" aria-label="Zählfolge">
          {verlauf.map((x) => (
            <span key={x} class={x === n ? 'zt-verlauf--jetzt' : ''}>
              <b>{x.toString(basis)}</b>
              <small>{x}</small>
            </span>
          ))}
        </div>
      )}
    </>
  );
}

// ---------- Passt es noch? Stellenwerte von links, je Schritt eine Zeile ----------

export function PasstEsNoch({ n, bits = 8 }) {
  const schritte = passtSchritte(n, bits);
  const [sichtbar, setSichtbar] = useState(1);
  const fertig = sichtbar >= schritte.length;
  const ergebnis = schritte.map((s, i) => (i < sichtbar ? (s.passt ? '1' : '0') : '·')).join('');
  return (
    <>
      <table class="zt-passt">
        <thead>
          <tr>
            <th>übrig</th>
            <th>Stellenwert</th>
            <th>passt?</th>
            <th>Bit</th>
            <th>übrig danach</th>
          </tr>
        </thead>
        <tbody>
          {schritte.slice(0, sichtbar).map((s, i) => (
            <tr key={i} class={`erscheinen ${s.passt ? 'zt-passt--ja' : ''}`}>
              <td class="mono">{z(s.rest)}</td>
              <td class="mono">{z(s.stellenwert)}</td>
              <td>{s.passt ? 'ja' : 'nein'}</td>
              <td class="mono zt-passt__bit">{s.passt ? 1 : 0}</td>
              <td class="mono">{s.passt ? `${z(s.rest)} − ${z(s.stellenwert)} = ${z(s.danach)}` : z(s.danach)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="zt-passt__ergebnis mono">
        {z(n)} = {gruppiert(ergebnis)}
      </div>
      <div class="zt-bild__knoepfe">
        <Knopf variante={fertig ? 'zweit' : 'primaer'} groesse="s" icon="step-forward" disabled={fertig} onClick={() => setSichtbar(sichtbar + 1)}>
          {fertig ? 'Fertig' : 'Nächster Stellenwert'}
        </Knopf>
        {!fertig && (
          <Knopf variante="geist" groesse="s" onClick={() => setSichtbar(schritte.length)}>
            Alles zeigen
          </Knopf>
        )}
        {sichtbar > 1 && (
          <Knopf variante="geist" groesse="s" icon="rotate-ccw" onClick={() => setSichtbar(1)}>
            Von vorn
          </Knopf>
        )}
      </div>
    </>
  );
}

// ---------- Alle Kombinationen aus 1, 2, 3 Bit ----------

export function Kombinationen({ bis = 3 }) {
  return (
    <>
      <div class="zt-kombis">
        {Array.from({ length: bis }, (_, i) => i + 1).map((n) => (
          <div key={n} class="zt-kombis__spalte">
            <span class="zt-kombis__titel">
              {n} Bit
            </span>
            <div class="zt-kombis__liste mono">
              {Array.from({ length: 2 ** n }, (_, k) => (
                <span key={k} class={k >= 2 ** (n - 1) && n > 1 ? 'zt-kombis--neu' : ''}>
                  {k.toString(2).padStart(n, '0')}
                </span>
              ))}
            </div>
            <span class="zt-kombis__zahl">
              2{hoch(n)} = <b>{2 ** n}</b>
            </span>
          </div>
        ))}
      </div>
      <span class="zt-bild__hinweis">Jede Spalte enthält die vorige zweimal: oben mit einer 0 davor, grün mit einer 1 davor.</span>
    </>
  );
}

// ---------- Hex-Tabelle: alle 16 Vierergruppen ----------

export function HexTabelle() {
  return (
    <>
      <div class="zt-hex">
        {Array.from({ length: 16 }, (_, k) => (
          <span key={k} class={`zt-hex__feld ${k >= 10 ? 'zt-hex__feld--buchstabe' : ''}`}>
            <span class="mono zt-hex__bits">{k.toString(2).padStart(4, '0')}</span>
            <b class="mono">{k.toString(16).toUpperCase()}</b>
            <small>{k}</small>
          </span>
        ))}
      </div>
      <span class="zt-bild__hinweis">Oben die 4 Bit, groß die Hex-Ziffer, klein der Dezimalwert</span>
    </>
  );
}

// ---------- Je Basis: dieselben Ziffern, vier Werte – und wie man die Basis kennzeichnet ----------

const TIEF = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
const tief = (n) => [...String(n)].map((c) => TIEF[Number(c)]).join('');
const PRAEFIX = { 2: '0b', 8: '0o', 10: '', 16: '0x' };

export function JeBasis({ start = '100' }) {
  const [text, setText] = useState(start);
  const ziffern = text.replace(/\s/g, '').toUpperCase().slice(0, 6);
  const zeilen = jeBasis(ziffern);
  return (
    <>
      <label class="zt-bild__eingabe">
        Ziffern
        <input class="feld feld--mono" value={text} maxLength={6} spellcheck={false} autoComplete="off" onInput={(e) => setText(e.currentTarget.value)} />
      </label>
      <div class="zt-jebasis">
        {zeilen.map(({ basis, wert, weg }) => (
          <div key={basis} class={`zt-jebasis__zeile ${wert === null ? 'zt-jebasis__zeile--nein' : ''}`}>
            <span class="zt-jebasis__schreib mono">
              <span>
                {ziffern || '–'}
                <span class="zt-jebasis__basis">{tief(basis)}</span>
              </span>
              {PRAEFIX[basis] && (
                <small>
                  {PRAEFIX[basis]}
                  {ziffern}
                </small>
              )}
            </span>
            <span class="zt-jebasis__name">
              {NAME[basis]} · Basis {basis}
            </span>
            {wert === null ? (
              <span class="zt-jebasis__weg">{ziffern ? `Ziffern hier nur ${ZIFFERN_TEXT[basis]}` : ''}</span>
            ) : (
              <span class="zt-jebasis__weg mono">{basis === 10 ? '' : `${weg} =`}</span>
            )}
            <b class="zt-jebasis__wert mono">{wert === null ? '–' : z(wert)}</b>
          </div>
        ))}
      </div>
      <span class="zt-bild__hinweis">Ziffern ändern: Dieselbe Ziffernfolge hat in jeder Basis einen anderen Wert</span>
    </>
  );
}
