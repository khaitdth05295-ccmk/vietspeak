import React from 'react';

interface VietSpeakLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  className?: string;
}

/**
 * VietSpeak Official B05 Logo Component
 * Concept: Vietnamese Language (Chữ Quốc ngữ diacritic tone mark) + Speaking Practice (Speech Bubble) + Open Knowledge (Book wings)
 * Palette: Deep Educational Navy-Blue (#0f2b46), Fresh Communicative Teal (#0d9488), Warm Golden Diacritic Accent (#f59e0b).
 */
export const VietSpeakLogoIcon: React.FC<{ sizePx?: number; className?: string }> = ({
  sizePx = 36,
  className = '',
}) => {
  return (
    <svg
      width={sizePx}
      height={sizePx}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="VietSpeak Logo"
    >
      {/* Outer rounded speech bubble base with communicative tail */}
      <path
        d="M24 4C13.5066 4 5 11.835 5 21.5C5 26.8373 7.5756 31.5794 11.6625 34.8217L10.2 41.5C10.05 42.18 10.74 42.68 11.33 42.33L18.8 37.89C20.48 38.61 22.21 39 24 39C34.4934 39 43 31.165 43 21.5C43 11.835 34.4934 4 24 4Z"
        fill="url(#vs-bubble-gradient)"
      />

      {/* Subtle conversational inner glow */}
      <path
        d="M24 6.5C14.8873 6.5 7.5 13.2157 7.5 21.5C7.5 25.9867 9.6385 29.9868 13.0844 32.7981C13.5358 33.1666 13.751 33.7431 13.626 34.3142L12.7 38.54L17.7656 35.5342C18.261 35.2396 18.8475 35.1278 19.421 35.2335C20.8997 35.5057 22.4285 35.65 24 35.65C33.1127 35.65 40.5 28.9343 40.5 21.5C40.5 14.0657 33.1127 6.5 24 6.5Z"
        fill="url(#vs-inner-glow)"
        opacity="0.35"
      />

      {/* Open Book Wings / Stylized 'V' Symbol of Vietnamese Learning */}
      <path
        d="M16 16.5C18.5 18.2 21.5 19 24 19.8C26.5 19 29.5 18.2 32 16.5C32.8 16 33.8 16.6 33.8 17.5V26.8C33.8 27.5 33.2 28.1 32.5 28.4C29.8 29.7 26.6 30.5 24 32.8C21.4 30.5 18.2 29.7 15.5 28.4C14.8 28.1 14.2 27.5 14.2 26.8V17.5C14.2 16.6 15.2 16 16 16.5Z"
        fill="#FFFFFF"
        opacity="0.95"
      />

      {/* Central stylized 'V' spine and book fold in Navy Blue */}
      <path
        d="M24 19.8V32.8M24 32.8L19.5 22.5M24 32.8L28.5 22.5"
        stroke="#0F2B48"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Subtle Vietnamese Diacritic Tone Accent: Warm Amber 'Dấu Sắc / Dấu Hỏi' Arc above the V */}
      <path
        d="M25 11C27 12 28.5 13.8 28.5 15.2C28.5 16 27.8 16.5 27 16.2C25.8 15.8 24.2 14.5 24 13.5C23.9 12.8 24.3 12.2 25 11Z"
        fill="#F59E0B"
      />

      {/* Gradient Definitions */}
      <defs>
        <linearGradient
          id="vs-bubble-gradient"
          x1="6"
          y1="4"
          x2="40"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0F2B48" />
          <stop offset="60%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        <linearGradient
          id="vs-inner-glow"
          x1="12"
          y1="7"
          x2="36"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const VietSpeakLogo: React.FC<VietSpeakLogoProps> = ({
  size = 'md',
  showText = true,
  textColor = 'text-slate-900',
  className = '',
}) => {
  const pixelSizes = {
    sm: 30,
    md: 36,
    lg: 48,
    xl: 64,
  };

  const textSizes = {
    sm: 'text-base font-bold tracking-tight',
    md: 'text-lg font-extrabold tracking-tight',
    lg: 'text-2xl font-black tracking-tight',
    xl: 'text-3xl font-black tracking-tight',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <VietSpeakLogoIcon sizePx={pixelSizes[size]} />
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display leading-tight ${textColor} ${textSizes[size]}`}>
            VietSpeak
          </span>
          {size === 'lg' || size === 'xl' ? (
            <span className="text-[11px] font-semibold text-teal-700 tracking-wide uppercase">
              Luyện nói tiếng Việt B05
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
};
