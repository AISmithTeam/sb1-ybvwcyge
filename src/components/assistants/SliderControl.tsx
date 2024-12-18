import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SliderControlProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  icon: React.ReactNode;
  formatter: (value: number) => string;
  description?: string;
}

const SliderControl = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  icon,
  formatter,
  description
}: SliderControlProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <span className="text-primary-500 dark:text-primary-400">{icon}</span>
          {label}
        </label>
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
          {formatter(value)}
        </span>
      </div>
      {description && (
        <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
      )}
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full h-2 bg-slate-200 dark:bg-dark-700 rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-500
            [&::-webkit-slider-thumb]:dark:bg-primary-400 [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200
            [&::-webkit-slider-thumb]:hover:scale-110"
        />
        <div
          className="absolute left-0 top-1/2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full -translate-y-1/2"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default SliderControl;