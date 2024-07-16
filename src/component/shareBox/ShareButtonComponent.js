import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonsComponent from '../ButtonsComponent'
import { Image } from 'expo-image';

const ShareButtonComponent = (infoButton) => {
    const [children, isRow, styleBtn, styleImg, styleText, onPress, url, text] = [
        infoButton.children,
        infoButton.isRow,
        infoButton.styleBtn,
        infoButton.styleImg,
        infoButton.styleText,
        infoButton.onPress,
    ];


    const ShareRow = () => {
        return (
            <ButtonsComponent isPressable
                onPress={onPress}
                style={[styles.btnLogo, styleBtn && styleBtn]}>
                {children}
                <Image source={require(url)}
                    style={[styles.iconBtnLogo, styleImg && styleImg]} />
                <Text style={[styles.textShare, styleText && styleText]}>
                    {text}
                </Text>
            </ButtonsComponent >
        )
    }

    const ShareCollumn = () => {
        return (
            <ButtonsComponent isPressable
                onPress={onPress}
                style={[styles.btnLogo, styleBtn && styleBtn]}>
                {children}
                <Image source={require(url)}
                    style={[styles.iconBtnLogo, styleImg && styleImg]} />
                <Text style={[styles.textShare, styleText && styleText]}>
                    {text}
                </Text>
            </ButtonsComponent >
        )
    }

    return (
        <>
            {isRow ? <ShareRow /> : <ShareCollumn />}
        </>
    )

}

export default ShareButtonComponent

const styles = StyleSheet.create({
    btnLogo: {
        justifyContent: "center",
        height: "100%",
        flexDirection: "collumn",
    },
})