import React, { useState } from 'react'


export const TextForm = (props) => {
    const [text, setText] = useState("Enter the Text");

    const handleUpperClick = () => {
        setText(text.toUpperCase());
    }
    const handleLowerClick = () => {
        setText(text.toLowerCase());
    }
    const handleCamelClick = () => {
        setText(text.toUpperCase());
    }
    const handleOnchange = (e) => {
        setText(e.target.value);
    }
    const handleTextAreaClick = () => {
        if (text === "Enter the Text" || text === text.toUpperCase())
            setText("");
    }
    return (
        <>
            <div>
                <h1 className="text-center my-2">{props.heading}</h1>
                <div className="form-floating my-3">
                    <textarea value={text} onClick={handleTextAreaClick} onChange={handleOnchange} className="form-control" placeholder="Leave a comment here" id="myBox" style={{ height: '100px' }} />
                    <label htmlFor="myBox">Add Text</label>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpperClick}>Covert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLowerClick}>Covert to LowerCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleCamelClick}>Covert to CamelCase</button>
                <button type="button" className="btn btn-danger mx-2" onClick={handleCamelClick}>CLEAR</button>
            </div>
            <div className="my-2">
                <h4 className="text-center">YOUR FINAL TEXT</h4>
                <p>{text}</p>
                <h4>Your text has {text.split(' ').length} words and {text.length} characters</h4>
            </div>
        </>
    )
}
