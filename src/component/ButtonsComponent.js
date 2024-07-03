import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ButtonsComponent = (infoButton) => {
  const [children, color, isBG, onPress] = [
    infoButton.children,
    infoButton.color,
    infoButton.isBG,
    infoButton.onPress,
  ];

  return isBG ? (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: color,
        borderRadius: 100,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        width: "22%",
        height: "50%",
        paddingHorizontal: "2%",
      }}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: color,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        width: "22%",
        height: "50%",
        paddingHorizontal: "2%",
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ButtonsComponent;

const styles = StyleSheet.create({});
