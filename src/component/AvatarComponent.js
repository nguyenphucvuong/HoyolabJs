import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const AvatarComponent = (infoImage) => {
  const [size, round, url, style] = [infoImage.size, infoImage.round, infoImage.url, infoImage.style];

  return (
    <Image
      style={[{
        width: size,
        height: size,
        borderRadius: round ? 100 : 0,
      }, style && style]}
      source={{
        uri: url,
      }}
      contentFit="cover"
    />
  );
};

export { AvatarComponent };

const styles = StyleSheet.create({});
