import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <h2>About page</h2>
      <a href="/home">Anchor Tag</a>
      <br />
      <Link to="/home">Link Tag</Link>
    </div>
  );
}

export default About;
