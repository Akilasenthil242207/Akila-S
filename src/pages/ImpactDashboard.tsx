import React from 'react';
import { 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  GraduationCap, 
  ArrowUpRight, 
  ArrowDownRight,
  Globe,
  Heart,
  Zap,
  CheckCircle2,
  MapPin
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
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: '2020', entrepreneurs: 1200, loans: 800 },
  { name: '2021', entrepreneurs: 3500, loans: 2400 },
  { name: '2022', entrepreneurs: 7800, loans: 5600 },
  { name: '2023', entrepreneurs: 12450, loans: 9200 },
];

export default function ImpactDashboard() {
  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-12">
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-display font-bold text-slate-900">Our Impact</h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          See how FinGrow is empowering entrepreneurs and building stronger communities through financial support and education.
        </p>
      </header>

      {/* Global Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Entrepreneurs Helped', value: '12,450+', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Loans Processed', value: '$50M+', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Training Completed', value: '8,200+', icon: GraduationCap, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Communities Impacted', value: '450+', icon: Globe, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm text-center"
          >
            <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-slate-100`}>
              <stat.icon className="w-7 h-7" />
            </div>
            <p className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Growth Chart */}
      <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Growth Over Time</h3>
            <p className="text-slate-500">Number of entrepreneurs and loans processed since 2020.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Entrepreneurs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Loans</span>
            </div>
          </div>
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorEnt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLoans" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} />
              <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
              <Area type="monotone" dataKey="entrepreneurs" stroke="#10B981" strokeWidth={4} fillOpacity={1} fill="url(#colorEnt)" />
              <Area type="monotone" dataKey="loans" stroke="#3B82F6" strokeWidth={4} fillOpacity={1} fill="url(#colorLoans)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Impact Stories */}
      <div className="space-y-8">
        <h2 className="text-3xl font-display font-bold text-slate-900">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: 'Anita Devi',
              location: 'Rajasthan, India',
              story: 'Anita used a $500 loan to buy a sewing machine and start her tailoring business. Today, she employs 4 other women in her village.',
              impact: 'Created 4 local jobs',
              image: 'https://picsum.photos/seed/story1/400/300'
            },
            {
              name: 'Ramesh Kumar',
              location: 'Bihar, India',
              story: 'Ramesh leveraged our financial literacy training to optimize his grocery store inventory. His profits increased by 40% in just 6 months.',
              impact: '40% Profit Growth',
              image: 'https://picsum.photos/seed/story2/400/300'
            }
          ].map((story, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row group hover:border-emerald-500 transition-all">
              <div className="w-full md:w-48 h-48 md:h-auto relative overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-1 space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest">
                  <MapPin className="w-3 h-3" />
                  {story.location}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{story.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{story.story}"</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                  <Heart className="w-3 h-3" />
                  {story.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
