 
import { View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

import { useRoute } from '@react-navigation/native'


import { appInfo } from '../constains/appInfo'
const PictureScreen = () => {
    const route = useRoute();
    const { Data } = route.params;
    return (
        <View style={{flex: 1, backgroundColor: "black"}}>
            <Image
                source={{ uri: Data }}
                contentFit='contain'
                style={{
                    backgroundColor: "red",
                    height: appInfo.widthWindows,
              
                }}
            />
        </View>
    )
}

export default PictureScreen
