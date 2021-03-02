import Book from '../components/Book';

const BooksList = () => (
  <div>
    <h1>Books List</h1>
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      <tbody>
        <Book book={{ id: 1, title: 'about memory', category: 'self improve' }} />
        <Book book={{ id: 2, title: 'about nothing', category: 'self improve' }} />
      </tbody>
    </table>
  </div>
);

export default BooksList;
