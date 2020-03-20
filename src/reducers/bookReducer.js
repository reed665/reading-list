import { v4 as uuid } from 'uuid';
import valarg from 'valarg';

export const newBook = (title, author) => {
  valarg(title, { type: String, required: true })
  valarg(author, { type: String })

  return {
    id: uuid(),
    title,
    author,
  }
}

const bookReducer = (state = [], action) => {
  switch (action.type) {

    case 'ADD_BOOK':
      return [...state, newBook(action.book.title, action.book.author)];

    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.book.id);

    default:
      return state;
  }
}

export default bookReducer;
