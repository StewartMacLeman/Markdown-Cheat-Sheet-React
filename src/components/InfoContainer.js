import React from "react";
import HiddenDiv from "./HiddenDiv";

const InfoContainer = (props) => {
  return (
    <div className="mkTopicCont">
      <h3>{props.h3Title}</h3>
      <HiddenDiv
        code={props.code}
        imgSrc={props.imgSrc}
        imgAlt={props.imgAlt}
      />
      <button>Hide Content</button>
    </div>
  );
};

export default InfoContainer;
