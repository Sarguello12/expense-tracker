import React from "react";
import "./Card.css";

function Card(props) {
  //any additional class names that are added will be applied to the card class
  const classes = "card " + props.className;
  // props.children allows values to be input within the "<Card/>" tags
  return <div className={classes}>{props.children}</div>;
}

export default Card;
