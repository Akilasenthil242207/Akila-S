import React from 'react';
import { 
  BookOpen, 
  TrendingUp, 
  ShieldCheck, 
  Wallet, 
  PieChart, 
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FinancialAwareness() {
  const concepts = [
    {
      title: 'Interest Rates',
      desc: 'The cost of borrowing money, typically expressed as a percentage of the loan amount.',
      icon: TrendingUp,
      color: 'bg-emerald-500',
      tips: ['Compare annual rates', 'Understand fixed vs floating', 'Check for hidden fees']
    },
    {
      title: 'EMI (Equated Monthly Installment)',
      desc: 'A fixed payment amount made by a borrower to a lender at a specified date each month.',
      icon: Wallet,
      color: 'bg-blue-500',
      tips: ['Plan your monthly budget', 'Avoid missing payments', 'Use calculators to plan']
    },
    {
      title: 'Budgeting',
      desc: 'Creating a plan to spend your money. It allows you to determine in advance if you will have enough money.',
      icon: PieChart,
      color: 'bg-indigo-500',
      tips: ['Track every expense', 'Prioritize needs over wants', 'Review weekly']
    },
    {
      title: 'Responsible Borrowing',
      desc: 'Taking only what you can afford to repay and using the funds for productive business growth.',
      icon: ShieldCheck,
      color: 'bg-amber-500',
      tips: ['Have a clear purpose', 'Check repayment capacity', 'Read the fine print']
    }
  ];

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-12">
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-display font-bold text-slate-900">Financial Awareness</h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          Master the basics of finance to make better decisions for your business and personal growth.
        </p>
      </header>

      {/* Concept Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {concepts.map((concept, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm card-hover flex flex-col h-full"
          >
            <div className={`w-14 h-14 ${concept.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-slate-100`}>
              <concept.icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{concept.title}</h3>
            <p className="text-slate-600 mb-6 leading-relaxed flex-1">{concept.desc}</p>
            
            <div className="space-y-3 pt-6 border-t border-slate-50">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Tips</p>
              {concept.tips.map((tip, j) => (
                <div key={j} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {tip}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Section */}
      <section className="bg-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
              <PlayCircle className="w-4 h-4" />
              Featured Lesson
            </div>
            <h2 className="text-3xl font-display font-bold mb-6">How to Manage Business Debt Effectively</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              In this 5-minute video, learn the strategies used by successful entrepreneurs to leverage debt for growth without risking their business stability.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all group">
              Watch Lesson
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="aspect-video bg-slate-800 rounded-3xl border border-white/10 flex items-center justify-center group cursor-pointer overflow-hidden relative">
            <img 
              src="https://picsum.photos/seed/finance/800/450" 
              alt="Video thumbnail" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
              <PlayCircle className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </section>

      {/* FAQ Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          'What is a credit score?',
          'How to calculate profit margin?',
          'When should I take a loan?'
        ].map((q, i) => (
          <button key={i} className="p-6 bg-white rounded-2xl border border-slate-200 text-left hover:border-emerald-500 transition-colors flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <HelpCircle className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              <span className="font-medium text-slate-700">{q}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300" />
          </button>
        ))}
      </div>
    </div>
  );
}
