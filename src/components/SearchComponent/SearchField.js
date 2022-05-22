function SearchField({searchFunction, inputValue, inputOnChange}) {

  return (
    <>
      <input 
        type="text" 
        placeholder="Name of breed"
        value={inputValue}
        onChange={inputOnChange} />
      <button onClick={searchFunction}>Search</button>
    </>
  );
}

export default SearchField;