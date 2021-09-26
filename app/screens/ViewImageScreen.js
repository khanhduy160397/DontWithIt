import React from 'react'
import { Image, Platform, StyleSheet, View, StatusBar} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/color'

export default function ViewImageScreen() {
    return (
        <View style={style.container}>
            <View style={style.closeIcon}>
                <MaterialCommunityIcons name="close" size={35} color="white" />
            </View>
            <View style={style.deleteIcon}>
                <MaterialCommunityIcons name="delete" size={35} color="white" />
            </View>
            <Image source={require('../assets/chair.jpg')} style={style.image} resizeMode="contain"/>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        backgroundColor: colors.black,
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    image: {
        width : '100%',
        height: '100%'
    },
    closeIcon : {
        position: 'absolute',
        top: 40,
        left: 10
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 10
    }
})