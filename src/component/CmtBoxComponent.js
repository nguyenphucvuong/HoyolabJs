import { Animated, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { Button } from '@rneui/base';
import RowComponent from './RowComponent';
import ButtonsComponent from './ButtonsComponent';

const CmtBoxComponent = (infoCmt) => {
    const [translateY, handleHideInput] = [infoCmt.translateY, infoCmt.handleHideInput];

    return (
        <TouchableWithoutFeedback onPress={handleHideInput}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} >
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
                        <Image
                            onPress={handleHideInput}
                            source={require('../../assets/close_icon.png')}
                            style={{
                                height: 30,
                                width: 30,
                            }}
                        />
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
                        backgroundColor: "pink",
                        width: "100%",
                        height: 38,
                        flexDirection: "row",
                    }}>
                        <Text title="Gửi" onPress={handleHideInput}
                            style={{ flex: 1 }} />
                        <ButtonsComponent
                            isButton
                            onPress={handleHideInput}
                            style={{
                                borderRadius: 30,
                                justifyContent: "center",
                                alignItems: "center",
                                width: 75,
                                height: "100%",
                                paddingHorizontal: "2%",
                                backgroundColor: "rgba(101,128,255,1)",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <Text
                                style={{
                                    color: "white",
                                }} >Đăng</Text>
                        </ButtonsComponent>
                    </View>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
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