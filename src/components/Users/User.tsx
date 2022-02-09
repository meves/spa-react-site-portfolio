import React, { FC } from 'react';
import styles from './Users.module.scss';
import { NavLink } from 'react-router-dom';
import { URL } from '../../redux/users-reducer';
import { UserType } from '../../types/types';

type PropsType = {
    user: UserType
    followingProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const User: FC<PropsType> = (props): JSX.Element => {
    const { user, followingProgress, follow, unfollow } = props;
    return (
        <div className={styles.userItem} key={user.id}>
            <div className={styles.userProfile}>
                <NavLink to={`/profile/${user.id}`} >
                    <img className={styles.image} 
                         src={user.photos.small !== null ? user.photos.small : URL} 
                         alt="User" />
                </NavLink>
                {user.followed ? 
                    <p><button disabled={followingProgress.some(id => id === user.id)}
                               onClick={ () => { unfollow(user.id) } }>
                               {'Unfollow'}
                    </button></p> :
                    <p><button disabled={followingProgress.some(id => id === user.id)} 
                               onClick={ () => { follow(user.id); } }>
                               {'Follow'}
                    </button></p> }
            </div> 
            <div className={styles.userInfo}>
                <div className={styles.fullInfo}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={styles.location}>
                    <div>{'user.location.country'}</div>    
                    <div>{'user.location.city'}</div>
                </div>    
            </div>       
        </div>        
    );
}

export default User;
