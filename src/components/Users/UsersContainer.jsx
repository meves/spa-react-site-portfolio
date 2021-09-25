import React from 'react';
import Users from "./Users";
import * as axios from 'axios';
import { connect } from 'react-redux';
import { followUser, unfollowUser, loadUsers, 
         getTotalCount, resetUsers, setCurrentPage,
         setIsFetching } from "../../redux/users-reducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        /**this request sended once after component was mounted */
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`).then(response => {
            this.props.setIsFetching(false);
            this.props.loadUsers(response.data.items);
            this.props.getTotalCount(response.data.totalCount);
        });
    }
    onPageNumberClickHandler = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.setIsFetching(true);
        /**this request sended when user cnanges current page */
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.count}`)
                .then(response => {
                    this.props.resetUsers(response.data.items);
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
        isFetching: state.usersPage.isFetching
    };
}

export default connect(mapStateToProps, {
    followUser, unfollowUser, loadUsers, getTotalCount, setCurrentPage, resetUsers, setIsFetching
})(UsersContainer);
