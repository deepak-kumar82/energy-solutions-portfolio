'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Arrow, Message } from './icons';
import { NAV, PHONE, PHONE_TEL } from './site';

// Full-width bar at the top; docks into a floating pill once #hero-end has scrolled above the viewport.
export default function Header() {
  const [docked, setDocked] = useState(false);
  const [open, setOpen] = useState(false);

  // #hero-end is looked up on each scroll: the header can hydrate before the browser has parsed it.
  useEffect(() => {
    const onScroll = () => {
      const end = document.getElementById('hero-end');
      setDocked(!!end && end.getBoundingClientRect().top < 0);
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  // The overlay styles key off body.menu-open (the header itself stays sticky, so it can't wrap the overlay).
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className={`hdr${docked ? ' docked' : ''}`}>
        <div className="hdr-in">
          <a href="#top" aria-label="Energy Solutions, home">
            <Image className="logo" src="/logo-dark.png" alt="Energy Solutions, Battery and Inverter Store" width={512} height={277} priority />
          </a>
          <nav className="nav-links" aria-label="Main">
            {NAV.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <div className="hdr-end">
            <a className="nav-call" href={PHONE_TEL}>{PHONE}</a>
            <a className="btn btn-dark" href="#contact" aria-label="Get a quote">
              <span className="nav-quote-label">Get a quote</span>
              <span className="isle"><span className="ic-arrow"><Arrow /></span><span className="ic-msg"><Message /></span></span>
            </a>
            <button className="burger" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className="overlay" aria-hidden={!open}>
        {[...NAV, ['#contact', 'Contact']].map(([href, label]) => (
          <a key={href} href={href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <p className="mono">{PHONE} · Sikar Road, Jaipur</p>
      </div>
    </>
  );
}
