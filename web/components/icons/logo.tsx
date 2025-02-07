export const Logo = ({ className }: { className?: string }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Farsights Logotype"
  >
    {/* Círculo Externo */}
    <circle cx="32" cy="32" r="30" stroke="url(#gradient1)" strokeWidth="3" fill="none" />

    {/* Trayectoria de Datos */}
    <path
      d="M10 32C16 22 26 16 38 16C50 16 58 26 62 32"
      stroke="url(#gradient2)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Punto Central de Inteligencia */}
    <circle cx="32" cy="32" r="5" fill="url(#gradient3)" />

    {/* Definición de Gradientes */}
    <defs>
      <linearGradient id="gradient1" x1="0" y1="32" x2="64" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EEEFFC" />
        <stop offset="1" stopColor="#6663F6" />
      </linearGradient>
      <linearGradient id="gradient2" x1="10" y1="32" x2="62" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7877C6" />
        <stop offset="1" stopColor="#6663F6" />
      </linearGradient>
      <radialGradient id="gradient3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EEEFFC" />
        <stop offset="1" stopColor="#6663F6" stopOpacity="0.7" />
      </radialGradient>
    </defs>
  </svg>
);

