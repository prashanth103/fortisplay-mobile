import { FlatList, StyleSheet } from 'react-native';

import RunnerCard from './RunnerCard';

import { RUNNERS } from '@/data/runners';
import { COLORS } from '@/theme/colors';
import { useState } from 'react';

interface Props {
  selectedRunnerId: string | null;
  onSelectRunner: (id: string) => void;
  ListHeaderComponent?: React.ReactElement;
}

export default function RunnerList({
  ListHeaderComponent,
  selectedRunnerId,
  onSelectRunner,
}: Props) {

  const [betAmount, setBetAmount] = useState('5');

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={RUNNERS}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={({ item }) => (
        <RunnerCard
          code={item.code}
          name={item.name}
          color={item.color}
          selected={selectedRunnerId === item.id}

          onPress={() => onSelectRunner(item.id)}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});