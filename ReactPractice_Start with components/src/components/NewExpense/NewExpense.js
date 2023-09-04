import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const savaExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpense(false);
  };

  const [addExpense, setAddExpense] = useState(false);
  const formHandler = () => {
    setAddExpense(true);
  };
  const stopFormHandler = () => {
    setAddExpense(false);
  };
  let form = <button onClick={formHandler}>Add New Expense</button>;
  if (addExpense) {
    form = (
      <ExpenseForm
        onSaveExpenseData={savaExpenseDataHandler}
        onStopForm={stopFormHandler}
      />
    );
  }

  return (
    <div className="new-expense">
      {form}
      {/* Named a customized function to transfer data from child component to father component */}
    </div>
  );
};

export default NewExpense;
