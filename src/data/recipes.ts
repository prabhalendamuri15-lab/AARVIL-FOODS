import type { Recipe } from '../types';

export const HOMEPAGE_RECIPES: Recipe[] = [
  {
    id: 'rec-1',
    slug: 'andhra-avakaya-mudda-pappu-rice',
    title: 'Andhra Avakaya Mudda Pappu Rice',
    subtitle: 'The Ultimate Comfort Bowl of South India',
    description: 'Steaming hot sona masoori rice drizzled with golden cow ghee, creamy yellow toor dal, and a dollop of sun-cured Avakaya mango pickle.',
    heroImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800',
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '1 cup Sona Masoori Rice',
      '1/2 cup Toor Dal (Yellow Lentils)',
      '2 tbsp Pure Cow Ghee',
      '2 tbsp AARVIL Foods Andhra Avakaya Mango Pickle',
      'Salt to taste'
    ],
    instructions: [
      'Pressure cook toor dal with 2 cups water until soft and creamy. Mash well with salt.',
      'Cook rice until fluffy and piping hot.',
      'Mound rice in a wide bowl, create a small well in the center, and pour melted cow ghee.',
      'Spoon creamy mashed dal on top and serve with a generous dollop of Avakaya pickle.'
    ],
    featuredProductId: 'prod-001',
    relatedProductIds: ['prod-001', 'prod-002'],
    region: 'Andhra Pradesh'
  },
  {
    id: 'rec-2',
    slug: 'hyderabadi-mutton-dum-biryani',
    title: 'Nizami Hyderabadi Mutton Dum Biryani',
    subtitle: 'Fragrant Slow-Cooked Royal Layered Rice',
    description: 'Tender tenderized mutton marinated in spiced yogurt, layered with long-grain Basmati rice, caramelized onions, saffron milk, and Royal Biryani Masala.',
    heroImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    prepTimeMinutes: 30,
    cookTimeMinutes: 45,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '500g Goat Mutton (Bone-in)',
      '2 cups Extra Long Basmati Rice',
      '2 tbsp AARVIL Foods Hyderabadi Biryani Masala',
      '1 cup Thick Curd / Yogurt',
      '1 cup Sliced Fried Onions (Birista)',
      'Mint & Coriander leaves'
    ],
    instructions: [
      'Marinate mutton with curd, Biryani Masala, ginger-garlic paste, and mint for 2 hours.',
      'Parboil Basmati rice with whole spices until 70% cooked.',
      'Layer marinated meat at the bottom of a heavy pot, top with parboiled rice, fried onions, and saffron water.',
      'Seal pot tightly with foil/dough and cook on low heat (Dum) for 45 minutes.'
    ],
    featuredProductId: 'prod-003',
    relatedProductIds: ['prod-003', 'prod-005'],
    region: 'Hyderabad'
  },
  {
    id: 'rec-3',
    slug: 'south-indian-tempered-curd-rice',
    title: 'Traditional Tempered Curd Rice (Thayir Sadam)',
    subtitle: 'Cooling Creamy Rice paired with Garlic & Chilli Pickle',
    description: 'Soothing mashed rice folded with fresh thick yogurt, tempered with mustard seeds, curry leaves, and served with spicy country garlic pickle.',
    heroImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '1 cup Soft Cooked Rice',
      '1.5 cups Fresh Whole Milk Curd',
      '1 tsp Mustard Seeds',
      '1 sprig Fresh Curry Leaves',
      '1 tbsp AARVIL Foods Garlic & Red Chilli Pickle'
    ],
    instructions: [
      'Mash cooked warm rice thoroughly. Stir in fresh curd and salt.',
      'Heat oil in a small pan, crackle mustard seeds, green chillies, and curry leaves.',
      'Pour golden tempering over curd rice and gently mix.',
      'Serve cold accompanied by country garlic pickle.'
    ],
    featuredProductId: 'prod-004',
    relatedProductIds: ['prod-004', 'prod-001'],
    region: 'Tamil Nadu & South'
  }
];
