import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout() {
  const location = useLocation();
  
  // Pages that should show the sidebar
  const dashboardPages = [
    '/dashboard',
    '/loan-apply',
    '/eligibility',
    '/emi-calculator',
    '/loan-tracking',
    '/repayment-planner',
    '/training',
    '/analyzer',
    '/expenses',
    '/ai-advisor',
    '/loan-history',
    '/community',
    '/support',
    '/profile',
    '/notifications',
    '/score',
    '/documents'
  ];

  const isDashboard = dashboardPages.some(path => location.pathname.startsWith(path));
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Navbar />}
      <div className="flex flex-1">
        {isDashboard && <Sidebar />}
        <main className={`flex-1 ${isDashboard ? 'bg-slate-50/50' : ''}`}>
          <Outlet />
        </main>
      </div>
      {!isDashboard && !isAuthPage && (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 text-white mb-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-lg">F</span>
                  </div>
                  <span className="text-xl font-display font-bold">FinGrow</span>
                </div>
                <p className="max-w-xs text-sm leading-relaxed">
                  Empowering small-scale entrepreneurs with the tools and knowledge they need to achieve financial stability and growth.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/overview" className="hover:text-emerald-400 transition-colors">Overview</a></li>
                  <li><a href="/awareness" className="hover:text-emerald-400 transition-colors">Financial Awareness</a></li>
                  <li><a href="/schemes" className="hover:text-emerald-400 transition-colors">Govt Schemes</a></li>
                  <li><a href="/impact" className="hover:text-emerald-400 transition-colors">Impact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/support" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
                  <li><a href="/community" className="hover:text-emerald-400 transition-colors">Community</a></li>
                  <li><a href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
              <p>© {new Date().getFullYear()} FinGrow. All rights reserved. Built for entrepreneurs.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
