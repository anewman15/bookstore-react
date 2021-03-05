const selectBooksByCategory = state => {
  const { books, filter } = { ...state };
  if (filter.category === 'All') {
    return books;
  }
  return books.filter(book => book.category === filter.category);
};

export default selectBooksByCategory;
