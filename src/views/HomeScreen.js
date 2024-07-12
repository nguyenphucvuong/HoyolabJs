import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Animated } from "react-native";
import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';  // Import GestureHandlerRootView

import { appInfo } from "../constains/appInfo";
import { StyleGlobal } from "../styles/StyleGlobal";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button } from "@rneui/base";
import {
  AvatarComponent,
  ButtonsComponent,
  SkeletonComponent,
  ImagesComponent,
  IconComponent,
} from "../component";
import { Image } from "expo-image";
import RowComponent from "../component/RowComponent";
import PostViewComponent from "../component/PostViewComponent";
import AnimatedQuickCmtComponent from "../component/AnimatedQuickCmtComponent";

const HomeScreen = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <SafeAreaView>
        <ScrollView>
          <View style={StyleGlobal.container}>
            <PostViewComponent></PostViewComponent>

          </View>
        </ScrollView>
      </SafeAreaView >
      {/* <AnimatedQuickCmtComponent></AnimatedQuickCmtComponent>
      <AnimatedQuickCmtComponent></AnimatedQuickCmtComponent>
      <AnimatedQuickCmtComponent></AnimatedQuickCmtComponent>
      <AnimatedQuickCmtComponent></AnimatedQuickCmtComponent>
      <AnimatedQuickCmtComponent></AnimatedQuickCmtComponent>
      <AnimatedQuickCmtComponent></AnimatedQuickCmtComponent> */}


    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
