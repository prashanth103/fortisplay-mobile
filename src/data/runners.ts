export type RaceStatus = 'FINISHED' | 'LIVE' | 'UPCOMING';

export interface Race {
  id: number;
  title: string;
  time: string;
  status: RaceStatus;
  countdown?: string;
}

export const RACES: Race[] = [
  {
    id: 1,
    title: 'KB1',
    time: '19:35',
    status: 'FINISHED',
  },
  {
    id: 2,
    title: 'KB2',
    time: '19:50',
    status: 'LIVE',
  },
  {
    id: 3,
    title: 'KB3',
    time: '20:05',
    status: 'UPCOMING',
    countdown: '01:28:32',
  },
];

export const RESULT_ROWS = [
  {
    title: 'WIN',
    runners: [
      {
        place: 'P1',
        code: 'SB',
        color: '#69BDF3',
      },
    ],
  },

  {
    title: 'FORECAST',
    runners: [
      {
        place: 'P1',
        code: 'SB',
        color: '#69BDF3',
      },
      {
        place: 'P2',
        code: 'LG',
        color: '#6BC12D',
      },
    ],
  },

  {
    title: 'TRIFECTA',
    runners: [
      {
        place: 'P1',
        code: 'SB',
        color: '#69BDF3',
      },
      {
        place: 'P2',
        code: 'LG',
        color: '#6BC12D',
      },
      {
        place: 'P3',
        code: 'SV',
        color: '#DADADA',
      },
    ],
  },

  {
    title: 'QUARTET',
    runners: [
      {
        place: 'P1',
        code: 'SB',
        color: '#69BDF3',
      },
      {
        place: 'P2',
        code: 'LG',
        color: '#6BC12D',
      },
      {
        place: 'P3',
        code: 'SV',
        color: '#DADADA',
      },
      {
        place: 'P4',
        code: 'OR',
        color: '#F28B42',
      },
    ],
  },
];

export interface Runner {
  id: string;
  code: string;
  name: string;
  color: string;
}

export const RUNNERS: Runner[] = [
  {
    id: '1',
    code: 'YW',
    name: 'YELLOW',
    color: '#F4D21F',
  },
  {
    id: '2',
    code: 'LG',
    name: 'LIGHT GREEN',
    color: '#66C341',
  },
  {
    id: '3',
    code: 'OR',
    name: 'ORANGE',
    color: '#FF8A3D',
  },
  {
    id: '4',
    code: 'RD',
    name: 'RED',
    color: '#E53935',
  },
  {
    id: '5',
    code: 'VT',
    name: 'VIOLET',
    color: '#9C27B0',
  },
  {
    id: '6',
    code: 'PK',
    name: 'PINK',
    color: '#F7A8D7',
  },
  {
    id: '7',
    code: 'IV',
    name: 'IVORY',
    color: '#EFE3C5',
  },
  {
    id: '8',
    code: 'SB',
    name: 'SKY BLUE',
    color: '#7EC8F8',
  },
];