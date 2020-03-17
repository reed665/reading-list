import React from 'react';
import './App.css';
import BookContextProvider from './contexts/BookContext';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <AppHeader />
      </BookContextProvider>
    </div>
  );
}

export default App;
