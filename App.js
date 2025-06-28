import React, { useState, useEffect, useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Animated,
    Easing,
} from 'react-native';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Loader from './components/SlidingSquaresLoader';

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start();
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <View style={styles.loaderContainer}>
                <Loader />
            </View>
        );
    }

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <SafeAreaView style={{ flex: 1 }}>
                <Header />
                <HeroSection />
                <Footer />
            </SafeAreaView>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f2027',
        overflow: 'hidden',
    },
    loaderContainer: {
        flex: 1,
        backgroundColor: '#0f2027',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
});
