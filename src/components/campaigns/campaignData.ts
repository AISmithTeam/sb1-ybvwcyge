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
    number: '+12014256272',
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
    number: '+12014256273',
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
    number: '+12014256274',
    status: 'stopped',
    file: 'appointments.xlsx'
  },
  {
    id: 4,
    name: 'Sales Follow-up',
    assistant: 'Sales AI Assistant',
    maxCalls: 4,
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    time: { start: '9:00:00', end: '17:00:00' },
    type: 'outbound',
    number: '+12014256275',
    status: 'active',
    file: 'leads.csv'
  },
  {
    id: 5,
    name: 'Emergency Support',
    assistant: '24/7 Support AI',
    maxCalls: 1,
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    time: { start: '0:00:00', end: '23:59:00' },
    type: 'inbound',
    number: '+12014256276',
    status: 'active'
  },
  {
    id: 6,
    name: 'Feedback Collection',
    assistant: 'Survey Assistant',
    maxCalls: 2,
    days: ['Tue', 'Thu'],
    time: { start: '11:00:00', end: '19:00:00' },
    type: 'outbound',
    number: '+12014256277',
    status: 'stopped',
    file: 'customer_list.xlsx'
  },
  {
    id: 7,
    name: 'Order Confirmation',
    assistant: 'Order Processing AI',
    maxCalls: 3,
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    time: { start: '8:00:00', end: '22:00:00' },
    type: 'outbound',
    number: '+12014256278',
    status: 'active',
    file: 'orders.csv'
  }
];