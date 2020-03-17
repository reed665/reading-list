import React from 'react';
import './App.css';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        Hello
      </BookContextProvider>
    </div>
  );
}

export default App;
