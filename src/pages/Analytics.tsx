import React from 'react';
import { TrendingUp, DollarSign, ShoppingCart, Users, Calendar, Download } from 'lucide-react';

const Analytics = () => {
  const chartData = [
    { day: 'Mon', orders: 42, revenue: 3200 },
    { day: 'Tue', orders: 38, revenue: 2900 },
    { day: 'Wed', orders: 51, revenue: 4100 },
    { day: 'Thu', orders: 45, revenue: 3600 },
    { day: 'Fri', orders: 62, revenue: 5200 },
    { day: 'Sat', orders: 73, revenue: 6400 },
    { day: 'Sun', orders: 58, revenue: 4800 }
  ];

  const maxRevenue = Math.max(...chartData.map(d => d.revenue));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Track your performance and insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <select className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-medium">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-medium">
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '$30,230', change: '+15.3%', icon: DollarSign, color: 'from-green-500 to-green-600' },
          { label: 'Orders', value: '369', change: '+8.2%', icon: ShoppingCart, color: 'from-blue-500 to-blue-600' },
          { label: 'Avg Order Value', value: '$81.95', change: '+6.5%', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
          { label: 'Customers', value: '284', change: '+12.1%', icon: Users, color: 'from-orange-500 to-orange-600' }
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Icon className="text-white" size={20} />
                </div>
                <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Revenue Overview</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar size={16} />
            <span>Last 7 days</span>
          </div>
        </div>

        <div className="flex items-end justify-between h-64 space-x-4">
          {chartData.map((day) => (
            <div key={day.day} className="flex-1 flex flex-col items-center">
              <div className="relative w-full mb-3">
                <div
                  className="w-full bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-lg hover:from-indigo-600 hover:to-purple-600 transition-all cursor-pointer"
                  style={{ height: `${(day.revenue / maxRevenue) * 200}px` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                    ${day.revenue.toLocaleString()}
                  </div>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-600">{day.day}</span>
              <span className="text-xs text-gray-500">{day.orders} orders</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Top Countries</h2>
          <div className="space-y-4">
            {[
              { country: 'Saudi Arabia', flag: '🇸🇦', orders: 142, revenue: '$18,260', percent: 38 },
              { country: 'United Arab Emirates', flag: '🇦🇪', orders: 89, revenue: '$11,470', percent: 24 },
              { country: 'Kuwait', flag: '🇰🇼', orders: 67, revenue: '$8,635', percent: 18 },
              { country: 'Qatar', flag: '🇶🇦', orders: 45, revenue: '$5,805', percent: 12 },
              { country: 'Bahrain', flag: '🇧🇭', orders: 26, revenue: '$3,354', percent: 8 }
            ].map((country) => (
              <div key={country.country} className="flex items-center space-x-4">
                <span className="text-2xl">{country.flag}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-900">{country.country}</span>
                    <span className="text-sm font-medium text-gray-600">{country.orders} orders</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full"
                      style={{ width: `${country.percent}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{country.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Conversion Funnel</h2>
          <div className="space-y-4">
            {[
              { stage: 'Form Views', count: 1847, percent: 100, color: 'bg-blue-500' },
              { stage: 'Form Started', count: 1283, percent: 69, color: 'bg-indigo-500' },
              { stage: 'Form Completed', count: 892, percent: 48, color: 'bg-purple-500' },
              { stage: 'Orders Placed', count: 369, percent: 20, color: 'bg-green-500' }
            ].map((stage) => (
              <div key={stage.stage}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">{stage.stage}</span>
                  <div className="text-right">
                    <span className="text-lg font-bold text-gray-900">{stage.count}</span>
                    <span className="text-sm text-gray-500 ml-2">({stage.percent}%)</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${stage.color} h-full rounded-full transition-all`}
                    style={{ width: `${stage.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
