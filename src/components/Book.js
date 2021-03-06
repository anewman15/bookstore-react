import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBook } from '../actions/index';

const Book = ({ book, deleteBook }) => {
  const handleRemoveBook = () => {
    deleteBook(book);
  };

  return (
    <div className="book-wrapper flex-between">
      <div className="book-left">
        <div className="book-info">
          <div className="book-detail">
            <p className="montserrat font-size-14 color-grey-1 text-bold book-detail">{book.category}</p>
            <p className="roboto font-size-22 text-bold book-detail">{book.title}</p>
            <p className="roboto font-size-14 color-light-blue book-detail">Visvaldas Rapalis</p>
          </div>
          <div className="book-actions">
            <button className="btn roboto font-size-14 color-light-blue" type="button">Comments</button>
            <button className="btn btn-center roboto font-size-14 color-light-blue" type="button" onClick={handleRemoveBook}>Remove</button>
            <button className="btn roboto font-size-14 color-light-blue" type="button">Edit</button>
          </div>
        </div>
      </div>
      <div className="book-right flex-between">
        <div className="book-completed flex-between">
          <div className="book-completed-item">
            <img className="user-icon" src="user_icon.png" alt="percent-completed" />
          </div>
          <div>
            <p className="font-size-32 montserrat completed-item">64%</p>
            <p className="color-grey font-size-14 montserrat completed-item">Completed</p>
          </div>
        </div>
        <div className="current-chapter">
          <div className="current-chapter-top">
            <p className="roboto upper-case font-size-13 current-chapter-top-item">Current Chapter</p>
            <p className="roboto font-size-16 current-chapter-top-item">Chapter 17</p>
          </div>
          <button type="button" className="roboto btn-bg-blue font-size-13 text-white upper-case current-chapter-actions">Update Progress</button>
        </div>

      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default connect(null, { deleteBook })(Book);
