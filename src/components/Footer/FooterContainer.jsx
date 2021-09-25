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

const FooterContainer = connect(mapStateToProps, {})(Footer);

export default FooterContainer;
