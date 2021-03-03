/*
  eslint-disable no-plusplus
*/

const CREATE_BOOK = 'CREATE_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

let bookId = 0;

const createBook = book => ({
  type: CREATE_BOOK,
  payload: {
    id: ++bookId,
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

const changeFilter = category => ({
  type: CHANGE_FILTER,
  payload: category,
});

export { createBook, deleteBook, changeFilter };
