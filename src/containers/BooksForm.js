import PropTypes from 'prop-types';

const BooksForm = props => {
  const { categories } = props;

  return (
    <form>
      <label htmlFor="title">
        Title
        <input type="text" name="title" id="title" />
      </label>
      <h1>
        {categories}
      </h1>
    </form>
  );
};

BooksForm.propTypes = {
  categories: PropTypes.array,
}.isRequired;

export default BooksForm;
