import React from 'react';
import { Link } from 'react-router-dom';

interface AuthFooterProps {
  text: string;
  linkText: string;
  linkTo: string;
}

const AuthFooter = ({ text, linkText, linkTo }: AuthFooterProps) => {
  return (
    <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
      {text}{' '}
      <Link
        to={linkTo}
        className="font-medium text-primary-600 hover:text-primary-500"
      >
        {linkText}
      </Link>
    </p>
  );
};

export default AuthFooter;