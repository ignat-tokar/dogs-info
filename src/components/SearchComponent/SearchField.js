import styles from './SearchField.module.css';

function SearchField({ searchFunction, inputValue, inputOnChange }) {

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Name of breed"
        value={inputValue}
        onChange={inputOnChange} />
      <button onClick={searchFunction}>Search</button>
    </div>
  );
}

export default SearchField;