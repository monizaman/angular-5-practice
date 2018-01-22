import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../book';
import { ON_OFF_1_ANIMATION }   from '../animations/on-off-1.animation';
import { ON_OFF_2_ANIMATION }   from '../animations/on-off-2.animation';
import { ON_OFF_3_ANIMATION }   from '../animations/on-off-3.animation';
import { ON_OFF_4_ANIMATION }   from '../animations/on-off-4.animation';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  animations: [ 
          ON_OFF_1_ANIMATION,
          ON_OFF_2_ANIMATION,
          ON_OFF_3_ANIMATION,
          ON_OFF_4_ANIMATION,
  ]
})
export class BookComponent implements OnInit {
 books: Promise<Book[]>
  constructor(private bookService: BookService) {
  }
  ngOnInit() {
     this.books = this.bookService.getBooks();
  }
  toggle(book: Book) {
     book.state =  (book.state === 'on') ? 'off' : 'on'; 
  }

}