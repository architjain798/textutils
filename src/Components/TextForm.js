import React, { useState } from "react";

let darkMode = {
  backgroundColor: "white",
  color: "black",
};

export const TextForm = (props) => {
  const [text, setText] = useState("");

  const [currentTheme, changeTheme] = useState(darkMode);

  const [darkBtn, changeDarkBtn] = useState("Enable Light Mode");

  const changeColor = () => {
    if (currentTheme.backgroundColor === "black") {
      changeTheme({
        backgroundColor: "white",
        color: "black",
      });
      changeDarkBtn("Enable Dark Mode");
    } else {
      changeTheme({
        backgroundColor: "black",
        color: "white",
      });
      changeDarkBtn("Enable Light Mode");
    }
  };

  const handleUpperClick = () => {
    setText(text.toUpperCase());
    props.setAlert("Changed to Upper case", "success");
  };
  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.setAlert("Changed to Lower case", "success");
  };
  const handleCamelClick = () => {
    setText(text.toUpperCase());
    props.setAlert("Changed to Camel case", "success");
  };
  const handleOnchange = (e) => {
    setText(e.target.value);
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleTextAreaClick = () => {
    if (text === "Enter the Text" || text === "Enter the Text".toUpperCase())
      setText("");
  };
  const handleCopy = () => {
    /* Get the text field */
    var copyText = document.getElementById("myBox");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    props.setAlert("Text copied!!", "success");
  };
  return (
    <>
      <div
        style={
          props.mode === "dark"
            ? {
                backgroundColor: "black",
                color: "white",
              }
            : {
                backgroundColor: "white",
                color: "black",
              }
        }
      >
        <h1 className="text-center my-2">{props.heading}</h1>
        <div className="form-floating my-3">
          <textarea
            value={text}
            onClick={handleTextAreaClick}
            onChange={handleOnchange}
            className="form-control"
            placeholder="Leave a comment here"
            id="myBox"
            style={
              props.mode === "dark"
                ? {
                    backgroundColor: "black",
                    color: "white",
                    height: "100px",
                  }
                : {
                    backgroundColor: "white",
                    color: "black",
                    height: "100px",
                  }
            }
          />
          <label htmlFor="myBox">Add Text</label>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpperClick}
        >
          Covert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowerClick}
        >
          Covert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleCamelClick}
        >
          Covert to CamelCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2 my-2"
          onClick={handleClearClick}
        >
          CLEAR
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2 my-2"
          onClick={() => {
            props.toggleMode();
            changeColor();
          }}
        >
          {darkBtn}
        </button>
      </div>
      <div
        className="my-2"
        style={
          props.mode === "dark"
            ? {
                backgroundColor: "black",
                color: "white",
              }
            : {
                backgroundColor: "white",
                color: "black",
              }
        }
      >
        <h4 className="text-center">YOUR FINAL TEXT</h4>
        <p>{text}</p>
        <h4>
          Your text has{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </h4>
      </div>
    </>
  );
};
