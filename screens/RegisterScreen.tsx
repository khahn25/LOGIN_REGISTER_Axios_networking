import { useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import axios from "axios"
import {registerApi} from '../services/authentication'

const RegisterScreen = ({ navigation }) => { 
  
    const [ name, setName ] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")
    const [ rePassword, setRePassword ] = useState<string>("")

    const register = () => {

        if(password !== rePassword) {
            alert("Mật khẩu không khớp")
            return
        }
        
        registerApi({
            name, email, password
        }).then(response => {
            const {data} = response
            navigation.navigate("LoginScreen")
        }).catch(error => {
            const responseData = error.response.data
            alert(responseData.message)
        })  
    }

    return (<View style={styles.container}>
        <Text style={styles.mainText}>Đăng ký</Text>
        <View style={styles.content}>
            <Text style={styles.label}>Họ và tên</Text>
            <TextInput value={name} onChangeText={(value) => {
                setName(value)
            }} placeholder="" style={styles.input} />
            <Text style={styles.label}>Nhập email</Text>
            <TextInput value={email} onChangeText={(value) => {
                setEmail(value)
            }} placeholder="" style={styles.input} />
            <Text style={styles.label}>Nhập mật khẩu</Text>
            <TextInput value={password} onChangeText={(value) => {
                setPassword(value)
            }} placeholder="" style={styles.input} />
            <Text style={styles.label}>Nhập lại mật khẩu</Text>
            <TextInput value={rePassword} onChangeText={(value) => {
                setRePassword(value)
            }} placeholder="" style={styles.input} />
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={register}>
                <Text>Đăng ký</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text>Nhập lại</Text>
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
export default RegisterScreen