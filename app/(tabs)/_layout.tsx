import { Redirect, Slot } from "expo-router";

export default function _Layout(){
    const isAuthentatic = true;
    if(!isAuthentatic) return <Redirect href="/sign-in"/>
    
    return <Slot/>
}