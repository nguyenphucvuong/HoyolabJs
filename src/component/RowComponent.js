import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { appInfo } from "../constains/appInfo";

const RowComponent = (rowInfo) => {
  const [children, color, minHeight, maxHeight, height, style] = [
    rowInfo.children,
    rowInfo.backgroundColor,
    rowInfo.minHeight,
    rowInfo.maxHeight,
    rowInfo.height,
    rowInfo.style,
  ];

  return (
    <View
      style={[
        {
          backgroundColor: color,
          minHeight: minHeight,
          maxHeight: maxHeight,
          width: "100%",
          height: height,
          flexDirection: "row",
        },
        style && style,
      ]}
    >
      {children}
    </View>
  );
};

export default RowComponent;

const styles = StyleSheet.create({});
