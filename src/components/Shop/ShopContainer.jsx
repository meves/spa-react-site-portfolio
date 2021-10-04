import Shop from "./Shop";
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAithRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        message: state.shopPage.message
    };
}

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(Shop);
