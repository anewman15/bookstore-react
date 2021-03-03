import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const BooksForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const bookReset = { title: '', category: 'Category' };
  const [book, setBook] = useState(bookReset);
  const handleInputChange = event => {
    setBook({
      ...book,
      title: event.target.value,
    });
  };

  const handleSelectChange = event => {
    setBook({
      ...book,
      category: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (book.title && book.title.length && book.category !== 'Category') {
      createBook(book);
      setBook(bookReset);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input type="text" name="title" id="title" value={book.title} onChange={handleInputChange} required />
      </label>
      <select value={book.category} onChange={handleSelectChange} required>
        <option selected>Category</option>
        {categories.map(category => <option key={category}>{category}</option>)}
      </select>
      <button type="submit">Create book</button>
    </form>
  );
};

BooksForm.propTypes = {
  categories: PropTypes.array,
}.isRequired;

export default connect(null, { createBook })(BooksForm);
