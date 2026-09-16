import { FEATURED_PRODUCTS } from './products';

export const formatCategoryLabel = (category: string): string =>
  category
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

export const SHOP_CATEGORIES = Array.from(
  new Set(FEATURED_PRODUCTS.map((product) => product.category))
).map((category) => ({
  id: category,
  label: formatCategoryLabel(category),
  href: `/shop/${category}`,
}));

export const PRIMARY_NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Flavour Map', href: '/flavour-map' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Contact', href: '/contact' },
];
