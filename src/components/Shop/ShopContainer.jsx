import Shop from "./Shop";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        message: state.shopPage.message
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);

export default ShopContainer;
