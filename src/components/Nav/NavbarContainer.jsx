import Navbar from "./Navbar";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        titles: state.navbarPage.titles
    };
}

const NavbarContainer = connect(mapStateToProps, {})(Navbar);

export default NavbarContainer;
