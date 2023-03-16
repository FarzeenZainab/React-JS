import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = function (props) {
  if (props.filteredItems.length === 0) {
    return (
      <div className="expenses-list__fallback">
        <p>No Expenses Found</p>
      </div>
    );
  }

  return (
    <ul className="expenses-list">
      {props.filteredItems.map(function (ele) {
        return (
          <ExpenseItem
            key={ele.id}
            title={ele.title}
            amount={ele.amount}
            date={ele.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;

{
  /* adding conditional rendering to render each of the element in the expeses array and display it on the screen */
}
{
  /* {filteredExpenseItem.length === 0 && <p>No Expenses Found</p>}
      {filteredExpenseItem.length > 0 &&
        filteredExpenseItem.map(function (ele) {
          return (
            <ExpenseItem
              key={ele.id}
              title={ele.title}
              amount={ele.amount}
              date={ele.date}
            />
          );
        })} */
}
