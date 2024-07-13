import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const AvatarComponent = (infoImage) => {
  const [size, round, url, style] = [infoImage.size, infoImage.round, infoImage.url, infoImage.style];
  console.log("ava");

  return (
    < Image
      style={
        [{
          width: size,
          height: size,
          borderRadius: round ? 100 : 0,
        }, style && style]}
      source={{
        uri: url,
      }
      }
      contentFit="cover"
    />
  );
};

export default React.memo(AvatarComponent);

const styles = StyleSheet.create({});
