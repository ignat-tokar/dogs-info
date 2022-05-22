import { useEffect, useState } from 'react';
import Paginator from '../../common/Paginator/Paginator';
import Preloader from '../../common/Preloader/Preloader';
import { breedsAPI } from './../../api/api';
import MainPage from './MainPage';
import { NavLink } from 'react-router-dom';

function MainPageContainer(){

  const [breeds, setBreeds] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(()=>{
    setShowPreloader(true);
    breedsAPI.getBreeds(currentPage-1).then(data=>{
      setBreeds(data);
      setShowPreloader(false);
    });
  },[currentPage]);

  function onPageChanged(page){
    setCurrentPage(page);
  }

  return (
    <>
      {showPreloader 
        ? <Preloader /> 
        : <>{breeds && <>
            <NavLink to="/favourites">Favourites</NavLink>
            <p>  </p>
            <NavLink to="/random">Random</NavLink>
            <p>  </p>
            <MainPage breeds={breeds} />
          </>}</>
      } 
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} />
    </>
  );
}

export default MainPageContainer;