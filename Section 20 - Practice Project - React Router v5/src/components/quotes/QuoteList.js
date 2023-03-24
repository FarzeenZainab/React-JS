import { Fragment } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const match = useRouteMatch();

  const queryParams = new URLSearchParams(location.search);
  const sortingOrder = queryParams.get("sort") === "asc"; // true or false

  const sortedQuotes = sortQuotes(props.quotes, sortingOrder);

  function changeSortingHandler() {
    if (sortingOrder) history.push(`${match.path}?sort=` + "desc");
    else {
      history.push(`${match.path}?sort=` + "asc");
    }
    // forces react to re-render the component because we are adding a new item in the historry object
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {sortingOrder ? "Descending" : "Ascending"}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem key={quote.id} id={quote.id} author={quote.author} text={quote.text} />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
