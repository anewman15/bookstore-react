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
    <div className="container my-3">
      <div className="my-2">
        <p className="upper-case font-size-22 color-grey-1 text-bold my-1">Add New Book</p>
        <form className="flex-start my-1" onSubmit={handleSubmit}>
          <input
            className="montserrat form-input filter-select"
            type="text"
            name="title"
            id="title"
            value={book.title}
            onChange={handleInputChange}
            placeholder="Book Title"
            required
          />
          <select className="montserrat form-select filter-select" value={book.category} onChange={handleSelectChange} required>
            <option selected disabled>Category</option>
            {categories.map(category => <option key={category}>{category}</option>)}
          </select>
          <button className="roboto btn-bg-blue font-size-13 text-white upper-case" type="submit">Create book</button>
        </form>
      </div>
    </div>
  );
};

BooksForm.propTypes = {
  categories: PropTypes.array,
}.isRequired;

export default connect(null, { createBook })(BooksForm);
