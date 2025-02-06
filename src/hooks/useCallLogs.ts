import { useState, useEffect } from 'react';
import { LogEntry } from '../components/logs/types';
import { usePhoneNumbers } from './usePhoneNumbers';
import axios from 'axios';

const URL = 'https://api.voice.aismith.co/api/twilio-records' // change to production

export const useCallLogs = () => {
    const [callLogs, setCallLogs] = useState<LogEntry[]>(Array());
    let newLogs = new Array<LogEntry>();
    const accessToken = localStorage.getItem("access_token");
    // retreive inbound
    axios
        .get(`${URL}?jwt_token=${accessToken}`)
        .then((response) => {
            const data = response.data;
            if (!data.error) {
                for (let i = 0; i <= data.length; i++) {
                    const callData = data[i];
                    if (callData) {
                        console.log(callData)
                        const recordingDataUrl = 'https://' + callData.account_sid + ':' + callData.auth_token + '@' + 'api.twilio.com' + callData.recording_url;
                        if (callData && !newLogs.find(p => p.id === callData.sid)) {
                            const newLog: LogEntry = {
                                id: callData.call_id,
                                type: callData.call_type,
                                callId: callData.call_sid,
                                cost: callData.cost,
                                endedReason: "customer-ended-call",
                                assistant: callData.assistant_name,
                                phoneNumber: callData.phone_number_id,
                                customer: callData.customer_phone_number,
                                callTime: callData.start_time,
                                duration: callData.duration.toString(),
                                accountSid: callData.account_sid,
                                authToken: callData.auth_token,
                                recordingUrl: recordingDataUrl // recordingResourceUri ? recordingResourceUrl.slice(0, recordingResourceUrl.length - 4) + 'mp3' : "",
                            }
                            newLogs.push(newLog);
                        }
                    }
                }
                if (callLogs.length == 0) {
                    setCallLogs(newLogs);
                }
            }
        });
    return callLogs;
}