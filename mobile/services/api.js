import axios from 'axios';

const api= axios.create({
   // baseURL:'http://192.168.2.6:3333'
   baseURL:'http://192.168.1.11:3333'
});

export default api;