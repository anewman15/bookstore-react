import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBook } from '../actions/index';

const Book = ({ book, deleteBook }) => {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default connect(null, { deleteBook })(Book);
