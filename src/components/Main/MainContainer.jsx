import Main from "./Main";
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAithRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        message: state.mainPage.message,
        about: state.mainPage.about,
        skills: state.mainPage.skills,
        works: state.mainPage.works
    };
}

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(Main);
