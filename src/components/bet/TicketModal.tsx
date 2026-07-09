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

          {/* Ticket Number */}

          <View style={styles.ticketNo}>

            <Text style={styles.ticketLabel}>
              Ticket No
            </Text>

            <Text style={styles.ticketValue}>
              {ticketNo}
            </Text>

          </View>

          {/* QR */}

          <View style={styles.qrContainer}>

            <MaterialIcons
              name="qr-code-2"
              size={180}
              color={COLORS.black}
            />

          </View>

          {/* Details */}

          <View style={styles.details}>

            <Row
              label="Race"
              value="KB3 - 20:05"
            />

            <Row
              label="Pool"
              value="WIN"
            />

            <Row
              label="Runner"
              value={`${runnerCode} - ${runnerName}`}
            />

            <Row
              label="Amount"
              value={`₱ ${amount}`}
            />

            <Row
              label="Order"
              value="EXACT"
            />

          </View>

          {/* Buttons */}

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
    marginTop: 18,
  },

  ticketLabel: {
    color: COLORS.textMuted,
    fontSize: 14,
  },

  ticketValue: {
    marginTop: 4,
    color: COLORS.primary,
    fontWeight: '800',
    fontSize: 22,
  },

  qrContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },

  details: {
    paddingHorizontal: 24,
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
    padding: 20,
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

  closeText: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.bodyLarge.size,
  },

  printText: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.bodyLarge.size,
  },

});
