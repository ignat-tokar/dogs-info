import { useEffect } from "react";
import FavouritesPage from "./FavouritesPage";
import Preloader from "./../../common/Preloader/Preloader";
import { connect } from "react-redux";
import { getFavouritesBreeds } from "../../redux/favourites-reducer";

function FavouritesPageContainer(
  { preloader, favouritesBreeds, getFavouritesBreeds }) {

  useEffect(() => {
    getFavouritesBreeds();
  }, [getFavouritesBreeds]);

  return (
    <>
      {preloader
        ? <Preloader />
        : <FavouritesPage favourites={favouritesBreeds} />        
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