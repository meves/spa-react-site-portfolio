import Shop from "./Shop";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        message: state.shopPage.message
    };
}

const ShopContainer = connect(mapStateToProps, {})(Shop);

export default ShopContainer;
