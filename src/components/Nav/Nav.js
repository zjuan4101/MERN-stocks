import { Link } from "react-router-dom";
import styles from "./Nav.modules.scss"

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <div>STOCK PRICES</div>
      </Link>
      <Link to="/home">
        <div>HOME</div>
      </Link>
      <Link to="/about">
        <div>ABOUT</div>
      </Link>
      <Link to="/dashboard">
        <div>DASHBOARD</div>
      </Link>
    </div>
  );
};

export default Nav;