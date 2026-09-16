import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { LogOut, Package, User as UserIcon, MapPin } from 'lucide-react';

export const AccountPage: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<'orders' | 'profile'>('orders');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="bg-warmCream-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Menu */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-xl border border-darkBrown-200 p-6 shadow-subtle mb-6">
              <div className="w-12 h-12 bg-chilli-100 text-chilli-800 rounded-full flex items-center justify-center font-serif text-xl font-bold mb-4">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <h2 className="font-serif font-bold text-lg text-darkBrown-900">{user?.name}</h2>
              <p className="text-xs text-darkBrown-500 mb-6">{user?.email}</p>
              
              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-semibold transition-colors flex items-center gap-2 ${activeTab === 'orders' ? 'bg-warmCream-200 text-darkBrown-900' : 'text-darkBrown-600 hover:bg-warmCream-100'}`}
                >
                  <Package className="w-4 h-4" /> My Orders
                </button>
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-semibold transition-colors flex items-center gap-2 ${activeTab === 'profile' ? 'bg-warmCream-200 text-darkBrown-900' : 'text-darkBrown-600 hover:bg-warmCream-100'}`}
                >
                  <UserIcon className="w-4 h-4" /> Profile Details
                </button>
              </nav>
            </div>
            
            <button 
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 rounded-xl border border-darkBrown-200 bg-white text-sm font-semibold text-chilli-700 hover:bg-warmCream-100 transition-colors flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <div className="bg-white rounded-xl border border-darkBrown-200 shadow-subtle min-h-[500px]">
              
              {activeTab === 'orders' && (
                <div>
                  <div className="p-6 border-b border-darkBrown-200">
                    <h3 className="font-serif text-xl font-bold text-darkBrown-900">Order History</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center py-16 bg-warmCream-100 rounded-lg border border-darkBrown-200 border-dashed">
                      <Package className="w-12 h-12 text-darkBrown-300 mx-auto mb-4" />
                      <h4 className="font-serif text-lg font-bold text-darkBrown-900 mb-2">No orders yet</h4>
                      <p className="text-sm text-darkBrown-600 mb-6 max-w-sm mx-auto">
                        You haven't placed any orders. Discover our artisanal collection of pickles and masalas to get started.
                      </p>
                      <Link to="/shop">
                        <Button variant="primary">Start Shopping</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div>
                  <div className="p-6 border-b border-darkBrown-200">
                    <h3 className="font-serif text-xl font-bold text-darkBrown-900">Profile Details</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-darkBrown-900 uppercase tracking-wider mb-1">Full Name</label>
                        <p className="text-sm text-darkBrown-700 p-3 bg-warmCream-100 rounded-md border border-darkBrown-200">{user?.name}</p>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-darkBrown-900 uppercase tracking-wider mb-1">Email Address</label>
                        <p className="text-sm text-darkBrown-700 p-3 bg-warmCream-100 rounded-md border border-darkBrown-200">{user?.email}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-darkBrown-900 mb-3 flex items-center gap-2 mt-4">
                        <MapPin className="w-4 h-4" /> Saved Address
                      </h4>
                      <div className="p-4 bg-warmCream-100 rounded-md border border-darkBrown-200 text-sm text-darkBrown-700 text-center italic">
                        No addresses saved yet.
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </main>

        </div>
      </div>
    </div>
  );
};
