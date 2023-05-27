import React from "react";

const Button = (props) => {
    return (
      <button
            type="button"
            className="btn btn-primary mx-2"
            disabled={props.disable}
            onClick={props.onClick}
            style={{color: "#fff", cursor: "pointer"}}
          >
            Search
          </button>
    );
};

export default Button;