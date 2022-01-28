import React, { useState, useEffect} from 'react';
import style from './ProfileStatus.module.scss';

const ProfileStatus = (props) => {
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);        
    const onChangeHandler = (event) => {
        let text = event.currentTarget.value;
        setStatus(text);
    }
    const activateMode = () => {
        setEditMode(true);
    }
    const deactivateMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);    
    return (
        <div>
            {!editMode ?
            <div>
                <span onClick={activateMode} className={style.userStatus}>
                    {props.status}
                </span>
            </div> :
            <div>                
                <input onChange={onChangeHandler} 
                       onBlur={deactivateMode}
                       value={status}
                       autoFocus 
                />
            </div>}
        </div>
    );    
}

export default ProfileStatus;
