import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(response => this.props.setUserProfile(response.data));
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.profilePage.message,
        profile: state.profilePage.profile
    };
}

const WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithRouterProfileContainer);
