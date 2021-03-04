import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import selectBooksByCategory from '../reducers/selectors';

const BooksList = ({ books, changeFilter }) => (
  <div>
    <h1>Books List</h1>
    <CategoryFilter changeFilter={changeFilter} />
    <table>
      <thead>
        <tr>
          <th>{}</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => <Book key={book.id} book={book} />)}
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf,
}.isRequired;

const mapStateToProps = state => ({
  books: selectBooksByCategory(state),
});

export default connect(mapStateToProps, { changeFilter })(BooksList);
