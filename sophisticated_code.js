/* sophisticated_code.js */

// This code demonstrates a complex system for managing a digital library
// It consists of various classes and functions to handle library operations

class Library {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.books = [];
    this.patrons = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(bookID) {
    this.books = this.books.filter(book => book.id !== bookID);
  }

  addPatron(patron) {
    this.patrons.push(patron);
  }

  removePatron(patronID) {
    this.patrons = this.patrons.filter(patron => patron.id !== patronID);
  }

  displayBooks() {
    this.books.forEach(book => {
      console.log(`Title: ${book.title}, Author: ${book.author}, ID: ${book.id}`);
    });
  }

  displayPatrons() {
    this.patrons.forEach(patron => {
      console.log(`Name: ${patron.name}, ID: ${patron.id}`);
    });
  }
}

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

class Patron {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  borrowBook(bookID, library) {
    const book = library.books.find(book => book.id === bookID);
    if (book) {
      console.log(`${this.name} successfully borrowed "${book.title}"`);
    } else {
      console.log(`Book with ID ${bookID} not found in the library`);
    }
  }

  returnBook(bookID, library) {
    const book = library.books.find(book => book.id === bookID);
    if (book) {
      console.log(`${this.name} returned "${book.title}"`);
    } else {
      console.log(`Book with ID ${bookID} not found in the library`);
    }
  }
}

// Creating a library instance
const myLibrary = new Library("Virtual Library", "123 Main St");

// Adding books to the library
myLibrary.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", 1));
myLibrary.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 2));
myLibrary.addBook(new Book("1984", "George Orwell", 3));

// Adding patrons to the library
myLibrary.addPatron(new Patron("John Doe", 1));
myLibrary.addPatron(new Patron("Jane Smith", 2));

// Displaying all books in the library
myLibrary.displayBooks();

// John Doe borrows a book
myLibrary.patrons[0].borrowBook(1, myLibrary);

// Jane Smith returns a book
myLibrary.patrons[1].returnBook(1, myLibrary);

// Removing a book and a patron from the library
myLibrary.removeBook(2);
myLibrary.removePatron(1);

// Displaying all books and patrons after some changes
myLibrary.displayBooks();
myLibrary.displayPatrons();