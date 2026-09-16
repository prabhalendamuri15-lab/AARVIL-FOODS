import React, { useState } from 'react';
import { REGIONAL_FLAVOURS } from '../data/regionalData';
import { MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FlavourMapPage: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(REGIONAL_FLAVOURS[0].id);
  const activeRegion = REGIONAL_FLAVOURS.find(r => r.id === selectedRegionId) || REGIONAL_FLAVOURS[0];

  return (
    <div className="bg-warmCream-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        
        <div className="border-b border-darkBrown-200 pb-8 mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-mango-700">CULINARY JOURNEY</span>
          <h1 className="text-h1 font-serif text-darkBrown-800 mt-2 mb-4">Flavours of India</h1>
          <p className="text-body-sm text-darkBrown-600">
            Explore India's rich regional pickle and spice heritage. Each region boasts unique ingredients, curing techniques, and flavour profiles that have been passed down through generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Region Tabs (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-3 sticky top-24">
            <span className="text-xs font-bold uppercase tracking-wider text-darkBrown-500 block mb-3">Select a Region</span>
            {REGIONAL_FLAVOURS.map(region => {
              const isSelected = region.id === selectedRegionId;
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegionId(region.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between ${
                    isSelected
                      ? 'bg-chilli-700 text-white border-chilli-700 shadow-md translate-x-2'
                      : 'bg-white hover:bg-warmCream-100 text-darkBrown-800 border-darkBrown-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-5 h-5 ${isSelected ? 'text-mango-400' : 'text-chilli-700'}`} />
                    <div>
                      <h4 className="font-serif font-bold text-base">{region.name}</h4>
                      <span className={`text-[11px] font-medium uppercase tracking-wider ${isSelected ? 'text-warmCream-300' : 'text-darkBrown-500'}`}>
                        {region.state}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-darkBrown-300'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Region Display (Cols 5-12) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-10 border border-darkBrown-200 shadow-card">
            
            <div className="relative rounded-xl overflow-hidden h-64 md:h-80 bg-darkBrown-900 border border-darkBrown-200 mb-8">
              <img
                src={activeRegion.heroImage}
                alt={activeRegion.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBrown-900 via-darkBrown-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 z-10 text-white max-w-lg">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/30 mb-3 text-mango-300">
                  {activeRegion.state}
                </span>
                <h2 className="font-serif text-4xl font-bold">{activeRegion.name}</h2>
              </div>
            </div>

            <div className="prose prose-sm text-darkBrown-700 mb-10 leading-relaxed">
              <p className="text-lg font-medium text-darkBrown-900 mb-4">{activeRegion.story}</p>
              <p>
                The culinary landscape of {activeRegion.name} is defined by its unique topography and climate, which heavily influence local preservation techniques and spice cultivation. The traditional recipes from this region have been preserved not just in jars, but in the cultural memory of its people.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold text-darkBrown-900 mb-4 border-b border-darkBrown-100 pb-2">Signature Flavours & Products</h4>
              <div className="flex flex-wrap gap-3 mb-8">
                {activeRegion.famousProducts.map(prod => (
                  <span key={prod} className="px-4 py-2 bg-warmCream-100 rounded-lg text-sm font-medium text-darkBrown-800 border border-darkBrown-200 shadow-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-mango-600" />
                    <span>{prod}</span>
                  </span>
                ))}
              </div>

              <div className="bg-chilli-50 border border-chilli-200 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h5 className="font-serif font-bold text-chilli-900 mb-1">Taste {activeRegion.name} at Home</h5>
                  <p className="text-sm text-chilli-800">Discover our authentic collection of pickles and masalas sourced and crafted using traditional {activeRegion.name} recipes.</p>
                </div>
                <Link to="/shop" className="shrink-0">
                  <button className="px-6 py-3 bg-chilli-700 text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-chilli-800 transition-colors shadow-md flex items-center gap-2">
                    Shop Collection <ChevronRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
