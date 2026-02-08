
import React from 'react';

export const COLORS = {
  navy: '#003366',
  teal: '#009B9E',
  green: '#76BC21',
  white: '#FFFFFF',
};

export const Logo = ({ className = "h-12" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {/* SVG recreation of the logo provided in image */}
    <svg viewBox="0 0 100 100" className="h-full w-auto">
      <circle cx="50" cy="50" r="8" fill={COLORS.navy} />
      <path d="M50 20 A30 30 0 0 1 80 50" fill="none" stroke={COLORS.navy} strokeWidth="6" strokeLinecap="round" />
      <path d="M80 50 A30 30 0 0 1 50 80" fill="none" stroke={COLORS.green} strokeWidth="6" strokeLinecap="round" />
      <path d="M50 80 A30 30 0 0 1 20 50" fill="none" stroke={COLORS.teal} strokeWidth="6" strokeLinecap="round" />
      <path d="M20 50 A30 30 0 0 1 50 20" fill="none" stroke={COLORS.navy} strokeWidth="6" strokeLinecap="round" />
      {/* Decorative dots to match the 'connecting' feel */}
      <circle cx="50" cy="20" r="4" fill={COLORS.navy} />
      <circle cx="80" cy="50" r="4" fill={COLORS.green} />
      <circle cx="50" cy="80" r="4" fill={COLORS.teal} />
      <circle cx="20" cy="50" r="4" fill={COLORS.navy} />
    </svg>
    <div className="flex flex-col">
      <span className="text-3xl font-extrabold tracking-tighter leading-none" style={{ color: COLORS.navy }}>APE</span>
      <div className="flex items-center h-4">
        <div className="w-[1px] h-full bg-slate-300 mx-2"></div>
        <span className="text-[10px] uppercase font-medium tracking-widest text-slate-500 leading-none">
          Academia Profissional<br/>de Eletromedicina
        </span>
      </div>
    </div>
  </div>
);
