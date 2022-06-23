import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

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
  console.log(expenses[0].date);
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
