import React, { Fragment, useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Platform, Text, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import defaultStyle from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({icon, items, placeholder, onSelectedItem, selectedItem, PickerItemComponent = PickerItem, numberOfColumn = 1 }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItems, setSelectedItem] = useState(selectedItem)
    useEffect(() => {
        setSelectedItem(selectedItem);
    },[selectedItem])
    return (
        <Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyle.color.medium} style={styles.icon} />}
                    {selectedItem ? <Text style={styles.text}>{selectedItem.label}</Text> : <Text style={styles.placeHolder}>{placeholder}</Text>}
                    {/* <Text style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</Text> */}
                    <MaterialCommunityIcons 
                        name="chevron-down" size={20} color={defaultStyle.color.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                {/* <Screen> */}
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        numColumns={numberOfColumn}
                        data={items}
                        keyExtractor={item => item.value}
                        renderItem={({item}) => 
                        <PickerItemComponent 
                            item={item}
                            label={item.label} 
                            onPress={()=> {
                                setModalVisible(false)
                                onSelectedItem(item);
                        }} />}
                    />
                {/* </Screen> */}
            </Modal>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: defaultStyle.color.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        marginVertical: 10,
        alignItems:'center'
    },
    icon : {
        marginRight: 10,
    },
    text: {
        flex : 1,
        color: defaultStyle.color.black
    },
    placeHolder : {
        color : defaultStyle.color.medium,
        flex:1
    }
})

export default AppPicker;