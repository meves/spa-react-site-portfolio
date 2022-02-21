import { ProfileType } from "../types/types";
import { instance } from "./api";
import { LoadFileType, ResponseDataType } from "./types";

export const profileAPI = {
    async getUserProfile(userId: number) {
        const response = await instance.get<ProfileType>(`profile/${userId}`);
        return response.data;
    },
    async getUserStatus(userId: number) {
        const response = await instance.get<string>(`profile/status/${userId}`);
        return response.data;
    },
    async updateUserStatus(status: string) {
        const response = await instance.put<ResponseDataType>(`profile/status`, {status});
        return response.data;
    },
    async loadFile(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);
        const response = await instance.put<ResponseDataType<LoadFileType>>('profile/photo', formData, 
            {headers: {'Content-Type': 'multipart/form-data'}});
        return response.data;
    },
    async saveProfile(profile: ProfileType) {
        const response = await instance.put<ResponseDataType>('profile', profile);
        return response.data;
    }
};
