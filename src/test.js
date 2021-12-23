const books = {
  currentlyReading: [
    {
      id: '74XNzF_al3MC',
      title: 'Lords of Finance',
      authors: '["Liaquat Ahamed"]',
      imageLinks: '{smallThumbnail: "http://books.google.com/books/con…}',
      shelf: 'currentlyReading',
    },
    {
      id: 'jAUODAAAQBAJ',
      title: 'Needful Things',
      authors: '["Stephen King"]',
      imageLinks: '{smallThumbnail: "http://books.google.com/books/con…}',
      shelf: 'currentlyReading',
    },
  ],
  read: [
    {
      id: 'IOejDAAAQBAJ',
      title: 'React',
      authors: '["Nils Hartmann", "Oliver Zeigermann"]',
      imageLinks: '{smallThumbnail: "http://books.google.com/books/con…}',
      shelf: 'read',
    },
    {
      id: '1wy49i-gQjIC',
      title: 'Satire TV',
      authors: '["Jonathan Gray", "Jeffrey P. Jones", "Ethan Thomps…]',
      imageLinks: '{smallThumbnail: "http://books.google.com/books/con…}',
      shelf: 'read',
    },
    {
      id: '2RIcAwAAQBAJ',
      title: 'Station Eleven',
      authors: '["Emily St. John Mandel"]',
      imageLinks: '{smallThumbnail: "http://books.google.com/books/con…}',
      shelf: 'read',
    },
  ],
  wantToRead: [
    {
      id: 'sJf1vQAACAAJ',
      title: 'Learning Web Development with React and Bootstrap',
      authors: '["Harmeet Singh", "Mehul Bhatt"]',
      imageLinks: '{smallThumbnail: "http://books.google.com/books/con…}',
      shelf: 'wantToRead',
    },
    {
      id: 'evuwdDLfAyYC',
      title: "The Cuckoo's Calling",
      authors: '["Robert Galbraith"]',
      imageLinks: '{smallThumbnail: "http://books.google.com/books/con…}',
      shelf: 'wantToRead',
    },
    {
      id: 'nggnmAEACAAJ',
      title: 'The Linux Command Line',
      authors: '["William E. Shotts, Jr."]',
      imageLinks: '{smallThumbnail: "http://books.google.com/books/con…}',
      shelf: 'wantToRead',
    },
  ],
};

const obj = {
  shelfBef: 'wantToRead',
  shelfAft: 'currentlyReading',
  book: {
    id: 'nggnmAEACAAJ',
    title: 'The Linux Command Line',
    authors: ['William E. Shotts, Jr.'],
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    },
    shelf: 'wantToRead',
  },
};

const temp = books[obj.shelfBef].filter((book) => {
  return obj.book.id !== book.id;
});

books[obj.shelfBef] = temp;
books[obj.shelfAft].push(obj.book);

console.log(books);
