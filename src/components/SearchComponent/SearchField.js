import styles from './SearchField.module.css';
import searchGrey from './../../assets/images/search_grey.png';
import searchYellow from './../../assets/images/search_yellow.png';

function SearchField({ searchFunction, inputValue, inputOnChange }) {

  const onMouseEnterHandler = (e) => e.target.src = searchGrey;

  const onMouseLeaveHandler = (e) => e.target.src = searchYellow;

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Name of breed"
        value={inputValue}
        onChange={inputOnChange} />
      <img 
        src={searchYellow} 
        onMouseEnter={onMouseEnterHandler} 
        onMouseLeave={onMouseLeaveHandler}
        onClick={searchFunction} 
      />
    </div>
  );
}

export default SearchField;