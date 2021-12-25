# MyReads Project

MyReads is a single page react application which let you to organize your books libray through organize them into 3 main shelves Currently reading, Want to read, Read and it will let you to move your books between these shelves and add new ones using search page as you can search for new books and then add them to your shelve

## Project Structure

The project contains 2 main pages

1. Main page

- The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.
- The main page shows a control that allows users to move books between shelves.

2. Search Page

- The search page has a search input field.
- As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors
- Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.

The project contains 5 main components

1. Book

- Which represent book element

2. BookShelf

- Which contains list of book on each shelf

3. HomePage

- Which creates 3 book shelves and get data from server and update shelves

4. SearchPage

- Which contain search input and call search api and shows searched books

5. NotFound

- A component to handle invalid paths

## To run the project

- first clone or download this repo
- install all project dependencies with `npm install`
- start the server with `npm start`
- navigate and try app features

## Backend Server

### Udacity provided a backend server for the development of this project you can find various endpoints below

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
