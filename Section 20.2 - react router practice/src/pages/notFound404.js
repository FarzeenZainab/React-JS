import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <div>
      <h2>Page not found</h2>
      <Link to="/home">Go back home</Link>
    </div>
  );
}

export default NotFound404;
