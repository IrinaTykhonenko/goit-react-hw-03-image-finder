import s from "./Searchbar.module.css";

const Searchbar = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(e.target.elements.searchName.value);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSearch}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={s.SearchFormInput}
          name="searchName"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
