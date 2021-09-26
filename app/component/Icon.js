import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
function Icon({name, size = 40 , backgroundColor = '#000', iconColor = "#fff"}) {
    return (
        <View style={{width: size, backgroundColor, borderRadius: size /2, height: size, justifyContent:'center', alignItems: 'center'}}>
            <MaterialCommunityIcons 
                name={name}
                size={size * 0.5}
                color={iconColor}
            />
        </View>
    );
}

export default Icon;