import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://192.168.127.8:3000',
});

export default httpRequest;
