import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { FollowScreen } from '../views/index'
import HomeRouter from './homeRouter';
const Tab = createMaterialTopTabNavigator();
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const HomeTab = () => {
    const inset = useSafeAreaInsets();

    return (
        <Tab.Navigator style={{ paddingTop: inset.top }} >
            <Tab.Screen name='homeTab' component={HomeRouter} />
            <Tab.Screen name='followTab' component={FollowScreen} />
        </Tab.Navigator>
    )
}

export default HomeTab

