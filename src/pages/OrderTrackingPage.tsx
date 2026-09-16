import React, { useState } from 'react';
import { useOrders } from '../context/OrderContext';
import { Search } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';

export const OrderTrackingPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const { findOrder } = useOrders();
  const [searchedOrder, setSearchedOrder] = useState<any>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const found = findOrder(query.trim());
      setSearchedOrder(found);
      setHasSearched(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-3">
        <h1 className="text-h1 font-serif text-darkBrown-900">Track Your Order</h1>
        <p className="text-body-sm text-darkBrown-600">
          Enter your Order Number (e.g., SWH-94821) or Tracking Number to view live dispatch status.
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
        <Input
          placeholder="e.g. SWH-94821"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button variant="primary" type="submit" leftIcon={<Search className="w-4 h-4" />}>
          Track Order
        </Button>
      </form>

      {hasSearched && (
        <div className="bg-white rounded-lg p-6 border border-darkBrown-200">
          {searchedOrder ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <h3 className="font-serif font-bold text-lg">Order #{searchedOrder.orderNumber}</h3>
                  <span className="text-xs text-darkBrown-500">Placed on: {searchedOrder.createdAt}</span>
                </div>
                <span className="px-3 py-1 bg-mango-100 text-mango-800 text-xs font-bold rounded-full">
                  Status: {searchedOrder.status}
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 text-darkBrown-500 text-xs">
              No order found matching "{query}". Please verify your order number.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
