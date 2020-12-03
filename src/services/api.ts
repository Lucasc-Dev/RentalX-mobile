import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.rentalx.lucascesar.com.br',
});

export default api;