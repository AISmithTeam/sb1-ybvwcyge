import React, { useState } from 'react';
import { Play, Pause, X, Download, FileText, BarChart2, MessageSquare, DollarSign } from 'lucide-react';
import { LogEntry, TranscriptEntry } from './types';

interface LogDetailsProps {
  log: LogEntry;
  onClose: () => void;
}

// empty comment

const mockTranscript: TranscriptEntry[] = [
  {
    speaker: 'AI',
    text: 'Hello, how can I help you today? Hola, en qué puedo ayudarle hoy? Hola, cómo puedo ayudarte a ti? Hola,'
  },
  {
    speaker: 'User',
    text: 'And I understood that this is such a topic. Okay. Hello, what is Ola? I don\'t need her, I want to speak in Russian.'
  },
  {
    speaker: 'AI',
    text: 'Hola de nuevo.'
  },
  {
    speaker: 'User',
    text: 'Do you speak Russian?'
  }
];

const LogDetails = ({ log, onClose }: LogDetailsProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'transcript' | 'analysis' | 'messages' | 'cost'>('transcript');

  const renderWaveform = () => {
    if (!log.waveformData) return null;

    const height = 64;
    const width = 800;
    const points = log.waveformData.map((value, i) => ({
      x: (i / log.waveformData.length) * width,
      y: (height / 2) + (value * height / 2)
    }));

    return (
      <svg width={width} height={height} className="w-full">
        <path
          d={`M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-primary-500 dark:text-primary-400"
        />
      </svg>
    );
  };

  const tabs = [
    { id: 'transcript', label: 'Transcripts', icon: FileText },
    { id: 'analysis', label: 'Analysis', icon: BarChart2 },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'cost', label: 'Call Cost', icon: DollarSign }
  ];

  return (
    <div className="mt-8 bg-white dark:bg-dark-800 rounded-xl border border-slate-200 dark:border-dark-700 overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-dark-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Recording</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500 dark:text-slate-400">{log.duration}</span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>

        <div className="relative">
          {renderWaveform()}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
          >
            <Download className="w-5 h-5 text-slate-400" />
          </button>
        </div>
      </div>

      <div className="border-b border-slate-200 dark:border-dark-700">
        <div className="flex">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors
                ${activeTab === id
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-500'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 max-h-96 overflow-y-auto">
        {activeTab === 'transcript' && (
          <div className="space-y-6">
            {mockTranscript.map((entry, i) => (
              <div key={i} className="space-y-1">
                <span className={`text-sm font-medium
                  ${entry.speaker === 'AI'
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {entry.speaker}
                </span>
                <p className="text-slate-800 dark:text-slate-200">{entry.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LogDetails;