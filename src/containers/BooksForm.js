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
    <div className="container">
      <div className="category-filter">
        <p className="upper-case font-size-22 filter-item color-grey-1 text-bold">Add New Book</p>
        <form onSubmit={handleSubmit}>
          <input className="form-input filter-select" type="text" name="title" id="title" value={book.title} onChange={handleInputChange} required />
          <select className="form-select filter-select" value={book.category} onChange={handleSelectChange} required>
            <option selected disabled>Category</option>
            {categories.map(category => <option key={category}>{category}</option>)}
          </select>
          <button className="roboto btn-bg-blue font-size-13 text-white upper-case current-chapter-actions" type="submit">Create book</button>
        </form>
      </div>
    </div>
  );
};

BooksForm.propTypes = {
  categories: PropTypes.array,
}.isRequired;

export default connect(null, { createBook })(BooksForm);
