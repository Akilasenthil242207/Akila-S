import React, { useState } from 'react';
import { 
  MessageSquare, 
  ThumbsUp, 
  Share2, 
  Search, 
  Plus, 
  Filter, 
  User, 
  TrendingUp, 
  Award,
  Clock,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';

export default function CommunityForum() {
  const [activeTab, setActiveTab] = useState('trending');

  const posts = [
    {
      id: 1,
      author: 'Sarah Jenkins',
      role: 'Business Owner',
      title: 'How I managed my first loan repayment during a slow month',
      content: 'Last month was tough due to seasonal changes, but I managed to stay on track with my EMI by cutting down on non-essential inventory...',
      likes: 45,
      comments: 12,
      tags: ['Loan Management', 'Success Story'],
      time: '2 hours ago'
    },
    {
      id: 2,
      author: 'Michael Chen',
      role: 'Agri-Entrepreneur',
      title: 'Best government schemes for small-scale farmers in 2023?',
      content: 'I am looking for information on schemes that support irrigation equipment purchases. Has anyone applied for the PM-KUSUM scheme recently?',
      likes: 28,
      comments: 34,
      tags: ['Govt Schemes', 'Agriculture'],
      time: '5 hours ago'
    }
  ];

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Community Forum</h1>
          <p className="text-slate-500">Connect, share, and learn from fellow entrepreneurs.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20">
          <Plus className="w-5 h-5" />
          Start Discussion
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Search & Filter */}
          <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text"
                placeholder="Search discussions..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              {['Trending', 'Latest', 'Unanswered'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                    activeTab === tab.toLowerCase() 
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' 
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Posts List */}
          <div className="space-y-6">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:border-emerald-500 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{post.author}</h4>
                    <p className="text-xs text-slate-500">{post.role} • {post.time}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">{post.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">{post.content}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-slate-400 hover:text-emerald-600 transition-colors">
                      <ThumbsUp className="w-5 h-5" />
                      <span className="text-xs font-bold">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-xs font-bold">{post.comments}</span>
                    </button>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Trending Topics</h3>
            <div className="space-y-4">
              {[
                { name: 'Mudra Loan Tips', count: 156 },
                { name: 'Inventory Management', count: 89 },
                { name: 'Digital Payments', count: 234 },
                { name: 'Tax Compliance', count: 45 },
              ].map((topic, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-emerald-600 transition-colors">{topic.name}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400">{topic.count}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 text-sm font-bold text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all border border-dashed border-emerald-200">
              View All Topics
            </button>
          </div>

          <div className="bg-slate-900 p-8 rounded-[2rem] text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Top Contributors</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Help others and earn badges! Top contributors get exclusive access to premium financial webinars.
              </p>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold">Entrepreneur {i + 1}</p>
                      <p className="text-[10px] text-slate-500">240 Points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
