import React, { useContext, useState, useRef } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { addBook } = useContext(BookContext)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
        
  const titleInputEl = useRef(null)

  const addBookOnSubmit = (event) => {
    event.preventDefault()

    if (!title) {
      return;
    }

    addBook(title, author)
    setTitle('')
    setAuthor('')
    titleInputEl.current.focus()
  }

  return (
    <form className="BookForm" onSubmit={addBookOnSubmit}>
      <label>
        <span>Title</span>
        <input type="text" ref={titleInputEl} value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>

      <label>
        <span>Author</span>
        <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
      </label>

      <button>Add book</button>
    </form>
  );
}
 
export default BookForm;