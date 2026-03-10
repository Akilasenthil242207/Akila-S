import React from 'react';
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Info,
  Building2,
  Users2,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';

export default function GovernmentSchemes() {
  const schemes = [
    {
      title: 'Pradhan Mantri Mudra Yojana (PMMY)',
      category: 'Micro Units Development',
      desc: 'Provides loans up to 10 lakh to non-corporate, non-farm small/micro enterprises.',
      eligibility: ['Indian Citizen', 'Micro/Small Enterprise', 'Non-farm income generating activities'],
      benefits: ['No collateral required', 'Low interest rates', 'Flexible repayment'],
      icon: Building2,
      color: 'bg-emerald-500',
    },
    {
      title: 'Stand Up India Scheme',
      category: 'SC/ST & Women Entrepreneurs',
      desc: 'Facilitates bank loans between 10 lakh and 1 crore to at least one SC/ST borrower and at least one woman borrower per bank branch.',
      eligibility: ['SC/ST or Woman entrepreneur', 'Above 18 years', 'Greenfield projects only'],
      benefits: ['Large loan amounts', 'Reduced interest rates', 'Handholding support'],
      icon: Users2,
      color: 'bg-blue-500',
    },
    {
      title: 'Credit Guarantee Scheme (CGTMSE)',
      category: 'MSME Support',
      desc: 'Enables collateral-free credit to the micro and small enterprise sector.',
      eligibility: ['New or existing MSMEs', 'Manufacturing or Service sector', 'Registered with Udyam'],
      benefits: ['Collateral-free loans', 'Credit guarantee by Govt', 'Easy bank access'],
      icon: ShieldCheck,
      color: 'bg-indigo-500',
    },
    {
      title: 'PMEGP (Prime Minister Employment Generation Programme)',
      category: 'Employment Generation',
      desc: 'A credit-linked subsidy scheme for setting up new micro-enterprises and generating employment.',
      eligibility: ['Above 18 years', 'At least 8th standard pass', 'New projects only'],
      benefits: ['Up to 35% subsidy', 'Low beneficiary contribution', 'Bank credit support'],
      icon: TrendingUp,
      color: 'bg-amber-500',
    }
  ];

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-display font-bold text-slate-900">Government Financial Schemes</h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Discover financial assistance programs and support schemes designed to help your business grow.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text"
              placeholder="Search schemes..."
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {schemes.map((scheme, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full"
          >
            <div className="p-8 flex-1">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${scheme.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-100`}>
                  <scheme.icon className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {scheme.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{scheme.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{scheme.desc}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    Eligibility
                  </p>
                  {scheme.eligibility.map((item, j) => (
                    <div key={j} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-200 rounded-full mt-1.5 flex-shrink-0"></span>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 text-blue-500" />
                    Key Benefits
                  </p>
                  {scheme.benefits.map((item, j) => (
                    <div key={j} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-200 rounded-full mt-1.5 flex-shrink-0"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <Info className="w-4 h-4" />
                Updated 2 days ago
              </div>
              <button className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-all">
                Learn More
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-emerald-600 rounded-[3rem] p-12 text-white text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6">Not sure which scheme is right for you?</h2>
          <p className="text-emerald-50 text-lg mb-8 opacity-90 leading-relaxed">
            Our AI-powered advisor can help you find the best government schemes based on your business type and location.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-emerald-600 font-bold hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-900/20">
            Ask AI Advisor
          </button>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-400/20 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </section>
    </div>
  );
}
