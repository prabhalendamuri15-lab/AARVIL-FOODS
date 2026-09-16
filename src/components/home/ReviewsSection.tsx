import React from 'react';
import { HOMEPAGE_REVIEWS } from '../../data/reviews';
import { Star, Quote, MessageSquareHeart } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const hasReviews = HOMEPAGE_REVIEWS && HOMEPAGE_REVIEWS.length > 0;

  return (
    <section className="py-16 lg:py-24 bg-warmCream-200 border-b border-darkBrown-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-chilli-700">COMMUNITY STORIES</span>
          <h2 className="text-h1 font-serif text-darkBrown-900">Your Table Could Be The Next Story</h2>
          <p className="text-body-sm text-darkBrown-600">
            Customer stories and culinary experiences will appear here as our community grows.
          </p>
        </div>

        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOMEPAGE_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl p-6 border border-darkBrown-200 shadow-subtle flex flex-col justify-between space-y-4 relative"
              >
                <Quote className="w-8 h-8 text-mango-300 absolute top-4 right-4 pointer-events-none" />

                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-mango-500 fill-mango-500" />
                    ))}
                  </div>

                  <h3 className="font-serif font-bold text-base text-darkBrown-900 leading-snug">
                    "{review.title}"
                  </h3>

                  <p className="text-xs text-darkBrown-700 leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-darkBrown-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-xs text-darkBrown-900">
                      {review.customerName}
                    </h4>
                    <span className="text-[11px] text-darkBrown-500">{review.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Placeholder State for CMS integration */
          <div className="max-w-md mx-auto bg-white rounded-xl p-8 border border-darkBrown-200 text-center space-y-3 shadow-subtle">
            <div className="w-12 h-12 rounded-full bg-mango-100 text-mango-700 flex items-center justify-center mx-auto">
              <MessageSquareHeart className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-darkBrown-900">
              Share Your Culinary Experience
            </h3>
            <p className="text-xs text-darkBrown-600 leading-relaxed">
              We look forward to sharing authentic stories from home cooks and food lovers around the world.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
