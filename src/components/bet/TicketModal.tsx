import MaterialIcons from '@react-native-vector-icons/material-icons';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from '@/components/common/Button';
import { COLORS } from '@/theme/colors';
import { RADIUS } from '@/theme/radius';
import { TYPOGRAPHY } from '@/theme/typography';

interface Props {
  visible: boolean;
  ticketNo: string;
  runnerCode: string;
  runnerName: string;
  amount: string;
  onClose: () => void;
  onPrint: () => void;
}

export default function TicketModal({
  visible,
  ticketNo,
  runnerCode,
  runnerName,
  amount,
  onClose,
  onPrint,
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>

        <View style={styles.container}>

          <View style={styles.card}>

            {/* Header */}

            <View style={styles.header}>

              <Text style={styles.title}>
                Ticket
              </Text>

              <Pressable onPress={onClose}>
                <MaterialIcons
                  name="close"
                  size={22}
                  color={COLORS.textMuted}
                />
              </Pressable>

            </View>

            {/* QR */}

            <View style={styles.qrContainer}>

              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  KB · FIXED ODDS
                </Text>
              </View>

              <MaterialIcons
                name="qr-code-2"
                size={240}
                color={COLORS.black}
              />

              <Text style={styles.ticketNo}>
                No. {ticketNo}
              </Text>

            </View>

            <View style={styles.lineContainer}>
              <View style={styles.semiCircleLeft} />
              <View style={styles.line} />
              <View style={styles.semiCircleRight} />
            </View>

            {/* Details */}

            <View style={styles.details}>

              <Row
                label="Date"
                value={new Date().toLocaleString()}
              />

              <Row
                label="Pool"
                value="WIN"
              />

              <Row
                label="Order Preference"
                value="EXACT"
              />

              <Row
                label="Variant"
                value="Fixed Odds"
              />

              <Row
                label="Tickets"
                value={runnerCode}
              />

            </View>

            <View style={styles.separator} />

            <View style={styles.totalContainer}>
              <View style={styles.totalRow}>

                <Text style={styles.totalLabel}>TOTAL</Text>

                <View style={styles.amountBox}>
                  <Text style={styles.amount}>
                    ₱{amount}.00
                  </Text>
                </View>

              </View>
              <Text style={styles.disclaimer}>
                Valid for 60 days. Ticket required for all payments
              </Text>
            </View>

          </View>

          {/* Buttons outside white card */}
          <View style={styles.footer}>

            <Button
              title="Close"
              variant="outline"
              style={styles.close}
              textStyle={styles.closeText}
              onPress={onClose}
            />

            <Button
              title="Print Ticket"
              style={styles.print}
              textStyle={styles.printText}
              onPress={onPrint}
              leftIcon={(
                <MaterialIcons
                  name="print"
                  size={18}
                  color={COLORS.black}
                />
              )}
            />

          </View>

        </View>

      </View>
    </Modal>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.row}>

      <Text style={styles.rowLabel}>
        {label}
      </Text>

      <Text style={styles.rowValue}>
        {value}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  container: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'transparent',
    overflow: 'visible',
  },

  card: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
  },

  header: {
    height: 64,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.black,
  },

  qrContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },

  badge: {
    backgroundColor: '#1F1F1F',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },

  badgeText: {
    color: COLORS.primary,
    fontWeight: '700',
  },

  ticketNo: {
    color: COLORS.textMuted,
    fontWeight: '600',
    fontSize: 14,
  },

  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  semiCircleLeft: {
    width: 13,
    height: 26,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: COLORS.background,
    marginRight: 6
  },

  semiCircleRight: {
    width: 13,
    height: 26,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: COLORS.background,
    marginLeft: 6
  },

  line: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: COLORS.textSecondary,
    borderStyle: 'dashed',
  },

  details: {
    paddingHorizontal: 24,
  },

  separator: {
    borderTopWidth: 1,
    borderTopColor: "#ECECEC",
    marginVertical: 16,
    marginHorizontal: 24
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  rowLabel: {
    color: COLORS.textMuted,
    fontSize: 16,
  },

  rowValue: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 16,
  },

  footer: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  close: {
    flex: 1,
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.textMuted,
    borderRadius: RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
  },

  print: {
    flex: 1,
    height: 52,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  totalContainer: {
    flexDirection: 'column',
    gap: 22,
    paddingHorizontal: 24,
    paddingBottom: 18,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalLabel: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.black,
  },

  amountBox: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 4,
  },

  amount: {
    color: '#B27D00',
    fontWeight: '700',
    fontSize: 22,
  },

  disclaimer: {
    textAlign: 'center',
    color: COLORS.textMuted,
    fontSize: 12,
    marginBottom: 12,
    paddingHorizontal: 24
  },

  closeText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.bodyLarge.size,
  },

  printText: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.bodyLarge.size,
  },

});
