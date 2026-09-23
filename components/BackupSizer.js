'use client';

import { useEffect, useRef, useState } from 'react';
import { Arrow } from './icons';

const APPLIANCES = [
  { id: 'led', name: 'LED lights', w: 10, n: 6 },
  { id: 'fan', name: 'Ceiling fans', w: 75, n: 3 },
  { id: 'tv', name: 'Television', w: 100, n: 1 },
  { id: 'wifi', name: 'Wi-Fi router', w: 15, n: 1 },
  { id: 'lap', name: 'Laptop', w: 65, n: 0 },
  { id: 'fridge', name: 'Refrigerator', w: 200, n: 0 },
  { id: 'cooler', name: 'Air cooler', w: 180, n: 0 },
  { id: 'pump', name: 'Water pump', w: 370, n: 0 },
];
const INVERTERS = [600, 900, 1100, 1500, 2000, 2500, 3500, 5000];

// Rough rule of thumb, shown on the page as an estimate only.
function sizeBackup(counts, hours) {
  const load = APPLIANCES.reduce((s, a) => s + a.w * counts[a.id], 0);
  const va = INVERTERS.find((v) => v >= load / 0.75) || 5000;
  const volts = va <= 1100 ? 12 : va <= 2500 ? 24 : 48;
  const whNeeded = (load * hours) / 0.7; // ~70% usable after inverter losses and depth of discharge
  const ah = Math.max(100, Math.ceil(whNeeded / volts / 50) * 50);
  const batteries = volts / 12;
  const share = Math.min(1, whNeeded / (150 * 12 * batteries));
  return { load, va, volts, ah, batteries, share };
}

// Rolls a number to its new value over 450ms.
function Rolling({ value, unit }) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return setShown(value);
    const start = from.current, t0 = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / 450);
      const v = start + (value - start) * (1 - Math.pow(1 - t, 3));
      from.current = v;
      setShown(v);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <b>{Math.round(shown).toLocaleString('en-IN')}<small>{unit}</small></b>;
}

export default function BackupSizer() {
  const [counts, setCounts] = useState(() => Object.fromEntries(APPLIANCES.map((a) => [a.id, a.n])));
  const [hours, setHours] = useState(4);
  const { load, va, volts, ah, batteries, share } = sizeBackup(counts, hours);

  const bump = (id, d) => setCounts((c) => ({ ...c, [id]: Math.max(0, Math.min(12, c[id] + d)) }));

  function prefill() {
    const picked = APPLIANCES.filter((a) => counts[a.id]).map((a) => `${counts[a.id]} ${a.name.toLowerCase()}`).join(', ');
    const req = `Backup sizer: ${picked}; ${hours} h backup. Suggested ${va} VA inverter, ${ah} Ah at ${volts} V.`;
    window.dispatchEvent(new CustomEvent('quote:prefill', { detail: { req, kind: 'home' } }));
  }

  return (
    <div className="bezel sizer" data-rv>
      <div className="core">
        <div className="sz-in">
          <div className="apps">
            {APPLIANCES.map((a) => (
              <div className="app" key={a.id}>
                <span className="nm">{a.name}<small>{a.w} W each</small></span>
                <span className="step">
                  <button type="button" aria-label={`Fewer ${a.name}`} onClick={() => bump(a.id, -1)}>−</button>
                  <output>{counts[a.id]}</output>
                  <button type="button" aria-label={`More ${a.name}`} onClick={() => bump(a.id, 1)}>+</button>
                </span>
              </div>
            ))}
          </div>
          <div className="field">
            <span className="fl">Backup needed</span>
            <div className="seg" role="group" aria-label="Hours of backup">
              {[2, 4, 6].map((h) => (
                <button key={h} type="button" aria-pressed={hours === h} onClick={() => setHours(h)}>{h} hours</button>
              ))}
            </div>
          </div>
        </div>
        <div className="sz-out" aria-live="polite">
          <span className="lbl">Suggested setup</span>
          <div className="readout">
            <div><span className="lbl">Running load</span><Rolling value={load} unit="W" /></div>
            <div><span className="lbl">Inverter</span><Rolling value={va} unit="VA" /></div>
            <div><span className="lbl">Battery bank</span><Rolling value={ah} unit="Ah" /></div>
            <div><span className="lbl">System</span><Rolling value={volts} unit="V" /></div>
          </div>
          <div className="meter">
            <span className="lbl">Share of a 150 Ah battery used</span>
            <div className="bar" aria-hidden="true">
              {Array.from({ length: 10 }, (_, i) => <i key={i} style={{ '--i': i }} className={i < Math.round(share * 10) ? 'on' : undefined} />)}
            </div>
            <p className="sz-note">
              {load === 0
                ? 'Add something to run during a cut.'
                : `About ${batteries > 1 ? `${batteries} × ` : ''}${ah} Ah batteries at ${volts} V for ${hours} hours. An estimate only: we check your wiring and usage before quoting.`}
            </p>
          </div>
          <a className="btn btn-dark" href="#contact" onClick={prefill}>
            Get a quote for this setup<span className="isle"><Arrow /></span>
          </a>
        </div>
      </div>
    </div>
  );
}
