import React, { Component } from 'react';
import SearchPage from './components/SearchPage';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class BooksApp extends Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
