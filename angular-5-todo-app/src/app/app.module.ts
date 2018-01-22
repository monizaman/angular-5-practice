import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoService } from './to-do/to-do.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, ToDoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ToDoService]
})
export class AppModule { }
