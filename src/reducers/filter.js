const filter = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      return {
        ...state,
        category: action.payload.filter,
      };
    }
    default: {
      return {
        ...state,
        category: 'All',
      };
    }
  }
};

export default filter;
