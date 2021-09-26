import React from 'react';
import { StyleSheet, Text } from 'react-native';
import color from '../../config/color';

function ErrorMessage({errorMessage, visible}) {
    if(!visible || !errorMessage) return null;

    return (
       <Text style={styles.text}>{errorMessage}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: color.danger
    }
})

export default ErrorMessage;