import React from "react";

const Loading = () => {

    return (
    <div className="d-flex align-items-center ">
        <p className="h1 me-2">Loading</p>
        <div
          className="spinner-border ms-auto text-primary fs-3"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
};

export default Loading;