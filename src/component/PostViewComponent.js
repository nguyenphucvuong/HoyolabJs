import { StyleSheet, Text, View, TextInput, Animated, Pressable, Button, Modal } from "react-native";
import React, { useState, useRef } from "react";
import { TapGestureHandler, State } from 'react-native-gesture-handler';


import { appInfo } from "../constains/appInfo";
import { StyleGlobal } from "../styles/StyleGlobal";
import {
    AvatarComponent,
    ButtonsComponent,
    SkeletonComponent,
    ImagesComponent,
    IconComponent,
} from "./";
import { Image } from "expo-image";
import RowComponent from "../component/RowComponent";



const PostViewComponent = () => {
    let text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
  aperiam exercitationem aliquid, repellendus quae alias dolores
  eligendi ea beatae vitae quis doloremque quibusdam, molestias
  non. Perspiciatis nemo laudantium rerum laboriosam.`;
    text = text.substring(0, 120);

    let texts = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
  aperiam exercitationem aliquid, repellendus quae alias dolores
  eligendi ea beatae vitae quis doloremque quibusdam, molestias
  non. Perspiciatis nemo laudantium rerum laboriosam.`;
    const state =
    {
        id: "1",
        userId: "1",
        userName: "Tai tồ",
        avatar:
            "https://vnn-imgs-a1.vgcloud.vn/vnreview.vn/image/11/44/57/1144578.jpg",
        creatAt: " 1 giờ trước - Honkai",
        game: "Honkai Impact 3rd",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    aperiam exercitationem aliquid, repellendus quae alias dolores
    eligendi ea beatae vitae quis doloremque quibusdam, molestias
    non. Perspiciatis nemo laudantium rerum laboriosam.`,
        images: [
            // "https://upload-os-bbs.hoyolab.com/upload/2024/05/12/111816991/034be374ffb331e6b0dbc16ed3c0fbf6_933372970025389044.jpg",
            // "https://upload-os-bbs.hoyolab.com/upload/2024/05/01/283700571/d214ba18907113f365ccf11acac7360d_8045971794910383490.jpg",
            "https://upload-os-bbs.hoyolab.com/upload/2024/05/14/184133439/dd0fd8f3fd576a0142658de44ac859f7_1810763935896167165.jpg",
            "https://upload-os-bbs.hoyolab.com/upload/2024/07/03/318782826/47cb4ff0db4ca986c6775cc66d10493f_5811412000668980395.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",
        ],
        hashtag: [
            "Honkai Impact 3rd",
            "Mihoyo",
            "Honkai",
            "https://upload-os-bbs.hoyolab.com/upload/2024/05/12/111816991/034be374ffb331e6b0dbc16ed3c0fbf6_933372970025389044.jpg",
            "https://upload-os-bbs.hoyolab.com/upload/2024/05/01/283700571/d214ba18907113f365ccf11acac7360d_8045971794910383490.jpg",
            "https://upload-os-bbs.hoyolab.com/upload/2024/05/14/184133439/dd0fd8f3fd576a0142658de44ac859f7_1810763935896167165.jpg",
            "https://upload-os-bbs.hoyolab.com/upload/2024/07/03/318782826/47cb4ff0db4ca986c6775cc66d10493f_5811412000668980395.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",
        ]
    };



    const [expanded, setExpanded] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;

    const toggleExpand = () => {
        setExpanded(!expanded);

        Animated.timing(animation, {
            toValue: expanded ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };
    const height = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 50], // Adjust the outputRange values as per your requirement
    });

    const HandleIsEmpty = (data) => {
        const view = data.view;
        const length = data.length;
        return length === 0 ? <></> : view;
    }
    const handleAd = () => {
        console.log("toi day");
    };


    const [isVisible, setIsVisible] = useState(false);
    const translateY = useState(new Animated.Value(appInfo.heightWindows))[0]; // Start offscreen

    const handleShowInput = () => {
        console.log("true")
        setIsVisible(true);
        Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const handleHideInput = () => {
        Animated.timing(translateY, {
            toValue: appInfo.heightWindows,
            duration: 300,
            useNativeDriver: false,
        }).start(() => setIsVisible(false));
    };


    return (
        <View style={{
            ...styles.box,
            // backgroundColor: "pink",
        }}>

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
                        <SkeletonComponent Data={state.userId}>
                            <Text style={StyleGlobal.textName}>Tai tồ</Text>
                            <Text style={StyleGlobal.textInfo}>1 giờ trước • Honkai</Text>
                        </SkeletonComponent>
                    </View>

                    <SkeletonComponent Data={state.userId} isButton>
                        <ButtonsComponent color="rgba(121,141,218,1)" isFollow onPress={handleAd}>
                            <Text style={{ ...StyleGlobal.text, color: "rgba(121,141,218,1)" }}>Theo dõi</Text>
                        </ButtonsComponent>

                    </SkeletonComponent>

                    <SkeletonComponent Data={state.userId} isButton>
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
                    </SkeletonComponent>


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
                    minHeight={texts ? 20 : 0}
                    maxHeight={texts ? 35 : 0}
                    style={{
                        flexDirection: "column",

                    }}>
                    <HandleIsEmpty length={texts.length} view={<Text style={StyleGlobal.textContent}>{texts}</Text>} />

                </RowComponent>

                {/* Image Content */}
                <HandleIsEmpty
                    length={state.images.length}
                    view={
                        <RowComponent
                            minHeight={appInfo.widthWindows * 0.45}
                            height={"auto"}
                            maxHeight={250}
                            // backgroundColor={"red"}
                            style={{
                                marginTop: "2%",
                            }}>
                            <ImagesComponent Data={state.images} />
                        </RowComponent>}
                />

                {/* Hashtag */}
                <RowComponent
                    height={state.hashtag.length === 0 ? 0 : 45}
                    width={appInfo.widthWindows - (appInfo.widthWindows / 100 * 5)}
                >
                    <ButtonsComponent color="green" isHashtag onPress={handleAd} hashtag={state.hashtag} />
                </RowComponent >

                {/* Quick Comment */}

                <Animated.View style={{ height, overflow: 'hidden', marginTop: 10 }}>
                    <RowComponent
                        height={40}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            alignContent: "center",
                            justifyContent: "center",
                        }}>
                        <AvatarComponent size={40} round={30} url={state.avatar} style={{ marginRight: "3%" }} />
                        <Pressable onPress={handleShowInput} style={{
                            width: "100%",
                            height: 30,
                            flex: 1,
                            borderRadius: 30,
                            borderColor: "gray",
                            borderWidth: 1,
                            paddingLeft: 10,
                            paddingRight: 10,
                        }}>
                            <TextInput
                                placeholder="Viết bình luận..."
                                editable={false}
                            />
                        </Pressable>

                    </RowComponent>
                </Animated.View>



                {/* Like, Comment, View */}
                <HandleIsEmpty
                    length={state.id.length}
                    view={
                        <RowComponent
                            height={40}
                            style={{
                                flexDirection: "row",
                            }}>
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    alignItems: "center",
                                    flex: 2,
                                    flexDirection: "row",
                                }}
                            >
                                <IconComponent
                                    isTouchable
                                    size={20}
                                    icon={require('../../assets/view_icon_outside.png')}
                                    style={{
                                        marginRight: "2%",
                                    }}
                                />
                                <Text
                                    style={{
                                        ...StyleGlobal.text,
                                        color: "gray",
                                    }}> 6k</Text>
                            </View>
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flex: 1,
                                    flexDirection: "row",
                                }}
                            >
                                <View
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flex: 1,
                                        flexDirection: "row",
                                    }}>
                                    <IconComponent
                                        isTouchable size={20}
                                        icon={require('../../assets/comment_icon_outside.png')}
                                        style={{
                                            flex: 1,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            ...StyleGlobal.text,
                                            color: "gray",
                                            flex: 1,
                                        }}> 6k</Text>
                                </View>

                                <View
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flex: 1,
                                        flexDirection: "row",
                                    }}>

                                    <IconComponent
                                        onPress={toggleExpand}
                                        isTouchable
                                        size={20}
                                        icon={require('../../assets/like_icon_outside.png')}
                                        style={{
                                            flex: 1,
                                        }}
                                    />

                                    <Text
                                        style={{
                                            ...StyleGlobal.text,
                                            color: "gray",
                                            flex: 1,
                                        }}> 6k</Text>
                                </View>
                            </View>
                        </RowComponent>}
                />

                <Modal
                    visible={isVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={handleHideInput}
                >
                    {isVisible && (
                        <Animated.View style={[styles.animatedContainer, { transform: [{ translateY }] }]}>
                            <TextInput
                                placeholder="Đăng bình luận"
                                style={styles.inputQuickCmt}
                                autoFocus={true}
                                multiline
                            />
                            <Button title="Gửi" onPress={handleHideInput} />
                        </Animated.View>
                    )}
                </Modal>

            </View>

        </View >
    )
}

export default PostViewComponent

const styles = StyleSheet.create({
    box: {
        width: "auto",
        height: "auto",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.1)",

    },
    content: {
        width: appInfo.widthWindows,
        height: "auto",
        minHeight: "100%",
        maxHeight: appInfo.widthWindows * 1.4,
        paddingHorizontal: "5%",

    },
    animatedContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,

    },
    inputQuickCmt: {
        height: 150,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
    },


})