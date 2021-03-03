const initialBookState = {
  books: [
    {
      id: Math.floor(Math.random() * 10000000),
      title: 'A Brief History of Time',
      category: 'Sci-Fi',
    },
    {
      id: Math.floor(Math.random() * 10000000),
      title: "Harry Potter: Sorcerer's Store",
      category: 'Kids',
    },
  ],
};

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK': {
      const { id, title, category } = action.payload;
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
    case 'DELETE_BOOK': {
      const { id } = action.payload;
      return {
        ...state,
        books: [...state.books].filter(book => book.id !== id),
      };
    }
    default: {
      return state.books;
    }
  }
};

export default bookReducer;
