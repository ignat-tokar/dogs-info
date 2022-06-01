import { useEffect } from "react";
import RandomPage from "./RandomPage";
import Preloader from "./../../common/Preloader/Preloader";
import { getRandomBreed } from "../../redux/random-reducer";
import { connect } from "react-redux";
import styles from "./../../assets/styles/RandomPageContainer.module.css";

function RandomPageContainer({ preloader, randomBreed, getRandomBreed }) {

  useEffect(() => {
    getRandomBreed();
  }, [getRandomBreed]);

  return (
    <div className={styles.random}>
      {preloader
        ? <Preloader />
        : <>
        <RandomPage
            imageId={randomBreed.image.id}
            imageUrl={randomBreed.image.url}
            breed={randomBreed} 
        />
          <button onClick={getRandomBreed}>Again</button>
        </>
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    preloader: state.randomPage.preloader,
    randomBreed: state.randomPage.randomBreed
  }
}

export default connect(mapStateToProps, { getRandomBreed })(RandomPageContainer);