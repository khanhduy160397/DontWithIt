import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import defaultStyle from '../config/styles';

function AppTextInput({icon, width = '100%' , height = 'auto', size = 20, onlyIcon ,...otherProps}) {
    return (
        <View style={[styles.container, {width, height, justifyContent: onlyIcon ? "center" : 'flex-start'}]}>
            {icon && <MaterialCommunityIcons name={icon} size={size} color={defaultStyle.color.medium} style={!onlyIcon ? styles.icon : {marginRight: 0}}/>}
            {!onlyIcon && <TextInput style={defaultStyle.text} {...otherProps} placeholderTextColor={defaultStyle.color.medium} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: defaultStyle.color.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 10,
        alignItems:'center',
    },
    icon : {
        marginRight: 10,
    }
})

export default AppTextInput;