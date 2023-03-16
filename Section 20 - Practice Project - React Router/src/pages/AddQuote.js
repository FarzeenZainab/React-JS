import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const AddQuote = function () {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const AddQuoteHandler = (data) => {
    sendRequest(data);
  };

  return (
    <div>
      <h1>Add Quote </h1>
      <QuoteForm isLoading={status === "pending"} onAddQuote={AddQuoteHandler} />
    </div>
  );
};

export default AddQuote;
