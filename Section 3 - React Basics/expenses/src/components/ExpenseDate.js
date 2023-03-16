import "./css/ExpenseDate.css";

function ExpenseDate(props) {
  // fixing date format
  const expenseDate = props.date.toLocaleString("en-US", { day: "2-digit" });
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseYear = props.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__day">{expenseDate}</div>
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__year ">{expenseYear}</div>
    </div>
  );
}

export default ExpenseDate;
