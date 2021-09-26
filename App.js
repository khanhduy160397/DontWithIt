import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import AppPicker from './app/component/AppPicker';
import AppTextInput from './app/component/AppTextInput';
import Screen from './app/component/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingScreen from './app/screens/ListingScreen';
import * as ImagePicker from 'expo-image-picker';
import * as Permission from 'expo-permissions';
import ImageInput from './app/component/ImageInput';
import ImageInputList from './app/component/ImageInputList';
import LoginScreen from './app/screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AccountNavigator from './app/navigation/AccountNavigator';
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
]

const Link = () => {
    
  const navigation = useNavigation();
  return (
      <Button title="Click"
      onPress={() => navigation.navigate('TweetDetails')} />
    )
}


const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Button title="View Tweet"
    onPress={() => navigation.navigate("TweetDetails", {id: 1})} />
  </Screen>
)

const TweetDetails = ({route}) => (
  <Screen>
    <Text>Tweets Details Screen {route.params.id}</Text>
  </Screen>
)

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} options={{title: "Feed"}} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
)

const Account = () =>  (<Screen><Text>Account</Text></Screen>)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
  // screenOptions= {{
  //   tabBarActiveBackgroundColor: 'tomato',
  //   tabBarActiveTintColor : "white",
  //   tabberInactiveBackgroundColor: '#eee',
  //   tabBarInactiveTintColor: 'black'
  // }}
  >
    <Tab.Screen name="Feed" component={StackNavigator} 
    options={{
      tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color}
      />,headerShown : false
    }} 
    />
    <Tab.Screen name="Account" component={AccountNavigator} options={{headerShown: false}} />
  </Tab.Navigator>
)

export default function App() {
  // const [category, setCategory] = useState(categories[0])
  // const [imageUris, setImageUris] = useState([])
  // const requestPermission = async () => {
  //   const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if(!granted) alert("!!!");
  // }

  // useEffect(() => {
  //   requestPermission();
  // }, [])

  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if(!result.cancelled) {
  //       setImageUri(result.uri)
  //     }
  //   } catch (error) {
  //     console.log("Error reading")
  //   }
  // }
  // const handleAdd = uri => {
  //   setImageUris([...imageUris, uri]);
  // }
  // const handleRemove = uri => {
  //   console.log(uri);
  //   setImageUris(imageUris.filter(imageUri => imageUri != uri));
  // }
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

