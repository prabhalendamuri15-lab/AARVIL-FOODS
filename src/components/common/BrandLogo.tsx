import React from 'react';

interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'mobile';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'header' }) => {
  const isFooter = variant === 'footer';
  const imageClass =
    variant === 'mobile'
      ? 'h-12 w-auto'
      : variant === 'footer'
        ? 'h-16 w-auto'
        : 'h-12 sm:h-14 w-auto';

  return (
    <div className="flex items-center gap-3">
      <img
        src="/brand/aarvil-logo.png"
        alt="AARVIL Foods logo - The Taste of Godavari"
        className={`${imageClass} object-contain shrink-0`}
      />
      <div className="sr-only">
        <span>AARVIL Foods</span>
        <span>THE TASTE OF GODAVARI</span>
      </div>
      {isFooter && (
        <div className="hidden sm:flex flex-col leading-none">
          <span className="font-serif text-xl font-bold tracking-tight text-white">AARVIL Foods</span>
          <span className="text-[10px] tracking-widest text-mango-500 uppercase font-bold mt-1">
            The Taste of Godavari
          </span>
        </div>
      )}
    </div>
  );
};
