import { StyleSheet, Text, View, TouchableOpacity, FlatList, Pressable } from "react-native";
import React from "react";
import { Image } from 'expo-image';

const ButtonsComponent = (infoButton) => {
  const [children, color, style, render, isButton, isPressable, isFollow, onPress, onLongPress, isMoreAction, isHashtag, hashtag, isLike, isShowCmt, isSendCmt] = [
    infoButton.children,
    infoButton.color,
    infoButton.style,
    infoButton.render,
    infoButton.isButton,
    infoButton.isPressable,
    infoButton.isFollow,
    infoButton.onPress,
    infoButton.onLongPress,
    infoButton.isMoreAction,
    infoButton.isHashtag,
    infoButton.hashtag,
    infoButton.isLike,
    infoButton.isShowCmt,
    infoButton.isSendCmt,
  ];

  const PressableButton = () => {

    return (
      <Pressable
        // onPress={onPress}
        onPress={onPress}
        onLongPress={onLongPress}
        activeOpacity={0.6}
        style={[{
          color: color,
        }, style && style]}
      >
        {children}
      </Pressable>
    );
  }

  const NormalButton = () => {

    return (
      <TouchableOpacity
        // onPress={onPress}
        onPress={onPress}
        onLongPress={onLongPress}
        activeOpacity={0.6}
        style={[{
          color: color,
        }, style && style]}
      >
        {children}
      </TouchableOpacity>
    );
  }

  const HashtagButtons = () => {

    const renderHashtagButtons = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={[{
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
            height: "90%",
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginEnd: 8,
            flexDirection: "row",
            backgroundColor: "rgba(215,223,221,0.3)",

          }, style && style]}
        >
          <Image
            style={{
              width: 15,
              height: 15,
            }}
            source={require('../../assets/hashtag_icon.png')}
            contentFit="cover" />
          <Text
            style={{
              fontSize: 12,
              color: "rgba(101,128,255,1)",
            }}>{item}</Text>
        </TouchableOpacity>
      )
    }


    return (
      <FlatList
        // scrollEnabled={true}
        data={hashtag}
        renderItem={({ item }) => renderHashtagButtons({ item })}
        keyExtractor={(item) => item}
        horizontal={true}
        contentContainerStyle={{
          justifyContent: "flex-start",
          alignItems: "center",
          width: "auto",
          height: "100%",
          // backgroundColor: "pink",
        }}
      />

    )
  }

  if (isButton) {
    return <NormalButton />;
  } else if (isHashtag) {
    return <HashtagButtons />;
  } else if (isPressable) {
    return <PressableButton />;
  } else {
    return <></>
  }


};

export default React.memo(ButtonsComponent);

const styles = StyleSheet.create({});
