import Header from "./Header";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        logo: state.headerPage.logo,
        heading: state.headerPage.heading,
        login: state.headerPage.login
    };
}

const HeaderContainer = connect(mapStateToProps, {})(Header);

export default HeaderContainer;
