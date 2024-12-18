import React from 'react';
import { USAGE_PROPORTIONS } from '../constants';

interface UsageBreakdownProps {
  totalSpent: number;
}

const UsageBreakdown = ({ totalSpent }: UsageBreakdownProps) => {
  const sttAmount = totalSpent * USAGE_PROPORTIONS.STT;
  const llmAmount = totalSpent * USAGE_PROPORTIONS.LLM;
  const ttsAmount = totalSpent * USAGE_PROPORTIONS.TTS;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-600 dark:text-slate-400">Speech-to-Text</span>
        <span className="font-medium text-slate-800 dark:text-white">${sttAmount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-600 dark:text-slate-400">Language Models</span>
        <span className="font-medium text-slate-800 dark:text-white">${llmAmount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-600 dark:text-slate-400">Text-to-Speech</span>
        <span className="font-medium text-slate-800 dark:text-white">${ttsAmount.toFixed(2)}</span>
      </div>
      <div className="pt-4 border-t border-slate-200 dark:border-dark-700">
        <div className="flex justify-between items-center">
          <span className="font-medium text-slate-800 dark:text-white">Total</span>
          <span className="font-semibold text-slate-800 dark:text-white">${totalSpent.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default UsageBreakdown;