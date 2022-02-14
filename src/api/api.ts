import axios from 'axios';
import { ResponseDataAuthMeType, ResponseDataEmptyType, ResponseDataGetCaptchaType, ResponseDataGetUsersType, ResponseDataLoadFileType, ResponseDataLoginType } from '../types/apiTypes';
import { ProfileType } from '../types/types';

const ax = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "a4367af1-edc7-4a2a-bdcc-eb84478de1f8"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = { 
    async getUsers(page: number, count: number) {
        const response = await ax.get<ResponseDataGetUsersType>(`users?page=${page}&count=${count}`);
        return response.data;
    }
};
export const followAPI = {
    async followUser(userId: number) {
        const response = await ax.post<ResponseDataEmptyType>(`follow/${userId}`);
        return response.data;
    },
    async unfollowUser(userId: number) {
        const response = await ax.delete<ResponseDataEmptyType>(`follow/${userId}`);
        return response.data;
    }
}; 

export const authAPI = {
    async authMe() {
        const response = await ax.get<ResponseDataAuthMeType>(`auth/me`);
        return response.data;
    },
    async login(email: string, password: string, rememberMe: boolean, captcha: boolean|undefined) {
        const response = await ax.post<ResponseDataLoginType>(`auth/login`, {email, password, rememberMe, captcha});
        return response.data;
    },
    async logout() {
        const response = await ax.delete<ResponseDataEmptyType>(`auth/login`);
        return response.data;
    },
    async getCaptcha() {
        const response = await ax.get<ResponseDataGetCaptchaType>(`security/get-captcha-url`);
        return response.data;
    }
};

export const profileAPI = {
    async getUserProfile(userId: number) {
        const response = await ax.get<ProfileType>(`profile/${userId}`);
        return response.data;
    },
    async getUserStatus(userId: number) {
        const response = await ax.get<string>(`profile/status/${userId}`);
        return response.data;
    },
    async updateUserStatus(status: string) {
        const response = await ax.put<ResponseDataEmptyType>(`profile/status`, {status});
        return response.data;
    },
    async loadFile(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile);
        const response = await ax.put<ResponseDataLoadFileType>('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}});
        return response.data;
    },
    async saveProfile(profile: ProfileType) {
        const response = await ax.put<ResponseDataEmptyType>('profile', profile);
        return response.data;
    }
};
