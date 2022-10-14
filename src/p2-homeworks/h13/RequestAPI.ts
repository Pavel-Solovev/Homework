import axios from 'axios'

type ResponseType = {
    errorText: string,
    info: string,
    yourBody: {
        success: boolean
    },
    yourQuery: {}
}


const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
})

export const API = {
    post(success: boolean) {
        return instance.post<ResponseType>('', {success})
    }
}
