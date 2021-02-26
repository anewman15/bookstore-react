import '../App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div className="App">
      Hello, Welcome to your favorite Bookstore
      <BooksList />
      <BooksForm categories={categories} />
    </div>
  );
};

export default App;
