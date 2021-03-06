import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //   const [title, setTitle] = useState(props.title);

  //   const clickHandler = () => {
  //     setTitle("YOO");
  //   };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <li className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </li>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
