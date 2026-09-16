import { FEATURED_PRODUCTS } from '../data/products';
import type { Product } from '../types';

export const ProductService = {
  async getAllProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FEATURED_PRODUCTS);
      }, 200);
    });
  },

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FEATURED_PRODUCTS.find(p => p.slug === slug));
      }, 200);
    });
  },

  async getProductsByCategory(category: string): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FEATURED_PRODUCTS.filter(p => p.category === category));
      }, 200);
    });
  },

  async searchProducts(query: string): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lowerQuery = query.toLowerCase();
        resolve(FEATURED_PRODUCTS.filter(p => 
          p.name.toLowerCase().includes(lowerQuery) || 
          p.description.toLowerCase().includes(lowerQuery) ||
          p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        ));
      }, 200);
    });
  }
};
