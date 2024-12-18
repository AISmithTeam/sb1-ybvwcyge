import React from 'react';

interface TimeRangeInputProps {
  startTime: string;
  endTime: string;
  onStartTimeChange: (value: string) => void;
  onEndTimeChange: (value: string) => void;
}

const TimeRangeInput = ({ startTime, endTime, onStartTimeChange, onEndTimeChange }: TimeRangeInputProps) => (
  <div>
    <label className="block">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        Campaign Time Interval
      </span>
      <div className="grid grid-cols-2 gap-4 mt-1">
        <input
          type="time"
          className="block w-full"
          value={startTime}
          onChange={(e) => onStartTimeChange(e.target.value)}
        />
        <input
          type="time"
          className="block w-full"
          value={endTime}
          onChange={(e) => onEndTimeChange(e.target.value)}
        />
      </div>
      <p className="mt-1 text-xs text-slate-500">
        Optional: Set the time range for campaign operation
      </p>
    </label>
  </div>
);

export default TimeRangeInput;