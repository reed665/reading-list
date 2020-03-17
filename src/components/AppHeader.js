import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const AppHeader = () => {
  const { books } = useContext(BookContext)

  return (
    <div className="AppHeader">
      <h2>Reading list</h2>
      <p>Books to read: {books.length}</p>
    </div>
  );
}
 
export default AppHeader;