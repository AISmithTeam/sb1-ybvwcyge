import React from 'react';
import { Github } from 'lucide-react';

const SocialAuth = () => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      <button
        type="button"
        className="w-full inline-flex justify-center py-2.5 px-4 rounded-xl border border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-800 hover:bg-slate-50 dark:hover:bg-dark-700 text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        <img
          className="h-5 w-5"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
        />
      </button>
      <button
        type="button"
        className="w-full inline-flex justify-center py-2.5 px-4 rounded-xl border border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-800 hover:bg-slate-50 dark:hover:bg-dark-700 text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        <Github className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="w-full inline-flex justify-center py-2.5 px-4 rounded-xl border border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-800 hover:bg-slate-50 dark:hover:bg-dark-700 text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        <img
          className="h-5 w-5"
          src="https://www.svgrepo.com/show/448234/linkedin.svg"
          alt="LinkedIn"
        />
      </button>
    </div>
  );
};

export default SocialAuth;