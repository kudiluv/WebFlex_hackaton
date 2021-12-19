import instance from "./instance";

export const userApi = {
    registration: async (data) => {
        const response = await instance.post(`/auth/register/${data.id}`,{
            email: data.user.email,
            password: data.user.password,
        })
        return response;
    },
    authentication: async (data) => {
        const response = await instance.post('/auth/login',{
            email: data.email,
            password: data.password,
        }) 
        return response.data;
    },
    createUser: async (data) => {
        const response = await instance.post('/auth/create-user',{
            role: data.role,
            name: data.name,
        }) 
        return response.data;
    }
}