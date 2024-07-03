import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image';
import { appInfo } from '../constains/appInfo'
import * as ImageManipulator from "expo-image-manipulator";

const ImagesComponent = (imagesInfo) => {
    const [Data] = [imagesInfo.Data];
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);

    const handleImage = async (uri) => {
        const { width, height } = await ImageManipulator.manipulateAsync(uri, [], {
            compress: 0.5,
            format: ImageManipulator.SaveFormat.JPEG,
        });
        setImageWidth(width);
        setImageHeight(height);
    };

    useEffect(() => {
        handleImage(Data[0]);
    }, [Data]);


    const OneImageContent = () => {
        return imageWidth > imageHeight ? (
            <>
                <Image
                    source={{ uri: Data[0] }}
                    style={{
                        width: "100%",
                        height: appInfo.widthWindows * 0.7,
                        // minHeight: appInfo.widthWindows * 0.5,
                        // maxHeight: appInfo.widthWindows * 0.8,
                        // minWidth: appInfo.widthWindows * 0.5,
                        // maxWidth: appInfo.widthWindows * 1,
                        borderRadius: 10,
                    }} />
            </>
        ) : (

            <View style={{ width: "100%", height: "100%", backgroundColor: "red" }}>
                <Image
                    source={{ uri: Data[0] }}
                    style={{
                        width: "100%",
                        height: "100%",
                        minHeight: appInfo.widthWindows * 0.5,
                        maxHeight: appInfo.widthWindows * 0.8,
                        minWidth: appInfo.widthWindows * 0.5,
                        maxWidth: appInfo.widthWindows * 0.5,
                        borderRadius: 10,

                    }}
                />
            </View>


        )



    }

    const TwoImageContent = () => {

    }

    return <OneImageContent />
}

export default ImagesComponent

const styles = StyleSheet.create({})