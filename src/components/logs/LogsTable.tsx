import React from 'react';
import { Phone, Calendar, Clock, Bot, Hash, DollarSign, XCircle } from 'lucide-react';
import WaveformVisualizer from './WaveformVisualizer';
import { LogEntry } from './types';
import { useCallLogs } from '../../hooks/useCallLogs';

interface Log {
  id: number;
  callId: string;
  phoneNumber: string;
  date: string;
  time: string;
  duration: string;
  assistant: string;
  status: 'completed' | 'failed' | 'in-progress';
  cost: number;
  endReason: string;
  recording: number[];
}

interface logsTableProps {
  callLogs: LogEntry[]
}
// empty comment
const mockLogs: Log[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  callId: `CALL-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
  phoneNumber: `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
  date: new Date(2024, 2, Math.floor(Math.random() * 30) + 1).toLocaleDateString(),
  time: `${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
  duration: `${Math.floor(Math.random() * 10) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
  assistant: `AI Assistant ${i + 1}`,
  status: ['completed', 'failed', 'in-progress'][Math.floor(Math.random() * 3)] as Log['status'],
  cost: Number((Math.random() * 5).toFixed(2)),
  endReason: ['User Hangup', 'Task Completed', 'System Error', 'Timeout'][Math.floor(Math.random() * 4)],
  recording: Array.from({ length: 50 }, () => Math.random())
}));

const LogsTable = ( {callLogs} : logsTableProps ) => {
  const getStatusColor = (status: Log['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 text-green-700 border-green-100 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/20';
      case 'failed':
        return 'bg-red-50 text-red-700 border-red-100 dark:bg-red-500/10 dark:text-red-300 dark:border-red-500/20';
      case 'in-progress':
        return 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20';
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 dark:border-dark-700">
            <th className="text-left py-4 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Call ID</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Phone Number</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Date & Time</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Duration</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Assistant</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Status</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Cost</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">End Reason</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">Recording</th>
          </tr>
        </thead>
        <tbody>
          {callLogs.map((log) => (
            <tr key={log.id} className="border-b border-slate-200 dark:border-dark-700">
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <Hash className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                  <span className="text-sm font-mono text-slate-800 dark:text-slate-200">{log.callId}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                  <span className="text-sm text-slate-800 dark:text-slate-200">{log.phoneNumber}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                    <span className="text-sm text-slate-800 dark:text-slate-200">{log.callTime}</span>
                  </div>
                  {
                    //<div className="flex items-center gap-2">
                    //<Clock className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                    //<span className="text-sm text-slate-600 dark:text-slate-400">{log.callTime}</span>
                  //</div>
                  }
                </div>
              </td>
              <td className="py-4 px-4">
                <span className="text-sm text-slate-800 dark:text-slate-200">{log.duration}</span>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                  <span className="text-sm text-slate-800 dark:text-slate-200">{log.assistant}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor('completed')}`}>
                  {log.endedReason.charAt(0).toUpperCase() + log.endedReason.slice(1)}
                </span>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                  <span className="text-sm text-slate-800 dark:text-slate-200">${log.cost.toFixed(2)}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                  <span className="text-sm text-slate-800 dark:text-slate-200">{log.endedReason}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <WaveformVisualizer 
                  data={Array.from({ length: 50 }, () => Math.random())}
                  recordingDataUrl={log.recordingUrl}
                  accountSid={log.accountSid}
                  authToken={log.authToken} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogsTable;