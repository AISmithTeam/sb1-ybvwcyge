import { useState, useEffect } from 'react';
import { LogEntry } from '../components/logs/types';
import { useCampaigns } from '../features/campaigns/hooks/useCampaigns';
import { useAssistants } from './useAssistants';
import { usePhoneNumbers } from './usePhoneNumbers';
import axios from 'axios';

const STORAGE_KEY = 'call_logs'
const PER_NUMBER_CALLS_LIMIT = 20;
const URL = 'http://127.0.0.1:5000/api/twilio-records' // change to production

export const useCallLogs = () => {
    const [callLogs, setCallLogs] = useState<LogEntry[]>(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
      });
    const {phoneNumbers, createPhoneNumber, updatePhoneNumber, deletePhoneNumber, togglePhoneNumberStatus} = usePhoneNumbers();
    const { assistants, createAssistant, updateAssistant, deleteAssistant } = useAssistants();
    const { campaigns, addCampaign } = useCampaigns();

    for (let i=0; i < phoneNumbers.length; i++) {
        const phoneNumber = phoneNumbers[i]?.number;
        const phoneNumberId = phoneNumbers[i]?.id;
        const accountSid = phoneNumbers[i]?.accountSid;
        const authToken = phoneNumbers[i]?.authToken;

        const callAssistantId = campaigns.find(p => p.number === phoneNumberId?.toString())?.assistant;
        const callAssistantName = assistants.find(p => p.id.toString() === callAssistantId)?.name;
        if (callAssistantName) {
            axios
                .get(`${URL}?phone_number=${phoneNumber}&account_sid=${accountSid}&auth_token=${authToken}&limit=${PER_NUMBER_CALLS_LIMIT}&inbound=true`)
                .then((response) => {
                    const data = response.data;
                    if (!data.error) {
                        for (let i = 0; i <= data.length; i++) {
                            const callData = data[i];
                            if (callData && !callLogs.find(p => p.id === callData.sid)) {
                                const newLog: LogEntry = {
                                    id: callData.sid,
                                    type: 'Phone Inbound',
                                    callId: callData.sid,
                                    cost: callData.duration / 60 * 0.65,
                                    endedReason: "customer-ended-call",
                                    assistant: callAssistantName,
                                    phoneNumber: phoneNumber,
                                    customer: callData._from,
                                    callTime: callData.start_time,
                                    duration: callData.duration.toString(),
                                }
                                console.log(newLog);
                                setCallLogs([...callLogs, newLog]);
                            }
                        }
                    }
                });
        }
    }
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(callLogs));
      }, [callLogs]);

    return callLogs;
}