import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router'; 

import { BookService } from '../book.service';
import { Book } from '../book';
import { ROUND_ANTICLOCK_ANIMATION }   from '../animations/round-anticlock.animation';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styles: [ ':host { position: absolute; top: 20%; left: 5%; border: 3px solid black; }' ],    
  animations: [ 
     ROUND_ANTICLOCK_ANIMATION
  ]
})
export class AddbookComponent {
  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in';
  book = new Book();
  constructor(private bookService: BookService, private router: Router) {
  }
  add() {
    this.bookService.addBook(this.book).then(
	 () => this.router.navigate(['/book'])
    );
  } 
}