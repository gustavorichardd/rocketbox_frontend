import axios from 'axios';

const api = axios.create({
    baseURL: 'https://semanaomnistack-seis.herokuapp.com'
});

export default api;
