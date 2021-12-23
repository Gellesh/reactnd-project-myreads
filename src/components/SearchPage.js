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

  componentWillMount() {
    this.getBooks = debounce(this.getBooks, 100);
  }

  // getBooks = debounce(this.updateQuery, 100);

  getBooks = () => {
    // fetch books for this API and update books
    console.log('query = ', this.state.query);
    BooksAPI.search(this.state.query).then((results) => {
      if (results && !results.hasOwnProperty('error')) {
        const newBooks = Object.keys(results).map((book) => {
          console.log('called API and return with ', results.length, ' books');
          const { id, title, authors, imageLinks } = results[book];
          return { id, title, authors, imageLinks };
        });

        // console.log(newBooks, 'query search book');
        this.setState({ books: newBooks });
      } else {
        console.log('error in fetching books no found');
        this.setState({ books: [] });
      }
    });
  };
  updateQuery = (query) => {
    // change input field
    this.setState({ query: query });
    // get books in case there is a query
    if (this.state.query !== '') {
      this.getBooks();
    }

    this.setState({ books: [] });
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
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
