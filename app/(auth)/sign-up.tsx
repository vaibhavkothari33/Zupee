// import { Link, router } from 'expo-router'
// import React, { useState } from 'react'
// import { Alert, Text, View } from 'react-native'
// import Custominput from '@/components/Custominput'
// import Custombutton from '@/components/Custombutton'
// import { createUser } from '@/lib/appwrite'

// const SignUp = () => {
//     const [isSubmitting,setIsSubmitting] = useState(false);
//     const [form,setForm] = useState({name:"",email:"",password:""});

//     const submit = async()=>{
//         const {name,email,password} = form;
//         if(!name || !email || !password ) return Alert.alert("Error","Please enter valid email and password")

//         setIsSubmitting(true)
//         try{
//             await createUser({
//                 email,password,name
//             })
//             // appwrite sign in
//             Alert.alert("Sucess","User registered sucessfully");
//             router.replace("/");
//         }
//         catch(error:any){
//             Alert.alert("Error",error.message)
//         }
//         finally{
//             setIsSubmitting(false)
//         }
//     }
//     return (
//         <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
//             <Custominput
//                 placeholder='Enter your name'
//                 value={form.name}
//                 onChangeText={(text) => setForm((prev) => ({...prev,name:text}))}
//                 label='Name'
//                 keyboardType='default'
//             />
//             <Custominput
//                 placeholder='Enter your email'
//                 value={form.email}
//                 onChangeText={(text) => setForm((prev) => ({...prev,email:text}))}
//                 label='Email'
//                 keyboardType='email-address'
//             />
//             <Custominput
//                 placeholder='Enter your password'
//                 value={form.password}
//                 onChangeText={(text) => setForm((prev) => ({...prev,password:text}))}
//                 label='Password'
//                 // keyboardType='default'
//             />
//             <Custombutton
//                 isLoading={isSubmitting} 
//                 onPress={submit}
//                 title='Sign Up' />
//             <View>
//                 <Text className='base-regular text-center text-gray-100'>
//                     Already have an account?
//                 </Text>
//                 <Link href="/sign-in" className='text-primary text-center base-semibold'>
//                 Sign In</Link>
//             </View>
//         </View>
//     )
// }

// export default SignUp;
// In sign-up.tsx (renamed from register.tsx)
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import Custominput from '@/components/Custominput'
import Custombutton from '@/components/Custombutton'
import { createUser } from '@/lib/appwrite'

const SignUp = () => {
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [form,setForm] = useState({name:"",email:"",password:""});

    const submit = async()=>{
        const {name,email,password} = form;
        if(!name || !email || !password ) return Alert.alert("Error","Please enter valid email and password")

        setIsSubmitting(true)
        try{
            await createUser({
                email,password,name
            })
            Alert.alert("Success","User registered successfully");
            router.replace("/");
        }
        catch(error:any){
            Alert.alert("Error",error.message)
        }
        finally{
            setIsSubmitting(false)
        }
    }
    
    return (
        <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
            <Custominput
                placeholder='Enter your name'
                value={form.name}
                onChangeText={(text) => setForm((prev) => ({...prev,name:text}))}
                label='Name'
                keyboardType='default'
            />
            <Custominput
                placeholder='Enter your email'
                value={form.email}
                onChangeText={(text) => setForm((prev) => ({...prev,email:text}))}
                label='Email'
                keyboardType='email-address'
            />
            <Custominput
                placeholder='Enter your password'
                value={form.password}
                onChangeText={(text) => setForm((prev) => ({...prev,password:text}))}
                label='Password'
            />
            <Custombutton
                isLoading={isSubmitting} 
                onPress={submit}
                title='Sign Up' />
            <View>
                <Text className='base-regular text-center text-gray-100'>
                    Already have an account?
                </Text>
                <Link href="/sign-in" className='text-primary text-center base-semibold'>
                Sign In</Link>
            </View>
        </View>
    )
}

export default SignUp; // This is the required default export