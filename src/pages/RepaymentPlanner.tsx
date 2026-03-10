import React from 'react';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Wallet
} from 'lucide-react';
import { motion } from 'motion/react';

export default function RepaymentPlanner() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  const events = [
    { date: 15, title: 'EMI - LN-8492', amount: 450, status: 'Upcoming', color: 'bg-amber-500' },
    { date: 5, title: 'EMI - LN-7210', amount: 120, status: 'Paid', color: 'bg-emerald-500' },
  ];

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Repayment Planner</h1>
          <p className="text-slate-500">Plan and track your EMI schedules with our interactive calendar.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-bold text-slate-900">October 2023</h2>
          <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div className="grid grid-cols-7 gap-4 mb-8">
            {days.map((day) => (
              <div key={day} className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-4">
            {dates.map((date) => {
              const event = events.find(e => e.date === date);
              return (
                <div 
                  key={date} 
                  className={`aspect-square rounded-2xl border border-slate-50 p-2 flex flex-col justify-between transition-all hover:border-emerald-500 cursor-pointer ${
                    event ? 'bg-slate-50' : 'bg-white'
                  }`}
                >
                  <span className="text-sm font-bold text-slate-400">{date}</span>
                  {event && (
                    <div className={`w-full h-1.5 rounded-full ${event.color}`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Schedule List */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Upcoming Schedule</h3>
            <div className="space-y-6">
              {events.map((event, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    event.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {event.status === 'Paid' ? <CheckCircle2 className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-bold text-slate-900">{event.title}</h4>
                      <span className="text-sm font-bold text-slate-900">${event.amount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-500">Oct {event.date}, 2023</p>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${
                        event.status === 'Paid' ? 'text-emerald-600' : 'text-amber-600'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20">
              Pay All Upcoming
            </button>
          </div>

          <div className="bg-blue-600 p-8 rounded-[2rem] text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-4">Repayment Tip</h3>
              <p className="text-blue-50 text-sm mb-6 opacity-90 leading-relaxed">
                Setting up auto-pay can help you avoid late fees and improve your financial score by 15% on average.
              </p>
              <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg shadow-blue-900/20">
                Enable Auto-Pay
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
