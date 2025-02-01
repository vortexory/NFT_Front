'use client'

import React, { useState, useEffect } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  placeholderSuffix?: string;
  type?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, placeholderSuffix, type = 'text', error, value = '', ...props }) => {
  const [mounted, setMounted] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type={type}
          placeholder=""
          value={inputValue}
          className={`
            w-full 
            p-3 
            pb-4
            bg-transparent 
            border-none
            text-white 
            text-[20px]
            font-orbitron
            focus:outline-none 
            focus:bg-white/5
            transition-colors
            duration-200
            [&[type="password"]]:text-[30px]
            [&[type="password"]]:leading-none
            [&[type="password"]]:tracking-[0px]
            [&[type="password"]]:pt-[2px]
            [&[type="password"]]:pb-[6px]
          `}
          {...props}
        />
        {!inputValue && (
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#E4ABFF]">
            <span className="font-orbitron font-bold text-[20px]">{placeholder}</span>
            {placeholderSuffix && (
              <span className="font-orbitron font-bold text-[14px]">{placeholderSuffix}</span>
            )}
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#CC00FF] to-[#FFFFFF] opacity-90" />
      </div>
      {error && (
        <div className="flex items-center gap-2 mt-1">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8.8 12H7.2V10.4H8.8V12ZM8.8 8.8H7.2V4H8.8V8.8Z" 
              fill="#FF6694"
            />
          </svg>
          <p className="text-[#FF6694] text-[12px] font-orbitron">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input; 