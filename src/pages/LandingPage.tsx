import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  GraduationCap, 
  Users, 
  CheckCircle2,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';

export default function LandingPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-transparent to-transparent opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                Empowering 10,000+ Entrepreneurs
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                Grow Your Business with <span className="text-emerald-600">Confidence</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                The all-in-one financial support platform designed for small-scale entrepreneurs. Manage loans, track expenses, and master financial literacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 shadow-xl shadow-emerald-500/20 transition-all group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/overview"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-slate-700 font-semibold border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  How it Works
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="https://picsum.photos/seed/business/800/600" 
                  alt="Entrepreneur working" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              {/* Floating Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 hidden sm:block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Financial Score</p>
                    <p className="text-xl font-bold text-slate-900">842 / 1000</p>
                  </div>
                </div>
                <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[84%] h-full bg-emerald-500"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-lg text-slate-600">We provide the tools and education to help you make better financial decisions for your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Loan Management',
                desc: 'Apply for loans, track repayments, and manage your schedules with ease.',
                icon: ShieldCheck,
                color: 'bg-blue-500',
              },
              {
                title: 'Financial Literacy',
                desc: 'Learn budgeting, saving, and investment strategies through interactive modules.',
                icon: GraduationCap,
                color: 'bg-emerald-500',
              },
              {
                title: 'Community Support',
                desc: 'Connect with other entrepreneurs and share experiences and growth tips.',
                icon: Users,
                color: 'bg-indigo-500',
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm card-hover"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-slate-200`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Trusted by Entrepreneurs Like You</h2>
              <div className="space-y-8">
                {[
                  {
                    name: 'Sarah Johnson',
                    role: 'Small Bakery Owner',
                    text: 'FinGrow helped me understand my business finances better. The loan application was simple and fast!',
                    rating: 5
                  },
                  {
                    name: 'Michael Chen',
                    role: 'Tech Repair Shop',
                    text: 'The financial literacy modules are a game changer. I now have a clear budget and saving strategy.',
                    rating: 5
                  }
                ].map((testimonial, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 italic mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                        <p className="text-slate-500 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-emerald-600 rounded-[2rem] p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-display font-bold mb-6">Ready to take the next step?</h2>
                <p className="text-emerald-50 text-lg mb-8 opacity-90">
                  Join thousands of entrepreneurs who are building their future with FinGrow. It takes less than 2 minutes to get started.
                </p>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-emerald-600 font-bold hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-900/20"
                >
                  Create Your Account
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
