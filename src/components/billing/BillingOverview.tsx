import React from 'react';
import { DollarSign, PhoneCall, Clock, Wallet } from 'lucide-react';
import Card from '../common/Card';

const StatCard = ({ icon: Icon, label, value, trend }: {
  icon: React.ElementType;
  label: string;
  value: string;
  trend?: { value: number; isPositive: boolean };
}) => (
  <Card className="p-6">
    <div className="flex items-start justify-between">
      <div>
        <Icon className="w-6 h-6 text-primary-500 dark:text-primary-400 mb-4" />
        <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400">{label}</h3>
        <p className="text-2xl font-semibold text-slate-800 dark:text-white mt-1">{value}</p>
      </div>
      {trend && (
        <span className={`text-sm font-medium ${
          trend.isPositive 
            ? 'text-green-600 dark:text-green-400' 
            : 'text-red-600 dark:text-red-400'
        }`}>
          {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
        </span>
      )}
    </div>
  </Card>
);

const BillingOverview = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        icon={DollarSign}
        label="Total Spent"
        value="$1,234.56"
        trend={{ value: 12, isPositive: true }}
      />
      <StatCard
        icon={PhoneCall}
        label="Total Calls"
        value="1,234"
        trend={{ value: 8, isPositive: true }}
      />
      <StatCard
        icon={Clock}
        label="Total Duration"
        value="256h 34m"
        trend={{ value: 5, isPositive: true }}
      />
      <StatCard
        icon={Wallet}
        label="Current Balance"
        value="$789.12"
      />
    </div>
  );
};

export default BillingOverview;