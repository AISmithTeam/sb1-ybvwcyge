import React from 'react';

interface WaveformVisualizerProps {
  data: number[];
}
// empty comment
const WaveformVisualizer = ({ data }: WaveformVisualizerProps) => {
  return (
    <div className="h-8 flex items-center gap-[1px]">
      {data.map((value, index) => (
        <div
          key={index}
          className="w-1 bg-primary-400 dark:bg-primary-500 rounded-full transition-all duration-200"
          style={{
            height: `${value * 100}%`,
            opacity: 0.3 + value * 0.7
          }}
        />
      ))}
    </div>
  );
};

export default WaveformVisualizer;