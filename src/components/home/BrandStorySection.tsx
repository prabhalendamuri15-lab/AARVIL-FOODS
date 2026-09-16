import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { ArrowRight, Sparkles, Sun, Droplets, Utensils } from 'lucide-react';

export const BrandStorySection: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-white border-b border-darkBrown-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column (Cols 1-6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-modal border border-darkBrown-200 aspect-[4/5] bg-warmCream-300">
              <img
                src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=1000"
                alt="Traditional spice preparation"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-darkBrown-900/10" />
            </div>

            {/* Overlapping Floating Quote Card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-warmCream-100 p-6 rounded-xl border border-darkBrown-200 shadow-modal max-w-xs hidden sm:block">
              <Sparkles className="w-5 h-5 text-mango-600 mb-2" />
              <p className="font-serif italic text-sm text-darkBrown-800 leading-snug">
                "Some flavours are more than recipes. They carry memories, places and generations with them."
              </p>
              <span className="text-[10px] font-bold tracking-widest text-chilli-700 uppercase block mt-3">— AARVIL Foods</span>
            </div>
          </div>

          {/* Editorial Content Column (Cols 7-12) */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-mango-700">OUR PHILOSOPHY</span>
              <h2 className="text-h1 font-serif text-darkBrown-900 leading-tight">
                Rooted in Tradition. <br />
                <span className="text-chilli-700 italic font-serif">Made for Today.</span>
              </h2>
            </div>

            <p className="text-body-lg text-darkBrown-700 leading-relaxed">
              AARVIL Foods is built around the idea of bringing Godavari flavours to modern tables. We celebrate traditional Andhra pickles, aromatic spices, and food traditions made with care.
            </p>

            {/* 3 Craft Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-darkBrown-100">
              <div className="space-y-1.5">
                <Sun className="w-5 h-5 text-mango-600" />
                <h4 className="font-serif font-bold text-base text-darkBrown-900">Sun & Season</h4>
                <p className="text-xs text-darkBrown-600 leading-relaxed">Inspired by seasonal Indian harvests and curing traditions.</p>
              </div>

              <div className="space-y-1.5">
                <Droplets className="w-5 h-5 text-chilli-700" />
                <h4 className="font-serif font-bold text-base text-darkBrown-900">Cold Pressed Oils</h4>
                <p className="text-xs text-darkBrown-600 leading-relaxed">Preserved in aromatic sesame and mustard oil bases.</p>
              </div>

              <div className="space-y-1.5">
                <Utensils className="w-5 h-5 text-naturalGreen-600" />
                <h4 className="font-serif font-bold text-base text-darkBrown-900">Every Table</h4>
                <p className="text-xs text-darkBrown-600 leading-relaxed">Crafted to complement everyday comfort meals.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/our-story">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  DISCOVER OUR STORY
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
