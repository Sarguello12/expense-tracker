import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

// useState uses an array of 2 varibales to allow interaction
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filterYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  // console.log(filterYear);

  const filteredExpenses = props.items.filter((expense) => {
    console.log(expense.date.getFullYear().toString());

    return expense.date.getFullYear().toString() === filterYear;
  });

  console.log(filteredExpenses);

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onFilterByYear={filterYearHandler} />

      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
