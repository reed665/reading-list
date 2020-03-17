import React, { useContext } from 'react';
import './BookList.css';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { books } = useContext(BookContext)
  
  if (!books.length) {
    return (
      <div className="BookList">
        <p>Nothing to read</p>
      </div>
    );
  }

  return (
    <div className="BookList">
      <ul>
        {books.map(book => {
          return (
            <li key={book.id}>
              <span className="book-title">{book.title}</span>
              {book.author && <span> by <span className="book-author">{book.author}</span></span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
 
export default BookList;