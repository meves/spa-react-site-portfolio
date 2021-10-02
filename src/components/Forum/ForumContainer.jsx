import React from 'react';
import { Redirect } from 'react-router-dom';
import Forum from "./Forum";
import { connect } from "react-redux";

class ForumContainer extends React.Component {
    render() {
        if (!this.props.isAuth) {
            return (
                <Redirect to="/login" />
            );
        }
        return (
            <Forum {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.forumPage.message,
        isAuth: state.auth.isAuth
    };
}

export default connect(mapStateToProps, {})(ForumContainer);
