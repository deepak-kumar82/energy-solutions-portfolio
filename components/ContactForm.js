'use client';

import { useState } from 'react';
import { WA_NUMBER } from './site';

const label = 'flex flex-col gap-2 text-xs font-semibold tracking-[.1em] text-muted uppercase';
const field =
  'border border-line bg-bg px-3.5 text-base font-light text-ink normal-case tracking-normal outline-none transition-colors duration-250 focus:border-accent';

export default function ContactForm() {
  const [kind, setKind] = useState('home');

  function submit(e) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget));
    const text = [
      'Hello Energy Solutions,',
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      `For: ${kind === 'home' ? 'Home' : 'Business'}`,
      `Requirement: ${f.req}`,
    ].join('\n');
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  }

  const toggle = (value, text) => (
    <button
      type="button"
      aria-pressed={kind === value}
      onClick={() => setKind(value)}
      className={`h-[46px] cursor-pointer border border-line text-sm font-medium tracking-[.02em] normal-case transition-colors duration-250 ${kind === value ? 'bg-ink text-bg' : 'bg-bg text-ink'}`}
    >
      {text}
    </button>
  );

  return (
    <form
      data-reveal
      data-delay="120"
      onSubmit={submit}
      className="flex flex-col gap-[22px] border border-t-[3px] border-line border-t-accent bg-surface p-[clamp(24px,3vw,40px)]"
    >
      <p className="display mb-1 text-2xl">Send an enquiry</p>
      <label className={label}>
        Name
        <input name="name" required autoComplete="name" className={`${field} h-[46px]`} />
      </label>
      <label className={label}>
        Phone
        <input name="phone" type="tel" required autoComplete="tel" className={`${field} h-[46px]`} />
      </label>
      <div className={label}>
        This is for
        <div className="grid grid-cols-2 gap-2">
          {toggle('home', 'My home')}
          {toggle('biz', 'My business')}
        </div>
      </div>
      <label className={label}>
        Requirement
        <textarea
          name="req"
          rows={3}
          placeholder="e.g. Inverter and battery for a 3 BHK flat, frequent 2-hour cuts"
          className={`${field} resize-y py-3 leading-normal`}
        />
      </label>
      <button
        type="submit"
        className="fill-wipe h-[52px] cursor-pointer bg-btn text-sm font-semibold tracking-[.02em] text-on-btn [--wipe:var(--color-ink)] hover:text-bg"
      >
        Send on WhatsApp
      </button>
      <p className="text-[13px] text-muted">Opens WhatsApp with your details filled in. Or just call.</p>
    </form>
  );
}
