import axios from "axios"
import { loginUrl, registerUrl } from "./api"

interface RegisterBody { 
    name: string
    email: string
    password: string
}

interface LoginBody {
    email: string
    password: string
}

export const registerApi = ({ name, email, password } : RegisterBody) => {
    const registerRequest = axios({
        method: "POST",
        url: registerUrl,
        data: { name, email, password },
        headers: { 
            'Content-Type': 'application/json'
        },
    })
    return registerRequest
}

export const loginApi = ({ email, password }: LoginBody) => {
    const loginRequest = axios({
        method: "POST",
        url: loginUrl,
        data: { email, password },
        headers: { 
            'Content-Type': 'application/json'
        }
    })
    return loginRequest
}


