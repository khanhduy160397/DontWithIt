import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen}/>
        <Stack.Screen name="Messages" component={MessagesScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
)

export default AccountNavigator;