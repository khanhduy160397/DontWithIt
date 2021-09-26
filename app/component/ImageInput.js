import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import color from '../config/color';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
function ImageInput({ imageUri, onChangeImage }) {
    
    useEffect(() => {
        requestPermission();
    },[])

    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!granted) alert("!!!");
      }

    const handlePress = () => {
        if(!imageUri) selectImage();
        else Alert.alert('Delete', 'Are u sure ?', [
            {text: 'Yes', onPress: () => onChangeImage(null)},
            {text: 'No'}
        ])
    }

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5
          });
          if(!result.cancelled) {
            onChangeImage(result.uri)
          }
        } catch (error) {
          console.log("Error reading")
        }
      }
    

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name="camera" color={color.medium} size={40} />}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: color.light,
        borderRadius: 15,
        justifyContent: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    }
})

export default ImageInput;