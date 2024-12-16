import React from 'react';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary-400"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M250 50C138.97 50 50 138.97 50 250C50 361.03 138.97 450 250 450C361.03 450 450 361.03 450 250C450 138.97 361.03 50 250 50ZM250 100C333.84 100 400 166.16 400 250C400 333.84 333.84 400 250 400C166.16 400 100 333.84 100 250C100 166.16 166.16 100 250 100Z"
          fill="currentColor"
        />
        <path
          d="M250 150C194.77 150 150 194.77 150 250C150 305.23 194.77 350 250 350C305.23 350 350 305.23 350 250C350 194.77 305.23 150 250 150Z"
          fill="currentColor"
          fillOpacity="0.6"
        />
        <path
          d="M150 150L200 200M300 200L350 150M150 350L200 300M300 300L350 350"
          stroke="currentColor"
          strokeWidth="20"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 text-transparent bg-clip-text">
        AISMITH
      </span>
    </div>
  );
};

export default Logo;