import React, { Component } from 'react';
import Book from './Book';

export default class BookShelf extends Component {
  handleUpdate = (book) => {
    // console.log(book);
    this.props.updateShelf(book);
  };
  render() {
    const { title, books } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <Book key={book.id} book={book} updateBook={this.handleUpdate} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
