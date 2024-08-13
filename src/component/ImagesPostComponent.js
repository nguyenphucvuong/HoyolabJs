
import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image';
import { appInfo } from '../constains/appInfo'
import * as ImageManipulator from "expo-image-manipulator";
import RowComponent from './RowComponent';
import { useNavigation } from '@react-navigation/native';

const ImagesPostComponent = (imagesInfo) => {
    const navigation = useNavigation();

    const [Data] = [imagesInfo.Data];
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    // console.log("width", imageWidth, "height", imageHeight);

    const handleImage = async (uri) => {
        const { width, height } = await ImageManipulator.manipulateAsync(uri, [], {
            compress: 0.5,
            format: ImageManipulator.SaveFormat.JPEG,
        });
        setImageWidth(width);
        setImageHeight(height);
    };

    useEffect(() => {
        Data.forEach(element => {
            handleImage(element);
        });

    }, [Data]);


    const OneImageContent = () => {

        const CheckHeightReturnStyle = imageWidth > imageHeight ? {
            width: "100%",
            height: "100%",
            borderRadius: 10,
        } : {
            width: imageWidth > appInfo.widthWindows * 0.5 ? appInfo.widthWindows * 0.5 : "100%",
            // height: imageHeight > 250 ? 250 : imageHeight,
            height: 250,
            minWidth: appInfo.widthWindows * 0.4,
            maxWidth: appInfo.widthWindows * 0.5,
            minHeight: 200,
            // maxHeight: 250,
            borderRadius: 10,
        }


        // eslint-disable-next-line react/prop-types
        return <Image onTouchStart={() => navigation.navigate("picture", { Data: Data[0] })}
            source={{ uri: Data[0] }}
            style={CheckHeightReturnStyle}
        />
    }

    const TwoOrThreeImageContent = () => {
        const TwoImageContent = () => {
            return (
                <RowComponent maxHeight={appInfo.widthWindows * 0.7}
                    style={{
                        justifyContent: "space-between",
                        overflow: "hidden",
                        borderRadius: 10,
                    }}>
                    <Image
                        source={{ uri: Data[0] }}
                        style={{
                            width: "49%",
                            height: "100%",
                        }} />
                    <Image
                        source={{ uri: Data[1] }}
                        style={{
                            width: "49%",
                            height: "100%",
                        }} />
                </RowComponent>
            );
        }

        const ThreeImageContent = () => {
            return (
                <RowComponent
                    maxHeight={appInfo.widthWindows * 0.7}
                    minHeight={appInfo.widthWindows * 0.45}
                    style={{
                        justifyContent: "space-between",
                        overflow: "hidden",
                        borderRadius: 10,
                    }}>
                    <Image
                        source={{ uri: Data[0] }}
                        style={{
                            width: "32%",
                            height: "100%",
                        }} />
                    <Image
                        source={{ uri: Data[1] }}
                        style={{
                            width: "33%",
                            height: "100%",
                        }} />
                    <Image
                        source={{ uri: Data[2] }}
                        style={{
                            width: "32%",
                            height: "100%",
                        }} />
                </RowComponent>
            );
        }
        return Data.length > 1 && Data.length < 3 ? <TwoImageContent /> : <ThreeImageContent />

    }

    if (Data.length === 0) {
        return <></>
    } else if (Data.length === 1) {
        return <OneImageContent />
    } else if (Data.length === 2 || Data.length === 3) {
        return <TwoOrThreeImageContent />
    } else {
        return <></>
    }

}

export default React.memo(ImagesPostComponent);
