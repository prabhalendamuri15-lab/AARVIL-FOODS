import React from 'react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'SELECT',
    description: 'Green mangoes, sorrel leaves, and red chillies selected for regional recipes.',
    icon: '🌱'
  },
  {
    step: '02',
    title: 'CRAFT',
    description: 'Spices roasted and blended with aromatic sesame and mustard oils.',
    icon: '🪨'
  },
  {
    step: '03',
    title: 'PACK',
    description: 'Packed securely in food-grade containers to ensure quality upon arrival.',
    icon: '📦'
  },
  {
    step: '04',
    title: 'ENJOY',
    description: 'Enjoy authentic regional Indian flavours with your favorite everyday meals.',
    icon: '🍽️'
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-warmCream-200 border-b border-darkBrown-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-chilli-700">OUR CRAFT SEQUENCE</span>
          <h2 className="text-h1 font-serif text-darkBrown-900">From Kitchen to Your Table</h2>
          <p className="text-body-sm text-darkBrown-600">
            A simple look at how traditional Indian pickles and masalas reach your home.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="bg-white rounded-xl p-6 border border-darkBrown-200 shadow-subtle hover:shadow-card transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-bold text-mango-600 font-mono">{item.step}</span>
                  <span className="text-2xl p-2 rounded-full bg-warmCream-200 group-hover:scale-110 transition-transform">{item.icon}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-darkBrown-900 mb-2 tracking-wide">
                  {item.title}
                </h3>

                <p className="text-xs text-darkBrown-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-darkBrown-300">
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
