import React from 'react';
import CampaignCard from './CampaignCard';
import type { Campaign } from './types';


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

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {campaigns.map((campaign) => (
        <CampaignCard
          key={campaign.id}
          campaign={campaign}
          onEdit={onEdit} // ошибка потому что в CampaignCard другое определение типа Campaign
          onDelete={onDelete} // аналогично
        />
      ))}
    </div>
  );
};

export default CampaignList;