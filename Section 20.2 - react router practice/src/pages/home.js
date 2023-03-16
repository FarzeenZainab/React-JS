import { Link, useLocation, useParams } from "react-router-dom";

function Home() {
  let { loggedIn } = useParams();
  loggedIn = loggedIn === "true";

  return (
    <div>
      <h2>Home Page</h2>
      <a href="/about">Anchor Tag</a>
      <br />
      <Link to="/about">Link Tag</Link>
      <h4>{loggedIn && "You are loggedIn"}</h4>
    </div>
  );
}

export default Home;
