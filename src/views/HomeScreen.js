import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Animated } from "react-native";
import React from "react";
import { StyleGlobal } from "../styles/StyleGlobal";
import { SafeAreaView } from "react-native-safe-area-context";


import PostViewComponent from "../component/PostViewComponent";

const HomeScreen = () => {

  return (

    <SafeAreaView>
      <ScrollView>
        <View style={StyleGlobal.container}>
          <PostViewComponent></PostViewComponent>
        </View>
      </ScrollView>
    </SafeAreaView >



  );
};

export default React.memo(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
