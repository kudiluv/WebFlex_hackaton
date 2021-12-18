import jwt from 'jwt-decode';

const TokenService = {
    getRefreshToken: () => {
        return localStorage.getItem('refreshToken');
    },
    getAccessToken: () => {
        return localStorage.getItem('accessToken');
    },
    updateAccessToken: (token) => {
        localStorage.setItem("accessToken", token);
    },
    removeTokens: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    },
    decodeAccessToken: (token) => {
        if (token)
            return jwt(token).data;
        else 
            return {
                id: "",
                role: "",
                email: "",
            }
    }
}

export default TokenService;