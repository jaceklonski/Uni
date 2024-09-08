// W poniższych zadaniach zostało przedstawione tworzenie obiektów na różne sposoby (czyli, jak osiągnąć to samo pisząc różny kod).

// W każdym poniższym obiekcie zdefiniuj
// - pola 'title' i 'author'
// - funkcję print(), która wypisze: "Autorem ... jest ..."


// !!! Przy deklaracji funkcji w obiektach _NIE_ używaj funkcji strzałkowych !!!



// ------------
// Sposób 1.
// ------------

const book1 = {
  title : 'a',
  author : 'b',
  print: function () {console.log(this.author, this.title)}
};

book1.print();



// ------------
// Sposób 2.
// ------------

const book2 = {};
book2.title = 'a'
book2.author = 'b'
book2.print = function () {console.log(this.author, this.title)}

book2.print();



// ------------
// Sposób 3.
// ------------

function createBook(title, author) {
  const b = {};
  b.title = title;
  b.author = author;
  b.print = function () {console.log(this.author, this.title)}
  return b
}

const book3 = createBook("Cień wiatru", "Carlos Ruiz Zafon");
const book4 = createBook("Ojciech Chrzestny", "Mario Puzo");

book3.print();
book4.print();



// ------------
// Sposób 4.
// ------------

// Stwórz funkcję Book tak, aby inicjalizowała pola author i title (użyj operatora this)

function Book(title, author) {
  return {title : title, author: author, print: function() {console.log(this.author, this.title)}}
}

const book5 = new Book("Ojciech Chrzestny", "Mario Puzo");

book5.readers = 0
book5.addReader = function () {this.readers++}
book5.printReaders = function (){console.log(this.readers)}

// Definiując obiekt w tym przypadku używamy słówka "new", co oznacza, że funkcja jest konstruktorem. Konstruktory ZAWSZE deklarujemy zaczynając nazwę od wielkiej litery. Przyjęło się konwencje, że nazwa powinna być nazwą obiektu, który tworzymy (w tym przypadku tworzymy książkę).


// Dopisz w tworzonym obiekcie:
// - pole readers, które będzie zawierało liczbę czytelników (na starcie przyjmujące wartość 0).
// - funkcję addReader, która inkrementuje pole readers (addReader powinna być funkcją wspólną, tak jak print)
// - funkcję printReaders wypisującą ilość czytelników

book5.printReaders();
book5.addReader();
book5.printReaders();



// ------------
// Sposób 5.
// ------------

// Tworzymy alternatywną wersję powyższego kodu. Użyj słów kluczowych class i constructor, aby osiągnąć ten sam powyższy efekt.
// Żeby nie zakomentowywać powyższego kodu, możesz nazwać klasę BookCreator

class BookCreator {
  constructor(title, author) {
    this.title = title
    this.author = author
    this.readers = 0
    this.printReaders = function () {console.log(this.readers)}
    this.addReader = function (){this.readers++}
  }
}

const book6 = new BookCreator("Ojciech Chrzestny", "Mario Puzo");

book6.printReaders();
book6.addReader();
book6.printReaders();

