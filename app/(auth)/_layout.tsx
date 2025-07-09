import { Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
const _layout = () => {
    return (
        <SafeAreaView>
            <Text>Auth layout</Text>
            <Slot />
        </SafeAreaView>
    )
}

export default _layout