import Custombutton from '@/components/Custombutton'
import Custominput from '@/components/Custominput'
import { signIn } from '@/lib/appwrite'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
const SignIn = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });

    const submit: () => Promise<void> = async () => {
        const { email, password } = form;
        if (!email || !password) return Alert.alert("Error", "Please enter valid email and password")

        setIsSubmitting(true)
        try {
            // appwrite sign in
            await signIn({
                email, password
            })
            // appwrite sign in
            Alert.alert("Sucess", "User signed in sucessfully");
            router.replace("/");
        }
        catch (error: any) {
            Alert.alert("Error", error.message)
        }
        finally {
            setIsSubmitting(false)
        }
    }
    return (
        <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
            <Custominput
                placeholder='Enter your email'
                value={form.email}
                onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
                label='Email'
                keyboardType='email-address'
            />
            <Custominput
                placeholder='Enter your password'
                value={form.password}
                onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
                label='Password'
                keyboardType='default'
            />
            <Custombutton
                isLoading={isSubmitting}
                onPress={submit}
                title='Sign In' />
            <View>
                <Text className='text-center text-gray-100'>
                    Don&apos;t have an account?
                </Text>
                <Link href="/sign-up" className='text-primary text-center'>
                    Sign Up
                </Link>
            </View>
        </View>
    )
}

export default SignIn;