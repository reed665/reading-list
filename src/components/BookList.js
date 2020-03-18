import React, { useContext } from 'react';
import './BookList.css';
import { BookContext } from '../contexts/BookContext';
import BookItem from './BookItem';

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
              <BookItem book={book} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
 
export default BookList;