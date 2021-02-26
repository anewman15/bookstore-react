import '../App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="App">
    Hello, Welcome to your favorite Bookstore
    <BooksList />
    <BooksForm categories={['Self Improvement', 'Programming']} />
  </div>
);

export default App;
