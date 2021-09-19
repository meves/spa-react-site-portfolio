import Header from "./Header";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        logo: state.headerPage.logo,
        heading: state.headerPage.heading,
        login: state.headerPage.login
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
