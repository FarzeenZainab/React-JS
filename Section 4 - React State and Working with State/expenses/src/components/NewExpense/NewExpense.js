import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSubmitFormData = (formData) => {
    const expenseData = {
      id: Math.random(),
      ...formData,
    };
    props.onNewExpenseItemEntry(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onformSubmitData={onSubmitFormData} />
    </div>
  );
};

export default NewExpense;
