import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAithRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.authId || null;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return (
            <Profile {...this.props} />
        );    
    }      
}

const mapStateToProps = (state) => {
    return {
        message: state.profilePage.message,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authId: state.auth.id
    };
}

export default compose (
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}), 
    withRouter, 
    withAuthRedirect)(ProfileContainer);
