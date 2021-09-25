import React from "react";
         
const AddPost = (props) => {
    const handleFocus = (event) => {
        if (event.target.name === 'theme') {
            props.clearTheme();
        }
        if (event.target.name === 'text') {
            props.clearText();
        }            
    };
    
    const handleBlur = (event) => {
        if (event.target.name === 'theme') {
            props.fillTheme();
        }
        if (event.target.name === 'text') {
            props.fillText();
        }
    };             
             
    const handleChange = (event) => {
        let text = event.target.value;
        if (event.target.name === 'theme') {
            props.addSymbolToTheme(text);
        }
        if (event.target.name === 'text') {
            props.addSymbolToText(text);
        }
    };

    const handleClickButton = () => {
        props.addNewPost();
    };        

    return (
        <section className="addPost">
            <h3>{props.title}</h3>
            
            <div><textarea cols="30" rows="1" 
                           placeholder={props.placeholderTheme}
                           name="theme"
                           onFocus={handleFocus}
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={props.symbolsTheme}/></div>
                             
            <div><textarea cols="30" rows="3" 
                           placeholder={props.placeholderText}
                           name="text"
                           onFocus={handleFocus}
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={props.symbolsText}/></div>
            
            <div><button onClick={handleClickButton}>{props.button}</button></div>
        </section>
    );
};

export default AddPost;
