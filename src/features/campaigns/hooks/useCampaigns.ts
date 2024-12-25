import { useState, useEffect } from 'react';
import type { Campaign } from '../../../components/campaigns/types';

import axios from 'axios';

const STORAGE_KEY = 'aismith_campaigns';

export const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const baseUrl = 'https://api.voice.aismith.co/api'
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(campaigns));
  }, [campaigns]);

  const addCampaign = (campaign: Campaign) => {
    const form = new FormData();
    form.append("assistant_id", campaign.assistant);
    form.append("phone_number_id", campaign.number);
    form.append("campaign_type", campaign.type);
    form.append("start_time", campaign.time.start);
    form.append("end_time", campaign.time.end);
    form.append("max_recalls", campaign.maxCalls.toString());
    form.append("recall_interval", "360"); // fixme must be recall interval
    //form.append("uploaded_file", campaign.file); // testme 
    form.append("file_name", ""); // fixme must be filename
    form.append("campaign_status", campaign.status);
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