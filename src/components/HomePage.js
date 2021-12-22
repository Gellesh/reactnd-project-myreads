import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1> Home Page</h1>
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
