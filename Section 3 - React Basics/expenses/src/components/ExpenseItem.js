import "./css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  //simple JS
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseName = "Car Insurance";
  // const expensePrice = 294.67;

  // using props to get data from app.js component inside this component
  return (
    // JSX code (HTML)
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
