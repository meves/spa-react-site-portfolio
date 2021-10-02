import React from 'react';
import { Redirect } from 'react-router-dom';
import Shop from "./Shop";
import { connect } from 'react-redux';

class ShopContainer extends React.Component {
    render() {
        if (!this.props.isAuth) {
            return (
                <Redirect to="/login"/>
            );
        }
        return (
            <Shop {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.shopPage.message,
        isAuth: state.auth.isAuth
    };
}

export default connect(mapStateToProps, {})(ShopContainer);
