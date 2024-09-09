// Zadanie 1. (4 pkt)
// Zaimplementuj poniższy scenariusz używając funkcji wbudowanych innych niż
// reduce.
// Napisz klasę Library, która będzie reprezentować bibliotekę książek. Klasa
// powinna mieć następujące właściwości:
// • books – tablica zawierająca obiekty reprezentujące książki. Każdy obiekt
// powinien mieć właściwości title (tytuł książki) i author (autor książki).
// Klasa powinna mieć następujące metody:
// • addBook(title, author) – metoda dodająca nową książkę
// do biblioteki. Metoda powinna przyjmować dwa argumenty: tytuł i autora
// nowej książki.
// • findBookByAuthor(author) – metoda wyszukująca wszystkie
// książki napisane przez danego autora. Metoda powinna przyjmować jeden
// argument - nazwisko autora - i zwracać tablicę zawierającą obiekty książek
// tego autora.
// • sortBooksByTitle() – metoda sortująca książki według tytułów
// w porządku alfabetycznym.
// • removeBook(title) – metoda usuwająca książkę z biblioteki
// na podstawie tytułu.
// Wszystkie metody powinny jedynie zwracać ewentualne dane. Jakiekolwiek
// wyświetlanie danych powinno odbywać się poza deklaracją metod.
// Następnie stwórz obiekty istniejące w Library i wywołaj wszystkie
// zadeklarowane metody.
// // Przykład działania
// // Dodawanie książek
// myLibrary.addBook('Harry Potter', 'J.K. Rowling');
// myLibrary.addBook('Lord of the Rings', 'J.R.R. Tolkien');
// myLibrary.addBook('The Great Gatsby', 'F. Scott Fitzgerald');
// // Wyszukiwanie książek po autorze
// myLibrary.findBookByAuthor('J.K. Rowling');
// // Sortowanie książek według tytułu
// myLibrary.sortBooksByTitle();
// // Usuwanie książki
// myLibrary.removeBook('Harry Potter');
// Uwaga! Aby rozwiązanie było kompletne oprócz implementacji metody powinno
// zawierać jej wywołanie!

class Library {
    constructor(){
        this.books = []
    }

    addBook(title, author){this.books.push({title: title, author: author})}

    findBookByAuthor(author){console.log(this.books.filter(a => a.author === author))}

    sortBooksByTitle(){
        this.books = this.books.sort((a,b) => {
            if (a.title > b.title) return 1
            if (a.title < b.title) return -1
            else return 0
        })
        
        console.log(this.books)}

    removeBook(title){this.books = this.books.filter(a => a.title != title)}

}

const myLibrary = new Library()

myLibrary.addBook('The Great Gatsby', 'F. Scott Fitzgerald');
myLibrary.addBook('Harry Potter', 'J.K. Rowling');
myLibrary.addBook('Lord of the Rings', 'J.R.R. Tolkien');
myLibrary.findBookByAuthor('J.K. Rowling');
myLibrary.sortBooksByTitle();
myLibrary.removeBook('Harry Potter');
myLibrary.findBookByAuthor('J.K. Rowling');