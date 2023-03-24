import { Route, useParams, Redirect, useRouteMatch, Link } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Farzeen", text: "Learning JS is fun" },
  { id: "q2", author: "Farzeen", text: "Learning JS is good" },
];

const QuoteDetails = function () {
  const { quoteId } = useParams();
  const match = useRouteMatch();
  console.log(match);
  const quote = DUMMY_QUOTES.find((quote) => {
    return quote.id == quoteId;
  });

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />

      {/* This route is only rendering the Link when we are on qoute/quoteId and hides it when we are on the comments page */}

      {/* Using exact to avoid matching route confilct */}
      <center>
        {/* quotes/:quoteId */}
        <Route path={`${match.path}/`} exact>
          <Link to={`${match.url}/comments`} className="btn">
            Load Comments
          </Link>
        </Route>
      </center>

      {/* this route renderes the comments component when we are on /quotes/quoteId/comments */}
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;
