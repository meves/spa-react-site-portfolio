import React, { useEffect } from 'react';
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, unfollow, getUsers, getCurrentPageUsers} from "../../redux/users-reducer";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAithRedirect';
import { receiveUsers, receiveCurrentPage, receiveCount, receiveTotalCount,
         receiveIsFetching, receiveFollowingProgress } from '../../redux/selectors/users-selectors';

const UsersContainer = (props) => {    
    useEffect(() => {
        props.getUsers(props.currentPage, props.count);        
    }, [props.currentPage, props.count, props]);   
    const handlePageNumberClick = (currentPage) => {
        props.getCurrentPageUsers(currentPage, props.count);        
    }
    return (
        <Users {...props} handlePageNumberClick={handlePageNumberClick}/>
    );    
}

const mapStateToProps = (state) => {
    return {
        users: receiveUsers(state),
        currentPage: receiveCurrentPage(state),
        count: receiveCount(state),
        totalCount: receiveTotalCount(state),
        isFetching: receiveIsFetching(state),
        followingProgress: receiveFollowingProgress(state)
    };
}

export default compose( connect(mapStateToProps, { follow, unfollow, getUsers, getCurrentPageUsers }),
                        withAuthRedirect )(UsersContainer);
