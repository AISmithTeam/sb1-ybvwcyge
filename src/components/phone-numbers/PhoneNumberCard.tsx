import React from 'react';
import { Phone, Copy } from 'lucide-react';
import Card from '../common/Card';
import ActionButton from '../common/ActionButton';
import type { PhoneNumber } from '../../types/phoneNumber';

interface PhoneNumberCardProps {
  phoneNumber: PhoneNumber;
  onDelete: (id: string) => void;
  onEdit: (phoneNumber: PhoneNumber) => void;
}

const PhoneNumberCard = ({ phoneNumber, onDelete, onEdit }: PhoneNumberCardProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? 'text-green-600 dark:text-green-400'
      : 'text-slate-600 dark:text-slate-400';
  };

  return (
    <Card variant="glass" className="group hover:shadow-lg transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-500/10">
              <Phone className="w-5 h-5 text-primary-500 dark:text-primary-400" />
            </div>
            <div>
              <h3 className="font-mono text-lg font-medium text-slate-800 dark:text-white">
                {phoneNumber.number}
              </h3>
              <p className={`text-sm mt-1 ${getStatusColor(phoneNumber.status)}`}>
                {phoneNumber.status.charAt(0).toUpperCase() + phoneNumber.status.slice(1)}
              </p>
            </div>
          </div>
          <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <ActionButton 
              variant="edit" 
              showText={false}
              onClick={() => onEdit(phoneNumber)}
              className="bg-white/80 dark:bg-dark-800/80"
            />
            <ActionButton 
              variant="delete" 
              showText={false}
              onClick={() => onDelete(phoneNumber.id)}
              className="bg-white/80 dark:bg-dark-800/80"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <span className="font-medium text-slate-700 dark:text-slate-300">Account SID:</span>
            <code className="flex-1 font-mono text-slate-600 dark:text-slate-400 truncate">
              {phoneNumber.accountSid}
            </code>
            <button
              onClick={() => copyToClipboard(phoneNumber.accountSid)}
              className="p-1 hover:bg-slate-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
              title="Copy SID"
            >
              <Copy className="w-4 h-4 text-slate-400 hover:text-primary-500" />
            </button>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="font-medium text-slate-700 dark:text-slate-300">Auth Token:</span>
            <code className="flex-1 font-mono text-slate-600 dark:text-slate-400 truncate">
              {phoneNumber.authToken}
            </code>
            <button
              onClick={() => copyToClipboard(phoneNumber.authToken)}
              className="p-1 hover:bg-slate-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
              title="Copy Token"
            >
              <Copy className="w-4 h-4 text-slate-400 hover:text-primary-500" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PhoneNumberCard;