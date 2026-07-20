import { BORDERS, RADIUS, SPACING, TYPOGRAPHY } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import AppText from '@/components/common/AppText';
import { Modal, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import Button from '@/components/common/Button';

import { useThemeColors } from "@/hooks/useThemeColors";
import * as React from "react";

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
    const COLORS = useThemeColors();
      const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>

        <View style={styles.container}>

          <View style={styles.card}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.cardContent}
            >

            {/* Header */}

            <View style={styles.header}>

              <AppText variant="h4" color={COLORS.black}>
                Ticket
              </AppText>

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
                <AppText color={COLORS.primary}>
                  KB · FIXED ODDS
                </AppText>
              </View>

              <MaterialIcons
                name="qr-code-2"
                size={240}
                color={COLORS.black}
              />

              <AppText variant="p2" color={COLORS.textMuted}>
                No. {ticketNo}
              </AppText>

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

                <AppText variant="h4" color={COLORS.black}>TOTAL</AppText>

                <View style={styles.amountBox}>
                  <AppText variant="h3" color={COLORS.ticketGold}>
                    ₱{amount}.00
                  </AppText>
                </View>

              </View>
              <AppText variant="p3" color={COLORS.textMuted} style={{ textAlign: "center", marginBottom: SPACING.md, paddingHorizontal: SPACING.xxl }}>
                Valid for 60 days. Ticket required for all payments
              </AppText>
            </View>

            </ScrollView>

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
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  return (
    <View style={styles.row}>

      <AppText variant="p1" color={COLORS.textMuted}>
        {label}
      </AppText>

      <AppText variant="p1" color={COLORS.black}>
        {value}
      </AppText>

    </View>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({

  overlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },

  container: {
    width: '100%',
    maxHeight: '100%',
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.transparent,
    overflow: 'visible',
  },

  card: {
    width: '100%',
    flexShrink: 1,
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
  },

  cardContent: {
    flexGrow: 1,
  },

  header: {
    height: 64,
    paddingHorizontal: SPACING.xl,
    borderBottomWidth: BORDERS.ultraThin,
    borderBottomColor: COLORS.ticketBorder,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {

    color: COLORS.black,
  },

  qrContainer: {
    alignItems: 'center',
    marginVertical: SPACING.xl,
  },

  badge: {
    backgroundColor: COLORS.ticketBackground,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
  },

  badgeText: {
    color: COLORS.primary,

  },

  ticketNo: {
    color: COLORS.textMuted,

  },

  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  semiCircleLeft: {
    width: 13,
    height: 26,
    borderTopRightRadius: RADIUS.lg,
    borderBottomRightRadius: RADIUS.lg,
    backgroundColor: COLORS.background,
    marginRight: SPACING.sm
  },

  semiCircleRight: {
    width: 13,
    height: 26,
    borderTopLeftRadius: RADIUS.lg,
    borderBottomLeftRadius: RADIUS.lg,
    backgroundColor: COLORS.background,
    marginLeft: SPACING.sm
  },

  line: {
    flex: 1,
    borderTopWidth: BORDERS.ultraThin,
    borderTopColor: COLORS.textSecondary,
    borderStyle: 'dashed',
  },

  details: {
    paddingHorizontal: SPACING.xxl,
  },

  separator: {
    borderTopWidth: BORDERS.ultraThin,
    borderTopColor: COLORS.ticketBorder,
    marginVertical: SPACING.lg,
    marginHorizontal: SPACING.xxl
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },

  rowLabel: {
    color: COLORS.textMuted,

  },

  rowValue: {
    color: COLORS.black,

  },

  footer: {
    flexDirection: 'row',
    gap: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.lg,
  },

  close: {
    flex: 1,
    height: 52,
    borderWidth: BORDERS.ultraThin,
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
    gap: SPACING.sm,
  },

  totalContainer: {
    flexDirection: 'column',
    gap: SPACING.xxl,
    paddingHorizontal: SPACING.xxl,
    paddingBottom: SPACING.xl,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalLabel: {

    color: COLORS.black,
  },

  amountBox: {
    borderWidth: BORDERS.thin,
    borderColor: COLORS.primary,
    borderRadius: RADIUS.sm,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.xs,
  },

  amount: {
    color: COLORS.ticketGold,

  },

  disclaimer: {
    textAlign: 'center',
    color: COLORS.textMuted,

    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.xxl
  },

  closeText: {
    color: COLORS.white,

  },

  printText: {
    color: COLORS.black,

  },

});
