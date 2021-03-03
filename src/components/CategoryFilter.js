import { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ changeFilter }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [categoryFilter, setcategoryFilter] = useState('All');

  const handleFilterChange = event => {
    setcategoryFilter({
      categoryFilter: event.target.value,
    });
    changeFilter(categoryFilter);
  };

  return (
    <div>
      <span>Filter books by category</span>
      <select value={categoryFilter} onChange={handleFilterChange}>
        <option value="all">All</option>
        {categories.map(category => (
          <option
            key={category}
            value={category.toLowerCase()}
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

export default (CategoryFilter);
