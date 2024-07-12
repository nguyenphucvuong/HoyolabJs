import React, { Children, useState } from 'react';
import { View, TextInput, Button, Animated, StyleSheet, Dimensions, Pressable } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { appInfo } from '../constains/appInfo';

const { height } = Dimensions.get('window');

const AnimatedQuickCmtComponent = (data) => {
    const [children] = [data.children];

    const [isVisible, setIsVisible] = useState(false);
    const translateY = useState(new Animated.Value(appInfo.heightWindows))[0]; // Start offscreen



    const handleShowInput = () => {
        console.log("true")
        setIsVisible(true);
        Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleHideInput = () => {
        Animated.timing(translateY, {
            toValue: appInfo.heightWindows,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setIsVisible(false));
    };

    return (
        <View style={styles.container}>
            {/* <TapGestureHandler onHandlerStateChange={handleShowInput}> */}
            <Pressable onPress={handleShowInput} style={styles.placeholder}>
                <TextInput onPress={handleShowInput} placeholder="Tôi có lời muốn nói..." style={styles.placeholderInput} editable={false} />
            </Pressable>
            {/* {children} */}
            {/* </TapGestureHandler> */}

            {isVisible && (
                <Animated.View style={[styles.animatedContainer, { transform: [{ translateY }] }]}>
                    <TextInput
                        placeholder="Đăng bình luận"
                        style={styles.input}
                        autoFocus={true}
                        multiline
                    />
                    <Button title="Gửi" onPress={handleHideInput} />
                </Animated.View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    placeholder: {
        padding: 10,
        backgroundColor: '#fff',
    },
    placeholderInput: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
    },
    animatedContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
    },
    input: {
        height: 150,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
    },
});

export default AnimatedQuickCmtComponent;
