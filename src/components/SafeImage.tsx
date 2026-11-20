import { useState } from 'react';
import { Cookie } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'kucircle.id',
  priority = false,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F7EFE2] to-[#EFE1CC] text-[#5C3A28] p-6 text-center ${className}`}
      >
        <Cookie className="w-10 h-10 text-[#C85A17]" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-display text-sm font-medium text-[#2E1A12]">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
