"use strict";

const { remove } = require("lodash");

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const ksiazka = { title: title, author: author };
    this.books.push(ksiazka);
  }

  print() {
    console.log(this.books);
  }

  findBookByAuthor(author) {
    return this.books.forEach((acc, obj) => {
      if (author === obj.author) {
        acc.push(obj);
      }
      return acc;
    }, []);
  }

  sortBooksByTitle() {
    return this.books.sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
    });
  }

  removeBook(title) {
    this.books = this.books.reduce((acc, obj) => {
      if (obj.title == title) {
        return acc;
      }
      acc.push(obj);
      return acc;
    }, []);
  }
}

const myLibrary = new Library();

myLibrary.addBook("Harry Potter", "J.K.Rowling");
myLibrary.addBook("LOTR", "J.R.R. Tolkien");
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald");

myLibrary.findBookByAuthor("J.K.Rowling");
myLibrary.sortBooksByTitle();
myLibrary.removeBook("Harry Potter");
