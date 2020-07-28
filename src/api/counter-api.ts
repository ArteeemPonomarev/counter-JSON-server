import axios from 'axios';

type ResponseType = {
    value: number
}

const instance = axios.create({
    baseURL: 'http://localhost:3004'
})

export const counterApi = {
    getCounterValue() {
        return instance.get<ResponseType>('/counter').then(res => res.data)
    },

    incrementCounter(value: number) {
        return instance.post<ResponseType>('/counter', {value})
    }
}


