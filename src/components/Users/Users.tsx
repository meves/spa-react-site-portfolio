import React, { FC } from 'react';
import styles from './Users.module.scss';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../Paginator/Paginator';
import User from './User';
import { UserType } from '../../types/types';

type PropsType = {
    users: Array<UserType> // ! -> user
    currentPage: number  // ->
    count: number       // ->
    totalCount: number  // -> 
    isFetching: boolean  // ->
    followingProgress: Array<number>  // ->
    follow: (userId: number) => void  // ->
    unfollow: (userId: number) => void  // ->
    handlePageNumberClick: (currentPage: number) => void // ->
}

const Users: FC<PropsType> = (props): JSX.Element => {               
    return (
        <div className={styles.users}>
            <h2>Users</h2>
            <Paginator totalCount={props.totalCount} count={props.count}
                       currentPage={props.currentPage} handlePageNumberClick={props.handlePageNumberClick}/>
            <div className={styles.itemsWrapper}>
                <Preloader isFetching={props.isFetching}/>
                { props.users.map((user: UserType): JSX.Element => 
                    <User key={user.id} user={user} followingProgress={props.followingProgress}
                          follow={props.follow} unfollow={props.unfollow} />
                )}
            </div>
            <div className={styles.button}><button>Show more...</button></div>
        </div>
    );
}

export default Users;
