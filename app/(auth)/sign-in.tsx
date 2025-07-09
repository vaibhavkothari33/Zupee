import { router } from 'expo-router'
import React from 'react'
import { Text, View,Button } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text >Please Sign-in first </Text>
      <Button title = "Sign In" onPress={()=> router.push("/sign-up")}/>
    </View>
  )
}

export default SignIn