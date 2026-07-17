import { TicketCardData } from '@/components/common/TicketCard';
import { ThemeColors } from '@/theme/colors';
import { ComponentProps } from 'react';
import MaterialIcons from '@react-native-vector-icons/material-icons';

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

// ─── Sales & Payouts Types ────────────────────────────────────────────────────

export interface SaleItem extends TicketCardData {
  id: string;
  title: string;
  listSubtitle: string;
  amount: number;
  badge: string;
  avatarText: string;
  avatarColorKey: keyof ThemeColors;
  iconColorKey: keyof ThemeColors;
}

// ─── Wallet Types ─────────────────────────────────────────────────────────────

export interface TopStatItem {
  id: string;
  title: string;
  value: string;
  icon: MaterialIconName;
  backgroundColorKey: keyof ThemeColors;
  iconBackgroundKey: keyof ThemeColors;
  iconColorKey: keyof ThemeColors;
}

export interface ActionCardItem {
  id: string;
  title: string;
  value: string;
  icon: MaterialIconName;
  backgroundColorKey: keyof ThemeColors;
  textColorKey: keyof ThemeColors;
  labelColorKey: keyof ThemeColors;
  iconBackgroundKey: keyof ThemeColors;
  iconColorKey: keyof ThemeColors;
  iconSize: number;
}

export interface StatCardItem {
  id: string;
  title: string;
  value: string;
  icon: MaterialIconName;
  backgroundColorKey: keyof ThemeColors;
  iconBackgroundKey: keyof ThemeColors;
  iconColorKey: keyof ThemeColors;
  labelColorKey: keyof ThemeColors;
}

export interface HistoryItem {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  amountColorKey: keyof ThemeColors;
  icon: MaterialIconName;
  iconColorKey: keyof ThemeColors;
  backgroundColorKey: keyof ThemeColors;
}

// ─── Sales Data ───────────────────────────────────────────────────────────────

export const SALES_DATA: Omit<SaleItem, 'avatarColor' | 'iconColor'>[] = [
  {
    id: '1',
    title: 'KB2 · WIN',
    listSubtitle: 'No. 8266150525 · 4:32:18 PM',
    amount: 5,
    badge: 'EXACT',
    avatarText: 'YW',
    avatarColorKey: 'avatarYellow',
    status: 'WON',
    ticketType: 'KB2 · WIN',
    option: 'EXACT',
    ticketNumber: '8266150525',
    date: '21-06-2026, 4:32 PM',
    betAmount: 5,
    iconText: 'YW',
    iconColorKey: 'avatarYellow',
    subtitle: 'Yellow',
    note: 'Race won — payout due.',
    payout: 75,
  },
  {
    id: '2',
    title: 'KB1 · FORECAST',
    listSubtitle: 'No. 8266144213 · 4:18:46 PM',
    amount: 10,
    badge: 'ANY',
    avatarText: 'SB',
    avatarColorKey: 'avatarBlue',
    status: 'LOST',
    ticketType: 'KB1 · FORECAST',
    option: 'ANY',
    ticketNumber: '8266144213',
    date: '21-06-2026, 4:18 PM',
    betAmount: 10,
    iconText: 'SB',
    iconColorKey: 'avatarBlue',
    subtitle: 'Light Blue',
    note: 'No payout — this ticket did not win.',
  },
  {
    id: '3',
    title: 'KB1 · WIN',
    listSubtitle: 'No. 8259181740 · 4:05:09 PM',
    amount: 5,
    badge: 'EXACT',
    avatarText: 'LG',
    avatarColorKey: 'avatarGreen',
    status: 'PENDING',
    ticketType: 'KB1 · WIN',
    option: 'EXACT',
    ticketNumber: '8259181740',
    date: '21-06-2026, 4:05 PM',
    betAmount: 5,
    iconText: 'LG',
    iconColorKey: 'avatarGreen',
    subtitle: 'Light Green',
    note: 'Race not finished — payout pending result.',
  },
  {
    id: '4',
    title: 'KB2 · TRIFECTA',
    listSubtitle: 'No. 8254222906 · 3:52:31 PM',
    amount: 20,
    badge: 'ANY',
    avatarText: 'OR',
    avatarColorKey: 'avatarOrange',
    status: 'PENDING',
    ticketType: 'KB2 · TRIFECTA',
    option: 'ANY',
    ticketNumber: '8254222906',
    date: '21-06-2026, 3:52 PM',
    betAmount: 20,
    iconText: 'OR',
    iconColorKey: 'avatarOrange',
    subtitle: 'Orange',
    note: 'This ticket is still pending review.',
  },
  {
    id: '5',
    title: 'KB1 · QUARTET',
    listSubtitle: 'No. 8248913558 · 3:40:55 PM',
    amount: 15,
    badge: 'EXACT',
    avatarText: 'SV',
    avatarColorKey: 'avatarGrey',
    status: 'LOST',
    ticketType: 'KB1 · QUARTET',
    option: 'EXACT',
    ticketNumber: '8248913558',
    date: '21-06-2026, 3:40 PM',
    betAmount: 15,
    iconText: 'SV',
    iconColorKey: 'avatarGrey',
    subtitle: 'Silver',
    note: 'This ticket did not qualify for payout.',
  },
  {
    id: '6',
    title: 'KB3 · WIN',
    listSubtitle: 'No. 824290817 · 3:25:12 PM',
    amount: 5,
    badge: 'EXACT',
    avatarText: 'RD',
    avatarColorKey: 'avatarRed',
    status: 'PENDING',
    ticketType: 'KB3 · WIN',
    option: 'EXACT',
    ticketNumber: '824290817',
    date: '21-06-2026, 3:25 PM',
    betAmount: 5,
    iconText: 'RD',
    iconColorKey: 'avatarRed',
    subtitle: 'Red',
    note: 'Race not finished — payout pending result.',
  },
];

// ─── Payouts Data ─────────────────────────────────────────────────────────────

export const PAYOUTS_DATA: Record<string, Omit<TicketCardData, 'iconColor'> & { iconColorKey: keyof ThemeColors }> = {
  '8266150525': {
    status: 'WON',
    note: 'Payout due',
    payout: 75,
    ticketType: 'KB2 · WIN',
    option: 'EXACT',
    ticketNumber: '8266150525',
    date: '21-06-2026, 4:32 PM',
    betAmount: 5,
    iconText: 'YW',
    iconColorKey: 'avatarYellow',
    subtitle: 'Yellow',
  },
  '8259181740': {
    status: 'LOST',
    note: 'No payout — this ticket did not win.',
    ticketType: 'KB1 · WIN',
    option: 'EXACT',
    ticketNumber: '8259181740',
    date: '21-06-2026, 4:05 PM',
    betAmount: 5,
    iconText: 'LG',
    iconColorKey: 'avatarGreenLight',
    subtitle: 'Light Green',
  },
  '8266144213': {
    status: 'LOST',
    note: 'No payout — this ticket did not win.',
    ticketType: 'KB1 · FORECAST',
    option: 'ANY',
    ticketNumber: '8266144213',
    date: '21-06-2026, 4:18 PM',
    betAmount: 10,
    iconText: 'SB',
    iconColorKey: 'avatarBlue',
    subtitle: 'Light Blue',
  },
  '824290817': {
    status: 'PENDING',
    note: 'Race not finished — payout pending result.',
    ticketType: 'KB3 · WIN',
    option: 'EXACT',
    ticketNumber: '824290817',
    date: '21-06-2026, 3:25 PM',
    betAmount: 5,
    iconText: 'RD',
    iconColorKey: 'avatarRed',
    subtitle: 'Red',
  },
};

// ─── Wallet Data ──────────────────────────────────────────────────────────────

export const TOP_STATS: TopStatItem[] = [
  {
    id: 'sales',
    title: 'Total Sales',
    value: '₱ 400',
    icon: 'trending-up',
    backgroundColorKey: 'walletCard',
    iconBackgroundKey: 'walletIconBackground',
    iconColorKey: 'walletAccent',
  },
];

export const ACTION_CARDS: ActionCardItem[] = [
  {
    id: 'cash',
    title: 'Cash in Hand',
    value: '₱1,250.00',
    icon: 'account-balance-wallet',
    backgroundColorKey: 'primary',
    textColorKey: 'black',
    labelColorKey: 'black',
    iconBackgroundKey: 'walletPrimaryDark',
    iconColorKey: 'black',
    iconSize: 20,
  },
  {
    id: 'commission',
    title: 'My Commission',
    value: '₱ 40.00',
    icon: 'percent',
    backgroundColorKey: 'walletCard',
    textColorKey: 'walletText',
    labelColorKey: 'walletLabel',
    iconBackgroundKey: 'walletIconBackground',
    iconColorKey: 'walletAccent',
    iconSize: 24,
  },
];

export const STAT_CARDS: StatCardItem[] = [
  {
    id: 'received',
    title: 'RECEIVED',
    value: '₱ 0',
    icon: 'arrow-downward',
    backgroundColorKey: 'white',
    iconBackgroundKey: 'walletIconBackground',
    iconColorKey: 'walletStatIconColor',
    labelColorKey: 'textSecondary',
  },
  {
    id: 'remitted',
    title: 'REMITTED',
    value: '₱ 100',
    icon: 'arrow-forward',
    backgroundColorKey: 'white',
    iconBackgroundKey: 'walletIconBackground',
    iconColorKey: 'walletStatIconColor',
    labelColorKey: 'textSecondary',
  },
  {
    id: 'cancel',
    title: 'CANCEL',
    value: '₱ 0',
    icon: 'close',
    backgroundColorKey: 'white',
    iconBackgroundKey: 'walletIconBackground',
    iconColorKey: 'walletStatIconColor',
    labelColorKey: 'textSecondary',
  },
  {
    id: 'payouts',
    title: 'PAYOUTS',
    value: '₱ 0',
    icon: 'payments',
    backgroundColorKey: 'white',
    iconBackgroundKey: 'walletIconBackground',
    iconColorKey: 'walletStatIconColor',
    labelColorKey: 'textSecondary',
  },
];

export const HISTORY_ITEMS: HistoryItem[] = [
  {
    id: '1',
    title: 'Received',
    subtitle: 'Cash · 17:22:08',
    amount: '+₱500',
    amountColorKey: 'walletSuccess',
    icon: 'arrow-downward',
    iconColorKey: 'walletSuccess',
    backgroundColorKey: 'walletHistoryCard',
  },
  {
    id: '2',
    title: 'Payout Sent',
    subtitle: 'Bank transfer · 16:30:52',
    amount: '-₱200',
    amountColorKey: 'danger',
    icon: 'arrow-upward',
    iconColorKey: 'danger',
    backgroundColorKey: 'walletHistoryCard',
  },
  {
    id: '3',
    title: 'Sales settled',
    subtitle: 'Ticket · 15:48:10',
    amount: '+₱800',
    amountColorKey: 'walletSuccess',
    icon: 'check-circle',
    iconColorKey: 'walletInfo',
    backgroundColorKey: 'walletHistoryCard',
  },
  {
    id: '4',
    title: 'Cash added',
    subtitle: 'Deposit · 14:10:28',
    amount: '+₱300',
    amountColorKey: 'walletSuccess',
    icon: 'paid',
    iconColorKey: 'walletAccent',
    backgroundColorKey: 'walletHistoryCard',
  },
];
