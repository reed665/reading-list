import React, { useContext } from 'react';
import './BookItem.css';
import { BookContext } from '../contexts/BookContext';

const BookItem = ({ book }) => {
  const { dispatch: dispatchBookAction } = useContext(BookContext)

  return (
    <span className="BookItem" onClick={() => dispatchBookAction({ type: 'REMOVE_BOOK', book: { id: book.id }})}>
      <span className="book-title">{book.title}</span>
      {book.author && <span className="by-author"> by <span className="book-author">{book.author}</span></span>}
    </span>
  );
}
 
export default BookItem;