import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://job.kitactive.ru/api',
  headers: {
    Authorization: localStorage.getItem('token') === null ? null : `Bearer ${localStorage.getItem('token')}`
  }
});

export default instance;