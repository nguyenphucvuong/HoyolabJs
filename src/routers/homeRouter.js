import { createStackNavigator } from "@react-navigation/stack"
import { HomeScreen, PictureScreen } from "../views"
import React from "react"
const Router = createStackNavigator()
const HomeRouter = () => {
    return (
        <Router.Navigator screenOptions={{ headerShown: false }}>
            <Router.Screen name='homeRouter' component={HomeScreen} />
            <Router.Screen name='picture' component={PictureScreen} />
        </Router.Navigator>
    )
}

export default HomeRouter

