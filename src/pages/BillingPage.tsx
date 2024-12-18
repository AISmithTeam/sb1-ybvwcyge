import React from 'react';
import { CreditCard, Download } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import BillingOverview from '../components/billing/BillingOverview';
import UsageChart from '../components/billing/UsageChart';

const TOTAL_SPENT = 2847.93;

const BillingPage = () => {
  // Calculate proportions
  const sttAmount = TOTAL_SPENT * 0.10; // 10%
  const llmAmount = TOTAL_SPENT * 0.50; // 50%
  const ttsAmount = TOTAL_SPENT * 0.40; // 40%

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Billing & Usage</h1>
        <Button icon={Download} variant="secondary">Download Invoice</Button>
      </div>

      <BillingOverview />

      <Card>
        <UsageChart />
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Payment Method</h3>
          <div className="flex items-center gap-4 p-4 border border-slate-200 dark:border-dark-700 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-700 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            </div>
            <div>
              <p className="font-medium text-slate-800 dark:text-white">•••• •••• •••• 4242</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Expires 12/24</p>
            </div>
            <Button variant="secondary" className="ml-auto">
              Update
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Usage Breakdown</h3>
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
                <span className="font-semibold text-slate-800 dark:text-white">${TOTAL_SPENT.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BillingPage;