import { useState, useEffect } from 'react';
import type { Campaign } from '../../../components/campaigns/types';

import axios from 'axios';
import { useAssistants } from '../../../hooks/useAssistants';

const STORAGE_KEY = 'aismith_campaigns';

export const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [isCampaignsFetched, setIsCampaignsFetched] = useState(false);

  const baseUrl = 'https://api.voice.aismith.co/api'
  const accessToken = localStorage.getItem("access_token");
  const { assistants } = useAssistants();

  if (!isCampaignsFetched) {
    axios
    .get(`${baseUrl}/campaigns?jwt_token=${accessToken}`)
    .then((response) => {
      const data = response.data;
      const existingCampaigns = Array<Campaign>();
      for (let i = 0; i < data.length; i++) {
        const campaignData = data[i];
        if (campaignData) {
          existingCampaigns.push(
            {
              id: campaignData.id,
              name: campaignData.campaign_name,
              assistant: assistants.find(p => p.id == campaignData.assistant_id),
              maxCalls: campaignData.max_recalls,
              recallsInterval: parseInt(campaignData.recall_interval) / 60,
              days: [],
              time: {
                start: campaignData.start_time,
                end: campaignData.end_time,
              },
              type: campaignData.type,
              number: campaignData.phone_number_id, //phoneNumbers.find(p => p.id == campaignData.phone_number_id)?.number || "",
              status: campaignData.status,
              fileName: campaignData.file_name // fixme добавить в тип еще имя файла
            }
          );
        }
      }
      setCampaigns(existingCampaigns);
      setIsCampaignsFetched(true);
    });
  }


  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(campaigns));
  }, [campaigns]);

  const addCampaign = (campaign: Campaign) => {
    const form = new FormData();
    form.append("assistant_id", campaign.assistant?.id || "");
    form.append("phone_number_id", campaign.number);
    form.append("campaign_name", campaign.name);
    form.append("assistant_type", campaign.assistant?.type || ""); 
    form.append("campaign_type", campaign.type);
    form.append("start_time", campaign.time.start);
    form.append("end_time", campaign.time.end);
    form.append("max_recalls", campaign.maxCalls.toString());
    form.append("recall_interval", (campaign.recallsInterval * 60).toString()); // fixme must be recall interval
    form.append("uploaded_file", campaign.file ? campaign.file : ""); // testme 
    form.append("file_name", campaign.fileName); // fixme must be filename
    form.append("campaign_status", 'stopped');

    axios
      .post(`${baseUrl}/campaigns?jwt_token=${accessToken}`, form)
      .then((response) => {
        campaign.id = response.data.id;
      });
    setCampaigns(prev => [...prev, campaign]);
  };

  const updateCampaign = (id: number, updates: Partial<Campaign>) => {
    setCampaigns(prev =>
      prev.map(campaign =>
        campaign.id === id ? { ...campaign, ...updates } : campaign
      )
    );
  };

  const deleteCampaign = (id: number) => {
    setCampaigns(prev => prev.filter(campaign => campaign.id !== id));
  };

  return {
    campaigns,
    addCampaign,
    setCampaigns,
    updateCampaign,
    deleteCampaign
  };
};