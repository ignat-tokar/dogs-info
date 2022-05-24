import { NavLink } from "react-router-dom";
import SearchComponent from "../SearchComponent/SearchComponent";

function HeaderComponent() {
  return (
    <>
      <NavLink to="/dogs-info">All</NavLink>
      <p>  </p>
      <NavLink to="/dogs-info/favourites">Favourites</NavLink>
      <p>  </p>
      <NavLink to="/dogs-info/random">Random</NavLink>
      <p>  </p>
      <SearchComponent />
      <p>  </p>
    </>
  );
}

export default HeaderComponent;