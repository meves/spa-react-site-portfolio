import React from 'react';
import style from './Users.module.scss';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../Paginator/Paginator';
import User from './User';

const Users = (props) => {               
    return (
        <div className={style.users}>
            <h2>Users</h2>
            <Paginator totalCount={props.totalCount} count={props.count}
                       currentPage={props.currentPage} handlePageNumberClick={props.handlePageNumberClick}/>
            <div className={style.itemsWrapper}>
                <Preloader isFetching={props.isFetching}/>
                { props.users.map(user => 
                    <User key={user.id} user={user} followingProgress={props.followingProgress}
                          follow={props.follow} unfollow={props.unfollow} />
                )}
            </div>
            <div className={style.button}><button>Show more...</button></div>
        </div>
    );
}

export default Users;
