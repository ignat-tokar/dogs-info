import { useEffect, useState } from 'react';
import { breedsAPI } from './../../api/api';
import MainPage from './MainPage';

function MainPageContainer(){

  const [breeds, setBreeds] = useState(null);

  useEffect(()=>{
    breedsAPI.getBreeds().then(data=>{
      setBreeds(data);
    });
  },[]);

  return (
    <>{breeds && <MainPage breeds={breeds} />}</>
  );
}

export default MainPageContainer;