import { createStore } from 'redux';
import bookReducer from './books';

const store = createStore(bookReducer);

export default store;
