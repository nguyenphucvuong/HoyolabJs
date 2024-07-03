import { ScrollView, StyleSheet, Text, View } from "react-native";
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

  const state = {
    userName: "Tai tồ",
    creatAt: " 1 giờ trước - Honkai",
    game: "Honkai Impact 3rd",
    avatar:
      "https://vnn-imgs-a1.vgcloud.vn/vnreview.vn/image/11/44/57/1144578.jpg",
    images: [
      // "https://upload-os-bbs.hoyolab.com/upload/2024/05/12/111816991/034be374ffb331e6b0dbc16ed3c0fbf6_933372970025389044.jpg",
      "https://upload-os-bbs.hoyolab.com/upload/2024/05/01/283700571/d214ba18907113f365ccf11acac7360d_8045971794910383490.jpg",
      // "https://upload-os-bbs.hoyolab.com/upload/2024/05/14/184133439/dd0fd8f3fd576a0142658de44ac859f7_1810763935896167165.jpg",
    ],
  };

  const handleAd = () => {
    console.log("toi day");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.box}>
          <View style={styles.content}>
            {/* Avatar */}
            <RowComponent
              height={appInfo.widthWindows / 5}
              style={{ alignItems: "center" }}
            >
              <SkeletonComponent isAvatar Data={state.avatar}>
                <AvatarComponent size={40} round={30} url={state.avatar} />
              </SkeletonComponent>

              <View
                style={{
                  height: "80%",
                  width: "50%",
                  justifyContent: "center",
                  paddingLeft: "3%",
                }}
              >
                <SkeletonComponent Data={state.userName}>
                  <Text style={StyleGlobal.textName}>Tai tồ</Text>
                  <Text style={StyleGlobal.textInfo}>1 giờ trước - Honkai</Text>
                </SkeletonComponent>
              </View>

              <SkeletonComponent Data={state.userName} isButton>
                <ButtonsComponent color="green" isBG onPress={handleAd}>
                  <Text style={StyleGlobal.text}>Theo dõi</Text>
                </ButtonsComponent>
              </SkeletonComponent>

              <View
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "pink",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>box </Text>
              </View>
            </RowComponent>

            {/* Title bài viết */}
            <RowComponent minHeight={20} maxHeight={40}>
              <Text style={StyleGlobal.textTitleContent}>
                Honkai Impact 3rd
              </Text>
            </RowComponent>

            {/* Content */}
            <RowComponent minHeight={60} maxHeight={100}>
              <Text style={StyleGlobal.text}>{text}</Text>
            </RowComponent>

            {/* Image Content */}
            <RowComponent minHeight={appInfo.widthWindows * 0.4} maxHeight={appInfo.widthWindows * 0.7}>
              <ImagesComponent Data={state.images}></ImagesComponent>
            </RowComponent>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  box: {
    width: appInfo.widthWindows,

    minHeight: appInfo.widthWindows * 1,
    maxHeight: appInfo.widthWindows * 1.5,
    paddingHorizontal: "3%",
  },
  content: {
    width: "100%",
    height: "90%",
  },
});
