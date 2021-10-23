import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React, { useState, useEffect } from 'react';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAithRedirect';
import { compose } from 'redux';

const ProfileContainer = (props) => {
    const [userId, setUserId] = useState(props.authId);
    useEffect(() => {
        setUserId(props.match.params.userId || props.authId || null);
    }, [props.match.params.userId, props.authId]);
    useEffect(() => {
        props.getUserProfile(userId);
    });    
    useEffect(() => {
        props.getUserStatus(userId);
    });    
    
    return (
        <Profile {...props} />
    );    
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
