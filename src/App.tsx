import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import EMICalculator from './pages/EMICalculator';
import FinancialAwareness from './pages/FinancialAwareness';
import GovernmentSchemes from './pages/GovernmentSchemes';
import Login from './pages/Login';
import Register from './pages/Register';
import LoanApplication from './pages/LoanApplication';
import TrainingDashboard from './pages/TrainingDashboard';
import TrainingModule from './pages/TrainingModule';
import AIAdvisor from './pages/AIAdvisor';
import ExpenseTracker from './pages/ExpenseTracker';
import LoanEligibilityChecker from './pages/LoanEligibilityChecker';
import LoanTracking from './pages/LoanTracking';
import RepaymentPlanner from './pages/RepaymentPlanner';
import BusinessFinancialAnalyzer from './pages/BusinessFinancialAnalyzer';
import ImpactDashboard from './pages/ImpactDashboard';
import CommunityForum from './pages/CommunityForum';
import FAQ from './pages/FAQ';
import UserProfile from './pages/UserProfile';
import PlatformOverview from './pages/PlatformOverview';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="overview" element={<PlatformOverview />} />
          <Route path="awareness" element={<FinancialAwareness />} />
          <Route path="schemes" element={<GovernmentSchemes />} />
          <Route path="impact" element={<ImpactDashboard />} />
          <Route path="faq" element={<FAQ />} />
        </Route>

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard & Tools */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="loan-apply" element={<LoanApplication />} />
          <Route path="eligibility" element={<LoanEligibilityChecker />} />
          <Route path="emi-calculator" element={<EMICalculator />} />
          <Route path="loan-tracking" element={<LoanTracking />} />
          <Route path="repayment-planner" element={<RepaymentPlanner />} />
          <Route path="training" element={<TrainingDashboard />} />
          <Route path="training/:id" element={<TrainingModule />} />
          <Route path="analyzer" element={<BusinessFinancialAnalyzer />} />
          <Route path="expenses" element={<ExpenseTracker />} />
          <Route path="ai-advisor" element={<AIAdvisor />} />
          <Route path="community" element={<CommunityForum />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
