import React, { FC, useEffect } from 'react';
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, unfollow, getUsers, getCurrentPageUsers} from "../../redux/users-reducer";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAithRedirect';
import { receiveUsers, receiveCurrentPage, receiveCount, receiveTotalCount,
         receiveIsFetching, receiveFollowingProgress } from '../../redux/selectors/users-selectors';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
    users: Array<UserType>  // ->
    currentPage: number  // !
    count: number       // !
    totalCount: number  // ->
    isFetching: boolean  // ->
    followingProgress: Array<number>  // ->
    follow: (userId: number) => void  // ->
    unfollow: (userId: number) => void  // ->
    getUsers: (currentPage: number, count: number) => void  // !
    getCurrentPageUsers: (currentPage: number, count: number) => void  // !
}

const UsersContainer: FC<PropsType> = (props): JSX.Element => {    
    useEffect(() => {
        props.getUsers(props.currentPage, props.count);        
    }, [props.currentPage, props.count, props]);   
    const handlePageNumberClick = (currentPage: number) => {
        props.getCurrentPageUsers(currentPage, props.count);        
    }
    return (
        <Users {...props} handlePageNumberClick={handlePageNumberClick}/>
    );    
}

type MapStatePropsType = {
    users: Array<UserType>
    currentPage: number
    count: number
    totalCount: number
    isFetching: boolean
    followingProgress: Array<number>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: receiveUsers(state),
        currentPage: receiveCurrentPage(state),
        count: receiveCount(state),
        totalCount: receiveTotalCount(state),
        isFetching: receiveIsFetching(state),
        followingProgress: receiveFollowingProgress(state)
    };
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, count: number) => void
    getCurrentPageUsers: (currentPage: number, count: number) => void
}

export default compose( 
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
        (mapStateToProps, 
         { follow, unfollow, getUsers, getCurrentPageUsers }),
    withAuthRedirect )(UsersContainer);
