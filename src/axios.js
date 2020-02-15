import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.onecricket.app/admin/news'
});

export default instance;