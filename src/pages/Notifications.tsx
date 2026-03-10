import React, { useState } from 'react';
import { 
  Bell, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight, 
  MoreVertical,
  Trash2,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'EMI Payment Reminder',
      desc: 'Your upcoming EMI for loan LN-8492 is due in 3 days. Ensure your account has sufficient funds.',
      type: 'payment',
      time: '2 hours ago',
      read: false,
      icon: Clock,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      id: 2,
      title: 'Loan Application Approved',
      desc: 'Great news! Your application for the Business Expansion Loan (LN-7210) has been approved.',
      type: 'success',
      time: '5 hours ago',
      read: false,
      icon: CheckCircle2,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      id: 3,
      title: 'New Training Module Available',
      desc: 'A new module "Digital Marketing for Small Businesses" is now available in your training dashboard.',
      type: 'info',
      time: '1 day ago',
      read: true,
      icon: TrendingUp,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 4,
      title: 'Security Alert',
      desc: 'Your password was successfully changed. If you did not perform this action, contact support immediately.',
      type: 'alert',
      time: '2 days ago',
      read: true,
      icon: ShieldCheck,
      color: 'text-red-600',
      bg: 'bg-red-50'
    }
  ]);

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="p-6 lg:p-10 max-w-4xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
            <Bell className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900">Notifications</h1>
            <p className="text-slate-500">Stay updated with your business and loan activities.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={markAllRead}
            className="px-4 py-2 text-sm font-bold text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
          >
            Mark all as read
          </button>
          <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-50">
          <AnimatePresence initial={false}>
            {notifications.length > 0 ? (
              notifications.map((n, i) => (
                <motion.div
                  key={n.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: i * 0.05 }}
                  className={`p-6 flex items-start gap-6 hover:bg-slate-50 transition-all group relative ${
                    !n.read ? 'bg-emerald-50/30' : ''
                  }`}
                >
                  {!n.read && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                  )}
                  <div className={`w-12 h-12 ${n.bg} ${n.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <n.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-sm font-bold ${!n.read ? 'text-slate-900' : 'text-slate-600'}`}>
                        {n.title}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {n.time}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed pr-8">
                      {n.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => deleteNotification(n.id)}
                      className="p-2 text-slate-300 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="p-20 text-center space-y-4">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
                  <Bell className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">No Notifications</h3>
                <p className="text-slate-500 max-w-xs mx-auto">
                  You're all caught up! We'll notify you when something important happens.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
        {notifications.length > 0 && (
          <button className="w-full py-4 bg-slate-50 text-xs font-bold text-slate-500 hover:text-slate-900 transition-all uppercase tracking-widest">
            Load More Notifications
          </button>
        )}
      </div>
    </div>
  );
}
