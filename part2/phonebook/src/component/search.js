const Search = ({ setSearch, search }) => {
  // filter component
  return (
    <div className='containerDiv search'>
      <p>filter with:</p>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
    </div>
  );
};

export default Search;
