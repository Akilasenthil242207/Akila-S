import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  TrendingUp, 
  Menu, 
  X, 
  User, 
  Bell, 
  Search,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard') || 
                      location.pathname.startsWith('/loan') || 
                      location.pathname.startsWith('/training') ||
                      location.pathname.startsWith('/expenses') ||
                      location.pathname.startsWith('/ai-advisor');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Overview', path: '/overview' },
    { name: 'Financial Awareness', path: '/awareness' },
    { name: 'Govt Schemes', path: '/schemes' },
    { name: 'Impact', path: '/impact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold text-slate-900">FinGrow</span>
            </Link>
            
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${
                    location.pathname === link.path
                      ? 'border-emerald-500 text-slate-900'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {isDashboard ? (
              <div className="flex items-center gap-4">
                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <Link to="/profile" className="flex items-center gap-2 p-1 pr-3 hover:bg-slate-100 rounded-full transition-colors">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
                    <User className="w-5 h-5 text-slate-500" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">Entrepreneur</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="pt-2 pb-3 space-y-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-slate-100">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 mt-1 rounded-md text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
