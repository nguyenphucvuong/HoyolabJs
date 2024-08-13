/* eslint-disable react/prop-types */
import { View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

import { useRoute } from '@react-navigation/native'

const PictureScreen = () => {
    const route = useRoute();
    const { Data } = route.params;
    return (
        <View>
            <Image
                source={{ uri: Data }}
                style={{
                    width: "100%",
                    height: "30%",
                }}
            />
        </View>
    )
}

export default PictureScreen
