import { COLORS } from '@/theme/colors';
import { StyleSheet, Text, View } from 'react-native';

export default function PayoutsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Payouts</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {

        color: COLORS.black,

        fontWeight: '700',

        fontSize: 16

    }
});