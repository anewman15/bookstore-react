import '../App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navigation from './Navigation';

const App = () => (
  <div className="App">
    <Navigation />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
