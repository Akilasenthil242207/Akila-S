import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Info, 
  TrendingUp, 
  Calendar, 
  DollarSign,
  PieChart as PieChartIcon
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip,
  Legend
} from 'recharts';

export default function EMICalculator() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    const r = rate / (12 * 100);
    const n = tenure;
    const emiValue = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    if (isFinite(emiValue)) {
      setEmi(Math.round(emiValue));
      const totalPay = emiValue * n;
      setTotalPayment(Math.round(totalPay));
      setTotalInterest(Math.round(totalPay - amount));
    }
  }, [amount, rate, tenure]);

  const chartData = [
    { name: 'Principal', value: amount },
    { name: 'Interest', value: totalInterest },
  ];

  const COLORS = ['#10B981', '#3B82F6'];

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-display font-bold text-slate-900">EMI Calculator</h1>
        <p className="text-slate-500">Plan your loan repayments with our easy-to-use calculator.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Inputs */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-8">
            {/* Amount */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700">Loan Amount</label>
                <div className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl font-bold border border-emerald-100">
                  ${amount.toLocaleString()}
                </div>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="100000" 
                step="500"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>$1,000</span>
                <span>$100,000</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700">Interest Rate (p.a %)</label>
                <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl font-bold border border-blue-100">
                  {rate}%
                </div>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                step="0.5"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700">Loan Tenure (Months)</label>
                <div className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl font-bold border border-indigo-100">
                  {tenure} Months
                </div>
              </div>
              <input 
                type="range" 
                min="3" 
                max="60" 
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>3 Months</span>
                <span>60 Months</span>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-blue-600 p-8 rounded-[2rem] text-white flex items-start gap-6 relative overflow-hidden">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Did you know?</h3>
              <p className="text-blue-50 opacity-90 leading-relaxed">
                Choosing a shorter tenure reduces the total interest you pay, even if the monthly EMI is higher. This helps you save more in the long run!
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Monthly EMI</p>
            <p className="text-5xl font-display font-bold text-emerald-600 mb-8">${emi.toLocaleString()}</p>
            
            <div className="w-full h-[200px] mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="w-full space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                <span className="text-sm text-slate-500 font-medium">Principal Amount</span>
                <span className="font-bold text-slate-900">${amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                <span className="text-sm text-slate-500 font-medium">Total Interest</span>
                <span className="font-bold text-slate-900">${totalInterest.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <span className="text-sm text-emerald-700 font-bold">Total Payment</span>
                <span className="font-bold text-emerald-700">${totalPayment.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20">
            Apply for this Loan
          </button>
        </div>
      </div>
    </div>
  );
}
