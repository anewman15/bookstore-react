const initialCategoryFilter = {
  filter: 'All',
};

const filterReducer = (state = initialCategoryFilter, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      return {
        ...state,
        filter: action.payload.category,
      };
    }
    default: {
      return state.filter;
    }
  }
};

export default filterReducer;
