import type { Product } from '../types';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    slug: 'andhra-avakaya-mango-pickle',
    name: 'Andhra Avakaya Mango Pickle',
    category: 'pickles',
    subcategory: 'Traditional Pickles',
    tagline: 'Traditional Mango & Spices Preserved in Oil',
    description: 'Traditional Andhra Avakaya made with raw sour mangoes, red chillies, ground mustard, and sesame oil.',
    story: 'Avakaya is a cherished recipe in Andhra households, crafted during mango season with cut raw green mangoes, raw mustard, and sesame oil.',
    images: [
      {
        id: 'img-1',
        url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
        alt: 'Andhra Avakaya Mango Pickle jar with red chillies',
        isPrimary: true
      },
      {
        id: 'img-2',
        url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
        alt: 'Close up raw green mangoes and spices',
      }
    ],
    variants: [
      { id: 'var-1a', size: '250g', weightGrams: 250, price: 299, compareAtPrice: 349, sku: 'AVK-250', inventory: 45 },
      { id: 'var-1b', size: '500g', weightGrams: 500, price: 549, compareAtPrice: 629, sku: 'AVK-500', inventory: 30 },
      { id: 'var-1c', size: '1kg', weightGrams: 1000, price: 999, compareAtPrice: 1199, sku: 'AVK-1000', inventory: 15 }
    ],
    price: 299,
    compareAtPrice: 349,
    inventoryTotal: 90,
    spiceLevel: 'Extra Hot',
    tasteProfile: {
      spice: 9,
      tanginess: 8,
      saltiness: 7,
      aroma: 9
    },
    ingredients: ['Raw Green Mango', 'Red Chilli Powder', 'Mustard Powder', 'Sesame Oil', 'Salt', 'Fenugreek', 'Turmeric'],
    storage: 'Store in a cool, dry place. Always use a clean, dry spoon.',
    shelfLife: '12 Months',
    pairings: ['Hot Ghee Rice', 'Curd Rice', 'Dosa', 'Poori'],
    regionOrigin: 'Andhra Pradesh',
    tags: ['Traditional', 'Extra Hot'],
    rating: 0,
    reviewCount: 0,
    isBestSeller: true,
    isFeatured: true,
    seo: {
      title: 'Andhra Avakaya Mango Pickle | AARVIL Foods',
      metaDescription: 'Traditional Andhra Avakaya Mango Pickle crafted with raw sour mangoes, chillies, and sesame oil.',
      keywords: ['Andhra Avakaya', 'Mango Pickle', 'Spicy Pickle']
    }
  },
  {
    id: 'prod-002',
    slug: 'gongura-red-sorrel-pickle',
    name: 'Andhra Gongura (Sorrel Leaf) Pickle',
    category: 'pickles',
    subcategory: 'Specialty Pickles',
    tagline: 'Tangy Sorrel Leaves with Garlic & Chillies',
    description: 'Sorrel leaf pickle prepared with red sorrel leaves, roasted garlic cloves, cumin, and dry red chillies.',
    images: [
      {
        id: 'img-3',
        url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800',
        alt: 'Gongura pickle in clay bowl',
        isPrimary: true
      }
    ],
    variants: [
      { id: 'var-2a', size: '250g', weightGrams: 250, price: 279, compareAtPrice: 320, sku: 'GON-250', inventory: 40 },
      { id: 'var-2b', size: '500g', weightGrams: 500, price: 499, compareAtPrice: 580, sku: 'GON-500', inventory: 25 }
    ],
    price: 279,
    compareAtPrice: 320,
    inventoryTotal: 65,
    spiceLevel: 'Hot',
    tasteProfile: {
      spice: 8,
      tanginess: 10,
      saltiness: 6,
      aroma: 9
    },
    ingredients: ['Sorrel Leaves (Gongura)', 'Garlic', 'Red Chillies', 'Sesame Oil', 'Salt', 'Cumin', 'Mustard Seeds'],
    storage: 'Store in a cool dry place.',
    shelfLife: '9 Months',
    pairings: ['Mashed Dal Rice', 'Roti', 'Garlic Naan', 'Biryani'],
    regionOrigin: 'Andhra & Telangana',
    tags: ['Tangy', 'Garlic Flavored'],
    rating: 0,
    reviewCount: 0,
    isBestSeller: true,
    isFeatured: true,
    seo: {
      title: 'Gongura Sorrel Leaves Pickle | AARVIL Foods',
      metaDescription: 'Tangy Andhra Gongura pickle made with sorrel leaves and garlic cloves.',
      keywords: ['Gongura Pickle', 'Sorrel Leaf Pickle', 'Andhra Special']
    }
  },
  {
    id: 'prod-003',
    slug: 'hyderabadi-royal-biryani-masala',
    name: 'Hyderabadi Royal Biryani Masala',
    category: 'masalas',
    subcategory: 'Regional Masalas',
    tagline: 'Whole Spices Roasted & Ground',
    description: 'An aromatic blend of green cardamom, Shahi Jeera, mace, star anise, nutmeg, and cloves for slow-cooked Biryani.',
    images: [
      {
        id: 'img-4',
        url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
        alt: 'Hyderabadi Royal Biryani Masala with fragrant biryani rice',
        isPrimary: true
      }
    ],
    variants: [
      { id: 'var-3a', size: '100g', weightGrams: 100, price: 249, compareAtPrice: 289, sku: 'BIR-100', inventory: 60 },
      { id: 'var-3b', size: '250g', weightGrams: 250, price: 479, compareAtPrice: 550, sku: 'BIR-250', inventory: 40 }
    ],
    price: 249,
    compareAtPrice: 289,
    inventoryTotal: 100,
    spiceLevel: 'Medium',
    tasteProfile: {
      spice: 6,
      tanginess: 3,
      saltiness: 2,
      aroma: 10
    },
    ingredients: ['Shahi Jeera', 'Green Cardamom', 'Black Cardamom', 'Cinnamon', 'Star Anise', 'Mace', 'Nutmeg', 'Cloves', 'Bay Leaf'],
    storage: 'Store in an airtight container away from direct sunlight.',
    shelfLife: '12 Months',
    pairings: ['Mutton Biryani', 'Chicken Biryani', 'Vegetable Pulao'],
    regionOrigin: 'Hyderabad',
    tags: ['Aromatic', 'Spice Blend'],
    rating: 0,
    reviewCount: 0,
    isBestSeller: true,
    isFeatured: true,
    seo: {
      title: 'Hyderabadi Biryani Masala Powder | AARVIL Foods',
      metaDescription: 'Hyderabadi Biryani spice powder made with green cardamom, Shahi Jeera, and Mace.',
      keywords: ['Biryani Masala', 'Hyderabadi Spices']
    }
  },
  {
    id: 'prod-004',
    slug: 'spicy-garlic-chilli-pickle',
    name: 'Desi Garlic & Red Chilli Pickle',
    category: 'pickles',
    subcategory: 'Specialty Pickles',
    tagline: 'Country Garlic Cloves with Crushed Chillies',
    description: 'Peeled garlic cloves pickled with red chilli flakes, lemon juice, mustard seeds, and cumin in sesame oil.',
    images: [
      {
        id: 'img-5',
        url: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
        alt: 'Garlic Chilli Pickle jar',
        isPrimary: true
      }
    ],
    variants: [
      { id: 'var-4a', size: '250g', weightGrams: 250, price: 269, compareAtPrice: 310, sku: 'GAR-250', inventory: 35 },
      { id: 'var-4b', size: '500g', weightGrams: 500, price: 489, compareAtPrice: 560, sku: 'GAR-500', inventory: 20 }
    ],
    price: 269,
    compareAtPrice: 310,
    inventoryTotal: 55,
    spiceLevel: 'Hot',
    tasteProfile: {
      spice: 8,
      tanginess: 7,
      saltiness: 6,
      aroma: 9
    },
    ingredients: ['Garlic Cloves', 'Red Chilli Powder', 'Sesame Oil', 'Lemon Juice', 'Mustard', 'Asafoetida'],
    storage: 'Store in a cool, dry place.',
    shelfLife: '9 Months',
    pairings: ['Stuffed Parathas', 'Curd Rice', 'Khichdi'],
    regionOrigin: 'Central India',
    tags: ['Garlic Special', 'Spicy'],
    rating: 0,
    reviewCount: 0,
    isBestSeller: false,
    isFeatured: true,
    seo: {
      title: 'Whole Garlic Pickle | AARVIL Foods',
      metaDescription: 'Peeled garlic cloves pickled in sesame oil and crushed red chillies.',
      keywords: ['Garlic Pickle', 'Lahsun Ka Achar']
    }
  },
  {
    id: 'prod-005',
    slug: 'chettinad-chicken-masala',
    name: 'Chettinad Pepper Chicken Masala',
    category: 'masalas',
    subcategory: 'Regional Masalas',
    tagline: 'Black Pepper & Roasted Spices',
    description: 'Regional Chettinad blend featuring roasted black peppercorns, fennel seeds, red chillies, and coriander.',
    images: [
      {
        id: 'img-6',
        url: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=800',
        alt: 'Chettinad roasted spice blend',
        isPrimary: true
      }
    ],
    variants: [
      { id: 'var-5a', size: '100g', weightGrams: 100, price: 219, compareAtPrice: 250, sku: 'CHT-100', inventory: 50 },
      { id: 'var-5b', size: '250g', weightGrams: 250, price: 429, compareAtPrice: 490, sku: 'CHT-250', inventory: 30 }
    ],
    price: 219,
    compareAtPrice: 250,
    inventoryTotal: 80,
    spiceLevel: 'Hot',
    tasteProfile: {
      spice: 9,
      tanginess: 4,
      saltiness: 3,
      aroma: 9
    },
    ingredients: ['Black Pepper', 'Red Chilli', 'Coriander', 'Fennel', 'Star Anise', 'Cumin'],
    storage: 'Store in cool dry place.',
    shelfLife: '12 Months',
    pairings: ['Pepper Chicken Curry', 'Mutton Fry', 'Egg Curry'],
    regionOrigin: 'Chettinad',
    tags: ['Pepper Spicy', 'Regional Spice'],
    rating: 0,
    reviewCount: 0,
    isBestSeller: true,
    isFeatured: true,
    seo: {
      title: 'Chettinad Pepper Masala Powder | AARVIL Foods',
      metaDescription: 'Regional Chettinad black pepper masala powder made with black pepper and fennel.',
      keywords: ['Chettinad Masala', 'Pepper Spice']
    }
  },
  {
    id: 'prod-006',
    slug: 'south-indian-heritage-combo-box',
    name: 'South Indian Regional Heritage Gift Box',
    category: 'combos',
    subcategory: 'Gift Sets',
    tagline: 'Curated 4-Jar Regional Sampler',
    description: 'A culinary gift set featuring 4 regional creations: Andhra Avakaya Mango (250g), Gongura Sorrel Leaf (250g), Garlic Pickle (250g), and Hyderabadi Biryani Masala (100g).',
    images: [
      {
        id: 'img-7',
        url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
        alt: 'Regional Indian Gift Box set',
        isPrimary: true
      }
    ],
    variants: [
      { id: 'var-6a', size: '4-Piece Box', weightGrams: 850, price: 1199, compareAtPrice: 1399, sku: 'GFT-04', inventory: 25 }
    ],
    price: 1199,
    compareAtPrice: 1399,
    inventoryTotal: 25,
    spiceLevel: 'Hot',
    tasteProfile: {
      spice: 8,
      tanginess: 8,
      saltiness: 7,
      aroma: 9
    },
    ingredients: ['Assorted pickles and spices as listed in individual products.'],
    storage: 'Individual jar storage instructions apply.',
    shelfLife: '12 Months',
    pairings: ['Gifting', 'Family Overseas'],
    regionOrigin: 'South India',
    tags: ['Gift Set', 'Sampler Box'],
    rating: 0,
    reviewCount: 0,
    isBestSeller: true,
    isFeatured: true,
    seo: {
      title: 'South Indian Pickle & Masala Gift Box | AARVIL Foods',
      metaDescription: 'Regional Indian pickle and masala sampler box containing Avakaya, Gongura, Garlic pickle and Biryani Masala.',
      keywords: ['Pickle Gift Box', 'Indian Food Gift Box']
    }
  }
];
