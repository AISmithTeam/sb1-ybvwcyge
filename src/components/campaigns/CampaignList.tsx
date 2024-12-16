import React from 'react';
import CampaignCard from './CampaignCard';
import { campaigns } from './campaignData';

const CampaignList = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-slate-800 mb-6">Existing Campaigns</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default CampaignList;