import { useFormikContext } from 'formik';
import React, { Fragment } from 'react';
import { ErrorMessage } from '.';
import AppPicker from '../AppPicker';


function AppFormPicker({items, placeholder, name, PickerItemComponent, numberOfColumn}) {
    const {errors, touched, setFieldValue, values} = useFormikContext()
    return (
        <Fragment>
            <AppPicker 
                numberOfColumn={numberOfColumn}
                items={items}
                PickerItemComponent={PickerItemComponent}
                onSelectedItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <ErrorMessage errorMessage={errors[name]} visible={touched[name]} />
        </Fragment>
    );
}

export default AppFormPicker;