import { RefreshControlBase } from "react-native";

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Input , Button} from "react-native-elements";
import {KeyboardAvoidingView} from "react-native";
import { StatusBar } from "expo-status-bar";

const RegisterScreen = ({navigation}) => {
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const register=()=>{
        
    };
return (
        <KeyboardAvoidingView behavior="padding" style={style.container}>
            <StatusBar style="light" />
            <Text h3 style={{marginBottom:50}}>
            Create a Signal account
                </Text>
                <view style={styles.inputContainer}>
                    <input
                    placeholder="Full Name" 
                    autoFocus type="text" 
                    value={name} onChangeText={text=>setname(text)}
                    />
                    <input
                    placeholder="Email" 
                    type="Email"
    
                    value={email} onChangeText={text=>setEmail(text)}
                    />
                    <input
                    placeholder="Password"
                    type="Password" 
                
                    value={password} onChangeText={text=>setPassword(text)}
                    secureTextEntry
                    />
                    <input
                    placeholder="Profile PicUrl(Optional)" 
                    type="text"
                    value={imageUrl} onChangeText={text=>setImageUrl(text)}
                    />
                    onSubmitEditting={register}

                </view>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{},

});
