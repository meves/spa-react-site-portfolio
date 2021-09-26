import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import { usersAPI } from '../../api/api';
import { setUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        usersAPI.getUserProfile(userId).then(data => this.props.setUserProfile(data));
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
