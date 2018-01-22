import { Injectable } from '@angular/core';
import { Book } from './book';

const BOOKS: Book[] = [
	{"id": 1, "name": "Java", "author": "Mahesh", "state": "off"},
	{"id": 2, "name": "Angular", "author": "Mahesh", "state": "off"},
	{"id": 3, "name": "Spring", "author": "Krishna", "state": "off"},
	{"id": 4, "name": "Hibernate", "author": "Krishna", "state": "off"}
];
let booksPromise = Promise.resolve(BOOKS);

@Injectable()
export class BookService { 
    getBooks(): Promise<Book[]> {
	   return booksPromise;
    }
    addBook(book: Book): Promise<Book> {
	  return this.getBooks()
	   .then(books => {
	       let maxIndex = books.length - 1;
	       let bookWithMaxIndex = books[maxIndex];
	       book.id = bookWithMaxIndex.id + 1;
	       book.state= 'off';
	       books.push(book);
	       return book;
	     }
	    );
    }	
}