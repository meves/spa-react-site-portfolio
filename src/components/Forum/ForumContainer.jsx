import Forum from "./Forum";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAithRedirect";
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        message: state.forumPage.message
    };
}

 export default compose(connect(mapStateToProps, {}),
                        withAuthRedirect)(Forum);
