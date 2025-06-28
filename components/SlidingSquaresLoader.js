import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';

export default function SlidingSquaresLoader() {
    const squareCount = 5;
    const offsets = Array.from({ length: squareCount }, (_, i) => new Animated.ValueXY({ x: 0, y: 0 }));

    useEffect(() => {
        const animations = [
            // square1
            Animated.loop(
                Animated.sequence([
                    Animated.timing(offsets[0], {
                        toValue: { x: 0, y: 30 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                ])
            ),
            // square2
            Animated.loop(
                Animated.sequence([
                    Animated.delay(200),
                    Animated.timing(offsets[1], {
                        toValue: { x: 0, y: 60 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(offsets[1], {
                        toValue: { x: 30, y: 60 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(offsets[1], {
                        toValue: { x: 30, y: 30 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(offsets[1], {
                        toValue: { x: 0, y: 0 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                ])
            ),
            // square3
            Animated.loop(
                Animated.sequence([
                    Animated.delay(400),
                    Animated.timing(offsets[2], {
                        toValue: { x: 30, y: 0 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(offsets[2], {
                        toValue: { x: 60, y: 0 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(offsets[2], {
                        toValue: { x: 60, y: 30 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(offsets[2], {
                        toValue: { x: 60, y: 60 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(offsets[2], {
                        toValue: { x: 30, y: 60 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(offsets[2], {
                        toValue: { x: 30, y: 30 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                ])
            ),
            // square4
            Animated.loop(
                Animated.sequence([
                    Animated.delay(600),
                    Animated.timing(offsets[3], {
                        toValue: { x: 60, y: 60 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(offsets[3], {
                        toValue: { x: 90, y: 60 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(offsets[3], {
                        toValue: { x: 90, y: 30 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                ])
            ),
            // square5
            Animated.loop(
                Animated.sequence([
                    Animated.delay(800),
                    Animated.timing(offsets[4], {
                        toValue: { x: 90, y: 0 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(offsets[4], {
                        toValue: { x: 60, y: 0 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(offsets[4], {
                        toValue: { x: 60, y: 30 },
                        duration: 400,
                        useNativeDriver: true,
                    }),
                ])
            ),
        ];

        animations.forEach(anim => anim.start());
    }, []);

    return (
        <View style={styles.wrapper}>
            {offsets.map((pos, index) => (
                <Animated.View
                    key={index}
                    style={[
                        styles.square,
                        {
                            transform: [
                                { translateX: pos.x },
                                { translateY: pos.y }
                            ]
                        }
                    ]}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: 150,
        height: 120,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    square: {
        position: 'absolute',
        width: 26,
        height: 26,
        backgroundColor: 'darkorange',
        borderRadius: 4,
    },
});
