const books = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK': {
      const { id, title, category } = action.payload;
      return (
        [
          ...state,
          {
            id,
            title,
            category,
          },
        ]
      );
    }
    case 'DELETE_BOOK': {
      const { id } = action.payload;
      return (
        [...state].filter(book => book.id !== id)
      );
    }
    default: {
      return state;
    }
  }
};

export default books;
