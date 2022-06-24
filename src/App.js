import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "Fishing rod",
      amount: 299.95,
      date: new Date(2022, 6, 22),
    },
    {
      id: 2,
      title: "Fishing reel",
      amount: 169.99,
      date: new Date(2022, 6, 22),
    },
    {
      id: 3,
      title: "Swimbait",
      amount: 52.45,
      date: new Date(2022, 7, 2),
    },
    {
      id: 4,
      title: "Bait Wrap",
      amount: 29.99,
      date: new Date(2022, 7, 2),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In app");
    console.log(expense);
  };

  //wrapper () are essential as you can only return one element at a time, this allows us to return multiple elements side by side
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
