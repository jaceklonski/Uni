const books = require("./books.js").booksArray;

const result = books.reduce((acc, curr) => {
  const { title, genre, author } = curr;
  const ksiazka = { title, author };

  if (Array.isArray(genre)) {
    genre.forEach((element) => {
      if (!acc[element]) {
        acc[element] = [];
      }
      acc[element].push(ksiazka);
    });
  } else {
    if (!acc[genre]) {
      acc[genre] = [];
    }
    acc[genre].push(ksiazka);
  }
  return acc;
}, {});

console.dir(result, { depth: null });
console.log(result);

// Oczekiwany output
// {
//     'fantasy': [
//       { title: 'Lord of the Rings', author: 'J.R.R. Tolkien' },
//       { title: 'Harry Potter', author: 'J.K. Rowling' },
//       // ...
//     ],
//     'fiction': [
//       { title: 'The Borthers Karamazov', author: 'Fyodor Dostoyevsky' },
//       // ...
//     ],
//     // ...
//   }
