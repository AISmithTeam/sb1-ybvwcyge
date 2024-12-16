import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import DashboardLayout from './components/Layout/DashboardLayout';
import AssistantsPage from './pages/AssistantsPage';
import CampaignsPage from './pages/CampaignsPage';
import PhoneNumbersPage from './pages/PhoneNumbersPage';
import LogsPage from './pages/LogsPage';
import BillingPage from './pages/BillingPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route path="/assistants" element={<AssistantsPage />} />
              <Route path="/campaigns" element={<CampaignsPage />} />
              <Route path="/phone-numbers" element={<PhoneNumbersPage />} />
              <Route path="/logs" element={<LogsPage />} />
              <Route path="/billing" element={<BillingPage />} />
            </Route>

            {/* Root route */}
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;