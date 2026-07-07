import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { router } from 'expo-router';

export default function LoginScreen() {

    const handleLogin = () => {

        router.replace('/(tabs)');

    };

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                FortisPlay
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >

                <Text style={styles.buttonText}>
                    Login
                </Text>

            </TouchableOpacity>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        justifyContent: 'center',

        alignItems: 'center',

        backgroundColor: '#090909'

    },

    title: {

        fontSize: 32,

        fontWeight: '700',

        color: '#E3BA4B',

        marginBottom: 32

    },

    button: {

        backgroundColor: '#E3BA4B',

        paddingHorizontal: 32,

        paddingVertical: 16,

        borderRadius: 16

    },

    buttonText: {

        fontWeight: '700',

        fontSize: 16

    }

});