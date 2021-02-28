import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses.js";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
