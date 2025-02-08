import React from 'react';
import CampaignCard from './CampaignCard';
import type { Campaign } from './types';
import { usePhoneNumbers } from '../../hooks/usePhoneNumbers';


interface CampaignListProps {
  campaigns: Campaign[];
  onEdit: (campaign: Campaign) => void;
  onDelete: (campaign: Campaign) => void;
}

const CampaignList = ({ campaigns, onEdit, onDelete }: CampaignListProps) => {
  if (campaigns.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 dark:text-slate-400">
        No campaigns created yet. Click "New Campaign" to get started.
      </div>
    );
  }

  const { phoneNumbers } = usePhoneNumbers();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {campaigns.map((campaign) => (
        <CampaignCard
          key={campaign.id}
          campaign={campaign}
          phoneNumbers={phoneNumbers}
          onEdit={onEdit} // ошибка потому что в CampaignCard другое определение типа Campaign
          onDelete={onDelete} // аналогично
        />
      ))}
    </div>
  );
};

export default CampaignList;