import React, { useState } from 'react';
import { Plus, Percent, Package, Trash2, Edit, TrendingUp, Zap } from 'lucide-react';

const QuantityOffers = () => {
  const [offers, setOffers] = useState([
    {
      id: '1',
      name: 'Buy 2 Get 10% Off',
      minQuantity: 2,
      maxQuantity: 3,
      discountType: 'percentage',
      discountValue: 10,
      status: 'active',
      totalOrders: 342,
      revenue: '$8,520'
    },
    {
      id: '2',
      name: 'Buy 3 Get 20% Off',
      minQuantity: 3,
      maxQuantity: 5,
      discountType: 'percentage',
      discountValue: 20,
      status: 'active',
      totalOrders: 156,
      revenue: '$6,240'
    },
    {
      id: '3',
      name: 'Bulk Order - $50 Off',
      minQuantity: 5,
      maxQuantity: null,
      discountType: 'fixed',
      discountValue: 50,
      status: 'active',
      totalOrders: 89,
      revenue: '$13,350'
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newOffer, setNewOffer] = useState({
    name: '',
    minQuantity: 2,
    maxQuantity: '',
    discountType: 'percentage',
    discountValue: 10,
  });

  const createOffer = () => {
    const offer = {
      id: Date.now().toString(),
      ...newOffer,
      maxQuantity: newOffer.maxQuantity || null,
      status: 'active',
      totalOrders: 0,
      revenue: '$0'
    };
    setOffers([...offers, offer]);
    setShowCreateModal(false);
    setNewOffer({
      name: '',
      minQuantity: 2,
      maxQuantity: '',
      discountType: 'percentage',
      discountValue: 10,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quantity Offers</h1>
          <p className="text-gray-600 mt-1">Create bulk discounts to increase average order value</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg font-semibold"
        >
          <Plus size={20} />
          <span>Create Offer</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">+18%</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">$28,110</h3>
          <p className="text-green-100">Total Offer Revenue</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
              <Package size={24} />
            </div>
            <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">+12%</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">587</h3>
          <p className="text-blue-100">Orders with Offers</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
              <Zap size={24} />
            </div>
            <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">+8%</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">4.2</h3>
          <p className="text-purple-100">Avg Items per Order</p>
        </div>
      </div>

      {/* Offers List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Active Offers</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {offers.map((offer) => (
            <div key={offer.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <Percent className="text-indigo-600" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{offer.name}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        {offer.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
                      <span>
                        <strong className="text-gray-900">Quantity:</strong> {offer.minQuantity}
                        {offer.maxQuantity ? ` - ${offer.maxQuantity}` : '+'} items
                      </span>
                      <span>
                        <strong className="text-gray-900">Discount:</strong>{' '}
                        {offer.discountType === 'percentage'
                          ? `${offer.discountValue}%`
                          : `$${offer.discountValue}`}{' '}
                        off
                      </span>
                    </div>

                    <div className="flex items-center space-x-8">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Total Orders</p>
                        <p className="text-lg font-bold text-gray-900">{offer.totalOrders}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Revenue Generated</p>
                        <p className="text-lg font-bold text-green-600">{offer.revenue}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Conversion</p>
                        <p className="text-lg font-bold text-gray-900">
                          {((offer.totalOrders / 587) * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                    <Edit size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Create Quantity Offer</h2>
              <p className="text-gray-600 mt-1">Set up a new bulk discount for your products</p>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Offer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newOffer.name}
                  onChange={(e) => setNewOffer({ ...newOffer, name: e.target.value })}
                  placeholder="e.g., Buy 2 Get 15% Off"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Minimum Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={newOffer.minQuantity}
                    onChange={(e) => setNewOffer({ ...newOffer, minQuantity: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Maximum Quantity <span className="text-gray-500">(Optional)</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={newOffer.maxQuantity}
                    onChange={(e) => setNewOffer({ ...newOffer, maxQuantity: e.target.value })}
                    placeholder="Leave empty for unlimited"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Discount Type <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setNewOffer({ ...newOffer, discountType: 'percentage' })}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      newOffer.discountType === 'percentage'
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Percentage (%)
                  </button>
                  <button
                    onClick={() => setNewOffer({ ...newOffer, discountType: 'fixed' })}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      newOffer.discountType === 'fixed'
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Fixed Amount ($)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Discount Value <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    value={newOffer.discountValue}
                    onChange={(e) => setNewOffer({ ...newOffer, discountValue: parseFloat(e.target.value) })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                    {newOffer.discountType === 'percentage' ? '%' : '$'}
                  </span>
                </div>
              </div>

              {/* Preview */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-100">
                <p className="text-sm font-semibold text-gray-700 mb-2">Preview</p>
                <p className="text-lg text-gray-900">
                  Buy <strong>{newOffer.minQuantity}</strong>
                  {newOffer.maxQuantity && ` - ${newOffer.maxQuantity}`} items and get{' '}
                  <strong className="text-indigo-600">
                    {newOffer.discountType === 'percentage'
                      ? `${newOffer.discountValue}%`
                      : `$${newOffer.discountValue}`}
                  </strong>{' '}
                  off your order
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex items-center justify-end space-x-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={createOffer}
                disabled={!newOffer.name || !newOffer.minQuantity || !newOffer.discountValue}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Offer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuantityOffers;
