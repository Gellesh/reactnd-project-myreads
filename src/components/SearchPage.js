import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import { debounce } from 'lodash';
import * as BooksAPI from '../utils/BooksAPI';

class SearchPage extends Component {
  state = {
    query: '',
    books: [],
  };

  componentDidMount() {
    this.getBooks = debounce(this.getBooks, 100);
  }
  handleUpdate = (book) => {
    // console.log(book);
  };

  // getBooks = debounce(this.updateQuery, 100);

  getBooks = () => {
    // fetch books for this API and update books
    const query = this.state.query;
    if (query !== '') {
      BooksAPI.search(query).then((results) => {
        if (results && !results.hasOwnProperty('error')) {
          const newBooks = Object.keys(results).map((book) => {
            const { id, title, authors, imageLinks } = results[book];
            return { id, title, authors, imageLinks };
          });

          // console.log(newBooks, 'query search book');
          this.setState({ books: newBooks });
        } else {
          // console.log('error in fetching books no found');

          this.setState({ books: [] });
        }
      });
    } else {
      this.setState({ books: [] });
    }
  };
  updateQuery = (query) => {
    // change input field
    this.setState({ query: query });
    // get books in case there is a query
    this.getBooks();
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          {
            <Link className="close-search" to="/">
              Close
            </Link>
          }
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.books.length > 0 && (
            <ol className="books-grid">
              {this.state.books.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  updateBook={this.handleUpdate}
                  // didMount={this.toogleMount}
                />
              ))}
            </ol>
          )}

          {this.state.books.length === 0 && (
            <div>
              <h1>
                {this.state.query.length === 0
                  ? 'Search to explore some books'
                  : 'No books are found please modify search keywords'}
              </h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchPage;
