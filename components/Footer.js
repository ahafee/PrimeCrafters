import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>
                © 2025 <Text style={styles.brand}>PrimeCrafters</Text>. All rights reserved.
            </Text>
            <Text style={styles.made}>
                Made with ❤️ using React Native
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: '#0f2027',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#2e3a59',
        marginTop: 40,
    },
    text: {
        color: '#bbb',
        fontSize: 13,
        textAlign: 'center',
        marginBottom: 6,
    },
    brand: {
        color: '#00ADB5',
        fontWeight: '600',
    },
    made: {
        fontSize: 11,
        color: '#666',
        fontStyle: 'italic',
    },
});
