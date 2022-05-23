import { useEffect } from "react";
import FavouritesPage from "./FavouritesPage";
import Preloader from "./../../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getFavouritesBreeds } from "../../redux/favourites-reducer";

function FavouritesPageContainer(
  { preloader, favouritesBreeds, getFavouritesBreeds }) {

  useEffect(() => {
    getFavouritesBreeds();
  }, []);

  return (
    <>
      {preloader
        ? <Preloader />
        : <>
          <NavLink to="/dogs-info">Go Back</NavLink>
          <p>  </p>
          <FavouritesPage favourites={favouritesBreeds} />
        </>        
      }
    </>
  );
}

function mapStateToProps(state) {
  return {
    favouritesBreeds: state.favouritesPage.favouritesBreeds
  }
}

export default connect(mapStateToProps, { getFavouritesBreeds })(FavouritesPageContainer);