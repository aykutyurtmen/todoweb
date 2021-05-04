import RestClient from "../utils/RestClient"
import Events from "./Events";

const api = new RestClient("http://localhost:8080/api/", {
    'Content-Type': 'application/json',
})

api.api.axiosInstance.interceptors.response.use(config => config, function (error) {
    if (error.response.status === 401) {
        Events.emit('unauthorized');
    }
    return error;
})

const Service = (credentials = {}) => {

    const makeRequest = (method, path, body = {}, customHeaders = {}) => {
        const headers = {
            'Authorization': localStorage.getItem('token') || ""
        };

        return api[method.toLowerCase()](path, body, {...headers, ...customHeaders})
    }

    return {
        login: async params => {
            return makeRequest('POST', 'auth/signin', params);
        },
        logout: async (username) => {
            return makeRequest('DELETE', `auth/signout?username=${username}`);
        },
        signUp: async (params) => {
            return makeRequest('POST', `auth/signup`, params);
        },
    }
}

export default Service;
