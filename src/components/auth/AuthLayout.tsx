import React from 'react';
import Logo from '../common/Logo';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Auth Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-dark-900">
        <div className="max-w-md w-full space-y-8">
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/60 to-primary-600/60 mix-blend-multiply" />
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="AI Call Center"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white p-12">
          <div className="max-w-md text-center backdrop-blur-sm bg-black/20 p-8 rounded-2xl">
            <h3 className="text-4xl font-bold mb-6">Transform Your Communication</h3>
            <p className="text-lg">
              Experience the future of customer service with our AI-powered communication platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;