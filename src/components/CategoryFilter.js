import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CategoryFilter = ({ filter, changeFilter }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleFilterChange = event => {
    changeFilter(event.target.value);
  };

  return (
    <div className="mx-center flex-center category-filter">
      <p className="filter-item montserrat">Filter books by category</p>
      <select className="montserrat filter-select" value={filter.category} onChange={handleFilterChange}>
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
  filter: PropTypes.instanceOf(Object),
}.isRequired;

const mapStateToProps = state => ({
  ...state,
  filter: { ...state.filter },
});

export default connect(mapStateToProps)(CategoryFilter);
