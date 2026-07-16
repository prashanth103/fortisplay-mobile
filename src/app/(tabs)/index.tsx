import { SPACING } from '@/theme';
import BetSlip from '@/components/bet/BetSlip';
import ConfirmBetModal from '@/components/bet/ConfirmBetModal';
import TicketModal from '@/components/bet/TicketModal';
import { useState } from 'react';

import RaceSelector from '@/components/home/RaceSelector';

import Screen from '@/components/layout/Screen';

import BetTypeTabs from '@/components/home/BetTypeTabs';
import FinishedRace from '@/components/home/FinishedRace';
import LiveRace from '@/components/home/LiveRace';
import RunnerList from '@/components/home/RunnerList';
import { RACES, RUNNERS } from '@/data/runners';
import { View } from 'react-native';

type Step = 'home' | 'betSlip' | 'confirm' | 'ticket';

export default function Home() {

  const [step, setStep] = useState<Step>('home');

  const [selectedRunnerId, setSelectedRunnerId] = useState<string | null>(null);

  const [betAmount, setBetAmount] = useState('5');

  const [selectedRaceId, setSelectedRaceId] = useState(3);

  const selectedRace = RACES.find(
    race => race.id === selectedRaceId
  );

  const runner = RUNNERS.find(
    item => item.id === selectedRunnerId
  );

  // const { themeName, setThemeName } = React.useContext(ThemeContext);

  return (
    <Screen>
      {/* <View style={{ flexDirection: 'row', justifyContent: 'center', gap: SPACING.md, paddingVertical: SPACING.md }}>
        {(['light', 'dark', 'blue', 'red'] as const).map(name => (
          <View key={name}>
            <Button
              title={name.toUpperCase()}
              onPress={() => setThemeName(name)}
              style={{ backgroundColor: themeName === name ? '#C89512' : '#888', paddingHorizontal: SPACING.md, height: 32 }}
              textStyle={{ fontSize: 12, color: '#FFF' }}
            />
          </View>
        ))}
      </View> */}
      <View>
        <RaceSelector
          selectedRaceId={selectedRaceId}
          onSelectRace={(id) => {
            setSelectedRaceId(id);
            setStep('home');
            setSelectedRunnerId(null);
          }}
        />
      </View>

      {selectedRace?.status === 'UPCOMING' && (
        <RunnerList
          selectedRunnerId={selectedRunnerId}
          onSelectRunner={(id) => {
            setSelectedRunnerId(id);
            setStep('betSlip');
          }}
          ListHeaderComponent={
            <BetTypeTabs />
          }
        />
      )}

      {selectedRace?.status === 'LIVE' && (
        <LiveRace
          raceName={selectedRace.title}
          onWatchLive={() => {
            console.log('Watch Live');
          }}
        />
      )}

      {selectedRace?.status === 'FINISHED' && (
        <FinishedRace
          raceName={selectedRace.title}
        />
      )}

      <BetSlip
        visible={['betSlip', 'confirm', 'ticket'].includes(step)}
        runnerCode={runner?.code ?? ''}
        runnerName={runner?.name ?? ''}
        amount={betAmount}
        onAmountChange={setBetAmount}
        onClose={() => {
          setStep('home');
          setSelectedRunnerId(null);
        }}
        onPlaceBet={() => setStep('confirm')}
      />

      <ConfirmBetModal
        visible={step === 'confirm'}
        runnerCode={runner?.code ?? ''}
        runnerName={runner?.name ?? ''}
        amount={betAmount}
        onClose={() => setStep('betSlip')}
        onConfirm={() => setStep('ticket')}
      />

      <TicketModal
        visible={step === 'ticket'}
        ticketNo="0000213456"
        runnerCode={runner?.code ?? ''}
        runnerName={runner?.name ?? ''}
        amount={betAmount}
        onClose={() => {
          setStep('home');
          setSelectedRunnerId(null);
        }}
        onPrint={() => {
          setStep('home');
          setSelectedRunnerId(null);
        }}
      />

    </Screen>
  );
}