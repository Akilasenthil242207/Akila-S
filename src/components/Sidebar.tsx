import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  CheckCircle, 
  Calculator, 
  Calendar, 
  GraduationCap, 
  PieChart, 
  MessageSquare, 
  History, 
  Users, 
  HelpCircle,
  Settings,
  ShieldCheck,
  TrendingUp,
  Wallet
} from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Loan Application', icon: FileText, path: '/loan-apply' },
    { name: 'Eligibility Checker', icon: ShieldCheck, path: '/eligibility' },
    { name: 'EMI Calculator', icon: Calculator, path: '/emi-calculator' },
    { name: 'Loan Tracking', icon: TrendingUp, path: '/loan-tracking' },
    { name: 'Repayment Planner', icon: Calendar, path: '/repayment-planner' },
    { name: 'Training', icon: GraduationCap, path: '/training' },
    { name: 'Financial Analyzer', icon: PieChart, path: '/analyzer' },
    { name: 'Expense Tracker', icon: Wallet, path: '/expenses' },
    { name: 'AI Advisor', icon: MessageSquare, path: '/ai-advisor' },
    { name: 'Loan History', icon: History, path: '/loan-history' },
    { name: 'Community', icon: Users, path: '/community' },
    { name: 'Support', icon: HelpCircle, path: '/support' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col h-[calc(100vh-64px)] sticky top-16">
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive 
                  ? 'bg-emerald-50 text-emerald-700 shadow-sm shadow-emerald-500/5' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-emerald-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
              {item.name}
            </Link>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-slate-100">
        <Link
          to="/profile"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all"
        >
          <Settings className="w-5 h-5 text-slate-400" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
