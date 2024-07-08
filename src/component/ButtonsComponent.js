import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { Image } from 'expo-image';

const ButtonsComponent = (infoButton) => {
  const [children, color, style, isFollow, onPress, isMoreAction, isHashtag, hashtag, isLike, isShowCmt] = [
    infoButton.children,
    infoButton.color,
    infoButton.style,
    infoButton.isFollow,
    infoButton.onPress,
    infoButton.isMoreAction,
    infoButton.isHashtag,
    infoButton.hashtag,
    infoButton.isLike,
    infoButton.isShowCmt,
  ];

  const LikeButton = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[{
          borderColor: color,
          borderRadius: 100,
          borderWidth: 2,
          justifyContent: "center",
          alignItems: "center",
          width: "22%",
          height: "50%",
          paddingHorizontal: "1%",
        }, style && style]
        }
      >
        {children}
      </TouchableOpacity >
    );
  }

  const MoreActionButton = () => {
    return (

      <TouchableOpacity
        onPress={onPress}
        style={[{
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          width: "30%",
          height: "30%",
        }, style && style]}>
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          source={require('../../assets/dots_vertical-512.jpg')}
          contentFit="cover" />
      </TouchableOpacity>

    );
  };

  const FollowButton = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[{
          borderColor: color,
          borderRadius: 100,
          borderWidth: 2,
          justifyContent: "center",
          alignItems: "center",
          width: "22%",
          height: "50%",
          paddingHorizontal: "2%",
        }, style && style]}
      >
        {children}
      </TouchableOpacity>
    );
  };


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
              color: "rgba(121,141,218,1)",
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

  if (isFollow) {
    return <FollowButton />;
  } else if (isMoreAction) {
    return <MoreActionButton />;
  } else if (isHashtag) {
    return <HashtagButtons />;
  }
  else {
    return <></>
  }


};

export default ButtonsComponent;

const styles = StyleSheet.create({});
