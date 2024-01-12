import { useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import axios from "axios"
import {registerApi, loginApi} from '../services/authentication'
import { error } from "../backend/demo_backend/src/config/logger"

const LoginScreen = ({ navigation }) => { 
    const [email, setEmail] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")
   

    const login = async () => {
        try {
            const respone = await loginApi({ email, password })
            console.log(respone.data)    
        } catch(error : any) {
            if(error.response.data) {
                alert(`${error.response.data.code} : ${error.response.data.message}`)
            }
        }
        
        // loginApi({ email, password }).then(response => {
        //     console.log(response.data)
        // }).catch(error => {
        //     if(error.response.data) {
        //         alert(`${error.response.data.code} : ${error.response.data.message}`)
        //     }
        // })
        
    }
    return (<View style={styles.container}>
        <Text style={styles.mainText}>Đăng nhập</Text>
        <View style={styles.content}>
           
            <Text style={styles.label}>Nhập email</Text>
            <TextInput value={email} onChangeText={(value) => {
                setEmail(value)
            }} placeholder="" style={styles.input} />
            <Text style={styles.label}>Nhập mật khẩu</Text>
            <TextInput value={password} onChangeText={(value) => {
                setPassword(value)
            }} placeholder="" style={styles.input} />
            
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={login}>
                <Text>Đăng nhập</Text>
            </TouchableOpacity>
          
        </View>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20
    },
    mainText: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: "900"
    },
    content: {
        alignItems: "flex-start",
        width: "100%"
    },
    input: {
        borderWidth: 1,
        borderColor: "#bbb",
        padding: 5,
        borderRadius: 5,
        width: "100%"
    },
    label: {
        marginVertical: 10
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 20
    },
    button: {
        borderWidth: 1,
        borderColor: "#000",
        padding: 15,
        borderRadius: 5,
        backgroundColor: "pink",
        width: "45%",
        alignItems: "center"
    }
})
export default LoginScreen