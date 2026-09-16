import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Award } from 'lucide-react';
import { SHOP_CATEGORIES } from '../../data/navigation';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-darkBrown text-warmCream-200 border-t border-darkBrown-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Value Pillars Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 mb-12 border-b border-darkBrown-600 text-center md:text-left">
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-darkBrown-600 flex items-center justify-center text-mango-500 shrink-0">
              <Award className="w-6 h-6 shrink-0" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-white">Artisanal Small Batches</h4>
              <p className="text-xs text-darkBrown-300 mt-1 leading-relaxed">Traditional regional recipes crafted with attention to flavour and quality.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-darkBrown-600 flex items-center justify-center text-mango-500 shrink-0">
              <Truck className="w-6 h-6 shrink-0" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-white">International Delivery</h4>
              <p className="text-xs text-darkBrown-300 mt-1 leading-relaxed">Shipping available to selected international destinations worldwide.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-darkBrown-600 flex items-center justify-center text-mango-500 shrink-0">
              <ShieldCheck className="w-6 h-6 shrink-0" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-white">Authentic Foodways</h4>
              <p className="text-xs text-darkBrown-300 mt-1 leading-relaxed">Preserved with aromatic spice blends and traditional oil bases.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex flex-col">
              <BrandLogo variant="footer" />
            </div>
            <p className="text-xs text-darkBrown-300 leading-relaxed">
              Bringing the taste of Godavari pickles, cold pressed oils, and spicy powders to modern tables across the world.
            </p>

            {/* Social Icons Container with Strict Sizing */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-darkBrown-600 flex items-center justify-center text-darkBrown-200 hover:text-mango-400 hover:bg-darkBrown-500 transition-colors shrink-0" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current shrink-0" style={{ width: '16px', height: '16px', maxWidth: '16px', maxHeight: '16px' }} viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-darkBrown-600 flex items-center justify-center text-darkBrown-200 hover:text-mango-400 hover:bg-darkBrown-500 transition-colors shrink-0" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current shrink-0" style={{ width: '16px', height: '16px', maxWidth: '16px', maxHeight: '16px' }} viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-darkBrown-600 flex items-center justify-center text-darkBrown-200 hover:text-mango-400 hover:bg-darkBrown-500 transition-colors shrink-0" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current shrink-0" style={{ width: '16px', height: '16px', maxWidth: '16px', maxHeight: '16px' }} viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-mango-500">Shop</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              {SHOP_CATEGORIES.map((category) => (
                <li key={category.id}><Link to={category.href} className="hover:text-white transition-colors">{category.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-mango-500">About Us</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/our-story" className="hover:text-white transition-colors">Our Story & Craft</Link></li>
              <li><Link to="/flavour-map" className="hover:text-white transition-colors">Flavours of India Map</Link></li>
              <li><Link to="/recipes" className="hover:text-white transition-colors">Culinary Recipes</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-mango-500">Customer Care</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/track-order" className="hover:text-white transition-colors">Track Your Order</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping & Delivery Info</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-mango-500">Account</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
              <li><Link to="/account" className="hover:text-white transition-colors">Account</Link></li>
              <li><Link to="/orders" className="hover:text-white transition-colors">Orders</Link></li>
              <li><Link to="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-mango-500">Policies</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund & Return Policy</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-white transition-colors">International Food Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Payment Icons */}
        <div className="pt-8 border-t border-darkBrown-600 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-darkBrown-400">
          <div>
            &copy; {new Date().getFullYear()} AARVIL Foods. All rights reserved. Built with pride for global food lovers.
          </div>

          {/* Accepted Payments */}
          <div className="flex items-center gap-3 text-darkBrown-300">
            <span className="text-[10px] uppercase font-bold text-darkBrown-400">Accepted Payments:</span>
            <span className="px-2.5 py-1 rounded bg-darkBrown-600 text-[10px] font-bold">UPI</span>
            <span className="px-2.5 py-1 rounded bg-darkBrown-600 text-[10px] font-bold">VISA</span>
            <span className="px-2.5 py-1 rounded bg-darkBrown-600 text-[10px] font-bold">MASTERCARD</span>
            <span className="px-2.5 py-1 rounded bg-darkBrown-600 text-[10px] font-bold">PAYPAL</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
