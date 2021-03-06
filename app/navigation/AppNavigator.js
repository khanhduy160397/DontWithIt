import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import NewListingButton from "./NewListingButton";


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator screenOptions={{
        headerShown: false
    }}>
        <Tab.Screen name="Feed" component={FeedNavigator} options={{
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color} /> ,
        }} />
        <Tab.Screen name="ListingsEdit" component={ListingEditScreen} options={({navigation}) => ({
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="plus-circle" size={size} color={color} />,
            tabBarButton: () => <NewListingButton onPress={() => navigation.navigate('ListingsEdit') } />
        })} />
        <Tab.Screen name="Account" component={AccountNavigator} options={{
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="account" size={size} color={color} />
        }} />
    </Tab.Navigator> 
)

export default AppNavigator;