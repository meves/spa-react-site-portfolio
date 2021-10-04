import Navbar from "./Navbar";
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        titles: state.navbarPage.titles
    };
}

export default compose(connect(mapStateToProps, {}))(Navbar);;
