import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import colors from '../config/color'

export default function ViewImageScreen() {
    return (
        <View style={style.container}>
            <View style={style.closeIcon}></View>
            <View style={style.deleteIcon}></View>
            <Image source={require('../assets/chair.jpg')} style={style.image} resizeMode="contain"/>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        backgroundColor: colors.white,
        flex: 1
    },
    image: {
        width : '100%',
        height: '100%'
    },
    closeIcon : {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 0
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 0
    }
})