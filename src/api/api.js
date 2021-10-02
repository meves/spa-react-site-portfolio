import * as axios from 'axios';

const ax = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "a4367af1-edc7-4a2a-bdcc-eb84478de1f8"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {    
    getUserProfile(userId) {
        return ax.get(`profile/${userId}`).then(response => response.data);
    },
    unfollowUser(userId) {
        return  ax.delete(`follow/${userId}`).then(response => response.data);
    },
    followUser(userId) {
        return ax.post(`follow/${userId}`).then(response => response.data);
    },
    getUsers(page, count) {
        return ax.get(`users?page=${page}&count=${count}`).then(response => response.data);
    }
};

export const authAPI = {
    authMe() {
        return ax.get(`auth/me`).then(response => response.data);
    }
};
