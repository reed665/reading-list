import React, { useContext } from 'react';
import './BookItem.css';
import { BookContext } from '../contexts/BookContext';

const BookItem = ({ book }) => {
  const { removeBook } = useContext(BookContext)

  return (
    <span className="BookItem" onClick={() => removeBook(book.id)}>
      <span className="book-title">{book.title}</span>
      {book.author && <span className="by-author"> by <span className="book-author">{book.author}</span></span>}
    </span>
  );
}
 
export default BookItem;