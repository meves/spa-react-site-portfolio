import { instance } from './api';
import { AuthMeType, LoginType, ResponseDataGetCaptchaUrlType, ResponseDataType } from './types';

export const authAPI = {
    async authMe() {
        const response = await instance.get<ResponseDataType<AuthMeType>>(`auth/me`);
        return response.data;
    },
    async login(email: string, password: string, rememberMe: boolean, captcha: boolean|undefined) {
        const response = await instance.post<ResponseDataType<LoginType>>(`auth/login`, {email, password, rememberMe, captcha});
        return response.data;
    },
    async logout() {
        const response = await instance.delete<ResponseDataType>(`auth/login`);
        return response.data;
    },
    async getCaptcha() {
        const response = await instance.get<ResponseDataGetCaptchaUrlType>(`security/get-captcha-url`);
        return response.data;
    }
};
