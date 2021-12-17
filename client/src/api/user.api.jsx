import axios from "axios";
import instance from "./instance";

export const userApi = {
    registration: async (data) => {
        const response = await instance.post('/auth/register',{
            email: data.email,
            password: data.pass,
            username: data.username
        })
        if (response.status === 200)
            return response.data;
    },
    authentication: async (data) => {
        const response = await instance.post('/auth/login',{
            mail: data.email,
            pass: data.pass,
        })
        if (response.status === 200) 
            return response.data;
    }
}