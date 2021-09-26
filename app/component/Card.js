import React from 'react'
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback } from 'react-native'
import color from '../config/color'

export default function Card({title, subTitle, image, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image} />
                <View style={styles.detailContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: color.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow: 'hidden'
    },
    image : {
        width: '100%',
        height : 200,
    },
    detailContainer : {
        padding: 20
    },
    title : {
        marginBottom: 7
    },
    subTitle : {
        color: color.secondary,
        fontWeight: 'bold'
    }
})