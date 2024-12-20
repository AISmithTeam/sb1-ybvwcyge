import React from 'react';
import { Play, Pause, Clock, Bot, Phone, Calendar, FileSpreadsheet } from 'lucide-react';
import Card from '../common/Card';
import ActionButton from '../common/ActionButton';
import { Campaign } from './types';
import { useAssistants } from '../../hooks/useAssistants';
import { usePhoneNumbers } from '../../hooks/usePhoneNumbers';

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? 'bg-green-50 text-green-700 border-green-100 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/20'
      : 'bg-slate-50 text-slate-700 border-slate-100 dark:bg-slate-500/10 dark:text-slate-300 dark:border-slate-500/20';
  };

  const { assistants, createAssistant, updateAssistant, deleteAssistant } = useAssistants();
  const { phoneNumbers, createPhoneNumber, updatePhoneNumber, deletePhoneNumber, togglePhoneNumberStatus} = usePhoneNumbers();

  const assistantName = assistants.find(p => p.id?.toString() === campaign.assistant)?.name;
  const phoneNumber = phoneNumbers.find(p => p.id?.toString() === campaign.number)?.number;

  return (
    <Card variant="glass" className="hover:shadow-lg transition-shadow duration-200 flex flex-col">
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{campaign.name}</h3>
            <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-200 ${getStatusColor(campaign.status)}`}>
              {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
            </span>
          </div>
          <div className="flex gap-1.5">
            <ActionButton 
              variant="edit" 
              showText={false} 
              className="bg-white/80 dark:bg-dark-800/80 hover:bg-white dark:hover:bg-dark-700"
            />
            <ActionButton 
              variant="delete" 
              showText={false}
              className="bg-white/80 dark:bg-dark-800/80 hover:bg-white dark:hover:bg-dark-700"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <Bot className="w-4 h-4 text-primary-500 dark:text-primary-400" />
            <span className="truncate">{assistantName}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <Phone className="w-4 h-4 text-primary-500 dark:text-primary-400" />
            <span>{phoneNumber}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <Clock className="w-4 h-4 text-primary-500 dark:text-primary-400" />
            <span>{campaign.time.start} - {campaign.time.end}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <Calendar className="w-4 h-4 text-primary-500 dark:text-primary-400" />
            <span className="truncate">{campaign.days.join(', ')}</span>
          </div>
          {campaign.file && (
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <FileSpreadsheet className="w-4 h-4 text-primary-500 dark:text-primary-400" />
              <span className="truncate">{campaign.file}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="px-6 py-3 bg-slate-50/50 dark:bg-dark-800/50 border-t border-slate-200/50 dark:border-dark-700/50 flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Max Calls: {campaign.maxCalls}
        </span>
        <button 
          className="p-2 rounded-lg hover:bg-white dark:hover:bg-dark-700 transition-colors duration-200 group"
          title={campaign.status === 'active' ? 'Pause Campaign' : 'Start Campaign'}
        >
          {campaign.status === 'active' ? (
            <Pause className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
          ) : (
            <Play className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
          )}
        </button>
      </div>
    </Card>
  );
};

export default CampaignCard;