import React from "react";
import InfoContainer from "./InfoContainer";

const Main = (props) => {
  return (
    <main className="main">
      {props.markdownInfo.map((item) => {
        return (
          <InfoContainer
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
