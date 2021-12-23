const books = [
  {
    title: 'Drama',
    authors: ['Raina Telgemeier'],
    publisher: 'Scholastic Inc.',
    publishedDate: '2014-07-29',
    description:
      "From Raina Telgemeier, the #1 New York Times bestselling, multiple Eisner Award-winning author of Smile and Sisters! Callie loves theater. And while she would totally try out for her middle school's production of Moon over Mississippi, she can't really sing. Instead she's the set designer for the drama department's stage crew, and this year she's determined to create a set worthy of Broadway on a middle-school budget. But how can she, when she doesn't know much about carpentry, ticket sales are ...",

    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=1w4fAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=1w4fAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
  },

  {
    title: 'Comdey',
    authors: ['Raina gellesj'],
    publisher: 'Scholastic Inc.',
    publishedDate: '2014-07-29',
    description:
      "From Raina Telgemeier, the #1 New York Times bestselling, multiple Eisner Award-winning author of Smile and Sisters! Callie loves theater. And while she would totally try out for her middle school's production of Moon over Mississippi, she can't really sing. Instead she's the set designer for the drama department's stage crew, and this year she's determined to create a set worthy of Broadway on a middle-school budget. But how can she, when she doesn't know much about carpentry, ticket sales are ...",

    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=1w4fAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=1w4fAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    },
  },
];

const newBooks = books.map((book) => {
  const { title, authors, imageLinks } = book;
  return { title, authors, imageLinks };
});

console.log(newBooks);
