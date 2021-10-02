import React from 'react';
import { Redirect } from 'react-router-dom';
import Main from "./Main";
import { connect } from 'react-redux';

class MainContainer extends React.Component {
    render() {
        if (!this.props.isAuth) {
            return (
                <Redirect to="/login" />
            );
        }
        return (
            <Main {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.mainPage.message,
        about: state.mainPage.about,
        skills: state.mainPage.skills,
        works: state.mainPage.works,
        isAuth: state.auth.isAuth
    };
}

export default connect(mapStateToProps, {})(MainContainer); 
