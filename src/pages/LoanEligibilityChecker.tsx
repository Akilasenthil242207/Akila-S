import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  DollarSign, 
  Briefcase, 
  CheckCircle2, 
  XCircle, 
  Info,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoanEligibilityChecker() {
  const [income, setIncome] = useState(5000);
  const [expenses, setExpenses] = useState(2000);
  const [existingEMI, setExistingEMI] = useState(0);
  const [yearsInBusiness, setYearsInBusiness] = useState(2);
  const [isEligible, setIsEligible] = useState(false);
  const [maxLoanAmount, setMaxLoanAmount] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Simple eligibility logic
    const disposableIncome = income - expenses - existingEMI;
    const dti = (existingEMI / income) * 100;
    
    let currentScore = 0;
    if (disposableIncome > 1000) currentScore += 40;
    if (yearsInBusiness >= 2) currentScore += 30;
    if (dti < 30) currentScore += 30;
    
    setScore(currentScore);
    setIsEligible(currentScore >= 60);
    setMaxLoanAmount(Math.max(0, disposableIncome * 12));
  }, [income, expenses, existingEMI, yearsInBusiness]);

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-display font-bold text-slate-900">Loan Eligibility Checker</h1>
        <p className="text-slate-500">Find out if you qualify for a business loan in seconds.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Inputs */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700">Monthly Income ($)</label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700">Monthly Expenses ($)</label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    type="number"
                    value={expenses}
                    onChange={(e) => setExpenses(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700">Existing Loan EMIs ($)</label>
                <div className="relative">
                  <RefreshCw className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    type="number"
                    value={existingEMI}
                    onChange={(e) => setExistingEMI(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700">Years in Business</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    type="number"
                    value={yearsInBusiness}
                    onChange={(e) => setYearsInBusiness(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-slate-900 p-8 rounded-[2rem] text-white flex items-start gap-6 relative overflow-hidden">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Eligibility Guidelines</h3>
              <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside leading-relaxed">
                <li>Minimum 2 years of business operations is preferred.</li>
                <li>Debt-to-Income ratio should ideally be below 40%.</li>
                <li>Stable monthly revenue increases your chances of approval.</li>
                <li>Clean repayment history of previous loans is critical.</li>
              </ul>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
              isEligible ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
            }`}>
              {isEligible ? <CheckCircle2 className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {isEligible ? 'You are Eligible!' : 'Not Eligible Yet'}
            </h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              {isEligible 
                ? 'Based on your inputs, you qualify for a business loan with FinGrow.' 
                : 'Your current financial profile does not meet the minimum requirements for a loan.'}
            </p>

            <div className="w-full space-y-4 mb-8">
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Eligibility Score</p>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-3xl font-bold text-slate-900">{score}</p>
                  <p className="text-sm text-slate-400">/ 100</p>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full mt-3 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${isEligible ? 'bg-emerald-500' : 'bg-red-500'}`}
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
              </div>

              {isEligible && (
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Estimated Max Loan</p>
                  <p className="text-3xl font-bold text-emerald-700">${maxLoanAmount.toLocaleString()}</p>
                </div>
              )}
            </div>

            {isEligible ? (
              <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group">
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button className="w-full py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all">
                Improve My Score
              </button>
            )}
          </div>

          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <h4 className="font-bold text-slate-900">How to improve?</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Try reducing your monthly expenses or paying off existing debts to increase your disposable income and eligibility score.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
