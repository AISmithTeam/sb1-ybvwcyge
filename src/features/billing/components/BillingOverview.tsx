import React from 'react';
import { DollarSign, PhoneCall, Clock, Wallet } from 'lucide-react';
import { TOTAL_SPENT, TOTAL_CALLS, TOTAL_DURATION, CURRENT_BALANCE } from '../constants';
import StatCard from './StatCard';

const BillingOverview = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        icon={DollarSign}
        label="Total Spent"
        value={`$${TOTAL_SPENT.toFixed(2)}`}
        trend={{ value: 15, isPositive: true }}
      />
      <StatCard
        icon={PhoneCall}
        label="Total Calls"
        value={TOTAL_CALLS.toLocaleString()}
        trend={{ value: 8, isPositive: true }}
      />
      <StatCard
        icon={Clock}
        label="Total Duration"
        value={TOTAL_DURATION}
        trend={{ value: 5, isPositive: true }}
      />
      <StatCard
        icon={Wallet}
        label="Current Balance"
        value={`$${CURRENT_BALANCE.toFixed(2)}`}
      />
    </div>
  );
};

export default BillingOverview;