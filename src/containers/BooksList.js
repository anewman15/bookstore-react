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
        <Book id={1} title="about memory" category="self improve" />
        <Book id={2} title="dfdfdfd emory" category="ererererev improve" />
      </tbody>
    </table>
  </div>
);

export default BooksList;
