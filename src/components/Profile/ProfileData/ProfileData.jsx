import React from 'react';
import Contact from './Contact';
import style from './ProfileData.module.scss';
import ProfilePhoto from '../../../assets/images/avatar.jpg';

const ProfileData = props => {
    const links = [];
    for (let [key, value] of Object.entries(props.profile.contacts)) {
        if (value !== null) {
            links.push(<Contact value={value} key={key} name={key}/>);
        }
    } 
    const onLoadPhoto = event => {
        const files = event.target.files;
        if (files.length === 1) {
            props.loadFile(files[0]);
        }
    }
    const handleCick = () => {
        props.switchOnEditMode(true);
    }
    return (
        <div className={style.profileInfo}>  
            {props.profile ? <h2>{props.profile.fullName}</h2> : <h2>{props.message}</h2>}          
            {props.isOwner && 
                <div>
                    <button onClick={handleCick}>Edit profile</button>
                </div>
            }
            <img src={props.profile.photos.small || props.profile.photos.large || ProfilePhoto || props.profile.fullName} 
                 alt={props.profile.fullName} />
            {props.isOwner && 
                <div>
                    <label>Load photo: </label><br/>
                    <input onChange={onLoadPhoto} type="file"/>
                </div>
            }
            <p>{props.profile.aboutMe}</p>
            {props.profile.lookingForAJob ? <p>{props.profile.lookingForAJobDescription}</p> : null}
            <div className={style.contacts}>
                { links }
            </div>
        </div>
    )
}

export default ProfileData;
