import Main from "./Main";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        message: state.mainPage.message,
        about: state.mainPage.about,
        skills: state.mainPage.skills,
        works: state.mainPage.works
    };
}

const MainContainer = connect(mapStateToProps, {})(Main);

export default MainContainer;
