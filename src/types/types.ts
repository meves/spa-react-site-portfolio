export type MessageType = {
    id: number
    avatarUrl: string
    name: string
    theme: string
    message: string
}
export type MessageForumType = {
    name: string
    theme: string
    message: string
}
export type AboutMeType = {
    heading: string
    imageUrl: string
    text: string
}
export type ItemSkillType = {
    id: number
    item: string
}
export type SkillsType = {
    heading: string
    items: Array<ItemSkillType>
}
export type WorksType = {
    heading: string
    preview: string
    desc: string
    ref: string
}
export type NavbarTitleType = {
    id: number
    title: string
}
export type PostType = {
    id: number
    avatarUrl: string
    theme: string
    text: string
    date: string
}
export type MyPostType = {
    title: string
    posts: Array<PostType>
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}