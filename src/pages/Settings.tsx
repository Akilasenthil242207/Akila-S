import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Lock, 
  User, 
  Globe, 
  ShieldCheck, 
  CreditCard, 
  HelpCircle, 
  ChevronRight, 
  Moon, 
  Sun, 
  Smartphone,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  const [darkMode, setDarkMode] = useState(false);

  const settings = [
    { id: 'general', label: 'General Settings', icon: SettingsIcon },
    { id: 'account', label: 'Account & Profile', icon: User },
    { id: 'security', label: 'Security & Privacy', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing & Payments', icon: CreditCard },
  ];

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
            <SettingsIcon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900">Settings</h1>
            <p className="text-slate-500">Manage your account preferences and application settings.</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20">
          Save Changes
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Tabs */}
        <div className="space-y-4">
          {settings.map((tab) => (
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
                className="space-y-10"
              >
                {activeTab === 'general' && (
                  <>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-slate-900">General Settings</h2>
                      <p className="text-slate-500">Customize your experience on the FinGrow platform.</p>
                    </div>
                    
                    <div className="space-y-8">
                      <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                            <Globe className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">Language</p>
                            <p className="text-xs text-slate-500">Choose your preferred language for the platform.</p>
                          </div>
                        </div>
                        <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all">
                          <option>English</option>
                          <option>Hindi</option>
                          <option>Spanish</option>
                          <option>French</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                            {darkMode ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">Dark Mode</p>
                            <p className="text-xs text-slate-500">Switch between light and dark themes.</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => setDarkMode(!darkMode)}
                          className={`w-14 h-8 rounded-full p-1 transition-all ${darkMode ? 'bg-emerald-600' : 'bg-slate-200'}`}
                        >
                          <div className={`w-6 h-6 bg-white rounded-full shadow-sm transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                            <Smartphone className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">Mobile App Sync</p>
                            <p className="text-xs text-slate-500">Sync your data across all your devices.</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-600">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="text-xs font-bold">Synced</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'security' && (
                  <>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-slate-900">Security & Privacy</h2>
                      <p className="text-slate-500">Manage your account security and data privacy.</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                            <ShieldCheck className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">Two-Factor Authentication</p>
                            <p className="text-xs text-slate-500">Secure your account with 2FA.</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl">Enable</button>
                      </div>
                      
                      <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                            <Lock className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">Change Password</p>
                            <p className="text-xs text-slate-500">Update your account password regularly.</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-slate-200 text-slate-600 text-xs font-bold rounded-xl">Update</button>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="bg-red-50 p-8 rounded-[2.5rem] border border-red-100 flex items-start gap-6 relative overflow-hidden">
            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-red-600">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-red-900 mb-2">Danger Zone</h3>
              <p className="text-red-700 text-sm mb-6 leading-relaxed">
                Deleting your account is permanent and cannot be undone. All your data, including loan history and training progress, will be lost.
              </p>
              <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-900/20">
                Delete Account
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
