'use client';

import { useEffect, useState } from 'react';
import { Arrow } from './icons';
import { WA_NUMBER } from './site';

export default function ContactForm() {
  const [kind, setKind] = useState('home');
  const [req, setReq] = useState('');
  const [error, setError] = useState('');

  // Filled in from the backup sizer, and from the homes / businesses cards ([data-kind] links).
  useEffect(() => {
    const onPrefill = (e) => { setReq(e.detail.req); setKind(e.detail.kind); };
    const onClick = (e) => { const k = e.target.closest('[data-kind]')?.dataset.kind; if (k) setKind(k); };
    addEventListener('quote:prefill', onPrefill);
    document.addEventListener('click', onClick);
    return () => { removeEventListener('quote:prefill', onPrefill); document.removeEventListener('click', onClick); };
  }, []);

  function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.replace(/\D/g, '');
    if (!name || phone.length < 10) {
      setError(!name ? 'Add your name so we know who to ask for.' : 'Enter a 10-digit phone number so we can call you back.');
      (!name ? form.elements.name : form.elements.phone).focus();
      return;
    }
    setError('');
    const text = [
      'Hello Energy Solutions, I would like a quote.',
      `Name: ${name}`,
      `Phone: ${form.elements.phone.value.trim()}`,
      `For: ${kind === 'home' ? 'Home' : 'Business'}`,
      `Requirement: ${req}`,
    ].join('\n');
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  }

  return (
    <form className="bezel" noValidate onSubmit={submit} data-rv>
      <div className="core">
        <p className="form-title">Request a quote</p>
        <div className="two">
          <div className="field"><label htmlFor="f-name">Name</label><input id="f-name" name="name" autoComplete="name" required /></div>
          <div className="field"><label htmlFor="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required /></div>
        </div>
        <div className="field">
          <span className="fl">This is for</span>
          <div className="seg" role="group" aria-label="This is for" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <button type="button" aria-pressed={kind === 'home'} onClick={() => setKind('home')}>My home</button>
            <button type="button" aria-pressed={kind === 'biz'} onClick={() => setKind('biz')}>My business</button>
          </div>
        </div>
        <div className="field">
          <label htmlFor="f-req">What do you need?</label>
          <textarea id="f-req" name="req" value={req} onChange={(e) => setReq(e.target.value)} placeholder="e.g. Inverter and battery for a 3 BHK flat, 2-hour cuts most evenings" />
        </div>
        <button className="btn btn-dark" type="submit">Request my quote<span className="isle"><Arrow /></span></button>
        <p className="fine" role={error ? 'alert' : undefined} style={error ? { color: '#a23a1d' } : undefined}>
          {error || 'Opens WhatsApp with your details filled in. Prefer to talk now? Call the number on the left.'}
        </p>
      </div>
    </form>
  );
}
