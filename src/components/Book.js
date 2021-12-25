import React, { Component } from 'react';
import * as BooksAPI from '../utils/BooksAPI';

const defaultImage =
  'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

export default class Book extends Component {
  state = {
    value: '',
  };

  is_mounted = false;

  handleChange = (e) => {
    let book = this.props.book;
    BooksAPI.update(this.props.book, e.target.value).then((res) => {});
    // book.shelf = e.target.value;
    const obj = {
      shelfBef: this.props.book.shelf,
      shelfAft: e.target.value,
      book: book,
    };
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
    this.is_mounted = true;
    if (!this.props.book.shelf) {
      BooksAPI.get(this.props.book.id).then((book) => {
        if (!this.is_mounted) return;
        this.setState({ value: book.shelf });
      });
    }
    this.setState({ value: this.props.book.shelf });
  }

  componentWillUnmount() {
    this.is_mounted = false;
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
                  : `url("${defaultImage}")`,
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
