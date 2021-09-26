import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../component/ListItem';
import ListItemDeleteAction from '../component/ListItemDeleteAction';
import ListItemSeparator from '../component/ListItemSeparator';
import Screen from '../component/Screen';

const initialMessage = [
    {
        id: 1,
        title: 'T1',
        description : 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description : 'D2',
        image: require('../assets/mosh.jpg')
    }
]

export default function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessage);
    const [isRefresh, setResfresh] = useState(false);

    const handleDelete = message => {
        // Delete the message from messages
        setMessages(messages.filter(item => item.id != message.id));
    }

    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={messages => messages.id.toString()}
                renderItem={({item}) => 
                    <ListItem title={item.title} 
                    subTitle={item.description} 
                    image={item.image}
                    onPress={() => console.log("Message selected", item)}
                    renderRightActions={()=> <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                /> }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={isRefresh}
                onRefresh={()=> setMessages([
                    {
                        id: 2,
                        title: 'T2',
                        description : 'D2',
                        image: require('../assets/mosh.jpg')
                    }
                ])}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'red'
    }
})

