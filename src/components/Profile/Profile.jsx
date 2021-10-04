import React from 'react';
import style from './Profile.module.scss';
import AddPostContainer from './AddPost/AddPostContainer';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <section className={style.sectionBlog}>
            {props.profile ? <h2>{props.profile.fullName}</h2> : <h2>{props.message}</h2>}
            <ProfileInfo {...props} />
            <AddPostContainer />
            <PostsContainer />
        </section>
    );
};

export default Profile;
