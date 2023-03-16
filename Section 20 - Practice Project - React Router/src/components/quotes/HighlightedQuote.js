import classes from "./HighlightedQuote.module.css";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import { Fragment } from "react";

const HighlightedQuote = (props) => {
  const match = useRouteMatch();

  return (
    <Fragment>
      <figure className={classes.quote}>
        <p>{props.text}</p>
        <figcaption>{props.author}</figcaption>
      </figure>
    </Fragment>
  );
};

export default HighlightedQuote;
