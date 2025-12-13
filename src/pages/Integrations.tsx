import React from 'react';
import { MessageCircle, Mail, Bell, Database, Webhook, Check, ExternalLink } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    {
      name: 'WhatsApp Business',
      description: 'Send order confirmations and updates via WhatsApp',
      icon: MessageCircle,
      color: 'from-green-500 to-green-600',
      isConnected: true,
      features: ['Order notifications', 'Delivery updates', 'Customer support']
    },
    {
      name: 'SMS Gateway',
      description: 'Automated SMS notifications for orders and confirmations',
      icon: MessageCircle,
      color: 'from-blue-500 to-blue-600',
      isConnected: true,
      features: ['OTP verification', 'Order status', 'Delivery alerts']
    },
    {
      name: 'Email Marketing',
      description: 'Automated email campaigns and order receipts',
      icon: Mail,
      color: 'from-purple-500 to-purple-600',
      isConnected: false,
      features: ['Order receipts', 'Follow-up emails', 'Marketing campaigns']
    },
    {
      name: 'Push Notifications',
      description: 'Real-time browser and mobile push notifications',
      icon: Bell,
      color: 'from-orange-500 to-orange-600',
      isConnected: false,
      features: ['Order updates', 'Promotional alerts', 'Abandoned cart']
    },
    {
      name: 'Google Sheets',
      description: 'Sync orders automatically to Google Sheets',
      icon: Database,
      color: 'from-green-600 to-green-700',
      isConnected: true,
      features: ['Order export', 'Analytics sync', 'Custom reports']
    },
    {
      name: 'Custom Webhooks',
      description: 'Connect to any external service via webhooks',
      icon: Webhook,
      color: 'from-gray-600 to-gray-700',
      isConnected: false,
      features: ['Custom endpoints', 'Event triggers', 'API integration']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Integrations & Messaging</h1>
          <p className="text-gray-600 mt-1">Connect your favorite tools and services</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map((integration) => {
          const Icon = integration.icon;
          return (
            <div key={integration.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{integration.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{integration.description}</p>
                  </div>
                </div>
                {integration.isConnected && (
                  <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    <Check size={14} />
                    <span className="text-xs font-semibold">Connected</span>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-700 mb-2">Features</h4>
                <ul className="space-y-1">
                  {integration.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all ${
                integration.isConnected
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg'
              }`}>
                {integration.isConnected ? (
                  <>
                    <SettingsIcon size={18} />
                    <span>Configure</span>
                  </>
                ) : (
                  <>
                    <ExternalLink size={18} />
                    <span>Connect</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Need a custom integration?</h2>
        <p className="text-indigo-100 mb-6">We can help you connect with virtually any service or API</p>
        <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-lg transition-shadow">
          Contact Support
        </button>
      </div>
    </div>
  );
};

const SettingsIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m-9-9h6m6 0h6" />
  </svg>
);

export default Integrations;
