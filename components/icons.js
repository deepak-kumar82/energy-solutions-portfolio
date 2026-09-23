export const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M4 12 12 4M6 4h6v6" />
  </svg>
);

export const Phone = ({ strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

// Five-cell charge meter used in section labels; `on` is how many cells are filled.
export const Cells = ({ on }) => (
  <span className="cells" aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => <i key={i} className={i < on ? 'on' : undefined} />)}
  </span>
);
