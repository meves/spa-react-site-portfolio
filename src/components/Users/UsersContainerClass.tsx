import React from 'react';
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, unfollow, getUsers, getCurrentPageUsers} from "../../redux/users-reducer";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAithRedirect';
import { receiveUsers, receiveCurrentPage, receiveCount, receiveTotalCount,
         receiveIsFetching, receiveFollowingProgress } from '../../redux/selectors/users-selectors';
import { AppStateType } from '../../redux/redux-store';
import { UserType } from '../../types/types';

type PropsType = {
    users: Array<UserType>
    currentPage: number  // ! ->
    count: number       // ! ->
    totalCount: number  // ->
    isFetching: boolean
    followingProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, count: number) => void  // !
    getCurrentPageUsers: (currentPage: number, count: number) => void  // !
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.count);        
    }
    handlePageNumberClick = (currentPage: number) => {
        this.props.getCurrentPageUsers(currentPage, this.props.count);        
    }
    render () {
        return (
            <Users {...this.props} handlePageNumberClick={this.handlePageNumberClick}/>
        );
    }
}

type MapStatePropsType = {
    users: Array<UserType>
    currentPage: number
    count: number
    totalCount: number
    isFetching: boolean
    followingProgress: Array<number>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: receiveUsers(state),
    currentPage: receiveCurrentPage(state),
    count: receiveCount(state),
    totalCount: receiveTotalCount(state),
    isFetching: receiveIsFetching(state),
    followingProgress: receiveFollowingProgress(state)
})

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, count: number) => void
    getCurrentPageUsers: (currentPage: number, count: number) => void
}

export default compose( 
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
        (mapStateToProps, { follow, unfollow, getUsers, getCurrentPageUsers }),
    withAuthRedirect )(UsersContainer);
