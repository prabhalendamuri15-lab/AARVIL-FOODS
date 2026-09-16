import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Order } from '../types';
import { storage } from '../utils/storage';

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  findOrder: (orderNumberOrTracking: string) => Order | undefined;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    return storage.get<Order[]>('swathi_orders', []);
  });

  useEffect(() => {
    storage.set('swathi_orders', orders);
  }, [orders]);

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  const findOrder = (query: string): Order | undefined => {
    const cleanQuery = query.trim().toUpperCase();
    return orders.find(
      o => o.orderNumber.toUpperCase() === cleanQuery || o.trackingNumber.toUpperCase() === cleanQuery
    );
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, findOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};
