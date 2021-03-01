import PropTypes from 'prop-types';
import { useState } from 'react';

const BooksForm = props => {
  const { categories } = props;
  const [book, setBook ] = useState({});

  return (
    <form>
      <label htmlFor="title">
        Title
        <input type="text" name="title" id="title" />
      </label>
      <select>
        <option selected>Category</option>
        {categories.map(category => <option key={category}>{category}</option>)}
      </select>
    </form>
  );
};

BooksForm.propTypes = {
  categories: PropTypes.array,
}.isRequired;

export default BooksForm;
