'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NAV, PHONE_TEL, WA_LINK } from './site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/92 backdrop-blur-[10px]">
      <div
        className={`shell flex items-center justify-between gap-6 transition-[height] duration-350 ease-[cubic-bezier(.2,.7,.2,1)] ${scrolled ? 'h-[58px]' : 'h-[78px]'}`}
      >
        <a href="#top" className="flex items-center">
          <Image
            src="/logo-dark.png"
            alt="Energy Solutions, Battery and Inverter Store"
            width={512}
            height={277}
            priority
            className={`block w-auto transition-[height] duration-350 ease-[cubic-bezier(.2,.7,.2,1)] ${scrolled ? 'h-[30px]' : 'h-[42px]'}`}
          />
        </a>
        <nav className="hidden gap-7 text-sm font-medium min-[821px]:flex">
          {NAV.map(([href, label]) => (
            <a key={href} href={href} className="underline-wipe relative text-ink">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <a
            href={PHONE_TEL}
            aria-label="Call"
            className="fill-wipe flex h-10 items-center gap-2 border border-ink px-4 text-[13px] font-medium tracking-[.02em] text-ink [--wipe:var(--color-ink)] hover:text-bg"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
            </svg>
            <span className="max-[560px]:hidden">Call</span>
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            className="fill-wipe flex h-10 items-center gap-2 bg-btn px-4 text-[13px] font-medium tracking-[.02em] text-on-btn [--wipe:var(--color-ink)] hover:text-bg"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z" />
            </svg>
            <span className="max-[560px]:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
