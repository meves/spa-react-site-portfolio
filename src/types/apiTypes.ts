import { PhotosType, UserType } from './types';

export type ResponseDataGetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
export type ResponseDataEmptyType = {
    data: {}
    resultCode: number
    messages: Array<string>
}
export type ResponseDataAuthMeType = {
    data: {
      id: number
      email: string
      login: string
    }
    resultCode: number
    messages: Array<string>
}
export type ResponseDataLoginType = {
    data: {
        userId: number
    }
    resultCode: number
    messages: Array<string>
}
export type ResponseDataGetCaptchaType = {
    url: string
}
export type ResponseDataLoadFileType = {
    data: {
        photos: PhotosType
    }
    resultCode: number
    messages: string
}