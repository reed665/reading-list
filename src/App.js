import React from 'react';
import './App.css';
import BookContextProvider from './contexts/BookContext';
import AppHeader from './components/AppHeader';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <AppHeader />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
