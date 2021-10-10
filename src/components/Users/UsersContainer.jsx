import React from 'react';
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, unfollow, getUsers, getCurrentPageUsers} from "../../redux/users-reducer";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAithRedirect';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.count);        
    }
    onPageNumberClickHandler = (currentPage) => {
        this.props.getCurrentPageUsers(currentPage, this.props.count);        
    }
    render () {
        return (
            <Users {...this.props} onPageNumberClickHandler={this.onPageNumberClickHandler}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    };
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers, getCurrentPageUsers}),
    withAuthRedirect)(UsersContainer);
