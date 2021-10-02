import React from 'react';
import style from './Users.module.scss';
import { URL } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    /**generate UserItems */
    const usersItems = props.users.map(user => 
        <div className={style.userItem} key={user.id}>
            <div className={style.userProfile}>
                <NavLink to={`/profile/${user.id}`} >
                    <img className={style.image} 
                         src={user.photos.small !== null ? user.photos.small : URL} 
                         alt="User" />
                </NavLink>
                {user.followed ? 
                    <p><button disabled={props.followingProgress.some(id => id === user.id)}
                               onClick={ () => { props.unfollow(user.id) } }>
                               {'Unfollow'}
                    </button></p> :
                    <p><button disabled={props.followingProgress.some(id => id === user.id)} 
                               onClick={ () => { props.follow(user.id); } }>
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
    /**generate Pagination Numbers */
    let numberOfPages = Math.ceil(props.totalCount / props.count);
    const pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
        const classes = `${style.paginationNumber} ` + 
            `${i === props.currentPage && style.currentNumber}`;
        pages.push(<div className={classes} key={i}
                    onClick={()=>{
                        props.onPageNumberClickHandler(i);                            
                    }}
                    >{i}</div>);
    }        
    return (
        <div className={style.users}>
            <h2>Users</h2>
            <div className={style.paginationWrapper}>
                {pages}
            </div>
            <div className={style.itemsWrapper}>
                <Preloader isFetching={props.isFetching}/>
                {usersItems}
            </div>
            <div className={style.button}><button>Show more...</button></div>
        </div>
    );
}

export default Users;
