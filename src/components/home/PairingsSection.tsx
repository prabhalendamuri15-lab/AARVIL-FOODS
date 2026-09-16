import React from 'react';

interface FoodPairingItem {
  id: string;
  title: string;
  description: string;
  image: string;
  recommendedPickle: string;
  link: string;
}

const PAIRINGS: FoodPairingItem[] = [
  {
    id: 'pair-1',
    title: 'Steaming Hot Ghee Rice',
    description: 'Hot sona masoori rice with pure cow ghee and fiery Avakaya mango pickle.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600',
    recommendedPickle: 'Andhra Avakaya Mango Pickle',
    link: '/shop/pickles'
  },
  {
    id: 'pair-2',
    title: 'Creamy Curd Rice (Thayir Sadam)',
    description: 'Cooling curd rice paired with whole garlic & red chilli pickle.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    recommendedPickle: 'Garlic & Red Chilli Pickle',
    link: '/shop/pickles'
  },
  {
    id: 'pair-3',
    title: 'Crispy Dosa & Soft Idlis',
    description: 'Fresh fermented dosas served with tangy Gongura sorrel leaf pickle.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600',
    recommendedPickle: 'Gongura Sorrel Leaf Pickle',
    link: '/shop/pickles'
  },
  {
    id: 'pair-4',
    title: 'Stuffed Aloo Parathas',
    description: 'Butter-topped warm wheat parathas paired with spicy lemon & garlic pickle.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    recommendedPickle: 'Specialty Pickles',
    link: '/shop/pickles'
  }
];

export const PairingsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-darkBrown-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-mango-700">CULINARY PAIRINGS</span>
          <h2 className="text-h1 font-serif text-darkBrown-900">Perfect With...</h2>
          <p className="text-body-sm text-darkBrown-600">
            Savor our pickles and masalas with your favorite everyday comfort meals.
          </p>
        </div>

        {/* 4 Pairing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIRINGS.map((item) => (
            <div
              key={item.id}
              className="group bg-warmCream-100 rounded-lg overflow-hidden border border-darkBrown-200 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div className="aspect-[4/3] overflow-hidden bg-warmCream-300 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-base text-darkBrown-900 group-hover:text-chilli-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-darkBrown-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-darkBrown-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-chilli-700 uppercase tracking-wide">
                    Pairs with: {item.recommendedPickle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
