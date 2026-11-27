import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = '',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
}) => {
  const isJpg = src.endsWith('.jpg');
  if (!isJpg) {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        referrerPolicy="no-referrer"
        className={className}
      />
    );
  }

  const base = src.slice(0, -4);

  return (
    <picture className="contents">
      <source
        type="image/webp"
        srcSet={`${base}-800w.webp 800w, ${base}-1440w.webp 1440w`}
        sizes={sizes}
      />
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        referrerPolicy="no-referrer"
        className={className}
      />
    </picture>
  );
};
