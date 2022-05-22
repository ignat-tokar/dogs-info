import { useEffect, useState } from 'react';
import Paginator from '../../common/Paginator/Paginator';
import Preloader from '../../common/Preloader/Preloader';
import { breedsAPI } from './../../api/api';
import MainPage from './MainPage';

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
        : <>{breeds && <MainPage breeds={breeds} />}</>
      } 
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} />
    </>
  );
}

export default MainPageContainer;