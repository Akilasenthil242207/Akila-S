import React from 'react';
import { 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight, 
  ArrowDownRight,
  Calendar,
  Wallet,
  ChevronRight,
  FileText,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

export default function LoanTracking() {
  const loans = [
    {
      id: 'LN-8492',
      amount: 15000,
      status: 'Active',
      repaid: 4500,
      nextEMI: 'Oct 15, 2023',
      progress: 30,
      color: 'emerald'
    },
    {
      id: 'LN-7210',
      amount: 5000,
      status: 'Processing',
      repaid: 0,
      nextEMI: '-',
      progress: 0,
      color: 'blue'
    }
  ];

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Loan Tracking</h1>
          <p className="text-slate-500">Monitor your active loans and application status.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">
            History
          </button>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-500/10">
            New Application
          </button>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Debt</p>
          <p className="text-3xl font-bold text-slate-900">$20,000.00</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            <span>Across 2 active loans</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Repaid</p>
          <p className="text-3xl font-bold text-slate-900">$4,500.00</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>22.5% of total debt</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Next Payment</p>
          <p className="text-3xl font-bold text-slate-900">$450.00</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-amber-600 font-bold">
            <Clock className="w-4 h-4" />
            <span>Due in 4 days</span>
          </div>
        </div>
      </div>

      {/* Active Loans */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Active Loans & Applications</h2>
        <div className="grid grid-cols-1 gap-6">
          {loans.map((loan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 ${loan.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'} rounded-2xl flex items-center justify-center shadow-sm`}>
                      <FileText className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-slate-900">{loan.id}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                          loan.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                        }`}>
                          {loan.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">Business Expansion Loan</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 lg:max-w-2xl">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Amount</p>
                      <p className="text-lg font-bold text-slate-900">${loan.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Repaid</p>
                      <p className="text-lg font-bold text-slate-900">${loan.repaid.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Next EMI</p>
                      <p className="text-lg font-bold text-slate-900">{loan.nextEMI}</p>
                    </div>
                    <div className="flex items-center justify-end">
                      <button className="p-2 hover:bg-slate-50 rounded-xl transition-all">
                        <ChevronRight className="w-6 h-6 text-slate-300" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500">Repayment Progress</span>
                    <span className="text-slate-900">{loan.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${loan.status === 'Active' ? 'bg-emerald-500' : 'bg-blue-500'}`}
                      style={{ width: `${loan.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {loan.status === 'Active' && (
                <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Insured by FinGrow Protection
                  </div>
                  <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700">Make Payment</button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
