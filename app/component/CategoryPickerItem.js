import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from '../component/Icon';

function CategoryPickerItem({ onPress, item }) {
    return (
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <Text style={styles.label}>{item.label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: "33%"
    },
    label: {
        marginTop: 15,
        textAlign: 'center'
    }
})

export default CategoryPickerItem;