// Top-view sports car drawn as inline SVG (front of the car points up).
// Inline SVG = no image request, crisp at any size, easy to transform.
export default function CarSvg({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 440"
      className={className}
      role="img"
      aria-label="Orange sports car seen from above"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* wheels */}
      <rect x="4" y="78" width="24" height="58" rx="8" fill="#080b0c" />
      <rect x="172" y="78" width="24" height="58" rx="8" fill="#080b0c" />
      <rect x="1" y="298" width="28" height="68" rx="9" fill="#080b0c" />
      <rect x="171" y="298" width="28" height="68" rx="9" fill="#080b0c" />

      {/* mirrors */}
      <ellipse cx="21" cy="160" rx="10" ry="6" fill="#e85a10" />
      <ellipse cx="179" cy="160" rx="10" ry="6" fill="#e85a10" />

      {/* body */}
      <path
        d="M100 6 C152 6 172 40 174 92 L178 190 C180 252 178 332 169 394 C163 422 131 434 100 434 C69 434 37 422 31 394 C22 332 20 252 22 190 L26 92 C28 40 48 6 100 6 Z"
        fill="#ff6a1a"
      />
      <path d="M100 14 L100 128" stroke="#e85a10" strokeWidth="3" strokeLinecap="round" />
      {/* side intakes */}
      <path d="M33 232 C40 226 46 232 46 246 L46 280 C38 276 32 268 32 256 Z" fill="#0d1417" />
      <path d="M167 232 C160 226 154 232 154 246 L154 280 C162 276 168 268 168 256 Z" fill="#0d1417" />

      {/* windscreen */}
      <path d="M56 152 C72 130 128 130 144 152 L150 206 L50 206 Z" fill="#0d1417" />
      <path d="M66 150 C80 140 120 140 134 150" stroke="#2c3a40" strokeWidth="2" fill="none" />
      {/* roof */}
      <rect x="52" y="206" width="96" height="70" rx="16" fill="#e85a10" />
      <rect x="62" y="216" width="76" height="50" rx="10" fill="#f36413" />
      {/* rear window */}
      <path d="M54 276 L146 276 L140 320 C120 332 80 332 60 320 Z" fill="#0d1417" />

      {/* headlights */}
      <path d="M42 62 C50 42 64 34 80 30 L78 46 C68 50 58 58 52 72 Z" fill="#fff4cf" />
      <path d="M158 62 C150 42 136 34 120 30 L122 46 C132 50 142 58 148 72 Z" fill="#fff4cf" />
      {/* tail lights */}
      <rect x="42" y="408" width="34" height="7" rx="3.5" fill="#ff2e2e" />
      <rect x="124" y="408" width="34" height="7" rx="3.5" fill="#ff2e2e" />
    </svg>
  );
}
