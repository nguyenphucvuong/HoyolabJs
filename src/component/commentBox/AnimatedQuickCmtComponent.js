/* eslint-disable no-undef */
import React, { useRef, useState } from 'react';
import { View, TextInput, Animated, Pressable, Text, Easing } from 'react-native';
import { appInfo } from '../../constains/appInfo';
import RowComponent from '../RowComponent';
import { Image } from 'expo-image';
import {
    AvatarEx,
    ButtonsComponent
} from '..';
import { ModalPop } from '../../modals'
import CmtBoxComponent from './CmtBoxComponent';
import { StyleGlobal } from "../../styles/StyleGlobal";

import { data } from '../../constains/data'


const AnimatedQuickCmtComponent = () => {
    // const [expanded, setExpanded] = useState(false);
    var expanded = false;
    const animation = useRef(new Animated.Value(0)).current;

    const toggleExpand = (() => {
        // setExpanded(!expanded);
        expanded = !expanded;
        Animated.timing(animation, {
            toValue: expanded ? 1 : 0,
            duration: 400,
            useNativeDriver: false,
            easing: Easing.inOut(Easing.ease),

        }).start();
    });

    const height = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 50], // Adjust the outputRange values as per your requirement
    });

    const HandleIsEmpty = (data) => {
        const view = data.view;
        const length = data.length;
        return length === 0 ? <></> : view;
    }
    const [isVisible, setIsVisible] = useState(false);
    const translateY = useState(new Animated.Value(appInfo.heightWindows))[0]; // Start offscreen

    const handleShowInput = () => {
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
        <>
            {/* Quick Comment */}
            <Animated.View style={{ height, overflow: 'hidden', marginTop: 10 }}>
                {/* <Animated.View style={{ overflow: 'hidden', marginTop: 10 }}> */}
                <RowComponent
                    height={40}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "center",
                    }}>
                    <AvatarEx size={40} round={30} url={data.state.avatar} style={{ marginRight: "3%" }} />
                    <Pressable onPress={handleShowInput} style={{
                        width: "100%",
                        height: 30,
                        flex: 1,
                        borderRadius: 30,
                        borderColor: "gray",
                        borderWidth: 1,
                        paddingLeft: 10,
                        paddingRight: 10,
                    }}>
                        <TextInput
                            placeholder="Viết bình luận..."
                            editable={false}
                        />
                    </Pressable>

                </RowComponent>
            </Animated.View>

            {/* Quick Comment Box */}
            <ModalPop
                visible={isVisible}
                transparent={true}
                onRequestClose={handleHideInput}
            >
                <CmtBoxComponent translateY={translateY} handleHideInput={handleHideInput} />
            </ModalPop>

            {/* Like, Comment, View */}
            <HandleIsEmpty
                length={data.state.id.length}
                view={
                    <RowComponent
                        height={40}
                        style={{
                            flexDirection: "row",
                        }}>
                        <View
                            style={{
                                width: "100%",
                                height: "100%",
                                alignItems: "center",
                                flex: 2,
                                flexDirection: "row",
                            }}
                        >
                            <ButtonsComponent isButton
                                style={{
                                    marginRight: "2%",
                                }}>
                                <Image
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}


                                    source={require('../../../assets/view_icon_outside.png')}
                                    contentFit="cover"
                                />
                            </ButtonsComponent>
                            <Text
                                style={{
                                    ...StyleGlobal.text,
                                    color: "gray",
                                }}> 6k</Text>
                        </View>
                        <View
                            style={{
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                flex: 1,
                                flexDirection: "row",
                            }}
                        >
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flex: 1,
                                    flexDirection: "row",
                                }}>
                                <ButtonsComponent isButton
                                    style={{
                                        marginRight: "2%",
                                    }}>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                        source={require('../../../assets/comment_icon_outside.png')}
                                        contentFit="cover"
                                    />
                                </ButtonsComponent>
                                <Text
                                    style={{
                                        ...StyleGlobal.text,
                                        color: "gray",
                                        flex: 1,
                                    }}> 6k</Text>
                            </View>

                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flex: 1,
                                    flexDirection: "row",
                                }}>
                                <ButtonsComponent
                                    onPress={toggleExpand}
                                    onLongPress={() => console.log("long press")}
                                    isButton
                                    style={{ marginRight: "2%", }}
                                ><Image
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                        source={require('../../../assets/like_icon_outside.png')}
                                        contentFit="cover"
                                    /></ButtonsComponent>
                                <Text
                                    style={{
                                        ...StyleGlobal.text,
                                        color: "gray",
                                        flex: 1,
                                    }}> 6k</Text>
                            </View>
                        </View>
                    </RowComponent>}
            />
        </>
    );
};

// const styles = StyleSheet.create({
//     animatedContainer: {
//         flex: 1,
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: '#fff',
//         padding: 20,
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: -2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 5,
//         elevation: 10,

//     },
//     inputQuickCmt: {
//         height: 150,
//         padding: 10,
//         borderRadius: 10,
//         backgroundColor: '#f0f0f0',
//         marginBottom: 20,
//     },

// });

export default AnimatedQuickCmtComponent;
