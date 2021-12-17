import instance from "./instance";

export const userApi = {
    registration: async (data) => {
        const response = await instance.post('/auth/register',{
            email: data.email,
            password: data.pass,
            username: data.username
        })
        return response;
    },
    authentication: async (data) => {
        const response = await instance.post('/auth/login',{
            email: data.email,
            password: data.password,
        }) 
        return response.data;
    }
}