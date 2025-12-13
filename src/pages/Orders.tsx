import React, { useState } from 'react';
import { Search, Filter, Download, Eye, CheckCircle2, Clock, XCircle, Package, Truck } from 'lucide-react';

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: '#ORD-8274',
      customer: 'Ahmed Al-Sayed',
      email: 'ahmed@email.com',
      phone: '+966 50 123 4567',
      amount: '$127.50',
      status: 'confirmed',
      date: '2024-12-12 10:30',
      items: 2,
      address: 'Riyadh, King Fahd District',
      paymentMethod: 'COD'
    },
    {
      id: '#ORD-8273',
      customer: 'Fatima Hassan',
      email: 'fatima@email.com',
      phone: '+966 55 234 5678',
      amount: '$89.99',
      status: 'pending',
      date: '2024-12-12 10:18',
      items: 1,
      address: 'Jeddah, Al-Zahra District',
      paymentMethod: 'COD'
    },
    {
      id: '#ORD-8272',
      customer: 'Mohammed Ali',
      email: 'mohammed@email.com',
      phone: '+971 50 345 6789',
      amount: '$234.00',
      status: 'shipped',
      date: '2024-12-12 09:42',
      items: 4,
      address: 'Dubai, Marina District',
      paymentMethod: 'COD'
    },
    {
      id: '#ORD-8271',
      customer: 'Sara Abdullah',
      email: 'sara@email.com',
      phone: '+966 56 456 7890',
      amount: '$67.50',
      status: 'cancelled',
      date: '2024-12-12 08:15',
      items: 1,
      address: 'Dammam, Corniche',
      paymentMethod: 'COD'
    },
    {
      id: '#ORD-8270',
      customer: 'Khalid Rahman',
      email: 'khalid@email.com',
      phone: '+965 50 567 8901',
      amount: '$156.75',
      status: 'delivered',
      date: '2024-12-11 16:22',
      items: 3,
      address: 'Kuwait City, Salmiya',
      paymentMethod: 'COD'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle2 className="text-green-500" size={20} />;
      case 'pending':
        return <Clock className="text-yellow-500" size={20} />;
      case 'shipped':
        return <Truck className="text-blue-500" size={20} />;
      case 'delivered':
        return <Package className="text-green-600" size={20} />;
      case 'cancelled':
        return <XCircle className="text-red-500" size={20} />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'shipped':
        return 'bg-blue-100 text-blue-700';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-600 mt-1">Manage and track all your COD orders</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-medium">
          <Download size={18} />
          <span>Export CSV</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by order ID, customer name, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-medium"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <button className="flex items-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium">
              <Filter size={18} />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Order ID</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Customer</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Date & Time</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Amount</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-semibold text-gray-900">{order.id}</div>
                    <div className="text-xs text-gray-500">{order.items} items</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-medium text-gray-900">{order.customer}</div>
                    <div className="text-xs text-gray-500">{order.phone}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-sm text-gray-700">{order.date.split(' ')[0]}</div>
                    <div className="text-xs text-gray-500">{order.date.split(' ')[1]}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-bold text-gray-900">{order.amount}</div>
                    <div className="text-xs text-gray-500">{order.paymentMethod}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(order.status)}
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <button className="flex items-center space-x-1 px-3 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 font-medium text-sm">
                      <Eye size={16} />
                      <span>View</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
          <div className="text-sm text-gray-600">
            Showing <strong>1-5</strong> of <strong>142</strong> orders
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium">
              Previous
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
