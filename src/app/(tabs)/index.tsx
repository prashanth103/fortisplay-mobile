import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Screen from '@/components/layout/Screen';

import { COLORS } from '@/theme/colors';

import { SPACING } from '@/theme/spacing';

import { RADIUS } from '@/theme/radius';

export default function HomeScreen() {

  return (

    <Screen>

      <ScrollView>

        <View style={styles.header}>

          <Text style={styles.welcome}>

            Welcome

          </Text>

          <Text style={styles.name}>

            Prashanth

          </Text>

        </View>

        <View style={styles.balanceCard}>

          <Text style={styles.balanceLabel}>

            Wallet Balance

          </Text>

          <Text style={styles.balance}>

            ₹24,500

          </Text>

        </View>

        <Text style={styles.sectionTitle}>

          Upcoming Races

        </Text>

        {[1, 2, 3].map(item => (

          <View
            key={item}
            style={styles.card}
          >

            <Text style={styles.cardTitle}>

              Race #{item}

            </Text>

            <Text style={styles.cardSubtitle}>

              Starts in 12 min

            </Text>

          </View>

        ))}

      </ScrollView>

    </Screen>

  )

}

const styles = StyleSheet.create({

  header: {

    paddingHorizontal: SPACING.xl,

    paddingTop: SPACING.lg

  },

  welcome: {

    color: COLORS.textSecondary,

    fontSize: 14

  },

  name: {

    color: COLORS.textPrimary,

    fontSize: 28,

    fontWeight: '700',

    marginTop: 4

  },

  balanceCard: {

    marginHorizontal: SPACING.xl,

    marginTop: SPACING.xl,

    padding: SPACING.xl,

    backgroundColor: COLORS.surface,

    borderRadius: RADIUS.xl

  },

  balanceLabel: {

    color: COLORS.textSecondary,

    fontSize: 14

  },

  balance: {

    color: COLORS.primary,

    fontSize: 32,

    fontWeight: '700',

    marginTop: 8

  },

  sectionTitle: {

    color: COLORS.textPrimary,

    fontSize: 18,

    fontWeight: '700',

    marginTop: 32,

    marginBottom: 16,

    paddingHorizontal: SPACING.xl

  },

  card: {

    marginHorizontal: SPACING.xl,

    marginBottom: SPACING.lg,

    padding: SPACING.lg,

    backgroundColor: COLORS.surface,

    borderRadius: RADIUS.lg

  },

  cardTitle: {

    color: COLORS.textPrimary,

    fontWeight: '700',

    fontSize: 16

  },

  cardSubtitle: {

    color: COLORS.textSecondary,

    marginTop: 6

  }

})