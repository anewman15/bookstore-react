import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import selectBooksByCategory from '../reducers/selectors';

const BooksList = ({ books, changeFilter }) => (
  <div className="container">
    <CategoryFilter changeFilter={changeFilter} />
    <div>
      {books.map(book => <Book key={book.id} book={book} />)}
    </div>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf,
}.isRequired;

const mapStateToProps = state => ({
  books: selectBooksByCategory(state),
});

export default connect(mapStateToProps, { changeFilter })(BooksList);
