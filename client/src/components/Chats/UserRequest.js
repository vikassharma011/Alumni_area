import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('user')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser = (id, formData) =>  API.put(`/user/${id}`, formData);