import { useEffect, useState } from 'react';
import Paginator from '../../common/Paginator/Paginator';
import Preloader from '../../common/Preloader/Preloader';
import { breedsAPI } from './../../api/api';
import MainPage from './MainPage';

function MainPageContainer(){

  const [breeds, setBreeds] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(()=>{
    setShowPreloader(true);
    breedsAPI.getBreeds(currentPage).then(data=>{
      setBreeds(data);
      setShowPreloader(false);
    });
  },[currentPage]);

  function onPageChanged(page){
    setCurrentPage(page);
  }

  return (
    <>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} />
      {showPreloader 
        ? <Preloader /> 
        : <>{breeds && <MainPage breeds={breeds} />}</>
      } 
    </>
  );
}

export default MainPageContainer;