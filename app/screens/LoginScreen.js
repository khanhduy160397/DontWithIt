import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import Screen from '../component/Screen';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton, AppFormPicker} from '../component/forms/index'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen({navigation}) {
    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo-red.png')}
                style={styles.logo}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(navigation)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    icon="email"
                    placeholder="Email"
                />
                <AppFormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={true}
                />
                <SubmitButton title="Login" />
            </AppForm>

        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    container: {
        padding: 10
    }
})
export default LoginScreen;