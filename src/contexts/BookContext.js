import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import valarg from 'valarg';

export const BookContext = createContext();

const newBook = (title, author) => {
  valarg(title, { type: String, required: true })
  valarg(author, { type: String })

  return {
    id: uuid(),
    title,
    author,
  }
}

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    newBook('name of the wind', 'patrick rothuss'),
    newBook('the final empire', 'brandon sanderson'),
    newBook('book with no author'),
  ])

  const addBook = (title, author) => {
    setBooks([
      ...books,
      newBook(title, author),
    ])
  }

  const removeBook = (id) => {
    setBooks(
      books.filter(book => book.id !== id)
    )
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;