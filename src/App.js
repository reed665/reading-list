import React from 'react';
import './App.css';
import BookContextProvider from './contexts/BookContext';
import AppHeader from './components/AppHeader';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <AppHeader />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
