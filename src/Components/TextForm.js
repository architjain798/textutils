import React, { useState } from 'react'


export const TextForm = (props) => {
    const [text, setText] = useState("Enter the Text");

    const handleClick = () => {
        setText(text.toUpperCase());
    }
    const handleOnchange = (e) => {
        setText(e.target.value);
    }
    const handleTextAreaClick = () => {
        if (text === "Enter the Text")
            setText("");
    }
    return (
        <div>
            <h1 className="text-center my-2">{props.heading}</h1>
            <div className="form-floating my-3">
                <textarea value={text} onClick={handleTextAreaClick} onChange={handleOnchange} className="form-control" placeholder="Leave a comment here" id="myBox" style={{ height: '100px' }} />
                <label htmlFor="myBox">Add Text</label>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Covert to UpperCase</button>
        </div>
    )
}
