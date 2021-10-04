import React from 'react';
import style from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import ProfilePhoto from '../../../assets/images/avatar.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        );
    }
    const links = [];
    for (let [key, value] of Object.entries(props.profile.contacts)) {
        if (value !== null) {
            links.push(<a href={value} key={key}>{key}</a>);
        }
    }    
    return (
        <div className={style.profileInfo}>            
            <img src={props.profile.photos.small || props.profile.photos.large || ProfilePhoto || props.profile.fullName} 
                 alt={props.profile.fullName} />
            <ProfileStatus {...props} />
            <p>{props.profile.aboutMe}</p>
            {props.profile.lookingForAJob ? <p>{props.profile.lookingForAJobDescription}</p> : null}
            <div className={style.contacts}>
                { links }
            </div>
        </div>
    );
}

export default ProfileInfo;
