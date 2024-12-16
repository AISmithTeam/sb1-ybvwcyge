import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../components/common/Button';
import CampaignList from '../components/campaigns/CampaignList';
import CampaignForm from '../components/campaigns/CampaignForm';
import { useAssistants } from '../hooks/useAssistants';

const CampaignsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { assistants } = useAssistants();

  const handleNewCampaign = () => {
    setIsEditing(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Campaigns</h1>
        <Button icon={Plus} onClick={handleNewCampaign}>New Campaign</Button>
      </div>

      {isEditing && (
        <CampaignForm 
          assistants={assistants}
          onClose={() => setIsEditing(false)}
        />
      )}

      <CampaignList />
    </div>
  );
};

export default CampaignsPage;