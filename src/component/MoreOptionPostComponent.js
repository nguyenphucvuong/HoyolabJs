import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { Image } from "expo-image";
import { appInfo } from '../constains/appInfo';
import { ModalPop } from '../modals';
import {
    ButtonsComponent,
} from './';
import RowComponent from "../component/RowComponent";


const MoreOptionPostComponent = () => {

    const [isVisible, setIsVisible] = useState(false);
    const translateY = useState(new Animated.Value(appInfo.heightWindows))[0]; // Start offscreen

    const handleShowInput = () => {
        setIsVisible(true);
        Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        // console.log(isVisible)
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
            <ButtonsComponent isButton onPress={handleShowInput}
                style={{
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30%",
                    height: "30%",
                }}>
                <Image
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    source={require('../../assets/dots_vertical-512.jpg')}
                    contentFit="cover" />
            </ButtonsComponent>

            <ModalPop
                visible={isVisible}
                transparent={true}
                onRequestClose={handleHideInput}>
                <Animated.View style={[styles.animatedContainer, { transform: [{ translateY }] }]}>
                    <RowComponent width={"100%"} height={"auto"} style={{
                        // backgroundColor: "pink",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <ButtonsComponent isButton onPress={handleHideInput}>
                            <Image
                                source={require('../../assets/close_icon.png')}
                                style={{
                                    height: 30,
                                    width: 30,
                                }}
                            />
                        </ButtonsComponent>
                        <Text style={{
                            flex: 1,
                            color: "gray",
                            textAlign: "center",
                            paddingRight: 30,
                            // backgroundColor: 'pink',
                            fontSize: 17,
                            fontWeight: "bold",
                        }}>
                            Chia Sẻ Đến
                        </Text>
                    </RowComponent>

                    <RowComponent width={"100%"} height={"auto"}
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "rgba(0,0,0,0.1)",
                            marginVertical: 13,
                            marginBottom: 300,
                        }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEnabled={true}
                            style={{
                            }}>
                            {/* Discord */}
                            <ButtonsComponent isPressable
                                onPress={() => console.log("Discord")}
                                style={styles.btnLogo}>
                                <Image source={require('../../assets/discord_icon.png')}
                                    style={[styles.iconBtnLogo, {}]} />
                                <Text style={styles.textShare}>
                                    Discord
                                </Text>
                            </ButtonsComponent>
                            {/* Facebook */}
                            <ButtonsComponent isPressable
                                onPress={() => console.log("Facebook")}
                                style={styles.btnLogo}>
                                <Image source={require('../../assets/discord_icon.png')}
                                    style={styles.iconBtnLogo} />
                                <Text style={styles.textShare}>
                                    Facebook
                                </Text>
                            </ButtonsComponent>
                            {/* Twitter */}
                            <ButtonsComponent isPressable
                                onPress={() => console.log("Twitter")}
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    flexDirection: "collumn",
                                }}>
                                <Image source={require('../../assets/discord_icon.png')}
                                    style={styles.iconBtnLogo} />
                                <Text style={[styles.textShare,]}>
                                    Twitter
                                </Text>
                            </ButtonsComponent>
                            {/* Reddit */}
                            <ButtonsComponent isPressable
                                onPress={() => console.log("Reddit")}
                                style={styles.btnLogo}>
                                <Image source={require('../../assets/discord_icon.png')}
                                    style={styles.iconBtnLogo} />
                                <Text style={styles.textShare}>
                                    Reddit
                                </Text>

                            </ButtonsComponent>

                        </ScrollView>
                    </RowComponent>
                </Animated.View>
            </ModalPop>

        </>

    )
}

export default MoreOptionPostComponent

const styles = StyleSheet.create({
    animatedContainer: {
        flex: 1,
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
    textShare: {
        color: "gray",
        fontSize: 15,
        textAlign: "center",
    },


    btnLogo: {
        justifyContent: "center",
        height: "100%",
        flexDirection: "collumn",
    },
    iconBtnLogo: {
        width: 65,
        height: 65,
        marginHorizontal: 4,
    },
})