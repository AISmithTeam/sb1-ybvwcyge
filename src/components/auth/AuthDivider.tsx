import React from 'react';

const AuthDivider = () => {
  return (
    <div className="mt-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-dark-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-slate-50 dark:bg-dark-900 text-slate-500">
            Or continue with
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthDivider;