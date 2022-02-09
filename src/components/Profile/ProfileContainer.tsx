import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getUserProfile, getUserStatus, updateUserStatus, loadFile, saveProfileData } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAithRedirect';
import { compose } from 'redux';
import { receiveProfile, receiveMessage, receiveStatus } from '../../redux/selectors/profile-selectors';
import { receiveAuthId } from '../../redux/selectors/auth-selectors';
import { ProfileType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
    message: string  // ->
    profile: ProfileType // ->
    status: string  // ->
    authId: number | null // ! ->
    match: any // !
    getUserProfile: (userId: number) => void // !
    getUserStatus: (userId: number) => void // !
    updateUserStatus: (status: string) => void  // ->
    loadFile: (photoFile: any) => void  // ->
    saveProfileData: (profile: ProfileType) => Promise<boolean> // ->
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.authId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return (
            <Profile isOwner={!this.props.match.params.userId} {...this.props} />
        );    
    }      
}

type MapStatePropsType = {
    message: string
    profile: ProfileType | null
    status: string
    authId: number | null
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
        message: receiveMessage(state),
        profile: receiveProfile(state),
        status: receiveStatus(state),
        authId: receiveAuthId(state)
})

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    loadFile: (photoFile: any) => void
    saveProfileData: (profile: ProfileType) => void
}

export default compose (
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>( mapStateToProps,
          { getUserProfile, getUserStatus, updateUserStatus, loadFile, saveProfileData }), 
    withRouter, 
    withAuthRedirect)(ProfileContainer);
