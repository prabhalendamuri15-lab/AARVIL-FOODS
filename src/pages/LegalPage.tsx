import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do you package liquid-heavy pickles like Avakaaya for international shipping?',
    answer: 'All our pickles are triple-sealed: first vacuum-sealed in multi-layer export-grade pouches, then placed inside leakproof rigid jars, and finally enclosed in cushioned shock-resistant shipping boxes. We guarantee 100% leakproof international delivery.'
  },
  {
    id: 'faq-2',
    question: 'Are AARVIL Foods masalas free of artificial preservatives and synthetic colours?',
    answer: 'Yes, 100%. We source sun-dried whole spices directly from accredited farms, stone-grind them in small batches, and add zero artificial preservatives, MSG, anti-caking agents, or synthetic colours.'
  },
  {
    id: 'faq-3',
    question: 'What is the shelf life of your artisanal pickles?',
    answer: 'Our pickles remain fresh for up to 12 months from the date of manufacture. To preserve authentic flavour and quality, store in a cool, dry place and always use a clean, dry spoon.'
  },
  {
    id: 'faq-4',
    question: 'Do you ship internationally to the USA, UK, Canada, and Australia?',
    answer: 'Yes! We ship globally via express international air freight (FedEx / DHL express). Real-time tracking IDs are emailed immediately upon dispatch.'
  },
  {
    id: 'faq-5',
    question: 'How can I track my order after purchasing?',
    answer: 'Visit our Track Order page (/track-order) and enter your Order ID or tracking code to view live dispatch milestones.'
  }
];

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.replace('/', '');

  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['faq-1']);

  const toggleFaq = (id: string) => {
    setOpenFaqIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const pageTitles: Record<string, string> = {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    'refund-policy': 'Refund & Return Policy',
    'shipping-policy': 'International Shipping Policy',
    faq: 'Frequently Asked Questions',
  };

  const title = pageTitles[path] || 'Store Policy';

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <div className="border-b border-darkBrown-200 pb-4 flex items-center justify-between">
        <h1 className="text-h1 font-serif text-darkBrown-900">{title}</h1>
        {path === 'faq' && <HelpCircle className="w-8 h-8 text-chilli-700 hidden sm:block" />}
      </div>

      {path === 'faq' ? (
        <div className="space-y-4">
          <p className="text-sm text-darkBrown-600">
            Find answers to common questions about our heritage recipes, packaging standards, and global shipping.
          </p>

          <div className="space-y-3">
            {FAQ_ITEMS.map(item => {
              const isOpen = openFaqIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-lg border border-darkBrown-200 overflow-hidden shadow-subtle transition-all"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full text-left p-4 md:p-5 font-serif font-bold text-base md:text-lg text-darkBrown-900 flex items-center justify-between gap-4 hover:bg-warmCream-100 transition-colors focus:outline-none focus:ring-2 focus:ring-chilli-700"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-chilli-700 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 md:p-5 pt-0 text-sm text-darkBrown-700 border-t border-darkBrown-100/60 leading-relaxed bg-warmCream-50">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-8 border border-darkBrown-200 text-darkBrown-700 space-y-4 text-sm leading-relaxed">
          <p>
            Welcome to AARVIL Foods. We are dedicated to transparent, fair, and secure service for our customers worldwide.
          </p>
          <p>
            For international shipments, food products are vacuum-sealed in export-grade, leakproof food packaging conforming to international food transport safety guidelines.
          </p>
          <p className="text-xs text-darkBrown-400 pt-4 border-t">
            Last updated: September 2026. For questions regarding policies, contact support@aarvilfoods.com
          </p>
        </div>
      )}
    </div>
  );
};
