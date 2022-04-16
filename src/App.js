import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

let contentData = [
  {
    id: "md1",
    h3Title: "H1 Heading",
    h4CodeTitle: "The Code:",
    code: ["# This is an h1 Heading"],
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/h1_header.png",
    imgAlt: "An example of what an h1 header looks like."
  },
  {
    id: "md2",
    h3Title: "H2 Heading",
    h4CodeTitle: "The Code:",
    code: ["## This is an h2 Heading"],
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/h2_header.png",
    imgAlt: "An example of what an h2 header looks like."
  },
  {
    id: "md3",
    h3Title: "H3 Heading",
    h4CodeTitle: "The Code:",
    code: ["### This is an h3 Heading"],
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/h3_header.png",
    imgAlt: "An example of what an h3 header looks like."
  },
  {
    id: "md4",
    h3Title: "Normal Text",
    h4CodeTitle: "The Code:",
    code: ["This is some normal text!"],
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/normal_text.png",
    imgAlt: "An example of what normal text looks like."
  },
  {
    id: "md5",
    h3Title: "Bold Text",
    h4CodeTitle: "The Code:",
    code: ["**This is some bold text!**"],
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/bold_text.png",
    imgAlt: "An example of what bold text looks like."
  },
  {
    id: "md6",
    h3Title: "Italicized Text",
    h4CodeTitle: "The Code:",
    code: ["*This is some italicized text!*"],
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/italicized_text.png",
    imgAlt: "An example of what italicized text looks like."
  },
  {
    id: "md7",
    h3Title: "An Ordered List",
    h4CodeTitle: "The Code:",
    code: ["1. An Ordered List"],
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/ordered_list.png",
    imgAlt: "An example of what an ordered list looks like."
  },
  {
    id: "md8",
    h3Title: "An Unordered List",
    h4CodeTitle: "The Code:",
    code: ["- An Unordered List"],
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/unordered_list.png",
    imgAlt: "An example of what an unordered list looks like."
  },
  {
    id: "md9",
    h3Title: "A Horizontal Line",
    h4CodeTitle: "The Code:",
    code: ["---"],
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/horizontal_line.png",
    imgAlt: "An example of what a horizontal line looks like."
  },
  {
    id: "md10",
    h3Title: "Images",
    h4CodeTitle: "The Code:",
    code: ["![Thumbs Up](images/thumbsUp.JPG)"],
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/thumbsUp.JPG",
    imgAlt: "An example of an image."
  },
  {
    id: "md11",
    h3Title: "Links",
    h4CodeTitle: "The Code:",
    code: ["[A Link Example](https://alinkexample.com)"],
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/link.png",
    imgAlt: "An example of a link."
  },
  {
    id: "md12",
    h3Title: "Code Examples",
    h4CodeTitle: "The Code:",
    code: ["```", "npm run seeds", "```"],
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/code_example.png",
    imgAlt: "A code example."
  }
];

const App = () => {
  return (
    <>
      <Header />
      <Main markdownInfo={contentData} />
    </>
  );
};

export default App;
