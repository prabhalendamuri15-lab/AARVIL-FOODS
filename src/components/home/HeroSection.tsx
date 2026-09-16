import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden bg-warmCream-200 border-b border-darkBrown-200/70 pt-8 pb-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[580px] lg:min-h-[640px]">
          
          {/* Left Editorial Copy Area (Cols 1-6) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mango-100 text-mango-800 text-xs font-bold tracking-widest uppercase shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-mango-700" />
              <span>AUTHENTIC INDIAN FOODWAYS</span>
            </div>

            {/* Editorial Heading */}
            <h1 className="text-display-hero font-serif text-darkBrown-900 leading-[1.02] tracking-tight">
              Pickles & Masalas <br />
              <span className="text-chilli-700 italic font-serif">Made for Every Table</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-body-lg text-darkBrown-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Small-batch Indian pickles and fragrant spice blends rooted in regional culinary traditions. Prepared with authentic recipes and delivered straight to your home.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link to="/shop" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px]" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  EXPLORE COLLECTION
                </Button>
              </Link>
              <Link to="/our-story" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[180px]">
                  OUR STORY
                </Button>
              </Link>
            </div>

            {/* Reassurance Micro Badges */}
            <div className="pt-8 border-t border-darkBrown-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium text-darkBrown-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-chilli-700 shrink-0" />
                <span>Regional Recipes</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-chilli-700 shrink-0" />
                <span>Small Batches</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-chilli-700 shrink-0" />
                <span>International Delivery</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Image Area (Cols 7-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6 order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-modal border border-darkBrown-200/80 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] bg-warmCream-300">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1200"
                alt="Artisanal Andhra Avakaya Mango Pickle jar with raw green mangoes and dry spices"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Floating Editorial Card Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-card border border-darkBrown-100 max-w-xs">
                <span className="text-[10px] uppercase font-bold tracking-widest text-mango-600 block">Regional Specialty</span>
                <span className="font-serif font-bold text-base text-darkBrown-900 block">Andhra Avakaya Mango Pickle</span>
                <span className="text-xs text-darkBrown-600 block mt-0.5">Raw sour mangoes & fiery red chillies</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
