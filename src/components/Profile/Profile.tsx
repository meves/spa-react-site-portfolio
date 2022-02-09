import React, { FC, useState }  from 'react';
import style from './Profile.module.scss';
import AddPost from './AddPost/AddPost';
import PostsContainer from './Posts/PostsContainer';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileData from './ProfileData/ProfileData';
import ProfileForm from './ProfileForm/ProfileForm';
import Preloader from '../common/Preloader/Preloader';
import { ProfileType } from '../../types/types';

type PropsType = {
    status: string  // ->
    message: string  // ->
    authId: number | null
    profile: ProfileType // ->
    isOwner: boolean  // ->
    saveProfileData: (profile: ProfileType) => Promise<boolean>  // !
    updateUserStatus: (status: string) => void  // ->
    loadFile: (photoFile: any) => void  // ->
}

const Profile: FC<PropsType> = (props): JSX.Element => {
    const [editMode, setEditMode] = useState(false);
    const switchOnEditMode = (editMode: boolean) => {
        setEditMode(editMode);
    }
    const onSubmit = (formData: any) => {
        formData.userId = props.authId;
        props.saveProfileData(formData)
            .then((result: boolean) => {
                setEditMode(result);
            });
    }
    return (
        <section className={style.sectionBlog}>    
            {!props.profile ? <Preloader isFetching /> : 
                <>            
                    <ProfileStatus updateUserStatus={props.updateUserStatus} status={props.status} />
                    {editMode  
                    ? <ProfileForm onSubmit={onSubmit} 
                                 //switchOnEditMode={switchOnEditMode} 
                                 //contacts={props.profile.contacts}
                                   initialValues={props.profile}/>  
                    : <ProfileData profile={props.profile} loadFile={props.loadFile} message={props.message} 
                                   isOwner={props.isOwner} switchOnEditMode={switchOnEditMode} />
                    }
                </>
            }
            <AddPost />
            <PostsContainer />
        </section>
    );
};

export default Profile;
