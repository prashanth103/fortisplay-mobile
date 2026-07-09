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

              <MaterialIcons
                name="qr-code-2"
                size={180}
                color={COLORS.black}
              />

            </View>

            <View style={styles.ticketNo}>

              <Text style={styles.ticketLabel}>
                Ticket No
              </Text>

              <View style={styles.ticketValueBox}>
                <Text style={styles.ticketValue}>
                  {ticketNo}
                </Text>
              </View>

            </View>

            <View style={styles.separator} />

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

            <View style={styles.totalRow}>

              <Text style={styles.totalLabel}>TOTAL</Text>

              <View style={styles.totalAmountBox}>
                <Text style={styles.totalAmount}>₱{Number(amount).toFixed(2)}</Text>
              </View>

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
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.black,
  },

  ticketNo: {
    alignItems: 'center',
    marginTop: 8,
  },

  ticketLabel: {
    color: COLORS.textMuted,
    fontSize: 14,
  },

  ticketValueBox: {
    marginTop: 8,
    backgroundColor: '#1F1F1F',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },

  ticketValue: {
    color: COLORS.white,
    fontWeight: '800',
    fontSize: 16,
  },

  qrContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },

  details: {
    paddingHorizontal: 24,
  },

  separator: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    borderStyle: 'dashed',
    marginVertical: 16,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
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
    borderColor: COLORS.border,
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

  totalRow: {
    paddingHorizontal: 24,
    paddingBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalLabel: {
    fontWeight: '700',
    color: COLORS.black,
  },

  totalAmountBox: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },

  totalAmount: {
    color: COLORS.black,
    fontWeight: '700',
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
