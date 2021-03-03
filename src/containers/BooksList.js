import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books }) => (
  <div>
    <h1>Books List</h1>
    <CategoryFilter />
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
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
  books: [...state.books],
});

export default connect(mapStateToProps)(BooksList);
