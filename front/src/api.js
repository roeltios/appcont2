import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/contacts',
  headers: { 'Content-Type': 'application/json' }
});

export const getContacts = () => api.get('/');
export const createContact = (data) => api.post('', data);
