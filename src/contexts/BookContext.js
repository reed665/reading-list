import React, { createContext, useReducer, useEffect } from 'react';
import bookReducer from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const data = localStorage.getItem('books')
    return data ? JSON.parse(data) : []
  })

  useEffect(() => {
    const data = JSON.stringify(books)
    localStorage.setItem('books', data)
  }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;