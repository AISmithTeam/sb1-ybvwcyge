import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../components/common/Button';
import CampaignList from '../components/campaigns/CampaignList';
import CampaignForm from '../components/campaigns/CampaignForm';
import { useAssistants } from '../hooks/useAssistants';
import { useCampaigns } from '../features/campaigns/hooks/useCampaigns';
import type { Campaign } from '../components/campaigns/types';

const CampaignsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { assistants } = useAssistants();
  const { campaigns, addCampaign, setCampaigns } = useCampaigns();

  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);

  const handleNewCampaign = () => {
    setIsEditing(true);
  };

  const handleEditCampaign = (campaign: Campaign) => {
    setIsEditing(true);
    setEditingCampaign(campaign);
  }

  const handleSaveCampaign = (campaign: Campaign) => {
    if (!isEditing) {
      addCampaign(campaign);
    } else {
      updateCampaign(campaign)      
      setIsEditing(false);
    }

  };

  const updateCampaign = (campaign: Campaign) => {
    setCampaigns([...campaigns.filter(item => item.id !== campaign.id), campaign]);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Campaigns</h1>
        <Button icon={Plus} onClick={handleNewCampaign}>New Campaign</Button>
      </div>

      {isEditing && (
        <CampaignForm 
          assistants={assistants}
          campaign={editingCampaign}
          onClose={() => setIsEditing(false)}
          onSave={handleSaveCampaign}
        />
      )}

      <CampaignList
        campaigns={campaigns}
        onEdit={handleEditCampaign}
        onDelete={() => {}} />
    </div>
  );
};

export default CampaignsPage;