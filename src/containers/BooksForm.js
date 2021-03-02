import PropTypes from 'prop-types';
import { useState } from 'react';

const BooksForm = props => {
  const { categories } = props;
  const [book, setBook] = useState({});
  const handleInputChange = event => {
    setBook({
      title: event.target.value,
    });
  };

  const handleSelectChange = event => {
    setBook({
      category: event.target.value,
    });
  };

  return (
    <form>
      <label htmlFor="title">
        Title
        <input type="text" name="title" id="title" value={book.title} onChange={handleInputChange} />
      </label>
      <select value={book.category} onChange={handleSelectChange}>
        <option selected>Category</option>
        {categories.map(category => <option key={category}>{category}</option>)}
      </select>
    </form>
  );
};

BooksForm.propTypes = {
  categories: PropTypes.array,
}.isRequired;

export default BooksForm;
