import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Fishing rod",
      amount: 299.95,
      date: new Date(2022, 6, 22),
    },
    {
      title: "Fishing reel",
      amount: 169.99,
      date: new Date(2022, 6, 22),
    },
    {
      title: "Swimbait",
      amount: 52.45,
      date: new Date(2022, 7, 2),
    },
    {
      title: "Bait Wrap",
      amount: 29.99,
      date: new Date(2022, 7, 2),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}
export default App;
