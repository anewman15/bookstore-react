import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';

const categoryFilter = ({ changeFilter }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleFilterChange = event => {
    changeFilter(event.target.value);
  };

  return (
    <div>
      <span>Filter books by category</span>
      <select name="filter" id="filter">
        <option value="all" onChange={handleFilterChange}>All</option>
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

categoryFilter.propTypes = {
  category: PropTypes.instanceOf(Object),
}.isRequired;

export default connect(null, { changeFilter })(categoryFilter);
