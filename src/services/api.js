import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://desafio.eadplataforma.com/api/1/',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': '123456789'
    }, 
});

export default api;