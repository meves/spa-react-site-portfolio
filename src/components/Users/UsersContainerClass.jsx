import React from 'react';
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, unfollow, getUsers, getCurrentPageUsers} from "../../redux/users-reducer";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAithRedirect';
import { receiveUsers, receiveCurrentPage, receiveCount, receiveTotalCount,
         receiveIsFetching, receiveFollowingProgress } from '../../redux/selectors/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.count);        
    }
    handlePageNumberClick = (currentPage) => {
        this.props.getCurrentPageUsers(currentPage, this.props.count);        
    }
    render () {
        return (
            <Users {...this.props} handlePageNumberClick={this.handlePageNumberClick}/>
        );
    }
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
