import type { RegionInfo } from '../types';

export const REGIONAL_FLAVOURS: RegionInfo[] = [
  {
    id: 'reg-andhra',
    name: 'Andhra Pradesh',
    state: 'Andhra Pradesh & Telangana',
    story: 'Renowned as the fiery spice capital of South India. Famous for sun-cured Avakaya mango pickles, Gongura sorrel leaf conserves, and cold-pressed sesame oil preparations.',
    heroImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
    famousProducts: ['Andhra Avakaya Mango Pickle', 'Gongura Sorrel Leaf Pickle', 'Usirikaya Gooseberry Pickle'],
    featuredProductIds: ['prod-001', 'prod-002']
  },
  {
    id: 'reg-chettinad',
    name: 'Chettinad',
    state: 'Tamil Nadu',
    story: 'Celebrated for legendary spice trading heritage. Chettinad blends sun-dried black peppercorns, roasted coriander, kalpasi (stone flower), and star anise into complex fragrant roasted masalas.',
    heroImage: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=800',
    famousProducts: ['Chettinad Pepper Chicken Masala', 'Seeraga Samba Biryani Masala', 'Curry Leaf Powder'],
    featuredProductIds: ['prod-005']
  },
  {
    id: 'reg-hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    story: 'The royal Nizami kitchen tradition. Famed for slow-cooked DUM Biryanis infused with green cardamom, Shahi Jeera, nutmeg, and aromatic mace.',
    heroImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    famousProducts: ['Hyderabadi Royal Biryani Masala', 'Hyderabadi Mirchi Ka Salan Spice'],
    featuredProductIds: ['prod-003']
  },
  {
    id: 'reg-malabar',
    name: 'Malabar Coast',
    state: 'Kerala',
    story: 'Historic spice port famous for black gold (Malabar peppercorns), dry ginger, coconut oil roasted curries, and tangy Kerala tender mango pickles.',
    heroImage: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
    famousProducts: ['Malabar Garam Masala', 'Kerala Kanni Manga Pickle', 'Roasted Meat Curry Powder'],
    featuredProductIds: ['prod-003', 'prod-004']
  }
];
