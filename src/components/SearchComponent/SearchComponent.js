import { useEffect, useState } from "react";
import { breedsAPI } from "../../api/api";
import Preloader from "../../common/Preloader/Preloader";
import SearchField from "./SearchField";
import SearchResult from "./SearchResult";

function SearchComponent() {

  const [inputValue, setInputValue] = useState('');
  const [foundBreeds, setFoundBreeds] = useState(null);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(()=>{}, [showPreloader]);

  function inputOnChange(e) {
    setInputValue(e.target.value);
  }

  function searchFunction() {
    setShowPreloader(true);
    breedsAPI.getBreedByName(inputValue).then(data => {
      setFoundBreeds(data);
      setShowPreloader(false);
    })
  }

  return (
    <>
      <SearchField
        searchFunction={searchFunction}
        inputValue={inputValue}
        inputOnChange={inputOnChange}
      />
      {showPreloader
        ? <Preloader />
        : <>
          {foundBreeds && <SearchResult foundBreeds={foundBreeds} />}
        </>
      }


    </>
  );
}

export default SearchComponent;