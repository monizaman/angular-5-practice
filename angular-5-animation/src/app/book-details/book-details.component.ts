import { Component, OnInit, HostBinding } from '@angular/core';
import { FLY_IN_OUT_ANIMATION }   from '../animations/fly-in-out.animation';

import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  templateUrl: './book-details.component.html',
  styles: [ ':host { position: absolute; top: 20%; left: 5%; border: 3px solid black; }' ],
  animations: [ 
    FLY_IN_OUT_ANIMATION
  ]
})
export class BookDetailsComponent implements OnInit {
  @HostBinding('@flyInOutTrigger') flyInOutTrigger = 'in';
  books: Promise<Book[]>
  constructor(private bookService: BookService) {
  }
  ngOnInit() {
     this.books = this.bookService.getBooks();
  }
}