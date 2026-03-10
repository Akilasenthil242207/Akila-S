import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  ShieldCheck, 
  Bell, 
  Lock, 
  LogOut, 
  Camera,
  ChevronRight,
  CheckCircle2,
  Award,
  TrendingUp,
  CreditCard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('personal');

  const user = {
    name: 'Sarah Jenkins',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 123-4567',
    business: 'Jenkins Boutique',
    location: 'Rajasthan, India',
    joined: 'Jan 2023',
    score: 82,
    level: 'Silver Entrepreneur'
  };

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="relative group">
            <div className="w-24 h-24 bg-slate-100 rounded-[2rem] border-4 border-white shadow-xl flex items-center justify-center text-slate-400 overflow-hidden">
              <User className="w-12 h-12" />
              <img 
                src="https://picsum.photos/seed/sarah/200/200" 
                alt="Profile" 
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
            <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 border-2 border-white hover:bg-emerald-700 transition-all">
              <Camera className="w-5 h-5" />
            </button>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-display font-bold text-slate-900">{user.name}</h1>
              <div className="px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1 border border-amber-100">
                <Award className="w-3 h-3" />
                {user.level}
              </div>
            </div>
            <p className="text-slate-500 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {user.location} • Member since {user.joined}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
            Edit Profile
          </button>
          <button className="px-6 py-3 bg-red-50 text-red-600 rounded-2xl text-sm font-bold hover:bg-red-100 transition-all flex items-center gap-2">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Tabs */}
        <div className="space-y-4">
          {[
            { id: 'personal', label: 'Personal Info', icon: User },
            { id: 'business', label: 'Business Details', icon: Briefcase },
            { id: 'security', label: 'Security & Privacy', icon: Lock },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'billing', label: 'Billing & Payments', icon: CreditCard },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center justify-between p-5 rounded-[1.5rem] transition-all ${
                activeTab === tab.id 
                  ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-500/20' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-emerald-500'
              }`}
            >
              <div className="flex items-center gap-4">
                <tab.icon className="w-5 h-5" />
                <span className="font-bold text-sm">{tab.label}</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === tab.id ? 'rotate-90' : ''}`} />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-8"
              >
                {activeTab === 'personal' && (
                  <>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-slate-900">Personal Information</h2>
                      <p className="text-slate-500">Manage your personal details and contact information.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <User className="w-5 h-5 text-slate-400" />
                          <span className="text-sm font-bold text-slate-900">{user.name}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <Mail className="w-5 h-5 text-slate-400" />
                          <span className="text-sm font-bold text-slate-900">{user.email}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <Phone className="w-5 h-5 text-slate-400" />
                          <span className="text-sm font-bold text-slate-900">{user.phone}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</label>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <MapPin className="w-5 h-5 text-slate-400" />
                          <span className="text-sm font-bold text-slate-900">{user.location}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'business' && (
                  <>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-slate-900">Business Details</h2>
                      <p className="text-slate-500">Information about your business operations and registration.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Business Name</label>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <Briefcase className="w-5 h-5 text-slate-400" />
                          <span className="text-sm font-bold text-slate-900">{user.business}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Business Type</label>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <TrendingUp className="w-5 h-5 text-slate-400" />
                          <span className="text-sm font-bold text-slate-900">Retail Boutique</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'security' && (
                  <>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-slate-900">Security & Privacy</h2>
                      <p className="text-slate-500">Protect your account and manage your privacy settings.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                            <Lock className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">Two-Factor Authentication</p>
                            <p className="text-xs text-slate-500">Add an extra layer of security to your account.</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl">Enable</button>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                            <ShieldCheck className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">Data Privacy</p>
                            <p className="text-xs text-slate-500">Manage how your data is shared with lenders.</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-slate-200 text-slate-600 text-xs font-bold rounded-xl">Manage</button>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats Widget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Financial Score</p>
                <div className="flex items-end gap-3 mb-6">
                  <p className="text-5xl font-bold">{user.score}</p>
                  <p className="text-slate-400 font-bold mb-1">/ 100</p>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-6">
                  <div className="w-[82%] h-full bg-emerald-500"></div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Your score is in the top 15% of entrepreneurs in your region. Keep it up!
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            </div>
            
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Badges Earned</h3>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 shadow-sm border border-amber-100">
                      <Award className="w-8 h-8" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Level {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
