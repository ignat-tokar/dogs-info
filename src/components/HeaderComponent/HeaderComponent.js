import { NavLink } from "react-router-dom";
import mainBackgroundImage from "./../../assets/images/mainBackgroundImage.jpg";
import SearchComponent from "../SearchComponent/SearchComponent";
import styles from "./HeaderComponent.module.css";

function HeaderComponent() {
  return (
    <div className={styles.header} >
      <SearchComponent />
      <div className={styles.wrapper}>
        <NavLink className={styles.navlink} to="/dogs-info">All</NavLink>
        <NavLink className={styles.navlink} to="/dogs-info/favourites">Favourites</NavLink>
        <NavLink className={styles.navlink} to="/dogs-info/random">Random</NavLink>
      </div>
    </div>
  );
}

export default HeaderComponent;