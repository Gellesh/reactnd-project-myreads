import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';

class HomePage extends Component {
  state = {
    books: { currentlyReading: [], read: [], wantToRead: [] },
  };

  componentDidMount() {
    BooksAPI.getAll().then((result) => {
      let all_books = Object.keys(result).map((book) => {
        const { id, title, authors, imageLinks, shelf } = result[book];
        return { id, title, authors, imageLinks, shelf };
      });
      let books = { currentlyReading: [], read: [], wantToRead: [] };
      for (const book of all_books) {
        const { shelf } = book;
        books[shelf].push(book);
      }

      this.setState({ books: books });
    });
  }

  handleUpdate = (obj) => {
    console.log(obj);
    let newBooks = this.state.books;
    const temp = newBooks[obj.shelfBef].filter((book) => {
      return obj.book.id !== book.id;
    });

    const book = obj.book;
    book.shelf = obj.shelfAft;
    newBooks[obj.shelfBef] = temp;
    newBooks[obj.shelfAft].push(obj.book);
    this.setState({ books: newBooks });
  };
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div>
          <BookShelf
            title={'Currently Reading'}
            books={this.state.books.currentlyReading}
            updateShelf={this.handleUpdate}
          />
          <BookShelf
            title={'Want to Read'}
            books={this.state.books.wantToRead}
            updateShelf={this.handleUpdate}
          />
          <BookShelf
            title={'Read'}
            books={this.state.books.read}
            updateShelf={this.handleUpdate}
          />
        </div>

        <div className="open-search">
          <Link className="open-search" to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
