import React from "react";

const HiddenDiv = (props) => {
     
  return (
    <div className={props.hidden ? "hide" : ""}>
      <h4>The Code:</h4>
      <div className={props.code.length === 1 ? "codeContOne": "codeContTwo"}>
          {props.code.map((item, index) => {
              return (
                  <code key={index}>{item}</code>
              )
          })}
      </div>
      <h4>The Outcome:</h4>
      <div className="outcomeImage">
        <img
          src={props.imgSrc}
          alt={props.imgAlt}
        />
      </div>
    </div>
  );
};

export default HiddenDiv;
