import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { breedsAPI } from "../../api/api";
import Preloader from "../../common/Preloader/Preloader";
import { getFoundBreeds } from "../../redux/search-reducer";
import SearchField from "./SearchField";
import SearchResult from "./SearchResult";

function SearchComponent({ foundBreeds, preloader, getFoundBreeds }) {
  
  const [inputValue, setInputValue] = useState('');

  const inputOnChange = e => setInputValue(e.target.value)
  const searchFunction = () => getFoundBreeds(inputValue);

  return (
    <>
      <SearchField
        searchFunction={searchFunction}
        inputValue={inputValue}
        inputOnChange={inputOnChange}
      />
      {preloader
        ? <Preloader />
        : <>
          {foundBreeds && <SearchResult foundBreeds={foundBreeds} />}
        </>
      }
    </>
  );
}

function mapStateToProps(state) {
  return {
    foundBreeds: state.searchComponent.foundBreeds,
    preloader: state.searchComponent.preloader
  }
}

export default connect(mapStateToProps, { getFoundBreeds }) (SearchComponent);