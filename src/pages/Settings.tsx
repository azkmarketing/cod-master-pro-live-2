import React, { useState } from 'react';
import { Save, Globe, CreditCard, Bell, Shield, Palette, Code } from 'lucide-react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    storeName: 'LUBAN BIO',
    storeEmail: 'support@lubanbio.com',
    storePhone: '+966 50 123 4567',
    currency: 'SAR',
    language: 'en',
    timezone: 'Asia/Riyadh',
    codFee: 15,
    minOrderValue: 50,
    maxOrderValue: 5000,
    emailNotifications: true,
    smsNotifications: true,
    whatsappNotifications: true,
    orderConfirmation: true,
    abandonedCart: true,
    primaryColor: '#4F46E5',
    buttonRadius: 'rounded-xl',
    fontFamily: 'Inter'
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Configure your app preferences</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg font-semibold">
          <Save size={20} />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <button className="w-full flex items-center space-x-3 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium">
            <Globe size={18} />
            <span>General</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 rounded-xl font-medium">
            <CreditCard size={18} />
            <span>Payment & COD</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 rounded-xl font-medium">
            <Bell size={18} />
            <span>Notifications</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 rounded-xl font-medium">
            <Palette size={18} />
            <span>Appearance</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 rounded-xl font-medium">
            <Shield size={18} />
            <span>Security</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 rounded-xl font-medium">
            <Code size={18} />
            <span>API & Webhooks</span>
          </button>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">General Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Store Name</label>
                <input
                  type="text"
                  value={settings.storeName}
                  onChange={(e) => setSettings({...settings, storeName: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Store Email</label>
                  <input
                    type="email"
                    value={settings.storeEmail}
                    onChange={(e) => setSettings({...settings, storeEmail: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Store Phone</label>
                  <input
                    type="tel"
                    value={settings.storePhone}
                    onChange={(e) => setSettings({...settings, storePhone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Currency</label>
                  <select
                    value={settings.currency}
                    onChange={(e) => setSettings({...settings, currency: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="SAR">SAR (ر.س)</option>
                    <option value="AED">AED (د.إ)</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Language</label>
                  <select
                    value={settings.language}
                    onChange={(e) => setSettings({...settings, language: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Timezone</label>
                  <select
                    value={settings.timezone}
                    onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="Asia/Riyadh">Riyadh (GMT+3)</option>
                    <option value="Asia/Dubai">Dubai (GMT+4)</option>
                    <option value="UTC">UTC</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">COD Configuration</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">COD Fee (SAR)</label>
                  <input
                    type="number"
                    value={settings.codFee}
                    onChange={(e) => setSettings({...settings, codFee: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Min Order Value</label>
                  <input
                    type="number"
                    value={settings.minOrderValue}
                    onChange={(e) => setSettings({...settings, minOrderValue: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Max Order Value</label>
                  <input
                    type="number"
                    value={settings.maxOrderValue}
                    onChange={(e) => setSettings({...settings, maxOrderValue: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              {[
                { label: 'Email Notifications', key: 'emailNotifications' },
                { label: 'SMS Notifications', key: 'smsNotifications' },
                { label: 'WhatsApp Notifications', key: 'whatsappNotifications' },
                { label: 'Order Confirmations', key: 'orderConfirmation' },
                { label: 'Abandoned Cart Reminders', key: 'abandonedCart' }
              ].map((item) => (
                <label key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <span className="text-gray-700 font-medium">{item.label}</span>
                  <input
                    type="checkbox"
                    checked={settings[item.key as keyof typeof settings] as boolean}
                    onChange={(e) => setSettings({...settings, [item.key]: e.target.checked})}
                    className="w-5 h-5 text-indigo-600 rounded"
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
