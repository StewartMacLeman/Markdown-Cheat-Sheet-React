import React from "react";
import ItemContainer from "./ItemContainer";

const Main = (props) => {
  return (
    <main className="main">
      {props.markdownInfo.map((item) => {
        return (
          <ItemContainer
            key={item.id}
            h3Title={item.h3Title}
            code={item.code}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
          />
        );
      })}
    </main>
  );
};

export default Main;
