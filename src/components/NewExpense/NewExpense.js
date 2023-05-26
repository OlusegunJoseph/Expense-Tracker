import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [isShown, setIsShown] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsShown(false);
  };

  const startDisplayHandler = () => {
    setIsShown(true);
  };

  const stopDisplayHandler = () => {
    setIsShown(false);
  };

  return (
    <div className="new-expense">
      {!isShown && (
        <button onClick={startDisplayHandler}>Add New Expense</button>
      )}
      {isShown && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopDisplayHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
