import React from 'react';
import style from './Users.module.scss';
import { URL } from '../../redux/users-reducer';
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => this.props.loadUsers(response.data.items));
    }
    
    render() {
        const usersItems = this.props.users.map(user => 
            <div className={style.userItem} key={user.id}>
                <div className={style.userProfile}>
                    <img className={style.image} src={user.photos.small != null ? user.photos.small : URL} alt="User" />
                    {user.followed ? <p><button onClick={()=>this.props.unfollowUser(user.id)}>{'Unfollow'}</button></p>
                                : <p><button onClick={()=>this.props.followUser(user.id)}>{'Follow'}</button></p>
                    }
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

        return (
            <div className={style.users}>
                <h2>Users</h2>
                {usersItems}
                <div className={style.button}><button>Show more...</button></div>
            </div>
        );
    }
}

export default Users;
