import { useEffect, useState } from "react";
import { imagesAPI } from "../../api/api";
import Preloader from "../../common/Preloader/Preloader";
import DogInfo from "../MainPage/DogInfo/DogInfo";

function FavouritesPage ({favourites}) {
  console.log(favourites);

  return (
    <>
      {favourites.map(dog=>{
        <DogInfo breed={dog[0]} />
      })}
    </>
  );
}

export default FavouritesPage;