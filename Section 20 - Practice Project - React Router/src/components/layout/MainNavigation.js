import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className={`${styles.header}`}>
      <h1 className={`${styles.logo}`}>Great Quotes</h1>
      <nav className={`${styles.nav}`}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={styles.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={styles.active}>
              Add New
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
