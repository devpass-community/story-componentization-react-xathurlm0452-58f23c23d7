import React from "react";

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
