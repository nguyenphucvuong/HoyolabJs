import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const AvatarComponent = (infoImage) => {
  //   const { size, round, url } = { infoImage };
  //   console.log(infoImage.size, infoImage.round, infoImage.url);
  return (
    <Image
      style={{
        width: infoImage.size,
        height: infoImage.size,
        borderRadius: infoImage.round ? 100 : 0,
      }}
      source={{
        uri: infoImage.url,
      }}
      contentFit="cover"
    />
  );
};

export { AvatarComponent };

const styles = StyleSheet.create({});
