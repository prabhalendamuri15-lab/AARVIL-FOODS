import React, { useState } from 'react';
import { REGIONAL_FLAVOURS } from '../../data/regionalData';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export const FlavourMapSection: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(REGIONAL_FLAVOURS[0].id);

  const activeRegion = REGIONAL_FLAVOURS.find(r => r.id === selectedRegionId) || REGIONAL_FLAVOURS[0];

  return (
    <section className="py-16 lg:py-24 bg-warmCream-200 border-b border-darkBrown-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-chilli-700">REGIONAL CULINARY MAP</span>
          <h2 className="text-h1 font-serif text-darkBrown-900">Flavours of India</h2>
          <p className="text-body-sm text-darkBrown-600">
            Every region tells a different flavour story. Explore culinary traditions across India.
          </p>
        </div>

        {/* Regional Selector & Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 lg:p-12 border border-darkBrown-200 shadow-card">
          
          {/* Region Tabs (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-darkBrown-400 block mb-2">Select a Culinary Region</span>
            {REGIONAL_FLAVOURS.map(region => {
              const isSelected = region.id === selectedRegionId;
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegionId(region.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all border flex items-center justify-between ${
                    isSelected
                      ? 'bg-chilli-700 text-white border-chilli-700 shadow-md translate-x-1'
                      : 'bg-warmCream-100 hover:bg-warmCream-300 text-darkBrown-800 border-darkBrown-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-5 h-5 ${isSelected ? 'text-mango-400' : 'text-chilli-700'}`} />
                    <div>
                      <h4 className="font-serif font-bold text-base">{region.name}</h4>
                      <span className={`text-xs ${isSelected ? 'text-warmCream-300' : 'text-darkBrown-500'}`}>
                        {region.state}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-darkBrown-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Region Display (Cols 6-12) */}
          <div className="lg:col-span-7 bg-warmCream-100 rounded-xl p-6 sm:p-8 border border-darkBrown-200 space-y-6">
            <div className="relative rounded-lg overflow-hidden h-48 sm:h-56 bg-darkBrown-900 border border-darkBrown-200">
              <img
                src={activeRegion.heroImage}
                alt={activeRegion.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBrown-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 z-10 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-mango-400">Culinary Tradition</span>
                <h3 className="font-serif text-2xl font-bold">{activeRegion.name}</h3>
              </div>
            </div>

            <p className="text-body-sm text-darkBrown-700 leading-relaxed">
              {activeRegion.story}
            </p>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-darkBrown-500 block mb-2">Popular Creations</span>
              <div className="flex flex-wrap gap-2">
                {activeRegion.famousProducts.map(prod => (
                  <span key={prod} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-darkBrown-800 border border-darkBrown-200 shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-mango-600" />
                    <span>{prod}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-darkBrown-200/80 flex items-center justify-between">
              <Link to="/flavour-map">
                <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore Flavour Map
                </Button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
