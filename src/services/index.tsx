// services/api.ts

import axios from 'axios';
import { UserData } from './types';

const BASE_URL = 'https://backend-app-evoe-2.onrender.com/';

const api = axios.create({
    baseURL: BASE_URL,
});

export const userService = {
    getUsers: async () => {
        return await api.get('/user/getAll');
    },
    createUser: async (userData: UserData) => {
        return await api.post('user/registerUser', userData);
    },
    editUser: async (userId: string, userData: UserData) => {
        return await api.put(`user/editUser/${userId}`, userData);
    },
    deletUser: async (userId: string) => {
        return await api.delete(`user/deleteUser/${userId}`);
    },
};


