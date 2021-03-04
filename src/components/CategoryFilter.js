import PropTypes from 'prop-types';

const CategoryFilter = ({ changeFilter }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleFilterChange = event => {
    changeFilter(event.target.value);
  };

  return (
    <div className="mx-center flex-center category-filter">
      <p className="filter-item montserrat">Filter books by category</p>
      <select className="montserrat filter-select" onChange={handleFilterChange}>
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
