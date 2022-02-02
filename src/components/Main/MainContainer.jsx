import Main from "./Main";
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAithRedirect';
import { compose } from 'redux';
import { receiveWorks, receiveAbout, receiveMessage, receiveSkills } from "../../redux/selectors/main-selectors";

const mapStateToProps = (state) => {
    return {
        message: receiveMessage(state),
        about: receiveAbout(state),
        skills: receiveSkills(state),
        works: receiveWorks(state)
    };
}

export default compose( connect(mapStateToProps, {}), withAuthRedirect )(Main);
