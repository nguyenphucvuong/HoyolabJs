
import { View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

import { useRoute } from '@react-navigation/native'
import PagerView from 'react-native-pager-view'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { appInfo } from '../constains/appInfo'
const PictureScreen = () => {
    const route = useRoute();
    const { Data, Select } = route.params;
    const inset = useSafeAreaInsets();
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>
            <View style={{
                flexDirection: "row",
                position: 'absolute',
                zIndex: 999,
                top: inset.top,
            }}>
                <Feather name='x' color={'white'} size={24}
                    onPress={() => navigation.goBack()} />

            </View>
            <PagerView style={{ flex: 1 }} initialPage={Select}>
                {Data.map((item, index) => (
                    <Image
                        key={index}
                        source={{ uri: item }}
                        contentFit='contain'
                        style={{
                            width: appInfo.widthWindows,
                        }}
                    />
                ))}

            </PagerView>
        </View>

    )
}

export default PictureScreen
