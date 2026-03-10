import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  User, 
  Mail, 
  Lock, 
  Phone, 
  MapPin, 
  Briefcase, 
  DollarSign,
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Side - Branding (Same as Login) */}
      <div className="hidden lg:flex lg:w-1/3 bg-emerald-600 p-16 flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-2 text-white mb-12">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold">FinGrow</span>
          </Link>
          
          <div className="max-w-md">
            <h1 className="text-4xl font-display font-bold text-white leading-tight mb-6">
              Start your business <span className="text-emerald-200">growth journey</span>
            </h1>
            <p className="text-emerald-50 text-base opacity-90 leading-relaxed">
              Create an account to access loans, training, and a community of entrepreneurs.
            </p>
          </div>
        </div>

        <div className="relative z-10 space-y-6">
          {[
            'Simple loan applications',
            'Financial literacy training',
            'Business health analysis',
            'Community support'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-white/90 text-sm font-medium">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3" />
              </div>
              {item}
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center p-8 sm:p-16 lg:p-20 bg-slate-50/50 overflow-y-auto">
        <div className="max-w-2xl w-full mx-auto">
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors mb-8">
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Create Account</h2>
            <p className="text-slate-500">Tell us about yourself and your business.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Business Type</label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm appearance-none">
                  <option>Retail / Shop</option>
                  <option>Manufacturing</option>
                  <option>Services</option>
                  <option>Agriculture</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text"
                  placeholder="City, State"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Monthly Income</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="number"
                  placeholder="5000"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-slate-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="md:col-span-2 pt-4">
              <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group">
                Create Account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          <div className="mt-10 pt-10 border-t border-slate-200 text-center">
            <p className="text-slate-500 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-emerald-600 hover:text-emerald-700">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
