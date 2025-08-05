import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { useAuth } from './hooks/useStore';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ui/ErrorBoundary';

// Lazy load components for better performance
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Profile = React.lazy(() => import('./components/Profile'));
const Research = React.lazy(() => import('./components/Research'));
const Connections = React.lazy(() => import('./components/Connections'));
const Marketplace = React.lazy(() => import('./components/Marketplace'));
const CoFounder = React.lazy(() => import('./components/CoFounder'));
const JoinCoFounder = React.lazy(() => import('./components/JoinCoFounder'));
const Fundability = React.lazy(() => import('./components/Fundability'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-gray-600 animate-pulse">Loading...</p>
    </div>
  </div>
);

function App() {
  const { user, isAuthenticated, login, logout } = useAuth();

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {isAuthenticated && user ? (
            <>
              <Navbar user={user} onLogout={logout} />
              <main className="pt-16 pb-4 px-2 sm:px-4 lg:px-0">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Dashboard user={user} />} />
                    <Route path="/profile" element={<Profile user={user} />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/connections" element={<Connections />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/cofounder" element={<CoFounder />} />
                    <Route path="/join-cofounder" element={<JoinCoFounder />} />
                    <Route path="/fundability" element={<Fundability />} />
                  </Routes>
                </Suspense>
              </main>
            </>
          ) : (
            <Landing onLogin={login} />
          )}
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;