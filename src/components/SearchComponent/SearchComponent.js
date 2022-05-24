import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFoundBreeds } from "../../redux/search-reducer";
import SearchField from "./SearchField";

function SearchComponent({ foundBreeds, getFoundBreeds }) {
  
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const inputOnChange = e => setInputValue(e.target.value)
  const searchFunction = () => {
    getFoundBreeds(inputValue);
    navigate('/dogs-info/search-result');
  }

  return (
    <>
      <SearchField
        searchFunction={searchFunction}
        inputValue={inputValue}
        inputOnChange={inputOnChange}
      />
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