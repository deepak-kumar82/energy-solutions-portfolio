import { ImageResponse } from 'next/og';

// iOS home-screen icon: same bolt as app/icon.svg. iOS rounds the corners itself, so the square is full-bleed.
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#15191c' }}>
        <svg width="132" height="132" viewBox="0 0 32 32">
          <path d="M19.5 3.5 7.5 18h7.2l-2.9 10.5L24.5 13h-7.3l2.3-9.5z" fill="#f2b600" />
        </svg>
      </div>
    ),
    size
  );
}
