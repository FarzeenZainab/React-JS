import { Fragment } from "react";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (prop) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={styles.main}>{prop.children}</main>
    </Fragment>
  );
};

export default Layout;
