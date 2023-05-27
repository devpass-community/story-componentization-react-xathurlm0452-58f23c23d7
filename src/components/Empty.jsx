import React from "react";

import placeholderImg from "../images/dog_walking.svg";
const Empty = () => {
    return (
      <img
      src={placeholderImg}
      className="mx-auto d-block mt-4 w-50"
      alt=""
      />
    );
};

export default Empty;

