import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  PlayCircle, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Wallet, 
  PieChart, 
  ShieldCheck,
  ChevronRight,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';

export default function TrainingDashboard() {
  const modules = [
    {
      id: 1,
      title: 'Budgeting for Growth',
      desc: 'Learn how to create and maintain a business budget that supports expansion.',
      icon: PieChart,
      color: 'bg-emerald-500',
      progress: 100,
      lessons: 5,
      duration: '45 mins',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Saving Strategies',
      desc: 'Discover effective ways to build a business emergency fund and save for future goals.',
      icon: Wallet,
      color: 'bg-blue-500',
      progress: 40,
      lessons: 4,
      duration: '30 mins',
      rating: 4.9
    },
    {
      id: 3,
      title: 'Understanding Interest',
      desc: 'Master the math behind interest rates and how they impact your loan repayments.',
      icon: TrendingUp,
      color: 'bg-amber-500',
      progress: 0,
      lessons: 6,
      duration: '60 mins',
      rating: 4.7
    },
    {
      id: 4,
      title: 'Responsible Borrowing',
      desc: 'Learn when and how to take loans to maximize business impact while minimizing risk.',
      icon: ShieldCheck,
      color: 'bg-indigo-500',
      progress: 0,
      lessons: 3,
      duration: '25 mins',
      rating: 4.9
    }
  ];

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-display font-bold text-slate-900">Financial Literacy Training</h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Master the skills you need to build a sustainable and profitable business.
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Overall Progress</p>
            <p className="text-xl font-bold text-slate-900">35% Complete</p>
          </div>
        </div>
      </header>

      {/* Continue Learning */}
      <section className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <PlayCircle className="w-4 h-4" />
              Continue Learning
            </div>
            <h2 className="text-3xl font-display font-bold">Saving Strategies: Module 2</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              You're currently learning about "Building an Emergency Fund". Complete this lesson to earn your next badge!
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Progress</span>
                <span>40%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[40%] h-full bg-emerald-500"></div>
              </div>
            </div>
            <Link 
              to="/training/2"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20"
            >
              Resume Lesson
            </Link>
          </div>
          <div className="w-full lg:w-1/3 aspect-square bg-white/5 rounded-[2.5rem] border border-white/10 flex items-center justify-center relative group cursor-pointer">
            <img 
              src="https://picsum.photos/seed/learning/400/400" 
              alt="Module thumbnail" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] opacity-40 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
              <PlayCircle className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </section>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {modules.map((module, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col group hover:border-emerald-500 transition-all"
          >
            <div className="p-8 flex-1">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${module.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-100`}>
                  <module.icon className="w-7 h-7" />
                </div>
                {module.progress === 100 && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    Completed
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{module.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{module.desc}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Lessons</p>
                  <p className="text-sm font-bold text-slate-900">{module.lessons}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                  <p className="text-sm font-bold text-slate-900">{module.duration}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Rating</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <p className="text-sm font-bold text-slate-900">{module.rating}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <div className="flex-1 mr-8">
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${module.progress === 100 ? 'bg-emerald-500' : 'bg-blue-500'}`}
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>
              <Link 
                to={`/training/${module.id}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-all"
              >
                {module.progress === 0 ? 'Start Module' : module.progress === 100 ? 'Review' : 'Continue'}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
