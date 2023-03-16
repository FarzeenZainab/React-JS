import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSubmitFormData = (formData) => {
    const expenseData = {
      id: Math.random(),
      ...formData,
    };
    props.onNewExpenseItemEntry(expenseData);
    setAddExpense(addBtn);
  };

  const hideForm = function () {
    setAddExpense(addBtn);
  };

  const showExpenseForm = function () {
    const expenseForm = (
      <div>
        <ExpenseForm onCancel={hideForm} onformSubmitData={onSubmitFormData} />
      </div>
    );
    setAddExpense(expenseForm);
  };

  const addBtn = (
    <button type="submit" onClick={showExpenseForm}>
      Add New Expense
    </button>
  );

  const [addExpense, setAddExpense] = useState(addBtn);

  return <div className="new-expense">{addExpense}</div>;
};

export default NewExpense;
