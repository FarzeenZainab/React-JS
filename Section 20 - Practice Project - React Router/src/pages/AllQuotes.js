import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Farzeen", text: "Learning JS is fun" },
  { id: "q2", author: "Farzeen", text: "Learning JS is good" },
];
const AllQuotes = function () {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
};

export default AllQuotes;
