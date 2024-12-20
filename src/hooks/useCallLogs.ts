import { useState, useEffect } from 'react';
import { LogEntry } from '../components/logs/types';
import { useCampaigns } from '../features/campaigns/hooks/useCampaigns';
import { useAssistants } from './useAssistants';
import { usePhoneNumbers } from './usePhoneNumbers';
import axios from 'axios';
import { Json } from 'twilio/lib/interfaces';

const STORAGE_KEY = 'call_logs'
const PER_NUMBER_CALLS_LIMIT = 20;
const TOTAL_MAX_CALL_LOGS = 20;
const URL = 'https://api.voice.aismith.co/api/twilio-records' // change to production

export const useCallLogs = () => {
    const [callLogs, setCallLogs] = useState<LogEntry[]>(Array());
    const { phoneNumbers, createPhoneNumber, updatePhoneNumber, deletePhoneNumber, togglePhoneNumberStatus } = usePhoneNumbers();
    const { assistants, createAssistant, updateAssistant, deleteAssistant } = useAssistants();
    const { campaigns, addCampaign } = useCampaigns();
    let newLogs = new Array<LogEntry>();

    for (let i=0; i < phoneNumbers.length; i++) {
        const phoneNumber = phoneNumbers[i]?.number;
        const phoneNumberId = phoneNumbers[i]?.id;
        const accountSid = phoneNumbers[i]?.accountSid;
        const authToken = phoneNumbers[i]?.authToken;

        const callAssistantId = campaigns.find(p => p.number === phoneNumberId?.toString())?.assistant;
        const callAssistantName = assistants.find(p => p.id.toString() === callAssistantId)?.name;
        if (callAssistantName) {
            // retreive inbound
            axios
                .get(`${URL}?phone_number=${phoneNumber}&account_sid=${accountSid}&auth_token=${authToken}&limit=${PER_NUMBER_CALLS_LIMIT}&inbound=false`)
                .then((response) => {
                    const data = response.data;
                    if (!data.error) {
                        for (let i = 0; i <= data.length; i++) {
                            const callData = data[i];
                            const recordingDataUrl = 'https://api.twilio.com/' + callData?.subresource_uris?.recordings;
                            if (callData && !newLogs.find(p => p.id === callData.sid)) {
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
                                    accountSid: accountSid,
                                    authToken: authToken,
                                    recordingUrl: recordingDataUrl//recordingResourceUri ? recordingResourceUrl.slice(0, recordingResourceUrl.length - 4) + 'mp3' : "",
                                }
                                newLogs.push(newLog);
                            }
                        }
                        if (callLogs.length == 0) {
                            setCallLogs(newLogs);
                        }
                    }
                })
                // retreive outbound
        /*if (callAssistantName && callLogs.length >= TOTAL_MAX_CALL_LOGS && callLogs.length < 2 * TOTAL_MAX_CALL_LOGS) {
                axios
                    .get(`${URL}?phone_number=${phoneNumber}&account_sid=${accountSid}&auth_token=${authToken}&limit=${PER_NUMBER_CALLS_LIMIT}&inbound=false`)
                    .then((response) => {
                        const data = response.data;
                        if (!data.error) {
                            let newLogs = new Array<LogEntry>();
                            for (let i = 0; i <= data.length; i++) {
                                const callData = data[i];
                                const recordingDataUrl = 'https://api.twilio.com/' + callData?.subresource_uris?.recordings;
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
                                        accountSid: accountSid,
                                        authToken: authToken,
                                        recordingUrl: recordingDataUrl //recordingResourceUri ? recordingResourceUrl.slice(0, recordingResourceUrl.length - 4) + 'mp3' : "",
                                    }
                                    newLogs.push(newLog);
                                }
                            }
                            setCallLogs([...callLogs, ...newLogs]);
                        }
                    }); 
            } */
        }
    }
    /*useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(callLogs));
      }, [callLogs]); */
    return callLogs;
}