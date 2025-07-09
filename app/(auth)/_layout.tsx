import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { images } from '@/constants'

const _layout = () => {
    const screenHeight = Dimensions.get("window").height;
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView
                className='bg-white flex-1'
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View className='w-full relative' style={{ height: screenHeight / 2.25 }}>
                    <ImageBackground
                        source={images.loginGraphic}
                        className='size-full rounded-b-lg'
                        resizeMode='stretch'
                    />
                    <Image
                        source={images.logo}
                        className='self-center size-48 absolute -bottom-16 z-10'
                        resizeMode='contain'
                    />
                </View>

                {/* Container for the auth screens */}
                <View className='flex-1 px-5'>
                    <Slot />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default _layout