import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const onSelectedYear = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenseItem = props.items.filter(
    (expense) => expense.date.getFullYear().toString() == selectedYear
  ); // Instead what we can do is use the expenseFilter state. Because expenseFilter will be reevaluated on the onChange event thus the expenses.js component will also be re-rendered and we can filter it on that because expenseFilter is controlled by the expenses.js component

  // to filter the items based on the year we should not change the state of the data that we are receiving from the props. Changing the state of props.items will update the original expenses array and we will lose data.

  // conditional rendering: it is recommended to separate out our logic from JSX we should do it up here in the function and not in the JSX

  return (
    <Card className="expenses">
      <ExpenseFilter
        defaultValue={selectedYear}
        onYearSelect={onSelectedYear}
      />
      <ExpensesChart expenses={filteredExpenseItem} />
      <ExpenseList filteredItems={filteredExpenseItem} />
    </Card>
  );
};

export default Expenses;
