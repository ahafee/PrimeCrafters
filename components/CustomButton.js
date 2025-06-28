import React, { useRef } from 'react';
import {
    TouchableWithoutFeedback,
    Text,
    StyleSheet,
    Animated,
    View,
} from 'react-native';

export default function CustomButton({ title, onPress }) {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.93,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 4,
            tension: 80,
            useNativeDriver: true,
        }).start();

        if (onPress) setTimeout(onPress, 100);
    };

    return (
        <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }]}>
                <Text style={styles.buttonText}>{title}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00ADB5',
        paddingVertical: 16,
        paddingHorizontal: 48,
        borderRadius: 30,
        marginTop: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        borderWidth: 1.2,
        borderColor: '#03e9f4',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
        textAlign: 'center',
    },
});
