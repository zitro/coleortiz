import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          fontFamily: 'Georgia, serif',
          fontWeight: 600,
          color: 'white',
          letterSpacing: '-0.5px',
        }}
      >
        CO
      </div>
    ),
    {
      ...size,
    }
  );
}
