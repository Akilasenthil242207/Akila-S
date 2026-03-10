import React from 'react';
import { 
  Target, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Zap,
  Heart,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

export default function PlatformOverview() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold border border-emerald-100">
              <Zap className="w-4 h-4" />
              Our Mission
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1]">
              Empowering the <span className="text-emerald-600">Next Generation</span> of Entrepreneurs.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              FinGrow was built to bridge the gap between small-scale entrepreneurs and the financial resources they need to thrive. We believe in growth through education and support.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[5rem]"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Financial Inclusion', desc: 'Bringing formal financial services to those who have been traditionally underserved.', icon: Globe, color: 'text-blue-600', bg: 'bg-blue-50' },
            { title: 'Empowerment through Education', desc: 'We don\'t just provide loans; we provide the knowledge to manage them effectively.', icon: GraduationCap, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { title: 'Trust & Transparency', desc: 'Clear terms, no hidden fees, and a commitment to your business\'s long-term success.', icon: ShieldCheck, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          ].map((value, i) => (
            <div key={i} className="space-y-6">
              <div className={`w-16 h-16 ${value.bg} ${value.color} rounded-3xl flex items-center justify-center shadow-lg shadow-slate-100`}>
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-slate-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-display font-bold">How FinGrow Works</h2>
            <p className="text-slate-400 text-lg">A simple 4-step process to get your business the support it needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Register', desc: 'Create your profile and tell us about your business.' },
              { step: '02', title: 'Learn', desc: 'Complete our basic financial literacy modules.' },
              { step: '03', title: 'Apply', desc: 'Use our tools to find and apply for the right loan.' },
              { step: '04', title: 'Grow', desc: 'Manage your loan and watch your business thrive.' },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-display font-bold text-white/5 mb-6 group-hover:text-emerald-500/20 transition-colors">{item.step}</div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-emerald-600 rounded-[4rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
          <div className="flex-1 space-y-8 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight">Join a community of 12,000+ successful entrepreneurs.</h2>
            <p className="text-emerald-50 text-xl opacity-90 leading-relaxed">
              Our platform has helped businesses across 450 communities grow their revenue by an average of 35% in their first year.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-4xl font-bold mb-1">35%</p>
                <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest">Avg. Revenue Growth</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">98%</p>
                <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest">Repayment Rate</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 aspect-square bg-white/10 backdrop-blur-xl rounded-[3rem] border border-white/20 flex items-center justify-center relative group overflow-hidden">
            <img 
              src="https://picsum.photos/seed/impact/600/600" 
              alt="Impact" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 text-center p-8">
              <Heart className="w-12 h-12 text-white mx-auto mb-4" />
              <p className="text-sm font-bold">Making a difference, one business at a time.</p>
            </div>
          </div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 text-center space-y-8">
        <h2 className="text-4xl font-display font-bold text-slate-900">Ready to start your journey?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-10 py-5 bg-emerald-600 text-white font-bold rounded-[2rem] hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-500/20">
            Get Started Now
          </button>
          <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-[2rem] hover:bg-slate-50 transition-all">
            Contact Sales
          </button>
        </div>
      </section>
    </div>
  );
}

import { GraduationCap } from 'lucide-react';
