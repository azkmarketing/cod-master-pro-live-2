import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Home,
  Settings,
  BarChart3,
  FileText,
  Percent,
  ArrowUpDown,
  MessageSquare,
  CreditCard,
  Menu,
  X,
  Package
} from 'lucide-react';
import Dashboard from './pages/Dashboard';
import FormBuilder from './pages/FormBuilder';
import QuantityOffers from './pages/QuantityOffers';
import UpsellsDownsells from './pages/UpsellsDownsells';
import Integrations from './pages/Integrations';
import Analytics from './pages/Analytics';
import SettingsPage from './pages/Settings';
import Orders from './pages/Orders';

const navigation = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Form Builder', path: '/form-builder', icon: FileText },
  { name: 'Quantity Offers', path: '/quantity-offers', icon: Percent },
  { name: 'Upsells & Downsells', path: '/upsells-downsells', icon: ArrowUpDown },
  { name: 'Orders', path: '/orders', icon: Package },
  { name: 'Integrations', path: '/integrations', icon: MessageSquare },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Settings', path: '/settings', icon: Settings },
];

function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-white shadow-lg hover:bg-gray-50"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-indigo-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <CreditCard className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold">COD Master Pro</h1>
                <p className="text-xs text-indigo-300">Cash on Delivery Suite</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-indigo-900 shadow-lg transform scale-105'
                      : 'text-indigo-100 hover:bg-indigo-700 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-indigo-700">
            <div className="bg-indigo-800 rounded-lg p-4">
              <p className="text-sm font-medium mb-1">Pro Plan</p>
              <p className="text-xs text-indigo-300">Unlimited orders & forms</p>
              <button className="mt-3 w-full px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-shadow">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Main content */}
        <div className="lg:ml-72">
          <main className="p-6 lg:p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/form-builder" element={<FormBuilder />} />
              <Route path="/quantity-offers" element={<QuantityOffers />} />
              <Route path="/upsells-downsells" element={<UpsellsDownsells />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
