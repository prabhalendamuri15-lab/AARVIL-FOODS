import React from 'react';

export const StoryPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-mango-600">OUR HERITAGE & CRAFT</span>
        <h1 className="text-h1 font-serif text-darkBrown-900">Why We Make This</h1>
        <p className="text-body-lg text-darkBrown-600 italic">
          "Preserving traditional family recipes, slow sun-cured spices, and cold-pressed oil traditions for modern kitchens across the world."
        </p>
      </div>

      <div className="bg-white rounded-lg p-8 border border-darkBrown-200 leading-relaxed text-darkBrown-700 space-y-4">
        <p>
          At AARVIL Foods, we believe that authentic pickles and masalas are not merely condiments; they carry the taste of Godavari homes, kitchens, and food traditions.
        </p>
        <p>
          Our raw green mangoes are carefully hand-cut during peak season, combined with sun-dried Guntur chillies, raw mustard seeds, and aged in unrefined cold-pressed gingelly oil according to centuries-old regional recipes.
        </p>
      </div>
    </div>
  );
};
