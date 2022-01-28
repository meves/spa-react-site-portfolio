import React, { useState }  from 'react';
import style from './Profile.module.scss';
import AddPost from './AddPost/AddPost';
import PostsContainer from './Posts/PostsContainer';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileData from './ProfileData/ProfileData';
import ProfileForm from './ProfileForm/ProfileForm';
import Preloader from '../common/Preloader/Preloader';

const Profile = (props) => {
    const [editMode, setEditMode] = useState(false);
    const switchOnEditMode = editMode => {
        setEditMode(editMode);
    }
    const onSubmit = formData => {
        formData.userId = props.authId;
        props.saveProfileData(formData)
            .then(result => {
                setEditMode(result);
            });
    }
    return (
        <section className={style.sectionBlog}>    
            {!props.profile ? <Preloader/> : 
                <>            
                    <ProfileStatus updateUserStatus={props.updateUserStatus} status={props.status} />
                    {editMode  
                    ? <ProfileForm onSubmit={onSubmit} switchOnEditMode={switchOnEditMode} 
                                   contacts={props.profile.contacts} initialValues={props.profile}/>  
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
