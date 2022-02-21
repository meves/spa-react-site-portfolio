import { PhotosType, UserType } from '../types/types';

export type ResponseDataType<D={}> = {
    data: D
    resultCode: number
    messages: Array<string>
}
export type AuthMeType = {
    id: number
    email: string
    login: string
    
}
export type LoginType = {
    userId: number
}
export type LoadFileType = {
    photos: PhotosType
}

export type ResponseDataGetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
export type ResponseDataGetCaptchaUrlType = {
    url: string
}
