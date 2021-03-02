import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import createBook from '../actions/index';

const BooksForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
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

  const handleSubmit = event => {
    event.preventDefault();
    createBook();
  };

  return (
    <form onSubmit={handleSubmit}>
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

export default connect(null, { createBook })(BooksForm);
