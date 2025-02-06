import { Provider } from './types';

export const sttProviders: Provider[] = [
  {
    id: 'azure',
    name: 'Azure Speech Services',
    models: [
      {
        id: 'azure-base',
        name: 'Base - Fast & Efficient',
        description: 'Optimized for real-time transcription with low latency',
        voices: []
      },
      {
        id: 'azure-enhanced',
        name: 'Enhanced - High Accuracy',
        description: 'Advanced model with superior accuracy for complex audio',
        voices: []
      },
      {
        id: 'azure-custom',
        name: 'Custom - Domain Specific',
        description: 'Tailored for specific industry terminology and acoustics',
        voices: []
      }
    ]
  },
  {
    id: 'google',
    name: 'Google Cloud Speech-to-Text',
    models: [
      {
        id: 'google-standard',
        name: 'Standard v2',
        description: 'General-purpose speech recognition for most use cases',
        voices: []
      },
      {
        id: 'google-enhanced',
        name: 'Enhanced v2',
        description: 'Higher accuracy for challenging audio environments',
        voices: []
      },
      {
        id: 'google-medical',
        name: 'Medical Dictation',
        description: 'Specialized for medical terminology and dictation',
        voices: []
      }
    ]
  },
  {
    id: 'aws',
    name: 'Amazon Transcribe',
    models: [
      {
        id: 'aws-general',
        name: 'General Purpose',
        description: 'Versatile model for various speech recognition tasks',
        voices: []
      },
      {
        id: 'aws-medical',
        name: 'Medical',
        description: 'Optimized for healthcare and medical transcription',
        voices: []
      },
      {
        id: 'aws-telephony',
        name: 'Call Analytics',
        description: 'Specialized for phone call transcription and analysis',
        voices: []
      }
    ]
  },
  {
    id: 'deepgram',
    name: 'Deepgram',
    models: [
      {
        id: 'nova-2',
        name: 'Nova-2',
        description: 'Latest generation model with enhanced accuracy',
        voices: []
      },
      {
        id: 'enhanced',
        name: 'Enhanced',
        description: 'Optimized for challenging audio conditions',
        voices: []
      },
      {
        id: 'whisper',
        name: 'Whisper',
        description: 'Based on OpenAI\'s Whisper model architecture',
        voices: []
      }
    ]
  },
  {
    id: 'assembly',
    name: 'AssemblyAI',
    models: [
      {
        id: 'default',
        name: 'Default',
        description: 'General-purpose transcription model',
        voices: []
      },
      {
        id: 'enhanced',
        name: 'Enhanced',
        description: 'Higher accuracy for clear audio sources',
        voices: []
      },
      {
        id: 'low-latency',
        name: 'Low Latency',
        description: 'Optimized for real-time transcription',
        voices: []
      }
    ]
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    models: [
      {
        id: 'elevenlabs-asr',
        name: 'ElevenLabs-ASR',
        description: 'fast transcription model',
        voices: []
      }
    ]
  }
];