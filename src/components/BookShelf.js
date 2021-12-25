import React from 'react';
import Book from './Book';

export default function BookShelf({ title, books, updateShelf }) {
  const handleUpdate = (book) => {
    // console.log(book);
    updateShelf(book);
  };
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} updateBook={handleUpdate} />
          ))}
        </ol>
      </div>
    </div>
  );
}
