import PropTypes from 'prop-types';

const Book = props => {
  const { book } = props;
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
export default Book;
