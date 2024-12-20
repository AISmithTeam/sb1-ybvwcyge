import React from 'react';
import Card from '../components/common/Card';
import LogsTable from '../components/logs/LogsTable';
import { useCallLogs } from '../hooks/useCallLogs';

const LogsPage = () => {
  const callLogs = useCallLogs();
  console.log(callLogs);
  //const callLogs = useCallLogs();
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Call Logs</h1>
      </div>

      <Card className="p-6">
        <LogsTable />
      </Card>
    </div>
  );
};

export default LogsPage;