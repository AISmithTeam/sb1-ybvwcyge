import React, { useState } from 'react';
import ExcelJS from 'exceljs'
import Card from '../components/common/Card';
import LogsTable from '../components/logs/LogsTable';
import { useCallLogs } from '../hooks/useCallLogs';

const STORAGE_KEY = 'call_logs';

const LogsPage = () => {
  const [fileUrl, setFileUrl] = useState('');
  const callLogs = useCallLogs();
  const callDetailsWorkbook = new ExcelJS.Workbook();
  const callDetailsWorksheet = callDetailsWorkbook.addWorksheet('Call Details');
  callDetailsWorksheet.columns = [
    {header: 'Customer Phone Number', key: 'customer'},
    {header: 'Call Type', key: 'type'},
    {header: 'Cost', key: 'cost'},
    {header: 'Ended Reason', key: 'endedReason'},
    {header: 'Assistant', key: 'assistant'},
    {header: 'From Number', key: 'phoneNumber'},
    {header: 'Call Start Time', key: 'callTime'},
    {header: 'Duration', key: 'duration'},
    {header: 'Recording URL', key: 'recordingURL'},
  ]
  for (let i = 0; i < callLogs.length; i++) {
    const callLog = callLogs[i];
    callDetailsWorksheet.addRow(
      {
        customer: callLog.customer,
        type: callLog.type,
        cost: callLog.cost,
        endedReason: callLog.endedReason,
        assistant: callLog.assistant,
        phoneNumber: callLog.phoneNumber,
        callTime: callLog.callTime,
        duration: callLog.duration,
        recordingURL: callLog.recordingUrl,
      }
    );
  }
  callDetailsWorkbook.xlsx.writeBuffer().then((buffer) => {
    setFileUrl(URL.createObjectURL(new Blob([buffer])));
  });

  const downloadButtonStyles = `rounded-xl font-medium flex items-center gap-2 transition-all duration-200 
      bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 
      text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 
      dark:shadow-primary-500/10 dark:hover:shadow-primary-500/20
      disabled:from-primary-600/50 disabled:to-primary-500/50 disabled:cursor-not-allowed px-4 py-2` 

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Call Logs</h1>
        <div className={downloadButtonStyles} title='click to download call details in .xlsx format'>
          <a href={fileUrl} download={`${Date.now()}.xlsx`}>Download</a>
        </div>
      </div>
      <Card className="p-6">
        <LogsTable callLogs={callLogs} />
      </Card>
    </div>
  );
};

export default LogsPage;