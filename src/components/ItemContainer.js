import React, {useState} from "react";
import HiddenDiv from "./HiddenDiv";

const ItemContainer = (props) => {
  const [hiddenDiv, setHiddenDiv] = useState(true);

  function showDivHandler(){
    setHiddenDiv(hiddenDiv => !hiddenDiv);
  }

  return (
    <div className="mkTopicCont">
      <h3>{props.h3Title}</h3>
      <HiddenDiv
        hidden={hiddenDiv}
        code={props.code}
        imgSrc={props.imgSrc}
        imgAlt={props.imgAlt}
      />
      <button onClick={showDivHandler}>
        {hiddenDiv ? "Show Content" : "Hide Content"}
        </button>
    </div>
  );
};

export default ItemContainer;
