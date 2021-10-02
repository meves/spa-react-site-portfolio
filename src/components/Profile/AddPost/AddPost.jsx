import React from "react";
         
const AddPost = (props) => {
    const onHandleFocus = (event) => {
        props.handleFocus(event.target.name);
    };
    
    const onHandleBlur = (event) => {
        props.handleBlur(event.target.name);
    };             
             
    const onHandleChange = (event) => {
        props.handleChange(event.target.name, event.target.value);
    };

    const onHandleClickButton = () => {
        props.addNewPost();
    };        

    return (
        <section className="addPost">
            <h3>{props.title}</h3>
            
            <div><textarea cols="30" rows="1" 
                           placeholder={props.placeholderTheme}
                           name="theme"
                           onFocus={onHandleFocus}
                           onBlur={onHandleBlur}
                           onChange={onHandleChange}
                           value={props.symbolsTheme}/></div>
                             
            <div><textarea cols="30" rows="3" 
                           placeholder={props.placeholderText}
                           name="text"
                           onFocus={onHandleFocus}
                           onBlur={onHandleBlur}
                           onChange={onHandleChange}
                           value={props.symbolsText}/></div>
            
            <div><button onClick={onHandleClickButton}>{props.button}</button></div>
        </section>
    );
};

export default AddPost;
