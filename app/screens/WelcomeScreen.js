import React from 'react'
import { Image, Text, View, StyleSheet, ImageBackground } from 'react-native'
import AppButton from '../component/AppButton'

export default function WelcomeScreen({navigation}) {
    return (
        <ImageBackground style={styles.backgorund} source={require('../assets/background.jpg')} blurRadius={2} >
            <View style={styles.containerLogo}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                <Text style={styles.tagLine}>Sell What you Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={()=> navigation.navigate("Login")}/>
                <AppButton title="Register" color="secondary" onPress={()=> navigation.navigate("Register")}>
            </AppButton>

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
    },
    backgorund: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    registerButton : {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    containerLogo : {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    buttonContainer: {
        padding: 20,
        width: '100%'
    }, 
    tagLine: {
        fontSize: 25,
        paddingVertical: 20,
        fontWeight: '600'
    }
})
