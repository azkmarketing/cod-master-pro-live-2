import React, { useState } from 'react';
import { Plus, ArrowUp, ArrowDown, Edit, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';

const UpsellsDownsells = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: '1',
      name: 'Premium Bundle Upsell',
      type: 'upsell',
      trigger: 'cart_page',
      product: 'LUBAN Premium Gift Set',
      originalPrice: 89.99,
      offerPrice: 127.50,
      conversionRate: 23.5,
      revenue: '$12,450',
      isActive: true
    },
    {
      id: '2',
      name: 'Mini Oil Downsell',
      type: 'downsell',
      trigger: 'checkout_abandon',
      product: 'LUBAN Travel Size Oil',
      originalPrice: 67.50,
      offerPrice: 47.25,
      conversionRate: 18.2,
      revenue: '$8,890',
      isActive: true
    },
    {
      id: '3',
      name: 'Combo Pack Upsell',
      type: 'upsell',
      trigger: 'after_add_to_cart',
      product: '3-Month Supply Bundle',
      originalPrice: 234.00,
      offerPrice: 199.99,
      conversionRate: 15.8,
      revenue: '$6,740',
      isActive: false
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Upsells & Downsells</h1>
          <p className="text-gray-600 mt-1">Maximize revenue with strategic offers</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:shadow-lg font-semibold">
          <Plus size={20} />
          <span>New Campaign</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <ArrowUp size={28} />
            <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">+24%</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">$19,190</h3>
          <p className="text-green-100">Upsell Revenue</p>
          <div className="mt-4 pt-4 border-t border-green-400">
            <p className="text-sm">Avg. Upsell Acceptance: <strong>19.6%</strong></p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <ArrowDown size={28} />
            <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">+16%</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">$8,890</h3>
          <p className="text-orange-100">Downsell Recovery</p>
          <div className="mt-4 pt-4 border-t border-orange-400">
            <p className="text-sm">Abandoned Cart Recovery: <strong>18.2%</strong></p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Active Campaigns</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    campaign.type === 'upsell'
                      ? 'bg-gradient-to-br from-green-100 to-emerald-100'
                      : 'bg-gradient-to-br from-orange-100 to-red-100'
                  }`}>
                    {campaign.type === 'upsell' ? (
                      <ArrowUp className="text-green-600" size={24} />
                    ) : (
                      <ArrowDown className="text-orange-600" size={24} />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{campaign.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        campaign.type === 'upsell'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {campaign.type}
                      </span>
                      <button className="flex items-center">
                        {campaign.isActive ? (
                          <ToggleRight className="text-green-500" size={24} />
                        ) : (
                          <ToggleLeft className="text-gray-400" size={24} />
                        )}
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Product:</strong> {campaign.product} • <strong>Trigger:</strong> {campaign.trigger.replace(/_/g, ' ')}
                    </p>

                    <div className="flex items-center space-x-8">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Original Price</p>
                        <p className="text-lg font-bold text-gray-400 line-through">${campaign.originalPrice}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Offer Price</p>
                        <p className="text-lg font-bold text-green-600">${campaign.offerPrice}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Conversion Rate</p>
                        <p className="text-lg font-bold text-gray-900">{campaign.conversionRate}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Revenue</p>
                        <p className="text-lg font-bold text-indigo-600">{campaign.revenue}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg">
                    <Edit size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpsellsDownsells;
