import React, { useState } from 'react';
import { 
  FileText, 
  DollarSign, 
  Briefcase, 
  Calendar, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Upload,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoanApplication() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="p-6 lg:p-10 max-w-4xl mx-auto space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-3xl font-display font-bold text-slate-900">Loan Application</h1>
        <p className="text-slate-500">Complete the steps below to apply for a business loan.</p>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto pt-4">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  s <= step ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}
              >
                {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
            ))}
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              className="h-full bg-emerald-500"
            />
          </div>
        </div>
      </header>

      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-8 lg:p-12"
          >
            {step === 1 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-slate-900">Loan Details</h2>
                  <p className="text-slate-500">How much do you need and for what purpose?</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Loan Amount ($)</label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input 
                        type="number"
                        placeholder="10000"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Loan Purpose</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <select className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none">
                        <option>Inventory Purchase</option>
                        <option>Equipment Upgrade</option>
                        <option>Business Expansion</option>
                        <option>Working Capital</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700">Repayment Duration (Months)</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <select className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none">
                        <option>12 Months</option>
                        <option>24 Months</option>
                        <option>36 Months</option>
                        <option>48 Months</option>
                        <option>60 Months</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-slate-900">Business Information</h2>
                  <p className="text-slate-500">Tell us more about your business operations.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Business Name</label>
                    <input 
                      type="text"
                      placeholder="My Awesome Shop"
                      className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Years in Operation</label>
                    <input 
                      type="number"
                      placeholder="3"
                      className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700">Monthly Revenue ($)</label>
                    <input 
                      type="number"
                      placeholder="5000"
                      className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-slate-900">Document Upload</h2>
                  <p className="text-slate-500">Securely upload your identification and financial documents.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Identity Proof (ID/Passport)',
                    'Business Registration',
                    'Bank Statements (Last 6 Months)',
                    'Address Proof'
                  ].map((doc, i) => (
                    <div key={i} className="p-6 border-2 border-dashed border-slate-200 rounded-3xl hover:border-emerald-500 transition-all group cursor-pointer flex flex-col items-center justify-center text-center gap-3">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all">
                        <Upload className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-700">{doc}</p>
                        <p className="text-xs text-slate-400 mt-1">PDF, JPG or PNG (Max 5MB)</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8 text-center py-8">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-slate-900">Review & Submit</h2>
                  <p className="text-slate-500 max-w-md mx-auto">
                    Please review your information carefully before submitting. Our team will process your application within 24-48 hours.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-left space-y-4 max-w-md mx-auto">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Loan Amount:</span>
                    <span className="font-bold text-slate-900">$10,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Purpose:</span>
                    <span className="font-bold text-slate-900">Inventory Purchase</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Tenure:</span>
                    <span className="font-bold text-slate-900">12 Months</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100 text-left max-w-md mx-auto">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <p className="text-xs text-blue-700 leading-relaxed">
                    By clicking submit, you agree to our terms and conditions and authorize us to perform a credit check.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between">
              <button 
                onClick={prevStep}
                disabled={step === 1}
                className="flex items-center gap-2 px-6 py-3 text-slate-500 font-bold hover:bg-slate-50 rounded-2xl transition-all disabled:opacity-0"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              
              {step < totalSteps ? (
                <button 
                  onClick={nextStep}
                  className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 group"
                >
                  Continue
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button 
                  className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20"
                >
                  Submit Application
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
