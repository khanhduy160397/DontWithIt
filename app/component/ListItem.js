import React from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import color from '../config/color';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {MaterialCommunityIcons} from "@expo/vector-icons"

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={color.light}>
            <View style={styles.container}>
                {IconComponent}
                {image && <Image source={image} style={styles.image} />}
                <View style={styles.subContainer}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    {subTitle && <Text style={styles.subTitle} numberOfLines={2}>{subTitle}</Text>}
                </View>
                <MaterialCommunityIcons name="chevron-right" size={25} color={color.medium} />
            </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: color.white,
        alignItems: 'center'
    },
    image : {
        width: 70,
        height: 70,
        borderRadius:35,
        marginRight: 10
    },
    subContainer: {
       marginLeft: 10,
       justifyContent: 'center',
       flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: '500'
    },
    subTitle: {
        fontWeight: '400',
        color: color.medium
    }
})

export default ListItem;