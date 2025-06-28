import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    Dimensions,
    Platform,
    KeyboardAvoidingView,
    Modal,
    Pressable,
} from 'react-native';
import CustomButton from './CustomButton';

export default function HeroSection() {
    const [modalVisible, setModalVisible] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false);
    const [emoji, setEmoji] = useState('🎉');

    const handleGetStarted = () => {
        setModalVisible(true);
        setShowCelebration(true);

        // Celebration emoji cycling
        const emojis = ['🎊', '🎉', '✨', '🎇', '🥳'];
        let index = 0;

        const interval = setInterval(() => {
            setEmoji(emojis[index]);
            index = (index + 1) % emojis.length;
        }, 400);

        // Stop after 5s
        setTimeout(() => {
            clearInterval(interval);
            setShowCelebration(false);
        }, 5000);
    };

        return (
            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <Text style={styles.heading}>Your Dream App Starts Here</Text>
                <Text style={styles.subheading}>Beautiful • Fast • Powerful</Text>

                <Image
                    source={require('../assets/app.png')}
                    style={styles.image}
                    resizeMode="contain"
                />

                <CustomButton title="Get Started" onPress={handleGetStarted} />
            </View>

            <Modal
                transparent
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalTitle}>🚀 Launching Soon</Text>
                        <Text style={styles.modalText}>
                            This feature is under development. Stay tuned!
                        </Text>

                        {showCelebration && (
                            <Text style={styles.emojiBurst}>{emoji}</Text>
                        )}

                        <Pressable
                            style={styles.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.modalButtonText}>GOT IT</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#0f2027',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        maxWidth: 420,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? 60 : 80,
        paddingBottom: 60,
    },
    heading: {
        fontSize: width > 400 ? 32 : 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    subheading: {
        fontSize: 16,
        color: '#b0bec5',
        marginBottom: 24,
        textAlign: 'center',
        fontStyle: 'italic',
        lineHeight: 24,
        paddingHorizontal: 10,
    },
    image: {
        width: '100%',
        height: width > 400 ? 280 : 220,
        marginBottom: 30,
        borderRadius: 24,
        backgroundColor: '#1f2b3a',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 7,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    modalBox: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 24,
        alignItems: 'center',
        elevation: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#222',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 24,
    },
    modalButton: {
        backgroundColor: '#00ADB5',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    emojiBurst: {
        fontSize: 36,
        marginTop: 10,
    },
});
