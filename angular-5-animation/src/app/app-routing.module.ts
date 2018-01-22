import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent }  from './book/book.component';
import { AddbookComponent }  from './addbook/addbook.component';
import { BookDetailsComponent }  from './book-details/book-details.component';

const routes: Routes = [
	{
	   path: 'book',
	   component: BookComponent,
	},
	{
	   path: 'add-book',
	   component: AddbookComponent
	},	
	{
	   path: 'book-detail',
	   component: BookDetailsComponent
	},	
	{
	   path: '',
	   redirectTo: '/book',
	   pathMatch: 'full'
	}	
];
@NgModule({
  imports: [ 
          RouterModule.forRoot(routes) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ }  