import React, { FC, useState, useEffect, ChangeEvent} from 'react';
import style from './ProfileStatus.module.scss';

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileStatus: FC<PropsType> = (props): JSX.Element => {
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);        
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let text: string = event.currentTarget.value;
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
