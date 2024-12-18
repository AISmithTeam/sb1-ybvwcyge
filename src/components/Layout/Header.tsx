import React from 'react';
import { Bell, Settings, Search, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex-shrink-0 h-20 bg-white/70 dark:bg-dark-800/70 backdrop-blur-xl border-b border-slate-200 dark:border-dark-700 flex items-center justify-between px-8">
      <div className="flex items-center gap-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-dark-900 to-dark-800 dark:from-white dark:to-slate-200 text-transparent bg-clip-text">
          Dashboard
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-dark-700 border-0 focus:ring-2 focus:ring-primary-500 w-64 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500"
          />
          <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 hover:bg-slate-100 dark:hover:bg-dark-700 rounded-xl transition-colors"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          ) : (
            <Sun className="w-5 h-5 text-slate-400" />
          )}
        </button>
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-dark-700 rounded-xl transition-colors">
          <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
        </button>
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-dark-700 rounded-xl transition-colors">
          <Settings className="w-5 h-5 text-slate-600 dark:text-slate-400" />
        </button>
        <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl flex items-center justify-center text-white font-medium shadow-lg shadow-primary-500/20">
          A
        </div>
      </div>
    </header>
  );
};

export default Header;