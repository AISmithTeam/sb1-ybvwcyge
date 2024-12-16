import React from 'react';
import { Brain, MessageSquare, Phone, ClipboardList, CreditCard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../common/Logo';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-dark-900 to-dark-800 text-white">
      <div className="flex-shrink-0 p-6 border-b border-white/10">
        <Logo />
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
        {[
          { icon: Brain, label: 'Assistants', path: '/assistants' },
          { icon: MessageSquare, label: 'Campaigns', path: '/campaigns' },
          { icon: Phone, label: 'Phone Numbers', path: '/phone-numbers' },
          { icon: ClipboardList, label: 'Logs', path: '/logs' },
          { icon: CreditCard, label: 'Billing', path: '/billing' },
        ].map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              isActive(path)
                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/20'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive(path) ? 'text-white' : 'text-primary-400'}`} />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;