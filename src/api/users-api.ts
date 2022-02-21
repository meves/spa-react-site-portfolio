import { instance } from "./api";
import { ResponseDataGetUsersType } from "./types";

export const usersAPI = { 
    async getUsers(page: number, count: number) {
        const response = await instance.get<ResponseDataGetUsersType>(`users?page=${page}&count=${count}`);
        return response.data;
    }
};