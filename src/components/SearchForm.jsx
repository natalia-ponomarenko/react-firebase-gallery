import { useState } from "react";
import { useFirestoreContext } from '../context/FirestoreContext';

const SearchForm = () => {
  const [text, setText] = useState(null);
  const {filterItems: filter } = useFirestoreContext();

  const handleOnChange = (e) => {
    setText(e.target.value);
    filter(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    filter(text);
  }

  return (
    <form className="d-flex" onSubmit={handleOnSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={text}
        onChange={handleOnChange}
      />
      <button
        className="btn btn-outline-success"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
