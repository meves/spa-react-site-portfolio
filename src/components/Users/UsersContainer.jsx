import React from 'react';
import Users from "./Users";
import { usersAPI } from '../../api/api';
import { connect } from 'react-redux';
import { followUser, unfollowUser, loadUsers, 
         getTotalCount, resetUsers, setCurrentPage,
         setIsFetching, toggleFollowingProgress} from "../../redux/users-reducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        /**this request sended once after component was mounted */
        usersAPI.getUsers(this.props.currentPage, this.props.count).then(data => {
            this.props.setIsFetching(false);
            this.props.loadUsers(data.items);
            this.props.getTotalCount(data.totalCount);
        });
    }
    onPageNumberClickHandler = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.setIsFetching(true);
        /**this request sended when user cnanges current page */
        usersAPI.getUsers(currentPage, this.props.count).then(data => {
                    this.props.resetUsers(data.items);
                    this.props.setIsFetching(false);
                });
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

export default connect(mapStateToProps, {
    followUser, unfollowUser, loadUsers, getTotalCount, setCurrentPage, resetUsers, setIsFetching, toggleFollowingProgress
})(UsersContainer);
