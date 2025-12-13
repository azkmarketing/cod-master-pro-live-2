import React from 'react';
import {
  TrendingUp,
  ShoppingCart,
  DollarSign,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      name: 'Total Orders',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Revenue',
      value: '$48,392',
      change: '+18.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Conversion Rate',
      value: '3.24%',
      change: '+0.8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Active Customers',
      value: '1,543',
      change: '-2.4%',
      trend: 'down',
      icon: Users,
      color: 'from-orange-500 to-orange-600'
    },
  ];

  const recentOrders = [
    {
      id: '#ORD-8274',
      customer: 'Ahmed Al-Sayed',
      amount: '$127.50',
      status: 'confirmed',
      time: '5 mins ago',
      items: 2
    },
    {
      id: '#ORD-8273',
      customer: 'Fatima Hassan',
      amount: '$89.99',
      status: 'pending',
      time: '12 mins ago',
      items: 1
    },
    {
      id: '#ORD-8272',
      customer: 'Mohammed Ali',
      amount: '$234.00',
      status: 'confirmed',
      time: '28 mins ago',
      items: 4
    },
    {
      id: '#ORD-8271',
      customer: 'Sara Abdullah',
      amount: '$67.50',
      status: 'cancelled',
      time: '1 hour ago',
      items: 1
    },
    {
      id: '#ORD-8270',
      customer: 'Khalid Rahman',
      amount: '$156.75',
      status: 'confirmed',
      time: '2 hours ago',
      items: 3
    },
  ];

  const topProducts = [
    { name: 'LUBAN Frankincense Oil', sales: 342, revenue: '$8,208', trend: 'up' },
    { name: 'Premium Tallow Cream', sales: 289, revenue: '$6,936', trend: 'up' },
    { name: 'Gift Bundle Set', sales: 156, revenue: '$7,488', trend: 'up' },
    { name: 'Luxury Serum', sales: 123, revenue: '$4,920', trend: 'down' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle2 className="text-green-500" size={18} />;
      case 'pending':
        return <Clock className="text-yellow-500" size={18} />;
      case 'cancelled':
        return <XCircle className="text-red-500" size={18} />;
      default:
        return <AlertCircle className="text-gray-500" size={18} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your store.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Last updated</p>
          <p className="text-sm font-medium text-gray-900">Just now</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div className={`flex items-center space-x-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  <span className="text-sm font-semibold">{stat.change}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.name}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">View All</button>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(order.status)}
                  <div>
                    <p className="font-semibold text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{order.amount}</p>
                    <p className="text-xs text-gray-500">{order.items} items</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                  <span className="text-xs text-gray-500 w-20 text-right">{order.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Top Products</h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="p-4 hover:bg-gray-50 rounded-xl transition-colors border border-gray-100">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg font-bold text-sm">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.sales} sales</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold text-gray-900">{product.revenue}</span>
                  {product.trend === 'up' ? (
                    <ArrowUpRight className="text-green-500" size={16} />
                  ) : (
                    <ArrowDownRight className="text-red-500" size={16} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to boost your sales?</h2>
        <p className="text-indigo-100 mb-6">Create your first COD form or set up quantity offers to increase conversions.</p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-lg transition-shadow">
            Create New Form
          </button>
          <button className="px-6 py-3 bg-indigo-700 text-white rounded-xl font-semibold hover:bg-indigo-800 transition-colors">
            Setup Offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
