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
    <Card variant="glass" className="group hover:shadow-lg transition-shadow duration-200 flex flex-col">
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <h3 className="font-mono text-lg font-medium text-slate-800 dark:text-white">
              {phoneNumber.number}
            </h3>
          </div>
          <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ActionButton 
              variant="edit" 
              showText={false}
              onClick={() => onEdit(phoneNumber)}
            />
            <ActionButton 
              variant="delete" 
              showText={false}
              onClick={() => onDelete(phoneNumber.id)}
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium">ID:</span>
            <span className="font-mono truncate flex-1">{phoneNumber.accountSid}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium">Token:</span>
            <span className="font-mono truncate flex-1">{phoneNumber.authToken}</span>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-3 bg-slate-50/50 dark:bg-dark-800/50 border-t border-slate-200/50 dark:border-dark-700/50 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-600 dark:text-slate-400">Status:</span>
          <span className={`text-sm font-medium ${getStatusColor(phoneNumber.status)}`}>
            {phoneNumber.status.charAt(0).toUpperCase() + phoneNumber.status.slice(1)}
          </span>
        </div>
        <button 
          className="p-2 rounded-lg hover:bg-white dark:hover:bg-dark-700 transition-colors duration-200 group/button"
          onClick={() => copyToClipboard(phoneNumber.number)}
          title="Copy Number"
        >
          <Copy className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover/button:text-primary-600 dark:group-hover/button:text-primary-400" />
        </button>
      </div>
    </Card>
  );
};

export default PhoneNumberCard;