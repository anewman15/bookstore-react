const CREATE_BOOK = 'CREATE_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const deleteBook = book => ({
  type: DELETE_BOOK,
  book,
});

export { createBook, deleteBook };
