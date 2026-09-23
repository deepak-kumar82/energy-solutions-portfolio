'use client';

import { useEffect, useRef, useState } from 'react';

const NUMBERS = [
  { target: 15, suffix: '+', label: 'Years in business' },
  { target: 10000, suffix: '+', label: 'Customers served' },
  { target: 200, suffix: '+', label: 'Business clients' },
  { target: 25000, suffix: '+', label: 'Installations completed' },
];

export default function Counters() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf;
    const run = () => {
      cancelAnimationFrame(raf);
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / 1500);
        setProgress(1 - Math.pow(1 - t, 3));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) run();
        else {
          cancelAnimationFrame(raf);
          setProgress(0);
        }
      },
      { threshold: 0.35 }
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="border-y border-line bg-surface">
      <div ref={ref} className="shell grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {NUMBERS.map((n) => (
          <div key={n.label} className="py-[clamp(36px,4vw,56px)] pr-6">
            <span className="display block text-[clamp(44px,4.6vw,72px)] leading-none tracking-[-.02em] text-accent tabular-nums">
              {Math.round(n.target * progress).toLocaleString('en-IN') + n.suffix}
            </span>
            <span className="mt-3 block text-[13px] font-semibold tracking-[.12em] text-muted uppercase">{n.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
