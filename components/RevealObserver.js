'use client';

import { useEffect } from 'react';

// Fades up every [data-reveal] element that starts below the fold, staggered by data-delay (ms).
export default function RevealObserver() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          io.unobserve(e.target);
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      const d = parseInt(el.dataset.delay || '0', 10);
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      el.style.transition = `opacity .85s cubic-bezier(.2,.7,.2,1) ${d}ms, transform .85s cubic-bezier(.2,.7,.2,1) ${d}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return null;
}
