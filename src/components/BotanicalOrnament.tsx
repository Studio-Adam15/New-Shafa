import React from 'react';

interface OrnamentProps {
  className?: string;
}

export const BotanicalDivider: React.FC<OrnamentProps> = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
    <span className="h-px w-12 bg-current opacity-25" />
    <svg
      width="28"
      height="18"
      viewBox="0 0 28 18"
      fill="none"
      className="opacity-70"
    >
      <path
        d="M14 16C14 16 10 10.5 3 10.5C3 10.5 7 4 14 2C21 4 25 10.5 25 10.5C18 10.5 14 16 14 16Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M14 2V16"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
    <span className="h-px w-12 bg-current opacity-25" />
  </div>
);

export const LeafCornerMark: React.FC<OrnamentProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 180 180"
    fill="none"
    aria-hidden="true"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M12 168C48 110 95 62 165 22"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M52 122C34 94 42 64 72 52C76 82 68 108 52 122Z"
      stroke="currentColor"
      strokeWidth="1.1"
    />
    <path
      d="M84 94C108 104 136 96 148 70C120 62 96 72 84 94Z"
      stroke="currentColor"
      strokeWidth="1.1"
    />
    <path
      d="M106 66C92 44 100 22 126 14C130 36 122 56 106 66Z"
      stroke="currentColor"
      strokeWidth="1.1"
    />
  </svg>
);
