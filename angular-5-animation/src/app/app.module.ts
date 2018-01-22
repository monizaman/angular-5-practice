import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AppRoutingModule }  from './app-routing.module';
import { BookComponent } from './book/book.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookService } from './book.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule 
    ],
  declarations: [ AppComponent, HelloComponent, BookComponent, AddbookComponent, BookDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BookService]
})
export class AppModule { }
