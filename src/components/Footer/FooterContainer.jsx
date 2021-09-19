import Footer from "./Footer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        author: state.footerPage.author,
        data: state.footerPage.data,
        email: state.footerPage.email,
        tel: state.footerPage.tel
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer;
