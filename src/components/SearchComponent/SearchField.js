import styles from './SearchField.module.css';
import searchGrey from './../../assets/images/search_grey.png'
function SearchField({ searchFunction, inputValue, inputOnChange }) {

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Name of breed"
        value={inputValue}
        onChange={inputOnChange} />
      <img src={searchGrey} onClick={searchFunction} />
    </div>
  );
}

export default SearchField;