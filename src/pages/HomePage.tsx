import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategorySection } from '../components/home/CategorySection';
import { BestSellersSection } from '../components/home/BestSellersSection';
import { BrandStorySection } from '../components/home/BrandStorySection';
import { FlavourMapSection } from '../components/home/FlavourMapSection';
import { MasalaCollectionSection } from '../components/home/MasalaCollectionSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { PairingsSection } from '../components/home/PairingsSection';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { RecipesSection } from '../components/home/RecipesSection';
import { GlobalDeliverySection } from '../components/home/GlobalDeliverySection';
import { NewsletterSection } from '../components/home/NewsletterSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* 3. Hero */}
      <HeroSection />

      {/* 4. Explore Our Flavours */}
      <CategorySection />

      {/* 5. Best Sellers */}
      <BestSellersSection />

      {/* 6. Brand Story */}
      <BrandStorySection />

      {/* 7. Flavours of India */}
      <FlavourMapSection />

      {/* 8. Masala Collection */}
      <MasalaCollectionSection />

      {/* 9. From India to Your Table */}
      <ProcessSection />

      {/* 10. Perfect With */}
      <PairingsSection />

      {/* 11. Customer Reviews */}
      <ReviewsSection />

      {/* 12. Recipes */}
      <RecipesSection />

      {/* 13. Global Delivery */}
      <GlobalDeliverySection />

      {/* 14. Newsletter */}
      <NewsletterSection />
    </div>
  );
};
