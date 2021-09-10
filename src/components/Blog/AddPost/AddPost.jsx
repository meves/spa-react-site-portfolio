import React from "react";
import { clearThemeActionCreator, clearTextActionCreator,
         fillThemeActionCreator, fillTextActionCreator,
         addSymbolToThemeActionCreator, addSymbolToTextActionCreator,
         addNewPostActionCreator} from "../../../redux/blog-reducer";

const AddPost = (props) => {
    const textAreaTextRef = React.createRef();
    const textAreaThemeRef = React.createRef();
    
    const handleFocus = (event) => {
        if (event.target.name === 'theme') {
            props.dispatch(clearThemeActionCreator());
        }
        if (event.target.name === 'text') {
            props.dispatch(clearTextActionCreator());
        }            
    };

    const handleBlur = (event) => {
        if (event.target.name === 'theme') {
            props.dispatch(fillThemeActionCreator());
        }
        if (event.target.name === 'text') {
            props.dispatch(fillTextActionCreator());
        }
    };

    const handleChange = (event) => {
        let text = event.target.value;
        if (event.target.name === 'theme') {
            props.dispatch(addSymbolToThemeActionCreator(text));
        }
        if (event.target.name === 'text') {
            props.dispatch(addSymbolToTextActionCreator(text));
        }
    };

    const handleClickButton = () => {
        props.dispatch(addNewPostActionCreator());
    };        

    return (
        <section className="addPost">
            <h3>{props.addPost.title}</h3>
            
            <div><textarea ref={textAreaThemeRef}cols="30" rows="1" 
                           placeholder={props.addPost.placeholderTheme}
                           name="theme"
                           onFocus={handleFocus}
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={props.addPost.symbolsTheme}/></div>
                             
            <div><textarea ref={textAreaTextRef} cols="30" rows="3" 
                           placeholder={props.addPost.placeholderText}
                           name="text"
                           onFocus={handleFocus}
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={props.addPost.symbolsText}/></div>
            
            <div><button onClick={handleClickButton}>{props.addPost.button}</button></div>
        </section>
    );
};

export default AddPost;
