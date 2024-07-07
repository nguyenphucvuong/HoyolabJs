import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { appInfo } from "../constains/appInfo";
import { StyleGlobal } from "../styles/StyleGlobal";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button } from "@rneui/base";
import {
  AvatarComponent,
  ButtonsComponent,
  SkeletonComponent,
  ImagesComponent,
} from "../component";
import { Image } from "expo-image";
import RowComponent from "../component/RowComponent";

const HomeScreen = () => {
  let text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
  aperiam exercitationem aliquid, repellendus quae alias dolores
  eligendi ea beatae vitae quis doloremque quibusdam, molestias
  non. Perspiciatis nemo laudantium rerum laboriosam.`;
  text = text.substring(0, 120);

  let texst = ' d'

  const state = {
    userName: "Tai tồ",
    creatAt: " 1 giờ trước - Honkai",
    game: "Honkai Impact 3rd",
    avatar:
      "https://vnn-imgs-a1.vgcloud.vn/vnreview.vn/image/11/44/57/1144578.jpg",
    images: [
      // "https://upload-os-bbs.hoyolab.com/upload/2024/05/12/111816991/034be374ffb331e6b0dbc16ed3c0fbf6_933372970025389044.jpg",
      // "https://upload-os-bbs.hoyolab.com/upload/2024/05/01/283700571/d214ba18907113f365ccf11acac7360d_8045971794910383490.jpg",
      "https://upload-os-bbs.hoyolab.com/upload/2024/05/14/184133439/dd0fd8f3fd576a0142658de44ac859f7_1810763935896167165.jpg",
    ],
    hashtag: [
      "Honkai Impact 3rd",
      // "Mihoyo",
      // "Honkai",
      // "https://upload-os-bbs.hoyolab.com/upload/2024/05/12/111816991/034be374ffb331e6b0dbc16ed3c0fbf6_933372970025389044.jpg",
      // "https://upload-os-bbs.hoyolab.com/upload/2024/05/01/283700571/d214ba18907113f365ccf11acac7360d_8045971794910383490.jpg",
      // "https://upload-os-bbs.hoyolab.com/upload/2024/05/14/184133439/dd0fd8f3fd576a0142658de44ac859f7_1810763935896167165.jpg",
    ]
  };

  const handleAd = () => {
    console.log("toi day");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ ...styles.box, backgroundColor: "pink" }}>
          <View style={{ ...styles.content }}>
            {/* Avatar */}
            <RowComponent
              height={appInfo.widthWindows / 5.7}
              style={{ alignItems: "center" }}
            >
              <SkeletonComponent isAvatar Data={state.avatar}>
                <AvatarComponent size={40} round={30} url={state.avatar} />
              </SkeletonComponent>

              <View
                style={{
                  height: "80%",
                  width: "55%",
                  justifyContent: "center",
                  paddingLeft: "3%",
                }}
              >
                <SkeletonComponent Data={state.userName}>
                  <Text style={StyleGlobal.textName}>Tai tồ</Text>
                  <Text style={StyleGlobal.textInfo}>1 giờ trước • Honkai</Text>
                </SkeletonComponent>
              </View>

              <SkeletonComponent Data={state.userName} isButton>
                <ButtonsComponent color="rgba(121,141,218,1)" isFollow onPress={handleAd}>
                  <Text style={{ ...StyleGlobal.text, color: "rgba(121,141,218,1)" }}>Theo dõi</Text>
                </ButtonsComponent>

              </SkeletonComponent>

              <View
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >

                <ButtonsComponent isMoreAction onPress={handleAd} />
              </View>
            </RowComponent>


            {/* Content Title */}
            <RowComponent
              minHeight={20}
              maxHeight={40}
              style={{
                flexDirection: "column",

              }}>
              <SkeletonComponent Data={text}>
                <Text style={StyleGlobal.textTitleContent}>{text}</Text>
              </SkeletonComponent>
            </RowComponent>

            {/* Content */}
            <RowComponent
              minHeight={texst ? 20 : 0}
              maxHeight={texst ? 35 : 0}
              style={{
                flexDirection: "column",

              }}>
              <SkeletonComponent Data={text}>
                <Text style={StyleGlobal.textContent}>{texst}</Text>
              </SkeletonComponent>
            </RowComponent>


            {/* Image Content */}
            <RowComponent minHeight={appInfo.widthWindows * 0.6} maxHeight={250} style={{
              marginTop: "2%",
            }}>
              <ImagesComponent Data={state.images} />
            </RowComponent>


            <RowComponent height={state.hashtag.length === 0 ? 0 : 45} backgroundColor={"red"}>
              <ButtonsComponent color="green" isHashtagButtons onPress={handleAd} hashtag={state.hashtag} />
            </RowComponent >



            <RowComponent >

            </RowComponent >

            <RowComponent ></RowComponent>
          </View>
        </View>



      </ScrollView>
    </SafeAreaView >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  box: {

  },
  content: {
    width: appInfo.widthWindows,
    height: "auto",
    minHeight: "100%",
    maxHeight: appInfo.widthWindows * 1.4,
    paddingHorizontal: "5%",

  },
});
