import Footer from "./Footer";
import { connect } from "react-redux";
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        author: state.footerPage.author,
        data: state.footerPage.data,
        email: state.footerPage.email,
        tel: state.footerPage.tel
    };
}

export default compose(connect(mapStateToProps, {})(Footer));
