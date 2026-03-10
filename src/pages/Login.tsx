import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Mail, 
  Lock, 
  ArrowRight, 
  ChevronLeft,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-emerald-600 p-16 flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-2 text-white mb-12">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold">FinGrow</span>
          </Link>
          
          <div className="max-w-md">
            <h1 className="text-5xl font-display font-bold text-white leading-tight mb-6">
              Empowering your <span className="text-emerald-200">financial future</span>
            </h1>
            <p className="text-emerald-50 text-lg opacity-90 leading-relaxed">
              Join 10,000+ entrepreneurs who are building their legacy with FinGrow's financial tools and education.
            </p>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-white">10k+</p>
            <p className="text-emerald-100 text-sm">Active Entrepreneurs</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-white">$50M+</p>
            <p className="text-emerald-100 text-sm">Loans Processed</p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center p-8 sm:p-16 lg:p-24 bg-slate-50/50">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors mb-8">
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Welcome Back</h2>
            <p className="text-slate-500">Log in to manage your business finances.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Email or Phone Number</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text"
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <a href="#" className="text-xs font-bold text-emerald-600 hover:text-emerald-700">Forgot Password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm"
                />
              </div>
            </div>

            <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group">
              Log In
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-slate-200 text-center">
            <p className="text-slate-500 text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="font-bold text-emerald-600 hover:text-emerald-700">Create Account</Link>
            </p>
          </div>

          <div className="mt-12 flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Your data is encrypted and protected by bank-grade security protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
