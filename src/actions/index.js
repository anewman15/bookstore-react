const CREATE_BOOK = 'CREATE_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

const bookId = 0;

const createBook = book => ({
  type: CREATE_BOOK,
  payload: {
    id: bookId + 1,
    title: book.title,
    category: book.category,
  },
});

const deleteBook = book => ({
  type: DELETE_BOOK,
  payload: {
    id: book.id,
  },
});

export { createBook, deleteBook };
