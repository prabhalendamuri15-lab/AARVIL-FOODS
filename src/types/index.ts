export type SpiceLevel = 'Mild' | 'Medium' | 'Hot' | 'Extra Hot';

export interface TasteProfile {
  spice: number;       // 1 to 10 scale
  tanginess: number;   // 1 to 10 scale
  saltiness: number;   // 1 to 10 scale
  aroma: number;       // 1 to 10 scale
}

export interface NutritionFacts {
  servingSize: string;
  calories: number;
  protein: string;
  carbohydrates: string;
  fat: string;
  sodium: string;
}

export interface ProductVariant {
  id: string;
  size: string; // e.g., '250g', '500g', '1kg'
  weightGrams: number;
  price: number; // base price in INR
  compareAtPrice?: number;
  sku: string;
  inventory: number;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface Review {
  id: string;
  productId: string;
  customerName: string;
  country: string;
  rating: number; // 1 to 5
  title: string;
  comment: string;
  date: string;
  verifiedPurchase: boolean;
  variantSize?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'pickles' | 'masalas' | 'combos' | 'gift-boxes';
  subcategory?: string;
  tagline: string;
  description: string;
  story?: string;
  images: ProductImage[];
  variants: ProductVariant[];
  price: number; // Lowest active price for display
  compareAtPrice?: number;
  inventoryTotal: number;
  spiceLevel: SpiceLevel;
  tasteProfile: TasteProfile;
  ingredients: string[];
  nutrition?: NutritionFacts;
  allergens?: {
    contains: string[];
    mayContain: string[];
  };
  storage: string;
  shelfLife: string;
  pairings: string[];
  regionOrigin: string; // e.g. "Andhra Pradesh", "Chettinad", "Malabar"
  tags: string[];
  rating: number;
  reviewCount: number;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  seo: {
    title: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  ingredients: string[];
  instructions: string[];
  featuredProductId: string; // ID of product used
  relatedProductIds: string[];
  region: string;
}

export interface RegionInfo {
  id: string;
  name: string;
  state: string;
  story: string;
  heroImage: string;
  famousProducts: string[];
  featuredProductIds: string[];
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  product: Product;
  selectedVariant: ProductVariant;
}

export interface Address {
  fullName: string;
  streetAddress: string;
  apartment?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

export type OrderStatus = 'Confirmed' | 'Aged & Packed' | 'Shipped' | 'In Transit' | 'Out for Delivery' | 'Delivered';

export interface OrderItem {
  productId: string;
  variantId: string;
  productName: string;
  size: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  image: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  status: OrderStatus;
  customerName: string;
  customerEmail: string;
  shippingAddress: Address;
  items: OrderItem[];
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  taxAmount: number;
  totalAmount: number;
  currencyCode: string;
  currencySymbol: string;
  trackingNumber: string;
  carrier: string;
  estimatedDeliveryDate: string;
  paymentMethod: string;
  paymentStatus: 'Paid' | 'Pending' | 'Failed';
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  savedAddresses: Address[];
  wishlistProductIds: string[];
}

export interface Currency {
  code: string; // INR, USD, EUR, GBP, AED, CAD, AUD
  symbol: string;
  name: string;
  exchangeRateFromINR: number; // Multiplier against INR base
  flagEmoji: string;
}

export interface ShippingZone {
  countryCode: string;
  countryName: string;
  currencyCode: string;
  freeShippingThresholdINR: number;
  standardRateINR: number;
  expressRateINR: number;
  estimatedDays: string;
}

export interface PromoCode {
  code: string;
  discountPercentage?: number;
  discountFixedINR?: number;
  minimumOrderINR?: number;
  validUntil?: string;
  isActive: boolean;
}

export interface Announcement {
  id: string;
  message: string;
  linkText?: string;
  linkUrl?: string;
  isActive: boolean;
}
