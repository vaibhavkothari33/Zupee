import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { images } from '@/constants'
import Custominput from '@/components/Custominput'
import Custombutton from '@/components/Custombutton'

const _layout = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView className='bg-white h-full' keyboardShouldPersistTaps="handled">
                <View className='w-full relative' style={{ height: Dimensions.get("screen").height / 2.25 }}>
                    <ImageBackground source={images.loginGraphic} className='size-full rounded-b-lg' resizeMode='stretch' />
                    <Image source={images.logo} className='self-center size-48 absolute -bottom-16 z-10' />

                </View>
                <Custominput 
                    placeholder='Enter your email'
                    value={''}
                    onChangeText={(text) => {}}
                    label='Email'
                    keyboardType='email-address'
                />
                <Custombutton/>

            </ScrollView>
            <Slot />
        </KeyboardAvoidingView>
    )
}

export default _layout