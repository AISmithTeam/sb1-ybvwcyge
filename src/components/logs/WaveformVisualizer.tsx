import React from 'react';
import ActionButton from '../common/ActionButton';
import { useAudioCallRecording } from '../../hooks/useAudioCallRecording';

interface WaveformVisualizerProps {
  data: number[];
  recordingDataUrl: string;
  accountSid: string;
  authToken: string;
}

const WaveformVisualizer = ({ data, recordingDataUrl, accountSid, authToken }: WaveformVisualizerProps) => {
  const {recordingUrl, recordingUri} = useAudioCallRecording({recordingDataUrl, accountSid, authToken});
  if (recordingUri) {
    console.log(recordingUrl);
    const recordingAudio = new Audio(recordingUrl);
    return (
          <div className="h-8 flex items-center gap-[1px]">
            {data.map((value, index) => (
              <div
                key={index}
                className="w-1 bg-primary-400 dark:bg-primary-500 rounded-full transition-all duration-200"
                style={{
                  height: `${value * 100}%`,
                  opacity: 0.3 + value * 0.7
                }}
              />
            ))}
          <ActionButton
            variant={'play'}
            showText={false}
            onClick={() => {recordingAudio.play()}}
            className="bg-white/80 dark:bg-dark-800/80"
          />
          <ActionButton
            variant={'download'}
            showText={false}
            className="bg-white/80 dark:bg-dark-800/80"
          />
          </div>
        );
      } else {
        return (
          <div className="h-8 flex items-center gap-[1px]">
            <text>Not Recorded</text>
          </div>
        )
      }
    }

export default WaveformVisualizer;