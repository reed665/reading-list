import React, { useContext, useState, useRef } from 'react';
import './BookForm.css';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { dispatch: dispatchBookAction } = useContext(BookContext)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
        
  const titleInputEl = useRef(null)

  const addBookOnSubmit = (event) => {
    event.preventDefault()

    if (!title) {
      return;
    }

    dispatchBookAction({ type: 'ADD_BOOK', book: { title, author } })
    setTitle('')
    setAuthor('')
    titleInputEl.current.focus()
  }

  return (
    <form className="BookForm" onSubmit={addBookOnSubmit}>
      <label className="form-item">
        <input type="text" placeholder="Title" ref={titleInputEl} value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>

      <label className="form-item">
        <input type="text" placeholder='Author' value={author} onChange={(event) => setAuthor(event.target.value)} />
      </label>

      <div className="form-item">
        <button>Add book</button>
      </div>
    </form>
  );
}
 
export default BookForm;