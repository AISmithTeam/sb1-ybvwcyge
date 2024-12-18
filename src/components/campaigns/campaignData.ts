import { Campaign } from './types';

export const campaigns: Campaign[] = [
  {
    id: 1,
    name: 'Dental Appointments',
    assistant: 'Dental Care Assistant',
    maxCalls: 1,
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    time: { start: '9:00:00', end: '18:00:00' },
    type: 'outbound',
    number: '+1 201 425 6272',
    status: 'active',
    file: 'dental_patients.csv'
  },
  {
    id: 2,
    name: 'Customer Support',
    assistant: 'Technical Support AI',
    maxCalls: 2,
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    time: { start: '8:00:00', end: '20:00:00' },
    type: 'inbound',
    number: '+44 20 7123 4567',
    status: 'active'
  },
  {
    id: 3,
    name: 'Appointment Reminders',
    assistant: 'Schedule Assistant',
    maxCalls: 3,
    days: ['Mon', 'Wed', 'Fri'],
    time: { start: '10:00:00', end: '16:00:00' },
    type: 'outbound',
    number: '+61 2 8765 4321',
    status: 'stopped',
    file: 'appointments.xlsx'
  },
  // ... rest of the campaigns remain the same but with properly formatted international numbers
];