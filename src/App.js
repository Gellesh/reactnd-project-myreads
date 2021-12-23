import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI';
import SearchPage from './components/SearchPage';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import './App.css';

class BooksApp extends Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
      </div>
    );
  }
}

export default BooksApp;
