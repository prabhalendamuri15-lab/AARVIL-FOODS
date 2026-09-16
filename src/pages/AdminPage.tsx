import React from 'react';

export const AdminPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between border-b border-darkBrown-200 pb-4 mb-8">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-chilli-700">STORE MANAGEMENT</span>
          <h1 className="text-h1 font-serif text-darkBrown-900">Admin Management Portal</h1>
        </div>
        <span className="px-3 py-1 bg-chilli-100 text-chilli-700 font-mono text-xs rounded">Protected Area</span>
      </div>

      <div className="bg-white rounded-lg p-12 text-center border border-darkBrown-200">
        <span className="text-4xl mb-3 block">🔐</span>
        <h3 className="text-h3 font-serif text-darkBrown-800">Admin Architecture Ready</h3>
        <p className="text-xs text-darkBrown-500 mt-2 max-w-md mx-auto">
          Catalog inventory management, live stock updates, order dispatch status tracking, and announcement bar configuration will be added in Phase 10.
        </p>
      </div>
    </div>
  );
};
