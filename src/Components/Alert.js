import React from "react";

const capatilize = (word) => {
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

function Alert(props) {
  return (
    props.alert && ( //Syntax for checking for null check
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capatilize(props.alert.type)}: </strong>
        {props.alert.currentMessage}
      </div>
    )
  );
}

export default Alert;
