import React, { Fragment } from 'react';
import {useFormikContext} from 'formik';
import AppTextInput from '../AppTextInput';
import ErrorMessage from '../forms/ErrorMessage'
function AppFormField({name,width, height, onlyIcon, ...otherProp}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext()
    return (
        <Fragment>
            <AppTextInput
                width={width}
                height={height}
                onlyIcon={onlyIcon}
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProp}
            />
            <ErrorMessage errorMessage={errors[name]} visible={touched[name]} />
        </Fragment>
    );
}

export default AppFormField;