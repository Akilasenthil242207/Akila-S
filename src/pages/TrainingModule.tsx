import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  PlayCircle, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  FileText, 
  HelpCircle, 
  ArrowLeft,
  Clock,
  Award,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function TrainingModule() {
  const { id } = useParams();
  const [activeLesson, setActiveLesson] = useState(0);

  const module = {
    title: 'Saving Strategies',
    desc: 'Discover effective ways to build a business emergency fund and save for future goals.',
    lessons: [
      { title: 'The Importance of Saving', duration: '10 mins', type: 'video', completed: true },
      { title: 'Building an Emergency Fund', duration: '15 mins', type: 'video', completed: false },
      { title: 'Saving for Business Goals', duration: '12 mins', type: 'reading', completed: false },
      { title: 'Choosing a Savings Account', duration: '8 mins', type: 'video', completed: false },
      { title: 'Module Quiz', duration: '10 mins', type: 'quiz', completed: false },
    ]
  };

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] bg-slate-50/50">
      {/* Sidebar - Lesson List */}
      <div className="w-full lg:w-96 bg-white border-r border-slate-200 overflow-y-auto">
        <div className="p-8 border-b border-slate-100">
          <Link to="/training" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-emerald-600 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Training
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">{module.title}</h1>
          <div className="flex items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
            <div className="flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              {module.lessons.length} Lessons
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              45 Mins
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-50">
          {module.lessons.map((lesson, i) => (
            <button
              key={i}
              onClick={() => setActiveLesson(i)}
              className={`w-full p-6 flex items-start gap-4 text-left transition-all ${
                activeLesson === i ? 'bg-emerald-50 border-r-4 border-emerald-600' : 'hover:bg-slate-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                lesson.completed ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'
              }`}>
                {lesson.completed ? <CheckCircle2 className="w-5 h-5" /> : (
                  lesson.type === 'video' ? <PlayCircle className="w-5 h-5" /> :
                  lesson.type === 'reading' ? <FileText className="w-5 h-5" /> :
                  <HelpCircle className="w-5 h-5" />
                )}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-bold mb-1 ${activeLesson === i ? 'text-emerald-900' : 'text-slate-700'}`}>
                  {lesson.title}
                </p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{lesson.duration}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content - Lesson Player */}
      <div className="flex-1 overflow-y-auto p-8 lg:p-12">
        <div className="max-w-4xl mx-auto space-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLesson}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              <div className="aspect-video bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden relative group cursor-pointer border border-slate-800">
                <img 
                  src={`https://picsum.photos/seed/lesson${activeLesson}/1280/720`} 
                  alt="Lesson thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                      <PlayCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-60">Now Playing</p>
                      <p className="text-sm font-bold">{module.lessons[activeLesson].title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold">12:45 / 15:00</span>
                    <div className="w-32 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-emerald-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-display font-bold text-slate-900">{module.lessons[activeLesson].title}</h2>
                  <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-bold">
                    <Award className="w-4 h-4" />
                    Earn 50 Points
                  </div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  In this lesson, we will explore the fundamental concepts of building a business emergency fund. You will learn how to calculate your monthly operating expenses and set a realistic savings goal to protect your business from unexpected challenges.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                  <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-emerald-600" />
                      Key Takeaways
                    </h4>
                    <ul className="text-sm text-slate-500 space-y-2 list-disc list-inside">
                      <li>Aim for 3-6 months of operating expenses.</li>
                      <li>Keep emergency funds in a separate liquid account.</li>
                      <li>Automate your savings to ensure consistency.</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                      Discussion
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Have questions about this lesson? Join the community discussion and get answers from experts.
                    </p>
                    <button className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">Join Discussion →</button>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-slate-100 flex items-center justify-between">
                <button 
                  onClick={() => setActiveLesson(prev => Math.max(0, prev - 1))}
                  disabled={activeLesson === 0}
                  className="flex items-center gap-2 px-6 py-3 text-slate-500 font-bold hover:bg-slate-50 rounded-2xl transition-all disabled:opacity-0"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous Lesson
                </button>
                <button 
                  onClick={() => setActiveLesson(prev => Math.min(module.lessons.length - 1, prev + 1))}
                  className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 group"
                >
                  Next Lesson
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
