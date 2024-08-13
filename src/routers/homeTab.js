import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { FollowScreen, HomeScreen } from '../views/index'
const Tab = createMaterialTopTabNavigator();
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const HomeTab = () => {
    const inset = useSafeAreaInsets();

    return (
        <Tab.Navigator style={{ paddingTop: inset.top }} >
            <Tab.Screen name='homeTab' component={HomeScreen} />
            <Tab.Screen name='followTab' component={FollowScreen} />
        </Tab.Navigator>
    )
}

export default HomeTab

