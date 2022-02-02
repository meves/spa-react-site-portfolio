import Navbar from "./Navbar";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { receiveTitles } from "../../redux/selectors/navbar-selectors";

const mapStateToProps = (state) => {
    return {
        titles: receiveTitles(state)
    };
}

export default compose( connect(mapStateToProps, {}) )(Navbar);;
