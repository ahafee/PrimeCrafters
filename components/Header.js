import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.brand}>
                <Text style={styles.brandHighlight}>Prime</Text>Crafters
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        paddingBottom: 25,
        backgroundColor: '#0f2027',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    brand: {
        fontSize: 28,
        fontWeight: '700',
        color: '#eeeeee',
        textTransform: 'none',
        letterSpacing: 1.2,
    },
    brandHighlight: {
        color: '#00ADB5',
    },
});
