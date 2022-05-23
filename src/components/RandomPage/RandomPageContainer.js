import { useEffect, useState } from "react";
import { breedsAPI, imagesAPI } from "../../api/api";
import RandomPage from "./RandomPage";
import Preloader from "./../../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";
import { getRandomBreed } from "../../redux/random-reducer";
import { connect } from "react-redux";

function RandomPageContainer({ preloader, randomBreed, getRandomBreed }) {

  useEffect(() => {
    getRandomBreed();
  }, [getRandomBreed]);

  return (
    <>
      {preloader
        ? <Preloader />
        : <>
          <NavLink to="/dogs-info">Go Back</NavLink>
          <p>  </p>
          <RandomPage
            imageId={randomBreed.image.id}
            imageUrl={randomBreed.image.url}
            breed={randomBreed} />
          <button onClick={getRandomBreed}>Again</button>
        </>
      }
    </>
  );
}

function mapStateToProps(state) {
  return {
    preloader: state.randomPage.preloader,
    randomBreed: state.randomPage.randomBreed
  }
}

export default connect(mapStateToProps, { getRandomBreed })(RandomPageContainer);