import React from 'react';
import { 
  PieChart as PieChartIcon, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowDownRight,
  Info,
  Zap,
  Target,
  BarChart3
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const radarData = [
  { subject: 'Profitability', A: 120, fullMark: 150 },
  { subject: 'Liquidity', A: 98, fullMark: 150 },
  { subject: 'Efficiency', A: 86, fullMark: 150 },
  { subject: 'Growth', A: 99, fullMark: 150 },
  { subject: 'Stability', A: 85, fullMark: 150 },
];

const barData = [
  { name: 'Q1', revenue: 4000, profit: 2400 },
  { name: 'Q2', revenue: 3000, profit: 1398 },
  { name: 'Q3', revenue: 2000, profit: 9800 },
  { name: 'Q4', revenue: 2780, profit: 3908 },
];

export default function BusinessFinancialAnalyzer() {
  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Business Financial Analyzer</h1>
          <p className="text-slate-500">Deep dive into your business performance and health.</p>
        </div>
        <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
          <RefreshCw className="w-5 h-5" />
          Refresh Analysis
        </button>
      </header>

      {/* Health Score Card */}
      <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              AI Insights
            </div>
            <h2 className="text-4xl font-display font-bold">Your Business Health is <span className="text-emerald-400">Strong</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Your profitability and growth metrics are above average for your industry. However, there's room to improve your liquidity by optimizing inventory turnover.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium">Healthy Cash Flow</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium">High Inventory Cost</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle className="text-white/10" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                <circle className="text-emerald-500" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="50.24" strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold">82</span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Health Score</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Radar Chart */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-8">Performance Radar</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#f1f5f9" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name="Business"
                  dataKey="A"
                  stroke="#10B981"
                  strokeWidth={3}
                  fill="#10B981"
                  fillOpacity={0.1}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue vs Profit */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-8">Revenue vs Profit</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Bar dataKey="revenue" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                <Bar dataKey="profit" fill="#10B981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Recommended Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Reduce Inventory', desc: 'Your current stock levels are 20% higher than needed. Liquidate slow-moving items.', icon: Target, color: 'text-amber-600', bg: 'bg-amber-50' },
            { title: 'Reinvest Profit', desc: 'You have $2,000 in idle cash. Reinvesting in marketing could boost Q4 sales by 15%.', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { title: 'Review Subscriptions', desc: 'We detected 3 recurring business expenses that haven\'t been used in 60 days.', icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50' },
          ].map((action, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm card-hover">
              <div className={`w-12 h-12 ${action.bg} ${action.color} rounded-2xl flex items-center justify-center mb-4`}>
                <action.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{action.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{action.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Add RefreshCw to imports
import { RefreshCw } from 'lucide-react';
