import { useFormikContext } from 'formik';
import React from 'react';
import { ErrorMessage } from './forms';
import ImageInputList from './ImageInputList';

function FormImagePicker({ name }) {
    const { errors, touched, setFieldValue, values } = useFormikContext()
    const imageUris = values[name];

    const handleAdd = uri => {
        setFieldValue(name, [...imageUris, uri]);
    }
    const handleRemove = uri => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri != uri));
    }

    return (
        <>
            <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} key={imageUris} />
            <ErrorMessage errorMessage={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormImagePicker;