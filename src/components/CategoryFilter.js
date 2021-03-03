import PropTypes from 'prop-types';

const categoryFilter = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <span>Filter books by category</span>
      <select name="filter" id="filter">
        <option value="all">All</option>
        {categories.map(category => (
          <option key={category} value={category.toLowerCase()}>{category}</option>
        ))}
      </select>
    </div>
  );
};

categoryFilter.propTypes = {
  category: PropTypes.string,
}.isRequired;

export default categoryFilter;
