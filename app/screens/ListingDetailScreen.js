import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import ListItem from '../component/ListItem';
import colors from '../config/color';

function ListingDetailScreen({route}) {
    const listing = route.params;
    return (
        <View>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{listing.title}</Text>
                <Text style={styles.price}>${listing.price}</Text>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require("../assets/mosh.jpg")}
                        title="Khanh Duy"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailContainer: {
        padding: 20,
        borderRadius: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: colors.black
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 20
    }
})

export default ListingDetailScreen;