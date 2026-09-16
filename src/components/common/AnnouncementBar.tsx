import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface AnnouncementBarProps {
  message?: string;
  linkText?: string;
  linkUrl?: string;
  onCurrencyClick?: () => void;
  currentCurrencyCode?: string;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  message = "Discover the flavours of Indian culinary tradition.",
  linkText = "Explore Collection",
  linkUrl = "/shop",
  onCurrencyClick,
  currentCurrencyCode = "INR",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Announcement" className="bg-darkBrown text-warmCream-200 text-xs font-medium py-2 px-4 transition-all duration-300 border-b border-darkBrown-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 text-center text-xs tracking-wide">
          <span>{message}</span>
          {linkUrl && linkText && (
            <Link
              to={linkUrl}
              className="inline-flex items-center gap-0.5 text-mango-400 hover:text-mango-300 underline font-semibold ml-1 shrink-0"
            >
              <span>{linkText}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>

        {onCurrencyClick && (
          <button
            onClick={onCurrencyClick}
            className="hidden md:flex items-center gap-1 px-2 py-0.5 rounded bg-darkBrown-600 hover:bg-darkBrown-500 text-mango-400 text-xs font-semibold tracking-wider transition-colors shrink-0"
            title="Change Currency"
          >
            <span>Currency:</span>
            <span className="text-white uppercase">{currentCurrencyCode}</span>
          </button>
        )}

        <button
          onClick={() => setIsVisible(false)}
          className="text-warmCream-400 hover:text-white p-0.5 rounded focus:outline-none focus:ring-1 focus:ring-mango-500 shrink-0"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
