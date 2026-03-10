import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  Send, 
  User, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  HelpCircle,
  Loader2,
  ChevronRight,
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIAdvisor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello Sarah! I'm your FinGrow AI Advisor. How can I help you with your business finances today? You can ask me about loans, budgeting, government schemes, or any financial concept.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: input,
        config: {
          systemInstruction: "You are a friendly and professional financial advisor for small-scale entrepreneurs on the FinGrow platform. Your goal is to provide clear, actionable, and encouraging financial advice. Use simple language suitable for rural and first-time digital users. Focus on loans, budgeting, saving, and government schemes in India.",
        }
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.text || "I'm sorry, I couldn't process that. Could you try rephrasing your question?",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('AI Advisor Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "How do I apply for a Mudra loan?",
    "What is a good debt-to-income ratio?",
    "Tips for reducing business expenses",
    "Explain compound interest simply"
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-50/50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">AI Financial Advisor</h1>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-slate-500 font-medium">Online & Ready to Help</span>
            </div>
          </div>
        </div>
        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-4 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                    message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-emerald-600 border border-slate-200'
                  }`}>
                    {message.role === 'user' ? <User className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
                  </div>
                  <div className={`p-5 rounded-2xl shadow-sm ${
                    message.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-[10px] mt-2 font-medium uppercase tracking-wider ${
                      message.role === 'user' ? 'text-blue-200' : 'text-slate-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                  <Loader2 className="w-6 h-6 animate-spin" />
                </div>
                <div className="bg-white border border-slate-200 p-5 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-slate-200 p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInput(suggestion);
                  }}
                  className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSend} className="relative">
            <input 
              type="text"
              placeholder="Ask me anything about your business finances..."
              className="w-full pl-6 pr-16 py-5 bg-slate-50 border border-slate-200 rounded-[2rem] text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-inner"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button 
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          
          <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              Secure
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Growth Focused
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
