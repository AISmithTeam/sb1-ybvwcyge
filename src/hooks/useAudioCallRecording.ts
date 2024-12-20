import axios from 'axios';
import { useState } from 'react';

interface AudioCallRecordingProps {
    recordingDataUrl: string;
    accountSid: string;
    authToken: string;
}

export const useAudioCallRecording = ( { recordingDataUrl, accountSid, authToken }: AudioCallRecordingProps ) => {
    const [recordingUrl, setRecordingUrl] = useState(String());
    const [recordingUri, setRecordingUri] = useState(String());
    axios
        .get(recordingDataUrl, {
            auth: {
            username: accountSid,
            password: authToken,
            }
        })
        .then( (recordingResponse) => {
            const recordingData = recordingResponse.data;
            const recordingResourceJsonUri = recordingData.recordings?.at(0)?.uri;
            const recordingResourceUri = recordingResourceJsonUri.slice(0, recordingResourceJsonUri.length - 4) + 'mp3';
            const recordingResourceUrl = 'https://' + accountSid + ':' + authToken + '@' + 'api.twilio.com/' + recordingResourceUri;
            setRecordingUrl(recordingResourceUrl);
            setRecordingUri(recordingResourceUri);
        });
    return { recordingUrl, recordingUri }
}