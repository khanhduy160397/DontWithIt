import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Screen from '../component/Screen';
import Card from '../component/Card';
import color from '../config/color';
import route from '../navigation/route';

const listing = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 200,
        image: require('../assets/couch.jpg')
    }
];

function ListingScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listing}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => 
                    <Card 
                        onPress={() => navigation.navigate(route.LISTING_DETAILS, item)}
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: color.light
    }
})

export default ListingScreen;