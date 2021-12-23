import React, { Component } from 'react';
import * as BooksAPI from '../utils/BooksAPI';

export default class Book extends Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    let book = this.props.book;
    BooksAPI.update(this.props.book, e.target.value).then((res) => {});
    // book.shelf = e.target.value;
    const obj = {
      shelfBef: this.props.book.shelf,
      shelfAft: e.target.value,
      book: book,
    };
    console.log(obj);
    this.setState({ value: e.target.value });
    this.props.updateBook(obj);
  };

  options = [
    {
      label: 'Move to...',
      value: 'move',
      disabled: 'disabled',
    },
    {
      label: 'Currently Reading',
      value: 'currentlyReading',
    },
    {
      label: 'Want to Read',
      value: 'wantToRead',
    },
    {
      label: 'Read',
      value: 'read',
    },
    {
      label: 'None',
      value: 'none',
    },
  ];

  componentDidMount() {
    if (!this.props.book.shelf) {
      console.log('call api to get status');
      BooksAPI.get(this.props.book.id).then((book) => {
        this.setState({ value: book.shelf });
      });
    }
    this.setState({ value: this.props.book.shelf });
  }
  render() {
    const book = this.props.book;
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: book.imageLinks
                  ? `url("${book.imageLinks.thumbnail}")`
                  : 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
              }}
            />
            <div className="book-shelf-changer">
              <select value={this.state.value} onChange={this.handleChange}>
                {this.options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors ? book.authors : 'No author'}
          </div>
        </div>
      </li>
    );
  }
}
