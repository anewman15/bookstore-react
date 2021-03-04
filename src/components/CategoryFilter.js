import PropTypes from 'prop-types';

const CategoryFilter = ({ changeFilter }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleFilterChange = event => {
    changeFilter(event.target.value);
  };

  return (
    <div>
      <span>Filter books by category</span>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        {categories.map(category => (
          <option
            key={category}
            value={category}
            onChange={handleFilterChange}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  category: PropTypes.instanceOf(Object),
}.isRequired;

export default CategoryFilter;
