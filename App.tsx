
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Signals from './components/Signals';
import Sanctuaries from './components/Sanctuaries';
import Council from './components/Council';
import type { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSetView = (view: View) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentView(view);
      setIsAnimating(false);
    }, 250); // Matches half the animation duration
  };

  const renderView = () => {
    switch (currentView) {
      case 'signals':
        return <Signals />;
      case 'sanctuaries':
        return <Sanctuaries />;
      case 'council':
        return <Council />;
      case 'dashboard':
      default:
        return <Dashboard setView={handleSetView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-sentinel-gray-darkest">
      <Header currentView={currentView} setView={handleSetView} />
      <main className={`flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-opacity duration-250 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
