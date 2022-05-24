import { useEffect, useState } from 'react';
import Paginator from '../../common/Paginator/Paginator';
import Preloader from '../../common/Preloader/Preloader';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import { getBreeds } from '../../redux/main-reducer';
import { getFavouritesBreeds } from '../../redux/favourites-reducer';

function MainPageContainer({ breeds, preloader, getBreeds, getFavouritesBreeds }) {

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getFavouritesBreeds();
    getBreeds(currentPage-1);
  },[getFavouritesBreeds, getBreeds, currentPage]);

  function onPageChanged(page) {
    setCurrentPage(page);
  }

  return (
    <>
      {preloader
        ? <Preloader />
        : <>
          {breeds &&
            <>
              <MainPage breeds={breeds} />
            </>
          }
        </>
      }
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    breeds: state.mainPage.breeds,
    preloader: state.mainPage.preloader
  }
}

export default connect(mapStateToProps, { getBreeds, getFavouritesBreeds })(MainPageContainer);