import React from 'react';
import { BarChart3 } from 'lucide-react';

interface UsageData {
  date: string;
  calls: number;
  cost: number;
}

const mockUsageData: UsageData[] = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(2024, 2, i + 1).toISOString().split('T')[0],
  calls: Math.floor(Math.random() * 100),
  cost: Number((Math.random() * 10).toFixed(2))
}));

const UsageChart = () => {
  const maxCalls = Math.max(...mockUsageData.map(d => d.calls));

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Usage Overview</h3>
        <div className="flex items-center gap-2">
          <select className="text-sm rounded-lg border-slate-200 dark:border-dark-700 dark:bg-dark-800 dark:text-slate-200">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 3 Months</option>
          </select>
        </div>
      </div>

      <div className="h-64 flex items-end gap-1">
        {mockUsageData.map((data) => (
          <div
            key={data.date}
            className="flex-1 group relative"
            style={{ height: `${(data.calls / maxCalls) * 100}%` }}
          >
            <div className="absolute inset-x-0 bottom-0 bg-primary-100 dark:bg-primary-900/40 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/60 transition-colors rounded-t-sm"
                 style={{ height: '100%' }}>
              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block
                          bg-slate-800 dark:bg-dark-700 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
              >
                {data.calls} calls
                <br />
                ${data.cost}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
        <span>{mockUsageData[0].date}</span>
        <span>{mockUsageData[mockUsageData.length - 1].date}</span>
      </div>
    </div>
  );
};

export default UsageChart;