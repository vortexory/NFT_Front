'use client'

import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="hidden" {...props} />
      <div className="w-5 h-5 border-2 border-[#E4ABFF] rounded flex items-center justify-center">
        {props.checked && (
          <div className="w-3 h-3 bg-[#E4ABFF] rounded-sm" />
        )}
      </div>
      {label && <span className="text-white text-sm font-orbitron">{label}</span>}
    </label>
  );
};

export default Checkbox; 