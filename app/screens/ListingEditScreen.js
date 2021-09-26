import React, { useEffect, useState } from 'react';
import {AppForm, AppFormField, SubmitButton, AppFormPicker} from '../component/forms/index'
import * as yup from 'yup';
import {Formik} from 'formik';
import Screen from '../component/Screen';
import { StyleSheet } from 'react-native';
import CategoryPickerItem from '../component/CategoryPickerItem';
import FormImagePicker from '../component/FormImagePicker';
import * as Location from 'expo-location';
import useLocation from '../hooks/useLocation';

const validationSchema = yup.object().shape({
    title: yup.string().required().min(1).label("Title"),
    price: yup.number().required().min(1).max(10000).label("Price"),
    description: yup.string().label("Description"),
    category: yup.object().required().nullable().label("Category"),
    images: yup.array().min(1, "Please select at least 1 image!")
})

const categories = [
    {label: "Furniture", value: 1, backgroundColor: '#ec407a', icon:'floor-lamp'},
    {label: "Clothing", value: 2, backgroundColor: '#81c784', icon:'tshirt-crew'},
    {label: "Camera", value: 3, backgroundColor: '#64b5f6', icon:'camera'},
    {label: "Game", value: 4, backgroundColor: '#ec407a', icon:'gamepad'},
    {label: "Music player", value: 5, backgroundColor: '#81c784', icon:'folder-music'},
    {label: "Motobike & Car", value: 6, backgroundColor: '#64b5f6', icon:'motorbike'},
    {label: "Disc Game", value: 7, backgroundColor: '#ec407a', icon:'disc'},
]

function ListingEditScreen() {
    const location = useLocation();

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title:"",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                validationSchema={validationSchema}
                onSubmit={values => console.log(location)}
            >   
                <FormImagePicker name="images" />
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField maxLength={8} name="price" placeholder="Price" keyboardType="numeric"/>
                <AppFormPicker items={categories} name="category" placeholder="Category" numberOfColumn={1}/>
                <AppFormField maxLength={255} numberOfLines={3} name="description" placeholder="Description" multiline />
                <SubmitButton title="Post"  />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container : {
        padding: 10
    }
})

export default ListingEditScreen;