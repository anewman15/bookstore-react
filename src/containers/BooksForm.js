import PropTypes from 'prop-types';

const BooksForm = props => {
  const { categories } = props;

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
