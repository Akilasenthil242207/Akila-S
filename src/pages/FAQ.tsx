import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  Plus, 
  Minus, 
  ChevronRight, 
  MessageSquare, 
  Phone, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is FinGrow and how can it help my business?',
      answer: 'FinGrow is a financial decision support platform designed for small-scale entrepreneurs. We provide tools for loan management, financial literacy training, and access to government schemes to help you grow your business sustainably.'
    },
    {
      question: 'How do I apply for a loan through FinGrow?',
      answer: 'You can apply for a loan by navigating to the "Loan Application" section in your dashboard. You will need to provide business details, financial information, and upload required documents like ID proof and bank statements.'
    },
    {
      question: 'Is my financial data secure on the platform?',
      answer: 'Yes, we take data security very seriously. We use industry-standard encryption and secure servers to protect your personal and financial information. We never share your data with third parties without your explicit consent.'
    },
    {
      question: 'What are the eligibility criteria for a business loan?',
      answer: 'Eligibility criteria vary depending on the loan type and lender. Generally, we look for businesses that have been operating for at least 2 years, have stable monthly revenue, and a good repayment history. You can use our "Loan Eligibility Checker" tool to get a better idea.'
    },
    {
      question: 'How does the AI Financial Advisor work?',
      answer: 'Our AI Advisor uses advanced technology to provide personalized financial guidance. You can ask it questions about budgeting, loans, or any financial concept, and it will provide clear, actionable advice based on your business context.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-10 max-w-4xl mx-auto space-y-12">
      <header className="text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/10">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-display font-bold text-slate-900">Frequently Asked Questions</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about the FinGrow platform and how to manage your business finances.
        </p>
      </header>

      {/* Search */}
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
        <input 
          type="text"
          placeholder="Search for answers..."
          className="w-full pl-16 pr-6 py-5 bg-white border border-slate-200 rounded-[2rem] text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, i) => (
          <div 
            key={i}
            className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden transition-all hover:border-emerald-500"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-8 py-6 flex items-center justify-between text-left"
            >
              <span className="text-lg font-bold text-slate-900">{faq.question}</span>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                openIndex === i ? 'bg-emerald-600 text-white' : 'bg-slate-50 text-slate-400'
              }`}>
                {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-8 pb-8 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Support CTA */}
      <div className="bg-slate-900 rounded-[3rem] p-10 text-white text-center space-y-8 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold">Still have questions?</h3>
          <p className="text-slate-400 max-w-md mx-auto">
            Our support team is always here to help you with any issues or queries you might have.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold">Live Chat</p>
              <p className="text-xs text-slate-500">Available 24/7</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold">Call Us</p>
              <p className="text-xs text-slate-500">+1 (555) 000-0000</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold">Email Support</p>
              <p className="text-xs text-slate-500">support@fingrow.com</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </div>
    </div>
  );
}
