import axios from "axios";

const instance = axios.create({
    baseURL: 'https://auth-backend-lesson.herokuapp.com/api',
    
});

const setToken = (token = '') => {
    if (token) {
        return instance.defaults.headers.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.authorization = '';
}

export const signup = async (data) => {
    const { data: result } = await instance.post('/users/signup', data);
    setToken(result.token);
    console.log(result);
    return result;
}