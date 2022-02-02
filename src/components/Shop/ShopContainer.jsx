import Shop from "./Shop";
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAithRedirect';
import { compose } from 'redux';
import { receiveMessage } from "../../redux/selectors/shop-selectors";

const mapStateToProps = (state) => {
    return {
        message: receiveMessage(state)
    };
}

export default compose( connect(mapStateToProps, {}), withAuthRedirect )(Shop);
