const initialBookState = {
  books: [],
};

const bookReducer = (state = initialBookState, action) => {
  const { id, title, category } = action.payload;
  switch (action.type) {
    case 'CREATE_BOOK': {
      return {
        ...state,
        books: [
          ...state.books,
          {
            id,
            title,
            category,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export default bookReducer;
