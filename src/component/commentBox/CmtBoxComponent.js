import { Animated, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import RowComponent from '../RowComponent';
import {
    ButtonsComponent,
    IconsOptionComponent,
} from '../';

// import ButtonsComponent from '../ButtonsComponent';
// import IconsOptionComponent from './IconsOptionComponent';

const CmtBoxComponent = (infoCmt) => {
    const [translateY, handleHideInput] = [infoCmt.translateY, infoCmt.handleHideInput];

    return (
        <View style={{ flex: 1 }} >
            <TouchableWithoutFeedback onPress={handleHideInput}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} ></View>
            </TouchableWithoutFeedback>

            <Animated.View style={[styles.animatedContainer, { transform: [{ translateY }] }]}>
                <RowComponent width={"100%"} height={"auto"} style={{
                    // backgroundColor: "pink",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Text style={{
                        flex: 1,
                        color: "gray",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        Đăng bình luận
                    </Text>
                    <ButtonsComponent isButton onPress={handleHideInput}>
                        <Image
                            source={require('../../../assets/close_icon.png')}
                            style={{
                                height: 30,
                                width: 30,
                            }}
                        />
                    </ButtonsComponent>

                </RowComponent>
                <TextInput
                    placeholder="Tôi có lời muốn nói..."
                    placeholderTextColor={"rgba(0,0,0,0.3)"}
                    style={[styles.inputQuickCmt, {}]}
                    autoFocus={true}
                    multiline
                />
                <View style={{
                    flex: 1,
                    // backgroundColor: "pink",
                    width: "100%",
                    height: 35,
                    flexDirection: "row",
                }}>
                    <IconsOptionComponent />
                    <ButtonsComponent
                        isButton
                        onPress={handleHideInput}
                        style={{
                            borderRadius: 30,
                            justifyContent: "center",
                            alignItems: "center",
                            width: 65,
                            height: "100%",
                            paddingHorizontal: "2%",
                            backgroundColor: "rgba(101,128,255,1)",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "2%",

                        }}>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 12,
                            }} >Đăng</Text>
                    </ButtonsComponent>
                </View>
            </Animated.View>
        </View>

    )
}

export default CmtBoxComponent

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
    inputQuickCmt: {
        paddingVertical: 10,
        marginVertical: 10,
        height: 100,
        textAlignVertical: 'top',
        // backgroundColor: '#f0f0f0',
    },
})