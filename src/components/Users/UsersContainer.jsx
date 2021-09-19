import Users from "./Users";
import { connect } from 'react-redux';
import { followUserAC, unfollowUserAC, loadUsersAC } from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (id) => {
            dispatch(followUserAC(id));
        },
        unfollowUser: (id) => {
            dispatch(unfollowUserAC(id));
        },
        loadUsers: (users) => {
            dispatch(loadUsersAC(users));
        }
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
