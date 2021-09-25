import React from 'react';
import style from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        );
    }
    return (
        <div className={style.profileInfo}>            
            <img src={props.profile.photos.small || props.profile.photos.large || props.profile.fullName} 
                 alt={props.profile.fullName} />
            <p>{props.profile.aboutMe}</p>
            {props.profile.lookingForAJob ? <p>{props.profile.lookingForAJobDescription}</p> : null}
            <div className={style.contacts}>
                    <a href={`https://www.${props.profile.contacts.facebook}`}>Facebook</a>
                    <a href={`https://www.${props.profile.contacts.website}`}>Website</a>
                    <a href={`https://www.${props.profile.contacts.vk}`}>VK</a>
                    <a href={`https://www.${props.profile.contacts.twitter}`}>Twitter</a>
                    <a href={`https://www.${props.profile.contacts.instagram}`}>Instagram</a>
                    <a href={`https://www.${props.profile.contacts.youtube}`}>Youtube</a>
                    <a href={`https://www.${props.profile.contacts.github}`}>Github</a>
                    <a href={`https://www.${props.profile.contacts.mainLink}`}>MainLink</a>
                </div>
        </div>
    );
}

export default ProfileInfo;
