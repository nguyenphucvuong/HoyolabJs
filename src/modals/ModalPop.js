import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

const ModalPop = (infoModal) => {
    const [chidlren, visible, onRequestClose] = [
        infoModal.children,
        infoModal.visible,
        infoModal.onRequestClose,
    ];



    // console.log(chidlren, visible, onRequestClose);
    return (
        <>
            <Modal
                visible={visible}
                transparent={true}
                onRequestClose={onRequestClose}
            >
                <View style={{ flex: 1 }} >
                    <TouchableWithoutFeedback onPress={onRequestClose}>
                        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} ></View>
                    </TouchableWithoutFeedback>
                    {chidlren}
                </View>
            </Modal>
        </>

    )
}

export default ModalPop

const styles = StyleSheet.create({})