import instance from "./instance";

export const lectureApi = {
    upload: async (data) => {
        const response = await instance.post(`/teacher/lectures`,data,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'multipart/form-data'
            }
        })
        return response;
    },
}