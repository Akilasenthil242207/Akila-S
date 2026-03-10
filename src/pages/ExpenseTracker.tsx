import React, { useState } from 'react';
import { 
  Wallet, 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight, 
  Search, 
  Filter, 
  MoreVertical,
  PieChart as PieChartIcon,
  Calendar,
  DollarSign,
  Tag,
  ShoppingBag,
  Zap,
  Coffee,
  Car
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const data = [
  { name: 'Mon', amount: 400 },
  { name: 'Tue', amount: 300 },
  { name: 'Wed', amount: 200 },
  { name: 'Thu', amount: 278 },
  { name: 'Fri', amount: 189 },
  { name: 'Sat', amount: 239 },
  { name: 'Sun', amount: 349 },
];

const categories = [
  { name: 'Inventory', amount: 1200, color: '#10B981', icon: ShoppingBag },
  { name: 'Utilities', amount: 450, color: '#3B82F6', icon: Zap },
  { name: 'Rent', amount: 800, color: '#6366F1', icon: Wallet },
  { name: 'Transport', amount: 300, color: '#F59E0B', icon: Car },
];

export default function ExpenseTracker() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Expense Tracker</h1>
          <p className="text-slate-500">Monitor your business spending and optimize your budget.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20">
          <Plus className="w-5 h-5" />
          Add Transaction
        </button>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Total Income</p>
              <p className="text-2xl font-bold text-slate-900">$12,450.00</p>
            </div>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-[75%] h-full bg-emerald-500"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
              <ArrowDownRight className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Total Expenses</p>
              <p className="text-2xl font-bold text-slate-900">$8,240.00</p>
            </div>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-[60%] h-full bg-red-500"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Net Profit</p>
              <p className="text-2xl font-bold text-slate-900">$4,210.00</p>
            </div>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-[45%] h-full bg-blue-500"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart & List */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-slate-900">Spending Overview</h3>
              <select className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-600 focus:outline-none">
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="amount" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Recent Transactions</h3>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input 
                    type="text"
                    placeholder="Search..."
                    className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
                <button className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-100 transition-all">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { name: 'Stock Purchase', category: 'Inventory', date: 'Oct 12, 2023', amount: -450.00, icon: ShoppingBag, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { name: 'Monthly Rent', category: 'Rent', date: 'Oct 10, 2023', amount: -800.00, icon: Wallet, color: 'text-blue-600', bg: 'bg-blue-50' },
                { name: 'Client Payment', category: 'Income', date: 'Oct 08, 2023', amount: 1200.00, icon: ArrowUpRight, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { name: 'Electricity Bill', category: 'Utilities', date: 'Oct 05, 2023', amount: -120.00, icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
              ].map((tx, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${tx.bg} ${tx.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                      <tx.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{tx.name}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>{tx.category}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>{tx.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className={`text-sm font-bold ${tx.amount > 0 ? 'text-emerald-600' : 'text-slate-900'}`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                    </p>
                    <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 bg-slate-50 text-xs font-bold text-slate-500 hover:text-slate-900 transition-all uppercase tracking-widest">
              View All Transactions
            </button>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Categories</h3>
            <div className="space-y-6">
              {categories.map((cat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: cat.color }}>
                        <cat.icon className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-700">{cat.name}</span>
                    </div>
                    <span className="font-bold text-slate-900">${cat.amount}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ backgroundColor: cat.color, width: `${(cat.amount / 3000) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 text-sm font-bold text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all border border-dashed border-emerald-200">
              Manage Categories
            </button>
          </div>

          <div className="bg-slate-900 p-8 rounded-[2rem] text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-4">Budget Alert</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                You've spent 85% of your monthly inventory budget. Consider reviewing your upcoming orders.
              </p>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-8">
                <div className="w-[85%] h-full bg-amber-500"></div>
              </div>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/10">
                Adjust Budget
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
