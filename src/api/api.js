import * as axios from 'axios';

const ax = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "a4367af1-edc7-4a2a-bdcc-eb84478de1f8"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = { 
    async getUsers(page, count) {
        const response = await ax.get(`users?page=${page}&count=${count}`);
        return response.data;
    }
};
export const followAPI = {
    async unfollowUser(userId) {
        const response = await ax.delete(`follow/${userId}`);
        return response.data;
    },
    async followUser(userId) {
        const response = await ax.post(`follow/${userId}`);
        return response.data;
    },
}; 

export const authAPI = {
    async authMe() {
        const response = await ax.get(`auth/me`);
        return response.data;
    },
    async login(email, password, rememberMe, captcha) {
        const response = await ax.post(`auth/login`, {email, password, rememberMe, captcha});
        return response.data;
    },
    async logout() {
        const response = await ax.delete(`auth/login`);
        return response.data;
    },
    async getCaptcha() {
        const response = await ax.get(`security/get-captcha-url`);
        return response.data;
    }
};

export const profileAPI = {
    async getUserProfile(userId) {
        const response = await ax.get(`profile/${userId}`);
        return response.data;
    },
    async getUserStatus(userId) {
        const response = await ax.get(`profile/status/${userId}`);
        return response.data;
    },
    async updateUserStatus(status) {
        const response = await ax.put(`profile/status`, {status});
        return response.data;
    },
    async loadFile(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        const response = await ax.put('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}});
        return response.data;
    },
    async saveProfile(profile) {
        const response = await ax.put('profile', profile);
        return response.data;
    }
};
