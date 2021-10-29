import React from 'react';
import style from './Users.module.scss';
import { NavLink } from 'react-router-dom';
import { URL } from '../../redux/users-reducer';

const User = (props) => {
    const { user, followingProgress, follow, unfollow } = props;
    return (
        <div className={style.userItem} key={user.id}>
            <div className={style.userProfile}>
                <NavLink to={`/profile/${user.id}`} >
                    <img className={style.image} 
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
            <div className={style.userInfo}>
                <div className={style.fullInfo}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={style.location}>
                    <div>{'user.location.country'}</div>    
                    <div>{'user.location.city'}</div>
                </div>    
            </div>       
        </div>        
    );
}

export default User;
