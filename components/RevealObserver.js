'use client';

import { useEffect } from 'react';

// Fades up every [data-rv] element that starts below the fold, staggered 80ms within its [data-rv-group],
// and settles .zoom-img photos from 1.08x. Above the fold, without JS, or with reduced motion, everything is simply shown.
export default function RevealObserver() {
  useEffect(() => {
    const zooms = document.querySelectorAll('.zoom-img');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      zooms.forEach((z) => z.classList.add('in'));
      return;
    }
    const timers = [];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          el.classList.add('in');
          el.querySelectorAll('.zoom-img').forEach((z) => z.classList.add('in'));
          io.unobserve(el);
          // after the reveal, drop the stagger so hover responds instantly
          timers.push(setTimeout(() => { el.classList.remove('rv'); el.style.setProperty('--d', '0ms'); }, 1800));
        }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    document.querySelectorAll('[data-rv-group]').forEach((g) => {
      g.querySelectorAll(':scope > [data-rv], :scope > * > [data-rv]').forEach((el, i) => el.style.setProperty('--d', `${Math.min(i, 6) * 80}ms`));
    });
    const fold = innerHeight * 0.92;
    document.querySelectorAll('[data-rv]').forEach((el) => {
      if (el.getBoundingClientRect().top < fold) return el.classList.add('in');
      el.classList.add('rv');
      io.observe(el);
    });
    zooms.forEach((z) => { if (z.getBoundingClientRect().top < fold) z.classList.add('in'); });
    return () => { io.disconnect(); timers.forEach(clearTimeout); };
  }, []);

  return null;
}
