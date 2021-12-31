import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements';
import {KeyboardAvoidingView} from "react-native";
import { StatusBar } from "expo-status-bar";

function loginScreen({navigation}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SignIn=()=>{

    }

    return (
        <KeyboardAvoidingView behavior="padding" style={style.container}>
            <StatusBar style="light" />
            <image source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Signal-Logo.svg",
            }}
                style={{ widh: 200, high: 200 }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text)=>setEmail(text)} />
                <input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text)=>setPassword(text)} />

            </View>
            <Button containerStyle={styles.button} onPress={SignIn} title="Login"/>
            <Button onPress={()=>navigation.navigate('Register')} containerStyle={styles.button} type="outline" title="Register"/>
            <View style={{high:100}}/>
        </KeyboardAvoidingView>

    );
}

export default loginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        padding:10,
    },
    inputContainer: {
        width:300,
    },
    button:{
        width:200,
        marginTop:10,
    },
});
