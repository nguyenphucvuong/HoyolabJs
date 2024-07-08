import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

const IconComponent = (Data) => {
    const [icon, size, color, onPress, isTouchable, style] = [Data.icon, Data.size, Data.color, Data.onPress, Data.isTouchable, Data.style]


    return isTouchable ? (
        <TouchableOpacity
            onPress={onPress}
            style={[{
                justifyContent: "center",
                width: size,
                height: size,
            }, style && style]}>
            <Image
                style={{
                    width: size,
                    height: size,
                }}
                source={icon}
                contentFit="cover"
            >
            </Image>
        </TouchableOpacity >
    ) : (
        <Image
            onPress={onPress}
            style={[{
                width: size,
                height: size,
                color: color
            }, style && style]}
            source={icon}
            contentFit="cover"
        >
        </Image>
    )
};

export default IconComponent

const styles = StyleSheet.create({})