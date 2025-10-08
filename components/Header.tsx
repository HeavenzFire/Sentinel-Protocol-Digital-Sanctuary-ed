
import React from 'react';
import type { View } from '../types';

interface HeaderProps {
  currentView: View;
  setView: (view: View) => void;
}

const NavLink: React.FC<{
  viewName: View;
  currentView: View;
  setView: (view: View) => void;
  children: React.ReactNode;
}> = ({ viewName, currentView, setView, children }) => {
  const isActive = currentView === viewName;
  return (
    <button
      onClick={() => setView(viewName)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'bg-sentinel-gray-medium text-white'
          : 'text-sentinel-gray-light hover:bg-sentinel-gray-dark hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  return (
    <header className="bg-sentinel-gray-dark sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => setView('dashboard')} className="flex-shrink-0 flex items-center space-x-2">
               <span className="text-white font-bold text-xl tracking-wider font-mono">SENTINEL_PROTOCOL</span>
               <span className="bg-sentinel-blue text-black text-xs font-bold px-2 py-0.5 rounded">v1.0</span>
            </button>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink viewName="dashboard" currentView={currentView} setView={setView}>Dashboard</NavLink>
              <NavLink viewName="signals" currentView={currentView} setView={setView}>Signals</NavLink>
              <NavLink viewName="sanctuaries" currentView={currentView} setView={setView}>Sanctuaries</NavLink>
              <NavLink viewName="council" currentView={currentView} setView={setView}>Council</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
