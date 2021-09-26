import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrolView = useRef();

    return (
        <View>
            <ScrollView ref={scrolView} horizontal onContentSizeChange={() => scrolView.current.scrollToEnd()}>
                <View style={styles.container}>
                    {imageUris.map(uri =>
                        <View style={styles.image} key={uri} >
                            <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
                        </View>
                    )}
                    <ImageInput onChangeImage={uri => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        marginRight: 10
    }
})

export default ImageInputList;