import React from "react";

import placeholderImg from "../images/dog_walking.svg";
const DogItem = (props) => {
    return (
      <img
        src={props.imgSrc}
        className="img-thumbnail w-25"
        alt={props.alt}
      />
    );
};

export default DogItem;
