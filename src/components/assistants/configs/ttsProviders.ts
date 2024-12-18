import { Provider } from './types';

export const ttsProviders: Provider[] = [
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    models: [
      {
        id: 'eleven-turbo-v2.5',
        name: 'Eleven Turbo V2.5',
        description: 'Latest version of our high-performance speech synthesis model.',
        voices: [
          { id: 'rachel', name: 'Rachel - Conversational' },
          { id: 'josh', name: 'Josh - Professional' },
          { id: 'bella', name: 'Bella - Friendly' },
          { id: 'emily', name: 'Emily - News Anchor' },
          { id: 'sam', name: 'Sam - Narrator' }
        ]
      },
      {
        id: 'eleven-multilingual-v2',
        name: 'Eleven Multilingual V2',
        description: 'Our State Of The Art Multilingual Speech Synthesis Model, Able To Generate Life-Like Speech In 29 Languages.',
        voices: [
          { id: 'multi-rachel', name: 'Rachel - Multilingual' },
          { id: 'multi-josh', name: 'Josh - Multilingual' },
          { id: 'multi-bella', name: 'Bella - Multilingual' }
        ]
      },
      {
        id: 'eleven-turbo-v2',
        name: 'Eleven Turbo V2',
        description: 'Our Cutting-Edge Turbo Model Is Ideally Suited For Tasks Demanding Extremely Low Latency.',
        voices: [
          { id: 'turbo-rachel', name: 'Rachel - Fast' },
          { id: 'turbo-josh', name: 'Josh - Fast' },
          { id: 'turbo-bella', name: 'Bella - Fast' }
        ]
      },
      {
        id: 'eleven-english-v1',
        name: 'Eleven English V1',
        description: 'Use Our Standard English Language Model To Generate Speech In A Variety Of Voices, Styles And Moods.',
        voices: [
          { id: 'en-rachel', name: 'Rachel - English' },
          { id: 'en-josh', name: 'Josh - English' },
          { id: 'en-bella', name: 'Bella - English' }
        ]
      }
    ]
  },
  {
    id: 'cortesia',
    name: 'Cortesia',
    models: [
      {
        id: 'standard',
        name: 'Standard',
        description: 'High-quality multilingual speech synthesis model',
        voices: [
          { id: 'friendly-australian-man', name: 'Friendly Australian Man' },
          { id: 'helpful-french-lady', name: 'Helpful French Lady' },
          { id: '1920s-radioman', name: '1920\'s Radioman' },
          { id: 'french-narrator-lady', name: 'French Narrator Lady' },
          { id: 'reading-man', name: 'Reading Man' },
          { id: 'new-york-woman', name: 'New York Woman' },
          { id: 'indian-lady', name: 'Indian Lady' },
          { id: 'meditation-lady', name: 'Meditation Lady' }
        ]
      },
      {
        id: 'sonic',
        name: 'Sonic',
        description: 'Fast and efficient speech synthesis model',
        voices: [
          { id: 'korean-narrator-woman', name: 'Korean Narrator Woman' },
          { id: 'korean-calm-woman', name: 'Korean Calm Woman' },
          { id: 'midwestern-man', name: 'Midwestern Man' },
          { id: 'friendly-reading-man', name: 'Friendly Reading Man' }
        ]
      }
    ]
  },
  {
    id: 'amazon',
    name: 'Amazon Polly',
    models: [
      {
        id: 'standard',
        name: 'Standard',
        voices: [
          { id: 'joanna', name: 'Joanna' },
          { id: 'matthew', name: 'Matthew' },
          { id: 'emma', name: 'Emma' },
          { id: 'brian', name: 'Brian' }
        ]
      },
      {
        id: 'neural',
        name: 'Neural TTS',
        voices: [
          { id: 'aditi', name: 'Aditi' },
          { id: 'raveena', name: 'Raveena' },
          { id: 'ivy', name: 'Ivy' }
        ]
      }
    ]
  },
  {
    id: 'google',
    name: 'Google Cloud Text-to-Speech',
    models: [
      {
        id: 'standard',
        name: 'Standard',
        voices: [
          { id: 'en-us-d', name: 'en-US-Wavenet-D' },
          { id: 'en-us-f', name: 'en-US-Wavenet-F' }
        ]
      },
      {
        id: 'wavenet',
        name: 'WaveNet',
        voices: [
          { id: 'en-gb-a', name: 'en-GB-Wavenet-A' },
          { id: 'en-gb-c', name: 'en-GB-Wavenet-C' },
          { id: 'en-in-a', name: 'en-IN-Wavenet-A' },
          { id: 'en-in-b', name: 'en-IN-Wavenet-B' },
          { id: 'en-au-b', name: 'en-AU-Wavenet-B' }
        ]
      }
    ]
  },
  {
    id: 'azure',
    name: 'Microsoft Azure Cognitive Services',
    models: [
      {
        id: 'standard',
        name: 'Standard',
        voices: [
          { id: 'aria', name: 'Aria' },
          { id: 'guy', name: 'Guy' },
          { id: 'libby', name: 'Libby' }
        ]
      },
      {
        id: 'neural',
        name: 'Neural TTS',
        voices: [
          { id: 'ryan', name: 'Ryan' },
          { id: 'neerja', name: 'Neerja' },
          { id: 'sonia', name: 'Sonia' },
          { id: 'william', name: 'William' }
        ]
      }
    ]
  },
  {
    id: 'murf',
    name: 'Murf AI',
    models: [
      {
        id: 'gen2',
        name: 'Gen2 Neural',
        voices: [
          { id: 'amanda', name: 'Amanda' },
          { id: 'james', name: 'James' },
          { id: 'sophia', name: 'Sophia' }
        ]
      },
      {
        id: 'neural',
        name: 'Neural TTS',
        voices: [
          { id: 'oliver', name: 'Oliver' },
          { id: 'ananya', name: 'Ananya' },
          { id: 'arjun', name: 'Arjun' },
          { id: 'isabella', name: 'Isabella' }
        ]
      }
    ]
  },
  {
    id: 'playht',
    name: 'PlayHT',
    models: [
      {
        id: 'neural',
        name: 'Neural TTS Models',
        voices: [
          { id: 'john', name: 'John' },
          { id: 'emily', name: 'Emily' },
          { id: 'harry', name: 'Harry' }
        ]
      },
      {
        id: 'turbo',
        name: 'Turbo Neural',
        voices: [
          { id: 'grace', name: 'Grace' },
          { id: 'kavya', name: 'Kavya' }
        ]
      }
    ]
  },
  {
    id: 'deepgram',
    name: 'Deepgram',
    models: [
      {
        id: 'aura',
        name: 'Aura Text-to-Speech',
        voices: [
          { id: 'asteria', name: 'Asteria' },
          { id: 'luna', name: 'Luna' },
          { id: 'stella', name: 'Stella' },
          { id: 'athena', name: 'Athena' },
          { id: 'hera', name: 'Hera' },
          { id: 'orion', name: 'Orion' },
          { id: 'arcas', name: 'Arcas' }
        ]
      }
    ]
  },
  {
    id: 'openai',
    name: 'OpenAI',
    models: [
      {
        id: 'alloy',
        name: 'alloy',
      },
      {
        id: 'ash',
        name: 'ash',
      },
      {
        id: 'ballad',
        name: 'ballad',
      },
      {
        id: 'coral',
        name: 'coral',
      },
      {
        id: 'echo',
        name: 'echo',
      },
      {
        id: 'sage',
        name: 'sage',
      },
      {
        id: 'shimmer',
        name: 'shimmer',
      },
      {
        id: 'verse',
        name: 'verse',
      }
    ]
  }
];