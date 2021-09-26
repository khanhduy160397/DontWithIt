import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import color from '../config/color';
import Icon from '../component/Icon';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import ListItemSeparator from '../component/ListItemSeparator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: color.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: color.secondary
        },
        targetScreen: "Messages"
    }
]

function AccountScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title="Khanh Duy" subTitle="khanhduy160397@gmail.com" image={require('../assets/mosh.jpg')} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    renderItem={({item}) => 
                        <ListItem 
                            title={item.title} 
                            IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}
                             />}
                             onPress={() => navigation.navigate(item.targetScreen)}
                        />}
                    ItemSeparatorComponent={ListItemSeparator}
                    />
            </View>
            <ListItem title="Log Out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} onPress={() => navigation.push("Login")}/> 
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: color.light
    }
})

export default AccountScreen;