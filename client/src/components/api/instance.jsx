import axios from "axios";
import TokenService from "../tokenService/TokenService";

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'Application/json',
  }
});

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
},
(error) => {
  return Promise.reject(error);
});

instance.interceptors.response.use(
  responce => {
    return responce;
},
async (error) => {
  const config = error.config;
  if (config.url !== "/auth/login" && error.response) {
    if (error.responce.status === 401 && !config._retry) {
      error._retry = true;
      try {
        const refresh = await instance.post("auth/refresh", {
          refreshToken: TokenService.getRefreshToken(),
        });
        const accessToken = refresh.data.accessToken;
        TokenService.updateAccessToken(accessToken);
        return instance(config);
      } catch (err) {
        TokenService.removeTokens()
        return Promise.reject(err);
      }
    }
    return Promise.reject(error)
  }
})

export default instance;