import { createStore } from 'redux';
import combinedReducer from './index';

const initialBookState = [
  {
    id: Math.floor(Math.random() * 10000000),
    title: 'A Brief History of Time',
    category: 'Sci-Fi',
  },
  {
    id: Math.floor(Math.random() * 10000000),
    title: "Harry Potter: Sorcerer's Store",
    category: 'Kids',
  },
];

const store = createStore(combinedReducer, { books: initialBookState, filter: { category: 'All' } });

export default store;
